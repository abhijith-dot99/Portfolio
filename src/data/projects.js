/**
 * Project data.
 *
 * type:  'company'  → professional / client work done as part of a team
 *        'personal' → independent projects built by Abhijith
 * image: path inside /public (e.g. '/images/name.jpg') or a full URL.
 *        Replace the file in public/images to update a preview.
 * links: each entry renders as a button. The first link is also used
 *        when someone clicks the preview image. Can be empty.
 * note:  optional; shown instead of the links (e.g. for internal tools).
 * tech:  only list technologies that have been verified.
 * featured: optional; the featured company project is shown first, full width.
 */
export const projects = [
  {
    id: 'office-management-app',
    type: 'company',
    name: 'Office Management App',
    category: 'Internal Web App · Pensare Marketing',
    description:
      'A live employee and office management application used daily at Pensare Marketing. It covers a monthly task calendar across the team, client plans and task tracking with approval status, promotion budgets, and user, role and client management.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'PHP', 'Firebase'],
    image: '/images/office-management-app.jpg',
    imageAlt: 'Dashboard of the office management app with task counters and a monthly task calendar; client and employee details are blurred',
    links: [],
    note: 'Internal tool, not publicly accessible',
  },
  {
    id: 'bmh-aesthetics',
    type: 'company',
    name: 'BMH Aesthetics',
    category: 'Healthcare and Aesthetics',
    description:
      'A website for an aesthetic clinic in Calicut, presenting facial, body and non-surgical treatments, the doctors and appointment enquiries.',
    tech: ['WordPress', 'Elementor'],
    image: '/images/bmhaesthetics.jpg',
    imageAlt: 'BMH Aesthetic Center homepage with the headline “Enhance Your Beauty with Expert Aesthetic Clinic Calicut”',
    links: [{ label: 'Visit Website', href: 'https://bmhaesthetics.com/' }],
  },
  {
    id: 'nexis-automations',
    type: 'company',
    name: 'Nexis Automations',
    category: 'Security and Home Automation',
    description:
      'A website for a Kerala security and automation company, presenting its camera, biometric access and automatic gate services.',
    tech: ['WordPress', 'Elementor'],
    image: '/images/nexisautomations.jpg',
    imageAlt: 'Nexis Automations homepage with the headline “A Decade Of Security You Can Trust” over a modern house at dusk',
    links: [{ label: 'Visit Website', href: 'https://nexisautomations.in/' }],
  },
  {
    id: 'go-and-go-tours',
    type: 'company',
    name: 'Go And Go Tours',
    category: 'Travel and Tourism',
    description:
      'A travel and tour website showcasing tourism services and travel experiences in Kerala, built with Elementor and hardened with Wordfence security.',
    tech: ['WordPress', 'Elementor', 'Wordfence'],
    image: '/images/goandgotours.jpg',
    imageAlt: 'Homepage of the Go And Go Tours website with its navigation and hero section',
    links: [{ label: 'Visit Website', href: 'https://goandgotours.com' }],
  },
  {
    id: 'bun-boy-india',
    type: 'company',
    name: 'Bun Boy India',
    category: 'Food and Hospitality',
    description:
      'A restaurant and food brand website built from the ground up, presenting the brand and its offerings.',
    tech: ['WordPress', 'Elementor', 'PHP', 'JavaScript'],
    image: '/images/bunboyindia.jpg',
    imageAlt: 'Bun Boy India homepage with a large chocolate-filled bun and orange brand lettering',
    links: [{ label: 'Visit Website', href: 'http://bunboyindia.com' }],
  },
  {
    id: 'skygate-aviation',
    type: 'company',
    name: 'Skygate Aviation',
    category: 'Aviation',
    description: 'A business website for an aviation training institute.',
    tech: ['WordPress', 'Elementor'],
    image: '/images/skygateaviation.jpg',
    imageAlt: 'Skygate Aviation homepage with the headline “Takeoff to the Future” and a group of students',
    links: [{ label: 'Visit Website', href: 'https://skygateaviation.in' }],
  },
  {
    id: 'aavsm-perfume',
    type: 'company',
    featured: true,
    name: 'AAVSM Perfume',
    category: 'Fragrance and E-commerce',
    description:
      'A fragrance-focused online store presenting perfume products and the brand identity.',
    tech: ['Shopify'],
    image: '/images/aavsmperfume.jpg',
    imageAlt: 'AAVSM Perfume online store homepage showing perfume bottles on stone pedestals',
    links: [{ label: 'Visit Website', href: 'https://aavsmperfume.com' }],
  },
  {
    id: 'qasr-gharnata',
    type: 'company',
    name: 'Qasr Gharnata',
    category: 'Business Website',
    description:
      'A business website showcasing the brand, its services and its online presence.',
    tech: [],
    image: '/images/qasrgharnata.jpg',
    imageAlt: 'Qasr Gharnata website showing the “Our Restaurant” section with an interior photo',
    links: [{ label: 'Visit Website', href: 'https://qasrgharnata.com' }],
  },
  {
    id: 'sharelink',
    type: 'personal',
    name: 'ShareLink',
    category: 'Web App',
    description:
      'A personal web project focused on sharing links through a dedicated web experience: users add their profile links and share them from one page.',
    tech: [],
    image: '/images/sharelink-preview.jpg',
    imageAlt: 'ShareLink editor with a phone preview on the left and a “Customize your links” form on the right',
    links: [{ label: 'Live Demo', href: 'https://share-link-smoky.vercel.app/' }],
  },
  {
    id: 'walleei',
    type: 'personal',
    name: 'Walleei',
    category: 'Mobile App',
    description:
      'A Flutter wallpaper app with sign-in, a browsable wallpaper grid and a download button that saves wallpapers to the device. State is managed with Provider.',
    tech: ['Flutter', 'Dart', 'Provider', 'Dio'],
    image: '/images/walleei-preview.png',
    imageAlt: 'Three Walleei app screens: the sign-up screen, the wallpaper grid and a wallpaper preview with a Download button',
    links: [
      { label: 'View on GitHub', href: 'https://github.com/abhijith-dot99/Walleei' },
    ],
  },
];

export const filters = [
  { id: 'all', label: 'All' },
  { id: 'company', label: 'Company Work' },
  { id: 'personal', label: 'Personal Projects' },
];
