import { useState } from 'react';
import { ImageOff } from 'lucide-react';

// Paths like '/images/x.jpg' point into /public. Prefix them with the site's base
// path so they also work when the site is served from a subfolder (GitHub Pages).
const withBase = (src) =>
  src?.startsWith('/') && !src.startsWith('//') ? import.meta.env.BASE_URL + src.slice(1) : src;

// An <img> that swaps itself for a neutral placeholder if the file fails to load,
// so a missing preview never shows as a broken image.
export default function SafeImage({ src, alt, className = '', fallbackLabel, ...rest }) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div className={`img-fallback ${className}`} role={alt ? 'img' : undefined} aria-label={alt || undefined}>
        <ImageOff size={28} aria-hidden="true" />
        {fallbackLabel && <span>{fallbackLabel}</span>}
      </div>
    );
  }

  return (
    <img
      src={withBase(src)}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}
