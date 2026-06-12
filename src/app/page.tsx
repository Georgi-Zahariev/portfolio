import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Terminal from '@/components/Terminal';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Athletics from '@/components/Athletics';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Terminal />
        <Experience />
        <Education />
        <Projects />
        <Athletics />
        <Contact />
      </main>
    </>
  );
}
