/*
  Warnings:

  - Added the required column `position_x` to the `technologies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `position_y` to the `technologies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `technologies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "technologies" ADD COLUMN     "position_x" INTEGER NOT NULL,
ADD COLUMN     "position_y" INTEGER NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "technology_theme" (
    "id" TEXT NOT NULL,
    "fk_technologies" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "technology_theme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "technology_edges" (
    "id" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "target" TEXT NOT NULL,

    CONSTRAINT "technology_edges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "token" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "token_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "technology_theme" ADD CONSTRAINT "technology_theme_fk_technologies_fkey" FOREIGN KEY ("fk_technologies") REFERENCES "technologies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "technology_edges" ADD CONSTRAINT "technology_edges_source_fkey" FOREIGN KEY ("source") REFERENCES "technologies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "technology_edges" ADD CONSTRAINT "technology_edges_target_fkey" FOREIGN KEY ("target") REFERENCES "technologies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
