import { useEffect } from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Expertise from './components/Expertise.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { useReveal } from './hooks/useReveal.js';

export default function App() {
  useReveal();

  // The page renders after the browser's own hash jump, so scroll to
  // a linked section (e.g. /#projects) once the content exists.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <About />
        <Experience />
        <Expertise />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
