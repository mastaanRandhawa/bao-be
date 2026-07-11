import SectionHeading from '../ui/SectionHeading';
import MenuItem from '../menu/MenuItem';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import { foodMenu } from '../../data/menu';

// Show a couple of highlight sections on the homepage; full menu lives on /menus.
const highlights = foodMenu.filter((s) => ['schnacks', 'petits-cadeaux'].includes(s.id));

export default function MenuPreview() {
  return (
    <section className="bg-cream-200 py-24 sm:py-32">
      <div className="container-content">
        <SectionHeading
          eyebrow="From the Kitchen"
          title="A taste of the menu"
          description="Shareable plates built for the middle of the table. Here’s a small sample."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
          {highlights.map((section, i) => (
            <Reveal key={section.id} delay={i * 120}>
              <h3 className="mb-3 border-b border-ink/15 pb-3 font-display text-sm uppercase tracking-brand text-seal">
                {section.title}
                {section.subtitle && (
                  <span className="mt-1 block font-body text-[0.65rem] normal-case tracking-normal text-ink-muted">
                    {section.subtitle}
                  </span>
                )}
              </h3>
              <div className="divide-y divide-ink/10">
                {section.items.map((item) => (
                  <MenuItem key={item.name} item={item} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-16 text-center">
          <Button to="/menus" variant="primary" size="md">
            See the Full Menu
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
