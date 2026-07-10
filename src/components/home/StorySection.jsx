import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';
import { assets, restaurant } from '../../data/site';

export default function StorySection() {
  return (
    <section className="container-content py-24 sm:py-32">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-sm shadow-xl">
            <img
              src={assets.hero}
              alt="A spread of Bao Bei dishes on a dark table"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-sm bg-seal px-6 py-4 text-cream shadow-lg sm:block">
            <span className="font-cn text-lg">{restaurant.cnName}</span>
          </div>
        </Reveal>

        <div>
          <Reveal as="span" className="eyebrow">
            Our Story
          </Reveal>
          <Reveal as="h2" delay={80} className="mt-4 display-title text-4xl sm:text-5xl">
            Precious things,
            <br />
            <span className="italic text-seal">shared at the table</span>
          </Reveal>
          <Reveal as="p" delay={160} className="mt-6 text-lg leading-relaxed text-ink-soft">
            Bao Bei is a Chinese brasserie in the heart of Vancouver’s Chinatown, cultivating
            casual, intimate dining through small plates meant to be shared amongst a group of
            friends and family.
          </Reveal>
          <Reveal as="p" delay={220} className="mt-4 text-lg leading-relaxed text-ink-soft">
            Influences are drawn from Taiwan and China, but we’re equally inspired by a range of
            global flavours that form a more modern approach to Chinese cooking.
          </Reveal>
          <Reveal delay={300} className="mt-8">
            <Link to="/about" className="link-underline font-display text-sm uppercase tracking-wide">
              More about us →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
