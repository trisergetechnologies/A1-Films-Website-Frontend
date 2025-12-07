const ServicesParagraph = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-purple-50/10 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto animate-on-scroll">
          {/* header */}
          <div className="text-center md:text-left mb-10 md:mb-12">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-primary/20 rounded-full px-3 py-1 text-sm font-medium">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 2v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 8h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              About A1 Films
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Experienced production that makes your brand <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">seen, heard & remembered</span>
            </h2>

            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-3xl">
              Delhi-based since 2008 — Television commercials, corporate films, music videos and feature productions handled end-to-end with creative craft and production discipline.
            </p>
          </div>

          {/* two-column content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* main paragraphs */}
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-base sm:text-lg md:text-lg leading-relaxed mb-4 md:mb-6 font-light">
                A1 Films Pvt. Ltd was formed in 2008 and it is a Delhi based production house specializing in Television Commercials, Corporate Films and Film Production. It is hugely experienced, with experiences ranging from music video to daily soaps to advertising agency to feature films.
              </p>

              <p className="text-base sm:text-lg md:text-lg leading-relaxed mb-4 md:mb-6 font-light">
                Our core service areas cover Audio Production, Video Production, Education Learning, 2D &amp; 3D Animation, Brand Management and Media Buying Services. We offer an array of marketing communication services, exploring almost all possible mediums of advertising and promotion and also creating newer mediums as and when the situation demands.
              </p>

              <p className="text-base sm:text-lg md:text-lg leading-relaxed font-light">
                As experts in the field, we recognize the various ways in which an organization can be seen, heard and achieve positive perceptions to build a progressive relationship with its target audience. We work closely with you to understand your unique needs and objectives, ensuring that every solution we provide is tailored specifically to your business goals.
              </p>
            </div>

            {/* highlights / CTA card */}
            <aside aria-labelledby="services-card-heading" className="relative">
              <div className=" rounded-2xl p-6 md:p-8 bg-white/80 backdrop-blur-sm border border-primary/10 shadow-lg h-full flex flex-col justify-between">
                <div>
                  <h3 id="services-card-heading" className="text-lg font-semibold mb-3">
                    What we do — at a glance
                  </h3>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="flex-none mt-1">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path d="M4 12l4 4L20 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <div>
                        <p className="font-medium">Full-service Video Production</p>
                        <p className="text-sm text-muted-foreground font-light">From concept to post — commercials, corporate films, music videos and features.</p>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="flex-none mt-1">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path d="M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <div>
                        <p className="font-medium">Animation &amp; Audio</p>
                        <p className="text-sm text-muted-foreground font-light">2D/3D animation, sound design and music production to lift your message.</p>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="flex-none mt-1">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path d="M3 7h18M6 7v13a1 1 0 001 1h10a1 1 0 001-1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M9 7V5a3 3 0 013-3h0a3 3 0 013 3v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <div>
                        <p className="font-medium">Brand &amp; Media Strategy</p>
                        <p className="text-sm text-muted-foreground font-light">Brand positioning, media buying and campaign planning to reach the right audience.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <a
                    href="/services"
                    className="inline-flex items-center justify-center w-full px-5 py-3 rounded-lg bg-gradient-to-r from-primary via-purple-600 to-pink-600 text-white font-semibold shadow hover:scale-[1.02] transition-transform"
                  >
                    Explore Services
                  </a>

                  <p className="mt-3 text-xs text-muted-foreground text-center font-light">
                    Or <a href="/quote" className="text-primary underline">contact us</a> for a tailored proposal.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesParagraph;
