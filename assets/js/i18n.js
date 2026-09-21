(() => {
  const STORAGE_KEY = "portfolio-language";
  const SUPPORTED_LANGUAGES = ["ko", "en"];

  const translations = {
    ko: {
      "common.language.label": "언어 선택",
      "common.language.ko": "한국어로 보기",
      "common.language.en": "영어로 보기",
      "common.menu.open": "메뉴 열기",
      "common.menu.close": "메뉴 닫기",
      "common.slideshow.pause": "사진 슬라이드 일시정지",
      "common.slideshow.resume": "사진 슬라이드 재생",
    },
    en: {
      "common.language.label": "Select language",
      "common.language.ko": "View in Korean",
      "common.language.en": "View in English",
      "common.menu.open": "Open menu",
      "common.menu.close": "Close menu",
      "common.slideshow.pause": "Pause photo slideshow",
      "common.slideshow.resume": "Play photo slideshow",
      "common.skip": "Skip to main content",
      "common.brand.aria": "Go to Sangyeon Kim's home page",
      "common.nav.aria": "Primary navigation",
      "common.nav.home": "Home",
      "common.nav.projects": "Projects",
      "common.nav.experience": "Experience",
      "common.nav.awards": "Awards",
      "common.nav.activities": "Activities",
      "common.nav.about": "About",
      "common.nav.contact": "Contact",
      "common.footer.care": "Built with curiosity &amp; care.",

      "home.meta.title": "Sangyeon Kim — Industrial Engineering · Data · AI",
      "home.meta.description": "Sangyeon Kim's portfolio spanning industrial engineering, data, AI, human-centered design, and entrepreneurship.",
      "home.meta.ogDescription": "I identify meaningful problems and move quickly to solve them.",
      "home.hero.name": "Sangyeon Kim",
      "home.hero.affiliation": "Kyung Hee University <span>Department of Industrial &amp; Management Systems Engineering</span>",
      "home.hero.title": "I find meaningful problems,<br /><em>move quickly,</em><br />and build solutions.",
      "home.hero.lead": "I use data to understand context, design around people,<br class=\"desktop-break\" /> and turn ideas into working projects and services.",
      "home.hero.projects": "View projects <span aria-hidden=\"true\">↗</span>",
      "home.hero.about": "About me",
      "home.hero.expertiseAria": "Areas of expertise",
      "home.hero.slideshowAria": "Slideshow of Sangyeon Kim's activities",
      "home.hero.photo.profile": "Portrait of Sangyeon Kim",
      "home.hero.photo.exercise": "Sangyeon Kim after a workout",
      "home.hero.photo.travel": "Sangyeon Kim while traveling",
      "home.hero.photo.yonsei": "Sangyeon Kim during an activity near Yonsei University",
      "home.hero.photo.flip": "Sangyeon Kim receiving an Excellence Award at 2024 FLIP DEMO DAY",
      "home.hero.photo.library": "AI Summer School class at Gyeonggi Provincial Library",
      "home.hero.photo.omnibus": "Sangyeon Kim presenting omniBUS at the Gyeonggi Silok Jiriji competition",
      "home.highlights.title": "Moments along the way",
      "home.highlights.description": "A snapshot of the moments when curiosity turned into hands-on experience.",
      "home.projects.title": "Turning ideas into reality",
      "home.projects.note": "From a small observation<br />to a solution people can use.",
      "home.projects.filterAria": "Project filters",
      "home.projects.noScript": "Please enable JavaScript in your browser to view the project list.",
      "home.experience.title": "How I learn is part of<br /><em>how I build.</em>",
      "home.awards.title": "Every result becomes<br /><em>fuel for the next attempt.</em>",
      "home.activities.title": "Roles and activities<br /><em>along the way.</em>",
      "home.programs.title": "Broadening my perspective<br /><em>through experience.</em>",
      "home.education.title": "Building strong foundations<br /><em>and continuing to learn.</em>",
      "home.about.title": "Experience everything<br /><em>that calls to me.</em>",
      "home.about.lead": "When something sparks my interest, I experience it firsthand.",
      "home.about.body1": "I would rather test an idea in the real world than leave it as a thought. I applied for and was selected as a Republic of Korea Air Force pilot scholarship student to pursue my goal of becoming a fighter pilot. Since then, I have also taken on startup initiatives and projects to learn entrepreneurship firsthand.",
      "home.about.body2": "Rather than confining myself to a single field, I want to engage directly with the problems that capture my attention, move quickly, and keep learning.",
      "home.contact.title": "Shall we solve the next<br /><em>problem together?</em>",
      "home.contact.body": "If you would like to talk about a project, research, or product, feel free to get in touch.",
      "home.contact.email": "Send an email <span aria-hidden=\"true\">↗</span>",

      "aiEducation.meta.title": "AI Summer School Education Mentor — Sangyeon Kim",
      "aiEducation.meta.description": "Designing and teaching hands-on AI learning experiences as a lead and assistant instructor at Gyeonggi Provincial Library's AI Summer School.",
      "aiEducation.back": "← Back to experience",
      "aiEducation.title": "AI Summer School<br />Education Mentor",
      "aiEducation.intro": "I designed and led AI classes where children could explore, make decisions, and create outcomes for themselves.",
      "aiEducation.imageAlt": "Teaching a Chrome Music Lab class at Gyeonggi Provincial Library's AI Summer School",
      "aiEducation.aside.role": "Lead Instructor · Assistant Instructor",
      "aiEducation.aside.lead": "Creating Music &amp; Jingles with AI<br />AI Ethics Expedition",
      "aiEducation.aside.assistant": "Creating AI Characters<br />Creating AI Storybooks<br />AI Doctor Role-play",
      "aiEducation.aside.audience": "Elementary school students",
      "aiEducation.heading": "I let students <em>experience AI</em><br />instead of merely explaining it.",
      "aiEducation.summary": "At Gyeonggi Provincial Library's AI Summer School, I served as both a lead and assistant instructor. Beyond teaching students how to use AI tools, I designed and ran classes that encouraged them to explore, make judgments, and create tangible outcomes.",
      "aiEducation.roles": "As lead instructor, I taught <strong>Creating Music &amp; Jingles with AI</strong> and <strong>AI Ethics Expedition</strong>. As an assistant instructor, I supported class delivery and learning activities for Creating AI Characters, Creating AI Storybooks, and AI Doctor Role-play.",
      "aiEducation.curriculum": "I designed the lesson flow for each learning objective and age group, and used Canva to create presentations, worksheets, scenario cards, and question cards. The activity-centered curriculum helped students encounter both the possibilities and limitations of AI in an intuitive way.",
      "aiEducation.making": "Students used a range of AI and digital tools, including generative AI, Quick, Draw!, and Chrome Music Lab. True-or-false quizzes, group activities, hands-on creation, and presentations allowed them to use each tool and reflect together on what they made.",
      "aiEducation.ethics": "After experiencing cases where AI was wrong or produced convincing misinformation, students explored privacy, copyright, misinformation, and online etiquette through quizzes and discussion. Instead of giving them one prescribed answer, I asked questions such as “Why do you think that?” and “Who might be harmed?” to help them form their own judgments.",
      "aiEducation.operation": "I adapted each lesson to students' comprehension, class size, and the pace of activities. By coordinating responsibilities with assistant instructors and managing the overall schedule and flow, I learned how to tailor a class to real-time conditions in the room.",
      "aiEducation.learned": "I learned the value of experiential learning that invites students to use AI, ask questions, and make judgments for themselves. Errors and limitations in AI-generated content also became meaningful material for critical reflection in class.",

      "airforce.meta.title": "Air Force Pilot Scholarship Student — Sangyeon Kim",
      "airforce.meta.description": "My ongoing journey toward becoming a fighter pilot as a Republic of Korea Air Force pilot scholarship student.",
      "airforce.back": "← Back to experience",
      "airforce.title": "Air Force<br />Pilot Scholarship Student",
      "airforce.intro": "I am pursuing the path toward my goal of becoming a fighter pilot.",
      "airforce.meta.accepted": "Selected in 2024",
      "airforce.meta.program": "Air Force Pilot Service Scholarship Program",
      "airforce.imageAlt": "Acceptance notice for the Republic of Korea Air Force Pilot Service Scholarship Program",
      "airforce.aside.status": "Final selection<br />in 2024",
      "airforce.aside.program": "Air Force Pilot Service<br />Scholarship Program",
      "airforce.aside.goal": "Fighter pilot",
      "airforce.heading": "Working toward my goal<br /><em>of becoming a fighter pilot.</em>",
      "airforce.summary": "After being selected for the Republic of Korea Air Force pilot scholarship program, I have continued preparing to turn my goal of becoming a fighter pilot into reality.",
      "airforce.overview": "The <strong>Air Force Pilot Service Scholarship Program</strong> selects outstanding university students, provides scholarship support, and prepares them to become pilots through officer commissioning and flight training after graduation.",
      "airforce.why": "I applied for the Air Force pilot scholarship because I wanted to make my ambition of becoming a fighter pilot real. Rather than leaving it as an idea, I chose to take action and continue preparing for that goal.",
      "airforce.goal": "I am working toward my goal of becoming a fighter pilot. Alongside my university studies, I am preparing for the selection and training stages ahead and moving steadily closer to that goal.",

      "finance.meta.title": "Financial Data Analysis & Research — Sangyeon Kim",
      "finance.meta.description": "An ongoing financial data research project on designing and pricing protection against overnight gap-down risk.",
      "finance.back": "← Back to projects",
      "finance.title": "Financial Data<br />Analysis &amp; Research",
      "finance.intro": "An ongoing research project on designing and pricing protection against overnight gap-down risk.",
      "finance.aside.status": "Research in progress",
      "finance.aside.competition": "21st National Undergraduate<br />Securities &amp; Derivatives Competition<br />Did not advance to the finals",
      "finance.heading": "Examining overnight price risk<br /><em>through data.</em>",
      "finance.summary": "I am analyzing overnight gap-down risk in the Korean stock market—the period between one day's close and the next day's open—and researching the structure and pricing of a derivative designed to protect against that risk.",
      "finance.question": "This research asks how individual investors can be protected against gap-down risk during hours when they cannot adjust their positions. I am designing an Overnight Gap-down Protection Put (OGP-Put) and examining both risk-sensitive pricing and the exposure faced by liquidity providers.",
      "finance.data": "Using daily data for Samsung Electronics, SK hynix, and Hyundai Motor from January 2016 through July 2026, I compare the behavior of overnight and intraday returns. I also examine the VKOSPI, realized volatility, event calendars, U.S. indices, exchange rates, and other global variables active during Korean market off-hours.",
      "finance.method": "I compare jump-diffusion models, extreme value theory, and historical simulation, then evaluate filtered historical simulation (FHS) with EWMA-based conditional volatility filtering as a pricing method. The research also includes expanding-window walk-forward evaluation and futures hedging analysis.",
      "finance.competition": "I entered the 21st National Undergraduate Securities &amp; Derivatives Competition but did not advance to the finals. I have continued beyond that result, refining the paper and analytical code as the research develops.",
      "finance.current": "The current paper examines the limitations of static pricing based on unconditional averages and the effect of conditional volatility filtering on pricing. I continue to refine the scope while documenting both the findings and their limitations.",

      "momMap.meta.title": "Mom-Pyeonhal Map — Sangyeon Kim",
      "momMap.meta.description": "Mom-Pyeonhal Map is an AI-powered personalized route service for families visiting Seoul Children's Grand Park.",
      "momMap.back": "← Back to projects",
      "momMap.title": "Mom-Pyeonhal Map",
      "momMap.intro": "The most comfortable way to explore the park with children.",
      "momMap.meta.status": "Seoul Children's Grand Park Competition · In progress",
      "momMap.linksAria": "Project links",
      "momMap.open": "Open service",
      "momMap.galleryHeading": "Designing routes around<br /><em>each family's needs.</em>",
      "momMap.image.conditions": "Family preference setup screen in Mom-Pyeonhal Map",
      "momMap.image.themes": "Theme and amenity selection screen in Mom-Pyeonhal Map",
      "momMap.image.calculation": "AI route calculation screen in Mom-Pyeonhal Map",
      "momMap.image.result": "Recommended route results in Mom-Pyeonhal Map",
      "momMap.image.map": "Park map and route filters in Mom-Pyeonhal Map",
      "momMap.image.briefing": "AI practical briefing screen in Mom-Pyeonhal Map",
      "momMap.aside.status": "Seoul Children's Grand Park<br />Competition · In progress",
      "momMap.aside.role": "Service Planning<br />Web Development",
      "momMap.heading": "Less heat,<br />more moments to enjoy.",
      "momMap.summary": "Mom-Pyeonhal Map is an AI-powered service that designs routes through Seoul Children's Grand Park for children and parents by balancing weather, shade, walking effort, and access to essential amenities.",
      "momMap.overview": "Created for the Seoul Children's Grand Park competition, the service considers each family's children's ages, mode of transportation, heat sensitivity, and available time, then recommends a personalized route aligned with their priorities. <span class=\"todo\">Competition in progress</span>",
      "momMap.problem": "When visiting a park with children, heat, shade, walking distance, restrooms, and nursing rooms matter just as much as the attractions themselves. Yet planning a comfortable route that accounts for both a family's needs and the day's weather is difficult.",
      "momMap.research": "The service is designed around factors that families actually consider at the park. It collects the children's age group, primary mode of transportation, heat sensitivity, expected visit duration, themes and destinations of interest, required amenities, and routing priorities.",
      "momMap.role": "I planned the service flow and personalized routing features around family needs, then developed them into a working web service.",
      "momMap.process": "Families enter their needs step by step, then select places of interest and essential amenities. The service calculates a personalized route using current weather and the park's pedestrian network, and presents both the recommended path and the reasons behind it.",
      "momMap.solution": "On days with high heat risk, minimizing heat exposure becomes the default priority. Routes are recalculated to favor shaded paths, indoor sections, and accessible amenities. Users can review route details before starting their visit.",
      "momMap.feature1": "Personalized settings based on children's ages, transportation mode, heat sensitivity, and visit duration",
      "momMap.feature2": "Selection of themes and destinations of interest",
      "momMap.feature3": "Essential amenities including restrooms, nursing rooms, stroller rentals, and refreshment stands",
      "momMap.feature4": "Route priorities for minimum heat, minimum walking, or more attractions",
      "momMap.feature5": "Heat-safe route optimization using real-time weather and shaded or indoor segments",
      "momMap.feature6": "Map filters, detailed route views, and AI practical briefings for the next stop",
      "momMap.tech": "AI-powered routing is applied to the pedestrian network of Seoul Children's Grand Park using weather data. The route model accounts not only for distance, but also sun exposure, shaded and indoor segments, amenity access, and walking effort.",
      "momMap.result": "The results show estimated time and distance, the proportion of shaded and indoor segments, walking effort, continuous sun exposure, amenities along the way, and calculation nodes at a glance. The map provides both standard and illustrated views, with filters for restrooms, nursing rooms, refreshment stands, and shaded paths.",
      "momMap.learned": "This project is currently in competition. A detailed retrospective and results will be added after it concludes. <span class=\"todo\">TODO · Add retrospective</span>",

      "omnibus.meta.title": "omniBUS — Sangyeon Kim",
      "omnibus.meta.description": "omniBUS is a service project designed to make late-night journeys home safer and easier through ride companion matching.",
      "omnibus.back": "← Back to projects",
      "omnibus.intro": "So no one has to travel home alone after the last train.",
      "omnibus.meta.research": "User Research",
      "omnibus.meta.matching": "Ride Companion Matching",
      "omnibus.image.logo": "omniBUS logo",
      "omnibus.galleryHeading": "Connecting the service<br /><em>with the real-world setting.</em>",
      "omnibus.image.home": "omniBUS app home screen",
      "omnibus.image.presentation1": "omniBUS presentation photo 1",
      "omnibus.image.presentation2": "omniBUS presentation photo 2",
      "omnibus.image.presentation3": "omniBUS presentation photo 3",
      "omnibus.image.presentation4": "omniBUS presentation photo 4",
      "omnibus.aside.roleLabel": "Role",
      "omnibus.aside.role": "Service Planning<br />UX/UI Design<br />Flutter App Development<br />Firebase Integration",
      "omnibus.aside.resultLabel": "Recognition",
      "omnibus.aside.result": "Gyeonggi Silok Jiriji<br />Excellence Award",
      "omnibus.aside.tags": "Late-night Mobility<br />Ride Companion Matching<br />Map-based Service<br />Flutter<br />Firebase<br />User Research<br />Service Planning",
      "omnibus.heading": "So no one has to travel home alone<br />after the last train.",
      "omnibus.summary": "omniBUS is a mobile service that connects people traveling along similar routes for late-night taxi rides, helping them coordinate meeting details, expectations, and safety information in one place before departure.",
      "omnibus.backgroundTitle": "Background",
      "omnibus.background": "When public transportation stops running late at night, getting home suddenly becomes an individual problem. Even when others are heading in the same direction, it is difficult to coordinate where to meet, when to leave, and how to find a companion.<br /><br />omniBUS began as a way to address this problem through shared journeys.",
      "omnibus.featuresTitle": "Key Features",
      "omnibus.feature1": "View companion demand and open posts by station on a map",
      "omnibus.feature2": "Create a ride request based on departure station, destination, and time",
      "omnibus.feature3": "Set group size, gender preferences, meeting point, and notes",
      "omnibus.feature4": "Suggest departure times and confirm participation before leaving",
      "omnibus.feature5": "Review ride history and rate companions after completion",
      "omnibus.feature6": "Access essential safety tools, including reporting, blocking, and emergency help",
      "omnibus.workTitle": "What We Did",
      "omnibus.work": "Starting with problem definition and user research, we designed the service architecture and core user flows. Using Flutter and Firebase, we built an MVP spanning map-based discovery, ride creation, joining, schedule coordination, pre-departure confirmation, and trip completion.<br /><br />We also organized station data across the Seoul metropolitan area and iteratively improved features by testing the end-to-end service flow.",
      "omnibus.resultsTitle": "Activities &amp; Recognition",
      "omnibus.results": "omniBUS received an <strong>Excellence Award at the Gyeonggi Silok Jiriji competition</strong>.<br /><br />The project was meaningful because it went beyond presenting an idea and became a working service designed around a specific problem in late-night mobility.",
      "omnibus.learnedTitle": "What I Learned",
      "omnibus.learned": "I learned that a strong service is not defined by the number of features it contains, but by how well it reduces moments of uncertainty and makes the next action clear.<br /><br />While building omniBUS, I considered how maps, user information, time coordination, and safety guidance should connect naturally within a single experience. This helped the product evolve beyond a taxi-sharing board into a service that helps people prepare for and confirm a late-night journey together.",

      "greenCity.meta.title": "GreenCity AI — Sangyeon Kim",
      "greenCity.meta.description": "GreenCity AI is an AI-powered planting recommendation service designed to mitigate the urban heat island effect.",
      "greenCity.back": "← Back to projects",
      "greenCity.intro": "AI-powered planting recommendations for mitigating the urban heat island effect.",
      "greenCity.meta.award": "2026 AI·SW Convergence Festival · Encouragement Award",
      "greenCity.linksAria": "Project links",
      "greenCity.open": "Open service ↗",
      "greenCity.demo": "Watch demo ↗",
      "greenCity.image.input": "GreenCity AI natural-language input screen",
      "greenCity.galleryHeading": "Enter the conditions,<br /><em>then optimize the planting plan.</em>",
      "greenCity.image.conditions": "GreenCity AI condition selection screen",
      "greenCity.image.results": "GreenCity AI recommendation results",
      "greenCity.image.chart": "GreenCity AI carbon absorption and planting composition charts",
      "greenCity.image.award": "Receiving an Encouragement Award at the 2026 AI·SW Convergence Festival",
      "greenCity.aside.award": "2026 AI·SW Convergence Festival<br />Encouragement Award · 2026.06.05",
      "greenCity.aside.role": "Detailed role to be updated",
      "greenCity.heading": "Designing urban greening plans<br />with data and AI.",
      "greenCity.summary": "GreenCity AI is an AI-powered decision-support model that accounts for the physical conditions and budget constraints of public landscaping sites to identify a planting portfolio that maximizes carbon reduction.",
      "greenCity.overview": "An AI-powered greening recommendation service designed to mitigate the urban heat island effect. The project received an Encouragement Award at the 2026 AI·SW Convergence Festival.",
      "greenCity.problem": "Cities continue to expand green space and public landscaping in response to climate change and carbon-neutrality goals, but plans often rely heavily on convention or individual experience. Because species and placement can significantly change carbon absorption and maintenance efficiency under the same budget and space, planning needs a quantitative view of carbon-reduction impact.",
      "greenCity.research": "To account for both site conditions and budget constraints, the model takes landscape type, budget, area, soil depth, regional conditions, maintenance difficulty, and aesthetic preferences as inputs. Data from the Plant Master DB—including carbon absorption, planting cost, and space requirements by species—supports realistic candidate selection and planning.",
      "greenCity.role": "My detailed responsibilities will be added after confirmation. <span class=\"todo\">TODO · Update role</span>",
      "greenCity.process": "Users enter landscaping requirements in natural language or through buttons and sliders. A Gemini API-based LLM converts those requirements into structured variables such as maintenance difficulty and aesthetic preference. Hard Constraint Filtering then selects species that satisfy the environmental conditions in the Plant Master DB, and a linear-programming optimization engine calculates the planting portfolio.",
      "greenCity.solution": "Among the filtered candidates, the model maximizes carbon absorption while accounting for budget, area, and ecological-diversity constraints. Results include recommended quantities by species, expected carbon absorption, budget utilization, and space utilization.",
      "greenCity.feature1": "Enter landscaping conditions in natural language or with buttons and sliders",
      "greenCity.feature2": "Choose a space type, including rooftop gardens, building façades and vertical gardens, or parks and ground-level landscaping",
      "greenCity.feature3": "Account for budget, area, soil depth, hardiness zone, minimum carbon target, maximum area share per species, and maintenance level",
      "greenCity.feature4": "Apply Hard Constraint Filtering for soil depth, hardiness, structural load, and other environmental conditions",
      "greenCity.feature5": "Visualize recommended planting quantities, annual carbon absorption, estimated cost, used area, and planting composition",
      "greenCity.tech": "The method combines a Gemini API-based LLM, Plant Master DB, Hard Constraint Filtering, and Linear Programming. It maximizes carbon absorption while simultaneously applying budget, space, and ecological-diversity constraints.",
      "greenCity.result1": "The demonstration presents annual carbon absorption, estimated cost, area used, and the number of recommended species at a glance. In one scenario, the result showed annual absorption of 1,335.5 kg CO₂, an estimated cost of KRW 14.6 million, 661.1 m² of area used, and four recommended species.",
      "greenCity.result2": "The proposed impact is a planting portfolio with high environmental benefit within a limited budget, shifting landscape planning from experience-led judgment toward data and mathematical optimization. The approach can also improve the objectivity of municipal carbon-neutrality and urban-greening programs, with potential extensions to heat-island mitigation, fine-dust reduction, and biodiversity.",
      "greenCity.learned": "A project retrospective will be added after review. <span class=\"todo\">TODO · Add retrospective</span>",
    },
  };

  const originalContent = new Map();
  let currentLanguage = readStoredLanguage();

  function readStoredLanguage() {
    try {
      const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
      return SUPPORTED_LANGUAGES.includes(savedLanguage) ? savedLanguage : "ko";
    } catch (error) {
      return "ko";
    }
  }

  function storeLanguage(language) {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch (error) {
      // The language still changes for this visit if storage is unavailable.
    }
  }

  function translate(key, language = currentLanguage) {
    return translations[language]?.[key] ?? translations.ko[key] ?? null;
  }

  function cacheOriginalContent() {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (!originalContent.has(key)) originalContent.set(key, element.innerHTML);
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
      parseAttributeBindings(element.dataset.i18nAttr).forEach(([attribute, key]) => {
        const cacheKey = `${key}:${attribute}`;
        if (!originalContent.has(cacheKey)) originalContent.set(cacheKey, element.getAttribute(attribute) || "");
      });
    });
  }

  function parseAttributeBindings(value = "") {
    return value.split(",").map((binding) => binding.trim()).filter(Boolean).map((binding) => {
      const separatorIndex = binding.indexOf(":");
      return [binding.slice(0, separatorIndex), binding.slice(separatorIndex + 1)];
    }).filter(([attribute, key]) => attribute && key);
  }

  function applyTranslations(language) {
    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      const value = language === "ko" ? originalContent.get(key) : translate(key, language);
      if (value !== null && value !== undefined) element.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
      parseAttributeBindings(element.dataset.i18nAttr).forEach(([attribute, key]) => {
        const value = language === "ko" ? originalContent.get(`${key}:${attribute}`) : translate(key, language);
        if (value !== null && value !== undefined) element.setAttribute(attribute, value);
      });
    });

    document.querySelectorAll("[data-language]").forEach((button) => {
      const isActive = button.dataset.language === language;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
      button.setAttribute("aria-label", translate(`common.language.${button.dataset.language}`, language));
    });

    const switcher = document.querySelector(".language-switcher");
    if (switcher) switcher.setAttribute("aria-label", translate("common.language.label", language));
  }

  function renderLanguageSwitcher() {
    const nav = document.querySelector(".site-nav");
    if (!nav || nav.querySelector(".language-switcher")) return;

    const switcher = document.createElement("div");
    switcher.className = "language-switcher";
    switcher.setAttribute("role", "group");
    switcher.innerHTML = `
      <button type="button" data-language="ko" aria-pressed="false">KO</button>
      <span aria-hidden="true">|</span>
      <button type="button" data-language="en" aria-pressed="false">EN</button>`;

    switcher.addEventListener("click", (event) => {
      const button = event.target.closest("[data-language]");
      if (!button) return;
      setLanguage(button.dataset.language, true);
    });
    nav.appendChild(switcher);
  }

  function setLanguage(language, persist = false) {
    if (!SUPPORTED_LANGUAGES.includes(language)) return;
    currentLanguage = language;
    if (persist) storeLanguage(language);
    applyTranslations(language);
    window.dispatchEvent(new CustomEvent("portfolio:languagechange", { detail: { language } }));
  }

  document.documentElement.lang = currentLanguage;
  window.portfolioI18n = {
    getLanguage: () => currentLanguage,
    setLanguage,
    t: translate,
  };

  cacheOriginalContent();
  renderLanguageSwitcher();
  applyTranslations(currentLanguage);
})();
