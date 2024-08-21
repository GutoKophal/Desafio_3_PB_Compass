import express from 'express'
import { getAllDestinations, getDestinationById, createDestination, updateDestination, deleteDestination } from '../controllers/destinationController'
import { initDB } from '../database'

const router = express.Router()
const dbPromise = initDB()

router.get('/', async (req, res) => {
    const db = await dbPromise
    getAllDestinations(db, req, res)
});

router.get('/:id', async (req, res) => {
    const db = await dbPromise
    getDestinationById(db, req, res)
});

router.post('/', async (req, res) => {
    const db = await dbPromise
    createDestination(db, req, res)
});

router.put('/:id', async (req, res) => {
    const db = await dbPromise
    updateDestination(db, req, res)
})

router.delete('/:id', async (req, res) => {
    const db = await dbPromise
    deleteDestination(db, req, res)
})

export default router