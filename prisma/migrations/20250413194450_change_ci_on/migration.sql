-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Person" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "ci" TEXT NOT NULL,
    "gender" TEXT DEFAULT 'no definido'
);
INSERT INTO "new_Person" ("age", "ci", "gender", "id", "lastName", "name") SELECT "age", "ci", "gender", "id", "lastName", "name" FROM "Person";
DROP TABLE "Person";
ALTER TABLE "new_Person" RENAME TO "Person";
CREATE UNIQUE INDEX "Person_ci_key" ON "Person"("ci");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
