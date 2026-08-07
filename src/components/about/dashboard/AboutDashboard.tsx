import { MissionModule } from '../modules/MissionModule';
import { StackModule } from '../modules/StackModule';
import { LocationModule } from '../modules/LocationModule';
import { BuildModule } from '../modules/BuildModule';
import { TimelineModule } from '../modules/TimelineModule';
import { StatusModule } from '../modules/StatusModule';

export const AboutDashboard = () => {
  return (
    <div className="mt-20 md:mt-32 flex flex-col gap-16 md:gap-24 lg:gap-40">
      
      {/* Row 1: Dominant Story */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <div className="col-span-1 md:col-span-11 lg:col-span-10">
          <MissionModule />
        </div>
      </div>

      {/* Row 2 & 3: Deep Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 lg:gap-24">
        
        {/* Left Column: Timeline */}
        <div className="hidden md:block md:col-span-3 lg:col-span-3 pt-4">
          <TimelineModule />
        </div>

        {/* Center & Right Columns */}
        <div className="col-span-1 md:col-span-9 lg:col-span-9 flex flex-col gap-8 md:gap-16 lg:gap-24">
          
          {/* Sub-Row A: Build & Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24">
            <BuildModule />
            <StatusModule />
          </div>

          {/* Sub-Row B: Stack & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24">
            <StackModule />
            <LocationModule />
          </div>

        </div>

        {/* Mobile Timeline (renders at bottom on small screens) */}
        <div className="block md:hidden col-span-1 mt-8">
          <TimelineModule />
        </div>

      </div>

    </div>
  );
};
