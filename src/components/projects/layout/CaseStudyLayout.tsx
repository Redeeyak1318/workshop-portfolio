import { ReactNode } from 'react';
import { GrainOverlay, BlueprintOverlay } from '@/components/editorial';

interface CaseStudyLayoutProps {
  children: ReactNode;
}

export const CaseStudyLayout = ({ children }: CaseStudyLayoutProps) => {
  return (
    <main className="relative min-h-screen w-full bg-[#050505] text-neutral-200 selection:bg-neutral-800">
      <GrainOverlay opacity={0.03} />
      <BlueprintOverlay opacity={0.02} />
      
      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        {children}
      </div>
    </main>
  );
};
