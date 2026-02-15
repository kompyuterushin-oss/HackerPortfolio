import { useState, useEffect } from 'react';
import { Terminal, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'baslaw', href: '#home', command: 'cd ~/' },
    { name: 'haqqımda', href: '#about', command: 'cat about.txt' },
    { name: 'kónlikpeler', href: '#skills', command: 'ls skills/' },
    { name: 'proekler', href: '#projects', command: 'git log' },
    { name: 'baylanıs', href: '#contact', command: './contact.sh' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm border-b border-terminal-green/30' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-terminal-green" />
            <span className="text-terminal-green font-bold text-sm sm:text-base md:text-lg text-glow">
              <span className="text-terminal-cyan">root</span>@portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(link.href)}
                className="group relative text-terminal-green/80 hover:text-terminal-green transition-all duration-300"
              >
                <span className="text-xs lg:text-sm">{link.name}</span>
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-terminal-green group-hover:w-full transition-all duration-300 shadow-glow" />
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] lg:text-xs text-terminal-cyan whitespace-nowrap">
                  $ {link.command}
                </div>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-terminal-green p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-terminal-green/30 bg-black/95 backdrop-blur-sm">
            <div className="flex flex-col gap-2 sm:gap-3 py-3 sm:py-4">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left px-4 py-2 text-terminal-green/80 hover:text-terminal-green hover:bg-terminal-green/10 transition-all duration-300"
                >
                  <div className="text-xs sm:text-sm text-terminal-cyan mb-0.5 sm:mb-1">$ {link.command}</div>
                  <div className="text-sm sm:text-base">{link.name}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;