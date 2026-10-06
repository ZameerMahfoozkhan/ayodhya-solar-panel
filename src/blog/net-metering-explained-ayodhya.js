const { icon, links, config } = require('../lib');
const C = require('../components');

const slug = 'net-metering-explained-ayodhya';
const path = `/blog/${slug}/`;
const title = 'Net Metering Explained for Homeowners in Ayodhya';
const description = 'How net metering works in Ayodhya with UP DISCOM (MVVNL): bi-directional meters, monthly bill calculations, surplus unit rollover, and application steps.';

const crumbs = [
  { name: 'Blog', path: '/blog/' },
  { name: 'Net Metering Explained', path },
];

const body = [
  C.pageHero({
    crumbs,
    eyebrow: 'Utility & Grid Policy',
    h1: title,
    lead: 'How does a bi-directional net meter work in Uttar Pradesh? How are exported solar units adjusted against your monthly electricity bill, and what happens to surplus power?',
    image: 'inverter',
    imageAlt: 'Solar inverter and electrical distribution box setup in Ayodhya',
    points: ['UPERC net metering policy guidelines', 'Bi-directional meter operation explained', 'Practical bill calculation example'],
  }),
  `<article class="section article-body"><div class="container"><div class="prose prose--article">
<p class="article-meta">Published: October 2026 · Author: Utility Regulatory Desk at ${config.siteName} · 7 min read</p>

<p>If you install a grid-tied rooftop solar system, <strong>net metering</strong> is the regulatory mechanism that turns your sunshine into tangible cash savings on your monthly electricity bill.</p>
<p>Without net metering, any surplus solar power produced during the day would either be wasted or sent into the grid without compensation. Here is how net metering operates under the rules established by the <strong>Uttar Pradesh Electricity Regulatory Commission (UPERC)</strong> and implemented by <strong>Madhyanchal Vidyut Vitran Nigam Ltd (MVVNL)</strong> in Ayodhya and Faizabad.</p>

<h2>1. What is a Bi-Directional Net Meter?</h2>
<p>An ordinary household electricity meter is unidirectional — it only counts electricity flowing <em>from</em> the grid <em>into</em> your home. If a solar system tries to export power through an old mechanical or standard digital meter, the meter might either ignore the export or mistakenly charge you for exporting power!</p>
<p>Under net metering, your utility replaces your existing meter with an approved <strong>bi-directional smart meter</strong> that tracks electricity flowing in both directions:</p>
<ul>
<li><strong>Import (kWh):</strong> Units of electricity you draw from the DISCOM grid (at night, during rainy days, or whenever your appliances consume more power than your solar panels generate).</li>
<li><strong>Export (kWh):</strong> Surplus solar units your panels generate that your home does not immediately consume, which flow out into the neighborhood grid.</li>
</ul>

<h2>2. How Your Monthly Electricity Bill is Calculated</h2>
<p>At the end of your monthly billing cycle, your DISCOM meter reader takes three readings: Import Units, Export Units, and Net Units.</p>
<h3>Practical Example Scenario (3 kW System on an Ayodhya Home):</h3>
<ul>
<li>Total electricity imported from the grid at night: <strong>450 units</strong></li>
<li>Total excess solar electricity exported to the grid during the day: <strong>350 units</strong></li>
<li><strong>Net Billed Units:</strong> 450 − 350 = <strong>100 units</strong></li>
</ul>
<p>Instead of paying an electricity bill for 450 units (roughly ₹3,200+ under typical UP domestic slab rates), you are billed only for the 100 net units plus standard fixed meter charges, slashing your bill by over 70%!</p>

<h2>3. What Happens If You Export More Than You Import?</h2>
<p>During pleasant spring months (March and April) or autumn (October), your solar panels produce peak energy while your air conditioners and fans run minimally. What happens if you export 400 units but only import 250 units?</p>
<p>Under UPERC regulations, <strong>net surplus solar energy (150 units in this scenario) does not vanish</strong>. It is carried forward into your utility account as an energy credit. In subsequent peak summer months (May and June) when your air conditioners consume extra power, those accumulated credits are automatically deducted from your statement!</p>
<p>At the end of the regulatory settlement year (usually March 31st), any remaining net surplus energy is settled as per applicable commission tariff guidelines.</p>

<h2>4. The Net Metering Application Steps in Ayodhya</h2>
<ol>
<li><strong>Application Submission:</strong> Filed online via the PM Surya Ghar / UP DISCOM rooftop solar portal along with your sanctioned load and consumer number.</li>
<li><strong>Technical Feasibility:</strong> The local junior engineer (JE) checks distribution transformer capacity (regulations allow solar connections up to the sanctioned transformer limit).</li>
<li><strong>Plant Commissioning &amp; Testing:</strong> After installation, our team submits the work completion report. A DISCOM inspector verifies the anti-islanding switch and earth resistance.</li>
<li><strong>Meter Installation &amp; Sealing:</strong> The DISCOM tests and installs the official bi-directional meter with security seals, issuing your final commissioning certificate.</li>
</ol>
<p>Want to understand full technical hardware requirements? Read our <a href="/rooftop-solar-installation/">rooftop solar installation guide</a> or explore our <a href="/solar-subsidy-ayodhya/">PM Surya Ghar subsidy page</a>.</p>
</div></div></article>`,
  C.ctaBand({
    title: 'Need Help Setting Up Net Metering?',
    text: 'Our team handles the end-to-end DISCOM net metering liaison for your home or business in Ayodhya.',
    quoteHref: '/contact/#quote',
  }),
  C.relatedLinks([
    ['Rooftop solar installation', '/rooftop-solar-installation/', 'Detailed look at structures, inverters and net meters', 'panel'],
    ['PM Surya Ghar subsidy', '/solar-subsidy-ayodhya/', 'Central & UP state subsidy rules and eligibility', 'doc'],
    ['Solar panels for home', '/solar-panels-for-home/', 'System sizing and appliance load calculations', 'home'],
    ['On-grid vs hybrid solar', '/blog/on-grid-vs-hybrid-solar-system/', 'Compare grid-tied net metering with battery storage', 'bolt'],
    ['Solar panel price guide', '/solar-panel-price-ayodhya/', 'Transparent pricing breakdown for Ayodhya', 'rupee'],
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
