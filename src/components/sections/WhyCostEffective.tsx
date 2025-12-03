import { DollarSign, TrendingDown, Clock, Award, CheckCircle2, ArrowRight } from 'lucide-react';

const WhyCostEffective = () => {
  const benefits = [
    {
      icon: <DollarSign className="h-7 w-7 sm:h-8 sm:w-8" />,
      title: "Competitive Pricing",
      description: "We offer transparent, competitive pricing that delivers exceptional value for your investment."
    },
    {
      icon: <TrendingDown className="h-7 w-7 sm:h-8 sm:w-8" />,
      title: "Reduced Long-term Costs",
      description: "Our solutions are built to last, reducing the need for frequent updates and maintenance."
    },
    {
      icon: <Clock className="h-7 w-7 sm:h-8 sm:w-8" />,
      title: "Time Efficiency",
      description: "Fast delivery times mean you get to market sooner, maximizing your return on investment."
    },
    {
      icon: <Award className="h-7 w-7 sm:h-8 sm:w-8" />,
      title: "Quality Assurance",
      description: "High-quality work from the start means fewer revisions and lower overall project costs."
    },
    {
      icon: <CheckCircle2 className="h-7 w-7 sm:h-8 sm:w-8" />,
      title: "Proven ROI",
      description: "Our solutions deliver measurable results that directly impact your bottom line."
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-pink-50/10 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Cost Effective</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Why We're <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">Cost-Effective</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Get maximum value from your investment with our efficient, results-driven approach
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-6 md:p-8 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/20 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/50 hover:border-primary/30 animate-on-scroll hover:scale-[1.02]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary/10 via-purple-600/10 to-pink-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-primary">
                  {benefit.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-foreground leading-tight">{benefit.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/5 via-purple-600/5 to-pink-600/5 rounded-3xl p-8 md:p-12 text-center animate-on-scroll border border-primary/10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-foreground">
              Ready to Get Started?
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto font-light leading-relaxed">
              Contact us today for a free consultation and discover how we can help you achieve your goals cost-effectively.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-primary via-purple-600 to-pink-600 hover:from-primary/90 hover:via-purple-600/90 hover:to-pink-600/90 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Request a Quote
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCostEffective;
