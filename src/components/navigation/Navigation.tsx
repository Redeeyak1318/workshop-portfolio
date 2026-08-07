export const Navigation = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-10 md:px-12">
      {/* Extremely Minimal Logo */}
      <div className="font-light text-[10px] uppercase tracking-[0.6em] text-neutral-200">
        R.
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex items-center gap-16 font-light text-[9px] uppercase tracking-[0.6em] text-neutral-500">
        <li>
          <a href="#about" className="opacity-70 transition-opacity hover:opacity-100">About</a>
        </li>
        <li>
          <a href="#projects" className="opacity-70 transition-opacity hover:opacity-100">Projects</a>
        </li>
        <li>
          <a href="#research" className="opacity-70 transition-opacity hover:opacity-100">Research</a>
        </li>
        <li>
          <a href="#lab" className="opacity-70 transition-opacity hover:opacity-100">Lab</a>
        </li>
        <li>
          <a href="#contact" className="opacity-70 transition-opacity hover:opacity-100">Contact</a>
        </li>
      </ul>

      {/* Mobile Menu Placeholder */}
      <div className="font-light text-[9px] uppercase tracking-[0.6em] text-neutral-500 opacity-70 transition-opacity hover:opacity-100 md:hidden">
        Menu
      </div>
    </nav>
  );
};
