
import { useEffect, useRef, useState } from 'react';
import { MapPin, Truck, Factory, Database } from 'lucide-react';
import ScrollAnimator from '../ui/ScrollAnimator';

// Milestone data
const milestones = [
  {
    id: 'smart-bins',
    title: 'Smart Bin Integration',
    description: 'IoT-enabled waste bins provide real-time fill level data, reducing unnecessary pickups by 40%.',
    icon: <MapPin className="w-8 h-8 text-white" />,
    color: 'bg-green-500',
    position: { top: '20%', left: '15%' }
  },
  {
    id: 'route-optimization',
    title: 'AI Route Optimization',
    description: 'Machine learning algorithms calculate the most efficient collection routes, saving fuel and reducing emissions.',
    icon: <Truck className="w-8 h-8 text-white" />,
    color: 'bg-primary',
    position: { top: '40%', left: '40%' }
  },
  {
    id: 'processing-facility',
    title: 'Processing Facility',
    description: 'Advanced sorting technologies maximize recycling rates and minimize landfill waste.',
    icon: <Factory className="w-8 h-8 text-white" />,
    color: 'bg-orange-500',
    position: { top: '65%', left: '70%' }
  },
  {
    id: 'data-center',
    title: 'Analytics Hub',
    description: 'Centralized dashboard provides real-time insights and performance metrics for continuous improvement.',
    icon: <Database className="w-8 h-8 text-white" />,
    color: 'bg-blue-500',
    position: { top: '80%', left: '30%' }
  }
];

// Truck path coordinates (simplified for demonstration)
const truckPath = [
  { x: 10, y: 20 },
  { x: 15, y: 25 },
  { x: 25, y: 30 },
  { x: 40, y: 40 },
  { x: 55, y: 50 },
  { x: 70, y: 65 },
  { x: 60, y: 75 },
  { x: 45, y: 82 },
  { x: 30, y: 80 }
];

const TruckSimulation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeMilestone, setActiveMilestone] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [truckPosition, setTruckPosition] = useState({ x: truckPath[0].x, y: truckPath[0].y });
  
  // Calculate the truck's position based on scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the container is visible
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const totalVisibleHeight = Math.min(container.offsetHeight, windowHeight);
      
      // Calculate scroll progress (0 to 1)
      let progress = 0;
      
      if (rect.top < windowHeight && rect.bottom > 0) {
        if (container.offsetHeight <= windowHeight) {
          // Container fits in viewport
          progress = (windowHeight - rect.top) / (windowHeight + container.offsetHeight);
        } else {
          // Container is taller than viewport
          progress = (windowHeight - rect.top) / (container.offsetHeight);
        }
        
        // Clamp progress between 0 and 1
        progress = Math.max(0, Math.min(1, progress));
      } else if (rect.bottom <= 0) {
        progress = 1;
      }
      
      setScrollProgress(progress);
      
      // Determine active milestone based on progress
      if (progress < 0.25) {
        setActiveMilestone('smart-bins');
      } else if (progress < 0.5) {
        setActiveMilestone('route-optimization');
      } else if (progress < 0.75) {
        setActiveMilestone('processing-facility');
      } else {
        setActiveMilestone('data-center');
      }
      
      // Calculate truck position along the path
      const pathIndex = Math.min(
        Math.floor(progress * (truckPath.length - 1)),
        truckPath.length - 2
      );
      
      const pathSegmentProgress = (progress * (truckPath.length - 1)) % 1;
      
      const currentPoint = truckPath[pathIndex];
      const nextPoint = truckPath[pathIndex + 1];
      
      const x = currentPoint.x + (nextPoint.x - currentPoint.x) * pathSegmentProgress;
      const y = currentPoint.y + (nextPoint.y - currentPoint.y) * pathSegmentProgress;
      
      setTruckPosition({ x, y });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="relative h-[200vh] bg-secondary/30 overflow-hidden rounded-xl"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 p-8 flex flex-col justify-between">
          <ScrollAnimator>
            <h2 className="heading-md text-center">Smart City Waste Management</h2>
          </ScrollAnimator>
          
          <div className="relative w-full h-[70vh] border-2 border-border rounded-xl bg-white shadow-inner overflow-hidden">
            {/* City Map Background */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596643201112-16bb86a39d4b?q=80&w=1000')] bg-cover bg-center opacity-10"></div>
            
            {/* Grid Lines */}
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-12">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={`col-${i}`} className="border-r border-border/30 h-full"></div>
              ))}
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={`row-${i}`} className="border-b border-border/30 w-full"></div>
              ))}
            </div>
            
            {/* Path Line */}
            <svg className="absolute inset-0 w-full h-full">
              <path
                d={`M ${truckPath.map(p => `${p.x}% ${p.y}%`).join(' L ')}`}
                stroke="#6366F1"
                strokeWidth="3"
                strokeDasharray="5,5"
                fill="none"
                opacity="0.6"
              />
            </svg>
            
            {/* Truck Icon */}
            <div 
              className="absolute w-12 h-12 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out-quad"
              style={{ 
                left: `${truckPosition.x}%`, 
                top: `${truckPosition.y}%`,
                zIndex: 20
              }}
            >
              <div className="animate-pulse bg-primary/20 w-full h-full rounded-full absolute"></div>
              <div className="absolute inset-0 flex items-center justify-center bg-primary rounded-full shadow-lg">
                <Truck className="w-6 h-6 text-white" />
              </div>
            </div>
            
            {/* Milestone Nodes */}
            {milestones.map((milestone) => (
              <div
                key={milestone.id}
                className={`absolute w-16 h-16 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                  activeMilestone === milestone.id 
                    ? 'scale-110 shadow-lg' 
                    : 'scale-90 opacity-70'
                }`}
                style={{ 
                  left: milestone.position.left, 
                  top: milestone.position.top,
                  zIndex: 10
                }}
              >
                <div className={`w-full h-full ${milestone.color} rounded-full flex items-center justify-center relative`}>
                  {milestone.icon}
                </div>
                
                {/* Tooltip */}
                <div 
                  className={`absolute bg-white rounded-lg shadow-lg p-4 w-64 transition-all duration-300 ${
                    activeMilestone === milestone.id 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                  style={{
                    left: '130%',
                    top: '50%',
                    transform: 'translateY(-50%)'
                  }}
                >
                  <h3 className="font-bold text-lg mb-1">{milestone.title}</h3>
                  <p className="text-muted-foreground text-sm">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <ScrollAnimator>
            <div className="text-center mt-8">
              <h3 className="text-xl font-bold mb-2">
                {activeMilestone && milestones.find(m => m.id === activeMilestone)?.title}
              </h3>
              <p className="text-muted-foreground">
                Scroll to follow the journey of smart waste collection and processing
              </p>
            </div>
          </ScrollAnimator>
        </div>
      </div>
    </div>
  );
};

export default TruckSimulation;
