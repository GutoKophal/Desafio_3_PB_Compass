import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import path from 'path';
import { createDestinationTable } from './models/destinationModel';
import { createTourTable } from './models/tourModel';

export async function initDB(): Promise<Database> {
    const dbPath = path.resolve(__dirname, '../public/destination.sqlite');

    const db = await open({
        filename: dbPath,
        driver: sqlite3.Database
    });

    await createDestinationTable(db);
    await createTourTable(db);

    return db;
}
