import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Sparkles, Film } from 'lucide-react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '@/utils/useScrollAnimation';

const Landing = () => {
  useScrollAnimation();

  useEffect(() => {
    document.title = "Get Started | A1 Films";
  }, []);

  const services = [
    "Television Commercials & Corporate Films",
    "Audio Production & Voice Over Services",
    "Video Production & Post Production",
    "2D & 3D Animation Services",
    "Brand Management & Media Buying",
    "Script Writing & Social Media Marketing"
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-white via-purple-50/40 via-pink-50/30 to-white hero-glow pt-20">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-br from-primary/15 to-purple-600/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-gradient-to-br from-pink-500/15 to-purple-600/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-pink-500/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2.5 mb-8 animate-fade-in">
              <Film className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">A1 Films Production House</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 leading-[1.1] tracking-tight animate-fade-in">
              <span className="block bg-gradient-to-r from-primary via-purple-600 via-pink-600 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                Complete Production
              </span>
              <span className="block bg-gradient-to-r from-primary via-purple-600 via-pink-600 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift mt-2">
                Solutions
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
              A1 Films is a young and dynamic production house specializing in Television Commercials, Corporate Films, Film Production, Audio Production, Animation, Brand Management and Media Buying Services.
            </p>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16 max-w-3xl mx-auto animate-on-scroll">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="group flex items-center gap-4 p-5 md:p-6 bg-gradient-to-br from-white/80 via-white/60 to-white/40 backdrop-blur-xl rounded-2xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <span className="text-sm md:text-base font-medium text-foreground leading-snug">{service}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 md:mb-20 animate-on-scroll">
              <Link to="/services" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-primary via-purple-600 to-pink-600 hover:from-primary/90 hover:via-purple-600/90 hover:to-pink-600/90 text-white px-8 md:px-10 py-6 md:py-7 text-base md:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about" className="w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto border-2 border-primary/30 bg-white/50 backdrop-blur-sm text-foreground hover:bg-gradient-to-r hover:from-primary/5 hover:via-purple-600/5 hover:to-pink-600/5 px-8 md:px-10 py-6 md:py-7 text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 rounded-xl hover:border-primary/50"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 md:gap-8 max-w-2xl mx-auto animate-on-scroll">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">2008</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">Established</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">16+</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-primary bg-clip-text text-transparent mb-2">Delhi</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">Based</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm className="bg-gradient-to-b from-white via-purple-50/20 to-white" />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Landing;
