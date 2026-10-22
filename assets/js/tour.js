"use strict";

const tourSlides = [
  { src: "assets/images/apartment/building-exterior.webp", it: ["Esterno", "L’edificio di MUN Apartment a Fuipiano Valle Imagna."], en: ["Exterior", "The building hosting MUN Apartment in Fuipiano Valle Imagna."] },
  { src: "assets/images/apartment/living-room.webp", it: ["Zona giorno", "Soggiorno e zona pranzo, luminosi e accoglienti."], en: ["Living area", "A bright and welcoming living and dining area."] },
  { src: "assets/images/apartment/kitchen.webp", it: ["Cucina attrezzata", "Cucina completa con zona pranzo per vivere la casa in autonomia."], en: ["Equipped kitchen", "A fully equipped kitchen and dining area for an independent stay."] },
  { src: "assets/images/apartment/sofa-bed.webp", it: ["Divano letto", "Il divano letto amplia gli spazi disponibili per il soggiorno."], en: ["Sofa bed", "The sofa bed adds flexible sleeping space to the apartment."] },
  { src: "assets/images/apartment/bedroom-bed.webp", it: ["Camera matrimoniale", "La camera matrimoniale, luminosa e affacciata sul paesaggio."], en: ["Double bedroom", "The bright double bedroom looks out over the surrounding landscape."] },
  { src: "assets/images/apartment/bedroom-window.webp", it: ["Vista dalla camera", "La vista dalla zona notte verso il paesaggio della Valle Imagna."], en: ["Bedroom view", "A view from the sleeping area over the Valle Imagna landscape."] },
  { src: "assets/images/apartment/bathroom-sink.webp", it: ["Bagno", "Lavabo, specchio e dotazioni del bagno."], en: ["Bathroom", "The bathroom sink, mirror and amenities."] },
  { src: "assets/images/apartment/bathroom-shower.webp", it: ["Doccia", "La doccia con la sua chiusura pieghevole in plastica."], en: ["Shower", "The shower with its folding plastic enclosure."] },
  { src: "assets/images/territory/winter-panorama.webp", it: ["Panorama", "Nelle giornate giuste, la valle regala scorci spettacolari sulle montagne."], en: ["Panorama", "On the right days, the valley offers spectacular mountain views."] }
];

const stage = document.querySelector(".tour-stage");
const stageImage = document.querySelector("[data-tour-stage]");
const stageTitle = document.querySelector("[data-tour-title]");
const stageText = document.querySelector("[data-tour-text]");
const stageCounter = document.querySelector("[data-tour-counter]");
const stageProgress = document.querySelector("[data-tour-progress]");
const prevButton = document.querySelector("[data-tour-prev]");
const nextButton = document.querySelector("[data-tour-next]");
const thumbs = Array.from(document.querySelectorAll("[data-tour-index]"));

let currentIndex = 0;
let currentLanguage = localStorage.getItem("munLanguage") || "it";
let touchStartX = null;
let touchStartY = null;

function preloadSlide(index) {
  const slide = tourSlides[(index + tourSlides.length) % tourSlides.length];
  const image = new Image();
  image.src = slide.src;
}

function renderTour(index, options = {}) {
  currentIndex = (index + tourSlides.length) % tourSlides.length;
  const slide = tourSlides[currentIndex];
  const copy = slide[currentLanguage] || slide.it;

  stageImage?.classList.add("is-changing");
  if (stageImage) {
    stageImage.src = slide.src;
    stageImage.alt = copy[0];

    const reveal = () => stageImage.classList.remove("is-changing");
    if (stageImage.complete) {
      requestAnimationFrame(reveal);
    } else {
      stageImage.addEventListener("load", reveal, { once: true });
    }
  }

  if (stageTitle) stageTitle.textContent = copy[0];
  if (stageText) stageText.textContent = copy[1];
  if (stageCounter) {
    stageCounter.textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${String(tourSlides.length).padStart(2, "0")}`;
  }
  if (stageProgress) {
    stageProgress.style.width = `${((currentIndex + 1) / tourSlides.length) * 100}%`;
  }

  thumbs.forEach((thumb, idx) => {
    const active = idx === currentIndex;
    thumb.classList.toggle("active", active);
    thumb.setAttribute("aria-current", active ? "true" : "false");
  });

  if (options.focusThumb) {
    thumbs[currentIndex]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }

  preloadSlide(currentIndex + 1);
  preloadSlide(currentIndex - 1);
}

prevButton?.addEventListener("click", () => renderTour(currentIndex - 1, { focusThumb: true }));
nextButton?.addEventListener("click", () => renderTour(currentIndex + 1, { focusThumb: true }));

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => renderTour(Number(thumb.dataset.tourIndex)));
});

document.querySelectorAll(".language-flag").forEach((button) => {
  button.addEventListener("click", () => {
    currentLanguage = button.dataset.language === "en" ? "en" : "it";
    renderTour(currentIndex);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") renderTour(currentIndex - 1, { focusThumb: true });
  if (event.key === "ArrowRight") renderTour(currentIndex + 1, { focusThumb: true });
});

stage?.addEventListener("touchstart", (event) => {
  if (event.target.closest("button")) return;
  const touch = event.changedTouches[0];
  touchStartX = touch.clientX;
  touchStartY = touch.clientY;
}, { passive: true });

stage?.addEventListener("touchend", (event) => {
  if (touchStartX === null || touchStartY === null) return;

  const touch = event.changedTouches[0];
  const deltaX = touch.clientX - touchStartX;
  const deltaY = touch.clientY - touchStartY;

  touchStartX = null;
  touchStartY = null;

  if (Math.abs(deltaX) < 50 || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) return;

  if (deltaX < 0) {
    renderTour(currentIndex + 1, { focusThumb: true });
  } else {
    renderTour(currentIndex - 1, { focusThumb: true });
  }
}, { passive: true });

renderTour(0);
