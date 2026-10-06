/**
 * ============================================================
 *  SITE CONFIGURATION — the single source of truth.
 * ============================================================
 *  • To move to a custom domain, change SITE_URL below (or set the
 *    SITE_URL environment variable in Vercel). Every canonical URL,
 *    Open Graph URL, sitemap entry and JSON-LD @id is derived from it.
 *  • Business facts here are rendered across the whole site. Do not add
 *    facts (PIN code, hours, ratings, certifications) unless verified.
 */

const SITE_URL = (process.env.SITE_URL || 'https://ayodhya-solar-panel.vercel.app').replace(/\/+$/, '');

module.exports = {
  siteUrl: SITE_URL,
  siteName: 'Ayodhya Solar Installation',
  lang: 'en-IN',
  locale: 'en_IN',
  themeColor: '#121417',
  defaultOgImage: '/assets/img/og-ayodhya-solar-installation.jpg',
  // Date used for article/page "published" metadata. Update when content changes.
  published: '2026-10-06',
  modified: '2026-10-06',

  business: {
    name: 'Ayodhya Solar Installation',
    phone: '+919580659559',
    phoneDisplay: '+91 9580659559',
    whatsapp: '919580659559',
    email: 'ayodhyasolarinstallation@gmail.com',
    address: {
      street: 'Naka Bypass',
      locality: 'Ayodhya',
      region: 'Uttar Pradesh',
      country: 'IN',
      display: 'Naka Bypass, Ayodhya, Uttar Pradesh, India',
    },
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Naka+Bypass,+Ayodhya,+Uttar+Pradesh,+India',
    areaServed: ['Ayodhya', 'Faizabad'],
    // Localities named on the service-area sections. Only list areas you actually serve.
    localities: ['Naka', 'Naka Bypass', 'Civil Lines', 'Deokali', 'Darshan Nagar', 'Rikabganj', 'Faizabad Road', 'Naya Ghat'],
    // Add your Google Business Profile URL when it exists (shown in the reviews section + sameAs).
    gbpUrl: '',
    // Add real social / directory profile URLs only (used for schema sameAs).
    sameAs: [],
  },

  /**
   * Analytics & verification — leave empty to load nothing.
   * Paste IDs here when available, then rebuild/redeploy.
   */
  analytics: {
    ga4Id: '',            // e.g. 'G-XXXXXXXXXX'
    gtmId: '',            // e.g. 'GTM-XXXXXXX' (if set, GA4 should be configured inside GTM instead)
    gscVerification: '',  // Google Search Console HTML-tag "content" value
    bingVerification: '', // Bing Webmaster Tools "msvalidate.01" value
  },

  /**
   * Government support reference values (verify regularly on official portals).
   * Last reviewed: October 2026.
   */
  subsidy: {
    centralByKw: { 1: 30000, 2: 60000, 3: 78000 },
    centralCap: 78000,
    upStatePerKw: 15000,
    upStateCap: 30000,
    combinedMax: 108000,
  },

  officialLinks: {
    mnre: 'https://mnre.gov.in/',
    pmSuryaGhar: 'https://pmsuryaghar.gov.in/',
    upneda: 'https://www.upneda.org.in/',
    upSolarCities: 'https://solarcitiesportal.upneda.org.in/',
  },

  /**
   * Real projects go here. Until then the projects page shows an honest
   * "gallery coming soon" layout. Example entry:
   * { title: '3 kW rooftop system', location: 'Civil Lines, Ayodhya', property: 'Independent house',
   *   size: '3 kW', date: '2026-11', description: '...', images: [{ src: '/assets/img/projects/xyz-800.webp', alt: '...' , w: 800, h: 533 }] }
   */
  projects: [],

  /**
   * Genuine customer reviews only. Example:
   * { name: 'First name / initial', area: 'Deokali', text: '...', date: '2026-11', source: 'Google' }
   */
  reviews: [],

  /**
   * Future language versions (e.g. Hindi at /hi/). When a translated page exists,
   * add its path in that page's `alternates` and hreflang tags are emitted automatically.
   */
  languages: [{ code: 'en-IN', prefix: '' }],
};
