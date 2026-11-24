# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally:

- Moradores de casas e apartamentos que querem o ar-condicionado funcionando sem dor de cabeça. Chegam com um sintoma (gela pouco, pinga, faz barulho, não liga) ou com um aparelho novo para instalar.
- Gestores de comércios e escritórios que precisam de manutenção periódica, contrato e PMOC, e de um fornecedor que explique o que fez.

The job in both cases: entender o que o aparelho tem e marcar uma visita com quem resolve.

## Product Purpose

Clima Certo faz limpeza e higienização, manutenção preventiva (inclusive PMOC), correção de gotejamento e ruído, conserto e diagnóstico, carga de gás e correção de vazamentos, e instalação de ar-condicionado split. O site existe para transformar um sintoma em um pedido de visita. Sucesso: o visitante reconhece o problema dele, entende qual serviço resolve, e envia o pedido pelo formulário (que abre o WhatsApp da empresa).

## Positioning

A empresa abre o aparelho e mostra o que está acontecendo antes de cobrar: diagnóstico primeiro, orçamento aprovado antes de trocar qualquer peça, teste final com o cliente. O site demonstra isso abrindo o aparelho peça por peça.

## Capabilities and Constraints

- Static HTML/CSS/JS on the scroll-craft engine (`scrollcraft.js` / `scrollcraft.css`, never edited per project). Served locally by the scroll-craft `serve.mjs`.
- The user's brief: while the visitor scrolls, the air conditioner opens part by part and each part explains a service; fully responsive; everything responds to the mouse scroll.
- The user found the first build "com muita cara de feito por IA" and the scroll and transitions "bruscos". Both must be fixed.
- Form sends to WhatsApp; the company number is not yet supplied (`WHATSAPP` constant in `site.js`).

## Brand Commitments

- Name: Clima Certo.
- Personality: técnica, honesta, calma. Like a good technician who explains what he is doing while he works. Little visual noise.
- Anti-reference (user-confirmed): the cliché "assistência técnica" site: blue and white, stock photography, snowflake icons, smiling technician.
- Anti-reference (user feedback on build 1): reads as AI-generated.

## Evidence on Hand

None supplied. No photos, logo, phone number, address, prices, customer count, years in business, certifications, testimonials or partner brands. None of these may be invented. The air conditioner is drawn (SVG), not photographed.

## Product Principles

1. Show the inside. The aparelho aberto is the explanation; copy names the part and the service, nothing more.
2. Diagnose before selling. Every service is framed by the symptom that calls for it.
3. Calm hand. Motion and tone are steady and unhurried; nothing jumps, nothing shouts.
4. Plain Portuguese. Technical terms only where the customer will hear them from the technician (serpentina, dreno, PMOC), each explained once.
