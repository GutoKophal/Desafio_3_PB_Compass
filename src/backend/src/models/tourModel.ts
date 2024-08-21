import { Database } from 'sqlite';

export async function createTourTable(db: Database) {
    await db.exec(`
        CREATE TABLE IF NOT EXISTS tour (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            destination_id INTEGER,
            name TEXT NOT NULL,
            description TEXT,
            price REAL,
            popularity INTEGER,
            image_url TEXT,
            FOREIGN KEY (destination_id) REFERENCES destination(id)
        );
    `);
}
