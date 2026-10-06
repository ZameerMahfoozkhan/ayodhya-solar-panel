const { icon, links, config } = require('../lib');
const C = require('../components');

const slug = 'pm-surya-ghar-subsidy-ayodhya-guide';
const path = `/blog/${slug}/`;
const title = 'PM Surya Ghar Subsidy in Ayodhya: Eligibility and Application Guide';
const description = 'Complete step-by-step application and eligibility guide for PM Surya Ghar Muft Bijli Yojana in Ayodhya. Claim up to ₹1.08 lakh central and UP state subsidy.';

const crumbs = [
  { name: 'Blog', path: '/blog/' },
  { name: 'PM Surya Ghar Subsidy Guide', path },
];

const L = config.officialLinks;

const body = [
  C.pageHero({
    crumbs,
    eyebrow: 'Subsidy & Financial Support',
    h1: title,
    lead: 'How Ayodhya and Faizabad homeowners can claim up to ₹1.08 lakh in combined central and Uttar Pradesh subsidies for rooftop solar under PM Surya Ghar Muft Bijli Yojana.',
    image: 'hero',
    imageAlt: 'Rooftop solar panels qualifying for PM Surya Ghar subsidy in Ayodhya',
    points: ['Direct Benefit Transfer (DBT) explained', 'Document preparation guide', 'Step-by-step portal registration walk-through'],
  }),
  `<article class="section article-body"><div class="container"><div class="prose prose--article">
<p class="article-meta">Published: October 2026 · Author: Policy & Regulatory Desk at ${config.siteName} · 8 min read</p>

<p>The <strong>PM Surya Ghar: Muft Bijli Yojana</strong> is the Government of India’s flagship national initiative to accelerate residential rooftop solar installations across India. Under this program, eligible homeowners receive direct financial assistance (Central Financial Assistance or CFA) deposited straight into their bank accounts.</p>
<p>In Uttar Pradesh, the state government provides an additional supplementary subsidy administered through <strong>UPNEDA</strong>, making Ayodhya one of the most financially attractive regions in the country to adopt solar power.</p>

<h2>1. How Much Subsidy Can You Get in Uttar Pradesh?</h2>
<p>The total financial assistance is composed of two distinct components:</p>
<div class="table-wrap">
<table class="subsidy-table">
<thead>
<tr><th>System Capacity</th><th>Central Government CFA</th><th>UP State Subsidy</th><th>Combined Subsidy Total</th></tr>
</thead>
<tbody>
<tr><td><strong>1 kW</strong></td><td>₹30,000</td><td>₹15,000</td><td><strong>₹45,000</strong></td></tr>
<tr><td><strong>2 kW</strong></td><td>₹60,000</td><td>₹30,000</td><td><strong>₹90,000</strong></td></tr>
<tr><td><strong>3 kW</strong></td><td>₹78,000</td><td>₹30,000 (Capped)</td><td><strong>₹1,08,000</strong></td></tr>
<tr><td><strong>Above 3 kW</strong></td><td>₹78,000 (Capped)</td><td>₹30,000 (Capped)</td><td><strong>₹1,08,000</strong></td></tr>
</tbody>
</table>
</div>
<p class="highlight">${C.subsidyEligibleLine()}</p>

<h2>2. Who Is Eligible in Ayodhya &amp; Faizabad?</h2>
<p>Before applying on the national portal, verify that you satisfy these core conditions:</p>
<ul>
<li><strong>Domestic Consumer Tariff:</strong> Your electricity bill must reflect a residential domestic tariff (LMV-1). Commercial shops, clinics, offices, and industrial connections do not qualify for PM Surya Ghar CFA.</li>
<li><strong>Ownership or Legal Terrace Rights:</strong> The applicant must be the registered property owner or possess clear legal rights to install solar on the terrace.</li>
<li><strong>Clear Electricity Bill Records:</strong> There should be no outstanding arrears or legal disputes linked to your electricity connection number.</li>
<li><strong>DCR Modules Mandatory:</strong> Modules must use solar cells manufactured domestically in India (DCR compliance) and be listed under MNRE's Approved List of Models and Manufacturers (ALMM).</li>
<li><strong>One Subsidy per Consumer ID:</strong> Subsidies cannot be re-applied for on the same electricity account.</li>
</ul>

<h2>3. Step-by-Step Application Process (pmsuryaghar.gov.in)</h2>
<p>The registration process involves five sequential milestones:</p>
<h3>Step 1: Portal Registration</h3>
<p>Visit the official portal at <a href="${L.pmSuryaGhar}" target="_blank" rel="noopener">pmsuryaghar.gov.in</a>. Select your state (Uttar Pradesh) and distribution utility (e.g. Madhyanchal Vidyut Vitran Nigam Ltd / Purvanchal). Enter your consumer account number and active mobile phone number.</p>
<h3>Step 2: Technical Feasibility Approval</h3>
<p>Submit your rooftop solar application indicating your sanctioned load and proposed solar kilowatt capacity. The local DISCOM reviews the distribution transformer load and grants feasibility approval online.</p>
<h3>Step 3: Installation by Registered Vendor</h3>
<p>Once feasibility is approved, engage a qualified local vendor to install the DCR solar panels, inverter, galvanized mounting structure, and dual-layer AC/DC protection boxes.</p>
<h3>Step 4: Net Metering &amp; Joint Inspection</h3>
<p>Upon installation completion, submit plant details and inverter photos on the portal to request net metering. A DISCOM junior engineer visits the property to verify anti-islanding trip safety, inspect the earthing pits, and install the tested bi-directional meter.</p>
<h3>Step 5: Commissioning Report &amp; Subsidy Disbursement</h3>
<p>The DISCOM generates the official Commissioning Certificate on the portal. You upload a cancelled cheque showing your bank details, and the subsidy is released directly via DBT into your bank account.</p>

<h2>4. Important Cautions and Rules</h2>
<p>To avoid delays or rejection of your subsidy:</p>
<ul>
<li>Ensure the bank account name matches the electricity bill name exactly.</li>
<li>Never begin physical installation before obtaining official feasibility clearance on the portal.</li>
<li>Remember that government subsidy rules and fund allocations can change. Always verify current details on the <a href="${L.pmSuryaGhar}" target="_blank" rel="noopener">PM Surya Ghar portal</a> or consult our <a href="/solar-subsidy-ayodhya/">Ayodhya solar subsidy page</a>.</li>
</ul>
</div></div></article>`,
  C.ctaBand({
    title: 'Need Help with Your PM Surya Ghar Application?',
    text: 'Our team at Naka Bypass assists with site surveys, portal paperwork, and DISCOM net-metering liaison.',
    quoteHref: '/contact/#quote',
  }),
  C.relatedLinks([
    ['Solar subsidy in Ayodhya', '/solar-subsidy-ayodhya/', 'Complete local guide with document checklist', 'doc'],
    ['Solar panels for home', '/solar-panels-for-home/', 'System sizing and 2BHK/3BHK house examples', 'home'],
    ['Solar panel price guide', '/solar-panel-price-ayodhya/', 'Understand equipment and installation costs', 'rupee'],
    ['Rooftop solar technology', '/rooftop-solar-installation/', 'Detailed look at structures, inverters and net metering', 'panel'],
    ['Contact our team', '/contact/', 'Reach out on WhatsApp or phone for direct assistance', 'phone'],
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
