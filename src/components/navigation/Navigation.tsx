'use client';

import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' }
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    // Scroll detection for navbar background
    const handleScroll = () => {
      // Transition when scrolled past 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // IntersectionObserver for active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-10% 0px -80% 0px', // Trigger when section is in top 10% to 20% of screen
        threshold: 0
      }
    );

    // Observe all sections
    NAV_ITEMS.forEach(item => {
      const el = document.getElementById(item.href.substring(1));
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const elem = document.getElementById(targetId);
    if (elem) {
      const navHeight = 80;
      const targetPosition = elem.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
    <nav 
      className={`fixed left-0 top-0 z-[100] flex w-full items-center justify-between px-6 md:px-12 pointer-events-none transition-all duration-500 ${
        isScrolled 
          ? 'py-6 bg-[#050505]/85 backdrop-blur-md border-b border-neutral-800/50 shadow-sm shadow-black/20' 
          : 'pt-8 pb-16 bg-gradient-to-b from-[#050505]/80 via-[#050505]/20 to-transparent border-b border-transparent'
      }`}
    >
      {/* Extremely Minimal Logo */}
      <div 
        className={`font-medium text-[10px] uppercase tracking-[0.6em] pointer-events-auto cursor-pointer transition-colors duration-500 ${isScrolled ? 'text-white' : 'text-neutral-100'}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        R.
      </div>

      <div className="hidden lg:flex items-center gap-16 pointer-events-auto">
        {/* Nav Links */}
        <ul className="flex items-center gap-16 font-medium text-[9px] uppercase tracking-[0.6em] text-neutral-300">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`group relative py-2 transition-all duration-300 ${
                    isActive 
                      ? 'opacity-100 text-white' 
                      : 'opacity-80 hover:opacity-100 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span 
                    className={`absolute bottom-0 left-0 h-[1px] transition-all duration-300 ease-out ${
                      isActive ? 'w-full bg-neutral-200' : 'w-0 bg-neutral-400 group-hover:w-full'
                    }`}
                  ></span>
                </a>
              </li>
            );
          })}
        </ul>
        
        {/* Resume Button */}
        <button 
          onClick={() => setShowResume(true)}
          className="font-mono font-medium text-[8px] tracking-[0.4em] text-neutral-300 hover:text-white pointer-events-auto transition-colors duration-300 uppercase"
        >
          Resume
        </button>
      </div>

      {/* Mobile/Tablet Menu Toggle */}
      <div 
        className={`font-light text-[9px] uppercase tracking-[0.6em] transition-all duration-500 hover:opacity-100 lg:hidden pointer-events-auto cursor-pointer ${isScrolled ? 'text-neutral-300 opacity-90' : 'text-neutral-500 opacity-70'}`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? 'CLOSE' : 'MENU'}
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`absolute top-full left-0 w-full bg-[#050505]/95 backdrop-blur-xl border-b border-neutral-800/50 flex flex-col items-center gap-8 lg:hidden pointer-events-auto overflow-hidden transition-all duration-500 ${
          mobileMenuOpen ? 'max-h-[400px] py-10 opacity-100' : 'max-h-0 py-0 opacity-0 border-b-transparent'
        }`}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.href.substring(1);
          return (
            <a 
              key={item.label}
              href={item.href} 
              onClick={(e) => {
                handleNavClick(e, item.href);
                setMobileMenuOpen(false);
              }}
              className={`text-xs uppercase tracking-[0.5em] transition-all duration-300 ${
                isActive ? 'text-neutral-100' : 'text-neutral-500'
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>

    {/* Resume Overlay */}
    {showResume && (
      <div className="fixed inset-0 z-[200] flex flex-col bg-[#050505]/95 backdrop-blur-md pointer-events-auto transition-all duration-500">
        <div className="flex items-center justify-end p-6 md:p-10">
          <button 
            onClick={() => setShowResume(false)}
            className="font-light text-[10px] uppercase tracking-[0.6em] text-neutral-400 hover:text-neutral-100 transition-colors"
          >
            CLOSE
          </button>
        </div>
        <div className="flex-1 w-full max-w-5xl mx-auto pb-10 px-4 md:px-10">
          <iframe 
            src="/resume.pdf" 
            className="w-full h-full border border-neutral-800/50 rounded-sm bg-white"
            title="Resume"
          />
        </div>
      </div>
    )}
    </>
  );
};
