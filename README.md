# Processo de Inicialização

#### Iniciando

Clone o projeto:

```bash
git clone https://github.com/JoaoVitorGirardii/meu-crediario.git
```

Entre no diretório do projeto:

```bash
  cd meu-crediario
```

Acesse a pasta back. Nela, você encontrará o arquivo .env.example. Renomeie este arquivo para .env.

#### Inicialização do Container

```bash
  docker-compose up --build
```

O container da API ficará disponível na porta 3333.

O container do Front-end ficará disponível na porta 3000, onde será possível acessar o sistema.

### Extra

Por algum motivo, o comando para executar a migração dos dados automaticamente não funcionou. Portanto, será necessário acessar o container do backend e executar alguns comandos.

```bash
  npx prisma migrate dev
```

```bash
  npx prisma db seed
```

Esses comandos criarão a base de dados de acordo com as migrations criadas no Prisma.

Com isso, já será possível acessar o sistema por http://localhost:3000.

![image](https://github.com/user-attachments/assets/941db926-dccd-4a85-8e21-c501a9477005)

## Stack utilizada

**Front-end:** React, Next.js, TailwindCSS, Shadcn, Typescript

**Back-end:** Node, Express, Typescript

