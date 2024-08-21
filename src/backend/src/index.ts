import express from 'express';
import { initDB } from './database';

const app = express();
const port = 3000;

app.use(express.json());

initDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
}).catch((error) => {
    console.error('Erro ao inicializar o banco de dados:', error);
});
