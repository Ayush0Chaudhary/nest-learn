/*
  Warnings:

  - Added the required column `password` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Student" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_Student" ("email", "id") SELECT "email", "id" FROM "Student";
DROP TABLE "Student";
ALTER TABLE "new_Student" RENAME TO "Student";
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");
CREATE TABLE "new_Teacher" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_Teacher" ("email", "id") SELECT "email", "id" FROM "Teacher";
DROP TABLE "Teacher";
ALTER TABLE "new_Teacher" RENAME TO "Teacher";
CREATE UNIQUE INDEX "Teacher_email_key" ON "Teacher"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
