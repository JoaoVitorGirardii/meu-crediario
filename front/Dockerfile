# Use a imagem oficial do Node.js versão 22.3.0
FROM node:22.4-alpine

# Crie o diretório de trabalho no contêiner
WORKDIR /front

# Copie o código fonte para o diretório de trabalho no contêiner
COPY . .

RUN npm install

# RUN npm run prisma:generate
# RUN npx prisma migrate dev

# Exponha a porta em que o servidor Node.js irá rodar (por exemplo, porta 3000)
EXPOSE 3000

# Comando padrão para executar a aplicação
CMD ["npm", "run", "dev"]
