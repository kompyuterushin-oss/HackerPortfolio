import { useEffect, useState } from 'react';
import Hero from '@/components/features/Hero';
import About from '@/components/features/About';
import Skills from '@/components/features/Skills';
import Projects from '@/components/features/Projects';
import Contact from '@/components/features/Contact';
import MatrixRain from '@/components/features/MatrixRain';
import Navigation from '@/components/layout/Navigation';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-background scanline grid-bg overflow-x-hidden">
      <MatrixRain />
      
      <div className="relative z-10">
        <Navigation />
        
        <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        
        <footer className="border-t border-terminal-green/30 py-8 text-center">
          <p className="text-terminal-green/60 text-sm">
            <span className="text-terminal-cyan">~/root@portfolio:~$</span> echo "© 2026 Barlıq huqıqlar qorǵalǵan - Ibadullaev Ruslan"
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;