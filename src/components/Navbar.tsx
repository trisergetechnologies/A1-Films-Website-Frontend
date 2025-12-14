import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 pb-3 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-3 pb-3 shadow-lg border-b border-gray-100' : 'py-6 bg-white/80 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
                src="/images/A1logo03.png"
                alt="A1 Films"
                className="w-full rounded-3xl shadow-2xl object-cover"
              />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center space-x-8">
          <li>
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') || isActive('/home') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'} text-xl`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              className={`transition-colors ${isActive('/services') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'} text-xl`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'} text-xl`}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/teams" 
              className={`transition-colors ${isActive('/teams') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'} text-xl`}
            >
              Team
            </Link>
          </li>
          <li>
            <Link 
              to="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1yAx-HQQKoFg5i_46Rq00Sj8D9TwiI3kDTieCiBHvdhW2xy_vIVZy1XMcONGvYOEIkcyThfcpQ" 
              className={`transition-colors ${isActive('/teams') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'} text-xl`}
            >
              Book Consultation
            </Link>
          </li>
        </ul>

        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/quote">
            <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg hover:shadow-xl transition-all">
            <FontAwesomeIcon icon={faPaperPlane} className="text-2xl text-white" />
              Send Us Your Quote
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-foreground" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg absolute top-full left-0 w-full py-4 shadow-lg border-b border-gray-100">
          <div className="container mx-auto px-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link 
                  to="/" 
                  className={`block py-2 transition-colors ${isActive('/') || isActive('/home') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className={`block py-2 transition-colors ${isActive('/services') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`block py-2 transition-colors ${isActive('/about') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/teams" 
                  className={`block py-2 transition-colors ${isActive('/teams') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Team
                </Link>
              </li>
              <li>
            <Link 
              to="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1yAx-HQQKoFg5i_46Rq00Sj8D9TwiI3kDTieCiBHvdhW2xy_vIVZy1XMcONGvYOEIkcyThfcpQ" 
              className={`transition-colors ${isActive('/teams') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'} text-xl`}
            >
              Book Consultation
            </Link>
          </li>
              <li className="pt-4 flex flex-col space-y-3 border-t border-gray-100">
                <Link to="/quote" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white">
                    Contact Us
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
