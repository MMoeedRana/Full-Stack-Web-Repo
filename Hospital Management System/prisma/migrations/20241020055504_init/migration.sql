-- CreateTable
CREATE TABLE "Patient" (
    "id" SERIAL NOT NULL,
    "patientId" TEXT NOT NULL,
    "patientName" TEXT NOT NULL,
    "diagnosis" TEXT NOT NULL,
    "appointmentDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);
