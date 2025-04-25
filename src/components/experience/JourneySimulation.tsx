
import { useEffect, useRef, useState } from 'react';
import { MapPin, Truck, Factory, Database } from 'lucide-react';
import anime from 'animejs';
import { animatePathDrawing, animateFloat, animateGlow, animateTruck, animateRipple } from '@/utils/animationUtils';
import { Card, CardContent } from '@/components/ui/card';

// Journey milestone data
const journeyMilestones = [
  {
    id: 'smart-bin',
    title: 'Smart Bin Detected',
    description: 'IoT-enabled waste bins provide real-time fill level data, reducing unnecessary pickups by 40%.',
    icon: <MapPin className="w-8 h-8 text-white" />,
    color: 'bg-green-500',
    position: { top: '15%', left: '10%' },
    stats: '40% fewer pickups'
  },
  {
    id: 'ai-router',
    title: 'AI Route Optimization',
    description: 'Machine learning algorithms calculate the most efficient collection routes, saving fuel and reducing emissions.',
    icon: <Truck className="w-8 h-8 text-white" />,
    color: 'bg-primary',
    position: { top: '40%', left: '35%' },
    stats: '32% less fuel used'
  },
  {
    id: 'energy-plant',
    title: 'Processing Facility',
    description: 'Advanced sorting technologies maximize recycling rates and minimize landfill waste.',
    icon: <Factory className="w-8 h-8 text-white" />,
    color: 'bg-orange-500',
    position: { top: '65%', left: '65%' },
    stats: '76% recycling rate'
  },
  {
    id: 'municipal-hq',
    title: 'Analytics Hub',
    description: 'Centralized dashboard provides real-time insights and performance metrics for continuous improvement.',
    icon: <Database className="w-8 h-8 text-white" />,
    color: 'bg-blue-500',
    position: { top: '85%', left: '90%' },
    stats: '91% faster decisions'
  }
];

// Truck path coordinates with bezier curve points
const truckPath = [
  { x: 10, y: 15 },
  { x: 20, y: 25 },
  { x: 30, y: 30 },
  { x: 35, y: 40 },
  { x: 50, y: 50 },
  { x: 65, y: 65 },
  { x: 80, y: 75 },
  { x: 90, y: 85 }
];

const JourneySimulation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const truckRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeMilestone, setActiveMilestone] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [completedMilestones, setCompletedMilestones] = useState<string[]>([]);
  const [showStats, setShowStats] = useState(false);
  
  // Generate the SVG path for the truck to follow
  const generatePathD = () => {
    return `M ${truckPath.map(p => `${p.x} ${p.y}`).join(' L ')}`;
  };
  
  // Handle scroll events to update animations
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the container is visible
      let progress = 0;
      
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate scroll progress (0 to 1)
        progress = Math.max(0, Math.min(1, 1 - (rect.top / (windowHeight - rect.height * 0.5))));
        
        // Update active milestone based on progress
        let newActiveMilestone = null;
        let newCompletedMilestones = [...completedMilestones];
        
        if (progress < 0.25) {
          newActiveMilestone = 'smart-bin';
          if (!completedMilestones.includes('smart-bin')) {
            newCompletedMilestones.push('smart-bin');
          }
        } else if (progress < 0.5) {
          newActiveMilestone = 'ai-router';
          if (!completedMilestones.includes('ai-router')) {
            newCompletedMilestones.push('ai-router');
          }
        } else if (progress < 0.75) {
          newActiveMilestone = 'energy-plant';
          if (!completedMilestones.includes('energy-plant')) {
            newCompletedMilestones.push('energy-plant');
          }
        } else {
          newActiveMilestone = 'municipal-hq';
          if (!completedMilestones.includes('municipal-hq')) {
            newCompletedMilestones.push('municipal-hq');
            // Show final stats when reaching the last milestone
            if (progress > 0.9) setShowStats(true);
          }
        }
        
        setActiveMilestone(newActiveMilestone);
        setCompletedMilestones(newCompletedMilestones);
      } else if (rect.bottom <= 0) {
        // Beyond the container
        progress = 1;
      }
      
      setScrollProgress(progress);
      
      // Animate the truck along the path
      if (truckRef.current) {
        animateTruck(truckRef.current, truckPath, progress);
      }
      
      // Animate the path drawing
      if (pathRef.current && progress > 0) {
        const pathLength = pathRef.current.getTotalLength();
        pathRef.current.style.strokeDashoffset = String(pathLength * (1 - progress));
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [completedMilestones]);
  
  // Initialize animations
  useEffect(() => {
    if (mapRef.current && pathRef.current) {
      // Initialize the path drawing
      const pathLength = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = String(pathLength);
      pathRef.current.style.strokeDashoffset = String(pathLength);
      
      // Initialize floating animations for milestones
      document.querySelectorAll('.milestone-node').forEach((node) => {
        animateFloat(node as HTMLElement, 8);
      });
      
      // Initialize grid animations
      if (gridRef.current) {
        const gridLines = gridRef.current.querySelectorAll('.grid-line');
        anime({
          targets: gridLines,
          opacity: [0.1, 0.3, 0.1],
          easing: 'easeInOutSine',
          duration: 3000,
          delay: anime.stagger(100),
          loop: true
        });
      }

      // Add click handler for ripple effects
      mapRef.current.addEventListener('click', (e) => {
        if (mapRef.current) {
          const rect = mapRef.current.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          animateRipple(mapRef.current, x, y);
        }
      });
    }
    
    return () => {
      // Cleanup animations
      anime.remove('.milestone-node');
      anime.remove('.grid-line');
      
      if (mapRef.current) {
        mapRef.current.removeEventListener('click', () => {});
      }
    };
  }, []);
  
  // The effect to animate active milestone
  useEffect(() => {
    if (activeMilestone) {
      const element = document.getElementById(`milestone-${activeMilestone}`);
      if (element) {
        anime({
          targets: element,
          scale: [1, 1.2, 1],
          boxShadow: [
            '0 0 0 rgba(var(--primary), 0.2)',
            '0 0 30px rgba(var(--primary), 0.6)',
            '0 0 0 rgba(var(--primary), 0.2)'
          ],
          duration: 1500,
          easing: 'easeOutElastic(1, .5)'
        });
        
        // Animate the milestone card
        const card = document.getElementById(`card-${activeMilestone}`);
        if (card) {
          anime({
            targets: card,
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutExpo'
          });
        }
      }
    }
  }, [activeMilestone]);
  
  return (
    <div 
      ref={containerRef} 
      className="relative h-[300vh] bg-secondary/10 overflow-hidden rounded-xl"
    >
      {/* Sticky container for journey visualization */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-5xl mx-4 h-[80vh] rounded-xl bg-card shadow-lg overflow-hidden">
          {/* Journey title */}
          <div className="absolute top-4 left-0 w-full text-center z-10">
            <h2 className="heading-md text-foreground">Smart City Waste Journey</h2>
            <p className="text-muted-foreground text-sm mt-1">
              Scroll to follow the waste management process
            </p>
          </div>
          
          {/* Map area with journey visualization */}
          <div 
            ref={mapRef}
            className="absolute inset-0 mt-16 flex items-center justify-center"
          >
            {/* Grid background */}
            <div 
              ref={gridRef}
              className="absolute inset-0 grid grid-cols-12 grid-rows-12"
            >
              {Array.from({ length: 13 }).map((_, i) => (
                <div key={`col-${i}`} className="grid-line border-r border-border/30 h-full"></div>
              ))}
              {Array.from({ length: 13 }).map((_, i) => (
                <div key={`row-${i}`} className="grid-line border-b border-border/30 w-full"></div>
              ))}
            </div>
            
            {/* Journey path */}
            <svg className="absolute inset-0 w-full h-full">
              {/* Background path (dotted) */}
              <path
                d={generatePathD()}
                stroke="hsl(var(--border))"
                strokeWidth="3"
                strokeDasharray="5,5"
                fill="none"
                opacity="0.6"
              />
              
              {/* Animated foreground path */}
              <path
                ref={pathRef}
                d={generatePathD()}
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                fill="none"
                opacity="0.8"
              />
            </svg>
            
            {/* Truck icon */}
            <div 
              ref={truckRef}
              className="absolute w-14 h-14 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-30"
              style={{ 
                left: `${truckPath[0].x}%`, 
                top: `${truckPath[0].y}%`,
              }}
            >
              <div className="animate-pulse bg-primary/20 w-full h-full rounded-full absolute"></div>
              <div className="absolute inset-0 flex items-center justify-center bg-primary rounded-full shadow-lg">
                <Truck className="w-7 h-7 text-white" />
              </div>
            </div>
            
            {/* Milestone nodes */}
            {journeyMilestones.map((milestone) => (
              <div
                key={milestone.id}
                id={`milestone-${milestone.id}`}
                className={`milestone-node absolute w-16 h-16 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 z-20 ${
                  activeMilestone === milestone.id 
                    ? 'scale-110 shadow-lg' 
                    : completedMilestones.includes(milestone.id)
                    ? 'opacity-90'
                    : 'opacity-50 scale-90'
                }`}
                style={{ 
                  left: milestone.position.left, 
                  top: milestone.position.top,
                }}
              >
                <div className={`w-full h-full ${milestone.color} rounded-full flex items-center justify-center relative`}>
                  {milestone.icon}
                  {completedMilestones.includes(milestone.id) && (
                    <div className="absolute -top-1 -right-1 bg-white dark:bg-background rounded-full w-5 h-5 flex items-center justify-center border-2 border-primary">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
                
                {/* Milestone info card */}
                {activeMilestone === milestone.id && (
                  <Card 
                    id={`card-${milestone.id}`}
                    className={`absolute opacity-0 bg-card/95 backdrop-blur-sm shadow-lg p-4 w-64 z-30`}
                    style={{
                      left: parseInt(milestone.position.left as string) > 50 ? '-280%' : '130%',
                      top: '50%',
                      transform: 'translateY(-50%)'
                    }}
                  >
                    <CardContent className="p-0">
                      <h3 className="font-bold text-lg mb-2 text-foreground">{milestone.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{milestone.description}</p>
                      <div className="text-primary font-bold text-xl">{milestone.stats}</div>
                    </CardContent>
                  </Card>
                )}
              </div>
            ))}
          </div>
          
          {/* Final stats section (appears at the end of journey) */}
          {showStats && (
            <div className="absolute bottom-8 left-0 w-full flex justify-center">
              <Card className="p-6 bg-card/90 backdrop-blur-sm flex flex-col items-center animate-fade-in-up">
                <h3 className="text-xl font-bold mb-4">Mission Accomplished</h3>
                <div className="flex flex-wrap justify-center gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">91%</div>
                    <div className="text-sm text-muted-foreground">Faster</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">78%</div>
                    <div className="text-sm text-muted-foreground">Cleaner</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">62%</div>
                    <div className="text-sm text-muted-foreground">Less Overflow</div>
                  </div>
                </div>
                <button className="btn-primary">
                  Join the Mission
                </button>
              </Card>
            </div>
          )}
        </div>
      </div>
      
      {/* Progress indicator */}
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col items-center gap-3">
          {journeyMilestones.map((milestone, index) => (
            <div 
              key={milestone.id}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                completedMilestones.includes(milestone.id)
                  ? activeMilestone === milestone.id
                    ? 'w-4 h-4 bg-primary'
                    : 'bg-primary'
                  : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneySimulation;
