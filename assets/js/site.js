(() => {
  const projectGrid = document.querySelector("[data-project-grid]");
  const year = document.querySelector("[data-year]");
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNav = document.querySelector(".site-nav");
  const projectData = typeof projects !== "undefined" ? projects : [];
  const featuredProjects = projectData.filter((project) => project.featured !== false);

  if (year) year.textContent = new Date().getFullYear();

  const visualMarkup = (project) => {
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

  const projectMarkup = (project) => `
    <a class="project-card reveal" href="projects/${project.id}.html" data-project-card data-category="${project.category}">
      ${visualMarkup(project)}
      <div class="project-content">
        <div class="project-topline"><span>${project.displayCategory || project.category}</span></div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        ${project.award ? `<p class="project-award">${project.award}</p>` : ""}
        <div class="project-bottom"><div class="tag-list">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div><span class="card-arrow" aria-hidden="true">↗</span></div>
      </div>
    </a>`;

  const renderProjects = (filter = "all") => {
    if (!projectGrid) return;
    const visibleProjects = filter === "all" ? featuredProjects : featuredProjects.filter((project) => project.category === filter);
    projectGrid.innerHTML = visibleProjects.map(projectMarkup).join("");
    requestAnimationFrame(() => projectGrid.querySelectorAll(".reveal").forEach((item) => item.classList.add("is-visible")));
  };

  const renderHighlights = () => {
    const grid = document.querySelector("[data-highlights]");
    if (!grid) return;
    grid.innerHTML = highlights.map((item) => `
      <article class="highlight-item reveal"><span class="highlight-no">${item.number}</span><div><h3>${item.title}</h3><p class="highlight-period">${item.period}</p><p>${item.description}</p></div></article>`).join("");
  };

  const renderExperiences = () => {
    const timeline = document.querySelector("[data-experience-list]");
    if (!timeline) return;
    timeline.innerHTML = experiences.map((item) => `
      <article class="timeline-item reveal"><p class="timeline-date">${item.period}</p><div><h3>${item.link ? `<a href="${item.link}">${item.title} <span class="inline-arrow" aria-hidden="true">↗</span></a>` : item.title}</h3><span class="timeline-tag">${item.category}</span></div></article>`).join("");
  };

  const renderAwards = () => {
    const list = document.querySelector("[data-awards-list]");
    if (!list) return;
    list.innerHTML = awards.map((item) => `
      <article class="award-row reveal"><span>${item.date}</span><div><h3>${item.title}</h3>${item.subtitle ? `<p>${item.subtitle}</p>` : ""}${item.projectTitle ? `<a class="award-project-link" href="${item.projectLink}">${item.projectTitle} <span aria-hidden="true">↗</span></a>` : ""}</div><strong>${item.award}</strong></article>`).join("");
  };

  const renderActivities = () => {
    const list = document.querySelector("[data-activities-list]");
    if (!list) return;
    list.innerHTML = activities.map((item) => `
      <article class="info-row reveal"><span>${item.period}</span><div><h3>${item.title}</h3>${item.roles ? `<p>${item.roles.join("<br />")}</p>` : `<p>${item.category}</p>`}</div></article>`).join("");
  };

  const renderCompetitions = () => {
    const list = document.querySelector("[data-competitions-list]");
    if (!list) return;
    list.innerHTML = competitions.map((item) => `
      <article class="info-row reveal"><span>${item.date}</span><div><h3>${item.title}</h3><p>${item.result}</p></div></article>`).join("");
  };

  const renderPrograms = () => {
    const list = document.querySelector("[data-programs-list]");
    if (!list) return;
    list.innerHTML = programs.map((item) => `
      <article class="info-row reveal"><span>${item.date}</span><div><h3>${item.title}</h3>${item.detail ? `<p>${item.detail}</p>` : ""}</div></article>`).join("");
  };

  const renderEducation = () => {
    const list = document.querySelector("[data-education-list]");
    if (!list) return;
    list.innerHTML = education.map((item) => `
      <article class="info-row reveal"><span>${item.date}</span><div><h3>${item.title}</h3><p>${item.detail}</p></div></article>`).join("");
  };

  const renderCertifications = () => {
    const list = document.querySelector("[data-certifications-list]");
    if (!list) return;
    list.innerHTML = certifications.map((item) => `<article class="certification-item reveal"><span aria-hidden="true">✓</span><h3>${item.title}</h3></article>`).join("");
  };

  renderHighlights();
  renderProjects();
  renderExperiences();
  renderAwards();
  renderActivities();
  renderCompetitions();
  renderPrograms();
  renderEducation();
  renderCertifications();

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-filter]").forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      renderProjects(button.dataset.filter);
    });
  });

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      siteNav.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });
    siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
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
})();
