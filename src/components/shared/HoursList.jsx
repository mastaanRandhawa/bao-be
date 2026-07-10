import { hours, hoursNote } from '../../data/site';

export default function HoursList({ className = '', showNote = true }) {
  return (
    <>
      <ul className={`max-w-sm space-y-1 text-sm ${className}`.trim()}>
        {hours.map((entry) => (
          <li key={entry.day} className="flex justify-between gap-6 text-ink-soft">
            <span>{entry.day}</span>
            <span className="text-ink-muted">{entry.time}</span>
          </li>
        ))}
      </ul>
      {showNote && <p className="mt-3 text-xs italic text-ink-muted">*{hoursNote}</p>}
    </>
  );
}
