/*
  Warnings:

  - You are about to drop the column `is_deleted` on the `Allocation` table. All the data in the column will be lost.
  - You are about to drop the column `is_deleted` on the `Position` table. All the data in the column will be lost.
  - You are about to drop the column `is_deleted` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `is_deleted` on the `Resource` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Allocation" DROP COLUMN "is_deleted",
ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "public"."Position" DROP COLUMN "is_deleted",
ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "public"."Project" DROP COLUMN "is_deleted",
ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "public"."Resource" DROP COLUMN "is_deleted",
ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;
