"use strict";

const translations = {
  it: {
    navHome: "Home",
    navApartment: "Appartamento",
    navTerritory: "Territorio",
    navRules: "Regole",
    navContact: "Contatti",
    navBook: "Prenota",

    footerTagline: "Stop allo stress e via al relax.",
    footerContact: "Contatti",
    footerFollow: "Seguici",

    homeEyebrow: "Fuipiano Valle Imagna · Bergamo",
    homeTitle: "Stop allo stress e via al relax.",
    homeLead: "Un rifugio di montagna accogliente, immerso nella tranquillità della Valle Imagna e dotato dei comfort essenziali per un soggiorno piacevole e senza pensieri.",
    bookNow: "Prenota il soggiorno",
    discoverApartment: "Scopri l’appartamento",

    quickLocationTitle: "Natura e tranquillità",
    quickLocationText: "Nel cuore di Fuipiano Valle Imagna, circondato dalle montagne.",
    quickAirportTitle: "35 minuti dall’aeroporto",
    quickAirportText: "Collegamento agevole con l’aeroporto di Orio al Serio.",
    quickMilanTitle: "Circa 60 minuti da Milano",
    quickMilanText: "Una pausa nella natura senza allontanarsi troppo dalla città.",
    quickBookingTitle: "Prenotazione semplice",
    quickBookingText: "Disponibile su Airbnb, Booking e Vrbo.",

    welcomeEyebrow: "Benvenuti",
    welcomeTitle: "La tranquillità della montagna incontra la comodità moderna.",
    welcomeLead: "MUN Apartment è pensato per chi desidera rallentare, respirare e vivere un soggiorno autentico nella natura.",
    welcomeText: "L’appartamento si trova a Fuipiano Valle Imagna, in provincia di Bergamo. Offre un ambiente accogliente, Wi-Fi, cucina attrezzata, zona giorno, camera matrimoniale e una vista capace di accompagnare ogni momento del soggiorno.",
    viewSpaces: "Guarda gli spazi →",

    whyEyebrow: "Perché sceglierci",
    whyTitle: "Un soggiorno semplice, autentico e rilassante.",
    featureHomeTitle: "Casa completa",
    featureHomeText: "Spazi indipendenti per soggiornare in libertà e comfort.",
    featureViewTitle: "Panorama montano",
    featureViewText: "Paesaggi, silenzio e natura direttamente intorno a voi.",
    featureCareTitle: "Assistenza dell’host",
    featureCareText: "Comunicazione chiara e supporto durante il soggiorno.",
    featureAccessTitle: "Prenotazione flessibile",
    featureAccessText: "Scegliete la piattaforma che preferite per verificare disponibilità e prezzi.",

    bookingEyebrow: "Prenota",
    bookingPreviewTitle: "Scegli il canale più comodo per il tuo soggiorno.",
    bookingPreviewText: "Consulta disponibilità, condizioni e prezzi aggiornati direttamente sulle principali piattaforme di prenotazione.",
    allBookingOptions: "Tutte le opzioni",

    apartmentEyebrow: "L’appartamento",
    apartmentTitle: "Tutto ciò che serve per sentirsi a casa.",
    apartmentLead: "Ambienti semplici, funzionali e accoglienti per vivere la montagna con libertà, comfort e tranquillità.",
    checkAvailability: "Verifica disponibilità",
    spacesEyebrow: "Gli spazi",
    spacesTitle: "Un appartamento pratico e completo.",
    spacesLead: "Gli ambienti sono organizzati per offrire autonomia durante soggiorni di piacere, relax o lavoro.",
    spacesText: "La casa comprende una cucina attrezzata con zona pranzo, una zona giorno, una camera matrimoniale e un bagno con doccia. Sono inoltre disponibili Wi-Fi, elettrodomestici e lavatrice.",
    galleryLiving: "Zona giorno",
    galleryKitchen: "Cucina attrezzata",
    galleryBedroom: "Camera matrimoniale",
    galleryView: "Vista dalla camera",
    galleryDetails: "Dettagli della camera",
    galleryBathroom: "Bagno",
    galleryShower: "Doccia",
    comfortEyebrow: "Comfort",
    comfortTitle: "I servizi essenziali per il soggiorno.",
    amenityWifi: "Connessione internet",
    amenityKitchenTitle: "Cucina",
    amenityKitchen: "Attrezzata per l’uso quotidiano",
    amenityWasherTitle: "Lavatrice",
    amenityWasher: "Disponibile nell’appartamento",
    amenityCoffeeTitle: "Caffè",
    amenityCoffee: "Macchina da caffè",
    amenityShowerTitle: "Doccia",
    amenityShower: "Bagno completo",
    amenityViewTitle: "Vista",
    amenityView: "Panorama della Valle Imagna",

    territoryEyebrow: "Il territorio",
    territoryTitle: "La montagna da vivere in ogni stagione.",
    territoryLead: "Sentieri, borghi, colori e panorami: la Valle Imagna è il luogo giusto per rallentare e riscoprire il contatto con la natura.",
    discoverEyebrow: "Da scoprire",
    discoverTitle: "Paesaggi autentici vicino all’appartamento.",
    discoverLead: "Fuipiano Valle Imagna offre tranquillità, aria aperta e accesso a un territorio ricco di scorci montani.",
    discoverText: "Il soggiorno può diventare il punto di partenza per passeggiate, escursioni, giornate nei borghi e momenti dedicati alla fotografia, alla natura e al relax.",
    seasonWinter: "Inverno e grandi panorami",
    seasonSpring: "Primavera nella valle",
    seasonAutumn: "Colori d’autunno",
    villageWinter: "Borghi nella neve",
    mountainViews: "Panorami della montagna",
    historicPlaces: "Luoghi e architetture locali",
    natureColors: "I colori della natura",
    sunsetViews: "Tramonti da ricordare",
    activityWalks: "Passeggiate",
    activityWalksText: "Percorsi nella natura e momenti all’aria aperta.",
    activityPhoto: "Fotografia",
    activityPhotoText: "Paesaggi e dettagli da osservare in ogni stagione.",
    activityVillages: "Borghi",
    activityVillagesText: "Atmosfere locali, architetture e tradizioni.",
    activityRelax: "Relax",
    activityRelaxText: "Silenzio, panorama e tempo per sé.",

    bookingPageEyebrow: "Prenotazione",
    bookingPageTitle: "Scegli la piattaforma che preferisci.",
    bookingPageLead: "Verifica disponibilità, tariffe e condizioni aggiornate direttamente su Airbnb, Booking.com o Vrbo.",
    airbnbTitle: "Prenota su Airbnb",
    bookingTitle: "Prenota su Booking.com",
    vrboTitle: "Prenota su Vrbo",
    platformText: "Apri la pagina della struttura e consulta le date disponibili.",
    openAirbnb: "Apri Airbnb",
    openBooking: "Apri Booking.com",
    openVrbo: "Apri Vrbo",
    needHelpEyebrow: "Hai bisogno di aiuto?",
    needHelpTitle: "Contatta direttamente l’host.",
    needHelpText: "Per dubbi sulla posizione, sulle modalità di arrivo o sul soggiorno, puoi scrivere via email o WhatsApp.",
    phone: "Telefono",
    bookingNote: "Prezzi, disponibilità, condizioni di cancellazione e modalità di pagamento sono quelli mostrati dalla piattaforma scelta al momento della prenotazione.",

    rulesEyebrow: "Informazioni utili",
    rulesTitle: "Regole semplici per un soggiorno sereno.",
    rulesLead: "Indicazioni essenziali per rispettare l’appartamento, il vicinato e gli altri ospiti.",
    ruleCheckTitle: "Check-in e check-out",
    ruleCheckText: "Check-in dalle 15:00 alle 00:00. Check-out entro le 11:00. Le istruzioni vengono inviate dopo la prenotazione.",
    ruleQuietTitle: "Silenzio e vicinato",
    ruleQuietText: "Orari di silenzio dalle 22:00 alle 08:00. Non sono consentite feste.",
    ruleSmokingTitle: "Fumo",
    ruleSmokingText: "È vietato fumare all’interno dell’appartamento.",
    rulePetsTitle: "Animali",
    rulePetsText: "Gli animali di piccola taglia sono ammessi su richiesta. Può essere previsto un supplemento per la pulizia.",
    ruleCareTitle: "Cura degli spazi",
    ruleCareText: "Lasciare l’appartamento in condizioni decorose, utilizzare correttamente le attrezzature e segnalare subito eventuali danni.",
    ruleSafetyTitle: "Sicurezza",
    ruleSafetyText: "Chiudere sempre a chiave la porta quando si lascia l’appartamento e seguire le istruzioni ricevute.",
    ruleDocumentsTitle: "Documenti",
    ruleDocumentsText: "È richiesto l’invio dei documenti di identità degli ospiti per la registrazione presso le autorità competenti.",
    ruleResourcesTitle: "Risorse",
    ruleResourcesText: "Evitare sprechi di acqua ed elettricità e conferire i rifiuti negli spazi indicati.",
    problemEyebrow: "Problemi durante il soggiorno",
    problemTitle: "Comunica subito ogni necessità.",
    problemText: "Segnalare tempestivamente guasti, danni o difficoltà permette di intervenire rapidamente e migliorare l’esperienza.",
    callHost: "Chiama l’host",

    contactEyebrow: "Contatti",
    contactTitle: "Siamo a disposizione per il tuo soggiorno.",
    contactLead: "Contattaci per informazioni sulla struttura, sull’arrivo o sulle modalità di prenotazione.",
    hostEyebrow: "Il tuo host",
    hostText: "Accoglienza, disponibilità e comunicazione chiara sono al centro dell’esperienza MUN Apartment. L’obiettivo è rendere ogni soggiorno semplice, piacevole e autentico.",
    writeMessage: "Scrivi un messaggio",
    address: "Indirizzo",
    socialEyebrow: "Social",
    socialTitle: "Segui MUN Apartment.",
    socialText: "Foto, aggiornamenti e contenuti dalla Valle Imagna.",

    discoverMoreEyebrow: "Scopri MUN Apartment",
    discoverMoreTitle: "Entra negli spazi e conosci la storia del progetto.",
    discoverMoreLead: "Un tour guidato tra gli ambienti reali dell’appartamento e l’intervista all’host per scoprire MUN Apartment da due prospettive diverse.",
    tourCardTitle: "Tour virtuale guidato",
    tourCardText: "Esplora zona giorno, cucina, camera e bagno attraverso le fotografie reali dell’appartamento.",
    openTour: "Inizia il tour",
    interviewCardTitle: "Intervista all’host",
    interviewCardText: "Guarda l’intervista a Lorenzo Cicogna dedicata a MUN Apartment e al progetto di ospitalità.",
    watchInterview: "Guarda l’intervista",
    guidedTour: "Tour virtuale",
    tourEyebrow: "Tour virtuale guidato",
    tourTitle: "Visita MUN Apartment, ambiente dopo ambiente.",
    tourLead: "Un percorso interattivo costruito esclusivamente con fotografie reali dell’appartamento. Non è una ricostruzione 3D o un tour 360°.",
    tourInstruction: "Scegli un ambiente oppure usa le frecce per continuare la visita.",
    tourCtaTitle: "Hai visto gli spazi. Ora scegli le date.",
    tourCtaText: "Controlla disponibilità, condizioni e prezzi aggiornati sulle piattaforme di prenotazione.",
    tourBook: "Verifica disponibilità",
    interviewEyebrow: "La storia di MUN Apartment",
    interviewTitle: "L’intervista all’host.",
    interviewLead: "Lorenzo Cicogna racconta MUN Apartment in un’intervista dedicata al progetto.",
    interviewVideoTitle: "MUN Apartment: l’intervista completa",
    interviewVideoText: "Video integrale. La riproduzione parte solo quando scegli di avviarla, per non appesantire la navigazione.",
    interviewAboutTitle: "Un modo diverso per conoscere MUN Apartment.",
    interviewAboutText: "Oltre alle fotografie e alle informazioni pratiche, l’intervista permette di conoscere direttamente l’host e il progetto attraverso la sua voce.",
    interviewTour: "Visita anche il tour virtuale",
    interviewBook: "Prenota il soggiorno",

    notFoundTitle: "Pagina non trovata.",
    notFoundText: "Il collegamento potrebbe essere cambiato oppure l’indirizzo non è corretto.",
    backHome: "Torna alla home"
  },

  en: {
    navHome: "Home",
    navApartment: "Apartment",
    navTerritory: "Area",
    navRules: "House rules",
    navContact: "Contact",
    navBook: "Book",

    footerTagline: "Leave stress behind and start relaxing.",
    footerContact: "Contact",
    footerFollow: "Follow us",

    homeEyebrow: "Fuipiano Valle Imagna · Bergamo",
    homeTitle: "Leave stress behind and start relaxing.",
    homeLead: "A welcoming mountain retreat surrounded by the calm of Valle Imagna, with the essential comforts for an easy and relaxing stay.",
    bookNow: "Book your stay",
    discoverApartment: "Discover the apartment",

    quickLocationTitle: "Nature and peace",
    quickLocationText: "In the heart of Fuipiano Valle Imagna, surrounded by mountains.",
    quickAirportTitle: "35 minutes from the airport",
    quickAirportText: "Easy access from Bergamo Orio al Serio Airport.",
    quickMilanTitle: "About 60 minutes from Milan",
    quickMilanText: "A break in nature without travelling too far from the city.",
    quickBookingTitle: "Easy booking",
    quickBookingText: "Available on Airbnb, Booking and Vrbo.",

    welcomeEyebrow: "Welcome",
    welcomeTitle: "Mountain tranquillity meets modern comfort.",
    welcomeLead: "MUN Apartment is designed for guests who want to slow down, breathe and enjoy an authentic stay in nature.",
    welcomeText: "The apartment is located in Fuipiano Valle Imagna, in the province of Bergamo. It offers a welcoming environment, Wi-Fi, an equipped kitchen, a living area, a double bedroom and a view that accompanies every moment of the stay.",
    viewSpaces: "Explore the spaces →",

    whyEyebrow: "Why choose us",
    whyTitle: "A simple, authentic and relaxing stay.",
    featureHomeTitle: "Entire apartment",
    featureHomeText: "Independent spaces to enjoy freedom and comfort.",
    featureViewTitle: "Mountain views",
    featureViewText: "Landscapes, silence and nature all around you.",
    featureCareTitle: "Host support",
    featureCareText: "Clear communication and assistance throughout your stay.",
    featureAccessTitle: "Flexible booking",
    featureAccessText: "Choose your preferred platform to check availability and prices.",

    bookingEyebrow: "Book",
    bookingPreviewTitle: "Choose the most convenient channel for your stay.",
    bookingPreviewText: "Check current availability, conditions and prices directly on the main booking platforms.",
    allBookingOptions: "All booking options",

    apartmentEyebrow: "The apartment",
    apartmentTitle: "Everything you need to feel at home.",
    apartmentLead: "Simple, practical and welcoming spaces to enjoy the mountains with freedom, comfort and peace.",
    checkAvailability: "Check availability",
    spacesEyebrow: "The spaces",
    spacesTitle: "A practical and complete apartment.",
    spacesLead: "The rooms are organised to offer independence during leisure, relaxing or working stays.",
    spacesText: "The apartment includes an equipped kitchen with dining area, a living area, a double bedroom and a bathroom with shower. Wi-Fi, appliances and a washing machine are also available.",
    galleryLiving: "Living area",
    galleryKitchen: "Equipped kitchen",
    galleryBedroom: "Double bedroom",
    galleryView: "Bedroom view",
    galleryDetails: "Bedroom details",
    galleryBathroom: "Bathroom",
    galleryShower: "Shower",
    comfortEyebrow: "Comfort",
    comfortTitle: "Essential amenities for your stay.",
    amenityWifi: "Internet connection",
    amenityKitchenTitle: "Kitchen",
    amenityKitchen: "Equipped for everyday use",
    amenityWasherTitle: "Washing machine",
    amenityWasher: "Available in the apartment",
    amenityCoffeeTitle: "Coffee",
    amenityCoffee: "Coffee machine",
    amenityShowerTitle: "Shower",
    amenityShower: "Complete bathroom",
    amenityViewTitle: "View",
    amenityView: "Valle Imagna panorama",

    territoryEyebrow: "The area",
    territoryTitle: "Mountains to enjoy in every season.",
    territoryLead: "Trails, villages, colours and views: Valle Imagna is the right place to slow down and reconnect with nature.",
    discoverEyebrow: "Explore",
    discoverTitle: "Authentic landscapes near the apartment.",
    discoverLead: "Fuipiano Valle Imagna offers tranquillity, open air and access to a territory rich in mountain views.",
    discoverText: "Your stay can be the starting point for walks, hikes, visits to villages and time dedicated to photography, nature and relaxation.",
    seasonWinter: "Winter and wide views",
    seasonSpring: "Spring in the valley",
    seasonAutumn: "Autumn colours",
    villageWinter: "Villages in the snow",
    mountainViews: "Mountain panoramas",
    historicPlaces: "Local places and architecture",
    natureColors: "Nature’s colours",
    sunsetViews: "Memorable sunsets",
    activityWalks: "Walks",
    activityWalksText: "Nature trails and time outdoors.",
    activityPhoto: "Photography",
    activityPhotoText: "Landscapes and details to observe in every season.",
    activityVillages: "Villages",
    activityVillagesText: "Local atmospheres, architecture and traditions.",
    activityRelax: "Relax",
    activityRelaxText: "Silence, views and time for yourself.",

    bookingPageEyebrow: "Booking",
    bookingPageTitle: "Choose your preferred platform.",
    bookingPageLead: "Check current availability, rates and conditions directly on Airbnb, Booking.com or Vrbo.",
    airbnbTitle: "Book on Airbnb",
    bookingTitle: "Book on Booking.com",
    vrboTitle: "Book on Vrbo",
    platformText: "Open the property page and check the available dates.",
    openAirbnb: "Open Airbnb",
    openBooking: "Open Booking.com",
    openVrbo: "Open Vrbo",
    needHelpEyebrow: "Need help?",
    needHelpTitle: "Contact the host directly.",
    needHelpText: "For questions about the location, arrival or your stay, you can write by email or WhatsApp.",
    phone: "Phone",
    bookingNote: "Prices, availability, cancellation conditions and payment methods are those shown by the selected platform at the time of booking.",

    rulesEyebrow: "Useful information",
    rulesTitle: "Simple rules for a peaceful stay.",
    rulesLead: "Essential guidance for respecting the apartment, the neighbours and other guests.",
    ruleCheckTitle: "Check-in and check-out",
    ruleCheckText: "Check-in from 3:00 PM to midnight. Check-out by 11:00 AM. Instructions are sent after booking.",
    ruleQuietTitle: "Quiet hours and neighbours",
    ruleQuietText: "Quiet hours are from 10:00 PM to 8:00 AM. Parties are not allowed.",
    ruleSmokingTitle: "Smoking",
    ruleSmokingText: "Smoking is not allowed inside the apartment.",
    rulePetsTitle: "Pets",
    rulePetsText: "Small pets are allowed upon request. An additional cleaning charge may apply.",
    ruleCareTitle: "Care of the property",
    ruleCareText: "Leave the apartment in a decent condition, use equipment correctly and report any damage immediately.",
    ruleSafetyTitle: "Safety",
    ruleSafetyText: "Always lock the door when leaving the apartment and follow the instructions provided.",
    ruleDocumentsTitle: "Identification",
    ruleDocumentsText: "Guests must provide identification documents for registration with the relevant authorities.",
    ruleResourcesTitle: "Resources",
    ruleResourcesText: "Avoid wasting water and electricity and dispose of waste in the indicated areas.",
    problemEyebrow: "Problems during your stay",
    problemTitle: "Report any need immediately.",
    problemText: "Promptly reporting faults, damage or difficulties helps us respond quickly and improve the experience.",
    callHost: "Call the host",

    contactEyebrow: "Contact",
    contactTitle: "We are here to help with your stay.",
    contactLead: "Contact us for information about the property, arrival or booking options.",
    hostEyebrow: "Your host",
    hostText: "A warm welcome, availability and clear communication are central to the MUN Apartment experience. The goal is to make every stay simple, pleasant and authentic.",
    writeMessage: "Write a message",
    address: "Address",
    socialEyebrow: "Social media",
    socialTitle: "Follow MUN Apartment.",
    socialText: "Photos, updates and content from Valle Imagna.",

    discoverMoreEyebrow: "Discover MUN Apartment",
    discoverMoreTitle: "Step inside the spaces and discover the story behind the project.",
    discoverMoreLead: "A guided tour through the real apartment and an interview with the host offer two different ways to discover MUN Apartment.",
    tourCardTitle: "Guided virtual tour",
    tourCardText: "Explore the living area, kitchen, bedroom and bathroom through real photographs of the apartment.",
    openTour: "Start the tour",
    interviewCardTitle: "Host interview",
    interviewCardText: "Watch the interview with Lorenzo Cicogna about MUN Apartment and the hospitality project.",
    watchInterview: "Watch the interview",
    guidedTour: "Virtual tour",
    tourEyebrow: "Guided virtual tour",
    tourTitle: "Visit MUN Apartment, room by room.",
    tourLead: "An interactive journey built exclusively with real photographs of the apartment. It is not a 3D reconstruction or a 360° tour.",
    tourInstruction: "Choose a space or use the arrows to continue the visit.",
    tourCtaTitle: "You have seen the spaces. Now choose your dates.",
    tourCtaText: "Check current availability, conditions and prices on the booking platforms.",
    tourBook: "Check availability",
    interviewEyebrow: "The story of MUN Apartment",
    interviewTitle: "The host interview.",
    interviewLead: "Lorenzo Cicogna talks about MUN Apartment in an interview dedicated to the project.",
    interviewVideoTitle: "MUN Apartment: full interview",
    interviewVideoText: "Full video. Playback starts only when you choose to play it, so the page remains lightweight while browsing.",
    interviewAboutTitle: "A different way to discover MUN Apartment.",
    interviewAboutText: "Beyond photographs and practical information, the interview lets you meet the host and hear about the project directly in his own voice.",
    interviewTour: "Visit the virtual tour too",
    interviewBook: "Book your stay",

    notFoundTitle: "Page not found.",
    notFoundText: "The link may have changed or the address may be incorrect.",
    backHome: "Back to home"
  }
};

const pageTitles = {
  home: {
    it: "MUN Apartment | Relax in Valle Imagna",
    en: "MUN Apartment | Relax in Valle Imagna"
  },
  apartment: {
    it: "L’Appartamento | MUN Apartment",
    en: "The Apartment | MUN Apartment"
  },
  territory: {
    it: "La Valle Imagna | MUN Apartment",
    en: "Valle Imagna | MUN Apartment"
  },
  booking: {
    it: "Prenota | MUN Apartment",
    en: "Book | MUN Apartment"
  },
  rules: {
    it: "Regole della casa | MUN Apartment",
    en: "House Rules | MUN Apartment"
  },
  contact: {
    it: "Contatti | MUN Apartment",
    en: "Contact | MUN Apartment"
  },
  tour: {
    it: "Tour virtuale | MUN Apartment",
    en: "Virtual Tour | MUN Apartment"
  },
  interview: {
    it: "Intervista all’host | MUN Apartment",
    en: "Host Interview | MUN Apartment"
  },
  "404": {
    it: "Pagina non trovata | MUN Apartment",
    en: "Page Not Found | MUN Apartment"
  }
};

/* MOBILE MENU */

const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");

function closeMenu() {
  if (!menuButton || !menu) return;

  menu.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Apri il menu");
}

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Chiudi il menu" : "Apri il menu"
    );
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    const clickedInsideMenu = menu.contains(event.target);
    const clickedButton = menuButton.contains(event.target);

    if (!clickedInsideMenu && !clickedButton) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1020) {
      closeMenu();
    }
  });
}

/* LANGUAGE */

const languageButtons = document.querySelectorAll(".language-flag");
const translatedElements = document.querySelectorAll("[data-i18n]");

function applyLanguage(language) {
  const selectedLanguage = translations[language] ? language : "it";

  translatedElements.forEach((element) => {
    const key = element.dataset.i18n;
    const value = translations[selectedLanguage][key];

    if (value) {
      element.textContent = value;
    }
  });

  languageButtons.forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.language === selectedLanguage
    );
  });

  document.documentElement.lang = selectedLanguage;
  localStorage.setItem("munLanguage", selectedLanguage);

  const page = document.body.dataset.page;
  if (pageTitles[page] && pageTitles[page][selectedLanguage]) {
    document.title = pageTitles[page][selectedLanguage];
  }
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.language);
  });
});

applyLanguage(localStorage.getItem("munLanguage") || "it");

/* CURRENT YEAR */

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

/* REVEAL ANIMATIONS */

const revealElements = document.querySelectorAll(".reveal");
const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (reducedMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
} else {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -30px 0px"
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
}
