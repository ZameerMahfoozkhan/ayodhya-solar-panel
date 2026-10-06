const { icon, links, config } = require('../lib');
const C = require('../components');

const crumbs = [{ name: 'About Us', path: '/about/' }];

const b = config.business;

const body = [
  C.pageHero({
    crumbs,
    eyebrow: 'Local Ayodhya Team',
    h1: 'Solar Installation Support in Ayodhya',
    lead: 'We are a dedicated local rooftop solar team based on Naka Bypass, focused on honest technical advice, transparent quotations, and quality solar installations for homes and businesses across Ayodhya and Faizabad.',
    image: 'hero',
    imageAlt: 'Rooftop solar installation on a North Indian terrace in Ayodhya',
    points: ['Local presence on Naka Bypass', 'No high-pressure sales tactics', 'End-to-end guidance from bill analysis to net metering'],
    quoteHref: '#quote',
  }),
  C.split({
    id: 'our-mission',
    eyebrow: 'Our Philosophy',
    title: 'Consultation & Education Before Selling',
    html: `<p>As Ayodhya embarks on its transformation into a model <strong>Solar City</strong>, homeowners and business owners are inundated with aggressive marketing, confusing subsidy figures, and vague technical jargon.</p>
<p>We started <strong>${config.siteName}</strong> with a clear founding principle: <em>educate the customer first, verify the roof thoroughly, and engineer a solar plant that performs safely for 25 years.</em></p>
<p>We do not make exaggerated claims of thousands of installations or imaginary decades of corporate history. Instead, we offer what matters most to families and business owners in Ayodhya:</p>
<ul class="tick-list">
<li><strong>Direct Local Accountability:</strong> We operate right from Naka Bypass. If you ever have a question or need service, our technicians are in town — not operating out of an impersonal national call centre.</li>
<li><strong>Honest System Sizing:</strong> If your roof has dense shade or your electricity consumption is too low to justify solar, we will tell you openly. We size systems to match your real needs, not our sales targets.</li>
<li><strong>Transparent Component Choices:</strong> We explain the difference between panel technologies, structure heights, and inverter options so you know exactly what goes on your roof.</li>
</ul>`,
    aside: `<div class="info-card">
<p class="info-card__title">Our Working Commitment</p>
<ul class="tick-list">
<li>Clear, itemized price proposals</li>
<li>Zero compromise on electrical safety</li>
<li>Heavy-gauge galvanized steel structures</li>
<li>Dedicated assistance with PM Surya Ghar steps</li>
<li>Responsive WhatsApp &amp; phone support</li>
</ul>
<a class="btn btn--primary btn--sm btn--block" href="/contact/">Get in Touch</a>
</div>`,
  }),
  `<section class="section section--tint" id="core-pillars" aria-labelledby="pillars-title"><div class="container">
${C.sectionHead({
  eyebrow: 'How We Work',
  title: 'The Principles Behind Every Ayodhya Installation',
  id: 'pillars-title',
  lead: 'Every project is handled with technical precision, respect for your property, and clear communication.',
})}
<div class="cards-3">
<div class="sol-card sol-card--feature">
<div class="sol-card__body">
${icon('ruler')}
<h3>1. Detailed Site Survey</h3>
<p>We don’t estimate from satellite images alone. We visit your terrace, check roof strength, measure sun angles, and trace the shortest, safest wiring route to your meter board.</p>
</div>
</div>
<div class="sol-card sol-card--feature">
<div class="sol-card__body">
${icon('doc')}
<h3>2. Paperwork Guidance</h3>
<p>Navigating the national PM Surya Ghar portal and local DISCOM formalities can feel overwhelming. We guide you through each documentation milestone.</p>
</div>
</div>
<div class="sol-card sol-card--feature">
<div class="sol-card__body">
${icon('wrench')}
<h3>3. Long-Term Support</h3>
<p>Solar is a 25-year asset. We provide prompt support for routine cleaning advice, system health checks, and inverter diagnostics whenever you need it.</p>
</div>
</div>
</div>
</div></section>`,
  C.serviceArea({
    title: 'Our Service Footprint in Ayodhya & Faizabad',
    lead: 'From our base on Naka Bypass, we serve residential colonies, commercial markets, and institutions across the entire twin-city region.',
    tag: 'h2',
  }),
  C.relatedLinks([
    ['Solar panels for home', '/solar-panels-for-home/', 'Residential system sizing and guidance', 'home'],
    ['Rooftop solar installation', '/rooftop-solar-installation/', 'Detailed breakdown of equipment and net metering', 'panel'],
    ['Solar subsidy in Ayodhya', '/solar-subsidy-ayodhya/', 'PM Surya Ghar scheme rules and eligibility criteria', 'doc'],
    ['Solar panel price guide', '/solar-panel-price-ayodhya/', 'Transparent pricing breakdown for Ayodhya', 'rupee'],
    ['Installation gallery', '/projects/', 'View our workmanship and structural standards', 'image'],
    ['Contact us', '/contact/', 'Visit us at Naka Bypass or call our team', 'phone'],
  ]),
  C.finalCta({
    title: 'Talk to a Local Solar Expert Today',
    text: 'Have questions about rooftop solar for your home or shop? Call or WhatsApp us. We are happy to help you understand your options.',
    city: 'Ayodhya',
  }),
].join('\n');

module.exports = {
  path: '/about/',
  title: 'About Ayodhya Solar Installation | Local Rooftop Solar Experts',
  description:
    'Learn about Ayodhya Solar Installation: based on Naka Bypass, providing honest consultation, quality rooftop solar engineering and PM Surya Ghar subsidy guidance.',
  hasForm: true,
  breadcrumbs: crumbs,
  sitemap: { priority: '0.75', changefreq: 'monthly' },
  body,
};
