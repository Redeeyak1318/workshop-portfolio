export const AboutHeader = () => {
  return (
    <div className="about-header flex w-full flex-col gap-6 border-b border-neutral-800/40 pb-16 md:pb-24">
      <div className="flex items-center gap-4">
        <div className="h-[1px] w-8 bg-neutral-600 md:w-16"></div>
        <span className="font-mono text-[8px] tracking-[0.4em] text-neutral-500 uppercase">
          System Overview
        </span>
      </div>
      
      <h2 className="text-4xl font-thin uppercase leading-[0.9] tracking-widest text-neutral-100 md:text-6xl lg:text-[7rem]">
        SYSTEM<br />PROFILE
      </h2>
    </div>
  );
};
