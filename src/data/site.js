// Site-wide content and settings. Values from .env override the defaults.
const email = import.meta.env.VITE_CONTACT_EMAIL || 'abhijithm730@gmail.com';

export const site = {
  name: 'Abhijith M',
  role: 'Web Developer',
  location: 'Malappuram, Kerala',
  email,
  // Shown in the contact section. Set VITE_CONTACT_PHONE= (empty) to hide it.
  phone: import.meta.env.VITE_CONTACT_PHONE ?? '8139839416',
  // The contact form posts here. By default it uses FormSubmit, which emails each
  // message to `email`. Set VITE_FORM_ENDPOINT= (empty) to use the mailto fallback.
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT ?? `https://formsubmit.co/ajax/${email}`,
  github: 'https://github.com/abhijith-dot99',
  linkedin: 'https://www.linkedin.com/in/abhijithm99/',
  codepen: 'https://codepen.io/Abhi-Jithm',
  portrait: '/images/abhijith-portrait.jpg',
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const strengths = [
  'Responsive website development',
  'Custom WordPress themes and plugins',
  'E-commerce with WordPress and Shopify',
  'Frontend development with Next.js and React',
  'Production web applications',
  'Problem-solving and debugging',
];

export const expertise = [
  {
    title: 'WordPress Development',
    text: 'Custom themes and plugins built from scratch, PSD-to-WordPress conversions, Elementor and Beaver Builder sites, and ongoing maintenance.',
    icon: 'layout',
  },
  {
    title: 'Frontend Development',
    text: 'Responsive interfaces using Next.js, React, Tailwind CSS, JavaScript, HTML and CSS.',
    icon: 'code',
  },
  {
    title: 'E-commerce Development',
    text: 'WordPress and Shopify storefronts, product presentation and user-friendly shopping experiences.',
    icon: 'cart',
  },
  {
    title: 'Web Applications',
    text: 'Production web applications with Next.js, PHP and Firebase, from frontend features to backend logic and data.',
    icon: 'app',
  },
  {
    title: 'Mobile App Development',
    text: 'Flutter-based mobile application development and cross-platform app experiences.',
    icon: 'phone',
  },
  {
    title: 'Website Optimization',
    text: 'Performance, responsiveness, on-page SEO with Yoast, site hardening, debugging and usability improvements.',
    icon: 'gauge',
  },
];

export const technologies = [
  'Next.js',
  'React',
  'JavaScript',
  'PHP',
  'Tailwind CSS',
  'HTML5',
  'CSS3',
  'WordPress',
  'Elementor',
  'Beaver Builder',
  'Shopify',
  'Yoast SEO',
  'Flutter',
  'Firebase',
  'Python',
  'Figma',
  'Git',
];

// Work history from the CV. Newest first.
export const experience = [
  {
    role: 'Web Developer',
    company: 'Pensare Marketing',
    period: '08/2025 – Present',
    location: 'Kozhikode, Kerala',
    points: [
      'Developed and maintain a production employee and office management web application used within the company.',
      'Built it with Next.js, React, Tailwind CSS, PHP and Firebase, working across the frontend, backend logic and database.',
      'Take features from development to production, based on requirements from internal stakeholders.',
      'Keep the application fast, responsive, reliable and easy to use.',
    ],
    tags: ['Next.js', 'React', 'Tailwind CSS', 'PHP', 'Firebase'],
  },
  {
    role: 'WordPress Developer',
    company: 'Veinbit Software Solutions',
    period: '05/2024 – 06/2025',
    location: 'Remote',
    points: [
      'Built custom WordPress themes and plugins from scratch, including full PSD-to-WordPress conversions.',
      'Delivered responsive, SEO-optimised client websites with Elementor and Beaver Builder, using Yoast for on-page SEO.',
      'Customised WordPress with PHP, HTML, CSS and JavaScript, and maintained sites based on client feedback.',
    ],
    tags: ['WordPress', 'PHP', 'Elementor', 'Beaver Builder', 'Yoast SEO'],
  },
  {
    role: 'Software Engineer',
    company: 'Auki Innovations Pvt. Ltd.',
    period: '07/2023 – 05/2024',
    location: 'Kakkanad, Kochi',
    points: [
      'Developed responsive, cross-platform features with Flutter and standard web technologies.',
      'Deployed and customised WordPress and Shopify storefronts for production use.',
      'Debugged, tested, optimised and delivered web and mobile application features.',
    ],
    tags: ['Flutter', 'WordPress', 'Shopify'],
  },
];

export const education = [
  {
    title: 'B.Tech, Computer Science and Engineering',
    school: 'College of Engineering, Munnar',
    period: '2020 – 2023',
  },
  {
    title: 'Diploma, Computer Engineering',
    school: 'SSM Polytechnic College, Tirur',
    period: '2017 – 2020',
  },
];

