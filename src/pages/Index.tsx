import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import SolutionsSection from '../components/home/SolutionsSection';
import StatsSection from '../components/home/StatsSection';
import CtaSection from '../components/shared/CtaSection';
import Layout from '../components/layout/Layout';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <SolutionsSection />
      <StatsSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
