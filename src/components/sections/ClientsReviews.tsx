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
    name: "Rahul Sinha",
    role: "Singer & Composer",
    company: "Independent Artist",
    rating: 5,
    comment: "Studio ka environment bahut professional aur creative tha. Recording aur mixing ki quality top-notch! Unke support ki wajah se mera track expected se bhi zyada outstanding nikla. Highly recommended for serious artists!"
  },
  {
    name: "Ananya Roy",
    role: "Producer",
    company: "Silver Frame Productions",
    rating: 5,
    comment: "Video shoot experience was amazing! Team extremely talented hai and they understand cinematic style very well. Editing and color grading ne final output ko next level bana diya. Truly impressed!"
  },
  {
    name: "Vikas Chauhan",
    role: "Music Director",
    company: "Melody Beats",
    rating: 5,
    comment: "Kaafi professional team hai, deadlines perfectly manage kiye aur creative inputs bhi diye. Sound design aur mastering ki clarity bahut hi solid thi. Future projects definitely yahi karenge."
  },
  {
    name: "Ishita Kapoor",
    role: "Actor",
    company: "DreamMotion Films",
    rating: 5,
    comment: "Production team very supportive aur friendly thi. Camera work aur lighting ka quality cinematic tha. Final short film dekhne ke baad sabko bahut pasand aayi. Fantastic experience!"
  },
  {
    name: "Saurabh Mishra",
    role: "YouTube Creator",
    company: "SM Vlogs",
    rating: 5,
    comment: "Background music, SFX, and post-production absolutely perfect. Team ne mere content ka level upgrade kar diya. Fast delivery ke saath quality compromise bilkul nahi kiya. 100% value!"
  },
  {
    name: "Megha Jain",
    role: "Model & Performer",
    company: "Freelance Artist",
    rating: 5,
    comment: "Music video shoot bahut smooth tha. Team creative aur supportive thi, har shot thoughtfully plan kiya. Final output dekhkar goosebumps aa gaye. Outstanding work, thank you!"
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
