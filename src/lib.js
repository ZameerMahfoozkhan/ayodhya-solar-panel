/**
 * Small rendering helpers shared by every page.
 */
const config = require('./config');

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const abs = (path = '/') => config.siteUrl + path;

const inr = (n) => '₹' + Number(n).toLocaleString('en-IN');

const b = config.business;
const links = {
  tel: `tel:${b.phone}`,
  wa: `https://wa.me/${b.whatsapp}`,
  waText: (t) => `https://wa.me/${b.whatsapp}?text=${encodeURIComponent(t)}`,
  mail: `mailto:${b.email}`,
  maps: b.mapsUrl,
};

/* ---------- Icons (inline SVG sprite, 1.6px strokes) ---------- */
const ICONS = {
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"/>',
  home: '<path d="M3.5 10.5 12 3.5l8.5 7"/><path d="M5.5 9v11h13V9"/><path d="M10 20v-5.5h4V20"/>',
  panel: '<path d="M3 17.5 6 6.5h12l3 11z"/><path d="M4.5 12h15M9.5 6.5 8.5 17.5M14.5 6.5l1 11"/><path d="M12 17.5v3M8.5 20.5h7"/>',
  building: '<path d="M4 20.5V5.5l8-2.5v17.5M12 7.5l8 2.5v10.5"/><path d="M2.5 20.5h19M7 8.5h2M7 12h2M7 15.5h2M15 12h2M15 15.5h2"/>',
  wrench: '<path d="M14.7 6.3a4 4 0 0 0 5 5L21 12.6a6 6 0 0 1-7.7 1.2L6.5 20.6a2 2 0 0 1-2.9-2.9l6.8-6.8A6 6 0 0 1 11.4 3l1.3 1.3a4 4 0 0 0 2 2z"/>',
  phone: '<path d="M5 3.5h3.2l1.6 4.2-2 1.3a11 11 0 0 0 5.2 5.2l1.3-2 4.2 1.6V17a2.5 2.5 0 0 1-2.7 2.5A15.5 15.5 0 0 1 2.5 6.2 2.5 2.5 0 0 1 5 3.5z"/>',
  whatsapp: '<path d="M3.5 20.5l1.3-4.3A8.5 8.5 0 1 1 8 19.3z"/><path d="M9 8.3c.2-.5.6-.6 1-.6l.6 1.5-.6.9a5 5 0 0 0 2.4 2.4l.9-.6 1.5.6c0 .4-.1.8-.6 1-1 .5-2.6.1-4-1.3S8.5 9.3 9 8.3z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/>',
  pin: '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
  check: '<path d="m4.5 12.5 4.5 4.5 10.5-10.5"/>',
  arrow: '<path d="M4.5 12h15M13.5 6l6 6-6 6"/>',
  arrowUpRight: '<path d="M7 17 17 7M8.5 7H17v8.5"/>',
  calc: '<rect x="4.5" y="2.5" width="15" height="19" rx="2.5"/><path d="M8 6.5h8v3H8zM8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01M16 17h.01"/>',
  rupee: '<path d="M6.5 4.5h11M6.5 9h11M9.5 4.5c3.6 0 5.5 1.6 5.5 4.5s-2.2 4.5-5.5 4.5h-3l7.5 7"/>',
  shield: '<path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.2 7.5 9.5 4.3-1.3 7.5-4.9 7.5-9.5V6z"/><path d="m9 12 2.2 2.2L15.5 10"/>',
  clipboard: '<rect x="5" y="4.5" width="14" height="17" rx="2"/><path d="M9 4.5V3h6v1.5M8.5 10.5h7M8.5 14h7M8.5 17.5h4"/>',
  bolt: '<path d="M13 2.5 5 13.5h6l-1 8 8-11h-6z"/>',
  leaf: '<path d="M5 19c0-9 5-14.5 15-14.5 0 10-5.5 15-14 15"/><path d="M5 19c2.5-4 5.5-6.5 9-8"/>',
  chat: '<path d="M4 5.5h16v10.5H9l-5 4z"/><path d="M8 10h8M8 13h5"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  external: '<path d="M14 4.5h5.5V10M19.5 4.5 11 13M18 14v5.5H4.5V6H10"/>',
  plug: '<path d="M9 2.5v5M15 2.5v5M6.5 7.5h11v3.5a5.5 5.5 0 0 1-11 0zM12 16.5v5"/>',
  ruler: '<path d="m3.5 16.5 13-13 4 4-13 13z"/><path d="m7 13 2 2M10 10l2 2M13 7l2 2"/>',
  doc: '<path d="M6 2.5h8l4.5 4.5v14.5H6z"/><path d="M14 2.5V7h4.5M9 12h6M9 15.5h6"/>',
  grid: '<path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/>',
  battery: '<rect x="2.5" y="7" width="17" height="10" rx="2"/><path d="M21.5 10.5v3M6.5 10v4M10 10v4"/>',
  meter: '<circle cx="12" cy="12" r="8.5"/><path d="M12 12 15.5 8.5M7 15.5h10"/>',
  cloud: '<path d="M7 18.5a4.5 4.5 0 0 1-.6-9 6 6 0 0 1 11.5 1.7A3.7 3.7 0 0 1 17.5 18.5z"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0"/>',
  star: '<path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/>',
  menu: '<path d="M3.5 7h17M3.5 12h17M3.5 17h17"/>',
  close: '<path d="M5.5 5.5l13 13M18.5 5.5l-13 13"/>',
  image: '<rect x="3" y="4.5" width="18" height="15" rx="2"/><circle cx="9" cy="10" r="1.8"/><path d="m3.5 17.5 5-4.5 4 3.5 3-2.5 5 4"/>',
  info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5M12 7.8h.01"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/>',
  cleaning: '<path d="M3 6h18v2.5H3zM12 8.5V20M8.5 20h7M6 3.5l1.5 2.5M18 3.5l-1.5 2.5"/>',
};

const sprite = () =>
  `<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">${Object.entries(ICONS)
    .map(([k, v]) => `<symbol id="i-${k}" viewBox="0 0 24 24">${v}</symbol>`)
    .join('')}</svg>`;

const icon = (name, cls = '') =>
  `<svg class="icon${cls ? ' ' + cls : ''}" aria-hidden="true" focusable="false"><use href="#i-${name}"/></svg>`;

/* ---------- Images ---------- */
const IMAGES = {
  hero: {
    slug: 'rooftop-solar-panels-ayodhya-home', w: 1376, h: 768, widths: [480, 800, 1376],
    alt: 'Rooftop solar panels on an elevated steel frame on the terrace of a North Indian home',
  },
  home: {
    slug: 'residential-solar-house-uttar-pradesh', w: 1264, h: 848, widths: [480, 800, 1264],
    alt: 'Independent house in a North Indian residential lane with solar panels mounted on a raised rooftop frame',
  },
  structure: {
    slug: 'rooftop-solar-mounting-structure', w: 1264, h: 848, widths: [480, 800, 1264],
    alt: 'Galvanised steel solar mounting structure bolted to concrete footings, with DC cables clipped along the frame',
  },
  inverter: {
    slug: 'solar-inverter-ac-dc-distribution-box', w: 1264, h: 848, widths: [480, 800, 1264],
    alt: 'Wall-mounted solar inverter beside DC and AC distribution boxes with cables in conduit',
  },
  commercial: {
    slug: 'commercial-rooftop-solar-building', w: 1264, h: 848, widths: [480, 800, 1264],
    alt: 'Rows of solar panels on the flat roof of a commercial building in a North Indian town',
  },
  cleaning: {
    slug: 'solar-panel-cleaning-maintenance', w: 1264, h: 848, widths: [480, 800, 1264],
    alt: 'Technician cleaning dusty rooftop solar panels with a soft brush and water',
  },
};

/**
 * <picture> with AVIF + WebP sources and a JPEG fallback.
 * All site imagery is illustrative until real project photos are added,
 * so a small "Illustrative image" label can be shown via `label`.
 */
function picture(key, { sizes = '100vw', eager = false, cls = '', alt, label = false } = {}) {
  const im = IMAGES[key];
  const set = (ext) => im.widths.map((w) => `/assets/img/${im.slug}-${w}.${ext} ${w}w`).join(', ');
  const h800 = Math.round((im.h * 800) / im.w);
  return `<picture class="pic${cls ? ' ' + cls : ''}">
<source type="image/avif" srcset="${set('avif')}" sizes="${sizes}">
<source type="image/webp" srcset="${set('webp')}" sizes="${sizes}">
<img src="/assets/img/${im.slug}-800.jpg" width="800" height="${h800}" alt="${esc(alt || im.alt)}" ${
    eager ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"'
  } decoding="async">
</picture>${label ? '<span class="pic-label">Illustrative image</span>' : ''}`;
}

module.exports = { esc, abs, inr, links, icon, sprite, picture, IMAGES, config };
