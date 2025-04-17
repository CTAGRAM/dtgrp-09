
import { useState } from 'react';
import { Check } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import ScrollAnimator from '../../ui/ScrollAnimator';
import { SurveyStepProps } from '../types';
import { ChevronRight } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Step1 = ({ onNext }: SurveyStepProps) => {
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
          <Select value={wasteVolume} onValueChange={setWasteVolume}>
            <SelectTrigger className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background text-foreground dark:bg-card/80">
              <SelectValue placeholder="Select volume" />
            </SelectTrigger>
            <SelectContent className="bg-popover border border-border dark:bg-card dark:border-border">
              <SelectItem value="small" className="focus:bg-primary/10 dark:focus:bg-primary/20">Less than 100 tons</SelectItem>
              <SelectItem value="medium" className="focus:bg-primary/10 dark:focus:bg-primary/20">100-500 tons</SelectItem>
              <SelectItem value="large" className="focus:bg-primary/10 dark:focus:bg-primary/20">500-1000 tons</SelectItem>
              <SelectItem value="enterprise" className="focus:bg-primary/10 dark:focus:bg-primary/20">More than 1000 tons</SelectItem>
            </SelectContent>
          </Select>
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

export default Step1;
