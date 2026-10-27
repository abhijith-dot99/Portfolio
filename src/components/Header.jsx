import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { navLinks } from '../data/site.js';
import { useActiveSection } from '../hooks/useActiveSection.js';
import '../styles/header.css';

const sectionIds = navLinks.map((link) => link.id);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock page scroll and allow Escape while the mobile menu is open.
  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 960 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container header__inner">
        <a href="#about" className="logo" onClick={close} aria-label="Abhijith, back to top">
          ABHIJITH<span className="logo__dot">.</span>
        </a>

        <nav className="nav" aria-label="Main">
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav__link ${active === link.id ? 'is-active' : ''}`}
                  aria-current={active === link.id ? 'true' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="btn btn--dark btn--sm header__cta">
          Let&rsquo;s Talk <ArrowUpRight size={16} aria-hidden="true" />
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="menu-toggle__bar" />
          <span className="menu-toggle__bar" />
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav aria-label="Mobile">
          <ul className="mobile-menu__list">
            {navLinks.map((link, i) => (
              <li key={link.id} style={{ '--i': i }}>
                <a
                  href={`#${link.id}`}
                  className={`mobile-menu__link ${active === link.id ? 'is-active' : ''}`}
                  onClick={close}
                >
                  <span className="mobile-menu__num">0{i + 1}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className="btn btn--accent mobile-menu__cta" onClick={close}>
          Let&rsquo;s Talk <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
