import express from 'express';
import { routers } from './routes';
import cors from 'cors';

const app = express();
const PORT = 3333;

app.use(cors({origin:"*"}));
app.use(express.json());
app.use(routers)

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});