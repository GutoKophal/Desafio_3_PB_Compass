import { Request, Response } from 'express';
import { Database } from 'sqlite';

export async function getAllDestinations(db: Database, _req: Request, res: Response) {
    try {
        const destinations = await db.all('SELECT * FROM destination');
        res.json(destinations);
    } catch (error) {
        res.status(500).json({ error: 'Error searching destinations' });
    }
}

export async function getDestinationById(db: Database, req: Request, res: Response) {
    try {
        const { id } = req.params;
        const destination = await db.get('SELECT * FROM destination WHERE id = ?', [id]);
        if (destination) {
            res.json(destination);
        } else {
            res.status(404).json({ error: 'Destination not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error searching destination' });
    }
}

export async function createDestination(db: Database, req: Request, res: Response) {
    try {
        const { name, description, type, main_attraction, tour_count, min_tour_price, image_url } = req.body;
        const result = await db.run(
            `INSERT INTO destination (name, description, type, main_attraction, tour_count, min_tour_price, image_url) 
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [name, description, type, main_attraction, tour_count, min_tour_price, image_url]
        );
        res.status(201).json({ id: result.lastID });
    } catch (error) {
        res.status(500).json({ error: 'Error creating destination' });
    }
}

export async function updateDestination(db: Database, req: Request, res: Response) {
    try {
        const { id } = req.params;
        const { name, description, type, main_attraction, tour_count, min_tour_price, image_url, is_favorite } = req.body;

        const result = await db.run(
            `UPDATE destination SET name = ?, description = ?, type = ?, main_attraction = ?, 
            tour_count = ?, min_tour_price = ?, image_url = ?, is_favorite = ? WHERE id = ?`,
            [name, description, type, main_attraction, tour_count, min_tour_price, image_url, is_favorite, id]
        );

        if (result.changes === 0) {
            res.status(404).json({ error: 'Destination not found' });
        } else {
            res.status(200).json({ message: 'Destination updated successfully' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error updating destination' });
    }
}

export async function deleteDestination(db: Database, req: Request, res: Response) {
    try {
        const { id } = req.params;

        const result = await db.run(
            `DELETE FROM destination WHERE id = ?`,
            [id]
        );

        if (result.changes === 0) {
            res.status(404).json({ error: 'Destination not found' });
        } else {
            res.status(200).json({ message: 'Destination deleted successfully' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error deleting destination' });
    }
}