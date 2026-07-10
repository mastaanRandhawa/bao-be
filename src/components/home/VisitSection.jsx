import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import MapEmbed from '../shared/MapEmbed';
import HoursList from '../shared/HoursList';
import { restaurant, externalLinks } from '../../data/site';

export default function VisitSection() {
  return (
    <section className="container-content py-24 sm:py-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <Reveal className="overflow-hidden rounded-sm border border-ink/10 shadow-md">
          <MapEmbed
            minHeight={340}
            className="grayscale transition-all duration-700 hover:grayscale-0"
          />
        </Reveal>

        <Reveal delay={120} className="flex flex-col justify-center">
          <span className="eyebrow">Find Us</span>
          <h2 className="mt-3 display-title text-4xl sm:text-5xl">Visit</h2>

          <address className="mt-6 not-italic leading-relaxed text-ink-soft">
            {restaurant.address.street}, {restaurant.address.city} {restaurant.address.postal}
          </address>
          <a href={restaurant.phoneHref} className="mt-1 block text-ink-soft hover:text-seal">
            {restaurant.phone}
          </a>

          <div className="mt-8">
            <p className="eyebrow mb-3">Hours</p>
            <HoursList />
          </div>

          <div className="mt-8">
            <Button href={externalLinks.directions} variant="primary" size="md">
              Get Directions
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
