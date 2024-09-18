/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `blog` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "blog_vue_key";

-- CreateIndex
CREATE UNIQUE INDEX "blog_name_key" ON "blog"("name");
