import Layout from '../components/layout/Layout';
import SurveyForm from '../components/survey/SurveyForm';
import ScrollAnimator from '../components/ui/ScrollAnimator';

const Survey = () => {
  return (
    <Layout>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollAnimator>
            <div className="text-center mb-16">
              <h1 className="heading-lg mb-4 text-foreground">Waste Management Assessment</h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                Answer a few questions to help us understand your waste management needs and discover how EcoBin can help optimize your operations.
              </p>
            </div>
          </ScrollAnimator>
          
          <SurveyForm />
        </div>
      </section>
    </Layout>
  );
};

export default Survey;
