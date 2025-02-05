/*
  Warnings:

  - Added the required column `options` to the `Questions` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Questions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "authorId" INTEGER,
    "options" TEXT NOT NULL,
    CONSTRAINT "Questions_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Teacher" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Questions" ("authorId", "content", "id", "title") SELECT "authorId", "content", "id", "title" FROM "Questions";
DROP TABLE "Questions";
ALTER TABLE "new_Questions" RENAME TO "Questions";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
