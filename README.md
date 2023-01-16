LINK DO VÍDEO NO YOUTUBE: https://youtu.be/INUp4TFlG-4

<br />
<br />
<br />
<br />

<p align="center">Aplicação para o Desafio SHARENERGY 2023/01</p>

![Screenshot](./frontend/src/assets/screenshot-app.jpg)

<p align="center">Arquivo README.md e estrutura do código baseados no repositório open source <a href="https://github.com/taniarascia/takenote">Take Note</a></p>

## Features

- Tela de Login com token JWT e criptografia `bcrypt` da senha;
- Tela Home com lista de usuários da API Random User
- Tela Dogs com imagem de um Dog aleatório da API Random Dog
- Tela Cats com imagem de um gato associado a um status HTTP (API HTTP Cat)
- Tela Clients com um CRUD de clientes
- Banco de dados Mongo DB (apenas local)


## Instalação (Windows)

Siga os passos abaixo para compilar a aplicação localmente. Assumindo que já possua as seguintes versões instaladas em sua máquina:

- npm: v 6.14.13
- node: v 14.17.1

### 1. Frontend

Instale o `yarn` e em seguida as dependencias 

```

cd frontend
npm i -g yarn
yarn
yarn start

```
Agora a aplicação do frontend já deve estar rodando em seu navegador padrão!

### 2. Backend

Comece instalando o mongoDB localmente em sua máquina seguindo o [esse link do SO](https://stackoverflow.com/a/37548118/16855638),

<br />

Com o mongo rodando em sua máquina, crie um arquivo `.env` dentro da basta `./backend` e defina as seguintes variáveis de ambiente:

- DB_CONNECTION_STRING
- JWT_SECRET
- TOKEN_EXPIRE_TIME

No MongoCompass, crie as collections `users` e `clients` no banco a que o servidor está conectado. Crie o usuário default na collection `user` com as credenciais necessárias de username e senha.

<br />

Feito isso, instale as dependências do servidor com

```
cd backend
yarn
yarn dev

```

Usamos `nodemon` para compilar o servidor durante o desenvolvimento. 
 
Com o front e back rodando, conectado ao mongo rodando local, já deve estar tudo funcionando! (espero)

## Autor

- [Raphael Leivas](https://github.com/RaphaelLeivas)

## License

This project is open source and available under the [MIT License](LICENSE).
