/**
 * AYODHYA SOLAR INSTALLATION — CLIENT SCRIPT
 * Minimal, accessible, vanilla JavaScript for interactive features.
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. Mobile Navigation & Accessible Toggles
     ========================================================================== */
  const menuBtn = document.querySelector('.menu-btn');
  const siteNav = document.getElementById('site-nav');

  if (menuBtn && siteNav) {
    menuBtn.addEventListener('click', function () {
      const isOpen = siteNav.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      menuBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
      document.body.style.overflow = isOpen ? 'hidden' : '';
      document.body.classList.toggle('nav-open', isOpen);
    });

    // Close menu when clicking backdrop or nav link
    siteNav.addEventListener('click', function (e) {
      const link = e.target.closest('a');
      if (link) {
        siteNav.classList.remove('is-open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Open menu');
        document.body.style.overflow = '';
        document.body.classList.remove('nav-open');
      }
    });
  }

  // Mobile submenu toggles
  const navToggles = document.querySelectorAll('.nav__toggle');
  navToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded ? 'true' : 'false');
      const parent = this.closest('.nav__item--group');
      if (parent) {
        parent.classList.toggle('is-open', !isExpanded);
      }
      const sub = this.nextElementSibling;
      if (sub) {
        sub.style.display = isExpanded ? 'none' : 'flex';
      }
    });
  });

  /* ==========================================================================
     2. Solar Requirement Calculator
     ========================================================================== */
  const calcForm = document.getElementById('solar-calc');
  if (calcForm) {
    // Editable constants for calculations (adjustable based on utility revisions)
    const CALC_CONSTANTS = {
      UNITS_PER_KW_MONTH: 120, // Average monthly kWh per 1 kWp in Ayodhya (110–135)
      AVG_TARIFF_PER_UNIT: 7.0, // Assumed average domestic tariff in ₹/unit
      SQFT_PER_KW: 108, // ~10 sq metres shadow-free area per 1 kWp (UPNEDA reference)
      SQM_PER_KW: 10,
      SUBSIDY: {
        1: 45000, // Central ₹30,000 + UP ₹15,000
        2: 90000, // Central ₹60,000 + UP ₹30,000
        3: 108000, // Central ₹78,000 + UP ₹30,000
        CAP: 108000,
      },
    };

    const modeInputs = calcForm.querySelectorAll('input[name="calc-mode"]');
    const valInput = document.getElementById('calc-value');
    const valLabel = document.getElementById('calc-value-label');
    const suffix = document.getElementById('calc-suffix');
    const hint = document.getElementById('calc-hint');
    const errorEl = document.getElementById('calc-error');

    const emptyBox = document.getElementById('calc-empty');
    const outputBox = document.getElementById('calc-output');
    const rSize = document.getElementById('r-size');
    const rGen = document.getElementById('r-gen');
    const rArea = document.getElementById('r-area');
    const rOffset = document.getElementById('r-offset');
    const rSubsidy = document.getElementById('r-subsidy');
    const rSubsidyWrap = document.getElementById('r-subsidy-wrap');
    const rNote = document.getElementById('r-note');
    const calcCta = document.getElementById('calc-cta');

    // Switch between "Units" and "Bill Amount (₹)"
    modeInputs.forEach(function (radio) {
      radio.addEventListener('change', function () {
        if (this.value === 'bill') {
          valLabel.textContent = 'Average monthly electricity bill (₹)';
          valInput.placeholder = 'e.g. 2500';
          suffix.textContent = '₹';
          hint.textContent = 'Enter your total monthly electricity bill in Indian Rupees.';
        } else {
          valLabel.textContent = 'Average monthly electricity units (kWh)';
          valInput.placeholder = 'e.g. 350';
          suffix.textContent = 'units';
          hint.textContent = 'Find “units consumed” on your electricity bill. An average of a few months works best.';
        }
        valInput.value = '';
        if (errorEl) errorEl.hidden = true;
      });
    });

    function calculate() {
      const mode = calcForm.querySelector('input[name="calc-mode"]:checked').value;
      const rawVal = parseFloat(valInput.value);
      const propType = calcForm.querySelector('input[name="calc-property"]:checked')?.value || 'house';
      const roofSize = calcForm.querySelector('input[name="calc-roof"]:checked')?.value || 'unsure';

      if (isNaN(rawVal) || rawVal <= 0) {
        if (errorEl) {
          errorEl.textContent = 'Please enter a valid positive number.';
          errorEl.hidden = false;
        }
        valInput.focus();
        return;
      }
      if (errorEl) errorEl.hidden = true;

      let monthlyUnits = rawVal;
      if (mode === 'bill') {
        monthlyUnits = Math.round(rawVal / CALC_CONSTANTS.AVG_TARIFF_PER_UNIT);
      }

      // Calculate recommended kW size (rounded to practical steps: 1, 2, 3, 4, 5, 6, 8, 10, etc.)
      let kw = monthlyUnits / CALC_CONSTANTS.UNITS_PER_KW_MONTH;
      let recommendedKw = Math.max(1, Math.round(kw));
      if (kw > 1 && kw < 1.4) recommendedKw = 1;
      else if (kw >= 1.4 && kw < 2.4) recommendedKw = 2;
      else if (kw >= 2.4 && kw < 3.5) recommendedKw = 3;
      else if (kw >= 3.5 && kw < 5.5) recommendedKw = 5;
      else if (kw >= 5.5) recommendedKw = Math.round(kw);

      const genUnits = Math.round(recommendedKw * CALC_CONSTANTS.UNITS_PER_KW_MONTH);
      const sqftArea = Math.round(recommendedKw * CALC_CONSTANTS.SQFT_PER_KW);
      const sqmArea = recommendedKw * CALC_CONSTANTS.SQM_PER_KW;
      const offsetPct = Math.min(100, Math.round((genUnits / monthlyUnits) * 100));

      // Calculate subsidy estimate
      let subsidyText = 'Not applicable for commercial';
      let isResidential = propType === 'house';

      if (isResidential) {
        if (recommendedKw === 1) subsidyText = 'up to ₹45,000 (Central + UP)';
        else if (recommendedKw === 2) subsidyText = 'up to ₹90,000 (Central + UP)';
        else if (recommendedKw >= 3) subsidyText = 'up to ₹1,08,000 (Central + UP)';
      }

      // Update UI
      if (emptyBox) emptyBox.hidden = true;
      if (outputBox) outputBox.hidden = false;

      rSize.textContent = recommendedKw;
      rGen.textContent = '~' + genUnits.toLocaleString('en-IN') + ' units';
      rArea.textContent = '~' + sqftArea.toLocaleString('en-IN') + ' sq ft (' + sqmArea + ' m²)';
      rOffset.textContent = '~' + offsetPct + '%';

      if (isResidential) {
        rSubsidyWrap.hidden = false;
        rSubsidy.textContent = subsidyText;
      } else {
        rSubsidyWrap.hidden = true;
      }

      if (rNote) {
        if (roofSize === 'small' && recommendedKw >= 3) {
          rNote.textContent = 'Note: If terrace space is compact, an elevated canopy structure can preserve your usable roof area.';
          rNote.hidden = false;
        } else {
          rNote.hidden = true;
        }
      }

      if (calcCta) {
        calcCta.href = '#quote';
      }
    }

    calcForm.addEventListener('submit', function (e) {
      e.preventDefault();
      calculate();
    });

    // Auto calculate on input typing with small debounce
    let debounceTimer;
    valInput.addEventListener('input', function () {
      clearTimeout(debounceTimer);
      if (this.value && parseFloat(this.value) > 0) {
        debounceTimer = setTimeout(calculate, 400);
      }
    });
  }

  /* ==========================================================================
     3. Lead Form — Client-Side WhatsApp & Email Generation
     ========================================================================== */
  const leadForm = document.getElementById('lead-form');
  if (leadForm) {
    const WHATSAPP_NUMBER = '919580659559';
    const EMAIL_ADDRESS = 'ayodhyasolarinstallation@gmail.com';

    function buildEnquiryMessage(data) {
      return (
        'Hello, I am interested in solar panel installation in Ayodhya.\n\n' +
        'Name: ' + (data.name || 'Not specified') + '\n' +
        'Phone: ' + (data.phone || 'Not specified') + '\n' +
        'Location: ' + (data.area || 'Ayodhya') + '\n' +
        'Property: ' + (data.property || 'House') + '\n' +
        'Monthly Bill: ' + (data.bill || 'Not specified') + '\n' +
        (data.units ? 'Monthly Units: ' + data.units + ' units\n' : '') +
        (data.requirement ? 'System Requirement: ' + data.requirement + '\n' : '') +
        'Preferred Contact: ' + (data.contact || 'WhatsApp') + '\n' +
        (data.message ? 'Message: ' + data.message + '\n' : '') +
        '\nPlease contact me for a solar assessment.'
      );
    }

    function validateForm(form) {
      let isValid = true;
      const name = form.querySelector('#lf-name');
      const phone = form.querySelector('#lf-phone');
      const area = form.querySelector('#lf-area');

      const nameErr = form.querySelector('#lf-name-err');
      const phoneErr = form.querySelector('#lf-phone-err');
      const areaErr = form.querySelector('#lf-area-err');

      // Reset
      [nameErr, phoneErr, areaErr].forEach(function (el) {
        if (el) el.hidden = true;
      });

      if (!name.value.trim()) {
        if (nameErr) {
          nameErr.textContent = 'Please enter your name.';
          nameErr.hidden = false;
        }
        isValid = false;
      }

      // Indian mobile phone number check: 10 digits
      const cleanedPhone = phone.value.replace(/\D/g, '');
      if (cleanedPhone.length < 10) {
        if (phoneErr) {
          phoneErr.textContent = 'Please enter a valid 10-digit mobile number.';
          phoneErr.hidden = false;
        }
        isValid = false;
      }

      if (!area.value.trim()) {
        if (areaErr) {
          areaErr.textContent = 'Please enter your city, colony or locality.';
          areaErr.hidden = false;
        }
        isValid = false;
      }

      return isValid;
    }

    function getFormData(form) {
      const formData = new FormData(form);
      return {
        name: formData.get('name') || '',
        phone: formData.get('phone') || '',
        area: formData.get('area') || '',
        property: formData.get('property') || '',
        bill: formData.get('bill') || '',
        units: formData.get('units') || '',
        requirement: formData.get('requirement') || '',
        contact: formData.get('contact') || 'WhatsApp',
        message: formData.get('message') || '',
      };
    }

    leadForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validateForm(this)) return;

      const data = getFormData(this);
      const text = buildEnquiryMessage(data);
      const waUrl = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text);

      const statusEl = document.getElementById('lf-status');
      if (statusEl) {
        statusEl.textContent = 'Opening WhatsApp to send your inquiry…';
        statusEl.style.color = '#0E7C3A';
      }

      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });

    const emailBtn = document.getElementById('lf-email');
    if (emailBtn) {
      emailBtn.addEventListener('click', function () {
        if (!validateForm(leadForm)) return;
        const data = getFormData(leadForm);
        const text = buildEnquiryMessage(data);
        const subject = 'Solar Inquiry - ' + (data.name || 'Ayodhya Resident');
        const mailUrl = 'mailto:' + EMAIL_ADDRESS + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(text);

        window.location.href = mailUrl;
      });
    }
  }

  /* ==========================================================================
     4. Accessible FAQ Accordions (Mutual exclusivity if needed)
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq__item');
  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (this.open) {
        faqItems.forEach(function (other) {
          if (other !== item && other.open) {
            other.open = false;
          }
        });
      }
    });
  });
})();
