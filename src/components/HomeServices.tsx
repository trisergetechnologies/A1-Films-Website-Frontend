import { Film, PenTool, Share2, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Film className="h-7 w-7 sm:h-8 sm:w-8" />,
    title: "Video Production",
    description: "Television Commercials, Corporate Films, Music Videos, and Feature Films."
  },
  {
    icon: <PenTool className="h-7 w-7 sm:h-8 sm:w-8" />,
    title: "Script Writing",
    description: "Compelling concepts and well-conceived screenplays for all types of productions."
  },
  {
    icon: <Share2 className="h-7 w-7 sm:h-8 sm:w-8" />,
    title: "Social Media",
    description: "Social media marketing and management to expand your reach and engagement."
  },
  {
    icon: <Megaphone className="h-7 w-7 sm:h-8 sm:w-8" />,
    title: "Media Buying",
    description: "Strategic media buying services to maximize your advertising impact."
  }
];

const HomeServices = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-purple-50/20 via-white to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Comprehensive production and marketing services tailored to your needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto mb-12 md:mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 bg-gradient-to-br from-white via-white/80 to-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/50 hover:border-primary/30 animate-on-scroll hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary/10 via-purple-600/10 to-pink-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-primary">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-foreground leading-tight">{service.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center animate-on-scroll">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary via-purple-600 to-pink-600 hover:from-primary/90 hover:via-purple-600/90 hover:to-pink-600/90 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            View All Services
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
