
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import ScrollAnimator from '../ui/ScrollAnimator';
import SplineBackground from './SplineBackground';

const HeroSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const shape1Ref = useRef<HTMLDivElement>(null);
  const shape2Ref = useRef<HTMLDivElement>(null);
  const shape3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      
      const scrollY = window.scrollY;
      const speed = 0.15;
      
      if (shape1Ref.current) {
        shape1Ref.current.style.transform = `translateY(${scrollY * speed * 1.2}px) translateX(${scrollY * speed * -0.5}px)`;
      }
      if (shape2Ref.current) {
        shape2Ref.current.style.transform = `translateY(${scrollY * speed * 0.8}px) translateX(${scrollY * speed * 0.3}px)`;
      }
      if (shape3Ref.current) {
        shape3Ref.current.style.transform = `translateY(${scrollY * speed * -0.5}px) translateX(${scrollY * speed * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-transparent dark:bg-transparent"
      ref={parallaxRef}
    >
      <SplineBackground />
      
      {/* Floating Background Elements with reduced opacity */}
      <div 
        ref={shape1Ref}
        className="absolute top-32 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/5 to-primary/20 rounded-full blur-3xl opacity-30 dark:from-primary/5 dark:to-primary/10"
      />
      <div 
        ref={shape2Ref}
        className="absolute bottom-16 right-1/4 w-48 h-48 bg-gradient-to-tr from-highlight/10 to-highlight/30 rounded-full blur-3xl opacity-30 dark:from-highlight/5 dark:to-highlight/15"
      />
      <div 
        ref={shape3Ref}
        className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-bl from-primary/10 to-highlight/10 rounded-full blur-2xl opacity-40 dark:from-primary/5 dark:to-highlight/5"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <ScrollAnimator>
            <h1 className="heading-xl mb-6 text-gradient">
              Smart Waste Management for Modern Cities
            </h1>
          </ScrollAnimator>
          
          <ScrollAnimator delay={200}>
            <p className="body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Optimize collection routes, reduce operational costs, and make a positive environmental impact with our innovative waste management solutions.
            </p>
          </ScrollAnimator>
          
          <ScrollAnimator delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/survey" className="btn-primary flex items-center justify-center gap-2">
                Take the Survey <ArrowRight size={18} />
              </Link>
              <Link to="/experience" className="btn-secondary">
                See How It Works
              </Link>
            </div>
          </ScrollAnimator>
        </div>
        
        <ScrollAnimator delay={600}>
          <div className="relative max-w-5xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-[#161618] p-2">
              <div className="w-full h-full bg-secondary dark:bg-[#1E1E1E] rounded-xl flex items-center justify-center">
                <div className="p-8 text-center">
                  <div className="inline-block p-4 bg-primary/10 dark:bg-primary/5 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M3 6h18" />
                      <path d="M7 12h10" />
                      <path d="M10 18h4" />
                    </svg>
                  </div>
                  <h3 className="heading-md mb-2 text-foreground">Demo Dashboard</h3>
                  <p className="text-muted-foreground">Interactive visualization coming soon</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 -left-6 h-12 bg-gradient-to-t from-background to-transparent z-10"></div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
};

export default HeroSection;
