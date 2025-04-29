import ScrollAnimator from '../ui/ScrollAnimator';
import ImpactCard from '../impact/ImpactCard';

const apartmentResults = [
  {
    title: "Delayed Collections",
    value: 66,
    suffix: "%",
    description: "Residents left waste in common areas due to inconvenient timing"
  },
  {
    title: "Missed Pickups",
    value: 72,
    suffix: "%",
    description: "Residents experienced delays or missed municipal waste truck pickups"
  },
  {
    title: "Holiday Surge",
    value: 91,
    suffix: "%",
    description: "Waste generation increases during weekends and holidays"
  },
  {
    title: "Overflowing Bins",
    value: 61,
    suffix: "%",
    description: "Residents faced overflowing bins on weekends"
  },
  {
    title: "Process Improvement",
    value: 44,
    suffix: "%",
    description: "Residents feel waste disposal process needs improvement"
  }
];

const independentHouseResults = [
  {
    title: "No Dedicated Bins",
    value: 40,
    suffix: "%",
    description: "Residents said there is no dedicated waste disposal system"
  },
  {
    title: "Overflowing Bins",
    value: 77,
    suffix: "%",
    description: "Residents faced overflowing bins and unhygienic conditions"
  },
  {
    title: "Missing Bins",
    value: 48,
    suffix: "%",
    description: "Residents reported public dustbins are over 100 meters away"
  },
  {
    title: "Inconsistent Collection",
    value: 49,
    suffix: "%",
    description: "Residents said municipal collection is inconsistent"
  },
  {
    title: "Holiday Surge",
    value: 87,
    suffix: "%",
    description: "Residents experience increased waste during holidays"
  }
];

const SurveyResults = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimator>
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Survey Results</h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive analysis of waste management challenges from our community survey
            </p>
          </div>
        </ScrollAnimator>

        <div className="mb-16">
          <ScrollAnimator delay={100}>
            <h3 className="heading-md mb-8">Apartment Residents</h3>
          </ScrollAnimator>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apartmentResults.map((result, index) => (
              <ScrollAnimator key={index} delay={200 + (index * 100)}>
                <ImpactCard
                  {...result}
                  delay={0}
                />
              </ScrollAnimator>
            ))}
          </div>
        </div>

        <div>
          <ScrollAnimator delay={100}>
            <h3 className="heading-md mb-8">Independent House Residents</h3>
          </ScrollAnimator>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {independentHouseResults.map((result, index) => (
              <ScrollAnimator key={index} delay={200 + (index * 100)}>
                <ImpactCard
                  {...result}
                  delay={0}
                />
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurveyResults; 