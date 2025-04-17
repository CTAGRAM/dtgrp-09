
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import ScrollAnimator from '../ui/ScrollAnimator';
import { toast } from '@/components/ui/sonner';

// Step components
const Step1 = ({ onNext }: { onNext: (data: any) => void }) => {
  const [orgType, setOrgType] = useState('');
  const [wasteVolume, setWasteVolume] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orgType || !wasteVolume) {
      toast.error("Please complete all fields to continue");
      return;
    }
    onNext({ orgType, wasteVolume });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <ScrollAnimator>
        <h2 className="heading-md mb-6">Tell us about your organization</h2>
      </ScrollAnimator>

      <ScrollAnimator delay={100}>
        <div className="mb-8">
          <label className="block text-lg font-medium mb-2">Type of organization</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Municipality', 'Waste Management Company', 'Business', 'Other'].map((type) => (
              <div
                key={type}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${
                  orgType === type
                    ? 'border-primary bg-primary/5 shadow-md'
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => setOrgType(type)}
              >
                <div className="flex items-center justify-between">
                  <span>{type}</span>
                  {orgType === type && <Check className="text-primary" size={20} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimator>

      <ScrollAnimator delay={200}>
        <div className="mb-8">
          <label className="block text-lg font-medium mb-2">
            Estimated monthly waste volume
          </label>
          <select
            value={wasteVolume}
            onChange={(e) => setWasteVolume(e.target.value)}
            className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="">Select volume</option>
            <option value="small">Less than 100 tons</option>
            <option value="medium">100-500 tons</option>
            <option value="large">500-1000 tons</option>
            <option value="enterprise">More than 1000 tons</option>
          </select>
        </div>
      </ScrollAnimator>

      <ScrollAnimator delay={300}>
        <div className="flex justify-end">
          <button
            type="submit"
            className="btn-primary flex items-center gap-2"
          >
            Continue <ChevronRight size={18} />
          </button>
        </div>
      </ScrollAnimator>
    </form>
  );
};

const Step2 = ({ onNext, onBack, data }: { onNext: (data: any) => void; onBack: () => void; data: any }) => {
  const [challenges, setChallenges] = useState<string[]>([]);
  const [otherChallenge, setOtherChallenge] = useState('');

  const handleChallengeToggle = (challenge: string) => {
    if (challenges.includes(challenge)) {
      setChallenges(challenges.filter((c) => c !== challenge));
    } else {
      setChallenges([...challenges, challenge]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (challenges.length === 0) {
      toast.error("Please select at least one challenge");
      return;
    }
    
    const finalChallenges = challenges.includes('Other') 
      ? [...challenges.filter(c => c !== 'Other'), otherChallenge]
      : challenges;
      
    onNext({ ...data, challenges: finalChallenges });
  };

  const challengeOptions = [
    'High fuel costs',
    'Inefficient collection routes',
    'Manual tracking systems',
    'Low recycling rates',
    'Limited data insights',
    'Aging fleet',
    'Other'
  ];

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <ScrollAnimator>
        <h2 className="heading-md mb-6">What challenges are you facing?</h2>
      </ScrollAnimator>

      <ScrollAnimator delay={100}>
        <div className="mb-8">
          <label className="block text-lg font-medium mb-2">
            Select all that apply
          </label>
          <div className="space-y-3">
            {challengeOptions.map((challenge) => (
              <div
                key={challenge}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${
                  challenges.includes(challenge)
                    ? 'border-primary bg-primary/5 shadow-md'
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => handleChallengeToggle(challenge)}
              >
                <div className="flex items-center justify-between">
                  <span>{challenge}</span>
                  {challenges.includes(challenge) && <Check className="text-primary" size={20} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimator>

      {challenges.includes('Other') && (
        <ScrollAnimator delay={200}>
          <div className="mb-8">
            <label className="block text-lg font-medium mb-2">
              Please specify your other challenge
            </label>
            <input
              type="text"
              value={otherChallenge}
              onChange={(e) => setOtherChallenge(e.target.value)}
              className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Describe your challenge"
            />
          </div>
        </ScrollAnimator>
      )}

      <ScrollAnimator delay={300}>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onBack}
            className="btn-secondary flex items-center gap-2"
          >
            <ChevronLeft size={18} /> Back
          </button>
          <button
            type="submit"
            className="btn-primary flex items-center gap-2"
          >
            Continue <ChevronRight size={18} />
          </button>
        </div>
      </ScrollAnimator>
    </form>
  );
};

const Step3 = ({ onNext, onBack, data }: { onNext: (data: any) => void; onBack: () => void; data: any }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !email || !organization) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    if (!isPrivacyAccepted) {
      toast.error("Please accept the privacy policy");
      return;
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    onNext({ ...data, name, email, organization });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <ScrollAnimator>
        <h2 className="heading-md mb-6">One last step</h2>
      </ScrollAnimator>

      <ScrollAnimator delay={100}>
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">
            Your name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="Enter your full name"
          />
        </div>
      </ScrollAnimator>

      <ScrollAnimator delay={150}>
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">
            Work email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="your@email.com"
          />
        </div>
      </ScrollAnimator>

      <ScrollAnimator delay={200}>
        <div className="mb-8">
          <label className="block text-lg font-medium mb-2">
            Organization name
          </label>
          <input
            type="text"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="Enter your organization name"
          />
        </div>
      </ScrollAnimator>

      <ScrollAnimator delay={250}>
        <div className="mb-8">
          <div className="flex items-start">
            <input
              type="checkbox"
              id="privacy"
              checked={isPrivacyAccepted}
              onChange={(e) => setIsPrivacyAccepted(e.target.checked)}
              className="mt-1"
            />
            <label htmlFor="privacy" className="ml-2 text-muted-foreground">
              I agree to the <a href="#" className="text-primary underline">privacy policy</a> and consent to being contacted about EcoTrack services.
            </label>
          </div>
        </div>
      </ScrollAnimator>

      <ScrollAnimator delay={300}>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onBack}
            className="btn-secondary flex items-center gap-2"
          >
            <ChevronLeft size={18} /> Back
          </button>
          <button
            type="submit"
            className="btn-primary flex items-center gap-2"
          >
            Submit <Check size={18} />
          </button>
        </div>
      </ScrollAnimator>
    </form>
  );
};

const SuccessStep = () => {
  const navigate = useNavigate();
  
  // Trigger confetti effect when component mounts
  useEffect(() => {
    // Simplified confetti effect for demonstration
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

const SurveyForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  
  const handleNext = (data: any) => {
    const updatedData = { ...formData, ...data };
    setFormData(updatedData);
    
    if (step < 3) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Final submission
      // Here you would typically send the data to your backend
      console.log('Form submitted:', updatedData);
      setStep(4); // Show success
    }
  };
  
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  return (
    <div>
      {step < 4 && (
        <div className="mb-10">
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>Start</span>
            <span>Almost there</span>
            <span>Complete</span>
          </div>
        </div>
      )}
      
      {step === 1 && <Step1 onNext={handleNext} />}
      {step === 2 && <Step2 onNext={handleNext} onBack={handleBack} data={formData} />}
      {step === 3 && <Step3 onNext={handleNext} onBack={handleBack} data={formData} />}
      {step === 4 && <SuccessStep />}
    </div>
  );
};

export default SurveyForm;
