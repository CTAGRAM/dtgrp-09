import ScrollAnimator from '../ui/ScrollAnimator';
import Counter from '../ui/Counter';

interface StatItem {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  description: string;
}

const stats: StatItem[] = [
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

const StatsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimator>
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Where We Can Make the Biggest Impact</h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Our solutions directly address the most pressing waste management challenges
            </p>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <ScrollAnimator key={index} delay={index * 100}>
              <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300 dark:hover:shadow-card h-full">
                <h3 className="text-4xl md:text-5xl font-bold text-highlight mb-2">
                  <Counter 
                    end={stat.value} 
                    prefix={stat.prefix} 
                    suffix={stat.suffix} 
                  />
                </h3>
                <p className="text-xl font-semibold mb-2 text-foreground line-clamp-1">{stat.label}</p>
                <p className="text-muted-foreground h-12 line-clamp-2">{stat.description}</p>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
