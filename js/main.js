/**
 * Swipex landing page — minimal progressive enhancements
 * Handles: mobile nav, video facade, savings calculator, year stamp
 */

(function () {
  "use strict";

  // --- Mobile navigation ---
  function initNav() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var nav = document.querySelector("[data-nav]");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });

    // Close menu after in-page nav click (mobile)
    nav.addEventListener("click", function (event) {
      var link = event.target.closest("a");
      if (!link) return;
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    });
  }

  // --- Video facade (loads YouTube/Vimeo only on interaction) ---
  function initVideoFacades() {
    var facades = document.querySelectorAll("[data-video-facade]");

    facades.forEach(function (facade) {
      var playBtn = facade.querySelector("[data-video-play]");
      if (!playBtn) return;

      playBtn.addEventListener("click", function () {
        loadVideo(facade);
      });
    });
  }

  function loadVideo(facade) {
    var provider = facade.getAttribute("data-video-provider") || "youtube";
    var videoId = facade.getAttribute("data-video-id");

    if (!videoId || videoId === "PLACEHOLDER_VIDEO_ID") {
      // Keep facade intact until a real video ID is configured
      console.info("[video] Replace data-video-id with a real video ID before loading a player.");
      return;
    }

    var src = "";
    if (provider === "youtube") {
      src =
        "https://www.youtube-nocookie.com/embed/" +
        encodeURIComponent(videoId) +
        "?autoplay=1&rel=0";
    } else if (provider === "vimeo") {
      src =
        "https://player.vimeo.com/video/" +
        encodeURIComponent(videoId) +
        "?autoplay=1";
    } else {
      console.warn("[video] Unknown provider:", provider);
      return;
    }

    var iframe = document.createElement("iframe");
    iframe.className = "video-facade__iframe";
    iframe.src = src;
    iframe.title = "Explainer video";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.setAttribute("loading", "lazy");

    facade.replaceChildren(iframe);
  }

  // --- Savings calculator ---
  function initCalculator() {
    var root = document.querySelector("[data-calculator]");
    if (!root) return;

    var salesInput = root.querySelector('[data-calc-input="monthlySales"]');
    var rateInput = root.querySelector('[data-calc-input="processingRate"]');
    var salesOut = root.querySelector('[data-calc-output="salesDisplay"]');
    var rateOut = root.querySelector('[data-calc-output="rateDisplay"]');
    var monthlyOut = root.querySelector('[data-calc-output="monthlyExpense"]');
    var annualOut = root.querySelector('[data-calc-output="annualExpense"]');
    var sampleNote = root.querySelector("[data-calc-sample]");
    var annualLabel = root.querySelector("[data-calc-annual-label]");

    if (!salesInput || !rateInput || !monthlyOut || !annualOut) return;

    var edited = false;

    function parseAmount(value) {
      var cleaned = String(value).replace(/,/g, "").trim();
      var amount = parseFloat(cleaned);
      if (!isFinite(amount) || amount < 0) return 0;
      return amount;
    }

    function formatCurrency(value) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(value);
    }

    function formatSales(value) {
      return new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 0,
      }).format(value);
    }

    function formatRate(value) {
      var rounded = Math.round(value * 100) / 100;
      return String(rounded);
    }

    function markEdited() {
      if (edited) return;
      edited = true;
      if (sampleNote) sampleNote.hidden = true;
      if (annualLabel) {
        annualLabel.textContent = "Your estimated annual processing cost";
      }
    }

    function recalculate() {
      var sales = parseAmount(salesInput.value);
      var rate = parseAmount(rateInput.value);

      // monthlyExpense = sales * (rate / 100)
      // annualExpense  = monthlyExpense * 12
      // Savings math stays out until the program model is defined.
      var monthly = sales * (rate / 100);
      var annual = monthly * 12;

      if (salesOut) salesOut.textContent = formatCurrency(sales);
      if (rateOut) rateOut.textContent = formatRate(rate) + "%";
      monthlyOut.textContent = formatCurrency(monthly);
      annualOut.textContent = formatCurrency(annual);
    }

    salesInput.addEventListener("focus", function () {
      if (salesInput.value.trim() === "") return;
      salesInput.value = String(Math.round(parseAmount(salesInput.value)));
    });

    salesInput.addEventListener("blur", function () {
      salesInput.value = formatSales(parseAmount(salesInput.value));
      recalculate();
    });

    salesInput.addEventListener("input", function () {
      markEdited();
      recalculate();
    });

    rateInput.addEventListener("input", function () {
      markEdited();
      recalculate();
    });

    salesInput.value = formatSales(parseAmount(salesInput.value));
    recalculate();
  }

  // --- Footer year ---
  function initYear() {
    var el = document.querySelector("[data-year]");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  // --- Init ---
  function init() {
    initNav();
    initVideoFacades();
    initCalculator();
    initYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
