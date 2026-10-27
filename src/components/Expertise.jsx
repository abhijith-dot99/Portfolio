import { AppWindow, Code2, Gauge, LayoutTemplate, ShoppingBag, Smartphone } from 'lucide-react';
import { expertise, technologies } from '../data/site.js';
import '../styles/expertise.css';

const icons = {
  layout: LayoutTemplate,
  code: Code2,
  cart: ShoppingBag,
  app: AppWindow,
  phone: Smartphone,
  gauge: Gauge,
};

export default function Expertise() {
  return (
    <section id="expertise" className="section expertise" aria-labelledby="expertise-title">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">
            <span className="eyebrow__line" aria-hidden="true" />
            Expertise
          </p>
          <h2 id="expertise-title" className="section-title">
            What I can <em>build</em> for you.
          </h2>
        </div>

        <ul className="services">
          {expertise.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <li key={item.title} className="service reveal" style={{ '--delay': `${(i % 3) * 70}ms` }}>
                <span className="service__num">{String(i + 1).padStart(2, '0')}</span>
                <Icon className="service__icon" size={26} strokeWidth={1.5} aria-hidden="true" />
                <h3 className="service__title">{item.title}</h3>
                <p className="service__text">{item.text}</p>
              </li>
            );
          })}
        </ul>

        <div className="tech reveal">
          <h3 className="tech__title">Tools I work with</h3>
          <ul className="tech__list">
            {technologies.map((tech) => (
              <li key={tech} className="tag">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
