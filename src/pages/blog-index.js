const { icon, links, config, picture } = require('../lib');
const C = require('../components');

const crumbs = [{ name: 'Blog', path: '/blog/' }];

const articles = [
  {
    title: 'Solar Panel Installation in Ayodhya: Complete Homeowner Guide',
    href: '/blog/solar-panel-installation-ayodhya-homeowner-guide/',
    tag: 'Homeowner Guide',
    readTime: '8 min read',
    desc: 'Everything an Ayodhya homeowner needs to know: from calculating electricity units to applying for PM Surya Ghar and setting up DISCOM net metering.',
    img: 'home',
  },
  {
    title: 'Solar Panel Price in Ayodhya: What Actually Determines the Cost?',
    href: '/blog/solar-panel-price-ayodhya-cost-factors/',
    tag: 'Pricing & Budget',
    readTime: '7 min read',
    desc: 'A transparent look at hardware components, structural steel, net metering fees, and how government subsidies reduce your net out-of-pocket expense.',
    img: 'structure',
  },
  {
    title: 'PM Surya Ghar Subsidy in Ayodhya: Eligibility and Application Guide',
    href: '/blog/pm-surya-ghar-subsidy-ayodhya-guide/',
    tag: 'Government Subsidy',
    readTime: '8 min read',
    desc: 'How Ayodhya and Faizabad homeowners can claim up to ₹1.08 lakh in combined central and Uttar Pradesh subsidies under PM Surya Ghar Muft Bijli Yojana.',
    img: 'hero',
  },
  {
    title: 'How Many Solar Panels Does a 2BHK or 3BHK Home Need?',
    href: '/blog/solar-panels-2bhk-3bhk-home-requirement/',
    tag: 'System Sizing',
    readTime: '7 min read',
    desc: 'Calculate how many panels are required based on modern 540W–590W modules, family electricity consumption, and available shadow-free roof area.',
    img: 'home',
  },
  {
    title: '3kW Solar System for Home: Is It Right for You?',
    href: '/blog/3kw-solar-system-for-home-ayodhya/',
    tag: 'Most Popular Size',
    readTime: '6 min read',
    desc: 'Why 3kW is the sweet spot for most family homes in Ayodhya: generation numbers, costs, roof space, and unlocking the maximum ₹1.08L combined subsidy.',
    img: 'hero',
  },
  {
    title: '5kW Solar System for Home: Who Should Consider It?',
    href: '/blog/5kw-solar-system-for-home-ayodhya/',
    tag: 'Higher Capacity',
    readTime: '6 min read',
    desc: 'Detailed guide for 3BHK/4BHK homes running multiple ACs and high domestic loads: unit generation, roof area, and subsidy economics.',
    img: 'home',
  },
  {
    title: 'On-Grid vs Hybrid Solar: Which Is Better for Your Home?',
    href: '/blog/on-grid-vs-hybrid-solar-system/',
    tag: 'Technology Comparison',
    readTime: '7 min read',
    desc: 'Compare grid-tied net metering with hybrid battery systems: power cut behavior (anti-islanding), costs, subsidy eligibility, and payback periods.',
    img: 'inverter',
  },
  {
    title: 'How Much Roof Space Is Required for Rooftop Solar?',
    href: '/blog/roof-space-required-rooftop-solar/',
    tag: 'Terrace Assessment',
    readTime: '6 min read',
    desc: 'Official UPNEDA benchmarks, shadow mapping around mumty and water tanks, and how elevated gazebo structures keep 100% of your terrace usable.',
    img: 'structure',
  },
  {
    title: 'Net Metering Explained for Homeowners in Ayodhya',
    href: '/blog/net-metering-explained-ayodhya/',
    tag: 'Utility & Grid Policy',
    readTime: '7 min read',
    desc: 'How bi-directional net meters work in Uttar Pradesh: step-by-step billing calculations, surplus unit rollovers, and MVVNL application steps.',
    img: 'inverter',
  },
  {
    title: 'Common Mistakes to Avoid Before Installing Solar in Ayodhya',
    href: '/blog/common-mistakes-before-installing-solar/',
    tag: 'Buyer Protection',
    readTime: '7 min read',
    desc: 'Avoid costly errors: mismatched sanctioned loads, weak mounting steel, non-DCR panels that forfeit subsidies, and improper earthing.',
    img: 'structure',
  },
  {
    title: 'How Solar Panels Work in Indian Homes: Complete Technical Guide',
    href: '/blog/how-solar-panels-work-indian-homes/',
    tag: 'Engineering Explainer',
    readTime: '7 min read',
    desc: 'A plain-language guide to semiconductor physics, DC to AC inversion, grid synchronization, and seasonal weather performance in North India.',
    img: 'structure',
  },
  {
    title: 'Solar Maintenance: How to Keep Your Panels Performing Well',
    href: '/blog/solar-panel-maintenance-cleaning-guide/',
    tag: 'Preventative Care',
    readTime: '6 min read',
    desc: 'Safe washing protocols to avoid thermal shock, seasonal dust cleaning frequencies in Ayodhya, and essential electrical checks.',
    img: 'cleaning',
  },
];

const body = [
  C.pageHero({
    crumbs,
    eyebrow: 'Knowledge Hub',
    h1: 'Solar Guides & Knowledge Base for Ayodhya',
    lead: 'Authoritative, practical articles and engineering guides written specifically for homeowners and businesses evaluating rooftop solar in Ayodhya and Faizabad.',
    image: 'hero',
    imageAlt: 'Rooftop solar installation in Ayodhya knowledge hub',
    points: ['12 comprehensive guides', 'Local Ayodhya weather & DISCOM rules', 'Verified subsidy & net-metering information'],
  }),
  `<section class="section" id="article-list" aria-labelledby="hub-title"><div class="container">
${C.sectionHead({
  eyebrow: 'All Solar Guides',
  title: 'Practical Guides for Solar Buyers in Ayodhya',
  id: 'hub-title',
  lead: 'Browse our articles on system sizing, hardware technology, government schemes, and financial calculations.',
})}
<div class="blog-grid">
${articles
  .map(
    (a) => `<article class="blog-card shell">
<div class="core">
<div class="blog-card__media">${picture(a.img, { sizes: '(min-width: 1024px) 380px, 100vw' })}</div>
<div class="blog-card__body">
<div class="blog-card__meta"><span class="tag-pill">${a.tag}</span><span class="blog-card__read">${a.readTime}</span></div>
<h3><a href="${a.href}">${a.title}</a></h3>
<p>${a.desc}</p>
<a class="link-arrow" href="${a.href}">Read article${icon('arrow')}</a>
</div>
</div>
</article>`
  )
  .join('')}
</div>
</div></section>`,
  C.ctaBand({
    title: 'Have a Specific Solar Question?',
    text: 'Speak directly with our local engineering desk at Naka Bypass. We are happy to help with bill sizing or subsidy queries.',
    quoteHref: '/contact/#quote',
  }),
  C.relatedLinks([
    ['Solar panel installation in Ayodhya', '/solar-panel-installation-ayodhya/', 'Full local installation service', 'pin'],
    ['Solar panels for home', '/solar-panels-for-home/', 'Home system sizing and component guide', 'home'],
    ['PM Surya Ghar subsidy', '/solar-subsidy-ayodhya/', 'Official subsidy eligibility, rules and application steps', 'doc'],
    ['Solar panel price guide', '/solar-panel-price-ayodhya/', 'Transparent pricing breakdown for Ayodhya', 'rupee'],
    ['Contact our team', '/contact/', 'Reach out on WhatsApp or phone for direct assistance', 'phone'],
  ]),
].join('\n');

module.exports = {
  path: '/blog/',
  title: 'Solar Guides & Blog for Ayodhya | Solar Rooftop Knowledge Hub',
  description:
    'Solar guides, PM Surya Ghar subsidy advice, pricing breakdowns, and technical articles for homeowners and businesses in Ayodhya and Faizabad.',
  hasForm: false,
  breadcrumbs: crumbs,
  sitemap: { priority: '0.8', changefreq: 'weekly' },
  body,
};
