const { icon, links, config } = require('../lib');
const C = require('../components');

const slug = 'how-solar-panels-work-indian-homes';
const path = `/blog/${slug}/`;
const title = 'How Solar Panels Work in Indian Homes: Complete Technical Guide';
const description = 'A plain-language guide to how rooftop solar panels generate power in Indian homes: photovoltaic effect, inverters, net metering, and monsoon performance.';

const crumbs = [
  { name: 'Blog', path: '/blog/' },
  { name: 'How Solar Panels Work', path },
];

const body = [
  C.pageHero({
    crumbs,
    eyebrow: 'Physics & Engineering Explained',
    h1: title,
    lead: 'How do flat pieces of tempered glass and silicon convert Uttar Pradesh sunshine into electricity that powers your ceiling fans, refrigerators, and air conditioners? A clear, plain-language engineering explainer.',
    image: 'structure',
    imageAlt: 'Detailed view of solar panels and mounting structure on an Indian terrace',
    points: ['Photovoltaic effect explained simply', 'DC to AC conversion and grid sync', 'Seasonal weather performance in North India'],
  }),
  `<article class="section article-body"><div class="container"><div class="prose prose--article">
<p class="article-meta">Published: October 2026 · Author: Engineering Education Team at ${config.siteName} · 7 min read</p>

<p>Solar energy is often described as magic: sunlight falls silently onto a metal-framed panel on your roof, and down below, your fans spin and your air conditioner hums without using power from the grid. But behind this seamless operation lies sophisticated semiconductor physics and electrical engineering.</p>

<h2>1. Step 1: The Photovoltaic (PV) Effect in Silicon Cells</h2>
<p>A solar panel is made of multiple interconnected <strong>photovoltaic solar cells</strong> manufactured from ultra-pure crystalline silicon. Each cell is treated with trace elements (like phosphorus and boron) to create a built-in electric field with a positive (p-type) and negative (n-type) semiconductor boundary.</p>
<p>When particles of sunlight (photons) strike the silicon wafer, they transfer their energy to electrons in the silicon atoms, knocking them free. Because of the internal electric field, these free electrons are forced to flow in a single direction, creating an electrical current. This phenomenon is known as the <strong>Photovoltaic Effect</strong>.</p>
<p>Because electrons flow in only one direction, solar panels generate <strong>Direct Current (DC) electricity</strong>.</p>

<h2>2. Step 2: Inverter Power Conversion (DC to AC)</h2>
<p>Your household appliances — from LED bulbs and ceiling fans to heavy 1.5-ton inverter air conditioners — do not run on direct current; they operate on 230-volt single-phase or 415-volt three-phase <strong>Alternating Current (AC)</strong> at a frequency of 50 Hertz (Hz).</p>
<p>DC electricity travels from your rooftop panels via specialized solar cables into your <strong>solar inverter</strong>. The inverter performs three critical functions:</p>
<ul>
<li><strong>DC to AC Inversion:</strong> Converts high-voltage direct current into clean alternating current with a pure sine wave matching the municipal utility grid.</li>
<li><strong>Maximum Power Point Tracking (MPPT):</strong> Continuously tunes electrical voltage and current thousands of times per second to extract maximum possible wattage under changing sun angles and temperature conditions.</li>
<li><strong>Grid Frequency Synchronization:</strong> Perfectly synchronizes the voltage, frequency, and phase angle of your solar power with the incoming power from MVVNL.</li>
</ul>

<h2>3. Step 3: Appliance Priority &amp; Net Metering</h2>
<p>Once AC electricity leaves the inverter, it enters your main distribution box:</p>
<ol>
<li><strong>Daytime Consumption:</strong> Electricity follows the path of least electrical resistance. If your air conditioner and refrigerator are running, they consume solar power first. If your solar plant generates 3 kW and your appliances only consume 2 kW, the remaining 1 kW automatically flows through your <strong>bi-directional net meter</strong> into the municipal power grid.</li>
<li><strong>Night-Time Operation:</strong> When the sun sets, solar generation stops. Your home draws electricity seamlessly from the grid just like a conventional house.</li>
</ol>

<h2>4. How Solar Panels Perform in North Indian Weather</h2>
<p>Ayodhya experiences dramatic seasonal shifts throughout the year:</p>
<ul>
<li><strong>March to May (Clear Skies, Peak Generation):</strong> Clear sunlight yields peak monthly units (approx. 4.5 to 5.2 kWh per kW daily). Note that extreme heat above 40°C causes slight efficiency loss (~0.35% per degree above 25°C), which is mitigated by raised mounting structures that allow cooling airflow beneath panels.</li>
<li><strong>July to August (Monsoon):</strong> Solar panels still produce electricity under clouds by capturing diffuse light, though output drops to 40%–60% of clear-day levels. Periodic rains naturally wash dust off the glass.</li>
<li><strong>December to January (Winter Fog):</strong> Morning fog reduces generation for a few hours. Once the fog clears by midday, cool crisp air actually boosts silicon semiconductor efficiency!</li>
</ul>

<p>Ready to see how a system fits on your roof? Explore our <a href="/rooftop-solar-installation/">rooftop solar installation guide</a> or check out our <a href="/solar-panels-for-home/">home solar systems page</a>.</p>
</div></div></article>`,
  C.ctaBand({
    title: 'Discover How Solar Can Power Your Home',
    text: 'Contact our local engineers at Naka Bypass for a straightforward consultation and bill analysis.',
    quoteHref: '/contact/#quote',
  }),
  C.relatedLinks([
    ['Rooftop solar installation', '/rooftop-solar-installation/', 'Technical details on structures, inverters and net meters', 'panel'],
    ['Net metering explained', '/blog/net-metering-explained-ayodhya/', 'How surplus solar units are credited against your bill', 'meter'],
    ['Solar panels for home', '/solar-panels-for-home/', 'System sizing and appliance load calculations', 'home'],
    ['Solar panel price guide', '/solar-panel-price-ayodhya/', 'Transparent pricing breakdown for Ayodhya', 'rupee'],
    ['PM Surya Ghar subsidy', '/solar-subsidy-ayodhya/', 'Central & UP state subsidy rules and eligibility', 'doc'],
  ]),
].join('\n');

module.exports = {
  path,
  title: `${title} | Ayodhya Solar Installation`,
  description,
  hasForm: false,
  breadcrumbs: crumbs,
  sitemap: { priority: '0.75', changefreq: 'monthly' },
  article: {
    headline: title,
    published: '2026-10-06',
    modified: '2026-10-06',
  },
  body,
};
