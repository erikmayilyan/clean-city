import express from 'express';
import cors from 'cors'; 
import routes from './routes/mail.js';
import dbConfig from './config/dbConfig.js';
import 'dotenv/config';

const app = express();
const port = 4000;

app.use(express.json()); 
app.use(cors()); 
app.use("/api", routes);

console.log(process.env.MONGO_URL);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
