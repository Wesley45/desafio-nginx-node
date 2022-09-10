# Desafio Nginx com NodeJS

<p align="center">
    <a href="#-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-como-executar">Como executar</a>
</p>

<br/>

## 💻 Sobre

O desafio consiste em apresentar uma mensagem na tela utilizando nginx com node.js.

Quando uma chamada for feita a aplicação, esta deverá salvar um registro no bando de dados (MySQL). Em seguida, a página deverá apresentar a mensagem Full Cycle Rocks!, logo abaixo uma lista com os registros do banco.

<br/>

## 🧪 Tecnologias

- [NodeJS](https://nodejs.org/en)
- [MySQL](https://www.mysql.com)
- [NGINX](https://www.nginx.com)
- [Docker](https://www.docker.com)

<br/>

## 🚀 Como executar

Clone o repositório

```bash
# Clone o repositório
$ git clone https://github.com/Wesley45/desafio-nginx-node.git

# Entre no repositório
$ cd desafio-nginx-node

# Iniciar o container
$ docker-compose up -d
```

O app estará disponível no seu browser pelo endereço http://localhost:8080.
