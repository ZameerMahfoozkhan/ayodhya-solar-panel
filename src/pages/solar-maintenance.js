const { icon, links, config } = require('../lib');
const C = require('../components');
const { pick } = require('../faq');

const crumbs = [{ name: 'Solar Panel Maintenance in Ayodhya', path: '/solar-panel-maintenance/' }];

const maintenanceServices = [
  ['cleaning', 'Professional Module Cleaning', 'Manual and soft-water washing using microfiber water-fed brushes. We remove baked-in atmospheric soot, seasonal agricultural dust, and bird droppings without micro-scratching AR-coated glass.'],
  ['wrench', 'Structural & Fastener Audit', 'Inspection of all galvanized iron (GI) purlins, rafter joints, and anchor foundation bolts. Fasteners are re-torqued to manufacturer specifications to ensure storm resilience.'],
  ['bolt', 'Electrical Diagnostics & String Testing', 'Open circuit voltage (Voc) and operating current (Isc) testing across every DC string. We verify MC4 connector insulation and inspect DCDB/ACDB surge protective devices.'],
  ['meter', 'Earthing Pit Resistance Measurement', 'Verification of earth pit ohmic resistance values using a digital earth tester. We recondition chemical earthing electrodes with moisture-retaining compounds where necessary.'],
  ['shield', 'Thermal Hotspot & Bypass Diode Check', 'Infrared thermal scanning to identify cell micro-cracks, shaded hotspots, or failed bypass diodes that degrade total string energy generation.'],
  ['chat', 'Inverter Health & Firmware Updates', 'Verification of MPPT tracking parameters, grid voltage frequency synchronization, error log analysis, and Wi-Fi data monitoring calibration.'],
];

const body = [
  C.pageHero({
    crumbs,
    eyebrow: 'System Care & Longevity',
    h1: 'Solar Panel Maintenance & Cleaning in Ayodhya',
    lead: 'Protect your energy harvest with routine solar panel cleaning, structural integrity inspections, and electrical diagnostics for residential and commercial rooftop plants in Ayodhya and Faizabad.',
    image: 'cleaning',
    imageAlt: 'Technician carefully washing rooftop solar panels with water and a soft-bristle brush in North India',
    points: ['Restores 10% to 25% lost generation', 'Prevents permanent glass hotspot damage', 'Experienced local technical team'],
    quoteHref: '#quote',
  }),
  C.split({
    id: 'why-cleaning-matters',
    eyebrow: 'Performance Impact',
    title: 'The Real Impact of Dust on Solar Performance in Ayodhya',
    html: `<p>In North India, seasonal weather conditions place heavy demands on exposed photovoltaic panels:</p>
<ul class="tick-list">
<li><strong>April to June (Pre-Monsoon Dust Storms / Aandhi):</strong> Intense westerly dry winds deposit thick layers of fine alluvial dust across flat solar glass, reducing power production by 15% to 25% within days.</li>
<li><strong>October to November (Harvest &amp; Biomass Smog):</strong> Particulate haze and crop residue dust create an oily film that reduces sunlight transmission.</li>
<li><strong>December to January (Winter Fog &amp; Dew):</strong> Morning condensation traps soot onto glass surfaces, forming an encrusted layer that light rains cannot wash off.</li>
</ul>
<p>Routine washing every two to three weeks with clean water restores optimal light absorption and protects against localized cell overheating (hotspots) caused by bird droppings.</p>`,
    aside: `<div class="info-card">
<p class="info-card__title">Maintenance Checklist</p>
<ul class="tick-list">
<li>Wash panels early morning or late evening</li>
<li>Never wash hot panels under blazing midday sun</li>
<li>Avoid borewell water with heavy mineral scaling</li>
<li>Do not step or walk directly on solar panels</li>
<li>Check inverter display weekly for fault codes</li>
</ul>
<a class="btn btn--primary btn--sm btn--block" href="#quote">Book a Cleaning Visit</a>
</div>`,
  }),
  `<section class="section section--tint" id="service-offerings" aria-labelledby="offerings-title"><div class="container">
${C.sectionHead({
  eyebrow: 'Our Services',
  title: 'Comprehensive Solar Maintenance &amp; Diagnostic Solutions',
  id: 'offerings-title',
  lead: 'From scheduled bi-weekly cleaning to in-depth annual electrical audits, we keep your plant operating at peak efficiency.',
})}
<ul class="feature-grid feature-grid--wide">
${maintenanceServices.map(([ic, t, d]) => `<li class="feature feature--card">${icon(ic)}<h3>${t}</h3><p>${d}</p></li>`).join('')}
</ul>
</div></section>`,
  C.split({
    id: 'safety-practices',
    eyebrow: 'Safety Protocols',
    title: 'Safe Maintenance Practices on Rooftop Terraces',
    html: `<p>Maintaining a high-voltage electrical power plant on an elevated terrace requires strict safety precautions:</p>
<h3>1. Thermal Shock Prevention</h3>
<p>During summer in Ayodhya, solar glass can reach temperatures above 65°C. Spraying cold water on baking glass induces intense thermal shock, causing micro-fractures or catastrophic tempered glass shattering. We clean only during early morning or evening hours.</p>
<h3>2. High-Voltage DC Hazard Protection</h3>
<p>Solar arrays produce high DC voltage as long as sunlight hits them — even when the inverter is switched off. Our technicians utilize insulated tools, verify cable conduit seals, and check for rodent damage or exposed copper conductors.</p>
<h3>3. Rooftop Edge Safety</h3>
<p>Elevated mounting structures place technicians near parapet perimeters. We observe strict fall-protection procedures to protect personnel and property.</p>`,
    aside: C.figure('structure', 'Carefully clipped DC conduit and robust mounting structure ensure long-term durability'),
    reverse: true,
  }),
  C.faqBlock(pick('maintenance', 'cloudy', 'shade', 'duration', 'whatsapp'), {
    title: 'Solar Maintenance Frequently Asked Questions',
  }),
  C.relatedLinks([
    ['Solar panels for home', '/solar-panels-for-home/', 'Home system sizing and component selection', 'home'],
    ['Rooftop solar installation', '/rooftop-solar-installation/', 'Technical guide to structure, inverters and net meters', 'panel'],
    ['Commercial solar installation', '/commercial-solar-installation/', 'Maintenance for commercial and institutional systems', 'building'],
    ['Solar panel price guide', '/solar-panel-price-ayodhya/', 'Understand equipment and maintenance budgeting', 'rupee'],
    ['Ayodhya solar installation', '/solar-panel-installation-ayodhya/', 'Local installation services and area coverage', 'pin'],
    ['Contact our service team', '/contact/', 'Call or WhatsApp us for immediate maintenance support', 'phone'],
  ]),
  C.finalCta({
    title: 'Notice a Drop in Your Solar Generation?',
    text: 'Schedule an inspection or routine cleaning visit in Ayodhya or Faizabad. Our team will audit your string performance and restore clean power harvest.',
    city: 'Ayodhya',
  }),
].join('\n');

module.exports = {
  path: '/solar-panel-maintenance/',
  title: 'Solar Panel Maintenance & Cleaning in Ayodhya | Rooftop Service',
  description:
    'Professional solar panel cleaning, electrical inspection, earthing tests and structural maintenance in Ayodhya and Faizabad. Restore peak energy generation.',
  hasForm: true,
  breadcrumbs: crumbs,
  sitemap: { priority: '0.8', changefreq: 'monthly' },
  service: {
    name: 'Solar panel maintenance and cleaning in Ayodhya',
    type: 'Solar Panel Maintenance Service',
    description: 'Rooftop solar module cleaning, electrical string diagnostics, inverter troubleshooting and structural audits across Ayodhya and Faizabad.',
  },
  body,
};
