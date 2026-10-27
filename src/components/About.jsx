import { ArrowDownRight, ArrowUpRight, MapPin } from 'lucide-react';
import SafeImage from './SafeImage.jsx';
import { site, strengths } from '../data/site.js';
import '../styles/about.css';

// The opening section of the page: introduction, portrait and main calls to action.
export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about__grid">
        <div className="about__head about__intro">
          <p className="eyebrow">
            <span className="eyebrow__line" aria-hidden="true" />
            Web Developer · Kerala, India
          </p>
        </div>

        <figure className="about__portrait about__intro">
          <SafeImage
            src={site.portrait}
            alt="Abhijith M smiling at his desk with a laptop in an office"
            className="about__photo"
            fallbackLabel="Portrait"
          />
          <figcaption className="about__caption">
            <span className="about__caption-name">{site.name}</span>
            <span className="about__caption-meta">
              <MapPin size={14} aria-hidden="true" />
              {site.location}
            </span>
          </figcaption>
        </figure>

        <div className="about__content">
          <div className="about__body about__intro">
            <h1 id="about-title" className="about__lead">
              I&rsquo;m Abhijith M, a web developer with 3 years of professional experience
              building production websites and applications with Next.js, React, PHP and
              WordPress.
            </h1>
            <p>
              I currently build and maintain a live employee and office management web
              application at Pensare Marketing. Before that I created custom WordPress themes,
              plugins and client websites, and worked on Flutter apps and Shopify storefronts.
            </p>
            <p>
              I&rsquo;m comfortable owning a project end to end, with a focus on clean UI,
              responsive design, performance and practical business solutions.
            </p>
            <div className="about__actions">
              <a href="#projects" className="btn btn--dark">
                Explore My Work <ArrowDownRight size={18} aria-hidden="true" />
              </a>
              <a href="#contact" className="btn btn--ghost">
                Let&rsquo;s Talk <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="about__strengths reveal">
            <h3 className="about__strengths-title">What I bring</h3>
            <ol className="strengths">
              {strengths.map((item, i) => (
                <li key={item} className="strengths__item">
                  <span className="strengths__num">{String(i + 1).padStart(2, '0')}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
