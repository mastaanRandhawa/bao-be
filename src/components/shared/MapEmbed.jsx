import { mapEmbedUrl } from '../../data/site';

export default function MapEmbed({ minHeight = 340, className = '' }) {
  return (
    <iframe
      title="Map to Bao Bei, 163 Keefer Street, Vancouver"
      src={mapEmbedUrl}
      className={`h-full w-full ${className}`.trim()}
      style={{ minHeight }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
