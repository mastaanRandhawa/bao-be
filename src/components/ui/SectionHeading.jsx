import Reveal from './Reveal';

/**
 * Consistent section header: small seal-red eyebrow with an accent rule, a serif
 * display title, and an optional supporting line. Animates in on scroll.
 */
export default function SectionHeading({ eyebrow, title, description, align = 'center', className = '' }) {
  const isCenter = align === 'center';
  const alignment = isCenter ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <Reveal className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-seal/60" aria-hidden="true" />
          <span className="eyebrow">{eyebrow}</span>
          <span className="h-px w-8 bg-seal/60" aria-hidden="true" />
        </Reveal>
      )}
      <Reveal as="h2" delay={80} className="display-title text-4xl sm:text-5xl">
        {title}
      </Reveal>
      {description && (
        <Reveal
          as="p"
          delay={160}
          className={`mt-5 max-w-xl text-lg leading-relaxed text-ink-muted ${isCenter ? 'mx-auto' : ''}`}
        >
          {description}
        </Reveal>
      )}
    </div>
  );
}
