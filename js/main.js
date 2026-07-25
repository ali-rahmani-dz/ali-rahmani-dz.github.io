/* ==========================================================================
   Ali Rahmani — Portfolio
   Logique applicative : rendu des projets, filtres, lightbox, toast, date
   Dépend de : js/data.js (variable globale PROJECTS)
   ========================================================================== */

let currentCategory = "all";
let activeGallery = [];
let activeGalleryIndex = 0;
let activeProject = null;

// --------------------------------------------------------------------------
// INITIALISATION
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  setDynamicDates();
  renderProjects();
  lucide.createIcons();

  // Recherche et filtre
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", filterProjects);
  }
  document.querySelectorAll(".cat-btn").forEach((btn) => {
    btn.addEventListener("click", () => setCategory(btn.dataset.category));
  });

  // Boutons de contact / copie email
  document.querySelectorAll("[data-copy-email]").forEach((btn) => {
    btn.addEventListener("click", copyEmail);
  });

  // Lightbox : ouverture au clic sur une carte (délégation gérée dans renderProjects)
  document.getElementById("lightbox-prev")?.addEventListener("click", lightboxPrev);
  document.getElementById("lightbox-next")?.addEventListener("click", lightboxNext);
  document.getElementById("lightbox-close")?.addEventListener("click", closeLightbox);
  document.getElementById("lightbox")?.addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });

  // Raccourcis clavier de la lightbox
  window.addEventListener("keydown", (e) => {
    const modal = document.getElementById("lightbox");
    if (!modal || modal.classList.contains("hidden")) return;

    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") lightboxNext();
    if (e.key === "ArrowLeft") lightboxPrev();
  });
});

// --------------------------------------------------------------------------
// DATES DYNAMIQUES (mois/année en cours + copyright)
// --------------------------------------------------------------------------
function setDynamicDates() {
  const now = new Date();
  const monthYear = new Intl.DateTimeFormat("fr-FR", {
    month: "long",
    year: "numeric",
  }).format(now);
  const formattedDate = monthYear.charAt(0).toUpperCase() + monthYear.slice(1);

  document.querySelectorAll(".current-date-text").forEach((el) => {
    el.textContent = formattedDate;
  });

  const yearEl = document.getElementById("year-text");
  if (yearEl) yearEl.textContent = now.getFullYear();
}

// --------------------------------------------------------------------------
// FILTRAGE & RECHERCHE
// --------------------------------------------------------------------------
function setCategory(cat) {
  currentCategory = cat;

  document.querySelectorAll(".cat-btn").forEach((btn) => {
    const isActive = btn.dataset.category === cat;
    btn.className = isActive
      ? "cat-btn px-3 py-1.5 rounded-lg transition-all font-medium bg-[#10b981] text-[#121212] font-bold"
      : "cat-btn px-3 py-1.5 rounded-lg transition-all font-medium text-[#a0a0a0] hover:text-[#e0e0e0]";
  });

  filterProjects();
}

function filterProjects() {
  const searchEl = document.getElementById("search-input");
  const search = (searchEl?.value || "").toLowerCase();

  const filtered = PROJECTS.filter((p) => {
    const matchesCat = currentCategory === "all" || p.category === currentCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(search) ||
      p.description.toLowerCase().includes(search) ||
      p.techs.some((t) => t.toLowerCase().includes(search));
    return matchesCat && matchesSearch;
  });

  renderProjects(filtered);
}

// --------------------------------------------------------------------------
// RENDU DE LA GRILLE DE PROJETS
// --------------------------------------------------------------------------
function renderProjects(list = PROJECTS) {
  const container = document.getElementById("projects-grid");
  if (!container) return;
  container.innerHTML = "";

  list.forEach((project) => {
    const imgSrc = `screenshot/${encodeURIComponent(project.imageFileName)}`;
    const hasGallery = project.galleryFileNames && project.galleryFileNames.length > 1;

    const card = document.createElement("div");
    card.className =
      "rounded-2xl bg-[#1e1e1e] border border-[#333333] hover:border-[#444444] overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-md hover:shadow-xl";

    card.innerHTML = `
      <div>
        <div class="relative aspect-video bg-[#121212] overflow-hidden cursor-pointer border-b border-[#333333] group/img" data-open-lightbox="${project.id}">
          <img src="${imgSrc}" alt="${project.title}" class="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500" />

          <div class="absolute inset-0 bg-[#121212]/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-[#e0e0e0] font-medium text-xs backdrop-blur-[2px]">
            <span class="p-2 rounded-full bg-[#1e1e1e] border border-[#333333] text-[#10b981]">
              <i data-lucide="maximize-2" class="w-4 h-4"></i>
            </span>
            <span>${hasGallery ? `Voir les ${project.galleryFileNames.length} captures` : "Agrandir la capture"}</span>
          </div>

          ${
            project.badge
              ? `
            <span class="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#121212]/90 border border-[#10b981]/40 text-[10px] font-mono text-[#10b981] flex items-center gap-1">
              ${hasGallery ? '<i data-lucide="images" class="w-3 h-3"></i>' : ""}
              ${project.badge}
            </span>
          `
              : ""
          }
        </div>

        <div class="p-5">
          <h3 class="text-lg font-bold text-[#e0e0e0] mb-2 group-hover:text-[#10b981] transition-colors cursor-pointer" data-open-lightbox="${project.id}">
            ${project.title}
          </h3>
          <p class="text-[#a0a0a0] text-xs sm:text-sm leading-relaxed mb-4">
            ${project.description}
          </p>
        </div>
      </div>

      <div class="px-5 pb-5 pt-0">
        <div class="flex flex-wrap gap-1.5 pt-3 border-t border-[#333333]">
          ${project.techs.map((t) => `<span class="px-2 py-0.5 rounded bg-[#121212] border border-[#333333] text-[10px] font-mono text-[#a0a0a0]">${t}</span>`).join("")}
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  // Délégation des clics pour l'ouverture de la lightbox
  container.querySelectorAll("[data-open-lightbox]").forEach((el) => {
    el.addEventListener("click", () => openLightbox(el.dataset.openLightbox));
  });

  lucide.createIcons();
}

// --------------------------------------------------------------------------
// LIGHTBOX (visionneuse plein écran)
// --------------------------------------------------------------------------
function openLightbox(projectId) {
  const project = PROJECTS.find((p) => p.id === projectId);
  if (!project) return;

  activeProject = project;
  activeGallery =
    project.galleryFileNames && project.galleryFileNames.length > 0
      ? project.galleryFileNames
      : [project.imageFileName];

  activeGalleryIndex = 0;
  updateLightboxContent();

  const modal = document.getElementById("lightbox");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function updateLightboxContent() {
  if (!activeProject) return;

  const currentFileName = activeGallery[activeGalleryIndex];
  const imgSrc = `screenshot/${encodeURIComponent(currentFileName)}`;

  document.getElementById("lightbox-title").textContent = activeProject.title;
  document.getElementById("lightbox-subtitle").textContent =
    activeGallery.length > 1
      ? `Capture ${activeGalleryIndex + 1} sur ${activeGallery.length} — ${currentFileName}`
      : "Agrandissement haute résolution";

  document.getElementById("lightbox-img").src = imgSrc;
  document.getElementById("lightbox-desc").textContent = activeProject.description;

  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");

  if (activeGallery.length > 1) {
    prevBtn.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
  } else {
    prevBtn.classList.add("hidden");
    nextBtn.classList.add("hidden");
  }

  const thumbsContainer = document.getElementById("lightbox-thumbs");
  thumbsContainer.innerHTML = "";

  if (activeGallery.length > 1) {
    thumbsContainer.classList.remove("hidden");
    activeGallery.forEach((fileName, idx) => {
      const btn = document.createElement("button");
      btn.addEventListener("click", () => {
        activeGalleryIndex = idx;
        updateLightboxContent();
      });
      btn.className = `relative w-20 h-12 rounded-lg overflow-hidden border-2 transition-all ${
        activeGalleryIndex === idx
          ? "border-[#10b981] scale-105 shadow-md shadow-[#10b981]/20"
          : "border-[#333333] opacity-60 hover:opacity-100"
      }`;
      btn.innerHTML = `<img src="screenshot/${encodeURIComponent(fileName)}" class="w-full h-full object-cover" alt="${fileName}" />`;
      thumbsContainer.appendChild(btn);
    });
  } else {
    thumbsContainer.classList.add("hidden");
  }

  lucide.createIcons();
}

function lightboxNext() {
  if (activeGallery.length <= 1) return;
  activeGalleryIndex = (activeGalleryIndex + 1) % activeGallery.length;
  updateLightboxContent();
}

function lightboxPrev() {
  if (activeGallery.length <= 1) return;
  activeGalleryIndex = (activeGalleryIndex - 1 + activeGallery.length) % activeGallery.length;
  updateLightboxContent();
}

function closeLightbox() {
  const modal = document.getElementById("lightbox");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

// --------------------------------------------------------------------------
// COPIE EMAIL + NOTIFICATION TOAST
// --------------------------------------------------------------------------
function copyEmail() {
  navigator.clipboard.writeText("rahmani.ali@hotmail.com");

  const toast = document.getElementById("toast");
  document.getElementById("toast-msg").textContent =
    "Adresse email copiée dans le presse-papier !";

  toast.classList.remove("hidden");
  toast.classList.add("flex");

  setTimeout(() => {
    toast.classList.add("hidden");
    toast.classList.remove("flex");
  }, 3000);
}
