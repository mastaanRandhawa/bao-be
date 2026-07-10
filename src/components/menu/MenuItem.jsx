/** A single dish/drink row with a dotted leader between name and price. */
export default function MenuItem({ item }) {
  return (
    <div className="group flex items-baseline gap-3 py-3.5 transition-colors">
      <div className="min-w-0">
        <h4 className="font-display text-base uppercase tracking-wide text-ink transition-colors group-hover:text-seal">
          {item.name}
          {item.tags?.length > 0 && (
            <span className="ml-2 inline-flex gap-1 align-middle">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-sage-darker/40 px-1.5 py-px font-body text-[0.6rem] font-medium uppercase tracking-wide text-sage-darker"
                >
                  {tag}
                </span>
              ))}
            </span>
          )}
        </h4>
        {item.desc && <p className="mt-1 text-sm text-ink-muted">{item.desc}</p>}
      </div>
      <span className="mx-2 flex-1 border-b border-dotted border-ink/25" aria-hidden="true" />
      <span className="font-serif text-lg text-ink">{item.price}</span>
    </div>
  );
}
