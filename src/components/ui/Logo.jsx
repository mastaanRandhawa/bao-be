import { Link } from 'react-router-dom';
import { restaurant, assets } from '../../data/site';

/** Full brand lockup — preserved at every breakpoint (never plain text on mobile). */
export default function Logo() {
  return (
    <Link
      to="/"
      className="inline-flex items-center"
      aria-label={`${restaurant.name} — ${restaurant.tagline}, home`}
    >
      <img
        src={assets.logo}
        alt={`${restaurant.name} ${restaurant.cnName} — ${restaurant.tagline}`}
        className="h-12 w-auto object-contain sm:h-16"
      />
    </Link>
  );
}
