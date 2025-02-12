/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `authorId` on the `Questions` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Questions` table. All the data in the column will be lost.
  - You are about to drop the column `options` on the `Questions` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Questions` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Teacher` table. All the data in the column will be lost.
  - Added the required column `testid` to the `Questions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `Questions` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Test" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "teacherId" INTEGER,
    CONSTRAINT "Test_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Student" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "TestonStudent" (
    "studentId" INTEGER NOT NULL,
    "testid" INTEGER NOT NULL,
    "assignedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("studentId", "testid"),
    CONSTRAINT "TestonStudent_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TestonStudent_testid_fkey" FOREIGN KEY ("testid") REFERENCES "Test" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Questions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "testid" INTEGER NOT NULL,
    CONSTRAINT "Questions_testid_fkey" FOREIGN KEY ("testid") REFERENCES "Test" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Questions" ("id") SELECT "id" FROM "Questions";
DROP TABLE "Questions";
ALTER TABLE "new_Questions" RENAME TO "Questions";
CREATE TABLE "new_Teacher" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL
);
INSERT INTO "new_Teacher" ("email", "id") SELECT "email", "id" FROM "Teacher";
DROP TABLE "Teacher";
ALTER TABLE "new_Teacher" RENAME TO "Teacher";
CREATE UNIQUE INDEX "Teacher_email_key" ON "Teacher"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");
