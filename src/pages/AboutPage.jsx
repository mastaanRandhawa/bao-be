import PageHeader from '../components/ui/PageHeader';
import Accordion from '../components/ui/Accordion';
import BilingualPhrase from '../components/ui/BilingualPhrase';
import { faqs } from '../data/content';
import { restaurant } from '../data/site';

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About + FAQ" title="Bao Bei" />

      <section className="container-content py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-ink-soft">
            {restaurant.name} is a unique restaurant in Vancouver’s Chinatown that cultivates casual,
            intimate dining experiences by providing small plates meant to be shared amongst a group
            of friends and family. Influences are taken from Taiwan and China, but we are also
            inspired by a range of global flavours that form a more modern approach to Chinese cooking.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="mb-8 text-center text-2xl font-normal uppercase tracking-wide">
            Frequently Asked
          </h2>
          <Accordion items={faqs} />
        </div>
      </section>

      <section className="border-t border-ink/10 bg-cream-200 py-20">
        <div className="container-content">
          <BilingualPhrase />
        </div>
      </section>
    </>
  );
}
