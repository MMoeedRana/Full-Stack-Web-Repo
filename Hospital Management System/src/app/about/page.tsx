'use client';
import NavBar from "../_components/navbar";
import AboutProfile from "../_components/AboutProfile";
import Footer from "../_components/footer";
import { useRouter } from 'next/navigation';


export default function AboutPage() {
  const router = useRouter();
  return (
    <>
      <NavBar />
        <div>
          <AboutProfile />
        </div>
        <div>
        <Footer />
      </div>
    </>
  );
}