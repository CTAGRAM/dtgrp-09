
import { Truck, BarChart3, Recycle, Globe } from 'lucide-react';
import ScrollAnimator from '../ui/ScrollAnimator';

const features = [
  {
    icon: <Truck className="w-10 h-10 text-primary" />,
    title: 'Route Optimization',
    description: 'AI-powered algorithms optimize collection routes to save fuel and reduce emissions.',
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-primary" />,
    title: 'Real-time Analytics',
    description: 'Monitor collection efficiency, waste volumes, and environmental impact in real-time.',
  },
  {
    icon: <Recycle className="w-10 h-10 text-primary" />,
    title: 'Recycling Insights',
    description: 'Track recycling rates and get actionable insights to improve sustainability metrics.',
  },
  {
    icon: <Globe className="w-10 h-10 text-primary" />,
    title: 'Environmental Impact',
    description: 'Quantify your positive environmental impact with detailed carbon reduction reports.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollAnimator>
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Powerful Features</h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform combines cutting-edge technology with practical solutions to revolutionize waste management.
            </p>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollAnimator key={index} delay={index * 100}>
              <div className="bg-white p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <div className="p-4 bg-primary/10 rounded-lg inline-block mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
