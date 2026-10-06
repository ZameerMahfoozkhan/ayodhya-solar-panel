const { icon, links, config, picture } = require('../lib');
const C = require('../components');

const crumbs = [{ name: 'Projects', path: '/projects/' }];

const body = [
  C.pageHero({
    crumbs,
    eyebrow: 'Local Installation Portfolio',
    h1: 'Our Rooftop Solar Installation Gallery',
    lead: 'A transparent record of our workmanship, mounting structure engineering, electrical switchgear wiring, and terrace configurations across Ayodhya and Faizabad.',
    image: 'home',
    imageAlt: 'Elevated solar panel structure on a residential home in North India',
    points: ['Honest project documentation', 'Verified local installations', 'Authentic photography policy'],
    quoteHref: '#quote',
  }),
  `<section class="section" id="gallery-manifesto" aria-labelledby="manifesto-title"><div class="container">
<div class="split">
<div class="split__main">
<p class="eyebrow">Our Transparency Standard</p>
<h2 class="section-title" id="manifesto-title">Authentic Workmanship — Zero Fabricated Claims</h2>
<div class="prose">
<p>Unlike many online aggregators that download generic stock photos from international solar farms or fabricate fictitious customer reviews and arbitrary installation figures, our policy is completely transparent.</p>
<p>As we complete installations for independent homes, shops, and institutions across Ayodhya and Faizabad, each verified project will be documented here with its exact system capacity (kW), locality, building structure type, and high-resolution photographs.</p>
<p>Until a client’s project has completed full DISCOM net-metering commissioning and client consent for photography is obtained, all photographs presented on this website are <strong>clearly marked as illustrative examples</strong> demonstrating the structural and electrical methods we employ.</p>
</div>
</div>
<div class="split__aside">
<div class="info-card">
<p class="info-card__title">Future Project Profile Format</p>
<ul class="tick-list">
<li><strong>Locality:</strong> e.g. Civil Lines / Deokali / Naka</li>
<li><strong>Property Type:</strong> e.g. 3BHK Independent Terrace</li>
<li><strong>Plant Capacity:</strong> e.g. 3.3 kWp DCR Mono PERC</li>
<li><strong>Inverter Type:</strong> Single-Phase Grid-Tied MPPT</li>
<li><strong>Mounting:</strong> 8-foot Elevated Gazebo GI Frame</li>
<li><strong>Date Commissioned:</strong> Verification month/year</li>
</ul>
</div>
</div>
</div>
</div></section>`,
  `<section class="section section--tint" id="installation-showcase" aria-labelledby="showcase-title"><div class="container">
${C.sectionHead({
  eyebrow: 'Workmanship Examples',
  title: 'Engineering & Construction Methodologies',
  id: 'showcase-title',
  lead: 'The images below demonstrate the structural principles, heavy-duty mounting frameworks, and electrical standards we execute on Indian rooftop terraces.',
})}
<div class="gallery-grid">
<figure class="gallery-card">
${picture('hero', { sizes: '(min-width: 1024px) 600px, 100vw' })}
<figcaption>
<p class="gallery-card__badge">Illustrative Standard</p>
<h3>Elevated Flat-Roof Solar Array</h3>
<p>Galvanized steel mounting structure installed on concrete pedestals to prevent roof membrane penetrations, with unobstructed space below.</p>
</figcaption>
</figure>
<figure class="gallery-card">
${picture('home', { sizes: '(min-width: 1024px) 600px, 100vw' })}
<figcaption>
<p class="gallery-card__badge">Illustrative Standard</p>
<h3>Multi-Storey Residential Integration</h3>
<p>Raised canopy array positioned above stair towers and water storage overhead tanks to eliminate surrounding structural shadows.</p>
</figcaption>
</figure>
<figure class="gallery-card">
${picture('structure', { sizes: '(min-width: 1024px) 600px, 100vw' })}
<figcaption>
<p class="gallery-card__badge">Illustrative Standard</p>
<h3>Galvanized Structural Footing &amp; DC Conduit</h3>
<p>Heavy-duty civil concrete anchor footings with UV-stabilized electrical conduit running continuous DC wiring to distribution boxes.</p>
</figcaption>
</figure>
<figure class="gallery-card">
${picture('inverter', { sizes: '(min-width: 1024px) 600px, 100vw' })}
<figcaption>
<p class="gallery-card__badge">Illustrative Standard</p>
<h3>Wall-Mounted Grid-Tie Inverter &amp; Distribution Boxes</h3>
<p>Shaded stairwell installation featuring dedicated DCDB and ACDB with dual-stage surge protection and clear operational readouts.</p>
</figcaption>
</figure>
<figure class="gallery-card">
${picture('commercial', { sizes: '(min-width: 1024px) 600px, 100vw' })}
<figcaption>
<p class="gallery-card__badge">Illustrative Standard</p>
<h3>Commercial Flat-Roof Solar Engineering</h3>
<p>Multi-row symmetric layout optimized for maximum daytime energy harvest on institutional and business properties.</p>
</figcaption>
</figure>
<figure class="gallery-card">
${picture('cleaning', { sizes: '(min-width: 1024px) 600px, 100vw' })}
<figcaption>
<p class="gallery-card__badge">Illustrative Standard</p>
<h3>Rooftop Maintenance &amp; Panel Washing</h3>
<p>Regular maintenance with soft-bristle water brushes to preserve optimal photovoltaic absorption in dusty regional seasons.</p>
</figcaption>
</figure>
</div>
</div></section>`,
  C.reviewsBlock({ tag: 'h2' }),
  C.relatedLinks([
    ['Solar panels for home', '/solar-panels-for-home/', 'Choose system sizing for your house', 'home'],
    ['Solar panel price guide', '/solar-panel-price-ayodhya/', 'Transparent pricing breakdown for Ayodhya', 'rupee'],
    ['PM Surya Ghar subsidy', '/solar-subsidy-ayodhya/', 'Learn about central and UP state financial assistance', 'doc'],
    ['Rooftop solar technology', '/rooftop-solar-installation/', 'Technical details on structures and inverters', 'panel'],
    ['About our service', '/about/', 'Learn about our local focus and consultation approach', 'user'],
    ['Contact our team', '/contact/', 'Schedule a site survey at your residence or business', 'phone'],
  ]),
  C.finalCta({
    title: 'Want Your Home to Be Our Next Showcase Project?',
    text: 'Contact us for a free site assessment in Ayodhya or Faizabad. We will engineer a custom solar plant built for decades of reliable power.',
    city: 'Ayodhya',
  }),
].join('\n');

module.exports = {
  path: '/projects/',
  title: 'Our Solar Installation Projects in Ayodhya | Installation Gallery',
  description:
    'Solar panel installation projects and workmanship gallery in Ayodhya and Faizabad. Honest, authentic engineering documentation for residential and commercial rooftop solar.',
  hasForm: true,
  breadcrumbs: crumbs,
  sitemap: { priority: '0.8', changefreq: 'monthly' },
  body,
};
