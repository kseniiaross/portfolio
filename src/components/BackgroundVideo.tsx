import { useEffect, useRef } from "react";
import "../styles/BackgroundVideo.css";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      v.pause();
      return;
    }

    const tryPlay = () => {
      v.play().catch(() => {
        setTimeout(tryPlay, 500);
      });
    };

    tryPlay();
  }, []);

  return (
    <div className="bg-video-wrapper">
      <video
        ref={videoRef}
        className="bg-video"
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/background.webm" type="video/webm" />
        <source src="/assets/background.mp4" type="video/mp4" />
      </video>
    </div>
  );
}