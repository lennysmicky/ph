import HeroSection from '../components/home/HeroSection';
import ServicesPreview from '../components/home/ServicesPreview';
import StatsSection from '../components/home/StatsSection';
import DomainsPreview from '../components/home/DomainsPreview';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesPreview />
      <StatsSection />
      <DomainsPreview />
      <CTASection />
    </div>
  );
};

export default Home;