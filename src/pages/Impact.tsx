import Layout from '../components/layout/Layout';
import ImpactCard from '../components/impact/ImpactCard';
import ScrollAnimator from '../components/ui/ScrollAnimator';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import SurveyResults from '../components/survey/SurveyResults';
import WasteGenerationData from '../components/waste/WasteGenerationData';
import ChallengesSection from '../components/challenges/ChallengesSection';
import CtaSection from '../components/shared/CtaSection';

const stats = [
  { 
    value: 40, 
    label: "Waste Issues Solved", 
    suffix: "%", 
    description: "Issues solved by installing more public dustbins" 
  },
  { 
    value: 50, 
    label: "Efficiency Improvement", 
    suffix: "%", 
    description: "Through timely and regular municipal pickups" 
  },
  { 
    value: 77, 
    label: "Hygiene Problems", 
    suffix: "%", 
    description: "Prevented by avoiding overflowing bins" 
  },
  { 
    value: 87, 
    label: "Festival Waste Management", 
    suffix: "%", 
    description: "Surge managed with special weekend collection" 
  }
];

const Impact = () => {
  return (
    <Layout>
      <section className="pt-20 pb-8 bg-background">
        <div className="container mx-auto px-4">
          <ScrollAnimator>
            <div className="text-center mb-16">
              <h1 className="heading-lg mb-4">Waste Management Impact</h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive analysis of waste management challenges and solutions across Indian cities.
              </p>
            </div>
          </ScrollAnimator>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <ImpactCard
                key={index}
                title={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                description={stat.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      <WasteGenerationData />
      <SurveyResults />
      <ChallengesSection />
      <CtaSection />
    </Layout>
  );
};

export default Impact;
