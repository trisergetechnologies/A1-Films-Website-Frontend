// components/WorkedWith.tsx
import React from 'react';

interface WorkedWithProps {
  /** Provide full URLs or public-folder-relative paths (e.g. "/assets/brands/kukufm.png").
   * If omitted, the component will use sensible default filenames based on the supplied brand list.
   */
  logos?: { src: string; alt?: string }[];
  className?: string;
}

const defaultBrands = [
  { id: 'kuku-fm', name: 'Kuku FM', filename: '/images/kuku-logo.png' },
  { id: 'pocket-fm', name: 'Pocket FM', filename: '/images/pocket-fm-logo-hd.png' },
  { id: 'storytel', name: 'Storytel', filename: '/images/Storytel-logo.png' },
  { id: 'Saregama', name: 'RNM', filename: '/images/saregama-logo.png' },
  { id: 'tseries', name: 'T-Series', filename: '/images/T-Series-logo.png' },
  { id: 'stockdaddy', name: 'StockDaddy', filename: '/images/stockdaddy-logo.png' },
  { id: 'shemaroo', name: 'Shemaroo', filename: '/images/shemaroo-logo.png' },
  { id: 'zee-music', name: 'Zee Music', filename: '/images/ZeeMusic.png' },
  { id: 'zupee', name: 'Zupee', filename: '/images/zupee-logo.png' },
  { id: 'sony-movies', name: 'Sony Movies', filename: '/images/sony-logo.png' },
];

/**
 * WorkedWith - "We have worked with" marquee section
 *
 * Usage:
 * 1) Put brand images in public folder: /public/assets/brands/<filenames as above>
 * 2) Import and use: <WorkedWith />
 *
 * If you prefer to use external URLs or different filenames, pass a `logos` prop:
 * <WorkedWith logos={[{ src: 'https://.../logo1.svg', alt: 'Foo'}, ... ]} />
 */
const WorkedWith: React.FC<WorkedWithProps> = ({ logos, className = '' }) => {
  // Build the logos array: use provided logos or defaults
  const items: { src: string; alt: string }[] = logos && logos.length
    ? logos.map(l => ({ src: l.src, alt: l.alt ?? 'Partner logo' }))
    : defaultBrands.map(b => ({ src: b.filename, alt: b.name }));

  // Duplicate list to create infinite loop
  const looped = [...items, ...items];

  return (
    <section
      aria-labelledby="worked-with-heading"
      className={`py-12 sm:py-16 ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-purple-600/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-1.5 mb-3">
            <span className="text-xs font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Partners & Clients
            </span>
          </div>

          <h3 id="worked-with-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
              We have worked with
            </span>
          </h3>

          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto font-light">
            Trusted by audio & film industry leaders — a selection of brands we’ve partnered with.
          </p>
        </div>

        {/* Marquee container */}
        <div
          className="relative overflow-hidden rounded-2xl border border-white/6 bg-gradient-to-r from-white/3 via-white/2 to-white/3 p-4"
          aria-hidden={false}
        >
          {/* The marquee track */}
          <div
            className="flex items-center gap-8 whitespace-nowrap will-change-transform"
            // Accessible note: the visual marquee is decorative; screen readers should not keep announcing it.
            aria-hidden="true"
          >
            {/* We render two identical sets and animate their container leftwards */}
            <div className="marquee-track flex items-center gap-8">
              {looped.map((logo, idx) => (
                <div
                  key={`${logo.src}-${idx}`}
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: '160px' }} // container width; image centered within
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    draggable={false}
                    className="max-h-12 sm:max-h-14 md:max-h-16 object-contain pointer-events-none select-none"
                    // prevent browsers from adding focus outline on click (not clickable anyway)
                    role="img"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Decorative fade edges for better visual */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white/90 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/90 to-transparent" />
        </div>
      </div>

      {/* Local styles for marquee animation. Tailwind doesn't ship with a continuous marquee by default,
          so we include small CSS here. You may extract to your CSS file if preferred. */}
      <style>{`
        /* The marquee-track will be animated left continuously.
           We duplicate the content (two sets) so the animation appears infinite & seamless.
        */
        .marquee-track {
          display: inline-flex;
          align-items: center;
          gap: 3.5rem;
          animation: marquee 24s linear infinite;
        }

        /* slower on small screens, faster on large screens */
        @media (max-width: 640px) {
          .marquee-track { animation-duration: 28s; }
        }
        @media (min-width: 1024px) {
          .marquee-track { animation-duration: 20s; }
        }

        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* shift by half since contents are duplicated */
        }

        /* Ensure the duplicated content is exactly twice the width of the visible content.
           The structure here (single .marquee-track with duplicated items) relies on the fact
           that the duplicated items are rendered inline and the animation moves -50% to create
           a seamless loop. If you change spacing or widths, re-check the smoothness.
        */
      `}</style>
    </section>
  );
};

export default WorkedWith;
