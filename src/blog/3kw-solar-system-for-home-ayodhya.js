const { icon, links, config } = require('../lib');
const C = require('../components');

const slug = '3kw-solar-system-for-home-ayodhya';
const path = `/blog/${slug}/`;
const title = '3kW Solar System for Home: Is It Right for You?';
const description = 'Everything you need to know about a 3kW solar system for your home in Ayodhya: generation (units/month), roof area, cost, max subsidy benefit and ROI.';

const crumbs = [
  { name: 'Blog', path: '/blog/' },
  { name: '3kW Solar System Guide', path },
];

const body = [
  C.pageHero({
    crumbs,
    eyebrow: 'Most Popular Capacity',
    h1: title,
    lead: 'A 3 kW rooftop solar system is the undisputed sweet spot for most middle-class family homes in Ayodhya. Learn monthly unit generation, roof space needs, and why it unlocks the maximum government subsidy.',
    image: 'hero',
    imageAlt: '3kW rooftop solar installation on a residential home in Ayodhya',
    points: ['Generates ~330 to 400 units monthly', 'Requires ~300 to 350 sq ft shadow-free terrace', 'Unlocks full ₹1.08 Lakh combined subsidy'],
  }),
  `<article class="section article-body"><div class="container"><div class="prose prose--article">
<p class="article-meta">Published: October 2026 · Author: Residential Technical Lead at ${config.siteName} · 6 min read</p>

<p>Across Ayodhya, Faizabad, and surrounding towns, nearly <strong>70% of residential rooftop solar inquiries</strong> are for a <strong>3 kW solar system</strong>. Why has 3 kW become the benchmark choice for Indian households?</p>

<h2>1. What Can a 3 kW Solar System Power?</h2>
<p>A 3 kW grid-tied solar plant generates an average of <strong>11 to 14 units (kWh) of electricity per day</strong> in Uttar Pradesh conditions. Over a typical month, this translates into approximately <strong>330 to 400 units of electricity</strong> (approx. 4,000 to 4,500 units annually).</p>
<p>This generation comfortably supports a typical 2BHK or 3BHK household running:</p>
<ul>
<li>1 to 2 inverter air conditioners (running 6–8 hours in peak summer).</li>
<li>1 double-door refrigerator (running 24/7).</li>
<li>1 washing machine (running several cycles per week).</li>
<li>1 water motor / submersible pump (0.5 to 1 HP, 30–45 mins daily).</li>
<li>5 to 7 ceiling fans, LED lights throughout the house, and Wi-Fi routers.</li>
</ul>

<h2>2. The Subsidy Sweet Spot: Up to ₹1.08 Lakh Combined Support</h2>
<p>The biggest financial reason 3 kW systems are so popular is government scheme design. Under the national <strong>PM Surya Ghar: Muft Bijli Yojana</strong>:</p>
<ul>
<li>Central Financial Assistance increases by ₹30,000 per kW up to 2 kW (₹60,000), and reaches <strong>₹78,000 for 3 kW</strong>.</li>
<li>The central subsidy <em>caps at ₹78,000</em>. That means installing a 4 kW or 5 kW residential system does not yield any additional central subsidy beyond the 3 kW rate.</li>
<li>The Uttar Pradesh government (UPNEDA) adds ₹15,000/kW up to a state cap of ₹30,000.</li>
</ul>
<p>Therefore, a 3 kW system achieves the <strong>maximum possible government financial assistance of ₹1,08,000</strong>. This maximizes your financial return per rupee invested.</p>

<h2>3. Roof Space Requirements</h2>
<p>Using modern 540W to 550W high-efficiency monocrystalline half-cut solar panels, a 3 kW plant requires just <strong>6 physical panels</strong>. This array needs roughly <strong>300 to 350 square feet of shadow-free terrace space</strong>.</p>
<p>If you have an 800 sq ft or 1,200 sq ft rooftop, a 3 kW system leaves more than 60% of your terrace completely untouched for other activities.</p>

<h2>4. Cost and Financial Return (ROI)</h2>
<p>A standard 3 kW on-grid installation in Ayodhya with a tier-1 solar inverter, pre-galvanized mounting structure, dual-layer AC/DC protection, and bi-directional net metering typically costs between <strong>₹1.75L and ₹2.15L</strong> (gross turnkey price depending on structure height and cable run).</p>
<p>After the government subsidy of up to <strong>₹1.08L</strong> is credited to your bank account, your net out-of-pocket expenditure drops to approximately <strong>₹67,000 to ₹1,07,000</strong>.</p>
<p>At an average utility tariff of ₹7 per unit, 360 units saved per month equal roughly <strong>₹2,500 monthly savings</strong> or <strong>₹30,000 annual savings</strong>. The system pays for itself completely in approximately <strong>2.5 to 3.5 years</strong>!</p>

<h2>5. Is 3 kW Right for Your Home?</h2>
<p>A 3 kW system is ideal if:</p>
<ul>
<li>Your average monthly electricity bill is between ₹2,000 and ₹4,000.</li>
<li>Your monthly electricity consumption falls between 250 and 450 units.</li>
<li>Your sanctioned domestic load is 3 kW or higher (or you are willing to apply for an easy load enhancement with your DISCOM).</li>
</ul>
<p>If your consumption exceeds 500 units monthly and you run 3 or more ACs continuously, you should evaluate a <a href="/blog/5kw-solar-system-for-home-ayodhya/">5 kW solar system</a> instead.</p>
</div></div></article>`,
  C.ctaBand({
    title: 'Get a 3 kW Solar Feasibility Assessment',
    text: 'Send us your electricity bill and terrace location. We will confirm your roof suitability and guide your subsidy application.',
    quoteHref: '/contact/#quote',
  }),
  C.relatedLinks([
    ['Solar panels for home', '/solar-panels-for-home/', 'Comprehensive home solar sizing and appliance breakdown', 'home'],
    ['5kW solar system guide', '/blog/5kw-solar-system-for-home-ayodhya/', 'Explore 5kW systems for higher consumption households', 'battery'],
    ['PM Surya Ghar subsidy', '/solar-subsidy-ayodhya/', 'Official subsidy eligibility, rules and application steps', 'doc'],
    ['Solar panel price guide', '/solar-panel-price-ayodhya/', 'Transparent pricing breakdown for Ayodhya', 'rupee'],
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
