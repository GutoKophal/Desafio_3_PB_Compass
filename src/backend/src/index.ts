import express from 'express'
import { initDB } from './database'
import destinationRoutes from './routes/destinationRoutes'
import tourRoutes from './routes/tourRoutes'

const app = express()
const port = 3000

app.use(express.json())

app.use('/api/destinations', destinationRoutes)
app.use('/api/tours', tourRoutes)

initDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`)
    });
}).catch((error) => {
    console.error('Error connecting to database:', error)
})
