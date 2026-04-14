import "../styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">

      <p className="contact-kicker">AVAILABLE FOR WORK</p>
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-sub">
        Based in Washington, DC. Open to full-time roles and remote opportunities. I build production-ready web applications with React, TypeScript, and a strong eye for design. References and resume available, feel free to reach out.
      </p>

      <div className="contact-grid">

        <a
          href="mailto:kseniiarostovskaia@gmail.com"
          className="contact-card"
          target="_blank"
          rel="noreferrer"
        >
          <div className="contact-icon">
            <img src="/assets/icons/gmail.png" alt="Email" />
          </div>
          <div className="contact-info">
            <p className="contact-label">Email</p>
            <p className="contact-value">kseniiarostovskaia@gmail.com</p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/kseniia-rostovskaia"
          className="contact-card"
          target="_blank"
          rel="noreferrer"
        >
          <div className="contact-icon">
            <img src="/assets/icons/linkedin.png" alt="LinkedIn" />
          </div>
          <div className="contact-info">
            <p className="contact-label">LinkedIn</p>
            <p className="contact-value">kseniia-rostovskaia</p>
          </div>
        </a>

        <a
          href="https://github.com/kseniiaross"
          className="contact-card"
          target="_blank"
          rel="noreferrer"
        >
          <div className="contact-icon">
            <img src="/assets/icons/github.png" alt="GitHub" />
          </div>
          <div className="contact-info">
            <p className="contact-label">GitHub</p>
            <p className="contact-value">kseniiaross</p>
          </div>
        </a>

        <a
          href="https://wellfound.com/u/kseniia-rostovskaia-1"
          className="contact-card"
          target="_blank"
          rel="noreferrer"
        >
          <div className="contact-icon">
            <img src="/assets/icons/wellfound.png" alt="Wellfound" />
          </div>
          <div className="contact-info">
            <p className="contact-label">Wellfound</p>
            <p className="contact-value">Ksenii Rostovskaia</p>
          </div>
        </a>


      </div>
    </section>
  );
}