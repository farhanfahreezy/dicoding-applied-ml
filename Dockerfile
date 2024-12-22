FROM node:18.17.1
WORKDIR /app
ENV PORT 3000
ENV MODEL_URL 'https://storage.googleapis.com/bublububulubulu/model.json'
ENV PROJECT_ID 'submissionmlgc-mohammadfarhanf'
ENV DATABASE_ID 'blubulubulubulu'
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "run", "start"]
