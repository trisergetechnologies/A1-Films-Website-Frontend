// components/VideoReel.tsx
import React, { useEffect, useRef, useState } from "react";

interface VideoItem {
  id: string;
  src: string;
  poster?: string;
  title?: string;
  duration?: string;
}

/**
 * VideoReel - Horizontal scroll video reel with hover-preview and fullscreen modal player
 *
 * Replace the `videos` array with your own MP4/streaming URLs (YouTube/Vimeo if using iframe).
 */

const videos: VideoItem[] = [
  {
    id: "v1",
    src: "/videos/A1-cinematic.mp4",
    poster: "/images/gallery05.jpg",
    title: "A1 Films- Music & Productions",
  },
  {
    id: "v2",
    src: "/videos/video01.mp4",
    poster: "/images/gallery05.jpg",
    title: "A1 Films- Music & Productions",
  },
  {
    id: "v3",
    src: "/videos/video02.mp4",
    poster: "/images/gallery05.jpg",
    title: "A1 Films- Music & Productions",
  },
  {
    id: "v4",
    src: "/videos/video04.mp4",
    poster: "/images/gallery13.jpg",
    title: "A1 Films- Music & Productions",
  },
  {
    id: "v5",
    src: "/videos/video05.mp4",
    poster: "/images/gallery05.jpg",
    title: "A1 Films- Music & Productions",
  },
  {
    id: "v6",
    src: "/videos/video06.mp4",
   poster: "/images/gallery05.jpg",
    title: "A1 Films- Music & Productions",
  },
  {
    id: "v7",
    src: "/videos/video07.mp4",
    poster: "/images/gallery05.jpg",
    title: "A1 Films- Music & Productions",
  },
];

const VideoReel: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);
  const reelRef = useRef<HTMLDivElement | null>(null);

  // Close modal on ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setModalOpen(false);
      if (!modalOpen) return;
      if (e.key === " " || e.code === "Space") {
        e.preventDefault();
        const v = modalVideoRef.current;
        if (!v) return;
        if (v.paused) v.play();
        else v.pause();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  useEffect(() => {
    if (modalOpen && modalVideoRef.current) {
      modalVideoRef.current.currentTime = 0;
      modalVideoRef.current.play().catch(() => {});
    } else if (!modalOpen && modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
  }, [modalOpen, activeVideo]);

  // Thumbnail card: on hover play preview (muted loop), on leave pause
  const attachPreviewHandlers = (el: HTMLVideoElement | null) => {
    if (!el) return;
    // ensure muted/inline for mobile preview
    el.muted = true;
    el.playsInline = true;
    el.loop = true;
  };

  return (
    <section
      className={`py-16 sm:py-20 md:py-24 ${className}`}
      aria-labelledby="video-reel-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-purple-600/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-1.5 mb-3">
            <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none">
              <path d="M3 5v14h18V5H3zm4 3l6 4-6 4V8z" fill="currentColor" />
            </svg>
            <span className="text-xs font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Client Work
            </span>
          </div>

          <h2 id="video-reel-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">
            <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Work
            </span>
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto font-light">
            Browse short previews of our music & film work. Hover any thumbnail for a quick preview — click to open full player.
          </p>
        </div>

        {/* Reel */}
        <div className="relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-20 pointer-events-none bg-gradient-to-r from-white to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-20 pointer-events-none bg-gradient-to-l from-white to-transparent" />

          <div
            ref={reelRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden pb-6 snap-x snap-mandatory scroll-smooth"
            role="list"
            aria-label="Video reel"
            // allow mouse drag scrolling UX improvement (optional JS could be added)
          >
            {videos.map((video) => (
              <article
                key={video.id}
                role="listitem"
                className="flex-shrink-0 w-[260px] sm:w-[320px] md:w-[360px] lg:w-[420px] snap-center"
              >
                <div
                  className="relative rounded-2xl overflow-hidden border border-white/8 shadow-lg bg-black"
                  style={{ minHeight: 180 }}
                >
                  {/* preview video element */}
                  <video
                    ref={attachPreviewHandlers}
                    src={video.src + "#t=0.1"}
                    poster={video.poster}
                    preload="metadata"
                    muted
                    playsInline
                    className="w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] object-cover transition-transform duration-300 group-hover:scale-105"
                    onMouseEnter={(e) => {
                      const v = e.currentTarget as HTMLVideoElement;
                      v.muted = true;
                      v.loop = true;
                      v.play().catch(() => {});
                    }}
                    onMouseLeave={(e) => {
                      const v = e.currentTarget as HTMLVideoElement;
                      v.pause();
                      try { v.currentTime = 0; } catch {}
                    }}
                    onClick={() => {
                      setActiveVideo(video);
                      setModalOpen(true);
                    }}
                    aria-label={`Play preview for ${video.title ?? "video"}`}
                    // Mobile: tap will open modal
                  />
                  {/* overlay: play icon and title */}
                  <button
                    type="button"
                    onClick={() => {
                      setActiveVideo(video);
                      setModalOpen(true);
                    }}
                    className="absolute inset-0 flex items-end justify-start p-4"
                    aria-label={`Open ${video.title ?? "video"} full player`}
                  >
                    <div className="flex items-center gap-3 bg-gradient-to-r from-black/40 to-transparent rounded-md px-3 py-1">
                      <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
                      <div className="text-left">
                        <div className="text-xs text-white/90 font-semibold">{video.title}</div>
                        <div className="text-[10px] text-white/60">Click to open player</div>
                      </div>
                    </div>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* View more */}
        <div className="mt-6 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-primary via-purple-600 to-pink-600 text-white shadow-xl hover:scale-105 transition-transform"
            onClick={(e) => {
              e.preventDefault();
              // you can link to a /videos page or expand to show more
              // For now scroll the reel to the start
              reelRef.current?.scrollTo({ left: 0, behavior: "smooth" });
            }}
          >
            View More
          </a>
        </div>
      </div>

      {/* Fullscreen modal player */}
      {modalOpen && activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title || "Video player"}
          onClick={(e) => {
            // close only if clicking backdrop (not the player)
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
        >
          <div className="w-full max-w-[1100px] bg-black rounded-xl overflow-hidden shadow-2xl">
            <div className="relative">
              <video
                ref={modalVideoRef}
                src={activeVideo.src}
                poster={activeVideo.poster}
                controls
                autoPlay
                className="w-full h-[60vh] max-h-[760px] object-contain bg-black"
              />
              <button
                aria-label="Close player"
                className="absolute right-3 top-3 p-2 rounded-full bg-black/40 text-white hover:bg-black/60"
                onClick={() => setModalOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="px-5 py-4 bg-gradient-to-r from-white/3 to-white/2">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-white">{activeVideo.title}</h3>
                  <p className="text-xs text-white/70 mt-1">Production sample · {activeVideo.id}</p>
                </div>

                <div className="text-xs text-white/70">
                  <button
                    onClick={() => {
                      // toggle mute
                      if (!modalVideoRef.current) return;
                      modalVideoRef.current.muted = !modalVideoRef.current.muted;
                    }}
                    className="px-3 py-1 rounded-md bg-white/8"
                  >
                    Toggle Mute
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoReel;
