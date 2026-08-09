import { BaseModule } from './BaseModule';

export const LocationModule = () => {
  return (
    <BaseModule variant="outline" padding="lg" label="CURRENT LOCATION" className="h-full bg-[#040404]">
      <div className="flex h-full flex-col justify-center gap-1">
        <span className="text-[clamp(1.2rem,2vw,1.875rem)] font-light tracking-widest text-neutral-200 uppercase">
          ASSAM, INDIA
        </span>
        <span className="font-mono text-[9px] tracking-[0.4em] text-neutral-500 uppercase mt-4">
          26.2006° N, 92.9376° E
        </span>
      </div>
    </BaseModule>
  );
};
