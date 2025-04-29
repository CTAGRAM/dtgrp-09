import Layout from '../components/layout/Layout';
import CtaSection from '../components/shared/CtaSection';
import ScrollAnimator from '../components/ui/ScrollAnimator';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    position: 'CEO & Co-Founder',
    bio: 'Former Environmental Engineer with 15+ years of experience in sustainable waste management solutions.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Michael Chen',
    position: 'CTO',
    bio: 'AI specialist with a background in route optimization algorithms and IoT sensor networks.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Jessica Miller',
    position: 'COO',
    bio: 'Operations expert who has helped scale multiple tech startups in the sustainability sector.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    name: 'David Wilson',
    position: 'Head of Product',
    bio: 'Product leader focused on creating intuitive software solutions for complex environmental challenges.',
    image: 'https://randomuser.me/api/portraits/men/75.jpg'
  },
  {
    name: 'Elena Rodriguez',
    position: 'Lead Data Scientist',
    bio: 'PhD in Applied Mathematics with expertise in predictive modeling for waste management systems.',
    image: 'https://randomuser.me/api/portraits/women/33.jpg'
  },
  {
    name: 'James Lee',
    position: 'Head of Partnerships',
    bio: 'Former city planner who now helps municipalities implement smart waste management solutions.',
    image: 'https://randomuser.me/api/portraits/men/55.jpg'
  },
];

const values = [
  {
    title: 'Sustainability',
    description: 'We believe in creating solutions that help preserve our planet for future generations.'
  },
  {
    title: 'Innovation',
    description: 'We constantly push the boundaries of what\'s possible in waste management technology.'
  },
  {
    title: 'Transparency',
    description: 'We provide clear, actionable data and insights to drive informed decision-making.'
  },
  {
    title: 'Impact',
    description: 'We measure our success by the tangible environmental and operational improvements we deliver.'
  },
];

const About = () => {
  return (
    <Layout>
      <section className="pt-20 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <ScrollAnimator>
            <div className="text-center mb-16">
              <h1 className="heading-lg mb-4 text-foreground">Our Mission</h1>
              <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
                At EcoBin, we're on a mission to revolutionize waste management through smart technology and data-driven solutions, creating cleaner cities and a healthier planet.
              </p>
            </div>
          </ScrollAnimator>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <ScrollAnimator>
              <div>
                <h2 className="heading-md mb-6 text-foreground">Our Story</h2>
                <div className="space-y-6 text-muted-foreground">
                  <p>
                    It started with something simple — standing beside an overflowing public bin and wondering, "Why does it still work this way?"
                  </p>
                  <p>
                    We noticed how scattered waste, delayed pickups, and inefficient routes weren't just problems — they were symptoms of deeper gaps in planning, technology, and human convenience.
                  </p>
                  <p>
                    EcoBin was born from a drive to change that. We envisioned a future where smart sensors, AI, and real-time insights would make waste collection invisible — efficient, predictable, effortless.
                  </p>
                  <p>
                    Every solution we build today comes from that single moment: the realization that small frustrations, if solved right, can create cleaner cities and better lives for millions.
                  </p>
                </div>
              </div>
            </ScrollAnimator>
            
            <ScrollAnimator delay={200}>
              <div className="relative rounded-2xl overflow-hidden aspect-video shadow-xl">
                <img 
                  src="/waste-bins.jpg" 
                  alt="Two colorful waste bins" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <p className="font-medium">Smart waste bins for efficient segregation</p>
                  </div>
                </div>
              </div>
            </ScrollAnimator>
          </div>
          
          <div className="mb-16">
            <ScrollAnimator>
              <h2 className="heading-md text-center mb-12 text-foreground">Our Values</h2>
            </ScrollAnimator>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <ScrollAnimator key={index} delay={index * 100}>
                  <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300 dark:hover:shadow-card h-full">
                    <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <ScrollAnimator>
            <h2 className="heading-md text-center mb-12 text-foreground">Meet Our Team</h2>
          </ScrollAnimator>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollAnimator key={index} delay={index * 100}>
                <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 dark:hover:shadow-card">
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-foreground">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.position}</p>
                    <p className="text-muted-foreground mb-4">{member.bio}</p>
                    <div className="flex space-x-4">
                      <a 
                        href="#" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin size={20} />
                      </a>
                      <a 
                        href="#" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${member.name}'s Twitter profile`}
                      >
                        <Twitter size={20} />
                      </a>
                      <a 
                        href="#" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>
      
      <CtaSection 
        title="Join us in creating cleaner cities"
        description="Partner with EcoBin to transform your waste management operations and make a positive environmental impact."
        primaryButtonText="Contact Us"
        secondaryButtonText="View Case Studies"
        bgColor="bg-background"
      />
    </Layout>
  );
};

export default About;
