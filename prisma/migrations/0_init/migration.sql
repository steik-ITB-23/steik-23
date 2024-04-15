-- CreateTable
CREATE TABLE "User" (
    "id" STRING NOT NULL,
    "name" STRING,
    "username" STRING,
    "email" STRING,
    "password" STRING,
    "IP" FLOAT8 NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Academic" (
    "id" STRING NOT NULL,
    "semester" INT4 NOT NULL,
    "code" STRING NOT NULL,
    "lesson" STRING NOT NULL,

    CONSTRAINT "Academic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Material" (
    "id" STRING NOT NULL,
    "academicId" STRING NOT NULL,
    "fileUrl" STRING NOT NULL,
    "fileType" STRING NOT NULL,

    CONSTRAINT "Material_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercise" (
    "id" STRING NOT NULL,
    "academicId" STRING NOT NULL,
    "fileUrl" STRING NOT NULL,
    "fileType" STRING NOT NULL,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tutorial" (
    "id" STRING NOT NULL,
    "academicId" STRING NOT NULL,
    "fileUrl" STRING NOT NULL,
    "fileType" STRING NOT NULL,

    CONSTRAINT "Tutorial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" STRING NOT NULL,
    "imageUrl" STRING NOT NULL,
    "name" STRING NOT NULL,
    "type" STRING NOT NULL,
    "content" STRING NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PTPBAnnouncement" (
    "id" STRING NOT NULL,
    "imageUrl" STRING NOT NULL,
    "name" STRING NOT NULL,
    "type" STRING NOT NULL,
    "content" STRING NOT NULL,

    CONSTRAINT "PTPBAnnouncement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LabAnnouncement" (
    "id" STRING NOT NULL,
    "imageUrl" STRING NOT NULL,
    "name" STRING NOT NULL,
    "type" STRING NOT NULL,
    "content" STRING NOT NULL,

    CONSTRAINT "LabAnnouncement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Material" ADD CONSTRAINT "Material_academicId_fkey" FOREIGN KEY ("academicId") REFERENCES "Academic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_academicId_fkey" FOREIGN KEY ("academicId") REFERENCES "Academic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tutorial" ADD CONSTRAINT "Tutorial_academicId_fkey" FOREIGN KEY ("academicId") REFERENCES "Academic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

