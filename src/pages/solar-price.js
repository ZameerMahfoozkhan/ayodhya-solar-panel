const { icon, links, config, inr } = require('../lib');
const C = require('../components');
const { pick } = require('../faq');

const crumbs = [{ name: 'Solar Panel Price in Ayodhya', path: '/solar-panel-price-ayodhya/' }];

const priceFactors = [
  ['bolt', '1. System Capacity (kW)', 'Larger systems have a lower per-watt installation cost due to economies of scale on inverters, structures, and freight.'],
  ['panel', '2. Solar Panel Technology', 'Polycrystalline (older) vs. Monocrystalline PERC vs. TOPCon (N-type) and Bifacial modules. Higher efficiency panels generate more power in tighter spaces at a modest price premium.'],
  ['plug', '3. Inverter Type & Brand', 'Standard single-phase grid-tied string inverters vs. three-phase inverters vs. advanced hybrid inverters capable of handling battery banks.'],
  ['building', '4. Mounting Structure Height & Steel Gauge', 'Standard low-ballast structures use less steel than 7-to-9 foot elevated gazebo structures that preserve full rooftop walking and recreational area.'],
  ['ruler', '5. Cabling Distance & Cable Gauge', 'Distance between the rooftop solar array, the inverter location, and your main distribution board / LT electricity meter determines copper and solar DC wire quantities.'],
  ['shield', '6. Switchgear, Earthing & Lightning Protection', 'Quality of surge protection devices (SPDs), DC isolators, distribution boxes, and the number of chemical earthing pits created on-site.'],
  ['meter', '7. Net Metering & Utility Process Fees', 'DISCOM application fees, meter testing charges, and bi-directional meter procurement (as per UP DISCOM rules).'],
  ['battery', '8. Battery Storage (For Hybrid / Off-Grid Systems)', 'Adding lithium-ion (LiFePO4) or tubular lead-acid batteries adds significant capital cost. Pure on-grid systems have zero battery expense.'],
  ['rupee', '9. Subsidy Eligibility (Net Effective Cost)', 'Qualifying residential consumers can offset a major portion of their project investment through central PM Surya Ghar and UP state financial assistance.'],
];

const indicativeRanges = [
  { kw: '1 kW', typical: '₹60,000 – ₹75,000', subsidy: 'Up to ₹45,000 (Central ₹30k + UP ₹15k)', net: '₹15,000 – ₹30,000', note: 'Basic domestic load, lights & fans' },
  { kw: '2 kW', typical: '₹1,20,000 – ₹1,45,000', subsidy: 'Up to ₹90,000 (Central ₹60k + UP ₹30k)', net: '₹30,000 – ₹55,000', note: 'Small family with intermittent AC' },
  { kw: '3 kW', typical: '₹1,75,000 – ₹2,15,000', subsidy: 'Up to ₹1,08,000 (Central ₹78k + UP ₹30k)', net: '₹67,000 – ₹1,07,000', note: 'Standard 2BHK/3BHK family home' },
  { kw: '5 kW', typical: '₹2,80,000 – ₹3,40,000', subsidy: 'Up to ₹1,08,000 (Capped at 3 kW rates)', net: '₹1,72,000 – ₹2,32,000', note: 'Larger home with multiple ACs & pump' },
  { kw: '10 kW', typical: '₹5,20,000 – ₹6,40,000', subsidy: 'Up to ₹1,08,000 (Residential cap)', net: '₹4,12,000 – ₹5,32,000', note: 'High consumption homes & institutions' },
];

const body = [
  C.pageHero({
    crumbs,
    eyebrow: 'Transparent Cost Guide',
    h1: 'Solar Panel Price in Ayodhya',
    lead: 'What does a quality rooftop solar system actually cost in Ayodhya? A transparent look at hardware components, structural engineering, net-metering fees, and how government subsidies reduce your net out-of-pocket expense.',
    image: 'structure',
    imageAlt: 'High quality rooftop solar mounting structure on an Indian home terrace',
    points: ['No hidden costs or fake low-ball quotes', 'Itemised project breakdown', 'Full subsidy deduction guidance'],
    quoteHref: '#quote',
  }),
  C.split({
    id: 'honest-pricing-philosophy',
    eyebrow: 'Cost Fundamentals',
    title: 'Why Solar Prices Cannot Be Quoted as a One-Size-Fits-All Package',
    html: `<p>Many online advertisements publish unrealistic headline claims like <em>“Get 3 kW solar installed for ₹30,000 total”</em>. Such figures almost always conceal substandard aluminum wiring, fragile low-gauge steel structures prone to storm damage, low-grade reconditioned modules, or surprise installation charges added later.</p>
<p>Every building in Ayodhya is unique. A roof in <strong>Naka</strong> with a direct 10-foot run to the electricity meter requires substantially less copper wiring and labour than a 3-storey building in <strong>Civil Lines</strong> requiring 50 metres of conduit, custom scaffolding, and an 8-foot elevated GI structure.</p>
<p>Our commitment is simple: we conduct a transparent on-site inspection, calculate your real capacity needs, and present an <strong>itemized quotation</strong> showing exactly what you pay for panels, inverter, civil mounting, protection switchgear, and utility liaison.</p>
<p>Curious what size matches your electric bill? Try our <a href="/#calculator">interactive solar calculator</a>.</p>`,
    aside: `<div class="info-card">
<p class="info-card__title">Request an Itemized Quote</p>
<p>Get a precise quotation based on your actual electricity bill and terrace structure.</p>
<ul class="tick-list">
<li>Clear panel &amp; inverter specs</li>
<li>Galvanized structure details</li>
<li>Net metering &amp; earthing included</li>
<li>Official subsidy calculation</li>
</ul>
<a class="btn btn--primary btn--sm btn--block" href="#quote">Get Free Solar Quote</a>
</div>`,
  }),
  `<section class="section section--tint" id="indicative-price-table" aria-labelledby="table-title"><div class="container">
${C.sectionHead({
  eyebrow: 'Cost Overview',
  title: 'Indicative Turnkey Cost & Net Effective Price Range',
  id: 'table-title',
  lead: 'The figures below illustrate typical turnkey project ranges for standard on-grid residential installations in Uttar Pradesh using tier-1 monocrystalline panels and galvanized structures.',
})}
<div class="table-wrap">
<table class="subsidy-table">
<caption>Indicative only — actual quotation depends on site survey, system design, structure height and equipment choices.</caption>
<thead>
<tr>
<th scope="col">System Size</th>
<th scope="col">Estimated Turnkey Cost (Excl. Subsidy)</th>
<th scope="col">Possible Combined Subsidy (If Eligible)</th>
<th scope="col">Net Effective Cost Range</th>
<th scope="col">Best Suited For</th>
</tr>
</thead>
<tbody>
${indicativeRanges
  .map(
    (r) => `<tr>
<th scope="row"><strong>${r.kw}</strong></th>
<td>${r.typical}</td>
<td><span class="badge-subsidy">${r.subsidy}</span></td>
<td><strong>${r.net}</strong></td>
<td><small>${r.note}</small></td>
</tr>`
  )
  .join('')}
</tbody>
</table>
</div>
<div class="callout callout--info">
${icon('info')}
<div>
<strong>Important Clarification:</strong> The figures above are strictly indicative estimates for residential grid-tied systems. Government subsidies under PM Surya Ghar are credited directly to your bank account by the government post-commissioning. Commercial installations (shops, offices, clinics) are not eligible for residential CFA rates.
</div>
</div>
</div></section>`,
  `<section class="section" id="cost-factors" aria-labelledby="factors-title"><div class="container">
${C.sectionHead({
  eyebrow: 'What You Pay For',
  title: 'The 9 Factors That Decide Solar Installation Cost',
  id: 'factors-title',
  lead: 'Understanding where your money goes helps you compare proposals intelligently and avoid dangerous compromises on safety and longevity.',
})}
<ul class="feature-grid">
${priceFactors.map(([ic, t, d]) => `<li class="feature"><h3>${t}</h3><p>${d}</p></li>`).join('')}
</ul>
</div></section>`,
  C.split({
    id: 'return-on-investment',
    eyebrow: 'Financial Payback',
    title: 'Understanding Your Return on Investment (ROI)',
    html: `<p>Unlike purchasing a home appliance or vehicle that depreciates, rooftop solar is an income-generating infrastructure asset that pays for itself over time:</p>
<h3>Average Payback Period: 3 to 4.5 Years</h3>
<p>A typical 3 kW residential system in Ayodhya costs approximately ₹1.85L to ₹2.10L before subsidy. With up to ₹1.08L in combined PM Surya Ghar and UP state financial assistance, your net capital outlay drops to approximately ₹77,000 to ₹1,02,000.</p>
<p>If that 3 kW system produces roughly 360 units per month, it saves approximately ₹2,500 to ₹3,000 every single month on your electricity bill (depending on your utility tariff slab). That equals an annual saving of ~₹30,000 to ₹36,000.</p>
<p>After your capital investment is recovered in roughly 3 to 4 years, the remaining 20+ years of solar power generation represent practically free electricity for your household.</p>`,
    aside: C.figure('home', 'A home solar installation that produces clean electricity for decades'),
    reverse: true,
  }),
  C.faqBlock(pick('cost', 'pmsg', 'upAmount', 'commercialSubsidy', 'duration', 'maintenance', 'twoBhk', 'threeBhk'), {
    title: 'Solar Pricing & Cost Questions',
  }),
  C.relatedLinks([
    ['Solar panels for home', '/solar-panels-for-home/', 'Discover the right system capacity for your house', 'home'],
    ['PM Surya Ghar subsidy guide', '/solar-subsidy-ayodhya/', 'Step-by-step financial assistance instructions', 'doc'],
    ['Rooftop solar technology', '/rooftop-solar-installation/', 'Detailed breakdown of equipment and net metering', 'panel'],
    ['Commercial solar solutions', '/commercial-solar-installation/', 'Pricing and requirements for businesses and shops', 'building'],
    ['Installation gallery', '/projects/', 'View our illustrative and completed project gallery', 'image'],
    ['Contact our engineers', '/contact/', 'Request an in-person site inspection in Ayodhya', 'phone'],
  ]),
  C.finalCta({
    title: 'Request a Free, Transparent Solar Quotation',
    text: 'Send us a copy of your recent electricity bill. We will calculate your exact unit generation and deliver a clear, itemized price proposal.',
    city: 'Ayodhya',
  }),
].join('\n');

module.exports = {
  path: '/solar-panel-price-ayodhya/',
  title: 'Solar Panel Price in Ayodhya | Rooftop Solar Cost Guide',
  description:
    'Solar panel price in Ayodhya: transparent cost breakdown for 1 kW, 2 kW, 3 kW & 5 kW systems, net subsidy calculations, ROI and factors determining quotation.',
  hasForm: true,
  breadcrumbs: crumbs,
  sitemap: { priority: '0.85', changefreq: 'monthly' },
  service: {
    name: 'Solar panel pricing and quotation in Ayodhya',
    type: 'Solar Panel Cost Estimation',
    description: 'Itemized quotation, ROI calculations, and subsidy reconciliation for rooftop solar panel installations in Ayodhya and Faizabad.',
  },
  body,
};
