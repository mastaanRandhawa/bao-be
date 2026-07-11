import { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import MenuItem from '../components/menu/MenuItem';
import Button from '../components/ui/Button';
import { foodMenu, drinkMenu, dietaryLegend, menuNotes } from '../data/menu';
import { externalLinks } from '../data/site';

const TABS = [
  { id: 'food', label: 'Food', sections: foodMenu, pdf: externalLinks.dinnerMenuPdf },
  { id: 'drinks', label: 'Drinks', sections: drinkMenu, pdf: externalLinks.drinkMenuPdf },
];

export default function MenusPage() {
  const [activeId, setActiveId] = useState('food');
  const active = TABS.find((tab) => tab.id === activeId) ?? TABS[0];

  return (
    <>
      <PageHeader
        eyebrow="Menus"
        title="What's on the table"
        description="Small plates meant to be shared. Menus change with the seasons — here’s what we’re serving now."
      />

      <section className="container-content py-16">
        <div className="flex items-center justify-center gap-2" role="tablist" aria-label="Menu type">
          {TABS.map((tab) => {
            const selected = activeId === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={selected}
                aria-controls="menu-panel"
                onClick={() => setActiveId(tab.id)}
                className={`btn px-6 py-2.5 text-xs ${
                  selected ? 'bg-ink text-cream' : 'border border-ink/20 text-ink hover:border-ink'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div
          id="menu-panel"
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          className="mx-auto mt-14 max-w-4xl"
        >
          <div className="grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
            {active.sections.map((section) => (
              <div key={section.id} className="break-inside-avoid">
                <h2 className="mb-2 border-b border-ink/15 pb-3 font-display text-sm uppercase tracking-brand text-seal">
                  {section.title}
                  {section.subtitle && (
                    <span className="mt-1 block font-body text-[0.65rem] normal-case tracking-normal text-ink-muted">
                      {section.subtitle}
                    </span>
                  )}
                </h2>
                <div className="divide-y divide-ink/10">
                  {section.items.map((item) => (
                    <MenuItem key={item.name} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 border-t border-ink/10 pt-6">
            <p className="text-xs text-ink-muted">
              {Object.entries(dietaryLegend).map(([key, label], index) => (
                <span key={key}>
                  {index > 0 && <span className="mx-2">·</span>}
                  <span className="font-medium uppercase text-sage-darker">{key}</span> {label}
                </span>
              ))}
            </p>
            <p className="mt-3 text-xs italic text-ink-muted">
              Please let us know about allergies — many Chinese condiments contain traces of peanuts,
              and soy sauce is fermented with wheat.
            </p>
            {(activeId === 'food' ? menuNotes.food : menuNotes.drinks).map((note) => (
              <p key={note} className="mt-2 text-xs text-ink-muted">
                {note}
              </p>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href={active.pdf} variant="ghost" size="sm">
              Download PDF version →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
