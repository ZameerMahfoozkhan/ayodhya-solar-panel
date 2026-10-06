/**
 * Reusable page sections. Everything renders to static HTML so content is
 * crawlable without JavaScript; JS only enhances (calculator, form, menu).
 */
const { esc, inr, links, icon, picture, config } = require('./lib');

const b = config.business;
const s = config.subsidy;
const L = config.officialLinks;

/* ---------- Basics ---------- */
const sectionHead = ({ eyebrow, title, lead, id, center = false, tag = 'h2' }) => `<div class="section-head${center ? ' section-head--center' : ''}">
${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
<${tag} class="section-title"${id ? ` id="${id}"` : ''}>${title}</${tag}>
${lead ? `<p class="section-lead">${lead}</p>` : ''}
</div>`;

const breadcrumbs = (crumbs) => `<nav class="crumbs" aria-label="Breadcrumb"><ol>
<li><a href="/">Home</a></li>
${crumbs
  .map((c, i) =>
    i === crumbs.length - 1 ? `<li><span aria-current="page">${esc(c.name)}</span></li>` : `<li><a href="${c.path}">${esc(c.name)}</a></li>`
  )
  .join('')}
</ol></nav>`;

const ctaButtons = ({ quoteHref = '/contact/#quote', quoteLabel = 'Get Free Solar Quote', call = true, dark = false } = {}) => `<div class="btn-row">
<a class="btn btn--primary btn--lg" href="${quoteHref}">${quoteLabel}<span class="btn__icon">${icon('arrow')}</span></a>
<a class="btn btn--wa btn--lg" href="${links.wa}" target="_blank" rel="noopener">${icon('whatsapp')}WhatsApp Us</a>
${call ? `<a class="btn ${dark ? 'btn--ghost' : 'btn--outline'} btn--lg" href="${links.tel}">${icon('phone')}Call ${b.phoneDisplay}</a>` : ''}
</div>`;

/** Inner-page hero with background image (matching home page hero) or compact neutral layout. */
function pageHero({ crumbs, eyebrow, h1, lead, image, imageAlt, quoteHref = '/contact/#quote', quoteLabel, points }) {
  if (image) {
    return `<section class="page-hero page-hero--bg" aria-labelledby="page-hero-title">
<div class="page-hero__media">${picture(image, { eager: true, sizes: '100vw', cls: 'page-hero__pic', alt: imageAlt || '' })}</div>
<div class="page-hero__shade" aria-hidden="true"></div>
<div class="container page-hero__inner">
<div class="page-hero__copy">
${breadcrumbs(crumbs)}
${eyebrow ? `<p class="eyebrow eyebrow--light">${eyebrow}</p>` : ''}
<h1 id="page-hero-title">${h1}</h1>
<p class="page-hero__lead">${lead}</p>
${points ? `<ul class="tick-list tick-list--inline page-hero__points">${points.map((p) => `<li>${p}</li>`).join('')}</ul>` : ''}
${ctaButtons({ quoteHref, quoteLabel, call: false, dark: true })}
<p class="page-hero__call">Prefer to talk? Call <a href="${links.tel}">${b.phoneDisplay}</a></p>
</div>
</div>
<span class="pic-label pic-label--hero">Illustrative image</span>
</section>`;
  }

  return `<section class="page-hero" aria-labelledby="page-hero-title">
<div class="container page-hero__inner">
<div class="page-hero__copy">
${breadcrumbs(crumbs)}
${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
<h1 id="page-hero-title">${h1}</h1>
<p class="page-hero__lead">${lead}</p>
${points ? `<ul class="tick-list tick-list--inline">${points.map((p) => `<li>${p}</li>`).join('')}</ul>` : ''}
${ctaButtons({ quoteHref, quoteLabel, call: false })}
<p class="page-hero__call">Prefer to talk? Call <a href="${links.tel}">${b.phoneDisplay}</a></p>
</div>
</div>
</section>`;
}

const ctaBand = ({ title, text, quoteHref = '/contact/#quote', quoteLabel = 'Get Free Solar Quote' }) => `<aside class="cta-band" aria-label="${esc(title)}">
<div class="cta-band__copy"><p class="cta-band__title">${title}</p><p>${text}</p></div>
<div class="cta-band__actions"><a class="btn btn--primary" href="${quoteHref}">${quoteLabel}<span class="btn__icon">${icon('arrow')}</span></a><a class="btn btn--wa" href="${links.wa}" target="_blank" rel="noopener">${icon('whatsapp')}WhatsApp</a></div>
</aside>`;

const callout = (html, type = 'info') =>
  `<div class="callout callout--${type}" role="note">${icon(type === 'warn' ? 'info' : 'info')}<div>${html}</div></div>`;

const prose = (html, cls = '') => `<div class="prose${cls ? ' ' + cls : ''}">${html}</div>`;

/* ---------- Trust strip ---------- */
const trustStrip = () => `<section class="trust" aria-label="What we offer">
<div class="container"><ul class="trust__list">
<li>${icon('pin')}<span>Local Ayodhya Service</span></li>
<li>${icon('home')}<span>Residential &amp; Commercial Solar</span></li>
<li>${icon('ruler')}<span>Site Assessment</span></li>
<li>${icon('wrench')}<span>Installation Support</span></li>
<li>${icon('doc')}<span>Subsidy Guidance</span></li>
</ul></div>
</section>`;

/* ---------- Calculator ---------- */
const calculator = ({ headingTag = 'h2' } = {}) => `<section class="section section--dark calc-section" id="calculator" aria-labelledby="calc-title">
<div class="container">
<div class="section-head section-head--center">
<p class="eyebrow eyebrow--light">Solar calculator</p>
<${headingTag} class="section-title" id="calc-title">How Much Solar Does Your Home Need?</${headingTag}>
<p class="section-lead">Enter your monthly electricity units or bill for an indicative system size, generation and roof-space estimate.</p>
</div>
<div class="calc shell">
<form class="calc__form core" id="solar-calc" novalidate>
<fieldset class="calc__field">
<legend>I know my…</legend>
<div class="seg" role="radiogroup">
<label><input type="radio" name="calc-mode" value="units" checked><span>Monthly units</span></label>
<label><input type="radio" name="calc-mode" value="bill"><span>Monthly bill (₹)</span></label>
</div>
</fieldset>
<div class="calc__field">
<label for="calc-value" id="calc-value-label">Average monthly electricity units (kWh)</label>
<div class="input-wrap"><input id="calc-value" name="calc-value" type="number" inputmode="numeric" min="1" step="1" placeholder="e.g. 350" aria-describedby="calc-hint calc-error"><span class="input-suffix" id="calc-suffix">units</span></div>
<p class="hint" id="calc-hint">Find “units consumed” on your electricity bill. An average of a few months works best.</p>
<p class="field-error" id="calc-error" role="alert" hidden></p>
</div>
<fieldset class="calc__field">
<legend>Property type <span class="optional">(optional)</span></legend>
<div class="chips">
<label><input type="radio" name="calc-property" value="house" checked><span>House</span></label>
<label><input type="radio" name="calc-property" value="shop"><span>Shop</span></label>
<label><input type="radio" name="calc-property" value="office"><span>Office</span></label>
<label><input type="radio" name="calc-property" value="other"><span>Other</span></label>
</div>
</fieldset>
<fieldset class="calc__field">
<legend>Available roof space <span class="optional">(optional)</span></legend>
<div class="chips">
<label><input type="radio" name="calc-roof" value="small"><span>Small</span></label>
<label><input type="radio" name="calc-roof" value="medium"><span>Medium</span></label>
<label><input type="radio" name="calc-roof" value="large"><span>Large</span></label>
<label><input type="radio" name="calc-roof" value="unsure" checked><span>Not sure</span></label>
</div>
</fieldset>
<button class="btn btn--primary btn--lg btn--block" type="submit">${icon('calc')}Calculate my estimate</button>
</form>
<div class="calc__result core core--dark" id="calc-result" aria-live="polite">
<div class="calc__empty" id="calc-empty">
${icon('sun', 'calc__empty-icon')}
<p class="calc__empty-title">Your estimate will appear here</p>
<p>Typical Ayodhya homes use between 150 and 600 units a month. Try your own number.</p>
</div>
<div class="calc__output" id="calc-output" hidden>
<p class="calc__label">Estimated system size</p>
<p class="calc__big"><span id="r-size">3</span><small> kW</small></p>
<dl class="calc__stats">
<div><dt>Indicative monthly generation</dt><dd id="r-gen">~360 units</dd></div>
<div><dt>Indicative roof area</dt><dd id="r-area">~325 sq ft</dd></div>
<div><dt>Potential electricity offset</dt><dd id="r-offset">~100%</dd></div>
<div id="r-subsidy-wrap"><dt>Possible govt. support if eligible</dt><dd id="r-subsidy">up to ₹1,08,000</dd></div>
</dl>
<p class="calc__note" id="r-note" hidden></p>
<a class="btn btn--primary btn--lg btn--block" href="#quote" id="calc-cta">Get a Free Solar Assessment<span class="btn__icon">${icon('arrow')}</span></a>
</div>
<p class="calc__disclaimer">${icon('info')}<span>Indicative estimate only. Actual system size, generation and savings depend on electricity consumption, sanctioned load, roof orientation, shade, system design, equipment and site conditions.</span></p>
<p class="calc__assume">Assumptions: ~120 units per kW per month average generation (range 110–135); roof area based on the UPNEDA reference of about 10 m² shadow-free area per 1 kWp, which varies with module efficiency and layout; bill-to-units conversion uses an assumed average of ₹7 per unit. This is not an official government calculation.</p>
<noscript><p class="calc__noscript">The calculator needs JavaScript. You can still <a href="${links.wa}">send us your bill on WhatsApp</a> for a free estimate.</p></noscript>
</div>
</div>
${systemSizes({ dark: true, quoteHref: '#quote' })}
</div>
</section>`;

/* ---------- System sizes ---------- */
const SIZES = [
  { kw: 1, use: 'Lights, fans, TV, fridge and other light daily loads.', prop: 'Small homes or flats with low consumption', units: '100–150' },
  { kw: 2, use: 'A typical small family home without heavy AC use.', prop: '1BHK / 2BHK homes', units: '200–300' },
  { kw: 3, use: 'Family homes running an AC or two in summer.', prop: '2BHK / 3BHK independent houses', units: '300–400' },
  { kw: 5, use: 'Larger households with multiple ACs, pump or geyser.', prop: '3BHK / 4BHK and bigger homes', units: '500–700' },
  { kw: 10, use: 'High-consumption homes, multi-family buildings, shops and offices.', prop: 'Large homes & small commercial', units: '1,000–1,400' },
];
const sqft = (kw) => Math.round(kw * 10 * 10.764 / 5) * 5;

function systemSizes({ dark = false, headingTag = 'h3', quoteHref = '/contact/#quote' } = {}) {
  return `<div class="sizes${dark ? ' sizes--dark' : ''}" id="system-sizes">
<div class="sizes__head">
<${headingTag} class="sizes__title">Common rooftop solar system sizes</${headingTag}>
<p>Generation ranges are indicative averages for the Ayodhya region and vary by season, shade and equipment. One size never fits every home.</p>
</div>
<div class="sizes__grid">
${SIZES.map(
  (z) => `<article class="size-card">
<p class="size-card__kw">${z.kw} kW <span>Solar</span></p>
<dl>
<div><dt>Typical use</dt><dd>${z.use}</dd></div>
<div><dt>Property type</dt><dd>${z.prop}</dd></div>
<div><dt>Generation</dt><dd>~${(z.kw * 110).toLocaleString('en-IN')}–${(z.kw * 135).toLocaleString('en-IN')} units/month</dd></div>
<div><dt>Roof space</dt><dd>~${z.kw * 10} m² (~${sqft(z.kw).toLocaleString('en-IN')} sq ft) shadow-free</dd></div>
<div><dt>May suit</dt><dd>Bills around ${z.units} units/month</dd></div>
</dl>
</article>`
).join('')}
</div>
<div class="sizes__cta"><p><strong>Not sure which system you need?</strong> We’ll size it from your actual bill and roof.</p><a class="btn ${dark ? 'btn--primary' : 'btn--dark'}" href="${quoteHref}">Get a Free Solar Assessment<span class="btn__icon">${icon('arrow')}</span></a></div>
</div>`;
}

/* ---------- Subsidy ---------- */
const subsidyTable = () => {
  const rows = [
    ['1 kW', s.centralByKw[1], Math.min(s.upStatePerKw, s.upStateCap)],
    ['2 kW', s.centralByKw[2], Math.min(2 * s.upStatePerKw, s.upStateCap)],
    ['3 kW', s.centralByKw[3], s.upStateCap],
    ['Above 3 kW', s.centralCap, s.upStateCap],
  ];
  return `<div class="table-wrap"><table class="subsidy-table">
<caption>Reference values for eligible residential consumers in Uttar Pradesh (verify on official portals)</caption>
<thead><tr><th scope="col">System size</th><th scope="col">Central assistance (PM Surya Ghar)</th><th scope="col">UP state subsidy</th><th scope="col">Combined, up to</th></tr></thead>
<tbody>${rows
    .map(
      ([k, c, st], i) =>
        `<tr><th scope="row">${k}</th><td>${inr(c)}${i === 3 ? ' (cap)' : ''}</td><td>${inr(st)}</td><td><strong>${inr(c + st)}</strong></td></tr>`
    )
    .join('')}</tbody>
</table></div>`;
};

const subsidyEligibleLine = () =>
  `Eligible residential consumers may receive up to ₹1.08 lakh in combined central and Uttar Pradesh support, subject to current scheme rules, eligibility, approved vendor requirements and successful installation/verification.`;

const subsidyChangeNote = () =>
  callout(
    `<strong>Please note:</strong> Government subsidy rules, eligibility, procedures and amounts can change. Customers should verify current details on official government portals before making a purchase decision.`,
    'warn'
  );

const officialLinks = (title = 'Official sources') => `<div class="official">
<p class="official__title">${icon('shield')}${title}</p>
<ul>
<li><a href="${L.pmSuryaGhar}" target="_blank" rel="noopener">PM Surya Ghar portal<span>pmsuryaghar.gov.in</span>${icon('external')}</a></li>
<li><a href="${L.mnre}" target="_blank" rel="noopener">Ministry of New &amp; Renewable Energy<span>mnre.gov.in</span>${icon('external')}</a></li>
<li><a href="${L.upneda}" target="_blank" rel="noopener">UPNEDA<span>upneda.org.in</span>${icon('external')}</a></li>
<li><a href="${L.upSolarCities}" target="_blank" rel="noopener">UP Solar Cities Portal<span>solarcitiesportal.upneda.org.in</span>${icon('external')}</a></li>
</ul>
</div>`;

const SUBSIDY_STEPS = [
  ['Check Eligibility', 'Residential connection in your name, a suitable roof, and no previous solar subsidy on the same connection.'],
  ['Apply Through the Official Portal', 'Register on pmsuryaghar.gov.in with your state, DISCOM and electricity consumer number, then submit the rooftop solar application.'],
  ['Feasibility / Approval', 'Your DISCOM reviews the application and issues technical feasibility before installation begins.'],
  ['Install Rooftop Solar', 'The system is installed by a vendor registered for the scheme. Plant details are then submitted on the portal along with the net meter request.'],
  ['Inspection / Commissioning / Subsidy Process', 'After net metering and DISCOM inspection, the commissioning report is generated and the subsidy is processed to your bank account as per scheme rules.'],
];

const subsidySteps = () => `<ol class="steps steps--5">
${SUBSIDY_STEPS.map(([t, d], i) => `<li class="step"><span class="step__num">${i + 1}</span><h3 class="step__title">${t}</h3><p>${d}</p></li>`).join('')}
</ol>
<p class="steps__note">${icon('info')}We can guide you through the installation and documentation process. Approval and subsidy release are decided by the government and your DISCOM, so no installer can guarantee them.</p>`;

/* ---------- Installation process ---------- */
const INSTALL_STEPS = [
  ['Talk to us', 'Call or WhatsApp with your electricity bill. We understand your usage, sanctioned load and what you want from solar.', 'chat'],
  ['Site assessment', 'We check roof size, direction, shade, structure and wiring route, and note where the inverter and meter will go.', 'ruler'],
  ['Design & quotation', 'You receive a recommended system size with an itemised quote — panels, inverter, structure, cabling and protection.', 'doc'],
  ['Documentation guidance', 'For eligible homes we help you through the PM Surya Ghar application and DISCOM paperwork.', 'clipboard'],
  ['Installation', 'Structure, panels, inverter, DC/AC protection and earthing are installed and wired neatly and safely.', 'wrench'],
  ['Net meter & commissioning', 'After DISCOM inspection and net metering, the system is commissioned. We show you how to monitor and clean it.', 'meter'],
];

const installSteps = () => `<ol class="process">
${INSTALL_STEPS.map(
  ([t, d, ic], i) => `<li class="process__item"><div class="process__icon">${icon(ic)}<span>${String(i + 1).padStart(2, '0')}</span></div><div><h3>${t}</h3><p>${d}</p></div></li>`
).join('')}
</ol>`;

/* ---------- Service area ---------- */
const serviceArea = ({ title = 'Solar Installation Service Area in Ayodhya', tag = 'h2', lead } = {}) => `<section class="section" id="service-area" aria-labelledby="area-title">
<div class="container area">
<div class="area__copy">
<p class="eyebrow">Where we work</p>
<${tag} class="section-title" id="area-title">${title}</${tag}>
<p class="section-lead">${lead || `We are based on Naka Bypass and work across Ayodhya city — including the Faizabad side of the city — for home and business rooftop solar.`}</p>
<ul class="area__chips">${['Ayodhya', 'Faizabad', ...b.localities].map((l) => `<li>${icon('pin')}${l}</li>`).join('')}</ul>
<p class="area__confirm"><strong>Contact us to confirm availability for your area.</strong> If you are just outside these localities, ask anyway — we’ll tell you honestly whether we can serve you well.</p>
<div class="btn-row"><a class="btn btn--dark" href="${links.wa}" target="_blank" rel="noopener">${icon('whatsapp')}Check my area on WhatsApp</a><a class="btn btn--outline" href="${links.maps}" target="_blank" rel="noopener">${icon('pin')}Open in Google Maps</a></div>
</div>
<div class="area__card shell">
<div class="core area__map">
<svg viewBox="0 0 400 300" class="area__svg" role="img" aria-label="Simplified sketch of Ayodhya city with the Saryu river to the north and the Naka Bypass base marked">
<defs><pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="#d7d3c4"/></pattern></defs>
<rect width="400" height="300" fill="url(#dots)"/>
<path d="M-10 70 C 60 40, 120 60, 180 45 S 300 20, 410 40" fill="none" stroke="#9cc3d9" stroke-width="14" stroke-linecap="round" opacity=".7"/>
<text x="300" y="24" class="map-t map-t--river">Saryu river</text>
<path d="M20 250 C 120 225, 240 232, 390 200" fill="none" stroke="#c9c3b0" stroke-width="5" stroke-dasharray="2 7" stroke-linecap="round"/>
<text x="290" y="236" class="map-t">Bypass</text>
<path d="M120 150 L 300 100" fill="none" stroke="#c9c3b0" stroke-width="4" stroke-linecap="round"/>
<circle cx="300" cy="100" r="5" fill="#121417"/><text x="254" y="128" class="map-t">Ayodhya Dham</text>
<circle cx="120" cy="150" r="5" fill="#121417"/><text x="60" y="134" class="map-t">Faizabad side</text>
<circle cx="140" cy="226" r="12" fill="#F2B705" opacity=".35"/><circle cx="140" cy="226" r="6" fill="#F2B705" stroke="#121417" stroke-width="2"/>
<text x="60" y="206" class="map-t map-t--bold">Naka Bypass (base)</text>
</svg>
<p class="area__mapnote">Simplified sketch — not to scale.</p>
</div>
<address class="area__addr">
<p><strong>${esc(b.name)}</strong></p>
<p>${esc(b.address.display)}</p>
<p><a href="${links.tel}">${b.phoneDisplay}</a> · <a href="${links.mail}">${b.email}</a></p>
</address>
</div>
</div>
</section>`;

/* ---------- Gallery + reviews (honest, no fabricated data) ---------- */
function projectCards() {
  if (!config.projects.length) return '';
  return `<div class="projects-grid">${config.projects
    .map(
      (p) => `<article class="project-card">
${p.images && p.images[0] ? `<img src="${p.images[0].src}" alt="${esc(p.images[0].alt)}" width="${p.images[0].w}" height="${p.images[0].h}" loading="lazy" decoding="async">` : ''}
<div class="project-card__body"><h3>${esc(p.title)}</h3>
<ul class="project-card__meta"><li>${icon('pin')}${esc(p.location)}</li><li>${icon('home')}${esc(p.property)}</li><li>${icon('bolt')}${esc(p.size)}</li><li>${icon('clock')}${esc(p.date)}</li></ul>
<p>${esc(p.description)}</p></div></article>`
    )
    .join('')}</div>`;
}

const galleryPreview = ({ tag = 'h2' } = {}) => `<section class="section section--tint" id="gallery" aria-labelledby="gallery-title">
<div class="container">
${sectionHead({
  eyebrow: 'Projects',
  title: 'Our Installation Gallery',
  id: 'gallery-title',
  tag,
  lead: config.projects.length
    ? 'Recent rooftop solar installations completed by our team.'
    : 'Photos of our completed local installations will be published here, each with its location, property type, system size and installation date. Until then, the images below are clearly marked illustrations of the kind of work involved — not customer projects.',
})}
<div class="gallery-policy">
  <span class="gallery-policy__icon">${icon('shield')}</span>
  <p><strong>Workmanship &amp; Verification Notice:</strong> As projects complete across Ayodhya and Faizabad, verified photo profiles with exact system kW, locality and client consent will be published here. The examples below illustrate our structural and switchgear standards.</p>
</div>
${config.projects.length ? projectCards() : `<div class="gallery">
<figure class="gallery-card">
  <div class="gallery-card__media">
    ${picture('home', { sizes: '(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw', alt: 'Raised rooftop solar structure on independent house terrace in Ayodhya' })}
    <span class="gallery-card__pill">${icon('home')}Raised Terrace Frame</span>
  </div>
  <figcaption class="gallery-card__body">
    <span class="gallery-card__badge">Engineering Standard</span>
    <h3>Multi-Storey Residential Integration</h3>
    <p>High-clearance galvanized canopy installed above water tanks to avoid shading, preserving terrace living area below.</p>
    <div class="gallery-card__meta">
      <span class="gallery-card__type">${icon('shield')}Illustrative example</span>
      <span class="gallery-card__loc">${icon('pin')}Ayodhya</span>
    </div>
  </figcaption>
</figure>

<figure class="gallery-card">
  <div class="gallery-card__media">
    ${picture('structure', { sizes: '(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw', alt: 'Hot-dip galvanized solar structure with concrete pedestal mounting and DC cabling' })}
    <span class="gallery-card__pill">${icon('panel')}Mounting &amp; Routing</span>
  </div>
  <figcaption class="gallery-card__body">
    <span class="gallery-card__badge">Hardware Standard</span>
    <h3>Civil Concrete Footings &amp; UV Conduit</h3>
    <p>Anchor-bolted concrete ballast footings that protect rooftop waterproofing, paired with UV-rated conduit trunking.</p>
    <div class="gallery-card__meta">
      <span class="gallery-card__type">${icon('shield')}Illustrative example</span>
      <span class="gallery-card__loc">${icon('pin')}Ayodhya &amp; Faizabad</span>
    </div>
  </figcaption>
</figure>

<figure class="gallery-card">
  <div class="gallery-card__media">
    ${picture('inverter', { sizes: '(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw', alt: 'Wall-mounted solar inverter with dedicated ACDB and DCDB switchgear' })}
    <span class="gallery-card__pill">${icon('plug')}Electrical Safety</span>
  </div>
  <figcaption class="gallery-card__body">
    <span class="gallery-card__badge">Protection Standard</span>
    <h3>Inverter &amp; AC/DC Distribution Boxes</h3>
    <p>Dedicated wall-mounted switchgear with Type-II surge protection devices (SPD), dual earthing, and tidy cable routing.</p>
    <div class="gallery-card__meta">
      <span class="gallery-card__type">${icon('shield')}Illustrative example</span>
      <span class="gallery-card__loc">${icon('pin')}Ayodhya</span>
    </div>
  </figcaption>
</figure>
</div>`}
<p class="center-link"><a class="link-arrow" href="/projects/">View the full installation gallery &amp; standards${icon('arrow')}</a></p>
</div>
</section>`;

const reviewsBlock = ({ tag = 'h2' } = {}) => `<section class="section" id="reviews" aria-labelledby="reviews-title">
<div class="container">
${sectionHead({ eyebrow: 'Reviews', title: 'What Our Customers Say', id: 'reviews-title', tag, center: true })}
${
  config.reviews.length
    ? `<div class="reviews">${config.reviews
        .map(
          (r) =>
            `<figure class="review"><blockquote>${esc(r.text)}</blockquote><figcaption>${esc(r.name)} · ${esc(r.area)}${r.source ? ` · via ${esc(r.source)}` : ''}</figcaption></figure>`
        )
        .join('')}</div>`
    : `<div class="reviews-empty shell"><div class="core">
${icon('star', 'reviews-empty__icon')}
<p class="reviews-empty__title">Customer reviews will be added as we complete installations.</p>
<p>We only publish genuine feedback from real customers — no stock testimonials. If you would like to speak with us about our approach before deciding, we are happy to explain everything on a call.</p>
<div class="btn-row btn-row--center"><a class="btn btn--outline" href="${links.tel}">${icon('phone')}Call ${b.phoneDisplay}</a>${
        b.gbpUrl ? `<a class="btn btn--dark" href="${b.gbpUrl}" target="_blank" rel="noopener">${icon('star')}See us on Google</a>` : ''
      }</div>
</div></div>`
}
</div>
</section>`;

/* ---------- FAQ ---------- */
const faqBlock = (items, { title = 'Frequently Asked Questions', lead, tag = 'h2', id = 'faq' } = {}) => `<section class="section" id="${id}" aria-labelledby="${id}-title">
<div class="container faq">
<div class="faq__head">
${sectionHead({ eyebrow: 'FAQ', title, lead, id: `${id}-title`, tag })}
<div class="faq__ask"><p>Have a question that isn’t answered here?</p><a class="btn btn--wa" href="${links.wa}" target="_blank" rel="noopener">${icon('whatsapp')}Ask on WhatsApp</a></div>
</div>
<div class="faq__list">
${items
  .map(
    (f) => `<details class="faq__item"><summary><h3>${esc(f.q)}</h3>${icon('chevron', 'faq__chev')}</summary><div class="faq__a"><p>${f.a}</p></div></details>`
  )
  .join('')}
</div>
</div>
</section>`;

/* ---------- Lead form ---------- */
const leadForm = ({ city = 'Ayodhya', title = 'Get My Free Solar Assessment' } = {}) => `<form class="lead-form core" id="lead-form" data-city="${city}" novalidate>
<p class="lead-form__title">${title}</p>
<p class="lead-form__sub">Takes under a minute. Your details open in WhatsApp so you can review them before sending.</p>
<div class="form-grid">
<div class="field"><label for="lf-name">Name <span aria-hidden="true">*</span></label><input id="lf-name" name="name" type="text" autocomplete="name" required aria-describedby="lf-name-err"><p class="field-error" id="lf-name-err" hidden></p></div>
<div class="field"><label for="lf-phone">Phone number <span aria-hidden="true">*</span></label><input id="lf-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" required placeholder="10-digit mobile" aria-describedby="lf-phone-err"><p class="field-error" id="lf-phone-err" hidden></p></div>
<div class="field"><label for="lf-area">City / Area <span aria-hidden="true">*</span></label><input id="lf-area" name="area" type="text" autocomplete="address-level2" required placeholder="e.g. Civil Lines, ${city}" aria-describedby="lf-area-err"><p class="field-error" id="lf-area-err" hidden></p></div>
<div class="field"><label for="lf-property">Property type</label><select id="lf-property" name="property"><option>House</option><option>Flat / apartment</option><option>Shop</option><option>Office</option><option>Clinic / hospital</option><option>School / institution</option><option>Other</option></select></div>
<div class="field"><label for="lf-bill">Monthly electricity bill</label><select id="lf-bill" name="bill"><option value="">Select range</option><option>Below ₹1,000</option><option>₹1,000 – ₹2,000</option><option>₹2,000 – ₹3,500</option><option>₹3,500 – ₹5,000</option><option>₹5,000 – ₹10,000</option><option>Above ₹10,000</option></select></div>
<div class="field"><label for="lf-units">Approx. monthly units <span class="optional">(optional)</span></label><input id="lf-units" name="units" type="number" inputmode="numeric" min="0" placeholder="e.g. 350"></div>
<div class="field field--full"><label for="lf-req">System requirement <span class="optional">(optional)</span></label><input id="lf-req" name="requirement" type="text" placeholder="e.g. 3 kW on-grid, or “not sure”"></div>
<fieldset class="field field--full"><legend>Preferred contact method</legend><div class="chips chips--light">
<label><input type="radio" name="contact" value="WhatsApp" checked><span>WhatsApp</span></label>
<label><input type="radio" name="contact" value="Phone call"><span>Phone call</span></label>
<label><input type="radio" name="contact" value="Email"><span>Email</span></label>
</div></fieldset>
<div class="field field--full"><label for="lf-msg">Message <span class="optional">(optional)</span></label><textarea id="lf-msg" name="message" rows="3" placeholder="Roof type, best time to call, questions about subsidy…"></textarea></div>
</div>
<button class="btn btn--primary btn--lg btn--block" type="submit">${icon('whatsapp')}Get My Free Solar Assessment</button>
<button class="btn btn--text" type="button" id="lf-email">${icon('mail')}Send by email instead</button>
<p class="form-status" id="lf-status" role="status" aria-live="polite"></p>
<p class="lead-form__privacy">We don’t store form data on any server — it is passed to WhatsApp or your email app. See our <a href="/privacy-policy/">privacy policy</a>.</p>
<noscript><p class="calc__noscript">This form needs JavaScript. Please <a href="${links.tel}">call ${b.phoneDisplay}</a>, <a href="${links.wa}">WhatsApp us</a> or <a href="${links.mail}">email ${b.email}</a>.</p></noscript>
</form>`;

const finalCta = ({
  title = 'Ready to Explore Solar for Your Home?',
  text = 'Tell us your location, electricity usage and property type. We’ll help you understand the solar system that may suit your needs.',
  city = 'Ayodhya',
  tag = 'h2',
} = {}) => `<section class="section final-cta" id="quote" aria-labelledby="quote-title">
<div class="container final-cta__grid">
<div class="final-cta__copy">
<p class="eyebrow eyebrow--light">Free solar assessment</p>
<${tag} class="section-title" id="quote-title">${title}</${tag}>
<p class="section-lead">${text}</p>
<div class="btn-row btn-row--stack">
<a class="btn btn--primary btn--lg" href="#lead-form">Get Free Solar Quote<span class="btn__icon">${icon('arrow')}</span></a>
<a class="btn btn--wa btn--lg" href="${links.wa}" target="_blank" rel="noopener">${icon('whatsapp')}WhatsApp Us</a>
<a class="btn btn--ghost btn--lg" href="${links.tel}">${icon('phone')}Call ${b.phoneDisplay}</a>
</div>
<ul class="final-cta__contact">
<li>${icon('mail')}<a href="${links.mail}">${b.email}</a></li>
<li>${icon('pin')}<a href="${links.maps}" target="_blank" rel="noopener">${esc(b.address.display)}</a></li>
</ul>
</div>
<div class="shell shell--dark">${leadForm({ city })}</div>
</div>
</section>`;

/* ---------- Related links ---------- */
const relatedLinks = (items, { title = 'Keep exploring', tag = 'h2' } = {}) => `<section class="section section--tint related" aria-labelledby="related-title">
<div class="container">
<${tag} class="related__title" id="related-title">${title}</${tag}>
<ul class="related__grid">${items
  .map(([label, href, desc, ic = 'arrowUpRight']) => `<li><a class="related__card" href="${href}">${icon(ic, 'related__ic')}<span class="related__label">${label}</span><span class="related__desc">${desc}</span>${icon('arrow', 'related__arrow')}</a></li>`)
  .join('')}</ul>
</div>
</section>`;

/** Two-column content section: prose + optional aside/image. */
const split = ({ id, eyebrow, title, html, aside, tint = false, reverse = false, tag = 'h2' }) => `<section class="section${tint ? ' section--tint' : ''}"${id ? ` id="${id}"` : ''}>
<div class="container split${reverse ? ' split--reverse' : ''}">
<div class="split__main">${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}<${tag} class="section-title">${title}</${tag}>${prose(html)}</div>
${aside ? `<div class="split__aside">${aside}</div>` : ''}
</div>
</section>`;

const figure = (key, caption, sizes = '(min-width: 1024px) 480px, 100vw') =>
  `<figure class="figure frame">${picture(key, { sizes })}<figcaption>Illustrative image · ${caption}</figcaption></figure>`;

module.exports = {
  sectionHead, breadcrumbs, ctaButtons, pageHero, ctaBand, callout, prose, trustStrip, calculator, systemSizes,
  subsidyTable, subsidyEligibleLine, subsidyChangeNote, officialLinks, subsidySteps, installSteps, serviceArea,
  galleryPreview, reviewsBlock, faqBlock, leadForm, finalCta, relatedLinks, split, figure, projectCards, SIZES,
};
