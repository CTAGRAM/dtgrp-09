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
                At EcoTrack, we're on a mission to revolutionize waste management through smart technology and data-driven solutions, creating cleaner cities and a healthier planet.
              </p>
            </div>
          </ScrollAnimator>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <ScrollAnimator>
              <div>
                <h2 className="heading-md mb-6 text-foreground">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  EcoTrack was founded in 2018 by a team of environmental engineers and technology experts who saw an opportunity to apply cutting-edge technology to the waste management industry.
                </p>
                <p className="text-muted-foreground mb-4">
                  After witnessing the inefficiencies of traditional waste collection first-hand, our founders set out to create a solution that would optimize routes, reduce emissions, and provide real-time data insights.
                </p>
                <p className="text-muted-foreground">
                  Today, our platform serves municipalities and waste management companies across 30 countries, helping them reduce operational costs while making a positive environmental impact.
                </p>
              </div>
            </ScrollAnimator>
            
            <ScrollAnimator delay={200}>
              <div className="relative rounded-2xl overflow-hidden aspect-video shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="EcoTrack team" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <p className="font-medium">Our headquarters in San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </ScrollAnimator>
          </div>
          
          <div className="mb-20">
            <ScrollAnimator>
              <h2 className="heading-md text-center mb-12 text-foreground">Our Values</h2>
            </ScrollAnimator>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <ScrollAnimator key={index} delay={index * 100}>
                  <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300 dark:hover:shadow-card">
                    <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-secondary/30">
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
        description="Partner with EcoTrack to transform your waste management operations and make a positive environmental impact."
        primaryButtonText="Contact Us"
        secondaryButtonText="View Case Studies"
        bgColor="bg-background"
      />
    </Layout>
  );
};

export default About;
