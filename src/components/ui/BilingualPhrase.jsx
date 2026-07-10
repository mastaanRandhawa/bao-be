import Reveal from './Reveal';
import { bilingualPhrase } from '../../data/site';

/**
 * The recurring "I miss you" identity motif, formalized as a reusable three-column
 * (Chinese / pinyin / English) design pattern with staggered scroll reveals.
 */
export default function BilingualPhrase({ className = '' }) {
  const columns = [
    { label: 'Chinese', value: bilingualPhrase.chinese, className: 'font-cn text-3xl text-ink' },
    { label: 'How do I say that?', value: bilingualPhrase.pinyin, className: 'font-serif text-2xl italic text-seal' },
    { label: 'English', value: bilingualPhrase.english, className: 'font-serif text-2xl italic text-ink' },
  ];

  return (
    <div className={`grid grid-cols-1 gap-10 sm:grid-cols-3 ${className}`}>
      {columns.map((col, i) => (
        <Reveal key={col.label} delay={i * 140} className="text-center">
          <p className="eyebrow mb-4">{col.label}</p>
          <p className={col.className}>{col.value}</p>
        </Reveal>
      ))}
    </div>
  );
}
