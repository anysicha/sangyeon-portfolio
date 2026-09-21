(() => {
  const projectGrid = document.querySelector("[data-project-grid]");
  const year = document.querySelector("[data-year]");
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNav = document.querySelector(".site-nav");
  let currentFilter = "all";

  const getLanguage = () => window.portfolioI18n?.getLanguage() || "ko";
  const getText = (key) => window.portfolioI18n?.t(key, getLanguage()) || key;
  const getData = () => window.portfolioData?.[getLanguage()] || window.portfolioData?.ko || {};

  if (year) year.textContent = new Date().getFullYear();

  const profileSlideshow = document.querySelector("[data-profile-slideshow]");
  let updateSlideshowToggle = () => {};

  if (profileSlideshow) {
    const slideTrack = profileSlideshow.querySelector(".profile-slides");
    const counter = profileSlideshow.querySelector("[data-slideshow-counter]");
    const toggle = profileSlideshow.querySelector("[data-slideshow-toggle]");
    const slides = [...profileSlideshow.querySelectorAll(".profile-slide")];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    for (let index = slides.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [slides[index], slides[randomIndex]] = [slides[randomIndex], slides[index]];
    }
    slides.forEach((slide) => slideTrack.appendChild(slide));

    let currentSlide = 0;
    let slideshowTimer;
    let isPaused = reducedMotion;

    const showSlide = (index) => {
      slides.forEach((slide, slideIndex) => slide.classList.toggle("is-active", slideIndex === index));
      if (counter) counter.textContent = `${String(index + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    };

    const stopSlideshow = () => window.clearInterval(slideshowTimer);
    const startSlideshow = () => {
      stopSlideshow();
      if (isPaused || slides.length < 2 || document.hidden) return;
      slideshowTimer = window.setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      }, 4500);
    };

    updateSlideshowToggle = () => {
      if (!toggle) return;
      const label = getText(isPaused ? "common.slideshow.resume" : "common.slideshow.pause");
      toggle.setAttribute("aria-label", label);
      toggle.setAttribute("title", label);
      toggle.querySelector("span").textContent = isPaused ? "▶" : "Ⅱ";
    };

    showSlide(currentSlide);
    updateSlideshowToggle();
    startSlideshow();

    toggle?.addEventListener("click", () => {
      isPaused = !isPaused;
      updateSlideshowToggle();
      startSlideshow();
    });
    profileSlideshow.addEventListener("mouseenter", stopSlideshow);
    profileSlideshow.addEventListener("mouseleave", startSlideshow);
    document.addEventListener("visibilitychange", startSlideshow);
  }

  const visualMarkup = (project, featuredProjects) => {
    const visualClass = project.thumbnail
      ? `project-visual-image${project.thumbnailRatio === "square" ? " project-visual-square" : ""}`
      : `visual-${project.visual}`;
    return `
      <div class="project-visual ${visualClass}" aria-hidden="true">
        ${project.thumbnail ? `<img src="${project.thumbnail}" alt="" />` : ""}
        <span class="visual-index">0${featuredProjects.indexOf(project) + 1}</span>
        <span class="visual-label">${project.visualLabel}</span>
        ${project.thumbnail ? "" : `<span class="visual-shape shape-a"></span><span class="visual-shape shape-b"></span><span class="visual-shape shape-c"></span>`}
      </div>`;
  };

  const projectMarkup = (project, featuredProjects) => `
    <a class="project-card reveal" href="projects/${project.id}.html" data-project-card data-category="${project.category}">
      ${visualMarkup(project, featuredProjects)}
      <div class="project-content">
        <div class="project-topline"><span>${project.displayCategory || project.category}</span></div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        ${project.award ? `<p class="project-award">${project.award}</p>` : ""}
        <div class="project-bottom"><div class="tag-list">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div><span class="card-arrow" aria-hidden="true">↗</span></div>
      </div>
    </a>`;

  const renderProjects = () => {
    if (!projectGrid) return;
    const featuredProjects = (getData().projects || []).filter((project) => project.featured !== false);
    const visibleProjects = currentFilter === "all" ? featuredProjects : featuredProjects.filter((project) => project.category === currentFilter);
    projectGrid.innerHTML = visibleProjects.map((project) => projectMarkup(project, featuredProjects)).join("");
    requestAnimationFrame(() => projectGrid.querySelectorAll(".reveal").forEach((item) => item.classList.add("is-visible")));
  };

  const renderHighlights = () => {
    const grid = document.querySelector("[data-highlights]");
    if (!grid) return;
    const highlightTitle = (item) => item.link
      ? `<a href="${item.link}">${item.title} <span class="inline-arrow" aria-hidden="true">↗</span></a>`
      : item.title;
    grid.innerHTML = (getData().highlights || []).map((item) => `
      <article class="highlight-item reveal"><span class="highlight-no">${item.number}</span><div><h3>${highlightTitle(item)}</h3><p class="highlight-period">${item.period}</p><p>${item.description}</p></div></article>`).join("");
  };

  const renderExperiences = () => {
    const timeline = document.querySelector("[data-experience-list]");
    if (!timeline) return;
    const experienceTitle = (item) => {
      if (!item.link) return item.title;
      const externalAttributes = item.external ? ' target="_blank" rel="noopener noreferrer"' : "";
      return `<a href="${item.link}"${externalAttributes}>${item.title} <span class="inline-arrow" aria-hidden="true">↗</span></a>`;
    };
    timeline.innerHTML = (getData().experiences || []).map((item) => `
      <article class="timeline-item reveal"><p class="timeline-date">${item.period}</p><div><h3>${experienceTitle(item)}</h3><span class="timeline-tag">${item.category}</span></div></article>`).join("");
  };

  const renderAwards = () => {
    const list = document.querySelector("[data-awards-list]");
    if (!list) return;
    list.innerHTML = (getData().awards || []).map((item) => `
      <article class="award-row reveal"><span>${item.date}</span><div><h3>${item.title}</h3>${item.subtitle ? `<p>${item.subtitle}</p>` : ""}${item.projectTitle ? `<a class="award-project-link" href="${item.projectLink}">${item.projectTitle} <span aria-hidden="true">↗</span></a>` : ""}${item.image ? `<img class="award-photo" src="${item.image}" alt="${item.imageAlt || item.title}" loading="lazy" />` : ""}</div><strong>${item.award}</strong></article>`).join("");
  };

  const renderActivities = () => {
    const list = document.querySelector("[data-activities-list]");
    if (!list) return;
    list.innerHTML = (getData().activities || []).map((item) => `
      <article class="info-row reveal"><span>${item.period}</span><div><h3>${item.title}</h3>${item.roles ? `<p>${item.roles.join("<br />")}</p>` : `<p>${item.category}</p>`}</div></article>`).join("");
  };

  const renderCompetitions = () => {
    const list = document.querySelector("[data-competitions-list]");
    if (!list) return;
    list.innerHTML = (getData().competitions || []).map((item) => `
      <article class="info-row reveal"><span>${item.date}</span><div><h3>${item.title}</h3><p>${item.result}</p></div></article>`).join("");
  };

  const renderPrograms = () => {
    const list = document.querySelector("[data-programs-list]");
    if (!list) return;
    list.innerHTML = (getData().programs || []).map((item) => `
      <article class="info-row reveal"><span>${item.date}</span><div><h3>${item.title}</h3>${item.detail ? `<p>${item.detail}</p>` : ""}</div></article>`).join("");
  };

  const renderEducation = () => {
    const list = document.querySelector("[data-education-list]");
    if (!list) return;
    list.innerHTML = (getData().education || []).map((item) => `
      <article class="info-row reveal"><span>${item.date}</span><div><h3>${item.title}</h3>${item.detail ? `<p>${item.detail}</p>` : ""}</div></article>`).join("");
  };

  const renderCertifications = () => {
    const list = document.querySelector("[data-certifications-list]");
    if (!list) return;
    list.innerHTML = (getData().certifications || []).map((item) => `<article class="certification-item reveal"><span aria-hidden="true">✓</span><h3>${item.title}</h3></article>`).join("");
  };

  const renderLocalizedData = () => {
    renderHighlights();
    renderProjects();
    renderExperiences();
    renderAwards();
    renderActivities();
    renderCompetitions();
    renderPrograms();
    renderEducation();
    renderCertifications();
    document.querySelectorAll(".reveal").forEach((item) => {
      if (item.getBoundingClientRect().top < window.innerHeight) item.classList.add("is-visible");
    });
  };

  renderLocalizedData();

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      currentFilter = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      renderProjects();
    });
  });

  const updateMenuLabel = () => {
    if (!menuToggle) return;
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    const label = getText(isOpen ? "common.menu.close" : "common.menu.open");
    menuToggle.setAttribute("aria-label", label);
    const screenReaderLabel = menuToggle.querySelector(".sr-only");
    if (screenReaderLabel) screenReaderLabel.textContent = label;
  };

  if (menuToggle && siteNav) {
    updateMenuLabel();
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      siteNav.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
      updateMenuLabel();
    });
    siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      updateMenuLabel();
    }));
  }

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const navLinks = document.querySelectorAll("[data-nav]");
  const sections = [...document.querySelectorAll("main section[id]")];
  if ("IntersectionObserver" in window && navLinks.length && sections.length && document.body.dataset.page === "home") {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => link.classList.toggle("is-active", link.dataset.nav === entry.target.id));
      });
    }, { rootMargin: "-35% 0px -55%", threshold: 0 });
    sections.forEach((section) => navObserver.observe(section));
  }

  window.addEventListener("portfolio:languagechange", () => {
    renderLocalizedData();
    updateMenuLabel();
    updateSlideshowToggle();
  });
})();
