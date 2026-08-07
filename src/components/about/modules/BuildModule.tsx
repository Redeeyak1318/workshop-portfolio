import { BaseModule } from './BaseModule';

export const BuildModule = () => {
  const builds = [
    'Workshop Portfolio',
    'Project REDEEYAK',
    'Research Paper',
    'AI Engineering'
  ];

  return (
    <BaseModule label="CURRENT BUILD" className="h-full">
      <div className="flex flex-col gap-8">
        {builds.map((build, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            <span className="text-xl font-light tracking-widest text-neutral-200 uppercase">
              {build}
            </span>
            {idx !== builds.length - 1 && (
              <div className="h-[1px] w-full max-w-[120px] bg-neutral-800/40"></div>
            )}
          </div>
        ))}
      </div>
    </BaseModule>
  );
};
