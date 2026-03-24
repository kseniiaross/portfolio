import { useState } from "react";
import { createPortal } from "react-dom";
import "../styles/ResumeSection.css";

function Modal({ src, onClose }: { src: string; onClose: () => void }) {
  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <iframe className="modal-iframe" src={src} />
      </div>
    </div>,
    document.body
  );
}

export default function ResumeSection() {
  const [modal, setModal] = useState<string | null>(null);

  return (
    <section className="resume-section" id="resume">

      {modal && <Modal src={modal} onClose={() => setModal(null)} />}

      <h2 className="resume-title">Resume</h2>

      <div className="doc-card">
        <div className="doc-info">
          <p className="doc-name">Kseniia Rostovskaia — Resume</p>
          <p className="doc-sub">Front-End Developer </p>
        </div>
        <div className="doc-btns">
          <button className="resume-btn" onClick={() => setModal("/assets/KSENIIA_ROSTOVSKAIA_Resume.pdf")}>
            View
          </button>
          <a href="/assets/KSENIIA_ROSTOVSKAIA_Resume.pdf" download className="resume-btn secondary">Download PDF</a>
          <a href="/assets/KSENIIA_ROSTOVSKAIA_Resume.docx" download className="resume-btn secondary">Download DOCX</a>
        </div>
      </div>

      <h2 className="resume-title rec-title">Recommendations</h2>

      <div className="rec-grid">

        <div className="rec-card">
          <div className="rec-meta">
            <p className="rec-name">Derek Drew</p>
            <p className="rec-role">Hotel Manager · Lyle Hotel, Washington DC</p>
            <p className="rec-note">Contact available upon request</p>
          </div>
          <div className="doc-btns">
            <button className="resume-btn" onClick={() => setModal("/assets/Lyle_recommendation.pdf")}>
              View
            </button>
            <a href="/assets/Lyle_recommendation.pdf" download className="resume-btn secondary">Download PDF</a>
            <a href="/assets/Lyle_recommendation.docx" download className="resume-btn secondary">Download DOCX</a>
          </div>
        </div>

        <div className="rec-card">
          <div className="rec-meta">
            <p className="rec-name">Kseniia Fursenko</p>
            <p className="rec-role">Owner · KFursenko</p>
            <p className="rec-note">Contact available upon request</p>
          </div>
          <div className="doc-btns">
            <button className="resume-btn" onClick={() => setModal("/assets/KFursenko_recommendation.pdf")}>
              View
            </button>
            <a href="/assets/KFursenko_recommendation.pdf" download className="resume-btn secondary">Download PDF</a>
            <a href="/assets/KFursenko_recommendation.docx" download className="resume-btn secondary">Download DOCX</a>
          </div>
        </div>

      </div>
    </section>
  );
}