import { Target, Lightbulb, Heart } from 'lucide-react';

const OurStory = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Our Story</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Our <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">Story</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground font-light">
              The journey that brought us here
            </p>
          </div>

          <div className="space-y-12 md:space-y-16">
            <div className="flex flex-col md:flex-row gap-8 items-center animate-on-scroll">
              <div className="md:w-1/2">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 via-purple-600/10 to-pink-600/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  <Lightbulb className="h-10 w-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4">The Beginning</h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
                  A1 Films Pvt. Ltd. was the golden dream envisioned by two thinkers and great visionaries – Mr. Sunil Kumar & Mrs. Archana Kumari. The vision used to trade by singing for many of the biggest companies in India - HMV, T-Series, Tips, Venus etc.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="aspect-video bg-gradient-to-br from-primary/10 via-purple-600/10 to-pink-600/10 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl">
                  <span className="text-4xl sm:text-5xl md:text-6xl">🎬</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-8 items-center animate-on-scroll">
              <div className="md:w-1/2">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 via-purple-600/10 to-pink-600/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  <Target className="h-10 w-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Growth & Evolution</h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
                  Driven by ambition, they put forth several ideas which went into creating their own efforts label. Along with a few trusted friends, they analyzed the market, derived their strengths, evaluated their business plans meticulously and went for the opportunity.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="aspect-video bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-primary/10 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl">
                  <span className="text-4xl sm:text-5xl md:text-6xl">🚀</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center animate-on-scroll">
              <div className="md:w-1/2">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 via-purple-600/10 to-pink-600/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  <Heart className="h-10 w-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Today & Beyond</h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
                  After countless days of burning midnight oil, the dream took the form of A1 Films. What began on a very small level, today is one of the most reliable houses in the field of music, films and arts.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="aspect-video bg-gradient-to-br from-pink-600/10 via-primary/10 to-purple-600/10 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl">
                  <span className="text-4xl sm:text-5xl md:text-6xl">✨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
