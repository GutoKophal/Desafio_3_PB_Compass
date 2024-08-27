import { Request, Response } from 'express';
import { Database } from 'sqlite';

export async function getAllTours(db: Database, _req: Request, res: Response) {
    try {
        const tours = await db.all('SELECT * FROM tour');
        res.json(tours);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving tours' });
    }
}

export async function getTourById(db: Database, req: Request, res: Response) {
    try {
        const { id } = req.params;
        const tour = await db.get('SELECT * FROM tour WHERE id = ?', [id]);

        if (tour) {
            res.json(tour);
        } else {
            res.status(404).json({ error: 'Tour not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving tour' });
    }
}

export async function createTour(db: Database, req: Request, res: Response) {
    try {
        const { name, country, city, price, start_date, final_date, averageReview, duration, type_id } = req.body;

        const result = await db.run(
            `INSERT INTO tour (name, country, city, price, start_date, final_date, averageReview, duration, type_id) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [name, country, city, price, start_date, final_date, averageReview, duration, type_id]
        );

        res.status(201).json({ id: result.lastID });
    } catch (error) {
        console.error('Error creating tour:', error); 
        res.status(500).json({ error: 'Error creating tour' });
    }
}

export async function updateTour(db: Database, req: Request, res: Response) {
    try {
        const { id } = req.params;
        const { name, country, city, price, start_date, final_date, averageReview, duration } = req.body;

        const result = await db.run(
            `UPDATE tour SET name = ?, country = ?, city = ?, price = ?, start_date = ?, final_date = ?, 
            averageReview = ?, duration = ? WHERE id = ?`,
            [name, country, city, price, start_date, final_date, averageReview, duration, id]
        );

        if (result.changes === 0) {
            res.status(404).json({ error: 'Tour not found' });
        } else {
            res.status(200).json({ message: 'Tour updated successfully' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error updating tour' });
    }
}

export async function deleteTour(db: Database, req: Request, res: Response) {
    try {
        const { id } = req.params;

        const result = await db.run(
            `DELETE FROM tour WHERE id = ?`,
            [id]
        );

        if (result.changes === 0) {
            res.status(404).json({ error: 'Tour not found' });
        } else {
            res.status(200).json({ message: 'Tour deleted successfully' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error deleting tour' });
    }
}
