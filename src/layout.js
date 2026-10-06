/**
 * Page shell: <head>, metadata, JSON-LD graph, header, footer, mobile bar.
 */
const { esc, abs, links, icon, sprite, config } = require('./lib');

const b = config.business;

const NAV = [
  { label: 'Home', href: '/', mobileOnly: true },
  {
    label: 'Solar Solutions',
    children: [
      { label: 'Solar Installation in Ayodhya', href: '/solar-panel-installation-ayodhya/', note: 'Complete installation service' },
      { label: 'Solar Installation in Faizabad', href: '/solar-panel-installation-faizabad/', note: 'Faizabad city & surroundings' },
      { label: 'Solar for Home', href: '/solar-panels-for-home/', note: '1 kW to 10 kW residential systems' },
      { label: 'Rooftop Solar', href: '/rooftop-solar-installation/', note: 'Mounting, inverters & net metering' },
      { label: 'Commercial Solar', href: '/commercial-solar-installation/', note: 'Shops, offices, clinics, schools' },
      { label: 'Solar Maintenance', href: '/solar-panel-maintenance/', note: 'Cleaning, inspection, repairs' },
      { label: 'Solar Panel Price', href: '/solar-panel-price-ayodhya/', note: 'What decides the cost' },
    ],
  },
  { label: 'Solar for Home', href: '/solar-panels-for-home/' },
  { label: 'Solar Subsidy', href: '/solar-subsidy-ayodhya/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

const brand = () => `<a class="brand" href="/" aria-label="${esc(config.siteName)} — home">
<svg class="brand__mark" viewBox="0 0 40 40" aria-hidden="true"><rect width="40" height="40" rx="10" fill="#121417"/><circle cx="20" cy="16.5" r="6.4" fill="#F2B705"/><path d="M7.5 32l4.6-8h15.8l4.6 8z" fill="#FAFAF7"/><path d="M20 24v8M10 28h20" stroke="#121417" stroke-width="1.3"/></svg>
<span class="brand__text"><span class="brand__name">Ayodhya Solar</span><span class="brand__sub">Installation</span></span>
</a>`;

function header(page) {
  const isActive = (href) => href === page.path;
  const groupActive = (item) => item.children && item.children.some((c) => c.href === page.path);
  const items = NAV.map((item, i) => {
    if (item.children) {
      const isGroupOpen = groupActive(item);
      return `<li class="nav__item nav__item--group${isGroupOpen ? ' is-active is-open' : ''}">
<button class="nav__link nav__toggle" type="button" aria-expanded="${isGroupOpen ? 'true' : 'false'}" aria-controls="nav-group-${i}">${item.label}${icon('chevron', 'nav__chev')}</button>
<ul class="nav__sub" id="nav-group-${i}">${item.children
        .map(
          (c) =>
            `<li><a href="${c.href}"${isActive(c.href) ? ' aria-current="page"' : ''}><span>${c.label}</span><small>${c.note}</small></a></li>`
        )
        .join('')}</ul></li>`;
    }
    const cls = item.mobileOnly ? 'nav__item nav__item--mobile-only' : 'nav__item';
    return `<li class="${cls}"><a class="nav__link" href="${item.href}"${isActive(item.href) ? ' aria-current="page"' : ''}>${item.label}</a></li>`;
  }).join('');

  return `<a class="skip" href="#main">Skip to content</a>
<header class="site-header" id="top">
<div class="container site-header__inner">
${brand()}
<nav class="nav" id="site-nav" aria-label="Main">
<ul class="nav__list">${items}<li class="nav__item nav__item--mobile-only"><a class="nav__link" href="/blog/"${page.path.startsWith('/blog/') ? ' aria-current="page"' : ''}>Solar Guides &amp; Blog</a></li></ul>
<div class="nav__mobile-cta">
<a class="btn btn--primary btn--block" href="${page.quoteHref}">Get Free Solar Quote</a>
<div class="nav__mobile-row"><a class="btn btn--wa" href="${links.wa}" target="_blank" rel="noopener">${icon('whatsapp')}WhatsApp</a><a class="btn btn--outline" href="${links.tel}">${icon('phone')}Call</a></div>
<p class="nav__mobile-addr">${icon('pin')}${esc(b.address.display)}</p>
</div>
</nav>
<div class="site-header__actions">
<a class="header-phone" href="${links.tel}">${icon('phone')}<span>${b.phoneDisplay}</span></a>
<a class="btn btn--primary btn--sm header-cta" href="${page.quoteHref}">Get Free Quote</a>
<button class="icon-btn menu-btn" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open menu"><span class="menu-btn__bars" aria-hidden="true"><span></span><span></span><span></span></span></button>
</div>
</div>
</header>`;
}

function footer(page) {
  const col = (title, list) =>
    `<div class="footer__col"><h2 class="footer__title">${title}</h2><ul>${list
      .map(([l, h]) => `<li><a href="${h}">${l}</a></li>`)
      .join('')}</ul></div>`;
  return `<footer class="site-footer">
<div class="container">
<div class="footer__top">
<div class="footer__brand">
${brand()}
<p>Rooftop solar consultation, installation and maintenance for homes and businesses in Ayodhya and Faizabad, Uttar Pradesh.</p>
<div class="footer__cta"><a class="btn btn--primary btn--sm" href="${page.quoteHref}">Get Free Solar Quote</a><a class="btn btn--ghost btn--sm" href="${links.wa}" target="_blank" rel="noopener">${icon('whatsapp')}WhatsApp Us</a></div>
</div>
${col('Solar Solutions', [
  ['Solar Installation in Ayodhya', '/solar-panel-installation-ayodhya/'],
  ['Residential Solar', '/solar-panels-for-home/'],
  ['Rooftop Solar', '/rooftop-solar-installation/'],
  ['Commercial Solar', '/commercial-solar-installation/'],
  ['Solar Maintenance', '/solar-panel-maintenance/'],
  ['Solar in Faizabad', '/solar-panel-installation-faizabad/'],
])}
${col('Explore', [
  ['Solar Subsidy', '/solar-subsidy-ayodhya/'],
  ['Solar Price', '/solar-panel-price-ayodhya/'],
  ['Projects', '/projects/'],
  ['Blog', '/blog/'],
  ['About', '/about/'],
  ['Contact', '/contact/'],
])}
<div class="footer__col footer__contact"><h2 class="footer__title">Contact</h2>
<ul>
<li><a href="${links.tel}">${icon('phone')}${b.phoneDisplay}</a></li>
<li><a href="${links.wa}" target="_blank" rel="noopener">${icon('whatsapp')}WhatsApp ${b.phoneDisplay}</a></li>
<li><a href="${links.mail}">${icon('mail')}${b.email}</a></li>
<li><a href="${links.maps}" target="_blank" rel="noopener">${icon('pin')}${esc(b.address.display)}</a></li>
</ul></div>
</div>
<div class="footer__note">
<p>${esc(config.siteName)} is a private solar installation service. We are not a government body. Subsidy information on this site is a summary for guidance — always confirm current rules on the official <a href="${config.officialLinks.pmSuryaGhar}" target="_blank" rel="noopener">PM Surya Ghar portal</a>, <a href="${config.officialLinks.mnre}" target="_blank" rel="noopener">MNRE</a> and <a href="${config.officialLinks.upneda}" target="_blank" rel="noopener">UPNEDA</a>.</p>
</div>
<div class="footer__bottom">
<p>© 2026 ${esc(config.siteName)}. All rights reserved.</p>
<ul class="footer__legal"><li><a href="/privacy-policy/">Privacy Policy</a></li><li><a href="/terms/">Terms</a></li><li><a href="/disclaimer/">Disclaimer</a></li></ul>
</div>
</div>
</footer>
<nav class="mobile-bar" aria-label="Quick contact">
<a href="${links.tel}">${icon('phone')}<span>Call</span></a>
<a href="${links.wa}" target="_blank" rel="noopener">${icon('whatsapp')}<span>WhatsApp</span></a>
<a class="mobile-bar__quote" href="${page.quoteHref}">${icon('clipboard')}<span>Get Quote</span></a>
</nav>
<a class="wa-float" href="${links.wa}" target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">${icon('whatsapp')}<span>WhatsApp</span></a>`;
}

/* ---------- Structured data ---------- */
function businessNode() {
  const node = {
    '@type': 'LocalBusiness',
    '@id': abs('/#business'),
    name: b.name,
    url: abs('/'),
    telephone: b.phone,
    email: b.email,
    image: abs(config.defaultOgImage),
    logo: abs('/assets/icon-512.png'),
    description:
      'Rooftop solar consultation, installation and maintenance for homes and businesses in Ayodhya and Faizabad, Uttar Pradesh.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: b.address.street,
      addressLocality: b.address.locality,
      addressRegion: b.address.region,
      addressCountry: b.address.country,
    },
    areaServed: b.areaServed.map((name) => ({ '@type': 'City', name })),
    hasMap: b.mapsUrl,
    knowsAbout: ['Rooftop solar installation', 'Grid-connected solar systems', 'Net metering', 'PM Surya Ghar rooftop solar scheme', 'Solar panel maintenance'],
  };
  const sameAs = [...b.sameAs, ...(b.gbpUrl ? [b.gbpUrl] : [])];
  if (sameAs.length) node.sameAs = sameAs;
  return node;
}

function schemaGraph(page) {
  const url = abs(page.path);
  const graph = [
    businessNode(),
    {
      '@type': 'WebSite',
      '@id': abs('/#website'),
      url: abs('/'),
      name: config.siteName,
      inLanguage: config.lang,
      publisher: { '@id': abs('/#business') },
    },
    {
      '@type': page.pageType || 'WebPage',
      '@id': url + '#webpage',
      url,
      name: page.title,
      description: page.description,
      inLanguage: config.lang,
      isPartOf: { '@id': abs('/#website') },
      about: { '@id': abs('/#business') },
      ...(page.breadcrumbs ? { breadcrumb: { '@id': url + '#breadcrumb' } } : {}),
    },
  ];
  if (page.breadcrumbs) {
    const crumbs = [{ name: 'Home', path: '/' }, ...page.breadcrumbs];
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': url + '#breadcrumb',
      itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: abs(c.path) })),
    });
  }
  if (page.service) {
    graph.push({
      '@type': 'Service',
      '@id': url + '#service',
      name: page.service.name,
      serviceType: page.service.type || page.service.name,
      description: page.service.description,
      provider: { '@id': abs('/#business') },
      areaServed: (page.service.areas || b.areaServed).map((name) => ({ '@type': 'City', name })),
      url,
    });
  }
  if (page.faq && page.faq.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': url + '#faq',
      mainEntity: page.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') },
      })),
    });
  }
  if (page.article) {
    graph.push({
      '@type': 'BlogPosting',
      '@id': url + '#article',
      headline: page.article.headline,
      description: page.description,
      datePublished: page.article.published || config.published,
      dateModified: page.article.modified || config.modified,
      author: { '@id': abs('/#business') },
      publisher: { '@id': abs('/#business') },
      mainEntityOfPage: { '@id': url + '#webpage' },
      image: abs(page.ogImage || config.defaultOgImage),
      inLanguage: config.lang,
    });
  }
  if (page.extraSchema) graph.push(...page.extraSchema);
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
}

/* ---------- Analytics (only rendered when IDs exist) ---------- */
function analyticsHead() {
  const a = config.analytics;
  let out = '';
  if (a.gscVerification) out += `<meta name="google-site-verification" content="${esc(a.gscVerification)}">\n`;
  if (a.bingVerification) out += `<meta name="msvalidate.01" content="${esc(a.bingVerification)}">\n`;
  if (a.gtmId) {
    out += `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${esc(a.gtmId)}');</script>\n`;
  } else if (a.ga4Id) {
    out += `<script async src="https://www.googletagmanager.com/gtag/js?id=${esc(a.ga4Id)}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${esc(a.ga4Id)}');</script>\n`;
  }
  return out;
}
const analyticsBody = () =>
  config.analytics.gtmId
    ? `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${esc(config.analytics.gtmId)}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`
    : '';

/* ---------- Full document ---------- */
function renderPage(page, assets) {
  page.quoteHref = page.hasForm ? '#quote' : '/contact/#quote';
  const url = abs(page.path);
  const og = abs(page.ogImage || config.defaultOgImage);
  const robots = page.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1';
  const alternates = (page.alternates || [])
    .map((a) => `<link rel="alternate" hreflang="${a.lang}" href="${abs(a.path)}">`)
    .join('\n');
  const heroPreload = page.preloadHero
    ? `<link rel="preload" as="image" type="image/avif" imagesrcset="/assets/img/rooftop-solar-panels-ayodhya-home-480.avif 480w, /assets/img/rooftop-solar-panels-ayodhya-home-800.avif 800w, /assets/img/rooftop-solar-panels-ayodhya-home-1376.avif 1376w" imagesizes="100vw" fetchpriority="high">`
    : '';

  return `<!doctype html>
<html lang="${config.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<meta name="robots" content="${robots}">
<link rel="canonical" href="${url}">
${alternates}
<meta property="og:type" content="${page.article ? 'article' : 'website'}">
<meta property="og:site_name" content="${esc(config.siteName)}">
<meta property="og:locale" content="${config.locale}">
<meta property="og:title" content="${esc(page.ogTitle || page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${og}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(config.siteName)} — rooftop solar in Ayodhya">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(page.ogTitle || page.title)}">
<meta name="twitter:description" content="${esc(page.description)}">
<meta name="twitter:image" content="${og}">
<meta name="theme-color" content="${config.themeColor}">
<meta name="format-detection" content="telephone=no">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preload" href="/assets/fonts/plus-jakarta-sans-latin.woff2" as="font" type="font/woff2" crossorigin>
${heroPreload}
<link rel="stylesheet" href="/assets/css/styles.css?v=${assets.css}">
${analyticsHead()}<script type="application/ld+json">${schemaGraph(page)}</script>
</head>
<body class="${page.bodyClass || ''}">
${analyticsBody()}${sprite()}
${header(page)}
<main id="main">
${page.body}
</main>
${footer(page)}
<script src="/assets/js/main.js?v=${assets.js}" defer></script>
</body>
</html>
`;
}

module.exports = { renderPage, NAV };
