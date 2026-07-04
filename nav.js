(() => {
  const wireMenu = (header, nav, toggle, index) => {
    if (!toggle || !nav) return;

    if (!nav.id) nav.id = `primary-navigation-${index + 1}`;
    toggle.setAttribute("aria-controls", nav.id);

    const setOpen = (isOpen) => {
      header.classList.toggle("nav-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    };

    toggle.addEventListener("click", () => {
      setOpen(!header.classList.contains("nav-open"));
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });
  };

  document.querySelectorAll(".pmp-site-header").forEach((header, index) => {
    const toggle = header.querySelector(".mobile-nav-toggle");
    const nav = header.querySelector(".pmp-top-nav");
    wireMenu(header, nav, toggle, index);
  });

  document.querySelectorAll(".legal-nav").forEach((header, index) => {
    const toggle = header.querySelector(".mobile-nav-toggle");
    const nav = header.querySelector(".legal-nav-menu");
    wireMenu(header, nav, toggle, index + 100);
  });

  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-analytics-event]");
    if (!target || typeof window.gtag !== "function") return;

    window.gtag("event", target.dataset.analyticsEvent, {
      event_category: "site_click",
      event_label: target.dataset.analyticsLabel || target.textContent.trim(),
      link_url: target.href || ""
    });
  });
})();
