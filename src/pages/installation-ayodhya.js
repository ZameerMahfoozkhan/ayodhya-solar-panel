const { icon, links, config } = require('../lib');
const C = require('../components');
const { pick } = require('../faq');

const crumbs = [{ name: 'Solar Panel Installation in Ayodhya', path: '/solar-panel-installation-ayodhya/' }];

const included = [
  ['ruler', 'Site assessment', 'Roof dimensions, direction, shade through the day, structural condition, cable route and the best spots for the inverter and meter.'],
  ['calc', 'System sizing', 'Size based on 6–12 months of units, your sanctioned load and how much roof is genuinely usable — with the reasoning explained.'],
  ['panel', 'Panel selection', 'Monocrystalline modules suited to the roof area and budget. We explain the options (such as mono PERC, TOPCon or bifacial) in plain terms.'],
  ['plug', 'Inverter', 'An on-grid or hybrid inverter matched to the array, placed in a shaded, ventilated spot with its display easy to check.'],
  ['building', 'Mounting structure', 'Galvanised steel structure, typically raised on a flat RCC roof, anchored for wind loads and tilted to face the sun.'],
  ['bolt', 'Electrical integration', 'DC and AC distribution boxes, surge protection, isolators, correctly sized cables and dedicated earthing.'],
  ['meter', 'Net metering guidance', 'Help with the DISCOM net meter application so surplus solar units are credited against your consumption.'],
  ['wrench', 'Installation', 'Structure, panels, wiring and inverter installed by our team, with neat cable routing and a clean site at the end.'],
  ['check', 'Commissioning', 'System testing, inspection support and a walkthrough of monitoring, cleaning and basic safety for your family.'],
  ['chat', 'After-sales support', 'Cleaning guidance, periodic check-ups and a direct WhatsApp line if generation drops or an error appears.'],
];

const body = [
  C.pageHero({
    crumbs,
    eyebrow: 'Ayodhya · Faizabad',
    h1: 'Solar Panel Installation in Ayodhya',
    lead: 'End-to-end rooftop solar for homes, shops and institutions in Ayodhya — from the first roof check to net metering and long-term support. Based on Naka Bypass and working across the city.',
    image: 'home',
    imageAlt: 'Independent house with solar panels on a raised rooftop frame in a North Indian residential lane',
    points: ['Free site assessment', 'Itemised quotation', 'Subsidy guidance for eligible homes'],
    quoteHref: '#quote',
  }),
  C.split({
    id: 'who',
    eyebrow: 'Who this is for',
    title: 'Rooftop solar for the way Ayodhya lives and works',
    html: `<p>Most of our enquiries come from <strong>independent house owners</strong> — families in 2BHK to 4BHK homes whose summer bills climb as soon as the ACs come on. Rooftop solar lets you generate a large part of that electricity on a roof that’s otherwise used for water tanks and drying clothes.</p>
<p>We also work with people <strong>building a new house</strong>, who can plan conduit routes, inverter space and roof layout before the plaster goes on, and with <strong>shops, clinics, offices and schools</strong> that use most of their power during daylight — exactly when solar produces it.</p>
<p>If you are comparing options, start with our guide to <a href="/solar-panels-for-home/">solar panels for home</a> or see how a <a href="/rooftop-solar-installation/">rooftop system works</a>.</p>`,
    aside: `<div class="info-card"><p class="info-card__title">Residential</p><ul class="tick-list"><li>${icon('check')}1 kW to 10 kW home systems</li><li>${icon('check')}On-grid with net metering</li><li>${icon('check')}Hybrid with battery backup</li><li>${icon('check')}PM Surya Ghar guidance</li></ul><p class="info-card__title">Commercial</p><ul class="tick-list"><li>${icon('check')}Shops, offices, clinics, schools</li><li>${icon('check')}Daytime-load matching</li><li>${icon('check')}Larger flat roofs</li></ul><a class="link-arrow" href="/commercial-solar-installation/">Commercial solar details${icon('arrow')}</a></div>`,
  }),
  `<section class="section section--tint" id="included" aria-labelledby="inc-title">
<div class="container">
${C.sectionHead({ eyebrow: 'What’s included', title: 'Everything a complete installation covers', id: 'inc-title', lead: 'A solar system is more than panels on a frame. These are the parts we plan, supply and install — and what each one means for you.' })}
<ul class="feature-grid">${included.map(([ic, t, d]) => `<li class="feature">${icon(ic)}<h3>${t}</h3><p>${d}</p></li>`).join('')}</ul>
</div>
</section>`,
  C.split({
    id: 'local',
    eyebrow: 'Local conditions',
    title: 'What we plan for on Ayodhya rooftops',
    html: `<p>Generic advice doesn’t account for local conditions. These are the things we specifically check on roofs in Ayodhya and Faizabad:</p>
<h3>Summer heat and dust</h3>
<p>Panels lose some efficiency as they heat up, and April–June rooftop temperatures here are severe. A raised structure with airflow behind the panels helps, and the dry pre-monsoon months mean dust builds up quickly — so we plan easy, safe access for cleaning.</p>
<h3>Monsoon wind and rain</h3>
<p>Structures must stay put in storm gusts. We anchor to solid concrete footings or the roof slab as appropriate, and route cables so water doesn’t collect in junction boxes.</p>
<h3>Winter fog</h3>
<p>December and January fog lowers generation for some weeks. We factor that seasonal dip into yearly estimates so you aren’t surprised.</p>
<h3>Dense older lanes vs. newer colonies</h3>
<p>In older, closely built areas — around Rikabganj or Naya Ghat, for example — neighbouring buildings can cast shade and material access may be tight. Newer colonies along Faizabad Road, in Deokali or Darshan Nagar often have more open roofs. Either way, the site visit decides the layout.</p>`,
    aside: C.figure('structure', 'Galvanised structure anchored on concrete footings'),
    reverse: true,
  }),
  `<section class="section" id="sizes" aria-labelledby="sizes-title"><div class="container">
${C.sectionHead({ eyebrow: 'System sizes', title: 'Which system size fits your property?', id: 'sizes-title', lead: `Use these as a starting point, or try the <a href="/#calculator">solar calculator</a> with your own bill.` })}
${C.systemSizes({ quoteHref: '#quote' })}
</div></section>`,
  `<section class="section section--tint" id="process" aria-labelledby="proc-title"><div class="container">
${C.sectionHead({ eyebrow: 'Process', title: 'From enquiry to commissioning', id: 'proc-title' })}
${C.installSteps()}
</div></section>`,
  `<section class="section" id="subsidy" aria-labelledby="sub-title"><div class="container subsidy-grid">
<div>
<p class="eyebrow">Government support</p>
<h2 class="section-title" id="sub-title">Subsidy for eligible Ayodhya homes</h2>
${C.prose(`<p>Residential grid-connected systems may qualify for central assistance under PM Surya Ghar plus the Uttar Pradesh state subsidy. ${C.subsidyEligibleLine()}</p>
<p>Businesses should not expect the residential subsidy. For the full process, documents and common mistakes, read our <a href="/solar-subsidy-ayodhya/">solar subsidy guide for Ayodhya</a>, and for what drives cost see <a href="/solar-panel-price-ayodhya/">solar panel price in Ayodhya</a>.</p>`)}
${C.subsidyChangeNote()}
</div>
<div>${C.subsidyTable()}</div>
</div></section>`,
  C.serviceArea({ tag: 'h2' }),
  C.faqBlock(pick('cost', 'roof', 'suitable', 'duration', 'shade', 'netMetering', 'faizabad'), {
    title: 'Questions about installation in Ayodhya',
  }),
  C.relatedLinks([
    ['Solar panels for home', '/solar-panels-for-home/', 'Sizing, roof checks and 2BHK–4BHK examples', 'home'],
    ['How rooftop solar works', '/rooftop-solar-installation/', 'Panels, inverter, structure and net metering', 'panel'],
    ['Solar subsidy in Ayodhya', '/solar-subsidy-ayodhya/', 'PM Surya Ghar and UP support explained', 'doc'],
    ['Solar panel price', '/solar-panel-price-ayodhya/', 'What actually determines the cost', 'rupee'],
    ['Projects', '/projects/', 'Our installation gallery', 'image'],
    ['Contact us', '/contact/', 'Call, WhatsApp or email', 'phone'],
  ]),
  C.finalCta({ title: 'Book a free solar assessment in Ayodhya' }),
].join('\n');

module.exports = {
  path: '/solar-panel-installation-ayodhya/',
  title: 'Solar Panel Installation in Ayodhya | Rooftop Solar Experts',
  description:
    'Rooftop solar panel installation in Ayodhya: site assessment, system sizing, panels, inverter, net metering guidance and after-sales support for homes and businesses.',
  hasForm: true,
  breadcrumbs: crumbs,
  sitemap: { priority: '0.9', changefreq: 'monthly' },
  service: {
    name: 'Solar panel installation in Ayodhya',
    type: 'Solar panel installation',
    description: 'Site assessment, system design, supply, installation, net metering guidance, commissioning and after-sales support for rooftop solar in Ayodhya.',
  },
  body,
};
