const { icon, picture, links, inr, config } = require('../lib');
const C = require('../components');
const { HOME_FAQ } = require('../faq');

const b = config.business;

const hero = `<section class="hero" aria-labelledby="hero-title">
<div class="hero__media">${picture('hero', { eager: true, sizes: '100vw', cls: 'hero__pic' })}</div>
<div class="hero__shade" aria-hidden="true"></div>
<div class="container hero__inner">
<p class="hero__tag">${icon('pin')}Serving Ayodhya &amp; Faizabad</p>
<h1 id="hero-title">Solar Panel Installation in Ayodhya</h1>
<p class="hero__kicker">Power Your Home With Rooftop Solar</p>
<p class="hero__text">Get reliable rooftop solar solutions for homes and businesses in Ayodhya and Faizabad. Understand your solar requirement, explore available government support and request a personalized installation quote.</p>
<div class="btn-row">
<a class="btn btn--primary btn--lg" href="#quote">Get Free Solar Quote<span class="btn__icon">${icon('arrow')}</span></a>
<a class="btn btn--wa btn--lg" href="${links.wa}" target="_blank" rel="noopener">${icon('whatsapp')}WhatsApp Us</a>
<a class="btn btn--ghost btn--lg hero__call" href="${links.tel}">${icon('phone')}Call ${b.phoneDisplay}</a>
</div>
</div>
<span class="pic-label pic-label--hero">Illustrative image</span>
</section>`;

const why = `<section class="section" id="why-solar" aria-labelledby="why-title">
<div class="container why">
<div class="why__intro">
<p class="eyebrow">Why solar in Ayodhya</p>
<h2 class="section-title" id="why-title">Solar Made for Ayodhya Homes</h2>
<div class="prose">
<p>Ayodhya has been taken up by the Uttar Pradesh government for development as a model solar city, and rooftop solar is becoming a practical, everyday option for households and businesses here. Most homes in the city have flat concrete roofs that sit unused for most of the year — and that space can produce a good share of the electricity a family needs.</p>
<p>That doesn’t mean solar suits every roof. Shade from neighbouring buildings, a small terrace or a low electricity bill can change the picture. Our job is to tell you plainly whether it makes sense for your home, and what size makes sense.</p>
<p>You can follow the government’s solar city work on the <a href="${config.officialLinks.upSolarCities}" target="_blank" rel="noopener">UP Solar Cities Portal</a>, or read our detailed page on <a href="/solar-panel-installation-ayodhya/">solar panel installation in Ayodhya</a>.</p>
</div>
</div>
<ul class="reasons">
<li class="reason">${icon('rupee')}<h3>Lower electricity bills</h3><p>Every unit your panels produce is a unit you don’t buy from the grid — especially valuable through Ayodhya’s long, AC-heavy summers.</p></li>
<li class="reason">${icon('home')}<h3>Use your empty roof</h3><p>A terrace that only holds a water tank can host a system on a raised frame, often leaving the space underneath usable.</p></li>
<li class="reason">${icon('clock')}<h3>Long-term savings</h3><p>Panels are typically designed to keep generating for decades, so the benefit builds up year after year.</p></li>
<li class="reason">${icon('doc')}<h3>Government support</h3><p>Eligible residential consumers can receive central and Uttar Pradesh support for grid-connected rooftop solar.</p></li>
<li class="reason">${icon('leaf')}<h3>Cleaner energy</h3><p>Solar power produces no emissions while generating, reducing your household’s dependence on fossil-fuel electricity.</p></li>
<li class="reason">${icon('bolt')}<h3>More energy independence</h3><p>Generate your own daytime power, and add battery backup with a hybrid system if power cuts are a concern.</p></li>
</ul>
</div>
</section>`;

const solutions = `<section class="section section--tint" id="solutions" aria-labelledby="solutions-title">
<div class="container">
${C.sectionHead({ eyebrow: 'Solar solutions', title: 'Rooftop Solar Solutions for Ayodhya', id: 'solutions-title', lead: 'Whether it’s a family home in Civil Lines or a shop on Faizabad Road, every system starts with your bill and your roof — not a fixed package.' })}
<div class="cards-4">
${[
  ['home', 'Residential Solar', 'For homeowners in Ayodhya looking to reduce electricity costs with rooftop solar.', 'Explore Residential Solar', '/solar-panels-for-home/', 'Independent house with a raised rooftop solar frame'],
  ['structure', 'Rooftop Solar', 'Custom rooftop planning based on available roof space, energy consumption and property layout.', 'Explore Rooftop Solar', '/rooftop-solar-installation/', 'Close view of a galvanised steel solar mounting structure'],
  ['commercial', 'Commercial Solar', 'Solar solutions for shops, offices, clinics, schools and commercial buildings.', 'Explore Commercial Solar', '/commercial-solar-installation/', 'Rows of solar panels on a commercial building roof'],
  ['cleaning', 'Solar Maintenance', 'Ongoing inspection, cleaning and maintenance support.', 'Explore Maintenance', '/solar-panel-maintenance/', 'Technician cleaning rooftop solar panels'],
]
  .map(
    ([img, t, d, cta, href, alt]) => `<article class="sol-card">
<div class="sol-card__media">${picture(img, { sizes: '(min-width: 1100px) 290px, (min-width: 640px) 50vw, 100vw', alt })}</div>
<div class="sol-card__body"><h3>${t}</h3><p>${d}</p><a class="link-arrow" href="${href}">${cta}${icon('arrow')}</a></div>
</article>`
  )
  .join('')}
</div>
<p class="note-line">All photos on this website are illustrative until our own project photos are published.</p>
</div>
</section>`;

const how = `<section class="section" id="how-it-works" aria-labelledby="how-title">
<div class="container">
${C.sectionHead({ eyebrow: 'How it works', title: 'How Solar Installation Works', id: 'how-title', lead: 'From your first message to a working system, here is what happens — and what you can expect from us at each stage.' })}
${C.installSteps()}
<p class="center-link"><a class="link-arrow" href="/rooftop-solar-installation/">See how a rooftop system is put together${icon('arrow')}</a></p>
</div>
</section>`;

const subsidy = `<section class="section section--tint" id="subsidy" aria-labelledby="subsidy-title">
<div class="container">
<div class="subsidy-grid">
<div>
<p class="eyebrow">Government support</p>
<h2 class="section-title" id="subsidy-title">Solar Subsidy in Ayodhya Under PM Surya Ghar</h2>
<div class="prose">
<p>Under the PM Surya Ghar scheme, eligible residential consumers can receive central financial assistance for grid-connected rooftop solar. In Uttar Pradesh, an additional state subsidy is available for residential systems.</p>
<p class="highlight">${C.subsidyEligibleLine()}</p>
<p>Applications are made through the official national portal, and the subsidy is released by the government after installation, net metering and inspection — not by the installer.</p>
</div>
${C.subsidyChangeNote()}
</div>
<div>
${C.subsidyTable()}
${C.officialLinks()}
</div>
</div>
<h3 class="sub-title">The subsidy process in 5 steps</h3>
${C.subsidySteps()}
<p class="center-link"><a class="link-arrow" href="/solar-subsidy-ayodhya/">Read the complete Ayodhya solar subsidy guide${icon('arrow')}</a></p>
</div>
</section>`;

const chooseUs = `<section class="section choose-section" id="why-us" aria-labelledby="whyus-title">
<div class="container choose">
<div class="choose__intro">
${C.sectionHead({
  eyebrow: 'Why choose us',
  title: 'A Local Installer That Explains Before It Sells',
  id: 'whyus-title',
  lead: 'We believe rooftop solar should be transparent, carefully engineered and straightforward. Here is what you can count on when working with our local team.',
})}
</div>

<div class="choose__media">
  <div class="choose__frame">
    ${picture('inverter', { sizes: '(min-width: 1024px) 440px, 100vw', label: true })}
    <div class="choose__badge">
      <span class="choose__badge-dot" aria-hidden="true"></span>
      <span>Inverter &amp; Protection DB Setup &bull; Ayodhya Terrace</span>
    </div>
  </div>
  <div class="choose__guarantees" aria-label="Our core local standards">
    <div class="choose__guarantee">${icon('check')}<span>Physical site survey from Naka Bypass</span></div>
    <div class="choose__guarantee">${icon('check')}<span>100% itemised component quotations</span></div>
    <div class="choose__guarantee">${icon('check')}<span>Direct local team &bull; Zero call-centre runarounds</span></div>
  </div>
</div>

<ul class="choose__list">
<li class="choose__card">
  <div class="choose__card-top">
    <span class="choose__icon">${icon('pin')}</span>
    <span class="choose__num">01</span>
  </div>
  <h3>Based in Ayodhya</h3>
  <p>We work from Naka Bypass, so site visits, follow-ups and service calls are local — not routed through a distant call centre.</p>
</li>
<li class="choose__card">
  <div class="choose__card-top">
    <span class="choose__icon">${icon('calc')}</span>
    <span class="choose__num">02</span>
  </div>
  <h3>Sized from your real usage</h3>
  <p>We recommend a system from your bills, sanctioned load and roof — not the biggest system we can sell.</p>
</li>
<li class="choose__card">
  <div class="choose__card-top">
    <span class="choose__icon">${icon('doc')}</span>
    <span class="choose__num">03</span>
  </div>
  <h3>Clear, itemised quotations</h3>
  <p>You see what you’re paying for: panels, inverter, structure, cabling, protection and installation listed separately.</p>
</li>
<li class="choose__card">
  <div class="choose__card-top">
    <span class="choose__icon">${icon('clipboard')}</span>
    <span class="choose__num">04</span>
  </div>
  <h3>Subsidy &amp; paperwork guidance</h3>
  <p>We explain the PM Surya Ghar steps and help you prepare documents, while being honest that approval rests with the authorities.</p>
</li>
<li class="choose__card">
  <div class="choose__card-top">
    <span class="choose__icon">${icon('shield')}</span>
    <span class="choose__num">05</span>
  </div>
  <h3>Careful installation practice</h3>
  <p>Sound structure anchoring, proper earthing and protection devices, and tidy cable routing are the details we focus on.</p>
</li>
<li class="choose__card">
  <div class="choose__card-top">
    <span class="choose__icon">${icon('wrench')}</span>
    <span class="choose__num">06</span>
  </div>
  <h3>Support after installation</h3>
  <p>Cleaning guidance, inspections and help when something doesn’t look right — one WhatsApp message away.</p>
</li>
</ul>
</div>
</section>`;

module.exports = {
  path: '/',
  title: 'Solar Panel Installation in Ayodhya | Rooftop Solar',
  ogTitle: 'Solar Panel Installation in Ayodhya | Ayodhya Solar Installation',
  description:
    'Solar panel installation in Ayodhya and Faizabad for homes and businesses. Explore rooftop solar, government subsidy guidance and request a personalized solar quote.',
  hasForm: true,
  preloadHero: true,
  bodyClass: 'is-home',
  sitemap: { priority: '1.0', changefreq: 'weekly' },
  faq: HOME_FAQ,
  service: {
    name: 'Solar panel installation in Ayodhya',
    type: 'Rooftop solar installation',
    description: 'Site assessment, system sizing, installation and support for residential and commercial rooftop solar in Ayodhya and Faizabad.',
  },
  body: [
    hero,
    C.trustStrip(),
    why,
    solutions,
    C.calculator(),
    how,
    subsidy,
    chooseUs,
    C.serviceArea(),
    C.galleryPreview(),
    C.reviewsBlock(),
    C.faqBlock(HOME_FAQ, {
      title: 'Solar Installation Questions From Ayodhya Homeowners',
      lead: `Straight answers to what people ask us most. For costs, see the <a href="/solar-panel-price-ayodhya/">solar price guide</a>; for business premises, see <a href="/commercial-solar-installation/">commercial solar</a>.`,
    }),
    C.finalCta(),
  ].join('\n'),
};
