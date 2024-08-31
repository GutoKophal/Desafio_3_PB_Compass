import { Request, Response } from 'express';
import { Database } from 'sqlite';

export async function createReview(db: Database, req: Request, res: Response) {
    try {
        const { idTour, user_name, user_email, date, services, locations, amenities, price_review, comfort, comment } = req.body;

        const result = await db.run(
            `INSERT INTO review (idTour, user_name, user_email, date, services, locations, amenities, price_review, comfort, comment)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [idTour, user_name, user_email, date, services, locations, amenities, price_review, comfort, comment]
        );

        res.status(201).json({ id: result.lastID });
    } catch (error) {
        console.error('Error creating review:', (error as Error).message);
        res.status(500).json({ error: 'Error creating review', details: (error as Error).message });
    }
}

export async function getReviewsByTourId(db: Database, req: Request, res: Response) {
    try {
        const { idTour } = req.query;
        const reviews = await db.all('SELECT * FROM review WHERE idTour = ?', [idTour]);
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving reviews' });
    }
}

export async function getAllReviews(db: Database, _req: Request, res: Response) {
    try {
        const reviews = await db.all('SELECT * FROM review');
        res.json(reviews);
    } catch (error) {
        console.error('Error retrieving all reviews:', (error as Error).message);
        res.status(500).json({ error: 'Error retrieving all reviews' });
    }
}

export async function countReviewsByTourId(db: Database, req: Request, res: Response) {
    try {
        const { idTour } = req.query;
        const count = await db.get('SELECT COUNT(*) as count FROM review WHERE idTour = ?', [idTour]);
        res.json({ count: count.count });
    } catch (error) {
        res.status(500).json({ error: 'Error counting reviews' });
    }
}

export async function updateReview(db: Database, req: Request, res: Response) {
    try {
        const { id } = req.params;
        const { idTour, user_name, user_email, date, services, locations, amenities, price_review, comfort, comment } = req.body;

        const result = await db.run(
            `UPDATE review SET idTour = ?, user_name = ?, user_email = ?, date = ?, services = ?, 
            locations = ?, amenities = ?, price_review = ?, comfort = ?, comment = ? WHERE id = ?`,
            [idTour, user_name, user_email, date, services, locations, amenities, price_review, comfort, comment, id]
        );

        if (result.changes === 0) {
            res.status(404).json({ error: 'Review not found' });
        } else {
            res.status(200).json({ message: 'Review updated successfully' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error updating review' });
    }
}

export async function deleteReview(db: Database, req: Request, res: Response) {
    try {
        const { id } = req.params;

        const result = await db.run(
            `DELETE FROM review WHERE id = ?`,
            [id]
        );

        if (result.changes === 0) {
            res.status(404).json({ error: 'Review not found' });
        } else {
            res.status(200).json({ message: 'Review deleted successfully' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error deleting review' });
    }
}
