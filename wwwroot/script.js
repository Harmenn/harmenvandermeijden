document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isHomepage = document.querySelector(".home-main");

  if (!prefersReducedMotion) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.body.classList.add("is-loaded");
      });
    });
  }

  const links = document.querySelectorAll(".site-nav a");
  const normalizePath = (value) => {
    if (!value) {
      return "/";
    }

    const url = new URL(value, window.location.origin);
    let path = url.pathname.toLowerCase();

    if (path === "/index.html") {
      path = "/";
    }

    if (path.endsWith(".html")) {
      path = path.slice(0, -5);
    }

    return path || "/";
  };

  const currentPage = normalizePath(window.location.pathname);

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#")) {
      return;
    }

    if (normalizePath(href) === currentPage) {
      link.setAttribute("aria-current", "page");
    }
  });

  const cvItems = document.querySelectorAll(".cv-item");
  cvItems.forEach((item) => {
    const button = item.querySelector(".cv-toggle");
    if (!button) {
      return;
    }

    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");

      cvItems.forEach((entry) => {
        entry.classList.remove("is-open");
        const entryButton = entry.querySelector(".cv-toggle");
        if (entryButton) {
          entryButton.setAttribute("aria-expanded", "false");
        }
      });

      if (!isOpen) {
        item.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  const storyCards = document.querySelectorAll(".story-card");
  storyCards.forEach((card) => {
    const toggle = card.querySelector(".story-toggle");
    if (!toggle) {
      return;
    }

    toggle.addEventListener("click", () => {
      const isCollapsed = card.classList.contains("is-collapsed");
      card.classList.toggle("is-collapsed", !isCollapsed);
      toggle.setAttribute("aria-expanded", String(isCollapsed));
    });
  });
  
  const lightbox = document.querySelector("#lightbox");
  const lightboxImage = lightbox?.querySelector(".lightbox-image");
  const lightboxCaption = lightbox?.querySelector(".lightbox-caption");
  const lightboxTriggers = document.querySelectorAll("[data-lightbox-image]");
  const lightboxCloseButtons = document.querySelectorAll("[data-lightbox-close]");

  const closeLightbox = () => {
    if (!lightbox || !lightboxImage || !lightboxCaption) {
      return;
    }

    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.setAttribute("src", "");
    lightboxImage.setAttribute("alt", "");
    lightboxCaption.textContent = "";
    document.body.style.overflow = "";
  };

  const openLightbox = (trigger) => {
    if (!lightbox || !lightboxImage || !lightboxCaption) {
      return;
    }

    lightboxImage.setAttribute("src", trigger.dataset.lightboxImage || "");
    lightboxImage.setAttribute("alt", trigger.dataset.lightboxAlt || "");
    lightboxCaption.textContent = trigger.dataset.lightboxCaption || "";
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  lightboxTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => openLightbox(trigger));
  });

  lightboxCloseButtons.forEach((button) => {
    button.addEventListener("click", closeLightbox);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLightbox();
    }
  });

  if (isHomepage && !prefersReducedMotion) {
    const revealTargets = document.querySelectorAll(
      ".about-section .section-intro, .approach-section .section-intro, .approach-card, .logo-strip-inner, .featured-section .section-intro, .featured-card, .trajectory-card, .expertise-intro, .work-card, .closing-card, .footer-contact-inner"
    );

    revealTargets.forEach((element, index) => {
      element.setAttribute("data-reveal", "");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 80}ms`);
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    revealTargets.forEach((element) => revealObserver.observe(element));

    const hero = document.querySelector(".hero");
    if (hero) {
      hero.addEventListener("pointermove", (event) => {
        const bounds = hero.getBoundingClientRect();
        const offsetX = (event.clientX - bounds.left) / bounds.width - 0.5;
        const offsetY = (event.clientY - bounds.top) / bounds.height - 0.5;

        hero.style.setProperty("--hero-parallax-x", `${offsetX * 18}px`);
        hero.style.setProperty("--hero-parallax-y", `${offsetY * 18}px`);
      });

      hero.addEventListener("pointerleave", () => {
        hero.style.setProperty("--hero-parallax-x", "0px");
        hero.style.setProperty("--hero-parallax-y", "0px");
      });
    }
  }
});
