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
    <span ref={countRef} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
};

interface ImpactCardProps {
  title: string;
  value: number;
  prefix?: string;
  suffix?: string;
  description: string;
  color?: string;
  icon?: React.ReactNode;
  delay?: number;
}

const ImpactCard = ({
  title,
  value,
  prefix = '',
  suffix = '',
  description,
  color = 'bg-primary',
  icon,
  delay = 0
}: ImpactCardProps) => {
  return (
    <ScrollAnimator delay={delay}>
      <div className="bg-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden dark:bg-secondary/20 dark:border dark:border-border h-full">
        <div className={`${color} h-2`}></div>
        <div className="p-6 dark:bg-card/50 flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg text-foreground dark:text-foreground">{title}</h3>
            {icon && <div className="text-muted-foreground dark:text-muted-foreground/80">{icon}</div>}
          </div>
          
          <div className="mb-3">
            <span className="text-4xl font-bold text-foreground dark:text-foreground">
              <Counter end={value} prefix={prefix} suffix={suffix} />
            </span>
          </div>
          
          <p className="text-muted-foreground text-sm dark:text-muted-foreground/80">{description}</p>
        </div>
      </div>
    </ScrollAnimator>
  );
};

export default ImpactCard;
