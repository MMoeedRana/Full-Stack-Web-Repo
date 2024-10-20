import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Fetch all patients
export async function GET() {
  const patients = await prisma.patient.findMany();
  return NextResponse.json(patients);
}

// Add a new patient
export async function POST(request: Request) {
  const data = await request.json();
  const newPatient = await prisma.patient.create({
    data: {
      patientId: data.patientId,
      patientName: data.patientName,
      diagnosis: data.diagnosis,
      appointmentDate: new Date(data.appointmentDate),
    },
  });

  return NextResponse.json(newPatient);
}
