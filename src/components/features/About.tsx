
import { Code2, Shield, Zap, Terminal } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code2,
      title: 'Taza Kodlar',
      description: 'Optimallastırılǵan hám oqılıwı ońay kodlar jazıw',
      color: 'text-terminal-green',
    },
    {
      icon: Shield,
      title: "Qáwipsizlik Birinshi",
      description: "Qáwipsizlik hám mag'lıwmatlardı qorǵaw birinshi orında",
      color: 'text-terminal-cyan',
    },
    {
      icon: Zap,
      title: 'Paydalılıq',
      description: 'Joqarı tezlik hám paydalılıq',
      color: 'text-terminal-purple',
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-6 h-6 text-terminal-cyan" />
            <span className="text-terminal-cyan/60 font-mono">$ cat about.txt</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-terminal-green text-glow mb-4">
            <span className="text-terminal-cyan">&gt;</span> Men haqqımda
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-terminal-green via-terminal-cyan to-transparent shadow-glow" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <div className="terminal-border bg-black/40 backdrop-blur-sm p-4 sm:p-5 md:p-6">
              <div className="space-y-3 sm:space-y-4 text-terminal-green/80 leading-relaxed">
                <p className="flex items-start gap-2">
                  <span className="text-terminal-cyan mt-0.5 sm:mt-1 flex-shrink-0">&gt;&gt;</span>
                  <span className="text-xs sm:text-sm md:text-base">
                    Men há'zirgi zaman veb texnologiyaları hám kiberqá'wipsizlik ka'sibinde 
                    ko'p jıllıq tajriybege iye da'stu'rshiman.
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-terminal-cyan mt-0.5 sm:mt-1 flex-shrink-0">&gt;&gt;</span>
                  <span className="text-xs sm:text-sm md:text-base">
                    Há'r bir jobada kod sapası, qá'wipsizlik hám paydalanıwshı 
                    tajriyбesine ayrıqsha dıqqat beremen.
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-terminal-cyan mt-0.5 sm:mt-1 flex-shrink-0">&gt;&gt;</span>
                  <span className="text-xs sm:text-sm md:text-base">
                    Qıyın má'selelеrdi sheshiw hám jańasha sheshimlerdi 
                    tabıw meniń negizgi ma'qsetim.
                  </span>
                </p>
              </div>
            </div>

            <div className="terminal-border bg-black/40 backdrop-blur-sm p-4 sm:p-5 md:p-6">
              <div className="text-terminal-cyan/70 text-xs sm:text-sm mb-2 sm:mb-3 font-mono">
                $ echo $PHILOSOPHY
              </div>
              <blockquote className="text-terminal-green/80 italic border-l-2 border-terminal-purple pl-3 sm:pl-4 text-xs sm:text-sm md:text-base">
                "Há'r bir kod qatarı - sanat dóretpesi. Há'r bir qá'telik - u'yrenіw mu'mkinshiligi. 
                Há'r bir joba - jańa qızıqlı ma'qset."
              </blockquote>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="terminal-border bg-black/40 backdrop-blur-sm p-4 sm:p-5 md:p-6 group hover:bg-black/60 transition-all duration-300 hover:shadow-glow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`${feature.color} mt-0.5 sm:mt-1 flex-shrink-0`}>
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 ${feature.color}`}>
                        {feature.title}
                      </h3>
                      <p className="text-terminal-green/70 text-xs sm:text-sm md:text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-4 flex items-center gap-2 text-terminal-cyan/50 text-[10px] sm:text-xs">
                    <span className="font-mono">$</span>
                    <div className="flex-1 h-px bg-terminal-cyan/20 group-hover:bg-terminal-cyan/40 transition-colors" />
                    <span className="font-mono">[{String(index + 1).padStart(2, '0')}]</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
