import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { navLinks, site } from '../data/site.js';
import '../styles/footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    document.querySelector('.logo')?.focus({ preventScroll: true });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#about" className="logo logo--light">
              ABHIJITH<span className="logo__dot">.</span>
            </a>
            <p className="footer__text">
              Web developer in Kerala, India, building business websites, custom WordPress
              solutions and web applications.
            </p>
          </div>

          <nav className="footer__col" aria-label="Footer">
            <h2 className="footer__heading">Navigate</h2>
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h2 className="footer__heading">Elsewhere</h2>
            <ul>
              <li>
                <a href={site.github} className="footer__link" target="_blank" rel="noopener noreferrer">
                  GitHub <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href={site.linkedin} className="footer__link" target="_blank" rel="noopener noreferrer">
                  LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href={site.codepen} className="footer__link" target="_blank" rel="noopener noreferrer">
                  CodePen <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} Abhijith M. All rights reserved.</p>
          <button type="button" className="to-top" onClick={toTop}>
            Back to top <ArrowUp size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
