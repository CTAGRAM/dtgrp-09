
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/sonner';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import SuccessStep from './steps/SuccessStep';
import { supabase } from '@/integrations/supabase/client';

const SurveyForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  
  const handleNext = (data: any) => {
    const updatedData = { ...formData, ...data };
    setFormData(updatedData);
    
    if (step < 3) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Final submission to Supabase
      submitToSupabase(updatedData);
    }
  };
  
  const submitToSupabase = async (data: any) => {
    try {
      setSubmitting(true);
      
      // Extract the challenges array from the data
      const { challenges = [], ...surveyData } = data;
      
      // Prepare the survey response data
      const surveyResponseData = {
        org_type: surveyData.orgType,
        waste_volume: surveyData.wasteVolume,
        full_name: surveyData.name,
        email: surveyData.email,
        organization_name: surveyData.organization,
        privacy_accepted: true
      };
      
      // Insert the main survey response
      const { data: surveyResponse, error: surveyError } = await supabase
        .from('survey_responses')
        .insert(surveyResponseData)
        .select()
        .single();
      
      if (surveyError) {
        throw new Error(surveyError.message);
      }
      
      // Insert each challenge
      if (challenges.length > 0) {
        const challengeEntries = challenges.map((challenge: string) => {
          return {
            survey_id: surveyResponse.id,
            challenge: challenge,
            is_custom: !['High fuel costs', 'Inefficient collection routes', 'Manual tracking systems', 'Low recycling rates', 'Limited data insights', 'Aging fleet'].includes(challenge)
          };
        });
        
        const { error: challengesError } = await supabase
          .from('survey_challenges')
          .insert(challengeEntries);
        
        if (challengesError) {
          throw new Error(challengesError.message);
        }
      }
      
      // Success! Move to the success step
      setStep(4);
      console.log('Survey submitted successfully to Supabase!');
      
    } catch (error) {
      console.error('Error submitting survey:', error);
      toast.error('There was an error submitting your survey. Please try again.');
    } finally {
      setSubmitting(false);
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
      {step === 3 && (
        <Step3 
          onNext={handleNext} 
          onBack={handleBack} 
          data={formData}
          isSubmitting={submitting}
        />
      )}
      {step === 4 && <SuccessStep />}
    </div>
  );
};

export default SurveyForm;
