import PageHeader from '../components/ui/PageHeader';
import { awards } from '../data/content';

export default function PressPage() {
  return (
    <>
      <PageHeader
        eyebrow="Press"
        title="Awards & Recognition"
        description="We’re grateful to be counted among Vancouver’s and Canada’s best."
      />

      <section className="container-content py-16">
        <ul className="mx-auto max-w-3xl divide-y divide-ink/10 border-y border-ink/10">
          {awards.map((award) => (
            <li key={award.title} className="flex flex-col gap-1 py-6 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-display text-base uppercase tracking-wide text-ink">
                {award.title}
              </span>
              <span className="font-display text-sm text-seal">{award.years}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
