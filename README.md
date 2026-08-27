# Borsul — Site institucional

Site estático (HTML5 + CSS3 + JavaScript vanilla, sem frameworks) para a Borsul — Borrachas & Micronização.

## Estrutura

```
index.html                     → Home
empresa/index.html             → Institucional
reciclagem-de-borracha/        → Página de solução (SEO)
micronizacao-de-borracha/      → Página de solução (SEO)
materiais/index.html           → Materiais reaproveitados
aplicacoes/index.html          → Setores atendidos
sustentabilidade/index.html    → Posicionamento ambiental
coleta/index.html              → Coleta industrial
contato/index.html             → Contato + formulário
blog/index.html                → Blog (estrutura inicial)
assets/css/style.css           → Design system e estilos
assets/js/main.js              → Menu mobile, header sticky, reveal on scroll, formulário
assets/images/                 → Pasta para as imagens reais (ver abaixo)
robots.txt / sitemap.xml       → SEO técnico
```

## Antes de publicar

1. **Logo**: salve o arquivo oficial em `assets/images/logo.png`. Em cada página, o cabeçalho já traz um
   comentário HTML (`<!-- Quando o logotipo oficial estiver disponível... -->`) indicando exatamente onde
   trocar o `<span class="brand-name">` por `<img src=".../assets/images/logo.png" ...>`.
2. **Fotografias**: todos os blocos com a classe `.media-placeholder` marcam onde entra uma foto real.
   Cada um tem um comentário HTML logo acima (`<!-- Substituir por fotografia... -->`) explicando o que
   fotografar. Nomes sugeridos: `hero-borsul.webp`, `fabrica-borsul.webp`, `reciclagem-borracha.webp`,
   `micronizacao-borracha.webp`, `po-borracha.webp`, `luvas-epi-latex.webp`, `baloes-latex.webp`,
   `luvas-cirurgicas.webp`, `aparas-borracha.webp`, `sustentabilidade.webp`. Os textos visíveis ao usuário
   não expõem mais avisos de "imagem a substituir" — a troca é só de dev, guiada pelos comentários.
3. **Dados a confirmar com a Borsul**: a especificação de granulometria do pó de borracha e a cobertura
   geográfica detalhada da coleta industrial não foram fornecidas no briefing. O texto atual foi escrito
   para ficar correto e publicável sem esses dados (evita afirmações específicas não confirmadas); quando
   a Borsul fornecer os números, é possível enriquecer as páginas de micronização e coleta com detalhes
   técnicos adicionais.
4. **Formulário de contato**: funciona no navegador (validação, feedback e fallback via `mailto:` com a
   mensagem pré-preenchida). Para envio automático sem depender do cliente de e-mail do usuário, integrar
   com um serviço de formulários (ex.: Formspree, Web3Forms) ou backend próprio — trocar o bloco de submit
   em `assets/js/main.js`.
5. **Domínio**: as tags canonical, Open Graph e o sitemap.xml usam `https://www.borsul.com.br/` como
   referência — ajuste se o domínio real for diferente.

## Publicação

O site é 100% estático — pode ser hospedado em qualquer serviço simples (Vercel, Netlify, GitHub Pages,
ou um servidor Apache/Nginx tradicional). Basta fazer upload de toda a pasta mantendo a estrutura acima.
