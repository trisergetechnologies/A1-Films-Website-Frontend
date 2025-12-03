import { Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  department: string;
  bio: string;
  image?: string;
  social?: {
    linkedin?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Armaan Hedar",
    role: "Director",
    department: "Production",
    bio: "Experienced director bringing creative vision to life in every project.",
    social: { email: "info@a1filmstudio.com" }
  },
  {
    name: "Santosh Badal",
    role: "Director",
    department: "Production",
    bio: "Creative director with expertise in Television Commercials and Corporate Films.",
    social: { email: "info@a1filmstudio.com" }
  },
  {
    name: "Sunil Pawan",
    role: "Music Composer",
    department: "Audio Production",
    bio: "Talented music composer creating memorable soundtracks for films and commercials.",
    social: { email: "info@a1filmstudio.com" }
  },
  {
    name: "Akhilesh Mishra",
    role: "Business Partner",
    department: "Business Development",
    bio: "Strategic business partner driving growth and client relationships.",
    social: { email: "info@a1filmstudio.com" }
  },
  {
    name: "Alok Jha",
    role: "Business Partner",
    department: "Business Development",
    bio: "Dedicated business partner focused on expanding our reach and impact.",
    social: { email: "info@a1filmstudio.com" }
  },
  {
    name: "Ramanath Jha",
    role: "Director",
    department: "Production",
    bio: "Visionary director with a passion for storytelling and visual excellence.",
    social: { email: "info@a1filmstudio.com" }
  }
];

const Teams = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-purple-50/20 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Our Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Meet our awesome and expert team members. Our people are our greatest asset and biggest differentiator.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-6 md:p-8 bg-gradient-to-br from-white via-white/80 to-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/50 hover:border-primary/30 animate-on-scroll group text-center hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary via-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 text-foreground">{member.name}</h3>
              <p className="text-primary font-medium mb-1">{member.role}</p>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 font-light">{member.department}</p>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed font-light">{member.bio}</p>
              {member.social && (
                <div className="flex justify-center gap-3">
                  {member.social.email && (
                    <a href={`mailto:${member.social.email}`} className="w-9 h-9 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center text-primary transition-colors">
                      <Mail className="h-4 w-4" />
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

export default Teams;
