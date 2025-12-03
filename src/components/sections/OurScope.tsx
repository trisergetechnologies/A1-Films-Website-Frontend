import { Globe, Building2, Users, Zap, Target, TrendingUp } from 'lucide-react';

const OurScope = () => {
  const scopeItems = [
    {
      icon: <Globe className="h-7 w-7 sm:h-8 sm:w-8" />,
      title: "Pan-India Reach",
      description: "Serving clients across India with projects in multiple locations"
    },
    {
      icon: <Building2 className="h-7 w-7 sm:h-8 sm:w-8" />,
      title: "Multiple Industries",
      description: "Expertise spanning Television, Corporate, Music, Advertising, and Feature Films"
    },
    {
      icon: <Users className="h-7 w-7 sm:h-8 sm:w-8" />,
      title: "Diverse Clientele",
      description: "From startups to major corporations, we serve them all with excellence"
    },
    {
      icon: <Zap className="h-7 w-7 sm:h-8 sm:w-8" />,
      title: "Rapid Delivery",
      description: "Fast turnaround times without compromising on quality or attention to detail"
    },
    {
      icon: <Target className="h-7 w-7 sm:h-8 sm:w-8" />,
      title: "Precision Focus",
      description: "Targeted solutions tailored to specific business needs and objectives"
    },
    {
      icon: <TrendingUp className="h-7 w-7 sm:h-8 sm:w-8" />,
      title: "Scalable Solutions",
      description: "Solutions that grow with your business from single projects to full campaigns"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Our Scope</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">Scope</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            The breadth and depth of our capabilities and reach
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {scopeItems.map((item, index) => (
            <div
              key={index}
              className="p-6 md:p-8 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/20 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/50 hover:border-primary/30 animate-on-scroll group hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary/10 via-purple-600/10 to-pink-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-primary">
                {item.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-foreground leading-tight">{item.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurScope;
