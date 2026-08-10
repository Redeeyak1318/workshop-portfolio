'use client';

import { useRef } from 'react';
import { GrainOverlay } from '@/components/editorial';
import { ContactForm } from './ContactForm';

export const ContactScene = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="contact" className="relative w-full min-h-screen bg-[#010101] text-neutral-200 py-32 md:py-48 z-40 flex flex-col items-center overflow-x-clip">

      {/* Background Atmosphere - Extremely Quiet */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <GrainOverlay opacity={0.05} />
      </div>

      {/* Embedded Atmospheric Image (Radial Fade) */}
      <div
        className="contact-image absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vh] z-0 opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 60%)',
          maskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)'
        }}
      ></div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 md:px-12 flex flex-col gap-24 md:gap-32">
        
        {/* TOP: End of Document Marker */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="w-[1px] h-12 bg-neutral-800 mb-2"></div>
          <span className="font-mono text-[10px] tracking-[0.5em] text-neutral-500 uppercase">End of Document</span>
        </div>

        {/* MAIN: Let's Connect & Statement */}
        <div className="flex flex-col gap-8 md:gap-12">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-widest uppercase">
            Let's Connect
          </h2>
          <div className="flex flex-col gap-2 text-neutral-400 font-light text-base md:text-lg tracking-wide max-w-xl leading-relaxed">
            <p>Some things are better started with a conversation.</p>
            <p>Find me across the places where I build, learn, and share.</p>
          </div>
        </div>

        {/* MAIN INTERACTION AREA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 pt-8 border-t border-neutral-900">
          
          {/* LEFT: Send a Message */}
          <div className="flex flex-col gap-8">
            <ContactForm />
          </div>

          {/* RIGHT: Find Me Elsewhere */}
          <div className="flex flex-col gap-8 md:pl-16">
            <h3 className="font-mono text-[10px] tracking-[0.2em] text-neutral-600 uppercase">Find me elsewhere</h3>
            
            <div className="flex flex-col gap-6">
              {[
                { name: 'LinkedIn', url: 'https://linkedin.com/in/raktim-sonowal-m1318', handle: '/raktim-sonowal-m1318' },
                { name: 'GitHub', url: 'https://github.com/redeeyak1318', handle: '/redeeyak1318' },
                { name: 'Instagram', url: 'https://www.instagram.com/redeeyak', handle: '/redeeyak' },
                { name: 'LeetCode', url: 'https://leetcode.com/u/Redeeyak', handle: '/u/Redeeyak' }
              ].map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline gap-4 w-fit outline-none"
                >
                  <span className="font-mono text-sm tracking-widest text-neutral-400 uppercase transition-colors duration-300 group-hover:text-neutral-200 group-focus-visible:text-neutral-200">
                    {link.name}
                  </span>
                  <span className="font-mono text-[10px] tracking-wider text-neutral-700 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0">
                    {link.handle} →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* LOWER INFORMATION AREA */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8 pt-16 mt-8 border-t border-neutral-900">
          
          <div className="flex flex-col gap-2">
            <span className="font-mono text-sm tracking-widest text-neutral-300 uppercase">Raktim Sonowal</span>
            <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">Computer Science · Software · Research</span>
          </div>

          <div className="flex flex-col gap-4 md:text-right">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs tracking-wider text-neutral-400 uppercase">Dibrugarh University Institute of Engineering and Technology</span>
              <span className="font-mono text-[10px] tracking-widest text-neutral-600 uppercase">B.Tech — Computer Science & Engineering</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs tracking-wider text-neutral-400 uppercase">IIT Madras</span>
              <span className="font-mono text-[10px] tracking-widest text-neutral-600 uppercase">BS in Data Science and Applications</span>
            </div>
          </div>

          <div className="flex flex-col gap-1 md:text-right">
            <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-500 uppercase">Dibrugarh · Assam · India</span>
          </div>

        </div>

        {/* FINAL DOCUMENT MARK */}
        <div className="flex flex-col items-center gap-2 mt-32">
          <div className="w-1 h-1 bg-neutral-700 rounded-full mb-4"></div>
          <span className="font-mono text-[8px] tracking-[0.3em] text-neutral-600 uppercase text-center leading-relaxed">
            Document End<br/>
            Raktim Sonowal<br/>
            2026
          </span>
        </div>

      </div>
    </section>
  );
};
