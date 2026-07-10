import { Link } from 'react-router-dom';
import { restaurant, externalLinks } from '../../data/site';
import { navigation } from '../../data/navigation';
import HoursList from '../shared/HoursList';
import AddressBlock from '../shared/AddressBlock';
import InstagramIcon from '../ui/InstagramIcon';

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream-200">
      <div className="container-content grid grid-cols-1 gap-12 py-16 md:grid-cols-3">
        <div>
          <p className="eyebrow mb-4">Visit</p>
          <AddressBlock />
          <a
            href={externalLinks.directions}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block font-display text-xs uppercase tracking-wide text-seal hover:text-seal-dark"
          >
            Get directions →
          </a>
        </div>

        <div>
          <p className="eyebrow mb-4">Hours</p>
          <HoursList />
        </div>

        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2 text-sm">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-ink-soft hover:text-seal">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={externalLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-seal hover:text-seal"
            aria-label="Bao Bei on Instagram"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="container-content flex flex-col items-center justify-between gap-2 py-6 text-xs text-ink-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {restaurant.name} — {restaurant.tagline}.
          </p>
          <p>{restaurant.descriptor}</p>
        </div>
      </div>
    </footer>
  );
}
