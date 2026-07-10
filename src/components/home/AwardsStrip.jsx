import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';
import { awards } from '../../data/content';

// Surface the top trust signals (Michelin!) that were buried on the old /new-page.
const featured = awards.slice(0, 3);

export default function AwardsStrip() {
  return (
    <section className="border-y border-ink/10 bg-cream py-16">
      <div className="container-content">
        <Reveal as="p" className="eyebrow mb-10 text-center">
          As Recognized By
        </Reveal>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {featured.map((award, i) => (
            <Reveal key={award.title} delay={i * 120} className="group text-center">
              <p className="font-serif text-2xl italic text-ink">{award.title.split(' — ')[0]}</p>
              <p className="mt-2 font-display text-xs uppercase tracking-wide text-seal">
                {award.years}
              </p>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/press"
            className="font-display text-xs uppercase tracking-wide text-ink-muted transition-colors hover:text-seal"
          >
            <span className="link-underline">All press & awards →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
