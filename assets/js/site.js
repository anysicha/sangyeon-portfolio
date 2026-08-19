(() => {
  const projectGrid = document.querySelector("[data-project-grid]");
  const year = document.querySelector("[data-year]");
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNav = document.querySelector(".site-nav");

  if (year) year.textContent = new Date().getFullYear();

  const visualMarkup = (project) => `
    <div class="project-visual visual-${project.visual}" aria-hidden="true">
      <span class="visual-index">0${projects.indexOf(project) + 1}</span>
      <span class="visual-label">${project.visualLabel}</span>
      <span class="visual-shape shape-a"></span><span class="visual-shape shape-b"></span><span class="visual-shape shape-c"></span>
    </div>`;

  const projectMarkup = (project) => `
    <a class="project-card reveal" href="projects/${project.id}.html" data-project-card data-category="${project.category}">
      ${visualMarkup(project)}
      <div class="project-content">
        <div class="project-topline"><span>${project.category}</span><span>${project.period}</span></div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-bottom"><div class="tag-list">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div><span class="card-arrow" aria-hidden="true">↗</span></div>
      </div>
    </a>`;

  const renderProjects = (filter = "all") => {
    if (!projectGrid) return;
    const visibleProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter);
    projectGrid.innerHTML = visibleProjects.map(projectMarkup).join("");
    requestAnimationFrame(() => projectGrid.querySelectorAll(".reveal").forEach((item) => item.classList.add("is-visible")));
  };

  renderProjects();

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
