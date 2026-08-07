export const Navigation = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-10 md:px-12 pointer-events-none">
      {/* Extremely Minimal Logo */}
      <div className="font-light text-[10px] uppercase tracking-[0.6em] text-neutral-200 pointer-events-auto">
        R.
      </div>

      <div className="hidden lg:flex items-center gap-16 pointer-events-auto">
        {/* Nav Links */}
        <ul className="flex items-center gap-16 font-light text-[9px] uppercase tracking-[0.6em] text-neutral-500">
          <li>
            <a href="#about" className="group relative opacity-70 transition-all hover:opacity-100 hover:text-neutral-200 py-2">
              About
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-neutral-400 transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#projects" className="group relative opacity-70 transition-all hover:opacity-100 hover:text-neutral-200 py-2">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-neutral-400 transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#research" className="group relative opacity-70 transition-all hover:opacity-100 hover:text-neutral-200 py-2">
              Research
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-neutral-400 transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#lab" className="group relative opacity-70 transition-all hover:opacity-100 hover:text-neutral-200 py-2">
              Lab
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-neutral-400 transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#contact" className="group relative opacity-70 transition-all hover:opacity-100 hover:text-neutral-200 py-2">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-neutral-400 transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          </li>
        </ul>
        
        {/* Metadata Label - No longer absolute, now part of flex layout */}
        <div className="font-mono text-[8px] tracking-[0.4em] text-neutral-600 pointer-events-none">
          CURRENT FILE
        </div>
      </div>

      {/* Mobile/Tablet Menu Placeholder */}
      <div className="font-light text-[9px] uppercase tracking-[0.6em] text-neutral-500 opacity-70 transition-opacity hover:opacity-100 lg:hidden pointer-events-auto">
        Menu
      </div>
    </nav>
  );
};
