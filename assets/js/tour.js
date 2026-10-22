"use strict";

const tourSlides = [
  { src: "assets/images/apartment/living-room.webp", it: ["Zona giorno", "Uno sguardo alla zona giorno dell’appartamento."], en: ["Living area", "A view of the apartment living area."] },
  { src: "assets/images/apartment/kitchen.webp", it: ["Cucina attrezzata", "La cucina con zona pranzo, pensata per l’uso quotidiano durante il soggiorno."], en: ["Equipped kitchen", "The kitchen and dining area, designed for everyday use during your stay."] },
  { src: "assets/images/apartment/bedroom-bed.webp", it: ["Camera matrimoniale", "La camera matrimoniale di MUN Apartment."], en: ["Double bedroom", "The double bedroom at MUN Apartment."] },
  { src: "assets/images/apartment/bedroom-window.webp", it: ["Vista dalla camera", "Una delle viste dalla zona notte."], en: ["Bedroom view", "One of the views from the sleeping area."] },
  { src: "assets/images/apartment/bedroom-dresser.webp", it: ["Dettagli della camera", "Arredi e dettagli della camera matrimoniale."], en: ["Bedroom details", "Furnishings and details from the double bedroom."] },
  { src: "assets/images/apartment/bathroom-sink.webp", it: ["Bagno", "Il bagno dell’appartamento."], en: ["Bathroom", "The apartment bathroom."] },
  { src: "assets/images/apartment/bathroom-shower.webp", it: ["Doccia", "La doccia del bagno."], en: ["Shower", "The bathroom shower."] },
  { src: "assets/images/apartment/bathroom-view.webp", it: ["Bagno · dettaglio", "Un secondo punto di vista del bagno."], en: ["Bathroom · detail", "A second view of the bathroom."] }
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
