import { BaseModule } from './BaseModule';

export const StatusModule = () => {
  return (
    <BaseModule label="STATUS" className="h-full">
      <div className="flex h-full flex-col justify-between gap-12">
        <ul className="flex flex-col gap-4 font-mono text-[9px] tracking-[0.4em] text-neutral-500 uppercase">
          <li className="flex items-center gap-4"><span className="h-1 w-1 bg-neutral-700 rounded-full"></span> Learning</li>
          <li className="flex items-center gap-4"><span className="h-1 w-1 bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.5)]"></span> Building</li>
          <li className="flex items-center gap-4"><span className="h-1 w-1 bg-neutral-700 rounded-full"></span> Researching</li>
        </ul>

        <div className="flex flex-col gap-8 border-t border-neutral-800/40 pt-10">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-neutral-600">Version</span>
            <span className="text-sm font-light tracking-widest text-neutral-300">v0.3</span>
          </div>
          
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-neutral-600">Current Focus</span>
            <span className="text-sm font-light tracking-widest text-neutral-300 uppercase">Frontend Architecture</span>
          </div>
        </div>
      </div>
    </BaseModule>
  );
};
