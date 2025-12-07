import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Film, Music2, Sparkles, Loader2, Send, CalendarDays, MapPin, DollarSign } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface GetQuoteFormProps {
  className?: string;
}

const GetQuoteForm = ({ className = '' }: GetQuoteFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    artistOrBrand: '',
    projectType: '',
    projectLocation: '',
    projectStage: '',
    timeline: '',
    budgetRange: '',
    references: '',
    goals: '',
    additionalDetails: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with real API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: 'Quote request submitted 🎬',
        description: "Thank you! Our production team will get back to you shortly.",
      });

      // For now just reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        artistOrBrand: '',
        projectType: '',
        projectLocation: '',
        projectStage: '',
        timeline: '',
        budgetRange: '',
        references: '',
        goals: '',
        additionalDetails: ''
      });
    }, 1500);
  };

  return (
    <section
      className={`
        relative py-32 sm:py-32 md:py-36 bg-gradient-to-b from-slate-950 via-slate-900 to-black overflow-hidden
        ${className}
      `}
    >
      {/* Glow / gradient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-10 h-72 w-72 bg-gradient-to-br from-primary/40 via-purple-600/30 to-pink-600/20 blur-3xl opacity-60" />
        <div className="absolute -bottom-40 -left-10 h-72 w-72 bg-gradient-to-tr from-purple-600/40 via-primary/30 to-amber-500/20 blur-3xl opacity-60" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 md:mb-14 animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/15 via-purple-600/15 to-pink-600/15 backdrop-blur-md border border-primary/30 rounded-full px-4 py-1.5 mb-6 shadow-lg shadow-primary/10">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent uppercase tracking-[0.2em]">
                Get a Custom Production Quote
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Tell Us About Your Project
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
              Whether it&apos;s a music video, ad film, live event or full-scale production – share a few details and
              we&apos;ll craft a quote that fits your vision and budget.
            </p>
            <p className="mt-3 text-xs sm:text-sm text-slate-400">
              Average response time: <span className="font-medium text-slate-200">within 24 hours</span>
            </p>
          </div>

          {/* Form Card */}
          <div
            className="
              animate-on-scroll
              rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 via-white/2 to-white/5 
              backdrop-blur-xl shadow-2xl shadow-black/40
              p-6 sm:p-8 md:p-10
            "
          >
            {/* Top strip with icons */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-primary via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-primary/40">
                  <Film className="h-5 w-5 text-white" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    Music &amp; Film Production House
                  </p>
                  <p className="text-sm sm:text-base text-slate-200">
                    A few quick questions so we can quote you accurately.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <Music2 className="h-4 w-4 text-primary" />
                <span>From concept to final master.</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Info */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-slate-100">
                    Full Name<span className="text-pink-400 ml-0.5">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="
                      h-12 md:h-13 border border-white/10 bg-white/5 
                      focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:border-primary/60
                      transition-all rounded-xl text-slate-100 placeholder:text-slate-400
                    "
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="artistOrBrand" className="text-sm font-medium text-slate-100">
                    Artist / Brand Name
                    <span className="text-xs text-slate-400 ml-1">(optional)</span>
                  </Label>
                  <Input
                    id="artistOrBrand"
                    name="artistOrBrand"
                    type="text"
                    value={formData.artistOrBrand}
                    onChange={handleChange}
                    className="
                      h-12 md:h-13 border border-white/10 bg-white/5 
                      focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:border-primary/60
                      transition-all rounded-xl text-slate-100 placeholder:text-slate-400
                    "
                    placeholder="A1 Films / Your Artist Name"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-slate-100">
                    Email Address<span className="text-pink-400 ml-0.5">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="
                      h-12 md:h-13 border border-white/10 bg-white/5 
                      focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:border-primary/60
                      transition-all rounded-xl text-slate-100 placeholder:text-slate-400
                    "
                    placeholder="you@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-slate-100">
                    Phone / WhatsApp
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="
                      h-12 md:h-13 border border-white/10 bg-white/5 
                      focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:border-primary/60
                      transition-all rounded-xl text-slate-100 placeholder:text-slate-400
                    "
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="projectType" className="text-sm font-medium text-slate-100">
                    Type of Project<span className="text-pink-400 ml-0.5">*</span>
                  </Label>
                  <div className="relative">
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="
                        block w-full h-12 md:h-13 rounded-xl border border-white/10 bg-white/5 
                        text-sm text-slate-100 px-3 pr-8
                        focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60
                        appearance-none
                      "
                    >
                      <option value="" className="bg-slate-900 text-slate-300">
                        Select project type
                      </option>
                      <option value="music-video" className="bg-slate-900 text-slate-100">
                        Music Video
                      </option>
                      <option value="ad-film" className="bg-slate-900 text-slate-100">
                        Ad Film / Commercial
                      </option>
                      <option value="event-coverage" className="bg-slate-900 text-slate-100">
                        Event / Live Show Coverage
                      </option>
                      <option value="film-production" className="bg-slate-900 text-slate-100">
                        Short Film / Feature
                      </option>
                      <option value="studio-recording" className="bg-slate-900 text-slate-100">
                        Studio Recording / Audio Production
                      </option>
                      <option value="post-production" className="bg-slate-900 text-slate-100">
                        Post-Production (Edit / VFX / Color / Mix)
                      </option>
                      <option value="other" className="bg-slate-900 text-slate-100">
                        Other
                      </option>
                    </select>
                    <Film className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectLocation" className="text-sm font-medium text-slate-100">
                    Shoot Location
                  </Label>
                  <div className="relative">
                    <Input
                      id="projectLocation"
                      name="projectLocation"
                      type="text"
                      value={formData.projectLocation}
                      onChange={handleChange}
                      className="
                        h-12 md:h-13 border border-white/10 bg-white/5 
                        focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:border-primary/60
                        transition-all rounded-xl text-slate-100 placeholder:text-slate-400
                        pr-9
                      "
                      placeholder="City / Country"
                    />
                    <MapPin className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectStage" className="text-sm font-medium text-slate-100">
                    Project Stage
                  </Label>
                  <select
                    id="projectStage"
                    name="projectStage"
                    value={formData.projectStage}
                    onChange={handleChange}
                    className="
                      block w-full h-12 md:h-13 rounded-xl border border-white/10 bg-white/5 
                      text-sm text-slate-100 px-3
                      focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60
                      appearance-none
                    "
                  >
                    <option value="" className="bg-slate-900 text-slate-300">
                      Select stage
                    </option>
                    <option value="idea" className="bg-slate-900 text-slate-100">
                      Just an idea
                    </option>
                    <option value="script-ready" className="bg-slate-900 text-slate-100">
                      Script ready
                    </option>
                    <option value="pre-production" className="bg-slate-900 text-slate-100">
                      Pre-production
                    </option>
                    <option value="in-production" className="bg-slate-900 text-slate-100">
                      In production
                    </option>
                    <option value="post-production" className="bg-slate-900 text-slate-100">
                      Post-production
                    </option>
                  </select>
                </div>
              </div>

              {/* Timeline + Budget */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="timeline" className="text-sm font-medium text-slate-100">
                    Ideal Timeline<span className="text-pink-400 ml-0.5">*</span>
                  </Label>
                  <div className="relative">
                    <select
                      id="timeline"
                      name="timeline"
                      required
                      value={formData.timeline}
                      onChange={handleChange}
                      className="
                        block w-full h-12 md:h-13 rounded-xl border border-white/10 bg-white/5 
                        text-sm text-slate-100 px-3 pr-8
                        focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60
                        appearance-none
                      "
                    >
                      <option value="" className="bg-slate-900 text-slate-300">
                        When do you need it?
                      </option>
                      <option value="2-weeks" className="bg-slate-900 text-slate-100">
                        Within 2 weeks
                      </option>
                      <option value="1-month" className="bg-slate-900 text-slate-100">
                        2–4 weeks
                      </option>
                      <option value="3-months" className="bg-slate-900 text-slate-100">
                        1–3 months
                      </option>
                      <option value="flexible" className="bg-slate-900 text-slate-100">
                        Flexible / Not sure
                      </option>
                    </select>
                    <CalendarDays className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budgetRange" className="text-sm font-medium text-slate-100">
                    Estimated Budget<span className="text-pink-400 ml-0.5">*</span>
                  </Label>
                  <div className="relative">
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      required
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="
                        block w-full h-12 md:h-13 rounded-xl border border-white/10 bg-white/5 
                        text-sm text-slate-100 px-3 pr-8
                        focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60
                        appearance-none
                      "
                    >
                      <option value="" className="bg-slate-900 text-slate-300">
                        Choose a range (flexible)
                      </option>
                      <option value="entry" className="bg-slate-900 text-slate-100">
                        Entry – Small, simple production
                      </option>
                      <option value="mid" className="bg-slate-900 text-slate-100">
                        Mid – Standard professional production
                      </option>
                      <option value="premium" className="bg-slate-900 text-slate-100">
                        Premium – High-end cinematic production
                      </option>
                      <option value="not-sure" className="bg-slate-900 text-slate-100">
                        Not sure yet – need guidance
                      </option>
                    </select>
                    <DollarSign className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                  </div>
                  <p className="text-xs text-slate-400">
                    This helps us plan crew size, equipment and production scale.
                  </p>
                </div>
              </div>

              {/* Creative Brief */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="goals" className="text-sm font-medium text-slate-100">
                    What are you trying to achieve?<span className="text-pink-400 ml-0.5">*</span>
                  </Label>
                  <Textarea
                    id="goals"
                    name="goals"
                    required
                    value={formData.goals}
                    onChange={handleChange}
                    rows={4}
                    className="
                      border border-white/10 bg-white/5 
                      focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:border-primary/60
                      transition-all resize-none rounded-xl text-slate-100 placeholder:text-slate-400
                      min-h-[110px]
                    "
                    placeholder="Share your vision, target audience, mood/vibe (cinematic, raw, performance-based, story-driven, etc.) and the core message you want to communicate."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="references" className="text-sm font-medium text-slate-100">
                    Reference Links / Inspirations
                    <span className="text-xs text-slate-400 ml-1">(optional)</span>
                  </Label>
                  <Textarea
                    id="references"
                    name="references"
                    value={formData.references}
                    onChange={handleChange}
                    rows={3}
                    className="
                      border border-white/10 bg-white/5 
                      focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:border-primary/60
                      transition-all resize-none rounded-xl text-slate-100 placeholder:text-slate-400
                    "
                    placeholder="Share links to music videos, films, moodboards, or Instagram/YouTube references you like..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalDetails" className="text-sm font-medium text-slate-100">
                    Anything else we should know?
                    <span className="text-xs text-slate-400 ml-1">(optional)</span>
                  </Label>
                  <Textarea
                    id="additionalDetails"
                    name="additionalDetails"
                    value={formData.additionalDetails}
                    onChange={handleChange}
                    rows={3}
                    className="
                      border border-white/10 bg-white/5 
                      focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:border-primary/60
                      transition-all resize-none rounded-xl text-slate-100 placeholder:text-slate-400
                    "
                    placeholder="Cast requirements, choreography, special locations, deadlines, languages, deliverables, etc."
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between pt-4 border-t border-white/5">
                <p className="text-xs sm:text-sm text-slate-400">
                  By submitting, you&apos;re not committing to anything yet. We&apos;ll review your brief and share a
                  tailored quote &amp; production approach.
                </p>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="
                    w-full sm:w-auto px-8 md:px-10 py-5 md:py-6 
                    text-sm md:text-base font-semibold
                    bg-gradient-to-r from-primary via-purple-600 to-pink-600 
                    hover:from-primary/90 hover:via-purple-600/90 hover:to-pink-600/90 
                    text-white shadow-xl hover:shadow-2xl 
                    transition-all duration-300 hover:scale-105 
                    rounded-xl disabled:opacity-60 disabled:cursor-not-allowed
                  "
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending details...
                    </>
                  ) : (
                    <>
                      Get My Custom Quote
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetQuoteForm;
