import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const   HomeAbout = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-purple-50/10 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="animate-on-scroll order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-xs font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  About Us
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                About{" "}
                <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  A1 Films
                </span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed font-light">
                A1 Films Pvt. Ltd was formed in 2008 and it is a Delhi based
                production house specializing in Television Commercials,
                Corporate Films and Film Production. It is hugely experienced,
                with experiences ranging from music video to daily soaps to
                advertising agency to feature films.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed font-light">
                Our core service areas cover Audio Production, Video Production,
                Education Learning, 2D&3D Animation, Brand Management and Media
                Buying Services. We offer an array of marketing communication
                services, exploring almost all possible mediums of advertising
                and promotion.
              </p>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary via-purple-600 to-pink-600 hover:from-primary/90 hover:via-purple-600/90 hover:to-pink-600/90 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Know More
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="animate-on-scroll order-1 md:order-2">
              <img
                src="/images/head01.jpg"
                alt="A1 Films"
                className="w-full rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
