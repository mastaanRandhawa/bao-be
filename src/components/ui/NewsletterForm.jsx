import { useState } from 'react';

/**
 * Newsletter signup. Wire the handler to your ESP (Mailchimp, Klaviyo, etc.) on
 * launch; this prototype validates and shows a success state locally.
 */
export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    // TODO: POST to newsletter provider here.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="rounded-sm border border-sage bg-sage/10 px-5 py-4 text-sm text-ink-soft">
        Thanks — you’re on the list. See you at the table.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        className="w-full flex-1 rounded-sm border border-ink/20 bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:border-seal focus:outline-none focus:ring-1 focus:ring-seal"
      />
      <button type="submit" className="btn bg-seal px-7 py-3 text-sm text-cream hover:bg-seal-dark">
        Subscribe
      </button>
    </form>
  );
}
