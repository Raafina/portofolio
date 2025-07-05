import Navbar from '@/ui/navbar';
import Hero from '@/component/hero';
import Project from '@/component/project';
import TechStack from '@/component/techstack';
import Experience from '@/component/experience';
import Contact from '@/component/contact';
import Footer from '@/component/footer';
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
