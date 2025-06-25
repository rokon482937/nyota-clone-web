
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustedBySection from '@/components/TrustedBySection';
import DemoSection from '@/components/DemoSection';
import NewFeaturesSection from '@/components/NewFeaturesSection';
import FeaturesSection from '@/components/FeaturesSection';
import UseCasesSection from '@/components/UseCasesSection';
import PrivacySection from '@/components/PrivacySection';
import GetStartedSection from '@/components/GetStartedSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TrustedBySection />
      <DemoSection />
      <NewFeaturesSection />
      <FeaturesSection />
      <UseCasesSection />
      <PrivacySection />
      <GetStartedSection />
      <Footer />
    </div>
  );
};

export default Index;
