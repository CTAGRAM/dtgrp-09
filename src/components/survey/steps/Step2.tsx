
import { useState } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import ScrollAnimator from '../../ui/ScrollAnimator';
import { SurveyStepProps } from '../types';

const Step2 = ({ onNext, onBack, data }: SurveyStepProps) => {
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
              className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background text-foreground"
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

export default Step2;
