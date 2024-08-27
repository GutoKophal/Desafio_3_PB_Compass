import { Database } from 'sqlite';

export async function createTypeTable(db: Database) {
    await db.exec(`
        CREATE TABLE IF NOT EXISTS type (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
        );
    `);
}
