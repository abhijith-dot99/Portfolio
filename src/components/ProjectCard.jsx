import { ArrowUpRight, Github, Lock } from 'lucide-react';
import SafeImage from './SafeImage.jsx';

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };

export default function ProjectCard({ project, index, featured = false }) {
  const { name, category, description, tech, image, imageAlt, links, type, note } = project;
  const primary = links[0];
  const host = primary ? new URL(primary.href).hostname.replace(/^www\./, '') : '';

  const preview = (
    <SafeImage
      src={image}
      alt={imageAlt}
      className="project-card__img"
      fallbackLabel={`${name} preview coming soon`}
    />
  );

  return (
    <article
      className={`project-card project-card--${type} ${featured ? 'project-card--featured' : ''} reveal`}
      style={{ '--delay': `${(index % 2) * 80}ms` }}
    >
      {primary ? (
        <a
          href={primary.href}
          className="project-card__media"
          aria-label={`${primary.label}: ${name} (opens in a new tab)`}
          {...linkProps}
        >
          {preview}
          <span className="project-card__overlay" aria-hidden="true">
            <span className="project-card__overlay-btn">
              {primary.label} <ArrowUpRight size={16} />
            </span>
          </span>
        </a>
      ) : (
        <div className="project-card__media">{preview}</div>
      )}

      <div className="project-card__body">
        <div className="project-card__meta">
          <span className={`badge badge--${type}`}>
            {type === 'company' ? 'Company project' : 'Personal build'}
          </span>
          <span className="project-card__category">{category}</span>
        </div>

        <h3 className="project-card__title">{name}</h3>
        <p className="project-card__desc">{description}</p>

        {tech.length > 0 && (
          <ul className="project-card__tech" aria-label="Technologies">
            {tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}

        <div className="project-card__links">
          {links.map((link) => {
            const isGithub = link.href.includes('github.com');
            return (
              <a key={link.href} href={link.href} className="text-link" {...linkProps}>
                {isGithub && <Github size={16} aria-hidden="true" />}
                {link.label}
                <ArrowUpRight size={16} aria-hidden="true" />
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            );
          })}
          {note && (
            <span className="project-card__note">
              <Lock size={14} aria-hidden="true" />
              {note}
            </span>
          )}
          {type === 'company' && host && <span className="project-card__host">{host}</span>}
        </div>
      </div>
    </article>
  );
}
