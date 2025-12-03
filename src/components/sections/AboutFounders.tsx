import { Linkedin, Twitter, Mail } from 'lucide-react';

interface Founder {
  name: string;
  role: string;
  bio: string;
  image?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const founders: Founder[] = [
  {
    name: "Mr. Sunil Kumar",
    role: "Co-Founder & Visionary",
    bio: "A1 Films Pvt. Ltd. was the golden dream envisioned by two thinkers and great visionaries. Mr. Sunil Kumar, along with Mrs. Archana Kumari, used to trade by singing for many of the biggest companies in India - HMV, T-Series, Tips, Venus etc. Driven by ambition, they put forth several ideas which went into creating their own efforts label.",
    social: {
      email: "info@a1filmstudio.com"
    }
  },
  {
    name: "Mrs. Archana Kumari",
    role: "Co-Founder & Visionary",
    bio: "Along with Mr. Sunil Kumar, Mrs. Archana Kumari analyzed the market, derived their strengths, evaluated their business plans meticulously and went for the opportunity. After countless days of burning midnight oil, the dream took the form of A1 Films. What began on a very small level, today is one of the most reliable houses in the field of music, films and arts.",
    social: {
      email: "info@a1filmstudio.com"
    }
  }
];

const AboutFounders = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-purple-50/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Founders</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Meet Our <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">Founders</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            The visionary leaders who started it all
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="p-6 md:p-8 bg-gradient-to-br from-white via-white/80 to-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/50 hover:border-primary/30 animate-on-scroll text-center hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-primary via-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-3xl sm:text-4xl font-bold mx-auto mb-6 shadow-xl">
                {founder.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-foreground">{founder.name}</h3>
              <p className="text-primary font-medium mb-4">{founder.role}</p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 font-light">{founder.bio}</p>
              {founder.social && (
                <div className="flex justify-center gap-4">
                  {founder.social.email && (
                    <a href={`mailto:${founder.social.email}`} className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center text-primary transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutFounders;
