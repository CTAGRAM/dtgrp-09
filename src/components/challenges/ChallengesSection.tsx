import ScrollAnimator from '../ui/ScrollAnimator';
import { AlertTriangle, Trash2, Clock, Users, Cpu, Calendar } from 'lucide-react';

const challenges = [
  {
    title: "Limited Dustbin Availability",
    description: "Insufficient bins near residential and public areas",
    icon: <Trash2 className="w-6 h-6" />
  },
  {
    title: "Overflowing Bins",
    description: "Especially during weekends and festivals",
    icon: <AlertTriangle className="w-6 h-6" />
  },
  {
    title: "Irregular Pickup",
    description: "Inconsistent waste collection schedules",
    icon: <Clock className="w-6 h-6" />
  },
  {
    title: "Low Public Awareness",
    description: "Lack of knowledge about proper waste disposal",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Limited Technology",
    description: "Lack of smart monitoring for bin fill levels",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "Festival Management",
    description: "Difficulty handling waste surges during festivals",
    icon: <Calendar className="w-6 h-6" />
  }
];

const ChallengesSection = () => {
  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <ScrollAnimator>
          <h2 className="heading-lg text-center mb-16">Major Challenges Identified</h2>
        </ScrollAnimator>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <ScrollAnimator key={index} delay={index * 100}>
              <div className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-primary">{challenge.icon}</div>
                  <h3 className="font-semibold text-lg">{challenge.title}</h3>
                </div>
                <p className="text-muted-foreground">{challenge.description}</p>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection; 