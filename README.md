# 🤖 Job Discord Bot

![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js
) ![Docker](https://img.shields.io/badge/Docker-Ready-blue?logo=docker) ![Status](https://img.shields.io/badge/Status-Production-success) 




Bot desenvolvido em **Node.js** para buscar automaticamente novas vagas em plataformas de freelancers e enviar notificações para um canal do Discord via Webhook.

Projeto finalizado ✅ e pronto para execução contínua com Docker.

---

# 🚀 Funcionalidades

- 🔎 Scraping automático de projetos
- 🌐 Renderização de páginas dinâmicas com Puppeteer
- 📤 Envio automático para Webhook do Discord
- ⏱ Execução recorrente com cron
- 🐳 Containerizado com Docker
- 🔐 Configuração via variáveis de ambiente (.env)

---

# 🛠 Tecnologias Utilizadas

- Node.js
- Puppeteer
- Axios
- Dotenv
- node-cron
- Docker

---

# 📂 Estrutura do Projeto

src/
 ├── models/
 
 │    └── jobModel.js
 
 ├── scraper/
 
 │    └── freelasScraper.js
 
 ├── services/
 
 │    └── discordService.js
 
 ├── utils/
 
 │    └── utils.js
 
 ├── app.js
 
 └── cron.js
 

 ---
### 📌 Responsabilidades

- **models/** → Estruturas de dados
- **scraper/** → Lógica de scraping
- **services/** → Integrações externas (Discord)
- **utils/** → Funções auxiliares
- **app.js** → Fluxo principal
- **cron.js** → Agendamento automático

---

# ⚙️ Como rodar

### 1️⃣ Clone o repositório

```bash
git clone <url-do-repositorio>
cd job-discord-bot
```
---
### 2️⃣ Instale as dependências

```bash
npm install
```
---
### 3️⃣ Configure o .env

Crie um arquivo .env na raiz do projeto:

```bash
DISCORD_WEBHOOK=seu_webhook_aqui
NINENINEFREELANCE_URL=https://www.99freelas.com.br/projects?categoria=web-mobile-e-software
NINENINEFREELANCE_IMG=url_da_imagem
WORKANA_URL=https://www.workana.com/pt/jobs?category=it-programming&language=pt
WORKANA_IMG=url_da_imagem
```
---
### ▶️ Rodando Localmente

```bash
node src/index.js
```
O bot iniciará e executará automaticamente conforme o agendamento definido no cron, todos os dias **12h**.

---

## 🐳 Rodando com Docker

### 1️⃣ Build da imagem

```bash
docker build -t job-bot-discord .
```
### 2️⃣ Executar container

```bash
docker run -d \
  --name job-bot-discord \
  --restart unless-stopped \
  --env-file .env \
  job-bot-discord
```
### 🔄 Executar com Docker Compose
```bash
docker-compose up -d --build
```
---

### 📌 Como funciona

O cron agenda execuções periódicas.

O Puppeteer acessa as páginas.

Os projetos são extraídos.

O bot envia as novas vagas para o Discord via webhook.

---

### 📊 Status

✅ Concluído
