import { useEffect, useRef } from "react";
import "../styles/BackgroundVideo.css";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) v.pause();
    else v.play().catch(() => {});
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
        
      </video>
    </div>
  );
}