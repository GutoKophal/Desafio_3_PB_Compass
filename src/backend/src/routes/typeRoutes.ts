import express from 'express';
import { getAllTypes, createType, updateType, deleteType } from '../controllers/typeController';
import { initDB } from '../database';

const router = express.Router();
const dbPromise = initDB();
    
router.get('/', async (req, res) => {
    const db = await dbPromise;
    getAllTypes(db, req, res);
});

router.post('/', async (req, res) => {
    const db = await dbPromise;
    createType(db, req, res);
});

router.put('/:id', async (req, res) => {
    const db = await dbPromise;
    updateType(db, req, res);
});

router.delete('/:id', async (req, res) => {
    const db = await dbPromise;
    deleteType(db, req, res);
});

export default router;
