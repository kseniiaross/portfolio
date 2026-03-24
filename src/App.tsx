import BackgroundVideo from "./components/BackgroundVideo";
import Header from "./components/Header";
import Projects from "./components/Projects";
import ResumeSection from "./components/ResumeSection";
import Contact from "./components/Contact";
import "./App.css";

export default function App() {
  return (
    <>
      <BackgroundVideo />
      <main>
        <Header />
        <Projects />
        
        <ResumeSection />
        <Contact />
      </main>
    </>
  );
}