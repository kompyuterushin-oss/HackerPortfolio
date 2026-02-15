
import { useEffect, useState } from 'react';
import { Terminal, ChevronRight, Code2, Shield, Zap } from 'lucide-react';
import hackerLogo from '@/assets/hacker-logo.jpg';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [showName, setShowName] = useState(true);
  const [nameOpacity, setNameOpacity] = useState(1);
  const fullText = 'whoami';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    // Name fade out animation
    const nameTimer = setTimeout(() => {
      const fadeInterval = setInterval(() => {
        setNameOpacity((prev) => {
          const newOpacity = prev - 0.05;
          if (newOpacity <= 0) {
            clearInterval(fadeInterval);
            setShowName(false);
            return 0;
          }
          return newOpacity;
        });
      }, 50);
    }, 3000);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
      clearTimeout(nameTimer);
    };
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-terminal-green rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-terminal-cyan rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-terminal-purple rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Full Screen Name Overlay */}
      {showName && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm transition-opacity duration-1000"
          style={{ opacity: nameOpacity }}
        >
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-terminal-green text-glow mb-4 animate-pulse">
              Ibadullaev Ruslan
            </h1>
            <div className="text-terminal-cyan/60 font-mono animate-pulse">
              <span className="text-2xl">$ initializing...</span>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="terminal-border bg-black/40 backdrop-blur-sm p-8 md:p-12 hover:shadow-[0_0_30px_rgba(0,255,65,0.3)] transition-all duration-500">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-8 pb-4 border-b border-terminal-green/30">
            <Terminal className="w-5 h-5 text-terminal-green" />
            <span className="text-terminal-green/60 text-sm font-mono">
              root@portfolio:~$
            </span>
          </div>

          {/* Command Input */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xl md:text-2xl font-mono">
              <ChevronRight className="w-6 h-6 text-terminal-cyan" />
              <span className="text-terminal-green">$</span>
              <span className="text-terminal-cyan">{typedText}</span>
              <span className={`inline-block w-3 h-6 bg-terminal-green ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
            </div>
          </div>

          {/* Output */}
          <div className="grid md:grid-cols-2 gap-8 animate-fadeIn" style={{ animationDelay: '1s' }}>
            {/* Left Column - Profile Image */}
            <div className="flex items-center justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-terminal-green via-terminal-cyan to-terminal-purple opacity-50 blur-xl group-hover:opacity-75 transition-opacity" />
                <img 
                  src={hackerLogo} 
                  alt="Hacker Logo" 
                  className="relative w-64 h-64 md:w-80 md:h-80 object-cover border-2 border-terminal-green shadow-glow group-hover:border-terminal-cyan transition-all duration-300"
                />
              </div>
            </div>

            {/* Right Column - Info */}
            <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex flex-col gap-2">
                <span className="text-terminal-cyan/70 text-xs sm:text-sm">ATI:</span>
                <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-terminal-green text-glow animate-pulse break-words leading-tight">
                  Ibadullaev Ruslan
                </h1>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                <span className="text-terminal-cyan/70 text-xs sm:text-sm whitespace-nowrap">RÓLI:</span>
                <div className="space-y-1">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-terminal-purple font-semibold text-glow-purple">
                    Dastúrshi
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                <span className="text-terminal-cyan/70 text-xs sm:text-sm whitespace-nowrap">HAQQIMDA:</span>
                <p className="text-xs sm:text-sm md:text-base text-terminal-green/80 leading-relaxed">
                  Házirgi zaman texnologiyaları menen jumıs isleytuǵın da'stú'rshi. 
                  Backend, frontend hám kiberqá'wipsizlik ka'sibinde ko'p jıllıq tajriybege iye. 
                  Qıyın má'selelеrdi sheshiw hám qá'wipsiz kod jazıw - meniń kú'shli tárepim.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 pt-2 sm:pt-4">
              <span className="text-terminal-cyan/70 text-xs sm:text-sm whitespace-nowrap">QOSIMSHA:</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-terminal-green rounded-full animate-pulse shadow-glow" />
                <span className="text-terminal-green text-sm sm:text-base">Online</span>
              </div>
            </div>
            
            {/* Programming Languages */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                <span className="text-terminal-cyan/70 text-xs sm:text-sm whitespace-nowrap">TILLAR:</span>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'Rust', 'Go', 'PHP'].map((lang, idx) => (
                    <span 
                      key={idx}
                      className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-terminal-green/10 border border-terminal-green/30 text-terminal-green hover:border-terminal-green hover:bg-terminal-green/20 transition-all text-[10px] sm:text-xs md:text-sm font-mono cursor-default"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          </div> { /* End of Output grid column */ }

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-4 sm:pt-6">
              <div className="terminal-border bg-black/60 p-2 sm:p-3 md:p-4 text-center hover:bg-terminal-green/5 transition-all">
                <Code2 className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 text-terminal-cyan mx-auto mb-1 sm:mb-2" />
                <div className="text-base sm:text-xl md:text-2xl font-bold text-terminal-green">10+</div>
                <div className="text-[9px] sm:text-[11px] md:text-xs text-terminal-green/60 leading-tight">proektler</div>
              </div>
              <div className="terminal-border bg-black/60 p-2 sm:p-3 md:p-4 text-center hover:bg-terminal-purple/5 transition-all">
                <Shield className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 text-terminal-purple mx-auto mb-1 sm:mb-2" />
                <div className="text-base sm:text-xl md:text-2xl font-bold text-terminal-purple">2+</div>
                <div className="text-[9px] sm:text-[11px] md:text-xs text-terminal-green/60 leading-tight">Jıllıq ta'jiriyбe</div>
              </div>
              <div className="terminal-border bg-black/60 p-2 sm:p-3 md:p-4 text-center hover:bg-terminal-cyan/5 transition-all">
                <Zap className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 text-terminal-green mx-auto mb-1 sm:mb-2" />
                <div className="text-base sm:text-xl md:text-2xl font-bold text-terminal-cyan">100%</div>
                <div className="text-[9px] sm:text-[11px] md:text-xs text-terminal-green/60 leading-tight">Sapa</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 sm:pt-6 md:pt-8 flex gap-2 sm:gap-3 md:gap-4 flex-wrap">
              <button
                onClick={scrollToProjects}
                className="group flex items-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-terminal-green/10 border-2 border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-black transition-all duration-300 shadow-glow hover:shadow-glow-cyan hover:scale-105"
              >
                <Terminal className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                <span className="font-semibold text-[10px] sm:text-xs md:text-base whitespace-nowrap">$ ls proekler/</span>
                <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#contact"
                className="group flex items-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 border-2 border-terminal-cyan text-terminal-cyan hover:bg-terminal-cyan/10 transition-all duration-300 hover:scale-105"
              >
                <span className="font-semibold text-[10px] sm:text-xs md:text-base whitespace-nowrap">$ baylanıs</span>
                <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div> { /* End of terminal-border div */ }

          {/* ASCII Art */}
          <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-7 md:pt-8 border-t border-terminal-green/30">
            <pre className="text-terminal-green/40 text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs overflow-x-auto">
{`
██████╗ ██╗   ██╗███████╗██╗      █████╗ ███╗   ██╗
██╔══██╗██║   ██║██╔════╝██║     ██╔══██╗████╗  ██║
██████╔╝██║   ██║███████╗██║     ███████║██╔██╗ ██║
██╔══██╗██║   ██║╚════██║██║     ██╔══██║██║╚██╗██║
██║  ██║╚██████╔╝███████║███████╗██║  ██║██║ ╚████║
╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝
`}
            </pre>
          </div>
        </div>
      </section>
  );
};

export default Hero;
