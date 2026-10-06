const { icon, links, config, esc } = require('../lib');
const C = require('../components');
const { pick } = require('../faq');

const crumbs = [{ name: 'Contact', path: '/contact/' }];

const b = config.business;

const contactCards = [
  {
    icon: 'phone',
    title: 'Phone Consultation',
    val: b.phoneDisplay,
    sub: 'Speak directly with our local engineering desk.',
    cta: 'Call Now',
    href: links.tel,
    cls: 'btn--primary',
  },
  {
    icon: 'whatsapp',
    title: 'WhatsApp Chat',
    val: b.phoneDisplay,
    sub: 'Send photos of your bill or roof for instant advice.',
    cta: 'Chat on WhatsApp',
    href: links.wa,
    cls: 'btn--wa',
    target: '_blank',
  },
  {
    icon: 'mail',
    title: 'Email Us',
    val: b.email,
    sub: 'Send architectural drawings or detailed RFPs.',
    cta: 'Send Email',
    href: links.mail,
    cls: 'btn--outline',
  },
  {
    icon: 'pin',
    title: 'Our Location',
    val: b.address.display,
    sub: 'Located strategically on Naka Bypass.',
    cta: 'Open Google Maps',
    href: links.maps,
    cls: 'btn--dark',
    target: '_blank',
  },
];

const body = [
  C.pageHero({
    crumbs,
    eyebrow: 'Get in Touch',
    h1: 'Contact for Solar Panel Installation in Ayodhya',
    lead: 'Connect directly with our local team on Naka Bypass. Whether you have questions about PM Surya Ghar subsidies, want to understand your bill, or need an on-site roof inspection, we are here to help.',
    image: 'structure',
    imageAlt: 'Solar engineering mounting structure installed on a rooftop in Ayodhya',
    points: ['Direct phone & WhatsApp access', 'Free site survey scheduling', 'Fast response within hours'],
    quoteHref: '#quote',
  }),
  `<section class="section" id="contact-channels" aria-labelledby="channels-title"><div class="container">
${C.sectionHead({
  eyebrow: 'Direct Contact Details',
  title: 'How You Can Reach Our Team',
  id: 'channels-title',
  lead: 'Choose your preferred channel. We do not use automated telephone bots — you speak directly with our Ayodhya team.',
})}
<div class="cards-4">
${contactCards
  .map(
    (c) => `<div class="contact-channel-card shell">
<div class="core">
<div class="contact-channel-card__icon">${icon(c.icon)}</div>
<h3>${c.title}</h3>
<p class="contact-channel-card__val"><strong>${esc(c.val)}</strong></p>
<p class="contact-channel-card__sub">${c.sub}</p>
<a class="btn ${c.cls} btn--sm btn--block" href="${c.href}"${c.target ? ` target="${c.target}" rel="noopener"` : ''}>${c.cta}</a>
</div>
</div>`
  )
  .join('')}
</div>
</div></section>`,
  `<section class="section section--tint" id="quote" aria-labelledby="form-section-title"><div class="container">
<div class="split">
<div class="split__main">
<p class="eyebrow">Quick Inquiry Form</p>
<h2 class="section-title" id="form-section-title">Request a Free Solar Roof Assessment</h2>
<div class="prose">
<p>Fill out the form with your approximate electricity bill and property details. When you click submit, our system generates a pre-formatted message in WhatsApp so you can review and send it directly to our phone number (<strong>${b.phoneDisplay}</strong>).</p>
<p>No user account or login is required. We never sell your contact information or send unsolicited promotional spam.</p>
</div>
<div class="address-box">
<h3>${icon('pin')}Operational Base</h3>
<p><strong>${esc(b.name)}</strong></p>
<p>${esc(b.address.display)}</p>
<p>Serving all localities of Ayodhya and Faizabad, Uttar Pradesh.</p>
<div class="btn-row">
<a class="btn btn--outline btn--sm" href="${links.maps}" target="_blank" rel="noopener">${icon('pin')}View on Google Maps</a>
<a class="btn btn--wa btn--sm" href="${links.wa}" target="_blank" rel="noopener">${icon('whatsapp')}Message on WhatsApp</a>
</div>
</div>
</div>
<div class="split__aside">
<div class="shell shell--dark">
${C.leadForm({ city: 'Ayodhya', title: 'Get My Free Solar Assessment' })}
</div>
</div>
</div>
</div></section>`,
  C.serviceArea({
    title: 'Service Areas Covered from Our Naka Bypass Base',
    lead: 'We provide prompt site visits across all sectors of Ayodhya, Faizabad, and immediate surrounding developments.',
    tag: 'h2',
  }),
  C.faqBlock(pick('whatsapp', 'faizabad', 'duration', 'cost', 'pmsg'), {
    title: 'Questions Before Contacting Us',
  }),
  C.relatedLinks([
    ['Solar panels for home', '/solar-panels-for-home/', 'Home system sizing and component guide', 'home'],
    ['Solar subsidy in Ayodhya', '/solar-subsidy-ayodhya/', 'PM Surya Ghar scheme rules and eligibility criteria', 'doc'],
    ['Solar panel price guide', '/solar-panel-price-ayodhya/', 'Transparent pricing breakdown for Ayodhya', 'rupee'],
    ['Rooftop solar technology', '/rooftop-solar-installation/', 'Detailed breakdown of equipment and net metering', 'panel'],
    ['Commercial solar solutions', '/commercial-solar-installation/', 'Solar for shops, offices, and institutions', 'building'],
    ['About our service', '/about/', 'Learn about our local focus and consultation approach', 'user'],
  ]),
].join('\n');

module.exports = {
  path: '/contact/',
  title: 'Contact for Solar Panel Installation in Ayodhya | Call & WhatsApp',
  description:
    'Contact Ayodhya Solar Installation: Phone & WhatsApp +91 9580659559, email, and office at Naka Bypass, Ayodhya. Request a free rooftop solar assessment.',
  hasForm: true,
  breadcrumbs: crumbs,
  sitemap: { priority: '0.8', changefreq: 'monthly' },
  body,
};
