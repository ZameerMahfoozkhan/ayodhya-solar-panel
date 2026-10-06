const { icon, links, config } = require('../lib');
const C = require('../components');

const slug = 'common-mistakes-before-installing-solar';
const path = `/blog/${slug}/`;
const title = 'Common Mistakes to Avoid Before Installing Solar in Ayodhya';
const description = 'Avoid these 7 costly mistakes before installing rooftop solar in Ayodhya: mismatched loads, cheap mounting structures, non-DCR panels, and bad earthing.';

const crumbs = [
  { name: 'Blog', path: '/blog/' },
  { name: 'Mistakes to Avoid', path },
];

const body = [
  C.pageHero({
    crumbs,
    eyebrow: 'Consumer Protection Guide',
    h1: title,
    lead: 'A 25-year solar investment should protect your home, not create headaches. Here are the 7 most common and expensive mistakes homeowners in Ayodhya make — and how to avoid them.',
    image: 'structure',
    imageAlt: 'High quality galvanized solar mounting structure installed on a rooftop',
    points: ['Sanctioned load & DISCOM mismatches', 'Sub-standard structure steel dangers', 'DCR compliance and subsidy pitfalls'],
  }),
  `<article class="section article-body"><div class="container"><div class="prose prose--article">
<p class="article-meta">Published: October 2026 · Author: Technical Quality & Audit Team at ${config.siteName} · 7 min read</p>

<p>Installing rooftop solar is one of the most rewarding home improvements a property owner in Ayodhya can undertake. When done right, it generates clean, reliable electricity for over two decades. However, because solar is a long-term infrastructure project, cutting corners or making hasty decisions can lead to safety hazards, damaged roofs, or rejected government subsidies.</p>

<h2>Mistake 1: Choosing an Uncertified Installer solely Based on the Lowest Price</h2>
<p>Solar hardware is an open market. If one contractor quotes ₹1.40L for a 3 kW system while market averages hover around ₹1.80L–₹2.00L, where did that ₹40,000 difference come from? Almost always, it is cut from structural steel gauge, thin unrated wiring, cheap unbranded distribution switchgear, or reconditioned solar modules. A weak mounting structure can rip off your roof during a 100 km/h summer storm, causing catastrophic property damage.</p>

<h2>Mistake 2: Ignoring Your Sanctioned Load (kW) on Your Electricity Bill</h2>
<p>In Uttar Pradesh, you cannot connect a solar plant that exceeds the <strong>sanctioned electrical load</strong> listed on your electricity bill. If your sanctioned load is 2 kW and you install a 3 kW or 5 kW solar plant without applying for a sanctioned load enhancement first, the DISCOM portal will reject your net meter application. Always verify your current load with your utility provider before purchasing equipment.</p>

<h2>Mistake 3: Buying Non-DCR Panels and Expecting Government Subsidies</h2>
<p>Under the national <strong>PM Surya Ghar: Muft Bijli Yojana</strong> guidelines, residential subsidies are strictly contingent upon using <strong>Domestic Content Requirement (DCR)</strong> certified modules made with Indian-manufactured solar cells. If an installer supplies non-DCR imported panels, your system may generate power, but you will receive <strong>zero rupees in government subsidy</strong>.</p>

<h2>Mistake 4: Compromising on Chemical Earthing &amp; Lightning Protection</h2>
<p>Solar arrays sit on the highest point of your building, making them natural targets for lightning strikes and static build-up. Proper installation requires three independent, chemically conditioned earth pits (Inverter AC, DC arrays, and Lightning Arrester) with dedicated copper-bonded rods. Never let an installer cut costs by tying earthing wires to your terrace water pipe or building rebar.</p>

<h2>Mistake 5: Overlooking Maintenance Walkways and Rooftop Shade</h2>
<p>Cramming as many panels as possible onto a roof without leaving 2-foot maintenance corridors makes washing panels impossible. Similarly, failing to map winter shadow paths from water tanks or neighbouring mumty rooms can drag down generation by 20% to 35% during cooler months.</p>

<h2>Mistake 6: Piercing the Waterproof Terrace Slab with Improper Fasteners</h2>
<p>Drilling directly into your roof slab with cheap anchor bolts without applying industrial bituminous sealants or using pre-cast civil foundation blocks can lead to water seepage inside your top-floor bedrooms during the July–August monsoon season. Always insist on civil foundation pedestals or chemical anchor waterproofing membranes.</p>

<h2>Mistake 7: Assuming Grid-Tied Solar Works During Power Cuts</h2>
<p>As required by safety regulations, standard on-grid solar systems shut down during utility power cuts (anti-islanding). If your primary goal is backup power during blackouts, you must discuss a <a href="/blog/on-grid-vs-hybrid-solar-system/">hybrid battery system</a> before purchasing an on-grid inverter.</p>

<p>Want a transparent, safety-first assessment of your home? Explore our main <a href="/solar-panel-installation-ayodhya/">Ayodhya solar panel installation guide</a> or contact our engineers at Naka Bypass.</p>
</div></div></article>`,
  C.ctaBand({
    title: 'Avoid Costly Installation Mistakes',
    text: 'Schedule an on-site structural and electrical survey with our Ayodhya engineering team.',
    quoteHref: '/contact/#quote',
  }),
  C.relatedLinks([
    ['Solar panels for home', '/solar-panels-for-home/', 'System sizing and appliance load calculations', 'home'],
    ['Solar panel price guide', '/solar-panel-price-ayodhya/', 'Transparent pricing breakdown for Ayodhya', 'rupee'],
    ['PM Surya Ghar subsidy', '/solar-subsidy-ayodhya/', 'Central & UP state subsidy rules and eligibility', 'doc'],
    ['Rooftop solar technology', '/rooftop-solar-installation/', 'Detailed look at structures, inverters and net meters', 'panel'],
    ['Contact our team', '/contact/', 'Reach out on WhatsApp or phone for direct assistance', 'phone'],
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
