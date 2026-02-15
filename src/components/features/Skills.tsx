
import { Terminal, Code, Database, Lock, Globe, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      color: 'text-terminal-cyan',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Vue.js', level: 85 },
      ],
    },
    {
      icon: Database,
      title: 'Backend',
      color: 'text-terminal-green',
      skills: [
        { name: 'Node.js / Express', level: 90 },
        { name: 'Python / Django', level: 88 },
        { name: 'PostgreSQL / MongoDB', level: 85 },
        { name: 'GraphQL / REST API', level: 92 },
      ],
    },
    {
      icon: Lock,
      title: "Qá'wipsizlik",
      color: 'text-terminal-purple',
      skills: [
        { name: "Sızıw testlew", level: 82 },
        { name: "Qá'wip anıqlawı", level: 88 },
        { name: "Kriptografiya", level: 80 },
        { name: "Tarmaq qá'wipsizligi", level: 85 },
      ],
    },
    {
      icon: GitBranch,
      title: 'DevOps',
      color: 'text-terminal-pink',
      skills: [
        { name: 'Docker / Kubernetes', level: 85 },
        { name: 'CI/CD Pipelines', level: 88 },
        { name: 'AWS / Cloud Services', level: 82 },
        { name: 'Linux Administration', level: 90 },
      ],
    },
  ];

  const tools = [
    'Git', 'VS Code', 'Docker', 'Postman', 'Figma', 'Burp Suite',
    'Wireshark', 'Metasploit', 'Nginx', 'Redis', 'Kafka', 'Jenkins'
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-6 h-6 text-terminal-cyan" />
            <span className="text-terminal-cyan/60 font-mono">$ ls -la skills/</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-terminal-green text-glow mb-4">
            <span className="text-terminal-cyan">&gt;</span> Ka'siplik ko'nikpeler
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-terminal-green via-terminal-cyan to-transparent shadow-glow" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={catIndex}
                className="terminal-border bg-black/40 backdrop-blur-sm p-4 sm:p-5 md:p-6 hover:bg-black/60 transition-all duration-300 group"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${category.color} flex-shrink-0`} />
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-bold ${category.color}`}>
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                        <span className="text-terminal-green/80 text-xs sm:text-sm font-mono truncate pr-2">
                          {skill.name}
                        </span>
                        <span className="text-terminal-cyan/60 text-[10px] sm:text-xs font-mono whitespace-nowrap flex-shrink-0">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 sm:h-2 bg-terminal-green/10 border border-terminal-green/30 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-terminal-green to-terminal-cyan transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            boxShadow: '0 0 10px rgba(0, 255, 65, 0.5)'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 sm:mt-4 flex items-center gap-2 text-terminal-cyan/40 text-[10px] sm:text-xs">
                  <span className="font-mono">$</span>
                  <div className="flex-1 h-px bg-terminal-cyan/20" />
                  <span className="font-mono">[EXPERT]</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tools & Technologies */}
        <div className="terminal-border bg-black/40 backdrop-blur-sm p-4 sm:p-5 md:p-6">
          <div className="flex items-center gap-2 mb-4 sm:mb-5 md:mb-6">
            <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-terminal-purple flex-shrink-0" />
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-terminal-purple">
              Qurallar ha'm Texnologiyalar
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 border border-terminal-green/30 bg-black/40 text-terminal-green/80 hover:bg-terminal-green/10 hover:border-terminal-green hover:text-terminal-green transition-all duration-300 cursor-default group"
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-terminal-cyan/60 text-[10px] sm:text-xs group-hover:text-terminal-cyan">$</span>
                  <span className="text-xs sm:text-sm font-mono whitespace-nowrap">{tool}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
