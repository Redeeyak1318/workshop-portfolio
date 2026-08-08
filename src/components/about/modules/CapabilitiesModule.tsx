import { BaseModule } from './BaseModule';

export const CapabilitiesModule = () => {
  return (
    <BaseModule label="Current Capabilities">
      <ul className="flex flex-col gap-4 font-mono text-[10px] tracking-[0.2em] text-neutral-400">
        <li className="flex items-center gap-4">
          <span className="text-neutral-600">01</span>
          <span className="text-neutral-300 uppercase">Advanced React Architecture</span>
        </li>
        <li className="flex items-center gap-4">
          <span className="text-neutral-600">02</span>
          <span className="text-neutral-300 uppercase">Next.js & Server Components</span>
        </li>
        <li className="flex items-center gap-4">
          <span className="text-neutral-600">03</span>
          <span className="text-neutral-300 uppercase">Cinematic GSAP Motion</span>
        </li>
        <li className="flex items-center gap-4">
          <span className="text-neutral-600">04</span>
          <span className="text-neutral-300 uppercase">TypeScript & Systems Design</span>
        </li>
        <li className="flex items-center gap-4">
          <span className="text-neutral-600">05</span>
          <span className="text-neutral-300 uppercase">AI Agent Engineering</span>
        </li>
      </ul>
    </BaseModule>
  );
};
