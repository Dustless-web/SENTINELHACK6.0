import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#020202] border-t border-squid-pink/20 pt-16 pb-6 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 cyber-grid opacity-10 mix-blend-screen"></div>
        {/* Subtle bottom glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[200px] bg-squid-pink/5 blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12 mb-12">
          
          {/* Column 1: Brand & Identity */}
          <div className="col-span-1 md:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-cyber text-2xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                SENTINEL
              </span>
              <span className="font-cyber text-2xl font-bold text-squid-pink drop-shadow-[0_0_10px_rgba(255,0,91,0.6)]">
                HACK
              </span>
              <span className="font-cyber text-2xl font-bold text-squid-teal drop-shadow-[0_0_10px_rgba(0,191,165,0.6)]">
                6.0
              </span>
            </div>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 max-w-sm">
              The ultimate 24-hour state-level hackathon. Build resilient systems, forge unbreakable code, and survive the games. 
            </p>
            
            {/* VIP Symbols */}
            <div className="flex items-center gap-4 mb-8 opacity-80">
              <svg viewBox="0 0 100 100" className="w-6 h-6 text-squid-pink overflow-visible">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="6"/>
              </svg>
              <svg viewBox="0 0 100 100" className="w-6 h-6 text-squid-pink overflow-visible">
                <polygon points="50,10 95,90 5,90" fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="round"/>
              </svg>
              <svg viewBox="0 0 100 100" className="w-6 h-6 text-squid-pink overflow-visible">
                <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="6" rx="4"/>
              </svg>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com/sentinelhack" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded border border-white/20 text-gray-400 hover:text-squid-pink hover:border-squid-pink hover:bg-squid-pink/10 hover:shadow-[0_0_15px_rgba(255,0,91,0.3)] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: System Directories (Quick Links) */}
          <div className="col-span-1 md:col-span-3">
            <h3 className="text-lg font-cyber mb-6 text-squid-teal tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-squid-teal rounded-full animate-pulse"></span>
              DIRECTORIES
            </h3>
            <ul className="space-y-3">
              {['home', 'about', 'tracks', 'sponsors', 'faqs'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => scrollToSection(link)} 
                    className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <span className="font-code text-squid-pink opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2">
                      {'>'}
                    </span>
                    <span className="uppercase tracking-wider text-sm transform group-hover:translate-x-1 transition-transform duration-300">
                      {link === 'tracks' ? 'Tracks & Themes' : link}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Readout */}
          <div className="col-span-1 md:col-span-4">
            <h3 className="text-lg font-cyber mb-6 text-squid-teal tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-squid-teal rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></span>
              COMMUNICATIONS
            </h3>
            
            <div className="space-y-4 text-sm md:text-base text-gray-300">
              <div className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-squid-pink mt-0.5 group-hover:text-white transition-colors" />
                <div>
                  <span className="block font-code text-xs text-squid-pink/70 mb-0.5">SYS.EMAIL</span>
                  <a href="mailto:sentinelhack@ksit.edu.in" className="hover:text-squid-teal transition-colors break-all">
                    sentinelhack@ksit.edu.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-squid-pink mt-0.5 group-hover:text-white transition-colors" />
                <div>
                  <span className="block font-code text-xs text-squid-pink/70 mb-0.5">SYS.COORDINATORS</span>
                  <div className="space-y-1">
                    <span className="block">Pranav: <a href="tel:7483986779" className="hover:text-squid-teal transition-colors">7483986779</a></span>
                    <span className="block">Priyadarshini E P: <a href="tel:7259905558" className="hover:text-squid-teal transition-colors">7259905558</a></span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-squid-pink mt-0.5 group-hover:text-white transition-colors" />
                <div>
                  <span className="block font-code text-xs text-squid-pink/70 mb-0.5">SYS.LOCATION</span>
                  <a href="https://maps.app.goo.gl/bWyLk1W3xV9Wxv438" target="_blank" rel="noopener noreferrer" className="hover:text-squid-teal transition-colors inline-block">
                    KSIT Campus,<br/>
                    Bengaluru, Karnataka
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Line */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-gray-500 font-code tracking-wider text-center md:text-left">
            © {currentYear} SENTINEL HACK 6.0. <span className="hidden sm:inline">ALL RIGHTS RESERVED.</span>
          </p>
          <p className="text-xs sm:text-sm text-squid-pink font-cyber tracking-widest text-center md:text-right animate-pulse">
            LET THE GAMES BEGIN.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;