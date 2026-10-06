const { esc, config } = require('../lib');
const C = require('../components');

const crumbs = [{ name: 'Privacy Policy', path: '/privacy-policy/' }];

const body = [
  C.pageHero({
    crumbs,
    eyebrow: 'Legal Transparency',
    h1: 'Privacy Policy',
    lead: 'We believe in straightforward, privacy-first communication. Here is how information submitted through this website is handled.',
  }),
  `<section class="section"><div class="container"><div class="prose prose--narrow">
<p><strong>Effective Date:</strong> October 2026</p>
<p>This Privacy Policy outlines how <strong>${esc(config.siteName)}</strong> (“we”, “us”, or “our”) handles user information when you visit our website (https://ayodhya-solar-panel.vercel.app) or submit an inquiry.</p>

<h2>1. No Server-Side Database Storage</h2>
<p>Our website is a static, high-performance website. <strong>We do not maintain a backend database (such as PostgreSQL, MySQL, Supabase, or Firebase) to harvest or store user contact submissions.</strong></p>

<h2>2. How Your Form Data is Handled</h2>
<p>When you fill out our online solar assessment form:</p>
<ul>
<li><strong>WhatsApp Submission (Default):</strong> The form uses client-side JavaScript in your web browser to generate a pre-formatted inquiry text message and launches the official WhatsApp application or web client. Your information travels directly from your device to our official WhatsApp business number (<strong>+91 9580659559</strong>) under WhatsApp’s end-to-end encrypted privacy policy.</li>
<li><strong>Email Submission:</strong> If you select the email option, your browser prepares a draft message directed to <strong>ayodhyasolarinstallation@gmail.com</strong> via your preferred email client.</li>
</ul>

<h2>3. Information We Collect During Consultation</h2>
<p>The information you voluntarily choose to share (such as your name, telephone number, city or locality, electricity bill range, and roof type) is used strictly to evaluate your solar energy requirements, provide an accurate quotation, and answer your questions.</p>

<h2>4. No Sale or Sharing of Personal Data</h2>
<p>We do not sell, rent, monetize, or disclose your contact details to third-party telemarketers, data aggregators, or external lead brokers. Your information is used solely by our local Ayodhya installation team.</p>

<h2>5. Cookies &amp; Third-Party Services</h2>
<p>This website does not deploy invasive tracking cookies or cross-site profiling trackers. We may utilize standard, privacy-respecting website analytics or Search Console verification to observe general page views and technical loading speed without identifying individual users.</p>

<h2>6. External Government Portals</h2>
<p>Our website provides informational outbound hyperlinks to official government websites (e.g. <em>pmsuryaghar.gov.in</em>, <em>mnre.gov.in</em>, <em>upneda.org.in</em>). We are not responsible for the privacy practices or content of external government platforms.</p>

<h2>7. Contact Information</h2>
<p>If you have any questions regarding this Privacy Policy, please contact us directly at:</p>
<p>
<strong>${esc(config.business.name)}</strong><br>
Address: ${esc(config.business.address.display)}<br>
Phone: ${esc(config.business.phoneDisplay)}<br>
Email: <a href="mailto:${config.business.email}">${esc(config.business.email)}</a>
</p>
</div></div></section>`,
].join('\n');

module.exports = {
  path: '/privacy-policy/',
  title: 'Privacy Policy | Ayodhya Solar Installation',
  description:
    'Privacy Policy for Ayodhya Solar Installation. Transparent explanation of how client inquiries and WhatsApp messages are processed without server data storage.',
  hasForm: false,
  breadcrumbs: crumbs,
  sitemap: { priority: '0.3', changefreq: 'yearly' },
  body,
};
