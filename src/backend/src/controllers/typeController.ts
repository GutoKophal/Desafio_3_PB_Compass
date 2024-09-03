import { Request, Response } from 'express';
import { Database } from 'sqlite';

export async function getAllTypes(db: Database, _req: Request, res: Response) {
    try {
        const types = await db.all('SELECT * FROM type');
        res.json(types);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving types' });
    }
}

export async function createType(db: Database, req: Request, res: Response) {
    try {
        const { name } = req.body;
        const result = await db.run(
            `INSERT INTO type (name) VALUES (?)`,
            [name]
        );
        res.status(201).json({ id: result.lastID });
    } catch (error) {
        res.status(500).json({ error: 'Error creating type' });
    }
}

export async function updateType(db: Database, req: Request, res: Response) {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const result = await db.run(
            `UPDATE type SET name = ? WHERE id = ?`,
            [name, id]
        );

        if (result.changes === 0) {
            res.status(404).json({ error: 'Type not found' });
        } else {
            res.status(200).json({ message: 'Type updated successfully' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error updating type' });
    }
}

export async function deleteType(db: Database, req: Request, res: Response) {
    try {
        const { id } = req.params;

        const result = await db.run(
            `DELETE FROM type WHERE id = ?`,
            [id]
        );

        if (result.changes === 0) {
            res.status(404).json({ error: 'Type not found' });
        } else {
            res.status(200).json({ message: 'Type deleted successfully' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error deleting type' });
    }
}
