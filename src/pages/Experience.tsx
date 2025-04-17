
import Layout from '../components/layout/Layout';
import TruckSimulation from '../components/experience/TruckSimulation';
import CtaSection from '../components/shared/CtaSection';
import ScrollAnimator from '../components/ui/ScrollAnimator';

const Experience = () => {
  return (
    <Layout>
      <section className="pt-20 pb-10 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimator>
            <div className="text-center mb-16">
              <h1 className="heading-lg mb-4">Experience Smart Waste Management</h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                Scroll down to take a virtual journey through our innovative waste management system and see how it transforms urban environments.
              </p>
            </div>
          </ScrollAnimator>
        </div>
      </section>
      
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-4">
          <TruckSimulation />
          
          <div className="mt-20">
            <ScrollAnimator>
              <h2 className="heading-md text-center mb-8">How It Works</h2>
            </ScrollAnimator>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollAnimator delay={100}>
                <div className="bg-secondary/30 p-6 rounded-xl border border-border">
                  <div className="bg-green-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    <span className="text-green-600 font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Data Collection</h3>
                  <p className="text-muted-foreground">
                    Smart bins equipped with sensors monitor fill levels and waste composition in real-time, transmitting data to our central system.
                  </p>
                </div>
              </ScrollAnimator>
              
              <ScrollAnimator delay={200}>
                <div className="bg-secondary/30 p-6 rounded-xl border border-border">
                  <div className="bg-primary/20 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Route Optimization</h3>
                  <p className="text-muted-foreground">
                    Our AI algorithms process this data to generate optimal collection routes, prioritizing bins that are nearing capacity.
                  </p>
                </div>
              </ScrollAnimator>
              
              <ScrollAnimator delay={300}>
                <div className="bg-secondary/30 p-6 rounded-xl border border-border">
                  <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    <span className="text-blue-600 font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Analytics & Insights</h3>
                  <p className="text-muted-foreground">
                    Comprehensive dashboards provide real-time analytics on waste volumes, collection efficiency, recycling rates, and environmental impact.
                  </p>
                </div>
              </ScrollAnimator>
            </div>
          </div>
        </div>
      </section>
      
      <CtaSection 
        title="Ready to revolutionize your waste management?"
        description="Our smart system can be implemented in as little as 30 days, with immediate results and ROI."
        bgColor="bg-secondary"
      />
    </Layout>
  );
};

export default Experience;
