import { BaseModule } from './BaseModule';

export const BuildModule = () => {
  const builds = [
    'Workshop Portfolio',
    'Project REDEEYAK',
    'Research Paper',
    'AI Engineering'
  ];

  return (
    <BaseModule variant="solid" padding="lg" label="CURRENT BUILD" className="h-full">
      <div className="flex flex-col gap-5">
        {builds.map((build, idx) => (
          <div key={idx} className="flex flex-col gap-3">
            <span className="text-xs md:text-sm font-light tracking-[0.2em] text-neutral-300 uppercase">
              {build}
            </span>
            {idx !== builds.length - 1 && (
              <div className="h-[1px] w-full bg-neutral-900/60"></div>
            )}
          </div>
        ))}
      </div>
    </BaseModule>
  );
};
