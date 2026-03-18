---
title: primeiros passos com typescript
date: 2026-03-15
image: https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80
---

TypeScript é um poderoso superset do JavaScript que adiciona tipos estáticos à linguagem. Se você está construindo aplicações web modernas, TypeScript pode melhorar significativamente sua experiência de desenvolvimento e qualidade do código.

## Por que TypeScript?

JavaScript é dinamicamente tipado, o que significa que erros de tipo só aparecem em tempo de execução. TypeScript captura esses erros durante o desenvolvimento, tornando seu código mais confiável e fácil de manter.

## Configurando

Instale o TypeScript no seu projeto:

```bash
npm install -D typescript @types/node @types/react
npx tsc --init
```

## Tipos Básicos

```typescript
// Tipos primitivos
const nome: string = 'João';
const idade: number = 25;
const ativo: boolean = true;

// Arrays
const numeros: number[] = [1, 2, 3];

// Objetos
interface Usuario {
  nome: string;
  idade: number;
  email?: string;
}

const usuario: Usuario = {
  nome: 'João',
  idade: 25,
};
```

## Inferência de Tipos

TypeScript pode inferir tipos automaticamente:

```typescript
let mensagem = 'Olá'; // TypeScript sabe que isso é uma string
mensagem = 42; // Erro!
```

## Generics

Generics permitem criar componentes reutilizáveis:

```typescript
function identidade<T>(arg: T): T {
  return arg;
}

const resultado = identidade<string>('Olá');
```

## Próximos Passos

- Explore union types e intersection types
- Aprenda sobre utility types (Partial, Required, Pick, Omit)
- Pratique com projetos reais

TypeScript pode parecer desafiador no início, mas os benefícios valem a pena!
