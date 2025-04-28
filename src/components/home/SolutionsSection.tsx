
import { MapPin, Recycle, Trash2, CalendarClock, Users, TrendingUp } from 'lucide-react';
import ScrollAnimator from '../ui/ScrollAnimator';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const solutions = [
  {
    icon: <Recycle className="w-10 h-10 text-primary" />,
    title: "Smart Waste Dustbins in Apartments",
    description: "Floorwise collection using shafts or smart bins with ultrasonic and gas sensors for efficient waste management in residential buildings."
  },
  {
    icon: <Trash2 className="w-10 h-10 text-primary" />,
    title: "Smart Municipal Bins with Fill-level Sensors",
    description: "Triggering AI-based vehicle size and route optimization when bins reach capacity, reducing unnecessary collection trips."
  },
  {
    icon: <MapPin className="w-10 h-10 text-primary" />,
    title: "Dustbin Allocation Optimization Using GIS",
    description: "Strategic placement of bins based on population density and accessibility to the public for maximum efficiency."
  },
  {
    icon: <CalendarClock className="w-10 h-10 text-primary" />,
    title: "Special Waste Collection Teams",
    description: "Dedicated teams for weekends, festivals, and holiday seasons to prevent overflow during high-waste generation periods."
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
    title: "Dynamic Optimization of Collection Timing",
    description: "Survey-based timing comfort zone planning for each area to ensure waste collection aligns with community preferences."
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Empowering Ragpickers",
    description: "Providing equipment to clean underserved streets, creating jobs while improving street-level hygiene in communities."
  }
];

const SolutionsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimator>
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4 text-gradient">Our Smart Waste Management Innovations</h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge solutions that revolutionize waste management across cities and communities.
            </p>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <ScrollAnimator key={index} delay={index * 100}>
              <Card className="h-full card-hover">
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-lg inline-block mb-3">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
