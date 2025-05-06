
# 💈 Barber API (Projeto em construção)

API RESTful sendo desenvolvida junto ao curso do Matheus Fraga. Tem o propósito de ser o backend de um sistema web completo para gerenciar o fluxo de uma barbearia, com foco na **recepção e atendimento ao cliente**. Este sistema oferece autenticação via JWT e funcionalidades completas de CRUD para:

- ✂️ Barbearias
- 💇‍♂️ Cortes
- 📋 Serviços Realizados

---

## 🚀 Tecnologias Utilizadas

- **Node.js** + **Express**
- **TypeScript**
- **Prisma ORM**
- **JWT** para autenticação
- **BcryptJS** para hash de senhas
- **MySQL** (dependendo do ambiente)
- **ts-node-dev** para desenvolvimento

---

## 📁 Estrutura de Pastas

```
src/
│
├── controllers/     # Lógica de controle das rotas
├── middlewares/     # Middlewares (auth, error handling, etc)
├── models/          # Definição dos modelos (Prisma)
├── routes/          # Definição das rotas REST
├── services/        # Lógica de negócio
├── utils/           # Funções utilitárias
└── server.ts        # Ponto de entrada da aplicação
```

---

## 🔐 Autenticação

A autenticação é feita via **JWT**. Após realizar o login, o cliente deve enviar o token no header `Authorization`:

```
Authorization: Bearer <seu-token>
```

---

## 📦 Instalação

```bash
git clone https://github.com/seu-usuario/barber.git
cd barber
npm install
```

### 🧪 Executar em modo de desenvolvimento:

```bash
npm run dev
```

> Certifique-se de configurar o arquivo `.env` com suas variáveis, incluindo:
> - `DATABASE_URL`
> - `JWT_SECRET`

---

## 🧰 Funcionalidades

### ✅ Login & Autenticação
- Registro de usuários (usuários administradores do sistema)
- Login com e-mail e senha
- Autenticação protegida via middleware

### 🏢 CRUD de Barbearias
- Criar, listar, editar e remover barbearias

### 💇 CRUD de Cortes
- Tipos de corte disponíveis
- Preço e tempo estimado

### 📋 Serviços Realizados
- Registrar serviços feitos para clientes
- Associar corte, barbeiro e data

---