// components/GalleryShowcase.tsx
import React, { useState } from 'react';
import { Image, Plus, Loader2 } from 'lucide-react';

interface GalleryShowcaseProps {
  className?: string;
}

/**
 * GalleryShowcase
 * - Shows a visually striking gallery with a "View more" button that reveals more items in-place.
 * - Uses Unsplash source image queries for sample images relevant to music & film production.
 * - Responsive, animated, and accessible.
 *
 * Replace the `images` array with your own image URLs when ready.
 */

const baseImages = [
  // initial 6 images
  { id: 'g1', src: '/images/gallery01.jpg', alt: 'Film set with camera and lights' },
  { id: 'g2', src: '/images/gallery04.jpg', alt: 'Mixing console in music studio' },
  { id: 'g3', src: '/images/gallery06.jpg', alt: 'Clapperboard on a film set' },
  { id: 'g4', src: '/images/gallery02.jpg', alt: 'Studio microphone close-up' },
  { id: 'g5', src: '/images/gallery08.jpg', alt: 'Cinematic camera on a dolly' },
  { id: 'g6', src: '/images/gallery05.jpg', alt: 'Composer working on keyboard' },
];

const extraImages = [
  // additional 6 images to reveal on View More
  { id: 'g7', src: '/images/gallery09.jpg', alt: 'Film camera setup' },
  { id: 'g8', src: '/images/gallery03.jpg', alt: 'Music studio mixing console' },
  { id: 'g9', src: '/images/gallery07.jpg', alt: 'Guitar and audio production setup' },
  { id: 'g10', src: '/images/gallery09.jpg', alt: 'Sound recording microphone' },
  { id: 'g11', src: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745', alt: 'Guitar and amplifier indoors' },
  { id: 'g12', src: '/images/gallery10.jpg', alt: 'DJ mixing setup' },
];

const GalleryShowcase: React.FC<GalleryShowcaseProps> = ({ className = '' }) => {
  const [expanded, setExpanded] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const images = expanded ? [...baseImages, ...extraImages] : baseImages;

  const handleViewMore = () => {
    // small simulated loading for UX; replace with real lazy-load if desired
    setLoadingMore(true);
    setTimeout(() => {
      setExpanded(true);
      setLoadingMore(false);
      // optionally scroll into view or animate; kept simple here
    }, 600);
  };

  return (
    <section aria-labelledby="gallery-heading" className={`py-16 sm:py-20 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-purple-600/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-1.5 mb-3">
            <Image className="h-4 w-4 text-primary" />
            <span className="text-xs font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Studio Highlights</span>
          </div>

          <h2 id="gallery-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">
            <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Work — Gallery
            </span>
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto font-light">
            A snapshot of shoots, sessions, and behind-the-scenes moments from our music & film projects.
          </p>
        </div>

        {/* Gallery grid container */}
        <div className="relative">
          {/* Decorative left vertical accent */}
          <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-primary to-transparent rounded" aria-hidden="true" />

          <div
            className="
              grid gap-4
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              auto-rows-fr
            "
          >
            {images.map((img, idx) => (
              <figure
                key={img.id}
                className={`
                  group relative overflow-hidden rounded-2xl 
                  ${idx % 3 === 0 ? 'md:row-span-2' : ''} 
                  border border-white/6 bg-white/3
                  transform transition-all duration-500 will-change-transform
                `}
                style={{ minHeight: '160px' }}
              >
                {/* image */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="
                    w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105
                    brightness-95 group-hover:brightness-100
                    pointer-events-auto
                  "
                  draggable={false}
                />

                {/* overlay caption */}
                <figcaption
                  className="
                    pointer-events-none absolute left-4 bottom-4 bg-black/40 text-white text-xs rounded-md px-3 py-1 backdrop-blur-sm
                    opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300
                  "
                >
                  {img.alt}
                </figcaption>

                {/* subtle animated border gradient */}
                <div className="pointer-events-none absolute -inset-px rounded-2xl border-2 border-transparent bg-gradient-to-tr from-transparent via-transparent to-transparent group-hover:opacity-100 transition-opacity duration-500" />
              </figure>
            ))}
          </div>

          {/* Decorative right ribbon */}
          <div className="absolute right-4 top-4 hidden sm:block">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
              <span>Curated</span>
            </div>
          </div>
        </div>

        {/* View more button */}
        <div className="mt-8 flex items-center justify-center">
          {!expanded ? (
            <button
              type="button"
              onClick={handleViewMore}
              className="
                inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold
                bg-gradient-to-r from-primary via-purple-600 to-pink-600 text-white shadow-xl hover:scale-[1.03] transition-transform
                focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50
              "
            >
              {loadingMore ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4" />
                  View More
                </>
              )}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="
                inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold
                bg-white/6 text-slate-100 border border-white/8 hover:bg-white/8 transition
                focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50
              "
            >
              Show Less
            </button>
          )}
        </div>
      </div>

      {/* Local styles for subtle grid animations (optional) */}
      <style>{`
        /* Make first column tiles a bit taller on larger screens for a dynamic masonry feel */
        @media (min-width: 768px) {
          .md\\:row-span-2 { grid-row: span 2 / span 2; min-height: 360px; }
        }
      `}</style>
    </section>
  );
};

export default GalleryShowcase;
