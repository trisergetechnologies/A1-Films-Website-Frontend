import { CheckCircle2 } from 'lucide-react';

const OurGoals = () => {
  const goals = [
    {
      title: "Excellence in Production",
      description: "We strive for excellence in every project, delivering high-quality Television Commercials, Corporate Films, and Film Production."
    },
    {
      title: "Client Success First",
      description: "Your success is our success. We measure our achievements by the value we create for our clients through innovative solutions."
    },
    {
      title: "Innovation & Growth",
      description: "We continuously innovate and evolve, exploring almost all possible mediums of advertising and promotion, creating newer mediums as needed."
    },
    {
      title: "Building Trust",
      description: "Trust is the foundation of every relationship. We earn it through transparency, reliability, and delivering on our promises."
    },
    {
      title: "Comprehensive Services",
      description: "We offer an array of marketing communication services covering Audio Production, Video Production, Education Learning, 2D&3D Animation, Brand Management and Media Buying."
    },
    {
      title: "Industry Leadership",
      description: "We recognize the various ways in which an organization can be seen, heard and achieve positive perceptions to build progressive relationships with target audiences."
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-purple-50/20 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Our Goals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">Goals</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            The principles and aspirations that guide everything we do
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="p-6 md:p-8 bg-gradient-to-br from-white via-white/80 to-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/50 hover:border-primary/30 animate-on-scroll group hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 via-purple-600/10 to-pink-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3 text-foreground leading-tight">{goal.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">{goal.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurGoals;
