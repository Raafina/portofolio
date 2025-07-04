import Navbar from '@/ui/navbar';
import Hero from '@/ui/hero';
import Project from '@/ui/project';
import TechStack from '@/ui/techstack';
import Experience from '@/ui/experience';
import Contact from '@/ui/contact';
import Footer from '@/ui/footer';
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Project />
      <TechStack />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
