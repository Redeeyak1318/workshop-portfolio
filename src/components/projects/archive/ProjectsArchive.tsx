import { TechnicalDivider } from '@/components/editorial';

export const ProjectsArchive = () => {
  const archiveItems = [
    { id: '01', title: 'Project REDEEYAK', category: 'AI Engineering', status: 'Active' },
    { id: '02', title: 'Workshop Portfolio', category: 'Frontend Arch', status: 'Active' },
    { id: '03', title: 'FoundersKick', category: 'Fullstack Platform', status: 'Completed' },
    { id: '04', title: 'Research Paper', category: 'Academic', status: 'Published' },
    { id: '05', title: 'IEEE Engineering', category: 'Hardware/IoT', status: 'Archive' },
    { id: '06', title: 'EUREEKA Internship', category: 'Software Eng', status: 'Completed' },
    { id: '07', title: 'AI Engineering', category: 'ML Systems', status: 'IN PROGRESS' },
    { id: '08', title: 'Algorithm Archive', category: 'Computer Science', status: 'IN PROGRESS' },
    { id: '09', title: 'Future Lab', category: 'R&D', status: 'CONCEPT' },
  ];

  return (
    <div className="flex w-full flex-col border-t border-neutral-800/40 pt-16 md:pt-24 transition-sweep-target">
      <div className="mb-12 flex items-center gap-4">
        <div className="h-[2px] w-[2px] bg-neutral-600"></div>
        <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-neutral-500">
          Complete Index
        </span>
      </div>

      <div className="flex flex-col gap-0 editorial-fade-layer">
        {archiveItems.map((item) => {
          const isPending = item.status === 'IN PROGRESS' || item.status === 'CONCEPT';
          
          return (
            <div 
              key={item.id} 
              className={`group flex flex-col gap-4 border-b border-neutral-800/30 py-8 md:flex-row md:items-end md:justify-between transition-colors hover:border-neutral-700/60 ${isPending ? 'opacity-60 grayscale' : 'opacity-100'}`}
            >
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[8px] tracking-[0.3em] text-neutral-600">{item.id}</span>
                <h4 className={`text-xl font-light tracking-widest uppercase md:text-2xl ${isPending ? 'text-neutral-500' : 'text-neutral-300 group-hover:text-neutral-100'}`}>
                  {item.title}
                </h4>
              </div>
              
              <div className="flex flex-col gap-2 md:text-right">
                <span className="font-mono text-[8px] tracking-[0.3em] text-neutral-500 uppercase">
                  {item.category}
                </span>
                <span className={`font-mono text-[9px] tracking-[0.4em] uppercase ${isPending ? 'text-neutral-700 font-bold' : 'text-neutral-600'}`}>
                  {isPending ? `[${item.status}]` : item.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-16 opacity-50">
        <TechnicalDivider />
      </div>
    </div>
  );
};
