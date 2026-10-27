# Abhijith M — Portfolio

A React + Vite portfolio site. It uses plain CSS, has one runtime dependency besides React (`lucide-react` for icons), and needs no backend.

## Run it locally

Requirements: Node.js 18 or newer.

```bash
npm install
npm run dev        # start the dev server at http://localhost:5173
npm run build      # build for production into dist/
npm run preview    # serve the production build at http://localhost:4173/Portfolio/
```

## Deployment (GitHub Pages)

The site is published at **https://abhijith-dot99.github.io/Portfolio/**.

- **Automatic deploys:** every push to `main` runs [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the site and publishes `dist/` to GitHub Pages.
- **One-time setup:** in the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
- **Base path:** production builds use `/Portfolio/`, set in `vite.config.js`, because GitHub Pages serves the site from that subfolder. If you move to a custom domain or another host's root, build with `BASE_PATH=/`, and update `og:url` and `og:image` in `index.html`.

## Configuration

Copy `.env.example` to `.env`, edit the values, then restart `npm run dev`.

| Variable | Purpose |
| --- | --- |
| `VITE_CONTACT_EMAIL` | The email address shown in the contact section. Defaults to `abhijithm730@gmail.com`, the address linked from mysiteport.free.nf. |
| `VITE_CONTACT_PHONE` | The phone number in the contact section (10 digits; +91 is added). Defaults to the number on the CV. Set it to an empty value to hide it. |
| `VITE_FORM_ENDPOINT` | Where the contact form sends messages. If it isn't set, the form uses FormSubmit's free endpoint for the contact email (`https://formsubmit.co/ajax/abhijithm730@gmail.com`), so messages arrive in that inbox. You can use any URL that accepts a JSON POST instead, such as a Formspree form URL. If it's set to an empty value, the form opens the visitor's email app with the message filled in. The form only says a message was sent after the service confirms it. |

**Activate FormSubmit once:** the first message sent through the form doesn't arrive. FormSubmit sends an activation email to abhijithm730@gmail.com instead. Click the link in that email, and later messages are delivered normally. Until then, visitors see an error that asks them to email you directly.

The other links (GitHub, LinkedIn and CodePen) are in `src/data/site.js`. That file also holds the work history, education, skills and the portrait path, all taken from the August 2026 CV. Edit `experience` and `education` there to update the Experience section.

The portrait is `public/images/abhijith-portrait.jpg`. It appears in the About section and as a small avatar in the hero. To change it, replace the file and keep the same name.

## Project structure

```
public/
  favicon.svg               editable favicon
  images/                   project previews and the Open Graph image
src/
  components/               Header, About (the opening section), Experience, Expertise, Projects, ProjectCard,
                            Contact, Footer, SafeImage
  data/projects.js          every project card (company and personal)
  data/site.js              contact links, navigation, experience, expertise, tech list
  hooks/                    scroll-reveal and active-section helpers
  styles/                   one stylesheet per section, plus global.css (design tokens)
```

## Adding a project or changing its preview image

1. Put the image in `public/images/`. A 16:10 landscape screenshot works best; 1440×900 is ideal.
2. Add or edit an entry in `src/data/projects.js`:

```js
{
  id: 'my-new-site',
  type: 'company',            // 'company' or 'personal'
  name: 'My New Site',
  category: 'Business Website',
  description: 'One or two sentences about the project.',
  tech: ['WordPress'],        // only technologies you have confirmed
  image: '/images/my-new-site.jpg',
  imageAlt: 'Describe what the screenshot shows',
  links: [{ label: 'Visit Website', href: 'https://example.com' }],
  // featured: true,          // optional: shows this project first, full width
}
```

To change a preview, replace the file in `public/images/` and keep the same name, or update `image`. If an image fails to load, the card shows a neutral placeholder instead of a broken image.

## Where the images came from

| File | Source |
| --- | --- |
| `aavsmperfume.jpg`, `bunboyindia.jpg`, `skygateaviation.jpg`, `qasrgharnata.jpg`, `goandgotours.jpg` | Homepage screenshots of each live site, captured at 1440×900 on 27 Oct 2026 |
| `bmhaesthetics.jpg`, `nexisautomations.jpg` | Homepage screenshots of each live site, captured at 1440×900 on 27 Oct 2026 |
| `office-management-app.jpg` | The dashboard of the Pensare office management app, from screenshots you supplied. Client names, employee names and task details are blurred, because the app holds internal company data. |
| `sharelink-preview.jpg` | Downloaded from the supplied URL (`mysiteport.free.nf/.../sharelink3.jpg`) and served locally, because the free host's bot check can block hotlinked images |
| `walleei-preview.png` | Built from the three real Walleei app screenshots on mysiteport.free.nf (sign-up, wallpaper grid and download screens). The GitHub repository contains only icons, no screenshots. |
| `og-image.jpg` | A simple generated text card for social sharing |

## Things to supply or check manually

- **Go And Go Tours screenshot:** the site's hero is a background video, and the automated capture recorded it as a plain green panel. Replace `public/images/goandgotours.jpg` with a screenshot taken in a normal browser.
- **Qasr Gharnata technologies:** the platform couldn't be detected, so the card lists no technologies. Add them in `src/data/projects.js` if you know them.
- **ShareLink technologies:** none are listed, because they weren't verified. Add them if you like.
- **Ceori Skincare:** the CV lists this project, but its web address hasn't been supplied, so it isn't in the gallery yet. Add it to `src/data/projects.js` with a screenshot.
- **BMH Aesthetics technologies:** the CV mentions Beaver Builder, WP Forms and Yoast, but the live site now runs on Elementor, so the card lists WordPress and Elementor. Adjust if needed.
- **Office management app:** check with Pensare Marketing that you may show the app publicly. The preview hides client and employee details.
- **Downloadable CV:** there's no "Download CV" button yet. Put the PDF in `public/` and link to it if you want one.
- **Favicon:** `public/favicon.svg` is a placeholder monogram. Replace it with your own if you prefer.
- **Company project wording:** the company cards are labelled "Company project" and introduced as work done "as part of a development team". Adjust the wording if your role was different.
