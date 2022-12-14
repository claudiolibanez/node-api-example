import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
  response.send('Hello World!');
});

const PORT = 3000;

app.listen(PORT || 3000, () => {
  console.log('🚀 Server started on port 3000');
});