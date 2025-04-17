
import { useState } from 'react';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import SuccessStep from './steps/SuccessStep';

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
          <div className="h-2 bg-secondary rounded-full overflow-hidden dark:bg-secondary/40">
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
