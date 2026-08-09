import { BaseModule } from './BaseModule';

export const CapabilitiesModule = () => {
  const capabilities = [
    'Advanced React Architecture',
    'Next.js & Server Components',
    'Cinematic GSAP Motion',
    'TypeScript & Systems Design',
    'AI Agent Engineering'
  ];

  return (
    <BaseModule variant="outline" padding="lg" label="Current Capabilities" className="h-full">
      <ul className="flex flex-col gap-5 font-mono text-[9px] md:text-[10px] tracking-[0.25em] text-neutral-400">
        {capabilities.map((cap, idx) => (
          <li key={idx} className="flex flex-col gap-1.5 group">
            <span className="text-neutral-600 font-bold">0{idx + 1}</span>
            <span className="text-neutral-300 uppercase tracking-widest transition-colors group-hover:text-white">{cap}</span>
            {idx !== capabilities.length - 1 && (
              <div className="h-[1px] w-full bg-neutral-900 mt-2.5"></div>
            )}
          </li>
        ))}
      </ul>
    </BaseModule>
  );
};
