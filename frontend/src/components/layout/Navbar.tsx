import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Replace with your actual import or routing logic for the registration form
const REGISTRATION_FORM_URL = "#register"; 

const navItems = [
  { name: 'Home', path: '/', id: 'home' },
  { name: 'About', path: '/#about', id: 'about' },
  { name: 'Tracks', path: '/#tracks', id: 'tracks' },
  { name: 'Sponsors', path: '/#sponsors', id: 'sponsors' },
  { name: 'FAQs', path: '/#faqs', id: 'faqs' },
  { name: 'Contact', path: '/#contact', id: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    // Set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    
    setTimeout(() => {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80, 
          behavior: 'smooth'
        });
      }
    }, 150);
  };

  const menuVariants = {
    closed: { opacity: 0, y: "-100%", transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const linkVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <header
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? 'bg-[#050505]/90 backdrop-blur-lg py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
          : 'bg-[#050505]/20 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center min-w-0">
          
          {/* Logo Area */}
          <Link 
            to="/" 
            onClick={() => scrollToSection('home')}
            className="flex items-center group cursor-pointer pl-1"
          >
            {/* Custom PNG Logo */}
            <div className={`mr-3 flex items-center transition-all duration-500 ${scrolled ? 'scale-90' : 'scale-100'}`}>
              <img 
                src="/Uploads/4a4281f1-17f9-45e0-ad93-43017c48b04d.png" 
                alt="Sentinel Hack 6.0 Logo" 
                className="h-8 sm:h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,0,91,0.5)] group-hover:drop-shadow-[0_0_12px_rgba(0,191,165,0.6)] transition-all duration-300"
              />
            </div>
            
            <div className={`flex items-center gap-1 sm:gap-2 transition-all duration-500 ${scrolled ? 'scale-95 origin-left' : 'scale-100'}`}>
              <span className="font-cyber text-xl sm:text-2xl font-bold tracking-widest text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                SENTINEL
              </span>
              <span className="font-cyber text-xl sm:text-2xl font-bold tracking-widest text-squid-pink drop-shadow-[0_0_8px_rgba(255,0,91,0.8)]">
                HACK
              </span>
              <span className="font-cyber text-xl sm:text-2xl font-bold tracking-widest text-squid-teal drop-shadow-[0_0_8px_rgba(0,191,165,0.8)] hidden md:inline-block">
                6.0
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-end gap-5 xl:gap-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className="relative group font-cyber text-sm xl:text-base tracking-[0.1em] text-gray-300 hover:text-white transition-colors duration-300 py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-squid-teal transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(0,191,165,0.8)]"></span>
              </button>
            ))}
            
            {/* Premium Register Button */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeCF9SGlPBZCZ8rTXKwjvAXHV14BBcKWy16FSkqST61GADn3Q/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden whitespace-nowrap flex-shrink-0 font-cyber text-sm xl:text-base font-bold tracking-[0.15em] uppercase text-white bg-[#0a0a0a] border border-squid-pink px-6 py-2.5 ml-2 group transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,0,91,0.4)]"
            >
              <span className="absolute inset-0 w-full h-full bg-squid-pink/10 group-hover:bg-squid-pink/20 transition-colors duration-300"></span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-squid-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative z-10 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">REGISTER</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-white z-[110] relative p-2 border border-white/20 rounded-md bg-black/60 backdrop-blur-sm transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} className="text-squid-pink" /> : <Menu size={24} className="text-squid-teal" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[90] lg:hidden w-full h-screen bg-[#050505]/95 backdrop-blur-xl flex flex-col justify-center pt-16"
          >
            <div className="absolute top-1/4 left-[-10%] w-64 h-64 bg-squid-pink/10 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-[-10%] w-64 h-64 bg-squid-teal/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="px-6 py-8 flex flex-col space-y-6 relative z-10 overflow-y-auto max-h-[80vh]">
              {navItems.map((item, index) => (
                <motion.button
                  variants={linkVariants}
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="font-cyber text-2xl uppercase tracking-[0.15em] text-left text-gray-300 hover:text-squid-teal transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 overflow-hidden group-hover:w-6 transition-all duration-300 text-squid-teal mr-0 group-hover:mr-2">▸</span>
                  {item.name}
                </motion.button>
              ))}
              
              <motion.div variants={linkVariants} className="pt-8 mt-4 border-t border-white/10">
                <a
                  href={REGISTRATION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="relative w-full block text-center font-cyber text-xl font-bold uppercase tracking-widest text-white bg-squid-pink/10 border border-squid-pink px-6 py-4 transition-all duration-300 hover:bg-squid-pink/20 hover:shadow-[0_0_25px_rgba(255,0,91,0.1)]"
                >
                  <span className="absolute inset-0 w-full h-full border-t-2 border-b-2 border-squid-pink transform scale-x-0 transition-transform duration-300 origin-center"></span>
                  Initiate Registration
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;