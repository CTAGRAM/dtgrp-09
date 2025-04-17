
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-highlight">
                EcoTrack
              </span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Transforming waste management with smart city solutions. Reduce costs, optimize routes, and track your environmental impact.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/survey" className="text-muted-foreground hover:text-primary transition-colors">Survey</Link></li>
              <li><Link to="/experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</Link></li>
              <li><Link to="/impact" className="text-muted-foreground hover:text-primary transition-colors">Impact</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">info@ecotrack.com</li>
              <li className="text-muted-foreground">+1 (555) 123-4567</li>
              <li className="text-muted-foreground">123 Green Street, Eco City</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              &copy; {currentYear} EcoTrack. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
