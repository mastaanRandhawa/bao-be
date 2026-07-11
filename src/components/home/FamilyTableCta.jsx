import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import { assets, externalLinks } from '../../data/site';

export default function FamilyTableCta() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-28 text-cream sm:py-36">
      <div className="absolute inset-0 -z-10">
        <img
          src={assets.hero}
          alt=""
          aria-hidden="true"
          className="h-full w-full scale-105 object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/70 to-ink/85" />
      </div>

      <div className="container-content text-center">
        <Reveal as="span" className="font-display text-xs uppercase tracking-brand text-sage">
          Gather
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mx-auto mt-5 max-w-2xl font-serif text-4xl font-normal leading-tight tracking-tight text-cream sm:text-6xl"
        >
          The <span className="italic text-sage">Family Table</span>
        </Reveal>
        <Reveal as="p" delay={160} className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
          For parties of 6 to 10, we serve a customized family feast of Bao Bei classics and
          specials — the best way to experience the kitchen.
        </Reveal>
        <Reveal
          delay={240}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button href={externalLinks.familyTable} variant="seal" size="lg">
            Book the Family Table
          </Button>
          <Button to="/family-table" variant="outlineOnDark" size="lg">
            Learn More
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
