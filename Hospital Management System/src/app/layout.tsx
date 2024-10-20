import './globals.css';
import { ReactNode } from 'react';
import NavBar from './_components/navbar';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Hospital Management System</title>
      </head>
      <body>
        <div>
          <NavBar />
        </div>
      <div>
      
    </div>
        
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
