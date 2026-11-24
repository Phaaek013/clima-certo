# Clima Certo · BRIEF

Self-authored under the user's direct brief (no interview round). The user's
own words, verbatim:

> "crie o site da Clima Certo: enquanto a pessoa rola, o ar-condicionado se abre
> por partes e cada parte explica um serviço, além disso quero que o site seja
> totalmente responsivo, e que tudo interaja com o scroll do mouse."

Everything below that is not in that sentence is an authored decision.

## The eight topics

1. **Vibe:** técnico, limpo, frio, confiável. Referências: desenho explodido de
   manual de fábrica; a vitrine de uma oficina bem organizada.
2. **Journey (authored):** o aparelho funcionando → o aparelho dando problema →
   o aparelho aberto peça por peça (um serviço por peça) → remontado e gelando →
   como é a visita → agendar.
3. **Energy:** calmo no topo, tensão curta nos sintomas, o pico no desmonte,
   calmo e prático no fim.
4. **Feeling + the ONE moment:** ver o split se abrir sob a própria mão, peça por
   peça, e se fechar de novo funcionando.
5. **What no other site does:** o próprio aparelho é o menu de serviços.
6. **Range:** premium-minimal técnico, escuro e frio.
7. **One world or scenes:** um único objeto contínuo (o split) que atravessa as
   seções, sem vídeo. Não é worldflight: as seções continuam existindo.
8. **Assets:** nenhum. O aparelho é desenhado em SVG e montado em camadas 3D
   com CSS. Sem geração de imagem, sem custo.

## Feeling curve

| Act | Feeling | What causes it |
|---|---|---|
| Hero | alívio, frescor | o split sopra ar frio que acelera com o scroll |
| Sintomas | incômodo reconhecido | o mesmo aparelho pinga, vibra e esquenta (brilho quente) |
| Desmonte (PEAK) | curiosidade, controle | a mão abre o aparelho; cada peça avança e explica um serviço |
| Remontagem | resolução | as peças voltam e o ar volta a sair |
| A visita | segurança | trilho lateral com os passos de uma visita |
| Agendar | decisão fácil | o visor do aparelho cai de 28° para 22° enquanto o formulário chega |

**Peak:** "Você rola e o ar-condicionado se desmonta na sua frente, cada peça
mostrando um serviço." Lives in the teardown act (span 8, the largest).

**Tell-someone sentence:** "It's the site where you open the air conditioner
with your scroll wheel and every part tells you what they fix."

**Authored silence:** none.

## Score

| Beat | Device | Why |
|---|---|---|
| Funcionando | `pin` + parallax planes + kinetic | o objeto aparece com profundidade, ar em primeiro plano |
| Sintomas | `flow` + `in` | leitura rápida; o aparelho muda de estado ao lado |
| Desmonte | `pin` + bespoke 3D exploded view (signature) | o pico |
| A visita | `pan` + tilt | sequência lateral de passos |
| Agendar | `flow` + spotlight + magnet | o fim responde ao ponteiro e resolve com o formulário |

Signature move: the persistent 3D split unit (fixed rig) whose state is a pure
function of scroll: airflow in the hero, failure in the symptoms, exploded view
by service in the peak, reassembly at the end of the peak.

## Honesty rules

No statistics, no prices, no phone numbers, no addresses, no brand partners:
none were supplied. The WhatsApp number in `site.js` is empty until the owner
fills it in.
