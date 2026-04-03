
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { REGISTRATION_FORM_URL } from '@/config/links';

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
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Prevent body scroll when mobile menu is open
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
    setIsOpen(false); // Close the mobile menu
    
    // Adding a slight delay to ensure the menu closes before scrolling
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        // Using a more robust scrolling method
        window.scrollTo({
          top: element.offsetTop - 80, // Offset to account for navbar height
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-2 bg-black/70 backdrop-blur-md border-b border-white/10' : 'py-3 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center gap-3 min-w-0">
          <Link to="/" className="flex items-center">
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="font-cyber text-lg sm:text-xl md:text-2xl leading-none tracking-wide neon-text-pink">
                SENTINEL
              </span>
              <span className="font-cyber text-lg sm:text-xl md:text-2xl leading-none tracking-wide text-white">
                HACK
              </span>
              <span className="font-cyber text-lg sm:text-xl md:text-2xl leading-none tracking-wide neon-text-teal">
                6.0
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-end gap-2 xl:gap-4 2xl:gap-6 flex-1">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className="font-cyber text-sm xl:text-base uppercase tracking-[0.08em] text-gray-200 hover:text-white transition-colors duration-300 px-1"
              >
                {item.name}
              </button>
            ))}
            <a
              href={REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="squid-button-primary text-sm xl:text-base tracking-[0.1em] ml-1 px-3 xl:px-5 py-2 whitespace-nowrap min-w-[112px]"
            >
              Register
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-white z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden w-full backdrop-blur-lg bg-black/95 border-t border-white/10"
          >
            <div className="px-4 py-6 flex flex-col space-y-5">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="font-cyber text-xl uppercase tracking-wide py-3 text-left text-gray-100 hover:text-squid-pink transition-colors duration-300 border-b border-white/10"
                >
                  {item.name}
                </button>
              ))}
              <a
                href={REGISTRATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setIsOpen(false);
                }}
                className="font-cyber text-lg uppercase tracking-wide bg-gradient-to-r from-squid-pink to-squid-teal px-6 py-3 mt-4 text-center rounded clip-slant shadow-neon-pink block"
              >
                Register Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
