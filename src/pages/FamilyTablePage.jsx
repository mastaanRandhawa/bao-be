import PageHeader from '../components/ui/PageHeader';
import Button from '../components/ui/Button';
import { familyTable } from '../data/content';
import { externalLinks, restaurant } from '../data/site';

export default function FamilyTablePage() {
  return (
    <>
      <PageHeader
        eyebrow="Gather"
        title="Family Table"
        description={familyTable.intro}
      />

      <section className="container-content py-16">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-2">
          <div className="rounded-sm border border-ink/10 bg-cream-200 p-8">
            <p className="eyebrow mb-3">The Feast</p>
            <p className="text-3xl font-display text-ink">{familyTable.pricing}</p>
            <p className="mt-4 leading-relaxed text-ink-soft">{familyTable.seatings}</p>
            <Button href={externalLinks.familyTable} variant="seal" size="md" className="mt-6">
              Check Availability
            </Button>
          </div>

          <div className="rounded-sm border border-ink/10 bg-cream-200 p-8">
            <p className="eyebrow mb-3">Private Buyouts</p>
            <p className="leading-relaxed text-ink-soft">{familyTable.buyouts}</p>
            <Button href={`mailto:${restaurant.email}`} variant="outline" size="md" className="mt-6">
              Email Us
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <p className="eyebrow mb-4">Family Table Policies</p>
          <ul className="space-y-3 text-sm leading-relaxed text-ink-soft">
            {familyTable.policies.map((policy, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-seal" />
                {policy}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
