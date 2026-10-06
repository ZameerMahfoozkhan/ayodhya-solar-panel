const { icon, links, config } = require('../lib');
const C = require('../components');
const { pick } = require('../faq');

const crumbs = [{ name: 'Solar Panels for Home in Ayodhya', path: '/solar-panels-for-home/' }];

const body = [
  C.pageHero({
    crumbs,
    eyebrow: 'Residential Rooftop Solar',
    h1: 'Solar Panels for Home in Ayodhya',
    lead: 'Reduce domestic electricity bills with a customized residential rooftop solar system. From 1 kW to 10 kW configurations tailored for independent houses, villas, and family homes in Ayodhya and Faizabad.',
    image: 'home',
    imageAlt: 'Residential home in Ayodhya with rooftop solar system on a raised frame',
    points: ['Sized for your 2BHK, 3BHK or 4BHK consumption', 'On-grid, hybrid & battery configurations', 'Eligible for up to ₹1.08L combined subsidy'],
    quoteHref: '#quote',
  }),
  C.split({
    id: 'sizing-fundamentals',
    eyebrow: 'System Sizing Guide',
    title: 'How to Choose the Right Solar System for Your Home',
    html: `<p>A common mistake is sizing a solar plant based on the physical size of the building or the count of bedrooms. The only accurate starting point is your <strong>actual electricity consumption</strong> recorded on your electricity bills across summer, monsoon, and winter.</p>
<p>In Uttar Pradesh, domestic grid tariffs are slab-based. High electricity bills occur during summer months when air conditioning, refrigeration, and evaporative air coolers run concurrently. An appropriately designed on-grid system generates maximum power during daylight peaks, offsetting units when your consumption is highest.</p>
<h3>Key Assessment Factors:</h3>
<ul class="tick-list">
<li><strong>Sanctioned Load (kW):</strong> Your residential solar plant capacity cannot exceed your sanctioned load under local DISCOM regulations without applying for a load enhancement.</li>
<li><strong>Roof Orientation &amp; Tilt:</strong> In North India, solar panels should ideally face true South at an inclination between 20° and 27° to harvest peak annual sun hours.</li>
<li><strong>Shadow-Free Area:</strong> A minimum of approximately 10 m² (108 sq ft) of unshaded terrace per 1 kWp is needed. Parapet walls, stair cabins (mumty), water storage tanks, and tall neighbouring trees must be mapped for shade patterns.</li>
</ul>
<p>Curious about exact space requirements? See our detailed analysis on <a href="/blog/roof-space-required-rooftop-solar/">roof space requirements for solar</a> or test our interactive calculator below.</p>`,
    aside: `<div class="info-card">
<p class="info-card__title">Home Sizing Quick Guide</p>
<ul class="feature-bullets">
<li>
<div class="feature-bullets__head">
<span class="feature-bullets__badge">1 kW System</span>
<span class="feature-bullets__specs">~100–120 sq ft · ~110–135 u/mo</span>
</div>
<p class="feature-bullets__desc">Best for basic fan, lighting &amp; TV loads</p>
</li>
<li>
<div class="feature-bullets__head">
<span class="feature-bullets__badge">2 kW System</span>
<span class="feature-bullets__specs">~200–240 sq ft · ~220–270 u/mo</span>
</div>
<p class="feature-bullets__desc">Best for 1BHK/2BHK with low AC use</p>
</li>
<li>
<div class="feature-bullets__head">
<span class="feature-bullets__badge">3 kW System</span>
<span class="feature-bullets__specs">~300–350 sq ft · ~330–400 u/mo</span>
</div>
<p class="feature-bullets__desc">Ideal sweet spot for 2BHK/3BHK family homes</p>
</li>
<li>
<div class="feature-bullets__head">
<span class="feature-bullets__badge">5 kW System</span>
<span class="feature-bullets__specs">~500–600 sq ft · ~550–675 u/mo</span>
</div>
<p class="feature-bullets__desc">Suited for 3BHK/4BHK with multiple ACs</p>
</li>
</ul>
<a class="btn btn--primary btn--sm btn--block" href="#calculator">Test Solar Calculator</a>
</div>`,
  }),
  `<section class="section section--tint" id="home-examples" aria-labelledby="examples-title"><div class="container">
${C.sectionHead({
  eyebrow: 'Practical Scenarios',
  title: 'Typical Ayodhya Home Solar Configurations',
  id: 'examples-title',
  lead: 'Real-world examples showing how common household types match with system capacities and expected output.',
})}
<div class="cards-3">
<article class="sol-card sol-card--feature">
<div class="sol-card__body">
<p class="tag-pill">2BHK House</p>
<h3>2 kW to 3 kW System</h3>
<p class="sol-card__meta">Typical usage: 200–350 units/month</p>
<p>Typical appliances: 1 inverter AC (intermittent summer use), refrigerator, washing machine, fans, LED lighting, television, Wi-Fi router, and water motor.</p>
<ul class="tick-list">
<li>Panels required: 4 to 6 high-efficiency monocrystalline modules</li>
<li>Roof area: ~220 to 330 sq ft shadow-free</li>
<li>Estimated subsidy: Eligible for substantial central + UP state assistance</li>
</ul>
<a class="link-arrow" href="/blog/solar-panels-2bhk-3bhk-home-requirement/">Read 2BHK / 3BHK guide${icon('arrow')}</a>
</div>
</article>
<article class="sol-card sol-card--feature">
<div class="sol-card__body">
<p class="tag-pill">3BHK House</p>
<h3>3 kW to 5 kW System</h3>
<p class="sol-card__meta">Typical usage: 350–600 units/month</p>
<p>Typical appliances: 2 air conditioners running during afternoon and night, water pump, large refrigerator, microwave, multiple LED TVs, and home office setups.</p>
<ul class="tick-list">
<li>Panels required: 6 to 10 high-efficiency monocrystalline modules</li>
<li>Roof area: ~330 to 550 sq ft shadow-free</li>
<li>Maximum subsidy threshold: Caps at 3 kW central rate plus state support</li>
</ul>
<a class="link-arrow" href="/blog/3kw-solar-system-for-home-ayodhya/">Explore 3 kW system guide${icon('arrow')}</a>
</div>
</article>
<article class="sol-card sol-card--feature">
<div class="sol-card__body">
<p class="tag-pill">4BHK / Villa</p>
<h3>5 kW to 10 kW System</h3>
<p class="sol-card__meta">Typical usage: 600–1,200+ units/month</p>
<p>Typical appliances: 3+ air conditioners, submersible pump, induction cooktops, geysers, multiple refrigeration units, and security systems.</p>
<ul class="tick-list">
<li>Panels required: 10 to 20 monocrystalline modules</li>
<li>Roof area: ~550 to 1,100 sq ft shadow-free</li>
<li>Option for elevated structure to preserve recreational terrace access</li>
</ul>
<a class="link-arrow" href="/blog/5kw-solar-system-for-home-ayodhya/">Explore 5 kW system guide${icon('arrow')}</a>
</div>
</article>
</div>
</div></section>`,
  C.split({
    id: 'system-architectures',
    eyebrow: 'Technology Options',
    title: 'On-Grid vs. Hybrid vs. Off-Grid: What Makes Sense?',
    html: `<p>Choosing the electrical architecture for your home system determines both upfront capital cost and performance during local grid outages:</p>
<h3>1. Grid-Tied (On-Grid) System — Most Popular &amp; Cost-Effective</h3>
<p>An on-grid solar plant connects directly with your local electricity board network via a bi-directional net meter. When your panels produce excess energy, it flows into the grid and generates credit on your bill. At night or during overcast spells, you draw seamlessly from the grid.</p>
<p><strong>Crucial Fact:</strong> Under anti-islanding safety standards, grid-tied inverters automatically shut down during a grid power failure to safeguard line workers. <em>This is the only system type eligible for the PM Surya Ghar government subsidy.</em></p>
<h3>2. Hybrid System — Solar with Battery Energy Storage</h3>
<p>Combines solar PV panels with a lithium battery energy storage system (BESS) or tubular solar battery bank and a smart hybrid inverter. During an outage, the system automatically isolates from the grid and powers essential lighting, fans, refrigeration, and select power points.</p>
<p>Hybrid systems involve higher investment due to battery chemistry costs and replacements, but provide independence for neighbourhoods experiencing voltage fluctuations or frequent load shedding.</p>
<h3>3. Off-Grid Solar — Pure Remote Battery Operation</h3>
<p>Completely detached from the municipal electricity network. Highly recommended for farmhouses, agricultural tubewells, or remote structures without a grid connection.</p>
<p>Learn more about how they compare in our deep-dive article: <a href="/blog/on-grid-vs-hybrid-solar-system/">On-Grid vs. Hybrid Solar Systems</a>.</p>`,
    aside: C.figure('inverter', 'Wall-mounted inverter with DC/AC distribution panels for home safety'),
    reverse: false,
  }),
  C.calculator(),
  `<section class="section" id="home-subsidy" aria-labelledby="sub-home-title"><div class="container subsidy-grid">
<div>
<p class="eyebrow">Financial Savings</p>
<h2 class="section-title" id="sub-home-title">Maximize Government Subsidies on Your Home Solar</h2>
${C.prose(`<p>Under the PM Surya Ghar scheme, residential households in Ayodhya and Faizabad receive central capital assistance credited directly to their bank accounts, combined with state financial assistance from the Uttar Pradesh government.</p>
<p class="highlight">${C.subsidyEligibleLine()}</p>
<p>We handle the end-to-end liaison, from portal registration and DISCOM document preparation to net meter installation and post-commissioning verification. Read full step-by-step rules in our <a href="/solar-subsidy-ayodhya/">Ayodhya solar subsidy guide</a>.</p>`)}
${C.subsidyChangeNote()}
</div>
<div>${C.subsidyTable()}</div>
</div></section>`,
  C.faqBlock(pick('twoBhk', 'threeBhk', 'panels', 'roof', 'pmsg', 'gridTie', 'shade', 'maintenance'), {
    title: 'Common Questions About Home Solar in Ayodhya',
  }),
  C.relatedLinks([
    ['Rooftop solar installation guide', '/rooftop-solar-installation/', 'Learn how panels, inverters and meters integrate', 'panel'],
    ['Ayodhya solar installation', '/solar-panel-installation-ayodhya/', 'Full local service scope and area coverage', 'pin'],
    ['Solar panel price in Ayodhya', '/solar-panel-price-ayodhya/', 'Understand hardware and turnkey project pricing', 'rupee'],
    ['Solar subsidy in Ayodhya', '/solar-subsidy-ayodhya/', 'PM Surya Ghar scheme rules and eligibility criteria', 'doc'],
    ['Installation gallery', '/projects/', 'Photos and project overview', 'image'],
    ['Contact our team', '/contact/', 'Request an engineer to inspect your roof', 'phone'],
  ]),
  C.finalCta({
    title: 'Ready to Power Your Ayodhya Home with Solar?',
    text: 'Submit your monthly electricity consumption or bill range. We will provide an engineering recommendation and an itemised quotation for your rooftop.',
    city: 'Ayodhya',
  }),
].join('\n');

module.exports = {
  path: '/solar-panels-for-home/',
  title: 'Solar Panels for Home in Ayodhya | Residential Rooftop Solar',
  description:
    'Solar panel systems for homes in Ayodhya. Sized for 2BHK, 3BHK & 4BHK houses with on-grid and hybrid options. Learn sizing, roof space, and PM Surya Ghar subsidy.',
  hasForm: true,
  breadcrumbs: crumbs,
  sitemap: { priority: '0.85', changefreq: 'monthly' },
  service: {
    name: 'Residential rooftop solar panels in Ayodhya',
    type: 'Home Solar Installation',
    description: 'Custom rooftop solar sizing, structure engineering, net meter commissioning and subsidy support for residential homeowners in Ayodhya and Faizabad.',
  },
  body,
};
