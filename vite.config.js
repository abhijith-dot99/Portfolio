import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Production builds are served from https://abhijith-dot99.github.io/Portfolio/,
// so assets need the /Portfolio/ prefix. Set BASE_PATH=/ when deploying to a
// custom domain or the root of a host. The dev server always runs at /;
// `npm run preview` serves the build at /Portfolio/, like GitHub Pages.
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? (process.env.BASE_PATH ?? '/Portfolio/') : '/',
  plugins: [react()],
}));
