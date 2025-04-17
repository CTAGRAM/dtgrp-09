
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollAnimator from '../ui/ScrollAnimator';

interface CtaSectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  bgColor?: string;
}

const CtaSection = ({
  title = "Ready to transform your waste management?",
  description = "Join thousands of municipalities and waste management companies already optimizing their operations.",
  primaryButtonText = "Get Started",
  primaryButtonLink = "/survey",
  secondaryButtonText = "Learn More",
  secondaryButtonLink = "/about",
  bgColor = "bg-primary/5",
}: CtaSectionProps) => {
  return (
    <section className={`py-20 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimator>
            <h2 className="heading-lg mb-4">{title}</h2>
          </ScrollAnimator>
          
          <ScrollAnimator delay={100}>
            <p className="body-lg text-muted-foreground mb-8">
              {description}
            </p>
          </ScrollAnimator>
          
          <ScrollAnimator delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to={primaryButtonLink} 
                className="btn-primary flex items-center justify-center gap-2"
              >
                {primaryButtonText} <ArrowRight size={18} />
              </Link>
              <Link 
                to={secondaryButtonLink} 
                className="btn-secondary"
              >
                {secondaryButtonText}
              </Link>
            </div>
          </ScrollAnimator>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
