-- CreateTable
CREATE TABLE "t_learnskill" (
    "id" SERIAL NOT NULL,
    "skillname" VARCHAR(100),
    "description" TEXT,
    "enddate" DATE,
    "isfinish" BOOLEAN DEFAULT false,
    "deleteat" TIMESTAMP(3),
    "metadata" JSONB,
    "categoryId" INTEGER,

    CONSTRAINT "t_learnskill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "deleteat" TIMESTAMP(3),

    CONSTRAINT "t_category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "t_category_name_key" ON "t_category"("name");

-- AddForeignKey
ALTER TABLE "t_learnskill" ADD CONSTRAINT "t_learnskill_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "t_category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
