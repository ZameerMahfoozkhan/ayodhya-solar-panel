const { icon, links, config } = require('../lib');
const C = require('../components');

const slug = 'roof-space-required-rooftop-solar';
const path = `/blog/${slug}/`;
const title = 'How Much Roof Space Is Required for Rooftop Solar?';
const description = 'Accurate roof space requirements for rooftop solar in Ayodhya: UPNEDA guidelines, sq ft per kW, shadow mapping, and elevated structure solutions.';

const crumbs = [
  { name: 'Blog', path: '/blog/' },
  { name: 'Roof Space Requirements', path },
];

const body = [
  C.pageHero({
    crumbs,
    eyebrow: 'Terrace Assessment Guide',
    h1: title,
    lead: 'How much shadow-free terrace area does your home actually need for a 1 kW, 2 kW, 3 kW, or 5 kW solar plant? Learn official UPNEDA benchmarks, walkway planning, and how to save terrace space.',
    image: 'structure',
    imageAlt: 'Elevated solar panel structure anchored on an Indian terrace',
    points: ['Official 10 m² (~108 sq ft) per 1 kWp benchmark', 'Shadow-mapping around water tanks and mumty', 'Elevated structures to keep terrace walkable'],
  }),
  `<article class="section article-body"><div class="container"><div class="prose prose--article">
<p class="article-meta">Published: October 2026 · Author: Civil & Structural Engineering Desk at ${config.siteName} · 6 min read</p>

<p>One of the initial physical questions every homeowner in Ayodhya asks before committing to solar is: <em>“Do I have enough space on my roof, and will installing solar panels ruin my terrace for family use?”</em></p>
<p>In North India, a terrace is not just a roof — it is living space. It is where families dry laundry, make winter pickles, sunbathe in December, and host evening gatherings. Sizing your roof space correctly ensures you harvest maximum clean energy without losing terrace utility.</p>

<h2>1. The Official Benchmark: 10 Square Metres per 1 kWp</h2>
<p>According to the <strong>Uttar Pradesh New and Renewable Energy Development Agency (UPNEDA)</strong>, a standard reference guideline is:</p>
<p class="highlight">Approximately 10 square metres (~108 sq ft) of shadow-free rooftop area is required per 1 kWp of solar capacity.</p>
<p>However, actual space requirements vary depending on module wattage, panel dimensions, and spacing between rows to avoid self-shading.</p>

<div class="table-wrap">
<table class="subsidy-table">
<thead>
<tr><th>System Capacity</th><th>Physical Panel Count</th><th>Approx. Panel Area</th><th>Recommended Shadow-Free Area</th></tr>
</thead>
<tbody>
<tr><td><strong>1 kW</strong></td><td>2 panels (540W–550W)</td><td>~54 sq ft</td><td><strong>~100 – 120 sq ft</strong></td></tr>
<tr><td><strong>2 kW</strong></td><td>4 panels</td><td>~108 sq ft</td><td><strong>~200 – 240 sq ft</strong></td></tr>
<tr><td><strong>3 kW</strong></td><td>5 to 6 panels</td><td>~162 sq ft</td><td><strong>~300 – 350 sq ft</strong></td></tr>
<tr><td><strong>5 kW</strong></td><td>9 to 10 panels</td><td>~270 sq ft</td><td><strong>~500 – 550 sq ft</strong></td></tr>
<tr><td><strong>10 kW</strong></td><td>18 to 20 panels</td><td>~540 sq ft</td><td><strong>~1,000 – 1,100 sq ft</strong></td></tr>
</tbody>
</table>
</div>

<h2>2. Why Total Roof Area is Different from "Shadow-Free Area"</h2>
<p>Having a 1,000 sq ft terrace does not mean all 1,000 sq ft is usable for solar. Solar modules must receive unobstructed sunlight between <strong>9:00 AM and 4:00 PM</strong> throughout the entire year.</p>
<p>During an on-site survey in Ayodhya, we map:</p>
<ul>
<li><strong>Staircase Towers (Mumty):</strong> These cast long shadows toward the north and west during morning and late afternoon hours. Panels should be positioned south of the mumty.</li>
<li><strong>Overhead Water Tanks:</strong> Often elevated on brick stilts, water tanks cast sharp shadows that can compromise adjoining solar strings.</li>
<li><strong>Parapet Walls:</strong> A 3-to-4 foot boundary parapet wall casts a shadow along the southern and eastern edges in winter when the sun sits low in the sky.</li>
<li><strong>Maintenance Walkways:</strong> A 1.5-to-2 foot perimeter corridor must be maintained around panels so you can safely wash the glass with water.</li>
</ul>

<h2>3. The Elevated Gazebo Solution: Keep 100% of Your Terrace</h2>
<p>If you don’t want solar panels taking up the floor of your roof, the most elegant engineering solution is an <strong>elevated galvanized structure</strong> (often called a solar gazebo or high-rise canopy structure):</p>
<ul>
<li>The steel columns are raised <strong>7 to 9 feet above the roof floor</strong>.</li>
<li>The solar panels form a continuous, weather-resistant shade canopy.</li>
<li>The entire terrace below remains completely open, walkable, and cool (the panels act as a thermal barrier, significantly reducing roof heat transfer into the top-floor rooms below during May and June).</li>
<li>Panels sit high above parapet walls and water tanks, completely avoiding low-level shadows.</li>
</ul>

<h2>4. What If Your Roof Is Sloped or Made of Sheet Metal?</h2>
<p>While flat concrete slabs are most common in Ayodhya, we also engineer solutions for:</p>
<ul>
<li><strong>Industrial Sheds &amp; PEB Metal Roofs:</strong> Installed using standing-seam clamps without drilling holes through the metal sheets.</li>
<li><strong>Slanted Tiled Roofs:</strong> Secured using specialty roof-hook brackets that bolt securely into purlins.</li>
</ul>
<p>Curious about sizing for your house? Try our <a href="/#calculator">interactive solar calculator</a> or schedule a free physical inspection via our <a href="/contact/">contact page</a>.</p>
</div></div></article>`,
  C.ctaBand({
    title: 'Book a Free On-Site Roof Survey',
    text: 'Our technical team visits your terrace in Ayodhya or Faizabad to measure dimensions, map sun angles, and design a custom layout.',
    quoteHref: '/contact/#quote',
  }),
  C.relatedLinks([
    ['Rooftop solar installation', '/rooftop-solar-installation/', 'Technical details on structures, inverters and net meters', 'panel'],
    ['Solar panels for home', '/solar-panels-for-home/', 'System sizing and appliance load calculations', 'home'],
    ['3kW solar system guide', '/blog/3kw-solar-system-for-home-ayodhya/', 'Everything you need to know about 3kW systems', 'bolt'],
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
