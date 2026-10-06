const { icon, links, config } = require('../lib');
const C = require('../components');
const { pick } = require('../faq');

const crumbs = [{ name: 'Rooftop Solar Installation in Ayodhya', path: '/rooftop-solar-installation/' }];

const componentsList = [
  ['panel', 'Photovoltaic (PV) Solar Modules', 'High-efficiency monocrystalline PERC or TOPCon solar panels convert sunlight into Direct Current (DC) electricity. Modules are tested against wind, thermal degradation, and heavy rain.'],
  ['plug', 'Solar Power Inverter', 'Converts DC electricity into alternating current (AC) synchronized with the grid frequency and voltage. Advanced inverters feature Maximum Power Point Tracking (MPPT) for optimal efficiency.'],
  ['building', 'Hot-Dip Galvanized Mounting Structure', 'Custom-fabricated elevated or flush frames anchored directly into reinforced concrete footings. Designed to withstand wind speeds up to 150 km/h without piercing the terrace waterproofing slab.'],
  ['bolt', 'DC & AC Distribution Boxes (AJB / ACDB)', 'Includes DC surge protection devices (SPDs), DC miniature circuit breakers (MCBs), AC isolators, and fuses to isolate the installation during electrical surges or lightning strikes.'],
  ['meter', 'Bi-Directional Net Meter', 'Supplied and sealed by the local power distribution utility (MVVNL / DISCOM). Accurately records import (units pulled from grid) and export (surplus solar units supplied to grid).'],
  ['shield', 'Dedicated Chemical Earthing & Lightning Arrester', 'Three independent earthing pits (Inverter AC, DC arrays, and Lightning Arrester) with copper-bonded electrodes and bentonite compound to safely dissipate high voltages.'],
  ['doc', 'Smart Monitoring System', 'Integrated Wi-Fi or 4G data loggers transmit real-time generation metrics, daily power curves, and operational faults directly to your smartphone app.'],
];

const body = [
  C.pageHero({
    crumbs,
    eyebrow: 'Engineering & Technology',
    h1: 'Rooftop Solar Installation in Ayodhya',
    lead: 'A comprehensive technical breakdown of how a grid-tied rooftop solar system works on Indian flat terraces — from silicon PV modules and galvanized steel engineering to net metering and safety protection.',
    image: 'structure',
    imageAlt: 'Galvanized steel solar panel mounting structure anchored on terrace concrete footings',
    points: ['Heavy-duty hot-dip galvanized mounting', 'Dual-stage AC & DC surge protection', 'Approved bi-directional net metering'],
    quoteHref: '#quote',
  }),
  C.split({
    id: 'how-solar-works-diagram',
    eyebrow: 'System Anatomy',
    title: 'How Grid-Connected Rooftop Solar Works',
    html: `<p>A rooftop solar photovoltaic installation is an integrated electrical power plant operating quietly above your home or commercial premises. Here is the operational sequence:</p>
<ol class="numbered-process">
<li><strong>1. Solar Energy Capture:</strong> Sunlight strikes the silicon solar cells within the rooftop panels, knocking electrons free to generate Direct Current (DC) electricity.</li>
<li><strong>2. Inverter Power Conversion:</strong> DC power travels down fire-retardant solar cables into the solar inverter, which converts DC into single-phase (230V) or three-phase (415V) Alternating Current (AC) matching your home appliances.</li>
<li><strong>3. Household Priority Consumption:</strong> The converted AC power supplies active household loads first (fans, refrigerators, air conditioners, lights). If generation matches consumption, you draw zero electricity from the utility grid.</li>
<li><strong>4. Surplus Energy Export:</strong> Excess solar electricity automatically passes through the bi-directional net meter and feeds into the municipal power grid, earning energy credits.</li>
<li><strong>5. Night-Time Grid Supply:</strong> At night or during heavy monsoon cloud cover, your appliances seamlessly draw electricity from the grid just like any conventional connection.</li>
</ol>
<p>To learn what equipment selection means for your budget, review our <a href="/solar-panel-price-ayodhya/">solar panel price in Ayodhya breakdown</a>.</p>`,
    aside: `<div class="info-card">
<p class="info-card__title">The 5-Stage Power Flow</p>
<div class="flow-steps">
<div class="flow-step"><span>01</span> Sunlight on PV Modules</div>
<div class="flow-step"><span>02</span> DC to AC Inverter Conversion</div>
<div class="flow-step"><span>03</span> Daytime Home Load Consumption</div>
<div class="flow-step"><span>04</span> Surplus Export via Net Meter</div>
<div class="flow-step"><span>05</span> Night Grid Import &amp; Monthly Net Offsetting</div>
</div>
<p class="info-card__callout">Need assistance verifying roof suitability? Call <a href="${links.tel}">${config.business.phoneDisplay}</a> for a free site assessment.</p>
</div>`,
  }),
  `<section class="section section--tint" id="hardware-components" aria-labelledby="comp-title"><div class="container">
${C.sectionHead({
  eyebrow: 'System Anatomy',
  title: 'Key Rooftop Solar Components We Install',
  id: 'comp-title',
  lead: 'Every component in a rooftop plant contributes directly to its 25-year performance, physical safety, and compliance with Indian electricity regulations.',
})}
<ul class="feature-grid feature-grid--wide">
${componentsList.map(([ic, t, d]) => `<li class="feature feature--card">${icon(ic)}<h3>${t}</h3><p>${d}</p></li>`).join('')}
</ul>
</div></section>`,
  C.split({
    id: 'structural-engineering',
    eyebrow: 'Terrace Engineering',
    title: 'Structure Design: Protecting Your Roof & Maximizing Usable Area',
    html: `<p>In Ayodhya and surrounding North Indian districts, flat Reinforced Cement Concrete (RCC) roofs are standard. Most families use their terrace for winter sunbathing, drying grains or clothes, and accessing water tanks. A poorly planned solar installation can ruin your terrace utility.</p>
<h3>1. Elevated Super-Structures (Gazebo / High-Rise Mounting)</h3>
<p>We engineer raised galvanized frames with 7-foot to 9-foot clearance. This keeps the entire roof area fully walkable underneath, creating an open shaded pavilion while keeping the solar panels at an optimum tilt above water tanks and parapet walls.</p>
<h3>2. Ballasted Footing vs. Anchor Fasteners</h3>
<p>To safeguard your roof from water seepage, we cast pre-fabricated concrete anchor blocks (civil pedestals) or use chemical anchor bolts with waterproof sealing membranes. The roof slab’s structural waterproofing is never compromised.</p>
<h3>3. Wind Resistance Certification</h3>
<p>During North Indian squalls (aandhi) and monsoon thunderstorms, wind uplift forces on rooftop arrays can be massive. Our mounting structures use minimum 2.0 mm thickness pre-galvanized or hot-dip galvanized steel sections engineered to withstand local wind velocity zones up to 150 km/h.</p>`,
    aside: C.figure('structure', 'Heavy-gauge galvanized structure with securely bolted anchoring footings'),
    reverse: true,
  }),
  C.split({
    id: 'net-metering-integration',
    eyebrow: 'Utility Interconnection',
    title: 'Net Metering with Uttar Pradesh DISCOM (MVVNL)',
    html: `<p>Grid-connected rooftop solar relies on the regulatory net metering policy governed by the <strong>Uttar Pradesh Electricity Regulatory Commission (UPERC)</strong>.</p>
<p>Once your solar plant is erected, an official net-metering application is lodged with your local sub-divisional electricity office. An engineer from the DISCOM visits the site to test anti-islanding trip safety, inspect the plant layout, and swap your existing unidirectional meter with a tested bi-directional meter.</p>
<p>At the end of each billing cycle, your electricity statement reflects:</p>
<ul class="tick-list">
<li>Total units imported from the grid (Import kWh)</li>
<li>Total solar units exported into the grid (Export kWh)</li>
<li>Net billed units = Import minus Export</li>
<li>Any surplus generation rolls forward as credit to the next billing month</li>
</ul>
<p>Read our step-by-step article: <a href="/blog/net-metering-explained-ayodhya/">Net Metering Explained for Ayodhya Homeowners</a>.</p>`,
    aside: C.figure('inverter', 'Wall-mounted grid-tie inverter and electrical distribution enclosure'),
    reverse: false,
  }),
  `<section class="section section--tint" id="maintenance-overview" aria-labelledby="maint-title"><div class="container">
<div class="split">
<div class="split__main">
<p class="eyebrow">Longevity &amp; Care</p>
<h2 class="section-title" id="maint-title">Routine Cleaning &amp; Preventative Maintenance</h2>
<div class="prose">
<p>Solar panels have zero moving parts, making them extremely dependable. However, North Indian ambient dust, seasonal crop harvesting dust, and bird droppings form a thin surface film that can reduce energy yield by 10% to 25% if left uncleaned.</p>
<p>We design all rooftop arrays with dedicated walkways so you or our maintenance team can safely wash the panels every 15 to 20 days using plain water and a soft-bristle brush. Never use hard chemical detergents or abrasive scrubbers on tempered solar glass.</p>
<p>Need comprehensive maintenance or repair? Check our <a href="/solar-panel-maintenance/">Solar Maintenance and Cleaning Services</a>.</p>
</div>
</div>
<div class="split__aside">
${C.figure('cleaning', 'Regular gentle water washing maintains optimal light absorption')}
</div>
</div>
</div></section>`,
  C.faqBlock(pick('gridTie', 'netMetering', 'roof', 'shade', 'cloudy', 'maintenance', 'duration'), {
    title: 'Technical FAQs: Rooftop Solar Installation',
  }),
  C.relatedLinks([
    ['Solar panels for home', '/solar-panels-for-home/', 'Residential system sizing and appliance load calculation', 'home'],
    ['Ayodhya solar installation', '/solar-panel-installation-ayodhya/', 'Full local service scope and area coverage', 'pin'],
    ['Solar panel price guide', '/solar-panel-price-ayodhya/', 'Understand equipment costs and installation expenses', 'rupee'],
    ['PM Surya Ghar subsidy', '/solar-subsidy-ayodhya/', 'Central & UP state government subsidy procedures', 'doc'],
    ['Solar maintenance services', '/solar-panel-maintenance/', 'Professional panel washing and electrical inspection', 'wrench'],
    ['Book a site assessment', '/contact/', 'Speak with our solar engineers in Ayodhya', 'phone'],
  ]),
  C.finalCta({
    title: 'Ready to Plan Your Rooftop Solar Installation?',
    text: 'Schedule an on-site structural and electrical survey in Ayodhya or Faizabad. We evaluate your terrace orientation, shade profile, and electrical consumer connection.',
    city: 'Ayodhya',
  }),
].join('\n');

module.exports = {
  path: '/rooftop-solar-installation/',
  title: 'Rooftop Solar Installation in Ayodhya | Complete Technical Guide',
  description:
    'How rooftop solar installation works in Ayodhya: panels, inverters, elevated structures, net metering with UP DISCOM, protection systems and maintenance.',
  hasForm: true,
  breadcrumbs: crumbs,
  sitemap: { priority: '0.85', changefreq: 'monthly' },
  service: {
    name: 'Rooftop solar installation in Ayodhya',
    type: 'Rooftop Solar Installation',
    description: 'Engineering, supply, high-rise mounting structure fabrication, AC/DC electrical distribution and net meter integration for rooftop solar in Ayodhya and Faizabad.',
  },
  body,
};
