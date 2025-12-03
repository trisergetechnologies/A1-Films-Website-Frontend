import { Star, Quote } from 'lucide-react';

interface Review {
  name: string;
  role: string;
  company: string;
  rating: number;
  comment: string;
  avatar?: string;
}

const reviews: Review[] = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "Tech Innovations",
    rating: 5,
    comment: "Outstanding service and exceptional results. They exceeded our expectations and delivered beyond what we imagined. Highly recommended!"
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    company: "Global Solutions",
    rating: 5,
    comment: "Professional, efficient, and results-driven. The team's expertise and attention to detail made all the difference in our project's success."
  },
  {
    name: "Emily Rodriguez",
    role: "Founder",
    company: "StartupHub",
    rating: 5,
    comment: "Working with them has been a game-changer. Their innovative approach and commitment to excellence is unmatched. Truly impressed!"
  },
  {
    name: "David Thompson",
    role: "Operations Manager",
    company: "Enterprise Corp",
    rating: 5,
    comment: "Reliable, professional, and always delivers on time. They understand our needs and consistently provide solutions that work."
  },
  {
    name: "Lisa Anderson",
    role: "Product Manager",
    company: "Digital Dynamics",
    rating: 5,
    comment: "Exceptional quality and service. The team is responsive, creative, and truly cares about our success. Couldn't be happier!"
  },
  {
    name: "James Wilson",
    role: "CTO",
    company: "Innovation Labs",
    rating: 5,
    comment: "Top-notch expertise and professionalism. They transformed our vision into reality with precision and excellence. Outstanding work!"
  }
];

const ClientsReviews = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-pink-50/10 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            What Our <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/20 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/50 hover:border-primary/30 animate-on-scroll relative overflow-hidden hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <Quote className="absolute top-6 right-6 h-12 w-12 md:h-16 md:w-16 text-primary/5 group-hover:text-primary/10 transition-colors duration-300" />
              <div className="flex items-center mb-4 relative z-10">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed relative z-10 font-light">
                "{review.comment}"
              </p>
              <div className="flex items-center relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary via-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold text-base sm:text-lg mr-3 sm:mr-4 shadow-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm sm:text-base">{review.name}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground font-light">{review.role}, {review.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsReviews;
