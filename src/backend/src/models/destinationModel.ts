import { Database } from 'sqlite';

export async function createDestinationTable(db: Database) {
    await db.exec(`
        CREATE TABLE IF NOT EXISTS destination (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT,
            type TEXT,
            main_attraction TEXT,
            tour_count INTEGER,
            min_tour_price REAL,
            image_url TEXT,
            is_favorite BOOLEAN DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);
}
