import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Survey',
    path: '/survey'
  }, {
    name: 'Experience',
    path: '/experience'
  }, {
    name: 'Impact',
    path: '/impact'
  }, {
    name: 'About',
    path: '/about'
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${isScrolled ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm dark:bg-background/80 dark:backdrop-blur-md dark:border-b dark:border-white/5' : 'py-6 bg-transparent dark:bg-transparent'}
      `}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-highlight">EcoBin</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => <Link key={link.name} to={link.path} className={`transition-colors duration-300 hover:text-primary 
                ${location.pathname === link.path ? 'text-primary font-medium' : 'text-foreground'}`}>
              {link.name}
            </Link>)}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link to="/survey" className="btn-primary">
              Start Now
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button className="text-foreground p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-background shadow-md dark:shadow-none dark:border-b dark:border-t dark:border-white/5 py-4 px-6 z-50 transition-all duration-300 ease-in-out">
          <nav className="flex flex-col space-y-4">
            {navLinks.map(link => <Link key={link.name} to={link.path} className={`transition-colors duration-300 py-2 
                  ${location.pathname === link.path ? 'text-primary font-medium' : 'text-foreground'}`}>
                {link.name}
              </Link>)}
            <Link to="/survey" className="btn-primary text-center mt-4">
              Start Now
            </Link>
          </nav>
        </div>}
    </header>;
};
export default Navbar;