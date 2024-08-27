import { Database } from 'sqlite';

export async function createReviewTable(db: Database) {
  await db.exec(`
      CREATE TABLE IF NOT EXISTS review (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        idTour INTEGER,
        user_name TEXT NOT NULL,
        user_email TEXT NOT NULL,
        date TEXT NOT NULL,
        services INTEGER CHECK(services >= 1 AND services <= 5),
        locations INTEGER CHECK(locations >= 1 AND locations <= 5),
        amenities INTEGER CHECK(amenities >= 1 AND amenities <= 5),
        price_review INTEGER CHECK(price_review >= 1 AND price_review <= 5),
        comfort INTEGER CHECK(comfort >= 1 AND comfort <= 5),
        FOREIGN KEY (idTour) REFERENCES tour(id)
      );
  `);
}
