import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-4">
              A1<span className="text-primary">Films</span>
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xs font-light">
              A young and dynamic production house operating at the confluence of the local Indian scene. Specializing in Television Commercials, Corporate Films and Film Production.
            </p>
            <div className="flex space-x-4">
              <a href="#!" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#!" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#!" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#!" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-foreground font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors font-light">All Services</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors font-light">Video Production</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors font-light">Audio Production</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors font-light">Post Production</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors font-light">Animation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:a1filmspltd@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm font-light block">a1filmspltd@gmail.com</a>
                  <a href="mailto:a1@a1filmstudio.com" className="text-muted-foreground hover:text-primary transition-colors text-sm font-light block">a1@a1filmstudio.com</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+918828057030" className="text-muted-foreground hover:text-primary transition-colors text-sm font-light block">+91 8828057030</a>
                  <a href="tel:+919899837020" className="text-muted-foreground hover:text-primary transition-colors text-sm font-light block">+91 9899837020</a>
                  <a href="tel:+919910548505" className="text-muted-foreground hover:text-primary transition-colors text-sm font-light block">+91 9910548505</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground text-sm font-light">C/37, Mayur Vihar, Phase-I, Delhi- 110091</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0 font-light">
              &copy; {currentYear} A1 Films Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms-conditions" className="text-muted-foreground hover:text-primary text-sm transition-colors font-light">Terms of Service</Link>
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary text-sm transition-colors font-light">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
