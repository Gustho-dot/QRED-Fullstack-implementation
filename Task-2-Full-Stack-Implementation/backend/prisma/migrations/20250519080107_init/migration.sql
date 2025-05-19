-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Card" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "remainingSpend" INTEGER NOT NULL,
    "limit" INTEGER NOT NULL,
    "invoiceDueDate" DATETIME NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Card_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Card" ("companyId", "id", "invoiceDueDate", "limit", "remainingSpend") SELECT "companyId", "id", "invoiceDueDate", "limit", "remainingSpend" FROM "Card";
DROP TABLE "Card";
ALTER TABLE "new_Card" RENAME TO "Card";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
