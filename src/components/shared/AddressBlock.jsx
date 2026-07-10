import { restaurant } from '../../data/site';

export default function AddressBlock({ labeled = false }) {
  return (
    <>
      <address className="not-italic leading-relaxed text-ink-soft">
        {restaurant.address.street}
        <br />
        {restaurant.address.city} {restaurant.address.postal}
      </address>
      <p className="mt-4 leading-relaxed">
        <a href={restaurant.phoneHref} className="block hover:text-seal">
          {labeled ? `T. ${restaurant.phone}` : restaurant.phone}
        </a>
        <a href={`mailto:${restaurant.email}`} className="block hover:text-seal">
          {labeled ? `E. ${restaurant.email}` : restaurant.email}
        </a>
      </p>
    </>
  );
}
