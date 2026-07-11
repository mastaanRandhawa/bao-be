import { Link } from 'react-router-dom';

const BASE_LIFT =
  'hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-md';

const VARIANTS = {
  primary: `bg-sage text-ink shadow-md hover:bg-sage-dark ${BASE_LIFT} focus-visible:ring-sage-dark`,
  seal: `bg-seal text-cream shadow-md hover:bg-seal-dark ${BASE_LIFT} focus-visible:ring-seal`,
  outline:
    'border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-cream focus-visible:ring-ink',
  // For dark surfaces — avoids fighting outline’s ink colors via className (Tailwind source order).
  outlineOnDark:
    'border border-cream/40 text-cream hover:border-cream hover:bg-cream hover:text-ink focus-visible:ring-cream',
  ghost: 'text-ink hover:text-seal focus-visible:ring-seal',
};

const SIZES = {
  sm: 'px-5 py-2.5 text-xs',
  md: 'px-8 py-3.5 text-sm',
  lg: 'px-10 py-4 text-sm',
};

/**
 * Polymorphic button: renders an internal <Link>, an external <a>, or a <button>
 * depending on the props provided.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  ...props
}) {
  const classes = `btn ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    const external = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
