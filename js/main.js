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
    var monthlyOut = root.querySelector('[data-calc-output="monthlyExpense"]');
    var annualOut = root.querySelector('[data-calc-output="annualExpense"]');

    if (!salesInput || !rateInput || !monthlyOut || !annualOut) return;

    function formatCurrency(value) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(value);
    }

    function recalculate() {
      var sales = parseFloat(salesInput.value);
      var rate = parseFloat(rateInput.value);

      if (!isFinite(sales) || sales < 0) sales = 0;
      if (!isFinite(rate) || rate < 0) rate = 0;

      // monthlyExpense = sales * (rate / 100)
      // annualExpense  = monthlyExpense * 12
      // Additional savings formulas can be added here once business rules are defined.
      var monthly = sales * (rate / 100);
      var annual = monthly * 12;

      monthlyOut.textContent = formatCurrency(monthly);
      annualOut.textContent = formatCurrency(annual);
    }

    salesInput.addEventListener("input", recalculate);
    rateInput.addEventListener("input", recalculate);
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
