# Use a imagem oficial do Node.js versão 22.4-alpine
FROM node:22.4-alpine

# Crie o diretório de trabalho no contêiner
WORKDIR /front

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código fonte para o diretório de trabalho no contêiner
COPY . .

# Construa a aplicação Next.js para produção
RUN npm run build

# Exponha a porta em que o servidor Next.js irá rodar (por padrão, a porta 3000)
EXPOSE 3000

# Comando padrão para iniciar a aplicação em modo produção
CMD ["npm", "start"]
