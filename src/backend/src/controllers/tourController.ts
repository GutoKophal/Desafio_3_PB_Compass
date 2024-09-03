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

        if (!tour) {
            res.status(404).json({ error: 'Tour not found' });
        } else {
            res.json(tour);
        }
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving the tour' });
    }
}

export async function createTour(db: Database, req: Request, res: Response) {
    try {
        const { name, country, city, price, start_date, final_date, averageReview, duration, max_people, latitude, longitude, minAge, image_url, type_id } = req.body;

        const result = await db.run(
            `INSERT INTO tour (name, country, city, price, start_date, final_date, averageReview, duration, max_people, latitude, longitude, minAge, image_url, type_id) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [name, country, city, price, start_date, final_date, averageReview, duration, max_people, latitude, longitude, minAge, image_url, type_id]
        );

        res.status(201).json({ id: result.lastID });
    } catch (error) {
        res.status(500).json({ error: 'Error creating tour' });
    }
}

export async function updateTour(db: Database, req: Request, res: Response) {
    try {
        const { id } = req.params;
        const { name, country, city, price, start_date, final_date, averageReview, duration, max_people, latitude, longitude, minAge, image_url, type_id } = req.body;

        const result = await db.run(
            `UPDATE tour SET name = ?, country = ?, city = ?, price = ?, start_date = ?, final_date = ?, averageReview = ?, duration = ?, max_people = ?, latitude = ?, longitude = ?, minAge = ?, image_url = ?, type_id = ? WHERE id = ?`,
            [name, country, city, price, start_date, final_date, averageReview, duration, max_people, latitude, longitude, minAge, image_url, type_id, id]
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
