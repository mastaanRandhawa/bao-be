import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import { navigation } from '../../data/navigation';
import { externalLinks } from '../../data/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile drawer whenever the route changes.
  useEffect(() => setMobileOpen(false), [location.pathname]);

  const linkClass = ({ isActive }) =>
    `link-underline font-display text-xs uppercase tracking-wide transition-colors ${
      isActive ? 'text-seal' : 'text-ink hover:text-seal'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-out-expo ${
        scrolled ? 'bg-cream/90 shadow-[0_1px_0_rgba(43,41,38,0.08)] backdrop-blur-md' : 'bg-cream'
      }`}
    >
      <nav
        className={`container-content flex items-center justify-between transition-all duration-500 ease-out-expo ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <Logo />

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
          <Button href={externalLinks.reservations} variant="seal" size="sm">
            Reserve
          </Button>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 h-0.5 w-6 bg-ink transition-all ${
                mobileOpen ? 'top-2 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-6 bg-ink transition-all ${
                mobileOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 bg-ink transition-all ${
                mobileOpen ? 'top-2 -rotate-45' : 'top-4'
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-ink/10 bg-cream lg:hidden ${
          mobileOpen ? 'max-h-screen' : 'max-h-0'
        } transition-[max-height] duration-300 ease-in-out`}
      >
        <div className="container-content flex flex-col gap-1 py-4">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `py-3 font-display text-sm uppercase tracking-wide ${
                  isActive ? 'text-seal' : 'text-ink'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button href={externalLinks.reservations} variant="seal" size="md" className="mt-3">
            Reserve a Table
          </Button>
        </div>
      </div>
    </header>
  );
}
