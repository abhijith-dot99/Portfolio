import { GraduationCap, MapPin } from 'lucide-react';
import { education, experience } from '../data/site.js';
import '../styles/experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience" aria-labelledby="experience-title">
      <div className="container">
        <div className="section-head section-head--split reveal">
          <div>
            <p className="eyebrow">
              <span className="eyebrow__line" aria-hidden="true" />
              Experience
            </p>
            <h2 id="experience-title" className="section-title">
              Three years of <em>shipping for the web.</em>
            </h2>
          </div>
          <p className="section-lead">
            From Flutter apps and Shopify storefronts to custom WordPress builds and a
            production Next.js application.
          </p>
        </div>

        <ol className="jobs">
          {experience.map((job) => (
            <li key={job.company} className="job reveal">
              <div className="job__aside">
                <p className="job__period">{job.period}</p>
                <p className="job__location">
                  <MapPin size={14} aria-hidden="true" />
                  {job.location}
                </p>
              </div>
              <div className="job__main">
                <h3 className="job__role">
                  {job.role}
                  <span className="job__company">{job.company}</span>
                </h3>
                <ul className="job__points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <ul className="job__tags" aria-label="Technologies">
                  {job.tags.map((tag) => (
                    <li key={tag} className="tag tag--sm">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className="education reveal">
          <h3 className="education__title">
            <GraduationCap size={18} aria-hidden="true" />
            Education
          </h3>
          <ul className="education__list">
            {education.map((item) => (
              <li key={item.title} className="education__item">
                <span className="education__period">{item.period}</span>
                <span className="education__name">{item.title}</span>
                <span className="education__school">{item.school}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
