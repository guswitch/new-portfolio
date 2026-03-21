---
title: web scraping em tempo real com puppeteer e socket.io
date: 2026-03-20
image: https://res.cloudinary.com/diue9zngc/image/upload/f_auto,q_auto/ChatGPT_Image_20_de_mar._de_2026_20_11_03_x9mflo
---

tive que resolver um problema em que os dados de máquinas de ressonância magnética estavam disponíveis apenas dentro de uma interface web fechada.

não havia api, documentação ou qualquer forma oficial de acesso.

a única alternativa era acessar a interface como um usuário e extrair os dados diretamente da página.

---

## como eu resolvi

a solução foi baseada em três pilares principais:

- puppeteer para acessar e extrair os dados
- node.js para processar as informações
- socket.io para distribuir os dados em tempo real para o frontend

---

## scraping com puppeteer (o core)

o puppeteer permite controlar um navegador via código, possibilitando interações com a página como se fosse um usuário.

foi assim que eu implementei a base do scraping:

```js
const puppeteer = require('puppeteer');

async function getData() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('URL_DA_PLATAFORMA');

  await page.waitForSelector('.selector-que-tem-os-dados');

  const data = await page.evaluate(() => {
    // aqui você acessa o DOM como se fosse frontend
    return Array.from(document.querySelectorAll('.item')).map((el) => ({
      name: el.querySelector('.name')?.innerText,
      status: el.querySelector('.status')?.innerText,
    }));
  });

  await browser.close();

  return data;
}
```

pontos importantes dessa abordagem:

- `evaluate` executa dentro do contexto do navegador
- os dados são extraídos do DOM já renderizado
- funciona bem com aplicações SPA e conteúdo carregado via ajax

---

## loop em tempo real (sem websocket na origem)

como a fonte não fornecia dados em tempo real, foi necessário simular esse comportamento.

basicamente, um loop de execução:

```js
setInterval(async () => {
  const data = await getData();

  // aqui entra o diff
  processData(data);
}, 5000);
```

esse é o ponto central do sistema.

não basta apenas coletar os dados, é necessário:

- comparar com o estado anterior
- detectar mudanças
- decidir quando emitir atualizações

---

## backend com socket.io

o backend foi responsável por orquestrar o fluxo de dados.

o socket.io foi utilizado para enviar atualizações ao frontend em tempo real, sem necessidade de refresh.

estrutura básica:

```js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('client conectado');

  socket.on('disconnect', () => {
    console.log('client saiu');
  });
});
```

quando há mudança nos dados:

```js
io.emit('machines:update', data);
```

---

## integrando scraping + socket

foi implementado um controle simples de estado para evitar emissões desnecessárias:

```js
let lastState = [];

function processData(newData) {
  if (JSON.stringify(newData) !== JSON.stringify(lastState)) {
    lastState = newData;

    io.emit('machines:update', newData);
  }
}
```

é uma abordagem simples, mas funcional para esse tipo de cenário.

---

## frontend (react)

no frontend, a aplicação apenas escuta os eventos do socket e atualiza o estado da interface:

```js
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

export default function Home() {
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    socket.on('machines:update', (data) => {
      setMachines(data);
    });
  }, []);

  return (
    <div>
      {machines.map((m, i) => (
        <div key={i}>
          <p>{m.name}</p>
          <p>{m.status}</p>
        </div>
      ))}
    </div>
  );
}
```

---

## notificações (o detalhe que muda tudo)

um ponto importante foi evitar notificações excessivas.

foi necessário garantir que apenas mudanças reais de estado gerassem eventos:

```js
if (machine.status !== prev.status) {
  notify(machine);
}
```

---

## problemas reais que enfrentei

alguns desafios comuns nesse tipo de abordagem:

- mudanças no layout da página podem quebrar o scraping
- delays de carregamento podem gerar inconsistências
- scraping muito frequente pode levar a bloqueios
- dados podem vir incompletos

scraping não é uma solução confiável por padrão — ele precisa ser tratado como tal.

---

## como fazer direito

para tornar o sistema mais robusto:

- utilizar `waitForSelector` sempre que possível
- evitar dependência de classes dinâmicas
- implementar mecanismos de retry
- validar os dados antes de emitir
- não assumir que o scraping é 100% confiável

---

## no fim

essa abordagem permitiu criar uma camada de dados onde não existia:

- leitura de dados a partir de uma interface fechada
- transformação em uma estrutura consumível
- distribuição em tempo real para o frontend

---

## repos

- backend: https://github.com/guswitch/digitalhealth-backend
- frontend: https://github.com/guswitch/digitalhealth-app
