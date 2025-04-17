
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import ScrollAnimator from '../../ui/ScrollAnimator';

const SuccessStep = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const createConfetti = () => {
      for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        
        const colors = ['#6366F1', '#FACC15', '#22C55E', '#EF4444'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
          confetti.remove();
        }, 5000);
      }
    };
    
    createConfetti();
  }, []);

  return (
    <div className="max-w-xl mx-auto text-center">
      <ScrollAnimator>
        <div className="inline-block p-4 bg-green-100 rounded-full mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>
      </ScrollAnimator>
      
      <ScrollAnimator delay={100}>
        <h2 className="heading-md mb-4">Thank you for your submission!</h2>
      </ScrollAnimator>
      
      <ScrollAnimator delay={200}>
        <p className="body-lg text-muted-foreground mb-8">
          Our team will analyze your responses and prepare a personalized demo. We'll contact you within 24 hours at the email address you provided.
        </p>
      </ScrollAnimator>
      
      <ScrollAnimator delay={300}>
        <div className="space-y-4">
          <button
            onClick={() => navigate('/impact')}
            className="btn-primary w-full"
          >
            See Your Potential Impact
          </button>
          
          <button
            onClick={() => navigate('/')}
            className="btn-secondary w-full"
          >
            Return to Home
          </button>
        </div>
      </ScrollAnimator>
    </div>
  );
};

export default SuccessStep;
