const { icon, links, config } = require('../lib');
const C = require('../components');

const slug = 'solar-panels-2bhk-3bhk-home-requirement';
const path = `/blog/${slug}/`;
const title = 'How Many Solar Panels Does a 2BHK or 3BHK Home Need?';
const description = 'Calculate how many solar panels you need for a 2BHK or 3BHK home in Ayodhya: panel wattages, monthly units, roof space, and system sizing examples.';

const crumbs = [
  { name: 'Blog', path: '/blog/' },
  { name: '2BHK & 3BHK Solar Sizing', path },
];

const body = [
  C.pageHero({
    crumbs,
    eyebrow: 'Residential Capacity Planning',
    h1: title,
    lead: 'How many solar panels are needed for a typical 2BHK or 3BHK house in Ayodhya? Sizing rules, modern module wattages, daily appliance loads, and roof space calculations.',
    image: 'home',
    imageAlt: 'Independent house in Ayodhya with solar panels on rooftop frame',
    points: ['Panel count by module wattage (540W–590W)', '2BHK vs 3BHK consumption scenarios', 'Roof area calculation guidelines'],
  }),
  `<article class="section article-body"><div class="container"><div class="prose prose--article">
<p class="article-meta">Published: October 2026 · Author: Residential Design Team at ${config.siteName} · 7 min read</p>

<p>One of the most frequent questions we receive from homeowners in Ayodhya and Faizabad is: <em>“I live in a 3BHK house. How many solar panels do I need to install?”</em></p>
<p>While the number of bedrooms gives an initial clue regarding family size, the number of solar panels required depends strictly on two factors: <strong>your actual monthly electricity consumption (kWh units)</strong> and the <strong>rated wattage of each individual panel</strong>.</p>

<h2>1. Modern Solar Panel Wattages (540W to 590W Modules)</h2>
<p>In older installations, installers used small 250W or 330W polycrystalline panels. Today, high-efficiency monocrystalline PERC and TOPCon modules rated between <strong>540W and 590W each</strong> are the industry standard for residential projects.</p>
<p>Because each panel produces significantly more power, you need far fewer physical panels on your roof today than you did a few years ago:</p>
<ul>
<li><strong>1 kW System (1,000 Watts):</strong> Approximately <strong>2 panels</strong> (using 540W–550W modules).</li>
<li><strong>2 kW System (2,000 Watts):</strong> Approximately <strong>4 panels</strong>.</li>
<li><strong>3 kW System (3,000 Watts):</strong> Approximately <strong>5 to 6 panels</strong>.</li>
<li><strong>5 kW System (5,000 Watts):</strong> Approximately <strong>9 to 10 panels</strong>.</li>
</ul>

<h2>2. Sizing for a Typical 2BHK House in Ayodhya</h2>
<p>A typical 2BHK house in Ayodhya with 3 to 4 family members generally experiences the following consumption patterns:</p>
<ul>
<li><strong>Common Appliances:</strong> 1 inverter AC (1.5 ton) used for 6–8 hours in peak summer, 1 refrigerator, 1 television, 4–5 ceiling fans, LED lighting, washing machine, and an occasional water pump run.</li>
<li><strong>Monthly Electricity Consumption:</strong> Approx. <strong>180 to 300 units</strong>.</li>
<li><strong>Recommended Solar Capacity:</strong> <strong>2 kW to 3 kW</strong>.</li>
<li><strong>Panels Needed:</strong> 4 to 6 monocrystalline panels.</li>
<li><strong>Required Shadow-Free Roof Space:</strong> Roughly 220 to 325 sq ft.</li>
</ul>
<p>A 2 kW system generates roughly 220–270 units per month, offsetting the majority of non-AC months and heavily reducing high summer bills.</p>

<h2>3. Sizing for a Typical 3BHK House in Ayodhya</h2>
<p>A 3BHK home with 4 to 6 family members running modern household appliances:</p>
<ul>
<li><strong>Common Appliances:</strong> 2 inverter ACs (frequently running concurrently on hot summer nights), large double-door refrigerator, water motor pump (1 HP), multiple TVs, microwave, geyser in winter, and desktop computers.</li>
<li><strong>Monthly Electricity Consumption:</strong> Approx. <strong>350 to 550 units</strong>.</li>
<li><strong>Recommended Solar Capacity:</strong> <strong>3 kW to 5 kW</strong>.</li>
<li><strong>Panels Needed:</strong> 6 to 10 panels.</li>
<li><strong>Required Shadow-Free Roof Space:</strong> Roughly 325 to 550 sq ft.</li>
</ul>
<p>A <strong>3 kW system</strong> is the most popular configuration across Ayodhya because it matches the maximum central subsidy threshold under PM Surya Ghar (₹78,000 central + ₹30,000 UP = ₹1.08L total support).</p>

<h2>4. What If Your Roof Is Compact?</h2>
<p>If your available terrace area is constrained by mumty rooms, laundry areas, or water tanks, you don't necessarily have to abandon solar:</p>
<ol>
<li><strong>Opt for Higher Efficiency TOPCon Panels:</strong> TOPCon panels generate more watts per square foot than older panel designs.</li>
<li><strong>Use an Elevated Structure:</strong> Elevating the mounting frame 7–9 feet above the roof keeps the entire floor area open for household chores and family leisure while capturing maximum sunlight above parapet shadows.</li>
</ol>
<p>Want an instant estimate for your specific bill? Use our <a href="/#calculator">interactive solar calculator</a> or explore our dedicated <a href="/solar-panels-for-home/">solar panels for home</a> guide.</p>
</div></div></article>`,
  C.ctaBand({
    title: 'Calculate Solar Capacity for Your Home',
    text: 'Send us your electricity bill units or a photo of your roof. Our local team will calculate your ideal panel count.',
    quoteHref: '/contact/#quote',
  }),
  C.relatedLinks([
    ['Solar panels for home', '/solar-panels-for-home/', 'In-depth home solar sizing and appliance breakdown', 'home'],
    ['3kW solar system guide', '/blog/3kw-solar-system-for-home-ayodhya/', 'Why 3kW is the most popular choice for Ayodhya homes', 'bolt'],
    ['5kW solar system guide', '/blog/5kw-solar-system-for-home-ayodhya/', 'Capacity planning for high-consumption homes', 'battery'],
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
