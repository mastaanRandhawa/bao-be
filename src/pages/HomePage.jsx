import Hero from '../components/home/Hero';
import AwardsStrip from '../components/home/AwardsStrip';
import StorySection from '../components/home/StorySection';
import MenuPreview from '../components/home/MenuPreview';
import FamilyTableCta from '../components/home/FamilyTableCta';
import VisitSection from '../components/home/VisitSection';
import BilingualPhrase from '../components/ui/BilingualPhrase';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AwardsStrip />
      <StorySection />
      <MenuPreview />
      <FamilyTableCta />
      <VisitSection />
      <section className="border-t border-ink/10 bg-cream-200 py-20">
        <div className="container-content">
          <BilingualPhrase />
        </div>
      </section>
    </>
  );
}
