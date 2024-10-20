'use client';
import NavBar from "../_components/navbar";
import Blogs from "../_components/ServicesPage";
import Footer from "../_components/footer";
import { useRouter } from 'next/navigation';

export default function ServicePage() {
  const router = useRouter();
  return (
    <>
      <NavBar />
        <div>
          <Blogs />
        </div>
        <div>
        <Footer />
      </div>
    </>
  );
}