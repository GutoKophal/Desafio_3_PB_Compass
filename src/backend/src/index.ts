import express from 'express';
import { initDB } from './database';
import tourRoutes from './routes/tourRoutes';
import reviewRoutes from './routes/reviewRoutes';
import typeRoutes from './routes/typeRoutes';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/tours', tourRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/types', typeRoutes);

initDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
}).catch((error) => {
    console.error('Error connecting to the database:', error);
});
