import { Heart, Coffee, Lightbulb, Users, Trophy, Smile } from 'lucide-react';

const WorkEnvironment = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion-Driven",
      description: "We love what we do, and it shows in everything we create"
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Collaborative",
      description: "Great ideas come from great teamwork and open communication"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovative",
      description: "We encourage creativity and thinking outside the box"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Inclusive",
      description: "Diverse perspectives make us stronger and more effective"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Excellence",
      description: "We set high standards and continuously strive to exceed them"
    },
    {
      icon: <Smile className="h-8 w-8" />,
      title: "Positive",
      description: "A positive work environment fuels productivity and happiness"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Work Environment</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A culture built on values that drive innovation and success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-8 bg-gradient-to-br from-white to-purple-50/30 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 animate-on-scroll group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-primary">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-purple-600/5 rounded-3xl p-8 md:p-12 animate-on-scroll">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Join Our Team
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion and values. 
              If you're ready to make an impact, we'd love to hear from you.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkEnvironment;

