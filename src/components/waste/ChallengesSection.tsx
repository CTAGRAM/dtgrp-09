
import ScrollAnimator from '../ui/ScrollAnimator';
import { TrendingUp, AlertTriangle, Zap, Building2 } from 'lucide-react';

const challenges = [
  {
    title: 'Growing Urban Population',
    description: 'Rapid urbanization leads to increased waste generation, straining existing infrastructure.',
    icon: TrendingUp,
    solution: 'Implementing smart waste collection systems and expanding processing facilities.',
  },
  {
    title: 'Improper Waste Segregation',
    description: 'Lack of proper segregation at source hampers recycling and processing efforts.',
    icon: AlertTriangle,
    solution: 'Community education programs and incentivized waste segregation initiatives.',
  },
  {
    title: 'Limited Processing Capacity',
    description: 'Current waste processing facilities are insufficient to handle growing waste volumes.',
    icon: Zap,
    solution: 'Investment in modern waste processing technologies and infrastructure expansion.',
  },
  {
    title: 'Urban Planning Constraints',
    description: 'Dense urban areas pose challenges for waste collection and transportation.',
    icon: Building2,
    solution: 'Optimized route planning and decentralized waste management facilities.',
  },
];

const ChallengesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimator>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-md mb-4">Key Challenges & Solutions</h2>
            <p className="text-muted-foreground">
              Understanding and addressing the major challenges in urban waste management
              is crucial for developing sustainable solutions.
            </p>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge, index) => (
            <ScrollAnimator key={challenge.title} delay={100 + (index * 100)}>
              <div className="bg-card p-6 rounded-xl shadow-md dark:shadow-none border border-border h-full hover:shadow-lg transition-all duration-300">
                <challenge.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{challenge.title}</h3>
                <p className="text-muted-foreground mb-4">{challenge.description}</p>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Solution:</h4>
                  <p className="text-sm text-muted-foreground">{challenge.solution}</p>
                </div>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection; 
