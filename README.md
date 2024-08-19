# Processo de inicialização

#### Iniciando

Clone o projeto

```bash
  git clone https://github.com/JoaoVitorGirardii/meu-crediario.git
```

Entre no diretório do projeto

```bash
  cd meu-crediario
```

acessar a pasta back, nela vai conter o arquivo ".env.exemple"
renomei esse arquivo apenas para .env 

#### inicialização do container

```bash
  docker-compose up --build
```

Container da API ficara disponivel na porta 3333

Container da Front-end ficara disponivel na porta 3000 aonde será posivel acesar o sistema


#### Extra

Por algum motivo não funcionou o comando para executar a migration dos dados automaticamente para isso será nesessario acesar o container do backend e executar alguns comando.

```bash
  npx prisma migrate dev
```

```bash
  npx prisma db seed
```

ele ira executar criar e criar a base de acordo com as migrations criadas no prisma

OBS: caso não crie o banco meucrediario criar ele manualmente e executar novamente o comando


com isso ja sera possivel acessar o sistema por http://localhost:3000

![image](https://github.com/user-attachments/assets/941db926-dccd-4a85-8e21-c501a9477005)
