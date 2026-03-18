---
title: construindo um plugin de saturacao vocal em c++
date: 2026-03-10
image: https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80
---

A saturação de áudio é uma das técnicas mais essenciais na produção musical. Ela adiciona calor, conteúdo harmônico e caráter às gravações. Neste tutorial, vamos construir um plugin básico de saturação vocal usando C++ e o framework JUCE.

## O que é Saturação?

Saturação ocorre quando você empurra um sinal além de sua faixa linear. Em vez de clipar abruptamente como uma distorção digital, a saturação analógica arredonda os picos, criando harmônicos agradáveis. É isso que dá aos equipamentos analógicos seu som "quente".

## Configurando o JUCE

Primeiro, crie um novo projeto de plugin de áudio usando o Projucer:

```bash
# Criar novo projeto de plugin
./Projucer --create newPlugin "VocalSat" /caminho/para/projetos/
```

Certifique-se de que seu projeto inclua os seguintes módulos:

- `juce_audio_basics`
- `juce_audio_devices`
- `juce_audio_formats`
- `juce_audio_processors`

## O Algoritmo de Saturação

Para um efeito de saturação simples, vamos usar uma função waveshaper. Aqui está uma implementação básica:

```cpp
float saturate(float input, float drive) {
    // Aplicar ganho de entrada (drive)
    float x = input * drive;

    // Soft clipping com tanh
    return std::tanh(x);
}
```

A função `tanh` comprime suavemente o sinal conforme ele se aproxima de ±1, criando aquele calor analógico.

## Criando o Processor do Plugin

```cpp
class VocalSatProcessor : public juce::AudioProcessor {
public:
    void processBlock(juce::AudioBuffer<float>& buffer,
                      juce::MidiBuffer&) override {
        for (int channel = 0; channel < buffer.getNumChannels(); ++channel) {
            auto* data = buffer.getWritePointer(channel);

            for (int i = 0; i < buffer.getNumSamples(); ++i) {
                float drive = *driveParam;
                data[i] = saturate(data[i], drive);
                data[i] *= 0.7f;
            }
        }
    }
};
```

## Adicionando Parâmetros

Vamos adicionar um knob de drive e controle de mix:

```cpp
VocalSatProcessor::VocalSatProcessor() {
    driveParam = new juce::AudioParameterFloat(
        "drive", "Drive", 1.0f, 20.0f, 2.0f);

    mixParam = new juce::AudioParameterFloat(
        "mix", "Mix", 0.0f, 1.0f, 1.0f);

    addParameter(driveParam);
    addParameter(mixParam);
}
```

## Próximos Passos

- Adicionar um filtro passa-alta antes da saturação
- Implementar saturação multi-banda
- Adicionar um parâmetro de "tone" para moldar os harmônicos

Boa programação!
