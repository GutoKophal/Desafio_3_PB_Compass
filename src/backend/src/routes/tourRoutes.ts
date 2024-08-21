import express from 'express'
import { getAllTours, getToursByDestinationId, createTour, updateTour, deleteTour } from '../controllers/tourController'
import { initDB } from '../database'

const router = express.Router()
const dbPromise = initDB()

router.get('/', async (req, res) => {
    const db = await dbPromise
    getAllTours(db, req, res)
});

router.get('/destination/:destination_id', async (req, res) => {
    const db = await dbPromise
    getToursByDestinationId(db, req, res)
});

router.post('/', async (req, res) => {
    const db = await dbPromise
    createTour(db, req, res)
});

router.put('/:id', async (req, res) => {
    const db = await dbPromise
    updateTour(db, req, res)
});

router.delete('/:id', async (req, res) => {
    const db = await dbPromise
    deleteTour(db, req, res)
});

export default router
