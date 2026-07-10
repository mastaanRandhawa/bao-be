import PageHeader from '../components/ui/PageHeader';
import NewsletterForm from '../components/ui/NewsletterForm';
import Button from '../components/ui/Button';
import MapEmbed from '../components/shared/MapEmbed';
import HoursList from '../components/shared/HoursList';
import AddressBlock from '../components/shared/AddressBlock';
import { externalLinks } from '../data/site';

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Get in touch" />

      <section className="container-content py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Visit</p>
            <AddressBlock labeled />

            <div className="mt-8">
              <p className="eyebrow mb-3">Hours</p>
              <HoursList />
            </div>

            <div className="mt-8 flex gap-3">
              <Button href={externalLinks.reservations} variant="seal" size="md">
                Reserve
              </Button>
              <Button href={externalLinks.directions} variant="outline" size="md">
                Directions
              </Button>
            </div>

            <div className="mt-10 border-t border-ink/10 pt-8">
              <p className="eyebrow mb-3">Sign up to our newsletter</p>
              <NewsletterForm />
            </div>
          </div>

          <div className="overflow-hidden rounded-sm border border-ink/10 shadow-sm">
            <MapEmbed minHeight={420} />
          </div>
        </div>
      </section>
    </>
  );
}
