
import { useEffect, useRef, useState } from 'react';
import ScrollAnimator from '../ui/ScrollAnimator';

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const Counter = ({ end, duration = 2000, prefix = '', suffix = '' }: CounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return (
    <span ref={countRef}>
      {prefix}{count}{suffix}
    </span>
  );
};

const stats = [
  { value: 45, label: "Reduced Emissions", suffix: "%", description: "Average reduction in carbon emissions" },
  { value: 30, label: "Cost Savings", suffix: "%", description: "Typical operational cost reduction" },
  { value: 2500, label: "Cities Worldwide", prefix: "+", description: "Cities using our platform" },
  { value: 1, label: "Million Tons", suffix: "M", description: "Waste processed monthly" },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimator>
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Impact at Scale</h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform is making a significant difference across the globe.
            </p>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollAnimator key={index} delay={index * 100}>
              <div className="text-center p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300 dark:hover:shadow-card">
                <h3 className="text-4xl md:text-5xl font-bold text-highlight mb-2">
                  <Counter 
                    end={stat.value} 
                    prefix={stat.prefix || ''} 
                    suffix={stat.suffix || ''} 
                  />
                </h3>
                <p className="text-xl font-semibold mb-2 text-foreground">{stat.label}</p>
                <p className="text-muted-foreground">{stat.description}</p>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
