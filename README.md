# Clima Certo

Site da Clima Certo: limpeza, manutenção, conserto, carga de gás e instalação de ar-condicionado split.

Enquanto a pessoa rola a página, o aparelho se abre peça por peça e cada peça explica um serviço. O visual é o de um anúncio de revista dos anos 50 e 60, com o aparelho desenhado em corte.

## Como rodar no computador

O site é HTML, CSS e JavaScript puros, sem etapa de build. Sirva a pasta com qualquer servidor estático, por exemplo:

```bash
npx serve .
```

Abrir o `index.html` direto do disco também funciona, mas um servidor local é o jeito mais fiel de testar.

## Antes de publicar para clientes

Preencha o número de WhatsApp que recebe os pedidos em `site.js`:

```js
var WHATSAPP = '5511999999999'; // DDI + DDD + número, só dígitos
```

Enquanto estiver vazio, o cupom monta o pedido e avisa que falta configurar o número.

## Estrutura

| Arquivo | O que é |
|---|---|
| `index.html` | A página |
| `site.css` | O visual da Clima Certo |
| `site.js` | O aparelho comandado pelo scroll, a linha de cobre e os cupons |
| `scrollcraft.js`, `scrollcraft.css` | Motor de scroll da skill scroll-craft (não editar) |
| `lenis.css` | Estilos do Lenis; o script do Lenis (scroll suave) vem do jsDelivr |
| `fonts/` | League Gothic, Yellowtail e Libre Franklin, com as licenças |
| `docs/` | `PRODUCT.md` (perfil da marca), `DESIGN.md` (sistema visual) e `BRIEF.md` |

## Créditos e licenças

- Motor de scroll: [scroll-craft](https://github.com/nateherkai/scroll-craft), licença MIT, ver `LICENSE-scrollcraft.txt`.
- Scroll suave: [Lenis](https://github.com/darkroomengineering/lenis), licença MIT.
- Fontes: League Gothic e Libre Franklin (SIL Open Font License 1.1), Yellowtail (Apache 2.0). As licenças estão em `fonts/`.
