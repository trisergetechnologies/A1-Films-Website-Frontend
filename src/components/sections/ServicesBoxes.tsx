import { Film, PenTool, Share2, Megaphone, Globe, Shield, Zap, Target, Volume2, Monitor, Sparkles } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Target className="h-7 w-7 sm:h-8 sm:w-8" />,
    title: "Brand Management",
    description: "A1 Films Pvt. Ltd. is a brand building and brand management organization. We believe that a brand is the sum total of your customer experiences."
  },
  {
    icon: <PenTool className="h-7 w-7 sm:h-8 sm:w-8" />,
    title: "Script Writing",
    description: "A1 Films is a story-driven production company. Our talented writers with proven track records create compelling concepts and well-conceived screenplays."
  },
  {
    icon: <Share2 className="h-7 w-7 sm:h-8 sm:w-8" />,
    title: "Social Media",
    description: "Using social media for marketing to enable businesses to further their reach to more customers. Strong social media presence is key to tap into customer interest."
  },
  {
    icon: <Share2 className="h-7 w-7 sm:h-8 sm:w-8" />,
    title: "Social Media Marketing",
    description: "Social media marketing (SMM) implements various social media networks to achieve marketing communication and branding goals through content sharing."
  },
  {
    icon: <Megaphone className="h-7 w-7 sm:h-8 sm:w-8" />,
    title: "Media Services",
    description: "Comprehensive media services to help businesses reach their target audience effectively through various channels and platforms."
  },
  {
    icon: <Target className="h-7 w-7 sm:h-8 sm:w-8" />,
    title: "Media Buying",
    description: "We help you gather knowledge of your target group, consumer behavior, and media. We negotiate the right spot as per your requirements strictly within the deadline."
  },
  {
    icon: <Monitor className="h-7 w-7 sm:h-8 sm:w-8" />,
    title: "Post Production",
    description: "Excellent team of video editors, motion designers, animators, VFX supervisors producing imagery and sequences as breathtaking as our writers can dream."
  },
  {
    icon: <Sparkles className="h-7 w-7 sm:h-8 sm:w-8" />,
    title: "Animation",
    description: "Full range of 3D animation services including Character animations, Real-time rendering, Modeling, Rigging, Photorealistic animation, Concept designs, 3D models, Texturing."
  }
];

const ServicesBoxes = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-purple-50/20 via-white to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">All Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Comprehensive production and marketing services tailored to your needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 bg-gradient-to-br from-white via-white/80 to-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/50 hover:border-primary/30 animate-on-scroll hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary/10 via-purple-600/10 to-pink-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-primary">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-foreground leading-tight">{service.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesBoxes;
