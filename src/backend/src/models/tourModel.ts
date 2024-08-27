import { Database } from 'sqlite';

export async function createTourTable(db: Database) {
    await db.exec(`
        CREATE TABLE IF NOT EXISTS tour (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            country TEXT NOT NULL,
            city TEXT NOT NULL,
            price REAL,
            start_date TEXT,
            final_date TEXT,
            averageReview REAL,
            duration INTEGER,
            type_id INTEGER,
            FOREIGN KEY (type_id) REFERENCES type(id)
        );
    `);
}

