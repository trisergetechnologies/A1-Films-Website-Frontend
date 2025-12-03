import { Building2, Headphones, Video, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Building2 className="h-7 w-7 sm:h-8 sm:w-8" />,
      title: "Studio",
      description: "One-stop-solution for full line of production, post-production and event services under one roof with air-conditioned studio and high-tech equipment."
    },
    {
      icon: <Headphones className="h-7 w-7 sm:h-8 sm:w-8" />,
      title: "Audio Production",
      description: "Latest hi-fi audio instruments and acoustics. Native VO artists supported with hi-end VO studio providing high quality Voice Over services & Multilingual Voice Over."
    },
    {
      icon: <Video className="h-7 w-7 sm:h-8 sm:w-8" />,
      title: "Video Production",
      description: "Team of writers, directors, producers, and cinematographers handling projects of every scale and genre, from single-camera studio interviews to multi-camera commercial shoots."
    },
    {
      icon: <Award className="h-7 w-7 sm:h-8 sm:w-8" />,
      title: "Experienced Team",
      description: "Hugely experienced team with experiences ranging from music videos to daily soaps to advertising agency to feature films."
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-purple-50/20 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Why <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">Choose Us</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            We combine expertise, innovation, and dedication to deliver exceptional production results
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 bg-gradient-to-br from-white via-white/80 to-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/50 hover:border-primary/30 animate-on-scroll hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary/10 via-purple-600/10 to-pink-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-foreground leading-tight">{feature.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
