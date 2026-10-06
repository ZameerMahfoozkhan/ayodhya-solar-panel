/**
 * Shared FAQ content. Rendered visibly and mirrored into FAQPage JSON-LD
 * from the same data, so markup always matches on-page text.
 */
const { inr, config } = require('./lib');
const s = config.subsidy;

const FAQ = {
  cost: {
    q: 'How much does solar panel installation cost in Ayodhya?',
    a: `The cost depends mainly on system size (kW), the type of solar panels, the inverter, the height and design of the mounting structure, wiring distance and any net-metering related work. A battery adds significantly to the price. Because these vary from roof to roof, we give an itemised quotation after a site assessment rather than a one-size price. Eligible residential consumers may reduce their net cost through PM Surya Ghar central support and the additional Uttar Pradesh subsidy. See our <a href="/solar-panel-price-ayodhya/">solar price guide</a> for the full list of cost factors.`,
  },
  panels: {
    q: 'How many solar panels does a home need?',
    a: `It depends on the system size and the wattage of each panel. Many panels used for homes today are rated roughly 540–590 watts, so a 1 kW system usually needs about 2 panels and a 3 kW system about 5–6 panels. The right system size comes from your monthly electricity units, not from the number of rooms.`,
  },
  twoBhk: {
    q: 'Which solar system is suitable for a 2BHK house?',
    a: `Many 2BHK homes using around 150–300 units a month find a 2 kW or 3 kW system suitable. If you run one or two air conditioners through summer, your usage — and the right size — may be higher. Check the units on your last few electricity bills or use our <a href="/#calculator">solar calculator</a> for an indicative estimate.`,
  },
  threeBhk: {
    q: 'Which solar system is suitable for a 3BHK house?',
    a: `A 3BHK home commonly uses 300–600 units a month, which usually points to a 3 kW to 5 kW system. Homes with several ACs, an electric geyser or a water pump running daily may need more. A site assessment confirms what your roof can hold and what your sanctioned load allows.`,
  },
  roof: {
    q: 'How much roof space is required?',
    a: `As a reference, UPNEDA indicates roughly 10 square metres (about 108 sq ft) of shadow-free area per 1 kW. So a 3 kW system needs around 30 square metres (about 325 sq ft). Actual space varies with panel efficiency, layout, walkways and the position of water tanks or stair rooms.`,
  },
  suitable: {
    q: 'Is rooftop solar suitable for my house?',
    a: `Your house is usually a good candidate if the roof gets direct sun for most of the day (especially between about 9 am and 4 pm), has little shade from tanks, trees or taller buildings, is structurally sound and has a valid electricity connection. Flat RCC roofs are the most common in Ayodhya, but other roof types can work with the right structure. A site visit confirms it.`,
  },
  pmsg: {
    q: 'How does PM Surya Ghar subsidy work?',
    a: `PM Surya Ghar is a central government scheme that gives financial assistance to eligible residential consumers for grid-connected rooftop solar. You register on the official portal (pmsuryaghar.gov.in) with your electricity consumer details, receive feasibility approval from your electricity distribution company (DISCOM), get the system installed by a vendor registered for the scheme, and complete net metering and inspection. After commissioning, the subsidy is released to your bank account as per scheme rules. Read our <a href="/solar-subsidy-ayodhya/">Ayodhya solar subsidy guide</a> for each step.`,
  },
  upAmount: {
    q: 'How much subsidy can I receive in Uttar Pradesh?',
    a: `Central assistance under PM Surya Ghar is currently ${inr(s.centralByKw[1])} for 1 kW, ${inr(s.centralByKw[2])} for 2 kW and ${inr(s.centralByKw[3])} for 3 kW, with ${inr(s.centralCap)} as the cap for larger residential systems. Uttar Pradesh adds a state subsidy of ${inr(s.upStatePerKw)} per kW up to ${inr(s.upStateCap)}. Eligible residential consumers may therefore receive up to ₹1.08 lakh in combined support, subject to current scheme rules, eligibility, vendor requirements and successful installation and verification.`,
  },
  commercialSubsidy: {
    q: 'Is solar subsidy available for commercial properties?',
    a: `The PM Surya Ghar central financial assistance is meant for residential households, so shops, offices and other commercial connections should not expect that subsidy. Businesses can still benefit from lower electricity bills, and tax-paying businesses may have tax considerations worth discussing with their accountant. See <a href="/commercial-solar-installation/">commercial solar</a>.`,
  },
  netMetering: {
    q: 'What is net metering?',
    a: `Net metering uses a bi-directional meter that records both the electricity your solar system sends to the grid and the electricity you take from it. You are billed for the difference. It is arranged through your DISCOM under the rules of the Uttar Pradesh Electricity Regulatory Commission. Our <a href="/blog/net-metering-explained-ayodhya/">net metering guide</a> explains it with examples.`,
  },
  gridTie: {
    q: 'How does a grid-connected solar system work?',
    a: `Solar panels produce DC electricity, which the inverter converts to AC for your home. Your appliances use solar power first; extra power flows to the grid through the net meter, and at night you draw from the grid as usual. For safety, a standard on-grid system switches off during a power cut. If you need backup, a hybrid system with batteries is the option to discuss.`,
  },
  duration: {
    q: 'How long does solar installation take?',
    a: `For a typical home system, the physical installation usually takes one to three days once materials are on site. The complete process — application, DISCOM feasibility, installation, net meter and inspection — can take a few weeks, depending largely on approval and meter timelines.`,
  },
  cloudy: {
    q: 'Does solar still work during cloudy weather?',
    a: `Yes, but output drops. Heavily overcast monsoon days and foggy winter mornings in Ayodhya can reduce generation noticeably, while clear days from March to May usually produce the most. Annual estimates already account for this seasonal variation.`,
  },
  maintenance: {
    q: 'How much maintenance does rooftop solar need?',
    a: `Very little. The main task is cleaning dust off the panels with water and a soft brush — more often in the dry, dusty months before the monsoon. Glance at the inverter display regularly and have the wiring, earthing and structure inspected periodically. See <a href="/solar-panel-maintenance/">solar maintenance</a>.`,
  },
  smallRoof: {
    q: 'Can I install solar on a small roof?',
    a: `Often, yes. A 1 kW or 2 kW system needs roughly 110–215 sq ft of shadow-free area. Higher-efficiency panels and an elevated structure can make better use of limited space. We will tell you honestly what your roof can hold.`,
  },
  shade: {
    q: 'What happens if my roof has shade?',
    a: `Shade on even part of a panel can reduce the output of a whole string, so placement matters. We map shade from water tanks, parapets, stair rooms, trees and neighbouring buildings, then position panels to avoid it — sometimes using a raised structure. Heavily shaded roofs may not be worth it, and we will say so.`,
  },
  whatsapp: {
    q: 'Can I contact a solar installer in Ayodhya through WhatsApp?',
    a: `Yes. Message us on WhatsApp at ${config.business.phoneDisplay}. Sending a photo of a recent electricity bill and a few photos of your roof helps us give you a quicker preliminary idea before a site visit.`,
  },
  faizabad: {
    q: 'Do you provide solar installation in Faizabad?',
    a: `Yes. Faizabad is part of Ayodhya city and district, and we serve homes and businesses in the Faizabad area as well. Contact us to confirm availability for your locality, or read about <a href="/solar-panel-installation-faizabad/">solar installation in Faizabad</a>.`,
  },
};

const HOME_FAQ = [
  'cost', 'panels', 'twoBhk', 'threeBhk', 'roof', 'suitable', 'pmsg', 'upAmount', 'commercialSubsidy',
  'netMetering', 'gridTie', 'duration', 'cloudy', 'maintenance', 'smallRoof', 'shade', 'whatsapp', 'faizabad',
].map((k) => FAQ[k]);

module.exports = { FAQ, HOME_FAQ, pick: (...keys) => keys.map((k) => FAQ[k]) };
