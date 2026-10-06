const { icon, links, config, inr } = require('../lib');
const C = require('../components');
const { pick } = require('../faq');

const crumbs = [{ name: 'Solar Subsidy in Ayodhya', path: '/solar-subsidy-ayodhya/' }];

const s = config.subsidy;
const L = config.officialLinks;

const documentsList = [
  ['doc', 'Recent Electricity Bill', 'Must be in the name of the applicant with consumer number clearly visible (MVVNL / Purvanchal Vidyut Vitran Nigam). Bill must have no outstanding arrears.'],
  ['user', 'Aadhaar Card of Consumer', 'The name and mobile number on the Aadhaar card must align with the national PM Surya Ghar registration and bank account records.'],
  ['rupee', 'Cancelled Bank Cheque / Bank Passbook', 'Photocopy or scanned image of a cancelled cheque clearly showing the applicant’s name, bank account number, and IFSC code for direct DBT credit.'],
  ['home', 'Terrace Rights Proof / Electricity Meter Photo', 'Clear photograph of the electricity meter showing current reading and serial number, alongside proof of roof access or no-objection certificate (NOC) if shared roof.'],
];

const commonMistakes = [
  ['Mismatched Bank Account Names', 'The bank account submitted for subsidy disbursement must match the electricity consumer name. Subsidies cannot be credited into third-party or business accounts for domestic connections.'],
  ['Installing Non-DCR / Non-Approved Panels', 'Under PM Surya Ghar regulations, all solar modules must use Domestic Content Requirement (DCR) compliant solar cells manufactured in India. Installing uncertified or non-DCR modules completely disqualifies the plant from central subsidies.'],
  ['Starting Work Before DISCOM Feasibility Approval', 'Physical installation must not precede technical feasibility approval issued by your local electricity distribution division on the national portal.'],
  ['Expecting PM Surya Ghar Subsidy for Commercial Meters', 'The central financial assistance of up to ₹78,000 is strictly reserved for residential consumer connections. Applying under commercial or industrial tariff categories results in immediate portal rejection.'],
  ['Incorrect Mobile Number Linked to Bank / Portal', 'All OTP authentications, milestone tracking SMS, and bank DBT validations depend on the active mobile number registered during step 1.'],
];

const body = [
  C.pageHero({
    crumbs,
    eyebrow: 'Government Scheme Guide',
    h1: 'Solar Subsidy in Ayodhya Under PM Surya Ghar',
    lead: 'A comprehensive, verified guide to central and Uttar Pradesh state subsidies for residential rooftop solar in Ayodhya and Faizabad. Understand eligibility, calculate your financial support, and follow the official application procedure.',
    image: 'hero',
    imageAlt: 'Rooftop solar installation on a North Indian home terrace qualifying for PM Surya Ghar subsidy',
    points: ['Up to ₹78,000 Central Assistance', 'Up to ₹30,000 UP State Subvention', 'Combined support up to ₹1.08 Lakh'],
    quoteHref: '#quote',
  }),
  C.split({
    id: 'scheme-overview',
    eyebrow: 'Scheme Structure',
    title: 'Understanding the Combined Central & Uttar Pradesh Solar Subsidy',
    html: `<p>The Government of India launched the <strong>PM Surya Ghar: Muft Bijli Yojana</strong> to provide direct financial assistance to Indian households installing grid-connected rooftop solar power plants. In Uttar Pradesh, the state government provides an additional supplementary subsidy administered through <strong>UPNEDA (Uttar Pradesh New and Renewable Energy Development Agency)</strong>.</p>
<p class="highlight">${C.subsidyEligibleLine()}</p>
<p>Because Ayodhya has been chosen by the Uttar Pradesh administration as a showcase <strong>Model Solar City</strong>, administrative coordination between local DISCOM divisions (Madhyanchal Vidyut Vitran Nigam Ltd / Purvanchal) and solar vendors is closely monitored to streamline consumer approvals.</p>
${C.subsidyChangeNote()}
<p>To verify the latest central guidelines directly, visit the official national portal at <a href="${L.pmSuryaGhar}" target="_blank" rel="noopener">pmsuryaghar.gov.in</a>.</p>`,
    aside: `<div class="info-card">
<p class="info-card__title">Subsidy Summary at a Glance</p>
<ul class="tick-list">
<li><strong>1 kW System:</strong> ₹30,000 Central + ₹15,000 UP = <strong>₹45,000 Total</strong></li>
<li><strong>2 kW System:</strong> ₹60,000 Central + ₹30,000 UP = <strong>₹90,000 Total</strong></li>
<li><strong>3 kW System:</strong> ₹78,000 Central + ₹30,000 UP = <strong>₹1,08,000 Total</strong></li>
<li><strong>Above 3 kW:</strong> Capped at ₹78,000 Central + ₹30,000 UP = <strong>₹1,08,000 Total</strong></li>
</ul>
<p class="info-card__callout">Need our assistance preparing documents? Call <a href="${links.tel}">${config.business.phoneDisplay}</a>.</p>
</div>`,
  }),
  `<section class="section section--tint" id="subsidy-matrix" aria-labelledby="matrix-title"><div class="container">
${C.sectionHead({
  eyebrow: 'Official Rates',
  title: 'Current Residential Subsidy Structure in Uttar Pradesh',
  id: 'matrix-title',
  lead: 'Clear financial breakdown across system capacities under active MNRE and UPNEDA directives.',
})}
${C.subsidyTable()}
<div class="callout callout--info">
${icon('info')}
<div>
<strong>Private Installer Clarification:</strong> ${config.siteName} is a private solar engineering and installation provider. We are not a government agency, and we do not issue subsidies. The subsidy is granted and transferred directly by the Government of India and UPNEDA into your bank account. Our team assists with equipment supply, physical installation, and portal documentation.
</div>
</div>
</div></section>`,
  C.split({
    id: 'eligibility-criteria',
    eyebrow: 'Who Qualifies',
    title: 'Eligibility Requirements for Ayodhya Consumers',
    html: `<p>To successfully receive the combined subsidy, your installation must satisfy the following fundamental requirements:</p>
<h3>1. Domestic Electricity Consumer Category</h3>
<p>The connection tariff code must be domestic residential (LMV-1). Commercial meters (LMV-2), industrial connections, or agricultural pump connections do not qualify for residential CFA.</p>
<h3>2. Grid-Connected System Only</h3>
<p>The system must be a grid-tied installation connected via an approved bi-directional net meter. Off-grid systems with independent batteries are not covered by the PM Surya Ghar subsidy.</p>
<h3>3. Clear Roof Rights</h3>
<p>The applicant must own the house or possess valid legal rights to utilize the rooftop space without encumbrance. In multi-family dwellings, a no-objection certificate (NOC) from co-owners is required.</p>
<h3>4. DCR-Compliant Solar Modules</h3>
<p>Only modules utilizing domestically manufactured solar cells (Domestic Content Requirement) and listed under the MNRE Approved List of Models and Manufacturers (ALMM) can be installed.</p>
<h3>5. Single Subsidy Per Connection</h3>
<p>Central financial assistance can only be claimed once against a unique electricity consumer number.</p>`,
    aside: C.officialLinks('Official Government Portals'),
    reverse: true,
  }),
  `<section class="section" id="application-steps" aria-labelledby="steps-title"><div class="container">
${C.sectionHead({
  eyebrow: 'Application Walkthrough',
  title: 'The 5-Step Official Subsidy Application Procedure',
  id: 'steps-title',
  lead: 'How an application moves from online registration to net metering and direct bank transfer (DBT).',
})}
${C.subsidySteps()}
</div></section>`,
  `<section class="section section--tint" id="required-documents" aria-labelledby="docs-title"><div class="container">
${C.sectionHead({
  eyebrow: 'Checklist',
  title: 'Documents Required for PM Surya Ghar Application',
  id: 'docs-title',
  lead: 'Keep digital scans or clear photos of these four essential records ready before commencing your registration.',
})}
<ul class="feature-grid">
${documentsList.map(([ic, t, d]) => `<li class="feature feature--card">${icon(ic)}<h3>${t}</h3><p>${d}</p></li>`).join('')}
</ul>
</div></section>`,
  `<section class="section" id="mistakes-to-avoid" aria-labelledby="mistakes-title"><div class="container">
${C.sectionHead({
  eyebrow: 'Caution & Warnings',
  title: '5 Common Mistakes That Delay or Disqualify Subsidies',
  id: 'mistakes-title',
  lead: 'Avoid these frequent pitfalls reported by consumers across Uttar Pradesh.',
})}
<div class="prose prose--wide">
<ul class="warning-list">
${commonMistakes
  .map(
    ([t, d]) => `<li>
<strong>${icon('shield')}${t}:</strong> ${d}
</li>`
  )
  .join('')}
</ul>
</div>
</div></section>`,
  C.faqBlock(pick('pmsg', 'upAmount', 'commercialSubsidy', 'netMetering', 'gridTie', 'cost', 'whatsapp'), {
    title: 'Frequently Asked Questions on Solar Subsidies',
  }),
  C.relatedLinks([
    ['Solar panels for home', '/solar-panels-for-home/', 'Choose the optimal system capacity for your house', 'home'],
    ['Solar panel price breakdown', '/solar-panel-price-ayodhya/', 'See how subsidies offset total project investment', 'rupee'],
    ['Rooftop solar installation guide', '/rooftop-solar-installation/', 'Technical details on hardware, structures and net meters', 'panel'],
    ['Ayodhya solar installation', '/solar-panel-installation-ayodhya/', 'Full local service and site survey scope', 'pin'],
    ['Installation in Faizabad', '/solar-panel-installation-faizabad/', 'Faizabad twin-city coverage and DISCOM support', 'building'],
    ['Contact us for assistance', '/contact/', 'Reach our team on WhatsApp or phone', 'phone'],
  ]),
  C.finalCta({
    title: 'Need Help Navigating Your PM Surya Ghar Subsidy?',
    text: 'Share your electricity consumer details with our team. We will check your eligibility, verify your roof space, and guide your complete portal application.',
    city: 'Ayodhya',
  }),
].join('\n');

module.exports = {
  path: '/solar-subsidy-ayodhya/',
  title: 'Solar Subsidy in Ayodhya | PM Surya Ghar & UP State Scheme Guide',
  description:
    'Solar subsidy in Ayodhya under PM Surya Ghar & UPNEDA: get up to ₹1.08 lakh combined central & UP state support. Eligibility, document checklist, and step-by-step application guide.',
  hasForm: true,
  breadcrumbs: crumbs,
  sitemap: { priority: '0.9', changefreq: 'monthly' },
  service: {
    name: 'Solar subsidy facilitation in Ayodhya',
    type: 'Solar Subsidy Guidance Service',
    description: 'Documentation, portal application, DISCOM liaison, and commissioning assistance for PM Surya Ghar rooftop solar subsidy in Ayodhya and Faizabad.',
  },
  body,
};
