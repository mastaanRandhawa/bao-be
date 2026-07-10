import Button from '../components/ui/Button';
import { restaurant } from '../data/site';

export default function NotFoundPage() {
  return (
    <section className="container-content flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="font-cn text-4xl text-seal">{restaurant.cnName}</span>
      <h1 className="mt-6 text-3xl font-normal uppercase tracking-wide">Page not found</h1>
      <p className="mt-4 max-w-md text-ink-muted">
        The page you’re looking for has wandered off. Let’s get you back to the table.
      </p>
      <Button to="/" variant="seal" size="md" className="mt-8">
        Back Home
      </Button>
    </section>
  );
}
