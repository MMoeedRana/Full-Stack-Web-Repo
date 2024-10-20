'use client';
import { useState, useEffect } from 'react';
import HeroPage from './_components/HeroPage';

interface PatientRecord {
  id: number;
  patientId: string;
  patientName: string;
  diagnosis: string;
  appointmentDate: string;
}

export default function Home() {
  const [patientRecords, setPatientRecords] = useState<PatientRecord[]>([]);
  const [formData, setFormData] = useState({
    patientId: '',
    patientName: '',
    diagnosis: '',
    appointmentDate: '',
  });

  // Fetch all patients from the API
  useEffect(() => {
    fetch('/api/patients')
      .then((res) => res.json())
      .then((data) => setPatientRecords(data))
      .catch((error) => console.error('Error fetching patients:', error));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { patientId, patientName, diagnosis, appointmentDate } = formData;

    if (patientId && patientName && diagnosis && appointmentDate) {
      // Post new patient to API
      fetch('/api/patients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((newPatient) => {
          setPatientRecords([...patientRecords, newPatient]);
          setFormData({
            patientId: '',
            patientName: '',
            diagnosis: '',
            appointmentDate: '',
          });
        })
        .catch((error) => console.error('Error adding patient:', error));
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    
    <section className="bg-white shadow-md rounded p-4 mb-4">
      <div>
      <HeroPage />
    </div>
      <h1 className=" mb-4 text-3xl text-red-900 items-center text-center pb-5 font-bold">Patient Information</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="patientId">Patient ID:</label>
            <input
              type="text"
              id="patientId"
              value={formData.patientId}
              onChange={handleChange}
              className="form-input w-full border px-3 py-2"
              placeholder='Enter the SR'
            />
          </div>
          <div>
            <label htmlFor="patientName">Patient Name:</label>
            <input
              type="text"
              id="patientName"
              value={formData.patientName}
              onChange={handleChange}
              className="form-input w-full border px-3 py-2"
              placeholder='Enter your Name'
            />
          </div>
          <div>
            <label htmlFor="diagnosis">Diagnosis:</label>
            <textarea
              id="diagnosis"
              value={formData.diagnosis}
              onChange={handleChange}
              className="form-textarea w-full border px-3 py-2"
              placeholder='Enter your Diagnosis'
            />
          </div>
          <div>
            <label htmlFor="appointmentDate">Appointment Date:</label>
            <input
              type="date"
              id="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              className="form-input w-full border px-3 py-2"
            />
          </div>
        </div>
        <button
          className='type="submit" font-bold mt-4 px-4 py-2 border border-gray-200 dark:border-gray-600 flex flex-row items-center text-sm gap-2 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 ease-in-out"'
        >
          Submit
        </button>
      </form>

      <h2 className="text-2xl mt-8 mb-4 text-green-700 font-bold">Patient Records</h2>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Patient ID</th>
            <th className="border px-4 py-2">Patient Name</th>
            <th className="border px-4 py-2">Diagnosis</th>
            <th className="border px-4 py-2">Appointment Date</th>
          </tr>
        </thead>
        <tbody>
          {patientRecords.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center px-4 py-2">
                No records available.
              </td>
            </tr>
          ) : (
            patientRecords.map((record) => (
              <tr key={record.id}>
                <td className="border px-4 py-2">{record.patientId}</td>
                <td className="border px-4 py-2">{record.patientName}</td>
                <td className="border px-4 py-2">{record.diagnosis}</td>
                <td className="border px-4 py-2">{new Date(record.appointmentDate).toLocaleDateString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  );
}
