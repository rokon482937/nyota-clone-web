
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustedBySection from '@/components/TrustedBySection';
import FeaturesSection from '@/components/FeaturesSection';
import PrivacySection from '@/components/PrivacySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TrustedBySection />
      <FeaturesSection />
      <PrivacySection />
      <Footer />
    </div>
  );
};

export default Index;
