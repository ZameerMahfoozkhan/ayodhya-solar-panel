const { esc, config } = require('../lib');
const C = require('../components');

const crumbs = [{ name: 'Solar Disclaimer', path: '/disclaimer/' }];

const L = config.officialLinks;

const body = [
  C.pageHero({
    crumbs,
    eyebrow: 'Important Notice',
    h1: 'Solar Information & Subsidy Disclaimer',
    lead: 'Essential clarifications regarding solar power generation estimates, financial savings, equipment costs, and government subsidy policies.',
  }),
  `<section class="section"><div class="container"><div class="prose prose--narrow">
<div class="callout callout--warn">
<strong>Primary Disclaimer Notice:</strong> Solar generation, savings, system sizing, installation cost, and subsidy figures published on this website are indicative estimates only and subject to applicable government rules, DISCOM approvals, and actual on-site technical conditions.
</div>

<h2>1. Solar Generation &amp; Financial Savings Estimates</h2>
<p>All solar generation figures (such as kilowatt-hours/units produced per month or year) and potential monetary savings presented on this website, in our blog articles, or through our interactive solar calculator are mathematical models based on standard North Indian meteorological averages (approx. 4 to 5 peak sun hours daily, or 1,200 to 1,500 units per kW annually).</p>
<p><strong>Actual energy generation depends heavily on variables beyond any installer’s control:</strong></p>
<ul>
<li>Seasonal climatic conditions, including extreme winter fog, monsoonal overcast skies, and regional dust storms.</li>
<li>Unavoidable physical shading from newly constructed adjoining buildings, trees, parapet walls, or water storage tanks.</li>
<li>Rooftop tilt angle, true azimuth alignment, and ambient panel operating temperature.</li>
<li>Grid availability and frequency stability provided by the local electricity distribution company (grid-tied inverters automatically switch off during power cuts to protect line personnel).</li>
<li>Maintenance regularity and cleanliness of the solar panel glass surfaces.</li>
</ul>

<h2>2. Government Scheme &amp; Subsidy Rules Subject to Change</h2>
<p>All descriptions of Central Financial Assistance (CFA) under the national <strong>PM Surya Ghar: Muft Bijli Yojana</strong> and supplementary state financial assistance under the <strong>UPNEDA</strong> policy reflect publicly published government guidelines at the time of authoring.</p>
<p>Government authorities, the Ministry of New &amp; Renewable Energy (MNRE), state governments, and electricity regulatory commissions reserve the statutory authority to alter subsidy slabs, eligibility criteria, vendor registration mandates, documentation procedures, and fund allocation caps without prior notice.</p>
<p><strong>We strongly advise all prospective solar consumers to verify current subsidy rules and eligibility on the official government portals before entering into a purchase commitment:</strong></p>
<ul>
<li><strong>PM Surya Ghar National Portal:</strong> <a href="${L.pmSuryaGhar}" target="_blank" rel="noopener">https://pmsuryaghar.gov.in/</a></li>
<li><strong>Ministry of New &amp; Renewable Energy (MNRE):</strong> <a href="${L.mnre}" target="_blank" rel="noopener">https://mnre.gov.in/</a></li>
<li><strong>Uttar Pradesh New and Renewable Energy Development Agency (UPNEDA):</strong> <a href="${L.upneda}" target="_blank" rel="noopener">https://www.upneda.org.in/</a></li>
<li><strong>UP Solar Cities Portal:</strong> <a href="${L.upSolarCities}" target="_blank" rel="noopener">https://solarcitiesportal.upneda.org.in/</a></li>
</ul>

<h2>3. No Official Government Status</h2>
<p><strong>${esc(config.siteName)} is a privately owned and operated local solar engineering and installation business based in Ayodhya, Uttar Pradesh.</strong></p>
<p>This website is not owned, operated, or endorsed by the Government of India, the State Government of Uttar Pradesh, MNRE, UPNEDA, or any state electricity distribution utility. We do not represent ourselves as an official government portal. We act as an independent installation and engineering service provider guiding customers through verified procedures.</p>

<h2>4. Quotation Disclaimers</h2>
<p>Cost ranges displayed on this site serve solely to assist consumer budgeting. Definite prices can only be issued following a physical engineering survey evaluating structural mounting specifications, cable run distances, earthing pits, and sanctioned electrical load capacity.</p>
</div></div></section>`,
].join('\n');

module.exports = {
  path: '/disclaimer/',
  title: 'Solar Information & Subsidy Disclaimer | Ayodhya Solar Installation',
  description:
    'Solar information, generation estimate and subsidy disclaimer for Ayodhya Solar Installation. Verify current rules with official MNRE & UPNEDA portals.',
  hasForm: false,
  breadcrumbs: crumbs,
  sitemap: { priority: '0.3', changefreq: 'yearly' },
  body,
};
