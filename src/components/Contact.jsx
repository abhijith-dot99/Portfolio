import { useState } from 'react';
import { ArrowUpRight, Codepen, Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import { site } from '../data/site.js';
import '../styles/contact.css';

const empty = { name: '', email: '', subject: '', message: '' };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!emailPattern.test(values.email.trim()))
    errors.email = 'Please enter a valid email address, like name@example.com.';
  if (!values.subject.trim()) errors.subject = 'Please add a short subject.';
  if (values.message.trim().length < 10)
    errors.message = 'Please write a message of at least 10 characters.';
  return errors;
}

const channels = [
  { label: 'Email', value: site.email, href: `mailto:${site.email}`, icon: Mail },
  site.phone && {
    label: 'Phone',
    value: `+91 ${site.phone.replace(/(\d{5})(\d{5})/, '$1 $2')}`,
    href: `tel:+91${site.phone}`,
    icon: Phone,
  },
  { label: 'GitHub', value: 'abhijith-dot99', href: site.github, icon: Github, external: true },
  { label: 'LinkedIn', value: 'abhijithm99', href: site.linkedin, icon: Linkedin, external: true },
  { label: 'CodePen', value: 'Abhi-Jithm', href: site.codepen, icon: Codepen, external: true },].filter(Boolean);

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: 'idle', text: '' });

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstError = Object.keys(found)[0];
    if (firstError) {
      const input = document.getElementById(`contact-${firstError}`);
      input?.focus({ preventScroll: true });
      input?.scrollIntoView({ block: 'center' });
      setStatus({ type: 'error', text: 'Please fix the highlighted fields.' });
      return;
    }

    // No form service configured: hand the message to the visitor's email app.
    if (!site.formEndpoint) {
      const body = `${values.message}\n\n— ${values.name} (${values.email})`;
      const href = `mailto:${site.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = href;
      setStatus({
        type: 'info',
        text: 'Your email app should open with the message filled in. Press send there to deliver it.',
      });
      return;
    }

    setStatus({ type: 'sending', text: 'Sending your message…' });
    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...values,
          _subject: `Portfolio enquiry: ${values.subject}`,
          _template: 'table',
        }),
      });
      if (!res.ok) throw new Error(`Request failed with ${res.status}`);
      // FormSubmit answers 200 with success "false" (e.g. before activation).
      const data = await res.json().catch(() => ({}));
      if (String(data.success) === 'false') throw new Error(data.message);
      setValues(empty);
      setStatus({ type: 'success', text: 'Thanks! Your message has been sent. I’ll reply by email.' });
    } catch {
      setStatus({
        type: 'error',
        text: `The message could not be sent. Please email me directly at ${site.email}.`,
      });
    }
  };

  const field = (name, label, props = {}) => {
    const { as: Tag = 'input', full = false, ...rest } = props;
    const id = `contact-${name}`;
    return (
      <div className={`field ${errors[name] ? 'has-error' : ''} ${full ? 'field--full' : ''}`}>
        <label htmlFor={id} className="field__label">
          {label} <span aria-hidden="true">*</span>
        </label>
        <Tag
          id={id}
          name={name}
          value={values[name]}
          onChange={onChange}
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? `${id}-error` : undefined}
          required
          className="field__input"
          {...rest}
        />
        {errors[name] && (
          <p id={`${id}-error`} className="field__error">
            {errors[name]}
          </p>
        )}
      </div>
    );
  };

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div className="contact__intro reveal">
          <p className="eyebrow eyebrow--light">
            <span className="eyebrow__line" aria-hidden="true" />
            Contact
          </p>
          <h2 id="contact-title" className="section-title contact__title">
            Have a project in mind? <em>Let&rsquo;s build something useful.</em>
          </h2>
          <p className="contact__lead">
            Looking for a developer to build a website, improve an existing WordPress project or
            develop a web application? Let&rsquo;s discuss your requirements.
          </p>

          <ul className="channels">
            {channels.map(({ label, value, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  className="channel"
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
                  <span className="channel__label">{label}</span>
                  <span className="channel__value">{value}</span>
                  <ArrowUpRight className="channel__arrow" size={18} aria-hidden="true" />
                  {external && <span className="visually-hidden"> (opens in a new tab)</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form className="contact-form reveal" onSubmit={onSubmit} noValidate>
          <div className="contact-form__fields">
            {field('name', 'Name', { autoComplete: 'name' })}
            {field('email', 'Email', { type: 'email', autoComplete: 'email' })}
            {field('subject', 'Subject', { full: true })}
            {field('message', 'Message', { as: 'textarea', rows: 5, full: true })}
          </div>

          <div className="contact-form__footer">
            <button type="submit" className="btn btn--accent" disabled={status.type === 'sending'}>
              {site.formEndpoint ? 'Send Message' : 'Send via Email'}
              <Send size={17} aria-hidden="true" />
            </button>
            {!site.formEndpoint && (
              <p className="contact-form__note">
                This opens your email app with the message ready to send.
              </p>
            )}
          </div>

          <p
            className={`form-status form-status--${status.type}`}
            role={status.type === 'error' ? 'alert' : 'status'}
          >
            {status.text}
          </p>
        </form>
      </div>
    </section>
  );
}
