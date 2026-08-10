'use client';

interface ResearchConnectorProps {
  isActive: boolean;
}

export const ResearchConnector = ({ isActive }: ResearchConnectorProps) => {
  return (
    <div 
      className={`absolute top-1/2 left-1/2 w-24 md:w-32 h-[1px] bg-gradient-to-r from-[#fce7c8] to-transparent origin-left transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] pointer-events-none ${isActive ? 'scale-x-100 opacity-60' : 'scale-x-0 opacity-0'}`}
      style={{
        transform: 'translateY(-50%) rotate(-30deg)',
      }}
    ></div>
  );
};
