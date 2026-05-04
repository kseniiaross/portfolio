import { useEffect, useRef } from "react";
import "../styles/Projects.css";

type Project = {
  name: string;
  subtitle: string;
  desc: string;
  img: string;
  live?: string;
  github?: string;
  flip?: boolean;
};

const projects: Project[] = [
  {
    name: "KFursenko Candles",
    subtitle:
      "React (TypeScript) · Redux Toolkit · Python (Django) · PostgreSQL · WCAG 2.1",
    desc:
      "Real-world candle e-commerce platform featuring AI Search and an AI Sales Assistant for personalized product discovery. Built with secure checkout, scalable order APIs, and WCAG 2.1 / Section 508 accessibility. Achieved Lighthouse scores of 100 in performance and accessibility, delivering a fast, inclusive, and production-ready user experience.",
    img: "/assets/project_screens/kfursenko_demo_portfolio.mp4",
    live: "https://www.kfcandle.com",
    flip: false,
  },
  {
    name: "TRESSE Online Store",
    subtitle:
      "React (TypeScript) · Redux Toolkit · Python (Django) · PostgreSQL · WCAG 2.1",
    desc:
      "A full-stack knitwear store built for real-world use — featuring secure checkout, scalable order APIs, and a carefully crafted minimalist interface. Built with WCAG 2.1 / Section 508 compliance, clean architecture, and an intuitive shopping experience from browsing to checkout.",
    img: "/assets/project_screens/tresse_demo_portfolio.mp4",
    live: "https://www.tressehandmade.com",
    flip: true,
  },
  {
    name: "Real-Time Chat",
    subtitle: "React (TypeScript) · Flask-SocketIO · WebSockets · REST API",
    desc:
      "A modern real-time chat platform built with Flask-SocketIO (backend) and React + TypeScript (frontend). Supports instant messaging, custom rooms, reactions, and a polished animated UI.",
    img: "/assets/project_screens/realchat.png",
    live: "https://chat-appsigma.vercel.app",
    github: "https://github.com/kseniiaross/Real-Time-Chat-App.git",
    flip: false,
  },
  {
    name: "Pokémon Adventure",
    subtitle: "JavaScript (ES6) · Bootstrap · PokéAPI · Vercel",
    desc:
      "Interactive Pokémon explorer powered by the PokéAPI. Features detailed stats, abilities, evolutionary paths, and a turn-based battle simulator — all rendered dynamically from a live API.",
    img: "/assets/project_screens/pokemon.jpg",
    live: "https://pokemonadventure.vercel.app",
    github: "https://github.com/kseniiaross/Pokemon-Adventure.git",
    flip: true,
  },
];

export default function Projects() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const rows = root.querySelectorAll<HTMLElement>(".project-row");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -55% 0px",
      }
    );

    rows.forEach((row) => observer.observe(row));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="projects-wrapper">
      <section className="projectsFS" id="projects" ref={rootRef}>
        <h2 className="projectsFS-title">Recent Builds</h2>

        {projects.map((project) => (
          <article
            key={project.name}
            className={`project-row${project.flip ? " flip" : ""}`}
          >
            <figure className="shot">
              {project.img.endsWith(".mp4") ? (
                <video
                  src={project.img}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <img
                  src={project.img}
                  alt={`${project.name} project preview`}
                />
              )}

              <div className="vignette" />
            </figure>

            <div className="copy">
              <h3 className="name">{project.name}</h3>
              <p className="subtitle">{project.subtitle}</p>
              <p className="desc">{project.desc}</p>

              <div className="copy__btns">
                {project.live && (
                  <a
                    href={project.live}
                    className="liveBtn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Link
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    className="liveBtn secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}