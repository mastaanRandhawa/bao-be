/** Compact hero used at the top of interior pages, with a staggered entrance. */
export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-cream-200">
      {/* Soft decorative seal watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-16 select-none font-cn text-[12rem] leading-none text-seal/[0.04] sm:text-[16rem]"
      >
        宝
      </span>

      <div className="container-content relative py-20 text-center sm:py-24">
        {eyebrow && (
          <p className="eyebrow mb-5 animate-fade-up">{eyebrow}</p>
        )}
        <h1
          className="display-title text-5xl animate-fade-up sm:text-6xl"
          style={{ animationDelay: '90ms' }}
        >
          {title}
        </h1>
        {description && (
          <p
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted animate-fade-up"
            style={{ animationDelay: '180ms' }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
