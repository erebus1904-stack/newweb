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

  document.querySelectorAll("[data-copy-prompt]").forEach((button) => {
    button.addEventListener("click", async () => {
      const block = button.closest(".learning-prompt-block, .prompt-card");
      const promptText = block?.querySelector(".learning-prompt-text, [data-prompt-text]")?.innerText.trim();
      if (!promptText) return;

      const previousLabel = button.textContent;
      const markCopied = () => {
        button.textContent = "Copied";
        window.setTimeout(() => {
          button.textContent = previousLabel || "Copy prompt";
        }, 1800);
      };

      const copyWithFallback = () => {
        const textarea = document.createElement("textarea");
        textarea.value = promptText;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
      };

      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(promptText);
        } else {
          copyWithFallback();
        }
        markCopied();
      } catch {
        copyWithFallback();
        markCopied();
      }
    });
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
