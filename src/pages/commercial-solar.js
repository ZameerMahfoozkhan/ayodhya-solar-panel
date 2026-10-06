const { icon, links, config } = require('../lib');
const C = require('../components');
const { pick } = require('../faq');

const crumbs = [{ name: 'Commercial Solar Installation in Ayodhya', path: '/commercial-solar-installation/' }];

const targetSectors = [
  ['building', 'Retail Shops & Commercial Showrooms', 'Offset continuous daylight air conditioning and decorative display lighting on high commercial tariff slabs.'],
  ['shield', 'Private Clinics, Diagnostic Labs & Hospitals', 'Safeguard sensitive testing instruments, cold storage pharmaceuticals, and daily operation with dependable solar power.'],
  ['home', 'Schools, Colleges & Educational Academies', 'Substantial flat roof areas match perfectly with 9 am to 4 pm daytime school hours, lowering institutional operating overhead.'],
  ['briefcase', 'Offices & Co-Working Spaces', 'Power computing equipment, HVAC systems, and pantry appliances directly from daytime sunshine.'],
  ['wrench', 'Small Factories, Bakeries & Workshops', 'Run motor-driven machinery, packaging equipment, and three-phase loads with heavy-duty solar generation.'],
  ['grid', 'Warehouses & Cold Storage Facilities', 'Extensive roof spans provide ample surface for large kilowatt arrays, converting unused metal or RCC sheds into power stations.'],
];

const body = [
  C.pageHero({
    crumbs,
    eyebrow: 'Commercial & Institutional Solar',
    h1: 'Commercial Solar Installation in Ayodhya',
    lead: 'Tailored rooftop solar power plants for shops, private clinics, schools, commercial complexes, and small enterprises in Ayodhya and Faizabad. Cut expensive commercial electricity tariffs and achieve rapid capital payback.',
    image: 'commercial',
    imageAlt: 'Commercial building rooftop with neat rows of solar panels in North India',
    points: ['Designed for commercial daytime tariffs', 'Accelerated depreciation tax benefits', 'Three-phase industrial-grade engineering'],
    quoteHref: '#quote',
  }),
  C.split({
    id: 'commercial-economics',
    eyebrow: 'Business Economics',
    title: 'Why Solar is a High-Yield Investment for Ayodhya Businesses',
    html: `<p>In Uttar Pradesh, commercial electricity connections (LMV-2 tariff category) carry significantly higher per-unit rates than domestic meters, often exceeding ₹8.50 to ₹10.50 per unit when fixed demand charges and electricity duties are factored in.</p>
<p>Unlike residences where peak electricity consumption occurs in the evening, commercial establishments consume 70% to 90% of their power between 9:00 AM and 6:00 PM — exactly when your rooftop solar panels operate at maximum output.</p>
<h3>Crucial Subsidy Clarification for Businesses:</h3>
<div class="callout callout--warn">
${icon('info')}
<div>
<strong>No PM Surya Ghar Subsidy for Commercial Properties:</strong> The central financial assistance under the PM Surya Ghar scheme is strictly reserved for residential domestic connections. We do not make false promises of central residential subsidies to commercial clients. However, businesses benefit from accelerated depreciation benefits and dramatically faster operational payback.
</div>
</div>
<p>Because commercial electricity tariffs are high, commercial solar systems routinely achieve complete capital payback within <strong>2.5 to 3.5 years</strong>, delivering over 20 subsequent years of practically free electricity.</p>`,
    aside: `<div class="info-card">
<p class="info-card__title">Commercial Advantages</p>
<ul class="tick-list">
<li>Direct reduction in high LMV-2 utility bills</li>
<li>Accelerated Depreciation under Section 32 of Income Tax Act</li>
<li>Net metering integration for surplus export</li>
<li>Protection against future utility tariff hikes</li>
<li>Demonstrates green environmental leadership</li>
</ul>
<a class="btn btn--primary btn--sm btn--block" href="#quote">Request Commercial Quote</a>
</div>`,
  }),
  `<section class="section section--tint" id="sectors-served" aria-labelledby="sectors-title"><div class="container">
${C.sectionHead({
  eyebrow: 'Sectors We Serve',
  title: 'Solar Solutions for Ayodhya & Faizabad Commercial Sectors',
  id: 'sectors-title',
  lead: 'We design custom structural and electrical solutions tailored to diverse building typologies across the twin cities.',
})}
<ul class="feature-grid feature-grid--wide">
${targetSectors.map(([ic, t, d]) => `<li class="feature feature--card">${icon(ic)}<h3>${t}</h3><p>${d}</p></li>`).join('')}
</ul>
</div></section>`,
  C.split({
    id: 'commercial-engineering',
    eyebrow: 'Engineering Standards',
    title: 'Industrial-Grade Structural & Electrical Specifications',
    html: `<p>Commercial installations demand rigorous engineering standards to prevent downtime and comply with DISCOM safety mandates:</p>
<h3>1. Three-Phase Grid-Tied Inverters</h3>
<p>We install industrial-grade three-phase inverters (from 10 kW to 100 kW+) with multiple Maximum Power Point Trackers (MPPT) to manage independent panel orientations and eliminate string mismatch losses.</p>
<h3>2. Non-Penetrative Metal Roof Clamping</h3>
<p>For warehouses and workshops with pre-engineered building (PEB) trapezoidal or standing-seam metal roofs, we utilize specialized aluminum standing seam clamps. Zero holes are drilled into the metal sheeting, preserving watertight building warranties.</p>
<h3>3. Industrial Switchgear &amp; Net Metering</h3>
<p>Heavy-duty AC/DC distribution boxes equipped with Type-II surge protection devices, four-pole isolators, and dedicated copper busbars engineered for continuous duty cycles under intense summer ambient temperatures.</p>`,
    aside: C.figure('structure', 'Heavy-gauge galvanized structure with securely bolted anchoring footings'),
    reverse: true,
  }),
  C.faqBlock(pick('commercialSubsidy', 'netMetering', 'cost', 'cloudy', 'maintenance', 'duration'), {
    title: 'Commercial Solar Frequently Asked Questions',
  }),
  C.relatedLinks([
    ['Solar panel installation in Ayodhya', '/solar-panel-installation-ayodhya/', 'Primary regional solar engineering hub', 'pin'],
    ['Solar installation in Faizabad', '/solar-panel-installation-faizabad/', 'Faizabad twin-city commercial service', 'building'],
    ['Solar panel price guide', '/solar-panel-price-ayodhya/', 'Transparent equipment and installation economics', 'rupee'],
    ['Rooftop solar technology guide', '/rooftop-solar-installation/', 'Technical details on inverters, structures and protection', 'panel'],
    ['Residential solar systems', '/solar-panels-for-home/', 'Solutions for independent houses and domestic meters', 'home'],
    ['Contact our commercial desk', '/contact/', 'Schedule a site survey with our engineers', 'phone'],
  ]),
  C.finalCta({
    title: 'Request a Commercial Solar Feasibility Study',
    text: 'Submit your organization’s monthly energy spend and sanctioned load. Our engineering team will prepare an economic feasibility model and site survey plan.',
    city: 'Ayodhya',
  }),
].join('\n');

module.exports = {
  path: '/commercial-solar-installation/',
  title: 'Commercial Solar Installation in Ayodhya | Shops, Offices & Schools',
  description:
    'Commercial rooftop solar in Ayodhya and Faizabad for shops, offices, clinics, schools, and warehouses. Lower commercial electricity costs with rapid 3-year ROI.',
  hasForm: true,
  breadcrumbs: crumbs,
  sitemap: { priority: '0.85', changefreq: 'monthly' },
  service: {
    name: 'Commercial solar panel installation in Ayodhya',
    type: 'Commercial Solar Installation',
    description: 'Custom rooftop solar engineering, three-phase inverter integration, net metering and maintenance for businesses and commercial buildings in Ayodhya and Faizabad.',
  },
  body,
};
