import { MetadataLabel } from './MetadataLabel';

interface CoordinateLabelProps {
  lat: number;
  lng: number;
  className?: string;
}

export const CoordinateLabel = ({ lat, lng, className = '' }: CoordinateLabelProps) => {
  // Format coordinates (e.g. 35.6762° N, 139.6503° E)
  const latStr = `${Math.abs(lat).toFixed(4)}° ${lat >= 0 ? 'N' : 'S'}`;
  const lngStr = `${Math.abs(lng).toFixed(4)}° ${lng >= 0 ? 'E' : 'W'}`;
  
  return (
    <MetadataLabel className={className}>
      {latStr}, {lngStr}
    </MetadataLabel>
  );
};
