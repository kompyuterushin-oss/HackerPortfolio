import { useState } from 'react';
import { Terminal, Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: '#', username: '@elite_dev' },
    { icon: Linkedin, label: 'LinkedIn', url: '#', username: '/elite-developer' },
    { icon: Mail, label: 'Email', url: '#', username: 'dev@elite.uz' },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-6 h-6 text-terminal-cyan" />
            <span className="text-terminal-cyan/60 font-mono">$ ./contact.sh --send-message</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-terminal-green text-glow mb-4">
            <span className="text-terminal-cyan">&gt;</span> Baylanıs
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-terminal-green via-terminal-cyan to-transparent shadow-glow" />
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-3">
            <div className="terminal-border bg-black/40 backdrop-blur-sm p-6 md:p-8">
              <div className="text-terminal-cyan/60 text-sm mb-6 font-mono">
                $ nano message.txt
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <CheckCircle className="w-16 h-16 text-terminal-green mx-auto animate-pulse" />
                  <h3 className="text-2xl font-bold text-terminal-green text-glow">
                    Xat jiberildi!
                  </h3>
                  <p className="text-terminal-green/70">
                    Tez arada sizge juwap qaytaraman.
                  </p>
                  <div className="text-terminal-cyan/60 text-sm font-mono pt-4">
                    $ echo "Message sent successfully" &gt; status.log
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-terminal-green/80 text-sm mb-2 font-mono">
                      <span className="text-terminal-cyan">$</span> Atıńız:
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/40 border border-terminal-green/30 px-4 py-3 text-terminal-green focus:border-terminal-green focus:outline-none focus:shadow-glow transition-all duration-300 font-mono"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-terminal-green/80 text-sm mb-2 font-mono">
                      <span className="text-terminal-cyan">$</span> Email:
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/40 border border-terminal-green/30 px-4 py-3 text-terminal-green focus:border-terminal-green focus:outline-none focus:shadow-glow transition-all duration-300 font-mono"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-terminal-green/80 text-sm mb-2 font-mono">
                      <span className="text-terminal-cyan">$</span> Xabar:
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-black/40 border border-terminal-green/30 px-4 py-3 text-terminal-green focus:border-terminal-green focus:outline-none focus:shadow-glow transition-all duration-300 font-mono resize-none"
                      placeholder="Siziń xabarıńız..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-terminal-green/10 border border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-black transition-all duration-300 shadow-glow hover:shadow-glow-cyan font-mono font-semibold group"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span>$ send --message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-2 space-y-6">
            <div className="terminal-border bg-black/40 backdrop-blur-sm p-6">
              <div className="text-terminal-cyan/60 text-sm mb-6 font-mono">
                $ cat social_links.json
              </div>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className="flex items-center gap-4 p-4 border border-terminal-green/30 hover:border-terminal-green hover:bg-terminal-green/10 transition-all duration-300 group"
                    >
                      <Icon className="w-6 h-6 text-terminal-cyan group-hover:text-terminal-green transition-colors" />
                      <div className="flex-1">
                        <div className="text-terminal-green font-semibold">
                          {social.label}
                        </div>
                        <div className="text-terminal-green/60 text-sm font-mono">
                          {social.username}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Status Box */}
            <div className="terminal-border bg-black/40 backdrop-blur-sm p-6">
              <div className="text-terminal-cyan/60 text-sm mb-4 font-mono">
                $ uptime
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-terminal-green/70 text-sm">Status:</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-terminal-green rounded-full animate-pulse shadow-glow" />
                    <span className="text-terminal-green text-sm font-mono">Online</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-terminal-green/70 text-sm">Juwap beriw waqtı:</span>
                  <span className="text-terminal-cyan text-sm font-mono">&lt; 24 saat</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-terminal-green/70 text-sm">Online:</span>
                  <span className="text-terminal-purple text-sm font-mono">24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;