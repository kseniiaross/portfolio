import "../styles/Header.css";

type SkillItem = {
  name: string;
  icon: string;
  title?: string;
};

const skills: Array<{ group: string; items: SkillItem[] }> = [
  {
    group: "Core",
    items: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    ],
  },
  {
    group: "UI",
    items: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", title: "Redux Toolkit" },
      { name: "Tailwind", icon: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/tailwindcss/tailwindcss-original-wordmark.svg" },
      { name: "Sass", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
    ],
  },
  {
    group: "Back-End & Tools",
    items: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    ],
  },
];

export default function Header() {
  return (
    <header className="hero" id="home">
      <nav className="hero__nav" aria-label="Primary navigation">
        <div className="hero__links">
          <a href="#home" className="hero__link">HOME</a>
          <a href="#about" className="hero__link">ABOUT</a>
          <a href="#projects" className="hero__link">PROJECTS</a>
          <a href="#resume" className="hero__link">RESUME AND RECOMMENDATIONS</a>
          <a href="#contact" className="hero__link">CONTACT</a>
        </div>
      </nav>

      <section className="hero__section" aria-label="Intro">
        <div className="hero__content">
          <div className="hero__copy">
            <p className="hero__kicker">HELLO!</p>

            <h1 className="hero__title">
              I’m <span className="hero__accent">Kseniia Rostovskaia</span>
            </h1>

            <p className="hero__intro">
              <span className="hero__role">FRONT-END DEVELOPER</span> based in Washington, DC. I build elegant, high-performance web experiences with strong visual identity and clean architecture.
              Outside of work, I enjoy knitting, working out, and reading psychological thrillers. These hobbies help me stay focused and detail-oriented — qualities I bring into my development work.
            </p>

            <div className="hero__socials" aria-label="Social links">
              <a
                href="https://www.linkedin.com/in/kseniia-rostovskaia"
                className="hero__icon"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <img src="/assets/icons/linkedin.png" alt="LinkedIn" />
              </a>

              <a
                href="https://github.com/kseniiaross"
                className="hero__icon"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <img src="/assets/icons/github.png" alt="GitHub" />
              </a>

              <a
                href="mailto:kseniiarostovskaia@gmail.com"
                className="hero__icon"
                aria-label="Email"
                title="Email"
              >
                <img src="/assets/icons/gmail.png" alt="Email" />
              </a>
            </div>
          </div>

          <div className="hero__media" aria-label="Portrait">
            <img
              src="/assets/portfolio_pic1.png"
              alt="Kseniia portrait"
              className="hero__photo"
              loading="eager"
              draggable={false}
            />
          </div>
        </div>
      </section>

      <section className="about" id="about" aria-label="About">
        <div className="about__content">
          <h2 className="about__title about__title--center">About</h2>

          <p className="about__text">
            Front-End–focused Full Stack Developer building scalable, accessible, and high-performance web applications with React (TypeScript), Redux Toolkit, Django, and PostgreSQL. 
            I specialize in front-end architecture, state management, semantic HTML, and WCAG 2.1 / Section 508–compliant interfaces, ensuring inclusive and maintainable user experiences. 
            I design clean, data-driven systems with strong API integration, optimized data flow, and performance-focused architecture built for real-world production environments. 
            With a background in database administration and leadership roles, I bring technical precision, structured problem-solving, and clear cross-functional communication to deliver reliable, production-ready solutions that scale.
          </p>

          <h3 className="about__subtitle about__subtitle--center">Skills</h3>

          <div className="skills" aria-label="Skills grouped">
            <div className="skills__grid">
              {skills.map((block) => (
                <section className="skills__col" key={block.group} aria-label={block.group}>
                  <div className="skills__head">
                    <h4 className="skills__group">{block.group}</h4>
                    <div className="skills__line" />
                  </div>

                  <div className="skills__cards">
                    {block.items.map((it) => (
                      <div className="skill" key={it.name}>
                        <div className="skill__iconWrap">
                          <img
                            src={it.icon}
                            alt={it.name}
                            title={it.title ?? it.name}
                            className="skill__icon"
                            loading="lazy"
                            draggable={false}
                          />
                        </div>
                        <div className="skill__label">{it.name}</div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}