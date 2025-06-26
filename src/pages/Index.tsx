
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustedBySection from '@/components/TrustedBySection';
import FeaturesSection from '@/components/FeaturesSection';
import BenefitsSection from '@/components/BenefitsSection';
import NewFeaturesSection from '@/components/NewFeaturesSection';
import DemoSection from '@/components/DemoSection';
import UseCasesSection from '@/components/UseCasesSection';
import GetStartedSection from '@/components/GetStartedSection';
import PrivacySection from '@/components/PrivacySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TrustedBySection />
      <FeaturesSection />
      <BenefitsSection />
      <NewFeaturesSection />
      <DemoSection />
      <UseCasesSection />
      <GetStartedSection />
      <PrivacySection />
      <Footer />
    </div>
  );
};

export default Index;
