import express from 'express';
import { createReview, getReviewsByTourId, countReviewsByTourId, updateReview, deleteReview, getAllReviews } from '../controllers/reviewController';
import { initDB } from '../database';

const router = express.Router();
const dbPromise = initDB();

router.post('/', async (req, res) => {
    const db = await dbPromise;
    createReview(db, req, res);
});

router.get('/', async (req, res) => {
    const db = await dbPromise;
    getReviewsByTourId(db, req, res);
});

router.get('/all', async (req, res) => {
  const db = await dbPromise;
  getAllReviews(db, req, res);
});

router.get('/count', async (req, res) => {
    const db = await dbPromise;
    countReviewsByTourId(db, req, res);
});

router.put('/:id', async (req, res) => {
    const db = await dbPromise;
    updateReview(db, req, res);
});

router.delete('/:id', async (req, res) => {
    const db = await dbPromise;
    deleteReview(db, req, res);
});

export default router;
