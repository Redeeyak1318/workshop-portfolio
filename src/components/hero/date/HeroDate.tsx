'use client';

import { FC, useState, useEffect } from 'react';

export const HeroDate: FC = () => {
  const [dateStr, setDateStr] = useState({ day: '', monthYear: '' });

  useEffect(() => {
    const d = new Date();
    // Dynamic generation based on visitor's local date
    const day = d.toLocaleDateString('en-US', { day: '2-digit' });
    const month = d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
    const year = d.toLocaleDateString('en-US', { year: 'numeric' });
    setDateStr({ day, monthYear: `${month} / ${year}` });
  }, []);

  // Avoid hydration mismatch by waiting until client mounts
  if (!dateStr.day) return null;

  return (
    <div className="flex flex-col items-end text-right pointer-events-none p-3 bg-[#050505]/30 backdrop-blur-md border border-neutral-800/40 min-w-[100px]">
      <div className="font-mono font-medium text-[7px] tracking-[0.4em] text-neutral-400 mb-2 w-full text-right">
        FIELD DATE
      </div>
      <div className="w-full h-[1px] bg-neutral-800/50 mb-3" />
      <div className="text-3xl font-medium tracking-widest text-neutral-100 leading-none mb-2">
        {dateStr.day}
      </div>
      <div className="font-mono font-medium text-[8px] tracking-[0.3em] text-neutral-400">
        {dateStr.monthYear}
      </div>
    </div>
  );
};
