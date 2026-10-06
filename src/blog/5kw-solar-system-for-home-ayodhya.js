const { icon, links, config } = require('../lib');
const C = require('../components');

const slug = '5kw-solar-system-for-home-ayodhya';
const path = `/blog/${slug}/`;
const title = '5kW Solar System for Home: Who Should Consider It?';
const description = 'Complete guide to a 5kW solar system for homes in Ayodhya: generation (550–650 units/month), costs, 3BHK/4BHK appliances, roof space, and subsidy economics.';

const crumbs = [
  { name: 'Blog', path: '/blog/' },
  { name: '5kW Solar System Guide', path },
];

const body = [
  C.pageHero({
    crumbs,
    eyebrow: 'High-Consumption Homes',
    h1: title,
    lead: 'A 5 kW rooftop solar plant is the ideal solution for larger homes, joint family residences, and 3BHK/4BHK properties in Ayodhya with high summer electricity bills. Here is who should consider it.',
    image: 'home',
    imageAlt: 'Large residential house in Uttar Pradesh with rooftop solar array',
    points: ['Generates ~550 to 675 units monthly', 'Runs multiple ACs and high domestic loads', 'Turnkey cost and subsidy economics'],
  }),
  `<article class="section article-body"><div class="container"><div class="prose prose--article">
<p class="article-meta">Published: October 2026 · Author: Residential Engineering Desk at ${config.siteName} · 6 min read</p>

<p>While a 3 kW system fits the majority of standard 2BHK and 3BHK households, families with higher electricity bills often find themselves asking: <em>“Should we install 3 kW or upgrade directly to a 5 kW solar plant?”</em></p>
<p>If your summer electricity bills consistently reach ₹4,500 to ₹8,000+ per month, a 3 kW plant will only offset part of your consumption, leaving you in higher slab billing rates. Here is when a 5 kW installation becomes the smarter investment.</p>

<h2>1. Energy Generation: 550 to 675 Units per Month</h2>
<p>In Uttar Pradesh solar irradiance conditions, a 5 kW rooftop solar system generates an average of <strong>18 to 23 units (kWh) daily</strong>, amounting to roughly <strong>550 to 675 units per month</strong> (approx. 6,500 to 7,500 units annually).</p>
<p>This capacity comfortably covers heavy domestic appliances running concurrently:</p>
<ul>
<li><strong>2 to 3 Air Conditioners (1.5 Ton Inverter ACs)</strong> running during hot afternoons and through the night.</li>
<li>1 Submersible water pump (1 HP to 1.5 HP) or open-well pump.</li>
<li>2 Refrigerators (e.g. kitchen double-door plus deep freezer).</li>
<li>Washing machine, dishwashers, microwave ovens, induction cooktops.</li>
<li>Multiple TVs, desktop computers, ceiling fans, and LED lighting throughout multi-storey homes.</li>
</ul>

<h2>2. Space Requirements: ~500 to 550 Sq Ft</h2>
<p>Using modern 540W to 550W monocrystalline half-cut solar panels, a 5 kW system requires <strong>9 to 10 panels</strong>. This array occupies approximately <strong>500 to 550 square feet of shadow-free terrace area</strong>.</p>
<p>On larger independent houses or villas in Civil Lines, Deokali, or Faizabad Road, this easily fits on the main terrace slab. If you wish to preserve the floor space, an elevated gazebo structure provides complete walking access underneath.</p>

<h2>3. Subsidy Economics for a 5 kW System</h2>
<p>Homeowners should understand how government subsidies apply to systems above 3 kW:</p>
<ul>
<li>Under the national <strong>PM Surya Ghar: Muft Bijli Yojana</strong>, central assistance is calculated as ₹30,000 for 1 kW, ₹60,000 for 2 kW, and ₹78,000 for 3 kW. <strong>The central subsidy is capped at ₹78,000 for all systems of 3 kW or higher.</strong></li>
<li>The Uttar Pradesh state subsidy (UPNEDA) adds ₹15,000/kW up to a state cap of ₹30,000.</li>
<li>Therefore, for a 5 kW system, you still receive the maximum combined residential subsidy of <strong>₹1,08,000</strong>.</li>
</ul>
<p>Although the subsidy does not increase beyond ₹1.08L, your <strong>levelized cost of electricity drops significantly</strong> because the per-watt cost of inverters, mounting structures, and cabling is lower on larger systems.</p>

<h2>4. Financial Outlay and Payback Period</h2>
<p>A turnkey 5 kW on-grid installation in Ayodhya typically ranges between <strong>₹2.80L and ₹3.40L</strong> (gross price including panels, tier-1 inverter, galvanized structure, net metering, and dual-layer AC/DC protection boxes).</p>
<p>After deducting the ₹1.08L subsidy, your net effective investment is roughly <strong>₹1.72L to ₹2.32L</strong>.</p>
<p>Generating ~600 units per month saves approximately <strong>₹4,200 to ₹4,800 monthly</strong> on your electricity bill (or ~₹50,000 to ₹58,000 annually). This achieves complete capital payback within <strong>3.5 to 4 years</strong>, followed by over 20 years of clean, practically free electricity.</p>

<h2>5. Who Should Definitely Choose 5 kW?</h2>
<ol>
<li><strong>Joint Families:</strong> Homes with two or three generations living together with multiple bedrooms and separate living spaces.</li>
<li><strong>Families Planning Electric Vehicles (EVs):</strong> If you plan to charge a 4-wheeler or 2-wheeler EV at home, the extra daytime generation can fuel your vehicle at zero cost.</li>
<li><strong>High Sanctioned Load:</strong> Homes with a sanctioned load of 5 kW or higher.</li>
</ol>
<p>Learn more about home capacities on our <a href="/solar-panels-for-home/">solar panels for home</a> page or model your numbers on our <a href="/#calculator">solar calculator</a>.</p>
</div></div></article>`,
  C.ctaBand({
    title: 'Evaluate a 5 kW System for Your Residence',
    text: 'Send us your electricity bill to check if 5 kW is the right match for your sanctioned load and roof layout.',
    quoteHref: '/contact/#quote',
  }),
  C.relatedLinks([
    ['Solar panels for home', '/solar-panels-for-home/', 'System sizing and appliance load calculations', 'home'],
    ['3kW solar system guide', '/blog/3kw-solar-system-for-home-ayodhya/', 'Compare with the 3kW residential system', 'bolt'],
    ['Solar panel price guide', '/solar-panel-price-ayodhya/', 'Transparent equipment and installation economics', 'rupee'],
    ['PM Surya Ghar subsidy', '/solar-subsidy-ayodhya/', 'Central & UP state subsidy rules and eligibility', 'doc'],
    ['Rooftop solar technology', '/rooftop-solar-installation/', 'Detailed look at structures, inverters and net metering', 'panel'],
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
