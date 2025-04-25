
import { useEffect, useRef } from 'react';
import Layout from '../components/layout/Layout';
import { Card } from '@/components/ui/card';
import CtaSection from '../components/shared/CtaSection';
import ScrollAnimator from '../components/ui/ScrollAnimator';
import JourneySimulation from '../components/experience/JourneySimulation';

const Experience = () => {
  const journeyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize any page-level animations if needed
  }, []);

  return (
    <Layout>
      <section className="pt-20 pb-10 bg-background">
        <div className="container mx-auto px-4">
          <ScrollAnimator>
            <div className="text-center mb-16">
              <h1 className="heading-lg mb-4 text-foreground">Experience Smart Waste Management</h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                Scroll down to take a virtual journey through our innovative waste management system and see how it transforms urban environments.
              </p>
            </div>
          </ScrollAnimator>
        </div>
      </section>
      
      <section ref={journeyRef} className="pb-20 bg-background">
        <div className="container mx-auto px-4">
          <JourneySimulation />
          
          <div className="mt-20">
            <ScrollAnimator>
              <h2 className="heading-md text-center mb-8 text-foreground">How It Works</h2>
            </ScrollAnimator>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollAnimator delay={100}>
                <Card className="p-6 hover:shadow-lg transition-all duration-300 dark:hover:shadow-card">
                  <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Data Collection</h3>
                  <p className="text-muted-foreground">
                    Smart bins equipped with sensors monitor fill levels and waste composition in real-time, transmitting data to our central system.
                  </p>
                </Card>
              </ScrollAnimator>
              
              <ScrollAnimator delay={200}>
                <Card className="p-6 hover:shadow-lg transition-all duration-300 dark:hover:shadow-card">
                  <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Route Optimization</h3>
                  <p className="text-muted-foreground">
                    Our AI algorithms process this data to generate optimal collection routes, prioritizing bins that are nearing capacity.
                  </p>
                </Card>
              </ScrollAnimator>
              
              <ScrollAnimator delay={300}>
                <Card className="p-6 hover:shadow-lg transition-all duration-300 dark:hover:shadow-card">
                  <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Analytics & Insights</h3>
                  <p className="text-muted-foreground">
                    Comprehensive dashboards provide real-time analytics on waste volumes, collection efficiency, recycling rates, and environmental impact.
                  </p>
                </Card>
              </ScrollAnimator>
            </div>
          </div>
        </div>
      </section>
      
      <CtaSection 
        title="Ready to revolutionize your waste management?"
        description="Our smart system can be implemented in as little as 30 days, with immediate results and ROI."
        bgColor="bg-background"
      />
    </Layout>
  );
};

export default Experience;
