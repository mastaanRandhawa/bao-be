import Button from '../ui/Button';
import { assets, restaurant, externalLinks } from '../../data/site';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={assets.hero}
          alt="Bao Bei still life — lotus root, cleaver, kabocha squash and flowers"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/25" />
        <div className="absolute inset-0 bg-ink/10" />
      </div>

      <div className="container-content flex min-h-[88vh] flex-col justify-end pb-24 pt-32">
        <div className="max-w-2xl">
          <p
            className="font-display text-xs uppercase tracking-brand text-sage animate-fade-up"
            style={{ animationDelay: '150ms' }}
          >
            {restaurant.descriptor}
          </p>
          <h1
            className="mt-5 font-serif text-5xl font-normal leading-[1.02] tracking-tight text-cream animate-fade-up sm:text-7xl"
            style={{ animationDelay: '300ms' }}
          >
            Modern Chinese,
            <br />
            <span className="italic text-sage">made to share</span>
          </h1>
          <p
            className="mt-7 max-w-lg text-lg leading-relaxed text-cream/85 animate-fade-up"
            style={{ animationDelay: '480ms' }}
          >
            {restaurant.blurb}
          </p>
          <div
            className="mt-10 flex flex-col gap-3 animate-fade-up sm:flex-row"
            style={{ animationDelay: '640ms' }}
          >
            <Button href={externalLinks.reservations} variant="seal" size="lg">
              Reserve a Table
            </Button>
            <Button to="/menus" variant="outlineOnDark" size="lg">
              View Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
