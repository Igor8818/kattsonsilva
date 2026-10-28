# Dr. Kattson Silva — Advocacia & Consultoria Jurídica

Site institucional desenvolvido em **React + Vite + Tailwind CSS** para o advogado **Dr. Kattson Silva** (Kattson Danesse Barbosa da Silva — OAB/BA 47.242) e a banca **Kattson Silva Advogados Associados** ([@kattsonsilva.advocacia](https://www.instagram.com/kattsonsilva.advocacia/)).

## Perfil Profissional
- **Sócio-Fundador:** Dr. Kattson Silva (OAB/BA 47.242)
- **Formação:** Graduado em Direito pela **UNIME Itabuna** (2010–2015), Pós-Graduado em Direito do Trabalho, Cível e Previdenciário pela **CESUPI / Faculdade de Ilhéus** (2016–2018) e Pós-Graduado em Prática Trabalhista Avançada pelo **Instituto IMADEC** (340h).
- **Atuação:** Direito do Trabalho & Dano Moral Trabalhista, Direito Previdenciário & Aposentadorias, Direito Cível & Contratos, Direito do Consumidor.
- **Currículo Lattes (CNPq):** [http://lattes.cnpq.br/0386822377510664](http://lattes.cnpq.br/0386822377510664) (ID: `0386822377510664`)
- **Instagram Oficial:** [@kattsonsilva.advocacia](https://www.instagram.com/kattsonsilva.advocacia/)

## Estrutura do Projeto

```text
kattsonsilva/
├── public/
│   └── images/
│       ├── kattson-silva-hero.jpg   # Retrato executivo oficial do Dr. Kattson Silva
│       └── kattson-silva.jpg        # Foto de perfil
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Navegação fixa com link WhatsApp e menu mobile
│   │   ├── HeroSection.jsx          # Seção principal com selo circular giratório e métricas
│   │   ├── AreasSection.jsx         # 4 especialidades com modal interativo de leitura
│   │   ├── TeamSection.jsx          # Apresentação da equipe jurídica multidisciplinar
│   │   ├── AboutSection.jsx         # Perfil acadêmico e abas do Lattes CNPq
│   │   ├── ArticlesSection.jsx      # Produção jurídica e modal de leitura de artigos
│   │   ├── ContactSection.jsx       # Formulário direcionado ao WhatsApp corporativo
│   │   ├── Footer.jsx               # Rodapé institucional em conformidade OAB
│   │   └── Icons.jsx                # SVGs otimizados
│   ├── data/
│   │   └── siteData.js              # Informações estruturadas e textos institucionais
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Como executar localmente

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev
```
