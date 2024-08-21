import { Request, Response } from 'express';
import { Database } from 'sqlite';

export async function getAllTours(db: Database, _req: Request, res: Response) {
    try {
        const tours = await db.all('SELECT * FROM tour');
        res.json(tours);
    } catch (error) {
        res.status(500).json({ error: 'Error searching tour' });
    }
}

export async function getToursByDestinationId(db: Database, req: Request, res: Response) {
    try {
        const { destination_id } = req.params;
        const tours = await db.all('SELECT * FROM tour WHERE destination_id = ?', [destination_id]);
        res.json(tours);
    } catch (error) {
        res.status(500).json({ error: 'Error searching tour' });
    }
}

export async function createTour(db: Database, req: Request, res: Response) {
    try {
        const { destination_id, name, description, price, popularity, image_url } = req.body;
        const result = await db.run(
            `INSERT INTO tour (destination_id, name, description, price, popularity, image_url) 
            VALUES (?, ?, ?, ?, ?, ?)`,
            [destination_id, name, description, price, popularity, image_url]
        );
        res.status(201).json({ id: result.lastID });
    } catch (error) {
        res.status(500).json({ error: 'Error creating tour' });
    }
}

export async function updateTour(db: Database, req: Request, res: Response) {
    try {
        const { id } = req.params;
        const { destination_id, name, description, price, popularity, image_url } = req.body;

        const result = await db.run(
            `UPDATE tour SET destination_id = ?, name = ?, description = ?, price = ?, 
            popularity = ?, image_url = ? WHERE id = ?`,
            [destination_id, name, description, price, popularity, image_url, id]
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
