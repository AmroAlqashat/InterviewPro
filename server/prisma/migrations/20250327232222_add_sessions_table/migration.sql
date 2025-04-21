/*
  Warnings:

  - The primary key for the `sessions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `created_at` on the `sessions` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `sessions` table. All the data in the column will be lost.
  - You are about to drop the column `interview_type` on the `sessions` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `sessions` table. All the data in the column will be lost.
  - You are about to drop the `sessions_progress` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `sessions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `expire` to the `sessions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sess` to the `sessions` table without a default value. This is not possible if the table is not empty.
  - The required column `sid` was added to the `sessions` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "ai_feedbacks" DROP CONSTRAINT "ai_feedbacks_session_id_fkey";

-- DropForeignKey
ALTER TABLE "questions" DROP CONSTRAINT "questions_session_id_fkey";

-- DropForeignKey
ALTER TABLE "sessions_progress" DROP CONSTRAINT "sessions_progress_session_id_fkey";

-- DropIndex
DROP INDEX "questions_question_text_key";

-- AlterTable
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_pkey",
DROP COLUMN "created_at",
DROP COLUMN "id",
DROP COLUMN "interview_type",
DROP COLUMN "status",
ADD COLUMN     "expire" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "sess" JSONB NOT NULL,
ADD COLUMN     "sid" TEXT NOT NULL,
ADD CONSTRAINT "sessions_pkey" PRIMARY KEY ("sid");

-- DropTable
DROP TABLE "sessions_progress";

-- CreateTable
CREATE TABLE "interviews" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "interview_type" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "interviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interview_progress" (
    "id" TEXT NOT NULL,
    "session_id" TEXT NOT NULL,
    "last_question" INTEGER NOT NULL,
    "last_interact" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "interview_progress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sessions_user_id_key" ON "sessions"("user_id");

-- AddForeignKey
ALTER TABLE "interviews" ADD CONSTRAINT "interviews_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "interviews"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ai_feedbacks" ADD CONSTRAINT "ai_feedbacks_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "interviews"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interview_progress" ADD CONSTRAINT "interview_progress_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "interviews"("id") ON DELETE CASCADE ON UPDATE CASCADE;
