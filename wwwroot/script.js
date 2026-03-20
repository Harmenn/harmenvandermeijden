document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isHomepage = document.querySelector(".home-main");
  const siteHeader = document.querySelector(".site-header");
  const headerRow = document.querySelector(".header-row");
  const headerActions = document.querySelector(".header-actions");

  let mobileNavToggle = document.querySelector(".mobile-nav-toggle");

  if (siteHeader && headerRow && headerActions && !mobileNavToggle) {
    mobileNavToggle = document.createElement("button");
    mobileNavToggle.className = "mobile-nav-toggle";
    mobileNavToggle.type = "button";
    mobileNavToggle.setAttribute("aria-expanded", "false");
    mobileNavToggle.setAttribute("aria-label", "Open navigatiemenu");
    mobileNavToggle.innerHTML = "<span></span><span></span><span></span>";
    headerActions.id = headerActions.id || "site-menu";
    mobileNavToggle.setAttribute("aria-controls", headerActions.id);
    headerRow.insertBefore(mobileNavToggle, headerActions);
  }

  if (!prefersReducedMotion) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.body.classList.add("is-loaded");
      });
    });
  }

  initCanvasBackground(prefersReducedMotion);

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

  const closeMobileNav = () => {
    if (!siteHeader || !mobileNavToggle) {
      return;
    }

    siteHeader.classList.remove("is-mobile-menu-open");
    mobileNavToggle.setAttribute("aria-expanded", "false");
  };

  if (mobileNavToggle && siteHeader && headerActions) {
    mobileNavToggle.addEventListener("click", () => {
      const willOpen = !siteHeader.classList.contains("is-mobile-menu-open");
      siteHeader.classList.toggle("is-mobile-menu-open", willOpen);
      mobileNavToggle.setAttribute("aria-expanded", String(willOpen));
    });

    document.addEventListener("click", (event) => {
      if (!siteHeader.classList.contains("is-mobile-menu-open")) {
        return;
      }

      if (siteHeader.contains(event.target)) {
        return;
      }

      closeMobileNav();
    });

    links.forEach((link) => {
      link.addEventListener("click", closeMobileNav);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        closeMobileNav();
      }
    });
  }

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
      closeMobileNav();
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

  }
});

function initCanvasBackground(prefersReducedMotion) {
  const canvas = document.querySelector("#site-bg-canvas");
  if (!canvas) {
    return;
  }

  const context = canvas.getContext("2d");
  if (!context) {
    return;
  }

  let width = 0;
  let height = 0;
  let animationFrameId = 0;

  const mouse = {
    x: null,
    y: null,
    radius: 155
  };

  const resizeCanvas = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const gridGap = width > 1200 ? 54 : 42;
  const lineColor = "rgba(168, 144, 92, 0.115)";
  const nodeColor = "rgba(215, 170, 54, 0.16)";

  const distortPoint = (x, y, time) => {
    const idleWaveX = Math.sin((y * 0.01) + (time * 0.00028)) * 0.85;
    const idleWaveY = Math.cos((x * 0.008) + (time * 0.00022)) * 0.65;

    let offsetX = idleWaveX;
    let offsetY = idleWaveY;

    if (mouse.x !== null && mouse.y !== null) {
      const dx = x - mouse.x;
      const dy = y - mouse.y;
      const distance = Math.hypot(dx, dy) || 1;

      if (distance < mouse.radius) {
        const force = (1 - distance / mouse.radius) ** 1.85;
        const bend = force * 14;
        offsetX += (dx / distance) * bend;
        offsetY += (dy / distance) * bend;
      }
    }

    return {
      x: x + offsetX,
      y: y + offsetY
    };
  };

  const drawGrid = (time) => {
    context.clearRect(0, 0, width, height);
    const gap = width > 1200 ? 72 : width > 768 ? 62 : 46;
    const columns = Math.ceil(width / gap) + 2;
    const rows = Math.ceil(height / gap) + 2;
    const points = Array.from({ length: rows }, (_, rowIndex) =>
      Array.from({ length: columns }, (_, columnIndex) =>
        distortPoint((columnIndex - 1) * gap, (rowIndex - 1) * gap, time)
      )
    );

    context.lineWidth = 0.9;
    context.strokeStyle = lineColor;

    for (let rowIndex = 0; rowIndex < rows; rowIndex += 1) {
      context.beginPath();
      for (let columnIndex = 0; columnIndex < columns; columnIndex += 1) {
        const point = points[rowIndex][columnIndex];
        if (columnIndex === 0) {
          context.moveTo(point.x, point.y);
        } else {
          context.lineTo(point.x, point.y);
        }
      }
      context.stroke();
    }

    for (let columnIndex = 0; columnIndex < columns; columnIndex += 1) {
      context.beginPath();
      for (let rowIndex = 0; rowIndex < rows; rowIndex += 1) {
        const point = points[rowIndex][columnIndex];
        if (rowIndex === 0) {
          context.moveTo(point.x, point.y);
        } else {
          context.lineTo(point.x, point.y);
        }
      }
      context.stroke();
    }

    context.fillStyle = nodeColor;
    for (let rowIndex = 0; rowIndex < rows; rowIndex += 1) {
      for (let columnIndex = 0; columnIndex < columns; columnIndex += 1) {
        const point = points[rowIndex][columnIndex];
        context.beginPath();
        context.arc(point.x, point.y, 0.8, 0, Math.PI * 2);
        context.fill();
      }
    }
  };

  const renderStatic = () => {
    drawGrid(0);
  };

  const animate = (time) => {
    drawGrid(time);
    animationFrameId = window.requestAnimationFrame(animate);
  };

  resizeCanvas();

  window.addEventListener("resize", () => {
    resizeCanvas();

    if (prefersReducedMotion) {
      renderStatic();
    }
  });

  window.addEventListener("pointermove", (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  });

  window.addEventListener("pointerleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  if (prefersReducedMotion) {
    renderStatic();
    return;
  }

  window.cancelAnimationFrame(animationFrameId);
  animationFrameId = window.requestAnimationFrame(animate);
}
