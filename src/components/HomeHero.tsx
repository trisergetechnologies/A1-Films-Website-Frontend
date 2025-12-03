import { ArrowRight, ArrowUpRight, ChevronRight, Sparkles, Film } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const HomeHero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-white via-purple-50/40 via-pink-50/30 to-white hero-glow">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-4 sm:left-10 w-64 sm:w-72 md:w-96 h-64 sm:h-72 md:h-96 bg-gradient-to-br from-primary/15 to-purple-600/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-4 sm:right-10 w-80 sm:w-96 md:w-[500px] h-80 sm:h-96 md:h-[500px] bg-gradient-to-br from-pink-500/15 to-purple-600/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-gradient-to-br from-primary/5 to-pink-500/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="lg:w-1/2 w-full animate-fade-in-left text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 mb-6">
              <Film className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">A1 Films</span>
              <span className="text-xs sm:text-sm text-muted-foreground">Production House</span>
              <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground ml-1" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 leading-[1.1] tracking-tight">
              <span className="block bg-gradient-to-r from-primary via-purple-600 via-pink-600 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                A Choice of
              </span>
              <span className="block bg-gradient-to-r from-primary via-purple-600 via-pink-600 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift mt-2">
                your Creation
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              A1 Films is a young and dynamic production house operating at the confluence of the local Indian scene. We specialize in Television Commercials, Corporate Films, and Film Production.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-10">
              <Link to="/services" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary via-purple-600 to-pink-600 hover:from-primary/90 hover:via-purple-600/90 hover:to-pink-600/90 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl">
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/#contact" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-primary/30 bg-white/50 backdrop-blur-sm text-foreground hover:bg-gradient-to-r hover:from-primary/5 hover:via-purple-600/5 hover:to-pink-600/5 py-5 sm:py-6 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 rounded-xl hover:border-primary/50">
                  Get Started
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-8">
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-1">2008</p>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">Established</p>
              </div>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden sm:block"></div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">16+</p>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">Years Experience</p>
              </div>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden sm:block"></div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-primary bg-clip-text text-transparent mb-1">Delhi</p>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">Based</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full mt-8 lg:mt-0 animate-fade-in-right">
            <div className="relative max-w-md mx-auto animate-float">
              <div className="aspect-video bg-gradient-to-br from-primary/10 via-purple-600/10 to-pink-600/10 rounded-2xl sm:rounded-3xl shadow-2xl border border-primary/20 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Film className="h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 text-primary/30 relative z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="absolute -right-4 sm:-right-6 -bottom-4 sm:-bottom-6 bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-primary/20 shadow-xl">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Quality</p>
                    <p className="text-base sm:text-lg font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">Premium</p>
                  </div>
                </div>
              </div>
              <div className="absolute -left-4 sm:-left-6 -top-4 sm:-top-6 bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-primary/20 shadow-xl">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Trusted</p>
                    <p className="text-base sm:text-lg font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Reliable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
