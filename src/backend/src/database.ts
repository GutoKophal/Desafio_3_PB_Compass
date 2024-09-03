import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import path from 'path';
import { createTourTable } from './models/tourModel';
import { createReviewTable } from './models/reviewModel';
import { createTypeTable } from './models/typeModel';

export async function initDB(): Promise<Database> {
    const dbPath = path.resolve(__dirname, '../public/destination.sqlite');

    const db = await open({
        filename: dbPath,
        driver: sqlite3.Database
    });

    await createTypeTable(db);
    await createTourTable(db);
    await createReviewTable(db);

    return db;
}
