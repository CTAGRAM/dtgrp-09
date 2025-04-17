
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import ScrollAnimator from '../ui/ScrollAnimator';

const testimonials = [
  {
    quote: "EcoTrack has transformed our waste management operations. We've reduced fuel costs by 32% and increased collection efficiency by 45% in just six months.",
    author: "Sarah Johnson",
    position: "Director of Operations, Metro City Waste Management",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "The analytics dashboard gives us real-time insights that help us make data-driven decisions. Our carbon footprint has decreased significantly since implementation.",
    author: "Michael Chen",
    position: "Sustainability Manager, GreenCity Solutions",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "The route optimization alone saved us thousands in operational costs. The ROI was evident within the first quarter of using EcoTrack.",
    author: "Jessica Miller",
    position: "CFO, Regional Waste Systems",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <ScrollAnimator>
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">What Our Clients Say</h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from organizations that have transformed their waste management with EcoTrack.
            </p>
          </div>
        </ScrollAnimator>
        
        <div className="max-w-4xl mx-auto relative">
          <ScrollAnimator delay={100}>
            <div className="relative bg-white p-8 md:p-12 rounded-2xl shadow-lg">
              <div className="absolute -top-6 left-10 w-12 h-12 flex items-center justify-center bg-primary rounded-full">
                <Quote className="w-6 h-6 text-white" />
              </div>
              
              <div className="mb-8">
                <p className="text-xl md:text-2xl italic text-foreground mb-8">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                <div className="flex items-center">
                  <div className="mr-4">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].author} 
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonials[currentIndex].author}</h4>
                    <p className="text-muted-foreground">{testimonials[currentIndex].position}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between">
                <button 
                  onClick={goToPrevious}
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-primary' : 'bg-secondary'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={goToNext}
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
