const { icon, links, config } = require('../lib');
const C = require('../components');

const slug = 'solar-panel-maintenance-cleaning-guide';
const path = `/blog/${slug}/`;
const title = 'Solar Maintenance: How to Keep Your Panels Performing Well';
const description = 'Practical solar panel cleaning and maintenance guide for Ayodhya homeowners: water washing best practices, safety, dust schedules, and electrical checks.';

const crumbs = [
  { name: 'Blog', path: '/blog/' },
  { name: 'Solar Maintenance Guide', path },
];

const body = [
  C.pageHero({
    crumbs,
    eyebrow: 'Preventative Care Guide',
    h1: title,
    lead: 'Rooftop solar panels have no moving parts, but regional dust, soot, and seasonal pollen can reduce your power harvest by 15% to 25%. Here is the correct way to clean and inspect your solar panels.',
    image: 'cleaning',
    imageAlt: 'Technician cleaning dusty rooftop solar panels with water in Uttar Pradesh',
    points: ['Safe washing protocols (avoid thermal shock)', 'Seasonal cleaning frequency in Ayodhya', 'Key inverter and electrical checks'],
  }),
  `<article class="section article-body"><div class="container"><div class="prose prose--article">
<p class="article-meta">Published: October 2026 · Author: Operations &amp; Maintenance Team at ${config.siteName} · 6 min read</p>

<p>One of the greatest engineering advantages of a photovoltaic rooftop solar system is its mechanical simplicity. Because there are no belts, gears, or moving parts, a solar power plant operates quietly and reliably for 25 years with minimal day-to-day intervention.</p>
<p>However, <em>low maintenance</em> does not mean <em>no maintenance</em>. In Uttar Pradesh’s climate, dust accumulation (soiling) is the single biggest cause of preventable energy yield loss. A thin layer of accumulated dust can cost you hundreds of units in lost energy savings each season.</p>

<h2>1. Recommended Cleaning Frequency in Ayodhya</h2>
<p>Different seasons in Ayodhya demand different maintenance intervals:</p>
<ul>
<li><strong>Dry Summer Months (March to June):</strong> Pre-monsoon westerly winds (aandhi) blow fine dust across North India. Clean panels <strong>every 10 to 15 days</strong>.</li>
<li><strong>Monsoon Season (July to August):</strong> Regular rain showers provide natural glass washing. Manual cleaning is typically required only if bird droppings or tree sap accumulate.</li>
<li><strong>Post-Monsoon &amp; Winter (September to February):</strong> Morning dew traps atmospheric particulate smog and dust on cold glass. Wash panels <strong>every 2 to 3 weeks</strong>.</li>
</ul>

<h2>2. The Correct Way to Wash Solar Panels</h2>
<p>To avoid scratching the specialized anti-reflective (AR) coating or causing fatal glass fractures, always follow these rules:</p>
<h3>Rule 1: Wash Only Early Morning or Late Evening</h3>
<p>Never spray cold water onto hot solar panels under blazing afternoon sunshine. In May, solar glass easily exceeds 65°C. Cold water creates violent <strong>thermal shock</strong>, which can micro-crack the internal silicon cells or shatter the tempered glass instantly. Wash before 8:00 AM or after 5:30 PM.</p>
<h3>Rule 2: Use Plain Clean Water and a Soft-Bristle Brush</h3>
<p>Use clean, low-mineral tap water and a soft microfiber mop or sponge on an extension pole. Never use abrasive metal scouring pads, wire brushes, or harsh acid/bleach detergents, which degrade anti-reflective coatings and corrode aluminum frames.</p>
<h3>Rule 3: Never Walk or Step on Solar Modules</h3>
<p>Tempered solar glass is strong enough to resist hail, but concentrated point weight from human footsteps creates invisible internal micro-cracks across silicon cells. Over time, these micro-cracks cause localized resistive hotspots, permanently killing generation.</p>

<h2>3. Routine Electrical &amp; Mechanical Health Checks</h2>
<p>Beyond washing glass, carry out these basic checks once every few months:</p>
<ol>
<li><strong>Check the Inverter Display:</strong> Glance at the inverter LCD or smartphone Wi-Fi app once a week. Ensure green operating lights are solid and check that generation tallies with expected sunny conditions.</li>
<li><strong>Inspect Cable Conduit:</strong> Check that black solar DC cables remain securely clipped inside gray conduit without sagging onto the wet roof slab.</li>
<li><strong>Check Earthing Pit Moisture:</strong> During intense dry summer heat (May/June), pouring a bucket of water into chemical earthing inspection chambers helps maintain low ground resistance.</li>
<li><strong>Inspect Structural Fasteners:</strong> Ensure that structure anchor bolts and panel clamps remain tightly torqued after heavy storm seasons.</li>
</ol>

<p>Need professional panel washing or an electrical audit? Learn more on our <a href="/solar-panel-maintenance/">solar panel maintenance in Ayodhya</a> service page or <a href="/contact/">contact our team</a>.</p>
</div></div></article>`,
  C.ctaBand({
    title: 'Need Professional Solar Maintenance?',
    text: 'Our technical team provides scheduled cleaning and electrical health checks in Ayodhya and Faizabad.',
    quoteHref: '/contact/#quote',
  }),
  C.relatedLinks([
    ['Solar maintenance services', '/solar-panel-maintenance/', 'Professional panel washing and electrical inspection', 'wrench'],
    ['Rooftop solar installation', '/rooftop-solar-installation/', 'Technical details on structures, inverters and net meters', 'panel'],
    ['Solar panels for home', '/solar-panels-for-home/', 'System sizing and appliance load calculations', 'home'],
    ['Solar panel price guide', '/solar-panel-price-ayodhya/', 'Transparent pricing breakdown for Ayodhya', 'rupee'],
    ['Contact our service team', '/contact/', 'Reach out on WhatsApp or phone for immediate service', 'phone'],
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
