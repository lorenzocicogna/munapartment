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

const stageImage = document.querySelector("[data-tour-stage]");
const stageTitle = document.querySelector("[data-tour-title]");
const stageText = document.querySelector("[data-tour-text]");
const stageCounter = document.querySelector("[data-tour-counter]");
const prevButton = document.querySelector("[data-tour-prev]");
const nextButton = document.querySelector("[data-tour-next]");
const thumbs = Array.from(document.querySelectorAll("[data-tour-index]"));
let currentIndex = 0;
let currentLanguage = localStorage.getItem("munLanguage") || "it";

function renderTour(index) {
  currentIndex = (index + tourSlides.length) % tourSlides.length;
  const slide = tourSlides[currentIndex];
  const copy = slide[currentLanguage] || slide.it;
  stageImage.src = slide.src;
  stageImage.alt = copy[0];
  stageTitle.textContent = copy[0];
  stageText.textContent = copy[1];
  stageCounter.textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${String(tourSlides.length).padStart(2, "0")}`;
  thumbs.forEach((thumb, idx) => {
    thumb.classList.toggle("active", idx === currentIndex);
    thumb.setAttribute("aria-current", idx === currentIndex ? "true" : "false");
  });
}

prevButton?.addEventListener("click", () => renderTour(currentIndex - 1));
nextButton?.addEventListener("click", () => renderTour(currentIndex + 1));
thumbs.forEach((thumb) => thumb.addEventListener("click", () => renderTour(Number(thumb.dataset.tourIndex))));
document.querySelectorAll(".language-flag").forEach((button) => {
  button.addEventListener("click", () => {
    currentLanguage = button.dataset.language === "en" ? "en" : "it";
    renderTour(currentIndex);
  });
});
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") renderTour(currentIndex - 1);
  if (event.key === "ArrowRight") renderTour(currentIndex + 1);
});
renderTour(0);
