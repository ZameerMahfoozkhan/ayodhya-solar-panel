const { icon, links, config } = require('../lib');
const C = require('../components');
const { pick } = require('../faq');

const crumbs = [{ name: 'Solar Panel Installation in Faizabad', path: '/solar-panel-installation-faizabad/' }];

const b = config.business;

const body = [
  C.pageHero({
    crumbs,
    eyebrow: 'Faizabad · Ayodhya Twin-City Service',
    h1: 'Solar Panel Installation in Faizabad',
    lead: 'Rooftop solar consultation, engineering and installation for homes and commercial establishments across Faizabad. Operating directly from Naka Bypass — the central arterial corridor connecting Faizabad city with Ayodhya.',
    image: 'hero',
    imageAlt: 'Elevated rooftop solar installation on a concrete terrace in Faizabad',
    points: ['Direct Naka Bypass local presence', 'Site assessment across all Faizabad wards', 'PM Surya Ghar & UP state subsidy facilitation'],
    quoteHref: '#quote',
  }),
  C.split({
    id: 'twin-city-context',
    eyebrow: 'Local Geographic Context',
    title: 'Serving Faizabad and Ayodhya from Our Naka Bypass Base',
    html: `<p>Historically known as Faizabad, the city forms the commercial, residential, and administrative heart of the unified Ayodhya district. Whether residents refer to their locality as Faizabad or Ayodhya, our operational base at <strong>Naka Bypass</strong> sits strategically right at the transit intersection connecting Civil Lines, Rikabganj, Cantt, and the bypass ring road.</p>
<p>Because rooftop solar requires physical site inspections, crane or stair delivery of heavy glass photovoltaic modules, and periodic maintenance, having a truly local team based along Naka Bypass ensures zero delays in site visits and rapid turnaround on net-metering liaison with local DISCOM divisions.</p>
<p>Looking for installations towards the temple corridor or eastern sectors? Explore our dedicated <a href="/solar-panel-installation-ayodhya/">Ayodhya solar panel installation guide</a>.</p>`,
    aside: `<div class="info-card">
<p class="info-card__title">Faizabad Localities Covered</p>
<ul class="tick-list">
<li>${icon('check')}Civil Lines &amp; Cantt area</li>
<li>${icon('check')}Rikabganj &amp; Chowk commercial hub</li>
<li>${icon('check')}Naka &amp; Naka Bypass corridors</li>
<li>${icon('check')}Fatehganj, Sahadatganj &amp; Rekabganj</li>
<li>${icon('check')}Deokali bypass &amp; Faizabad Road colonies</li>
</ul>
<p class="info-card__callout">Live outside central Faizabad? Call <a href="${links.tel}">${b.phoneDisplay}</a> to confirm immediate site survey schedule.</p>
</div>`,
  }),
  C.split({
    id: 'faizabad-residential',
    eyebrow: 'Residential & Commercial Scope',
    title: 'Custom Engineering for Faizabad Building Architectures',
    html: `<p>Faizabad's urban fabric features a distinctive mix of older multi-storey brick-and-mortar homes in inner lanes and expansive modern RCC bungalows in suburban developments. Solar engineering must respect these physical variations:</p>
<h3>1. Inner City Homes (Chowk, Rikabganj, Rekabganj)</h3>
<p>Dense residential lanes frequently present crane access constraints and inter-building shading from adjoining two-to-three storey constructions. For these homes, we design modular string arrangements and elevated galvanised iron (GI) structures that lift panels above parapet walls and water tanks while keeping the terrace completely accessible for daily family usage.</p>
<h3>2. Planned Colonies (Civil Lines, Deokali, Pushpraj Nagar)</h3>
<p>Independent residences and 2BHK–4BHK homes here generally offer ample unshaded roof area. We tailor 3 kW to 5 kW on-grid systems aligned to high-power domestic loads such as multiple 1.5-ton inverter air conditioners, submersible water pumps, and induction appliances.</p>
<h3>3. Commercial &amp; Institutional Establishments</h3>
<p>From private clinics and retail showrooms along Civil Lines to schools and godowns on the outskirts, daytime commercial electricity consumption aligns directly with peak solar irradiance hours. Learn more about customized capacity planning on our <a href="/commercial-solar-installation/">commercial solar page</a>.</p>`,
    aside: C.figure('home', 'Independent residential building with custom-engineered raised solar frame'),
    reverse: true,
  }),
  `<section class="section section--tint" id="subsidy-faizabad" aria-labelledby="sub-faiz-title"><div class="container subsidy-grid">
<div>
<p class="eyebrow">Subsidy Scheme in Faizabad</p>
<h2 class="section-title" id="sub-faiz-title">PM Surya Ghar Subsidy for Faizabad Homeowners</h2>
${C.prose(`<p>Under the national <strong>PM Surya Ghar Muft Bijli Yojana</strong>, domestic electricity consumers in Faizabad can claim substantial Central Financial Assistance (CFA), paired with the Uttar Pradesh New and Renewable Energy Development Agency (UPNEDA) state subsidy.</p>
<p class="highlight">${C.subsidyEligibleLine()}</p>
<p>To qualify, the electricity connection must be registered in the domestic consumer category (MVVNL / Purvanchal Vidyut Vitran Nigam distribution zone) with clear title or tenancy rights to the terrace. Learn all documentation steps on our detailed <a href="/solar-subsidy-ayodhya/">solar subsidy in Ayodhya &amp; Faizabad guide</a>.</p>`)}
${C.subsidyChangeNote()}
</div>
<div>${C.subsidyTable()}</div>
</div></section>`,
  `<section class="section" id="faizabad-process" aria-labelledby="proc-faiz-title"><div class="container">
${C.sectionHead({ eyebrow: 'Installation Lifecycle', title: 'Our 6-Step Installation Procedure in Faizabad', id: 'proc-faiz-title' })}
${C.installSteps()}
</div></section>`,
  C.serviceArea({
    title: 'Solar Installation Reach Across Faizabad & Ayodhya',
    lead: 'Our technical team is deployed directly from Naka Bypass, providing comprehensive coverage across all Faizabad municipal wards and adjoining suburban mohallas.',
    tag: 'h2',
  }),
  C.faqBlock(pick('faizabad', 'cost', 'pmsg', 'upAmount', 'twoBhk', 'threeBhk', 'netMetering', 'cloudy'), {
    title: 'Frequently Asked Questions by Faizabad Solar Buyers',
  }),
  C.relatedLinks([
    ['Solar panels for home', '/solar-panels-for-home/', 'Residential system sizing and 2BHK–4BHK planning', 'home'],
    ['Solar panel price guide', '/solar-panel-price-ayodhya/', 'Transparent breakdown of equipment and installation costs', 'rupee'],
    ['PM Surya Ghar subsidy', '/solar-subsidy-ayodhya/', 'Central & UP state financial assistance details', 'doc'],
    ['Ayodhya solar installation', '/solar-panel-installation-ayodhya/', 'Primary regional solar engineering hub', 'pin'],
    ['Rooftop solar technical overview', '/rooftop-solar-installation/', 'Inverter, panel tech, and grid-metering components', 'panel'],
    ['Contact local office', '/contact/', 'Visit us at Naka Bypass or schedule an on-site survey', 'phone'],
  ]),
  C.finalCta({
    title: 'Schedule Your Free Faizabad Solar Roof Assessment',
    text: 'Share your monthly electricity bill and roof location. Our senior solar engineers will calculate your optimum capacity and guide your subsidy paperwork.',
    city: 'Faizabad',
  }),
].join('\n');

module.exports = {
  path: '/solar-panel-installation-faizabad/',
  title: 'Solar Panel Installation in Faizabad | Rooftop Solar Experts',
  description:
    'Rooftop solar panel installation in Faizabad, UP. Customized residential and commercial solar systems, PM Surya Ghar subsidy assistance, and local engineering support.',
  hasForm: true,
  breadcrumbs: crumbs,
  sitemap: { priority: '0.85', changefreq: 'monthly' },
  service: {
    name: 'Solar panel installation in Faizabad',
    type: 'Solar panel installation',
    description: 'Custom rooftop solar system sizing, structure engineering, net metering support and maintenance for residential and commercial properties in Faizabad.',
    areas: ['Faizabad', 'Ayodhya'],
  },
  body,
};
