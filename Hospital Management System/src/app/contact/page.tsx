'use client';
import NavBar from "../_components/navbar";
import { useRouter } from 'next/navigation';
import Footer from "../_components/footer";
import Contact from "../_components/Contact";

export default function WorkPage() {
  const router = useRouter();
  return (
    <>
      <NavBar />
        <div>
          <Contact />
        </div>
        <div>
        <Footer />
      </div>
    </>
  );
}