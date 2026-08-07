import { BaseModule } from './BaseModule';

export const StackModule = () => {
  const stack = [
    'Advanced React',
    'Next.js',
    'GSAP',
    'Three.js',
    'AI Agents',
    'System Design'
  ];

  return (
    <BaseModule label="CAPABILITIES" className="h-full">
      <ul className="flex flex-col gap-6">
        {stack.map((item, idx) => (
          <li key={idx} className="flex items-center gap-6">
            <span className="font-mono text-[8px] text-neutral-600">
              {(idx + 1).toString().padStart(2, '0')}
            </span>
            <span className="text-sm font-light tracking-widest text-neutral-300 uppercase">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </BaseModule>
  );
};
