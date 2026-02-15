
import { Terminal, ExternalLink, Github, Lock, Globe, Zap, Code2 } from 'lucide-react';
import React from 'react'; // Added import for React

const Projects = () => {
  const projects = [
    {
      title: 'Elektron Sawda Platforması',
      description: 'Tolıq funkcional onlayn du\'kan platforması. Bir waqıt tólemler, qoyma basqarıw hám analitika.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe'],
      status: 'Produkciya',
      category: 'Veb dasturlаw',
      icon: Globe,
      color: 'text-terminal-green',
      highlights: ['10 mıń dan aslam paydalanıwshı', '99.9% jumıs waqtı', 'Qá\'wipsiz tólemler'],
    },
    {
      title: 'Kiberqá\'wipsizlik basqarıw paneli',
      description: 'Bir waqıt qá\'wipsizlik qadag\'alaw paneli. Tarmaq trafik tejew, qá\'wip anıqlawı hám avtomatik juwap sisteması.',
      tech: ['Python', 'Django', 'TensorFlow', 'WebSocket', 'PostgreSQL'],
      status: 'Aktiv',
      category: 'Qá\'wipsizlik',
      icon: Lock,
      color: 'text-terminal-purple',
      highlights: ['Jasalma aqıl arqalı anıqlawı', 'Bir waqıt xabar', 'Óz rejeler'],
    },
    {
      title: 'API dárwazası qızmeti',
      description: 'Joqarı paydalı mikroservikler API dárwazası. Shektew, tuwrılıqtı anıqlawı hám soraw baǵdarlantırıw.',
      tech: ['Node.js', 'Redis', 'Docker', 'Kubernetes', 'GraphQL'],
      status: 'Produkciya',
      category: 'Backend',
      icon: Zap,
      color: 'text-terminal-cyan',
      highlights: ['1 millionnan aslam soraw/ku\'n', 'Avtomatik u\'lkeyiw', 'Ju\'klewdi teńlestiriw'],
    },
    {
      title: 'Tekserіw quralı',
      description: 'Veb qosımshalar ushın avtomatik tekserіw quralı. Kodlardı skanerlew hám tolıq esabat berіw.',
      tech: ['Python', 'Flask', 'Selenium', 'BeautifulSoup', 'SQLite'],
      status: 'Beta',
      category: 'Qá\'wipsizlik quralları',
      icon: Code2,
      color: 'text-terminal-pink',
      highlights: ['50+ test scenariyi', 'PDF esabatlar', 'CI/CD integratsiya'],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-6 h-6 text-terminal-cyan" />
            <span className="text-terminal-cyan/60 font-mono">$ git log --all --graph</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-terminal-green text-glow mb-4">
            <span className="text-terminal-cyan">&gt;</span> Proekler (ó'z betinshe)
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-terminal-green via-terminal-cyan to-transparent shadow-glow" />
        </div>

        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="terminal-border bg-black/40 backdrop-blur-sm p-4 sm:p-5 md:p-6 hover:bg-black/60 transition-all duration-300 group hover:shadow-glow"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
                  <div className="flex items-start gap-2 sm:gap-3 min-w-0 flex-1">
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${project.color} flex-shrink-0 mt-0.5`} />
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-terminal-green group-hover:text-glow transition-all break-words">
                        {project.title}
                      </h3>
                      <span className="text-[10px] sm:text-xs text-terminal-cyan/60 font-mono">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className={`px-1.5 sm:px-2 py-0.5 sm:py-1 border ${project.color} border-current text-[10px] sm:text-xs font-mono whitespace-nowrap flex-shrink-0`}>
                    {project.status}
                  </div>
                </div>

                {/* Description */}
                <p className="text-terminal-green/70 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-3 sm:mb-4 space-y-0.5 sm:space-y-1">
                  {project.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                      <span className="text-terminal-cyan flex-shrink-0 mt-0.5">✓</span>
                      <span className="text-terminal-green/60">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-3 sm:mb-4">
                  <div className="text-terminal-cyan/60 text-[10px] sm:text-xs mb-1.5 sm:mb-2 font-mono">
                    $ cat tech_stack.txt
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-terminal-green/10 border border-terminal-green/30 text-terminal-green/80 text-[10px] sm:text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-terminal-green/30">
                  <button className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 border border-terminal-cyan/50 text-terminal-cyan hover:bg-terminal-cyan/10 transition-all duration-300 text-xs sm:text-sm group/btn">
                    <Github className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:rotate-12 transition-transform" />
                    <span className="font-mono">Kod</span>
                  </button>
                  <button className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 border border-terminal-green/50 text-terminal-green hover:bg-terminal-green/10 transition-all duration-300 text-xs sm:text-sm group/btn">
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    <span className="font-mono">Demo</span>
                  </button>
                </div>

                {/* Footer */}
                <div className="mt-3 sm:mt-4 flex items-center gap-2 text-terminal-cyan/40 text-[10px] sm:text-xs">
                  <span className="font-mono">$</span>
                  <div className="flex-1 h-px bg-terminal-cyan/20" />
                  <span className="font-mono">[{String(index + 1).padStart(2, '0')}/04]</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
