import { useState } from 'react';
import ProjectCard from './ProjectCard.jsx';
import { filters, projects } from '../data/projects.js';
import '../styles/projects.css';

// Featured project first, then the rest in their original order.
const companyProjects = projects
  .filter((p) => p.type === 'company')
  .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
const personalProjects = projects.filter((p) => p.type === 'personal');

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const showCompany = filter === 'all' || filter === 'company';
  const showPersonal = filter === 'all' || filter === 'personal';
  const count = (id) =>
    id === 'all' ? projects.length : projects.filter((p) => p.type === id).length;

  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="projects__head">
          <div className="section-head reveal">
            <p className="eyebrow">
              <span className="eyebrow__line" aria-hidden="true" />
              Selected work
            </p>
            <h2 id="projects-title" className="section-title">
              Websites built for <em>real businesses.</em>
            </h2>
            <p className="section-lead">
              A selection of business websites I&rsquo;ve worked on as part of a development
              team, covering different industries, design approaches and website experiences.
            </p>
          </div>

          <div className="filters reveal" role="group" aria-label="Filter projects">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                className={`filter ${filter === f.id ? 'is-active' : ''}`}
                aria-pressed={filter === f.id}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
                <span className="filter__count">{count(f.id)}</span>
              </button>
            ))}
          </div>
        </div>

        <p className="visually-hidden" aria-live="polite">
          Showing {count(filter)} projects
        </p>

        {showCompany && (
          <div key={`company-${filter}`} className="project-group fade-in">
            <div className="project-grid project-grid--company">
              {companyProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} featured={project.featured} />
              ))}
            </div>
          </div>
        )}

        {showPersonal && (
          <div
            key={`personal-${filter}`}
            id="personal"
            className={`project-group project-group--personal fade-in ${showCompany ? '' : 'is-alone'}`}
          >
            <div className="section-head section-head--split reveal">
              <div>
                <p className="eyebrow">
                  <span className="eyebrow__line" aria-hidden="true" />
                  Built by me
                </p>
                <h2 className="section-title section-title--sm">
                  Experiments, ideas &amp; <em>personal builds.</em>
                </h2>
              </div>
              <p className="section-lead">
                Independent projects I designed and built on my own, separate from client work.
              </p>
            </div>
            <div className="project-grid project-grid--personal">
              {personalProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
