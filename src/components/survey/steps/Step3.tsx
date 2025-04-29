import { useState } from 'react';
import { Check, ChevronLeft } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import ScrollAnimator from '../../ui/ScrollAnimator';
import { SurveyStepProps } from '../types';

const Step3 = ({ onNext, onBack, data }: SurveyStepProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !organization) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    if (!isPrivacyAccepted) {
      toast.error("Please accept the privacy policy");
      return;
    }
    
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
            className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background text-foreground"
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
            className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background text-foreground"
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
            className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background text-foreground"
            placeholder="Enter your organization name"
          />
        </div>
      </ScrollAnimator>

      <ScrollAnimator delay={250}>
        <div className="mb-8">
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              checked={isPrivacyAccepted}
              onChange={(e) => setIsPrivacyAccepted(e.target.checked)}
              className="mt-1"
            />
            <span className="text-sm text-muted-foreground">
              I agree to the <a href="#" className="text-primary underline">privacy policy</a> and consent to being contacted about EcoBin services.
            </span>
          </label>
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
            className="btn-primary"
          >
            Submit
          </button>
        </div>
      </ScrollAnimator>
    </form>
  );
};

export default Step3;
