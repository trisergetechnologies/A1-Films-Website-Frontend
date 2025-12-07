import { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  className?: string;
  children?: ReactNode;
}

const PageHero = ({ title, subtitle, className = '', children }: PageHeroProps) => {
  return (
    <section className={`relative py-32 sm:py-24 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-white via-purple-50/40 via-pink-50/30 to-white hero-glow ${className}`}>
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-4 sm:left-10 w-64 sm:w-72 md:w-96 h-64 sm:h-72 md:h-96 bg-gradient-to-br from-primary/15 to-purple-600/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-4 sm:right-10 w-80 sm:w-96 md:w-[500px] h-80 sm:h-96 md:h-[500px] bg-gradient-to-br from-pink-500/15 to-purple-600/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 leading-[1.1] tracking-tight">
            <span className="bg-gradient-to-r from-primary via-purple-600 via-pink-600 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
              {title}
            </span>
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light px-4">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
