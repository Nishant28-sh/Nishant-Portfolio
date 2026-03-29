import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PageBackground from '@/components/PageBackground';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <PageBackground />
      <div className="relative z-10">
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Header />
        <main id="main-content">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
