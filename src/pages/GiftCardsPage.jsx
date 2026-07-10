import PageHeader from '../components/ui/PageHeader';
import Button from '../components/ui/Button';
import { externalLinks, restaurant } from '../data/site';

export default function GiftCardsPage() {
  return (
    <>
      <PageHeader eyebrow="Gift Cards" title="Give the gift of Bao Bei" />

      <section className="container-content py-16">
        <div className="mx-auto max-w-2xl rounded-sm border border-ink/10 bg-cream-200 p-10 text-center">
          <span className="font-cn text-3xl text-seal">{restaurant.cnName}</span>
          <p className="mt-6 leading-relaxed text-ink-soft">
            We offer physical gift cards in any denomination at the restaurant, or you can purchase
            an eGift Card online — delivered straight to their inbox.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={externalLinks.giftCards} variant="seal" size="md">
              Buy an eGift Card
            </Button>
            <Button href={`mailto:${restaurant.email}`} variant="outline" size="md">
              Ask About Physical Cards
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
