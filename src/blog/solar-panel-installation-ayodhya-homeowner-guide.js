const { icon, links, config } = require('../lib');
const C = require('../components');

const slug = 'solar-panel-installation-ayodhya-homeowner-guide';
const path = `/blog/${slug}/`;
const title = 'Solar Panel Installation in Ayodhya: Complete Homeowner Guide';
const description = 'A complete homeowner guide to installing rooftop solar panels in Ayodhya: system sizing, roof checks, costs, PM Surya Ghar subsidy and net metering.';

const crumbs = [
  { name: 'Blog', path: '/blog/' },
  { name: 'Homeowner Solar Guide', path },
];

const body = [
  C.pageHero({
    crumbs,
    eyebrow: 'Comprehensive Homeowner Guide',
    h1: title,
    lead: 'Everything an Ayodhya homeowner needs to know before installing rooftop solar: from calculating daily electricity units and checking terrace shadow to applying for PM Surya Ghar subsidies and setting up DISCOM net metering.',
    image: 'home',
    imageAlt: 'Rooftop solar installation on a residential home in Ayodhya',
    points: ['Practical step-by-step roadmap', 'Local Ayodhya weather & roof considerations', 'Subsidy & net metering checklist'],
  }),
  `<article class="section article-body"><div class="container"><div class="prose prose--article">
<p class="article-meta">Published: October 2026 · Author: Engineering Team at ${config.siteName} · 8 min read</p>

<p>With Ayodhya's ongoing transformation into Uttar Pradesh's flagship <strong>Model Solar City</strong>, rooftop solar has transitioned from a niche curiosity to a mainstream household investment. Rising grid tariffs and high summer electricity bills driven by air conditioning have prompted hundreds of families across Civil Lines, Deokali, Naka, and Faizabad Road to consider rooftop solar panels.</p>

<p>Yet, for most homeowners, the installation process can seem complicated. Between technical jargon (kW, MPPT, DCR, bifacial, net-metering) and navigating government portals, it is easy to feel overwhelmed. This guide breaks down the entire journey into clear, practical decisions.</p>

<h2>1. Assessing Your Home’s Electricity Consumption</h2>
<p>The first rule of rooftop solar is: <strong>never size a system based on your roof size or number of bedrooms. Always size based on your electricity bills.</strong></p>
<p>Look at your electricity statements from the past 12 months. Because Ayodhya experiences severe temperature swings — from intense 44°C+ summers to cold winter foggy spells — your consumption changes throughout the year:</p>
<ul>
<li><strong>Summer Peak (April – August):</strong> High consumption driven by air conditioners, water coolers, and continuous refrigeration.</li>
<li><strong>Winter &amp; Monsoon (September – March):</strong> Moderate consumption primarily for lighting, television, fans, and geysers.</li>
</ul>
<p>Take your annual total units consumed and divide by 12 to find your average monthly consumption. For example, if you consume 360 units per month, a <strong>3 kW solar system</strong> generating approximately 360 units/month will offset nearly 100% of your annual electricity bill.</p>
<p>You can quickly model your home using our <a href="/#calculator">interactive solar calculator</a>.</p>

<h2>2. Inspecting Your Rooftop: Orientation, Space &amp; Shade</h2>
<p>Not every roof in Ayodhya is immediately ready for solar. Here is what our technicians examine during an on-site survey:</p>
<h3>Shadow Mapping</h3>
<p>In North India, solar panels must face <strong>South</strong> at an angle of roughly 22° to 27°. Shade falling on even 10% of a solar panel array can drag down the generation of the entire connected string. Watch out for:</p>
<ul>
<li>Overhead PVC water tanks (often positioned on elevated brick columns).</li>
<li>Staircase rooms (mumty) casting afternoon shadows.</li>
<li>Neighbouring taller houses or mature neem/peepal trees.</li>
</ul>
<h3>Space Requirements</h3>
<p>As per official UPNEDA benchmarks, expect to allocate approximately <strong>10 square metres (approx. 108 sq ft) of shadow-free terrace area per 1 kWp</strong>. A standard 3 kW system therefore requires about 325 sq ft of clear space. If you wish to preserve the floor of your terrace for daily family use, an elevated galvanized steel structure (7–9 ft clearance) can be fabricated.</p>

<h2>3. Selecting the Right System Type: On-Grid vs. Hybrid</h2>
<p>For 90% of urban Ayodhya homeowners, a <strong>Grid-Tied (On-Grid) system</strong> is the most sensible choice. It is the most economical, requires zero maintenance batteries, and is the <em>only system type eligible for the PM Surya Ghar government subsidy</em>.</p>
<p>If your neighbourhood experiences frequent long power outages and you require energy independence, a <strong>Hybrid System</strong> with lithium-ion battery storage provides backup during grid blackouts. Learn more in our comparison: <a href="/blog/on-grid-vs-hybrid-solar-system/">On-Grid vs. Hybrid Solar Systems</a>.</p>

<h2>4. Understanding Costs and the PM Surya Ghar Subsidy</h2>
<p>Under the national <strong>PM Surya Ghar: Muft Bijli Yojana</strong> and UPNEDA state guidelines, residential consumers in Uttar Pradesh can receive substantial financial assistance:</p>
<ul>
<li><strong>1 kW System:</strong> ₹30,000 Central + ₹15,000 UP State = <strong>₹45,000 Total</strong></li>
<li><strong>2 kW System:</strong> ₹60,000 Central + ₹30,000 UP State = <strong>₹90,000 Total</strong></li>
<li><strong>3 kW System:</strong> ₹78,000 Central + ₹30,000 UP State = <strong>₹1,08,000 Total</strong></li>
<li><strong>Systems above 3 kW:</strong> Capped at ₹1,08,000 combined subsidy for residential connections.</li>
</ul>
<p><em>Note: Subsidies are granted by the government and credited directly into your bank account after post-commissioning verification.</em> Read full details in our <a href="/solar-subsidy-ayodhya/">Ayodhya solar subsidy guide</a>.</p>

<h2>5. Net Metering with DISCOM (MVVNL)</h2>
<p>A solar installation is incomplete without net metering. Your local electricity distribution utility replaces your unidirectional energy meter with a tested bi-directional meter. At the end of each billing cycle, your exported solar units are subtracted from imported grid units, dramatically lowering your bill. See our full explainer: <a href="/blog/net-metering-explained-ayodhya/">Net Metering in Ayodhya</a>.</p>

<h2>6. Next Steps for Homeowners</h2>
<p>Ready to evaluate solar for your house? Start with these simple steps:</p>
<ol>
<li>Locate your most recent electricity bill.</li>
<li>Check that the sanctioned load (kW) matches or exceeds your desired solar capacity.</li>
<li>Reach out to our local team at Naka Bypass for an in-person structural and electrical inspection.</li>
</ol>
<p>Read more about our dedicated <a href="/solar-panel-installation-ayodhya/">solar panel installation in Ayodhya</a> or explore <a href="/solar-panels-for-home/">solar panels for home</a>.</p>
</div></div></article>`,
  C.ctaBand({
    title: 'Ready for a Professional Solar Assessment?',
    text: 'Share your electricity bill with our engineering desk at Naka Bypass. We provide a transparent proposal and subsidy walkthrough.',
    quoteHref: '/contact/#quote',
  }),
  C.relatedLinks([
    ['Solar panels for home', '/solar-panels-for-home/', 'System sizing and 2BHK/3BHK house examples', 'home'],
    ['PM Surya Ghar subsidy guide', '/solar-subsidy-ayodhya/', 'Official subsidy eligibility, rules and application steps', 'doc'],
    ['Solar panel price guide', '/solar-panel-price-ayodhya/', 'Understand equipment and installation costs', 'rupee'],
    ['Rooftop solar technology', '/rooftop-solar-installation/', 'Detailed look at structures, inverters and net metering', 'panel'],
    ['Contact our team', '/contact/', 'Call or message our local office on WhatsApp', 'phone'],
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
