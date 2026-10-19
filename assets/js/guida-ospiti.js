"use strict";

/*
 * MUN Apartment — free, local information guide (IT/EN).
 * All processing takes place in the visitor's browser. No API calls,
 * chat logs, external services, tracking or generative AI.
 */
(() => {
  const dictionary = {
    it: {
      heading: "Come possiamo aiutarti?",
      open: "Hai una domanda?",
      close: "Chiudi la guida",
      intro: "Sono una guida informativa automatica, non un assistente AI né una chat con l'host. Ti aiuto a trovare informazioni ufficiali su MUN Apartment.",
      prompt: "Oppure scrivi una domanda generale",
      placeholder: "Es. a che ora è il check-in?",
      send: "Invia",
      note: "Non inserire dati personali, documenti o informazioni sulla prenotazione. Le domande restano nel browser: non vengono inviate né memorizzate.",
      unknown: "Posso aiutarti con prenotazioni, orari, servizi, regole, animali, posizione, territorio, tour virtuale e contatti. Se non trovi la risposta, contatta direttamente l'host.",
      unknownLink: "Contatta l'host",
      pricing: "Tariffe, disponibilità, condizioni e prezzi totali possono cambiare. Verificali sulle pagine ufficiali Airbnb, Booking.com o Vrbo prima di prenotare; questa guida non consulta calendari in tempo reale.",
      pricingLink: "Controlla le piattaforme",
      parking: "Non ho indicazioni verificate su parcheggio o trasporti specifici. Per organizzare l'arrivo chiedi direttamente all'host.",
      parkingLink: "Contatta l'host",
      safety: "Questa guida non gestisce emergenze o problemi urgenti. In caso di pericolo immediato chiama il 112; per problemi relativi all'alloggio contatta direttamente l'host.",
      safetyLink: "Contatti MUN",
      topics: [
        {
          id: "booking", label: "Come posso prenotare?",
          keys: ["prenot", "airbnb", "booking", "vrbo", "riserv", "disponib", "acquist", "affitt"],
          answer: "Puoi prenotare MUN Apartment tramite Airbnb, Booking.com o Vrbo. Nella pagina Prenota trovi i link alle tre piattaforme per verificare date, prezzi e condizioni aggiornati.",
          link: "Vai a Prenota", href: "prenota.html"
        },
        {
          id: "checkin", label: "A che ora sono check-in e check-out?",
          keys: ["check-in", "check in", "check-out", "check out", "arrivo", "partenza", "orari", "orario", "entrata", "uscita", "chiavi"],
          answer: "Il check-in è previsto dalle 15:00 alle 00:00 e il check-out entro le 11:00. Le istruzioni per l'arrivo vengono inviate dopo la prenotazione.",
          link: "Regole e orari", href: "regole.html"
        },
        {
          id: "amenities", label: "Quali servizi offre l'appartamento?",
          keys: ["servizi", "wifi", "wi-fi", "internet", "cucina", "lavatrice", "doccia", "caffe", "comfort", "elettrodomest", "camera"],
          answer: "L'appartamento include zona giorno, cucina attrezzata con zona pranzo, camera matrimoniale, bagno con doccia, Wi-Fi, lavatrice e macchina da caffè. È presente una vista sulla Valle Imagna.",
          link: "Scopri l'appartamento", href: "appartamento.html"
        },
        {
          id: "rules", label: "Quali sono le regole della casa?",
          keys: ["regole", "fumare", "fumo", "silenzio", "feste", "rumore", "document", "sicurezza", "vietat", "rifiuti"],
          answer: "È vietato fumare all'interno e non sono ammesse feste. Gli orari di silenzio vanno dalle 22:00 alle 08:00. Per la registrazione degli ospiti servono i documenti d'identità, da fornire tramite le modalità comunicate dall'host, mai in questa guida.",
          link: "Leggi le regole", href: "regole.html"
        },
        {
          id: "pets", label: "Gli animali sono ammessi?",
          keys: ["animal", "cane", "cani", "gatto", "gatti", "pet", "cucciolo"],
          answer: "Gli animali di piccola taglia sono ammessi su richiesta. Può essere previsto un supplemento per la pulizia: verifica con l'host prima di confermare la prenotazione.",
          link: "Regole della casa", href: "regole.html"
        },
        {
          id: "location", label: "Dove si trova MUN Apartment?",
          keys: ["dove", "indirizzo", "posizione", "fuipiano", "bergamo", "via volta", "raggiung", "localita", "località"],
          answer: "MUN Apartment si trova in Via Alessandro Volta 10, 24030 Fuipiano Valle Imagna (BG), immerso nel paesaggio montano della Valle Imagna.",
          link: "Vai ai contatti", href: "contatti.html"
        },
        {
          id: "territory", label: "Cosa si può fare nei dintorni?",
          keys: ["territorio", "dintorni", "escursion", "sentier", "passeggiat", "montagn", "natura", "attivit", "visit", "paesaggi", "borghi"],
          answer: "Nei dintorni puoi scoprire paesaggi montani, passeggiate nella natura, borghi e punti panoramici. La pagina Territorio presenta alcune idee per esplorare la Valle Imagna in ogni stagione.",
          link: "Esplora il territorio", href: "territorio.html"
        },
        {
          id: "tour", label: "Posso vedere un tour dell'appartamento?",
          keys: ["tour", "virtuale", "foto", "fotograf", "immagini", "vedere la casa", "ambient", "galleria"],
          answer: "Sì! Il tour guidato permette di esplorare zona giorno, cucina, camera e bagno attraverso fotografie reali. Non è un'esperienza 3D o a 360°.",
          link: "Apri il tour fotografico", href: "tour.html"
        },
        {
          id: "interview", label: "Posso conoscere l'host?",
          keys: ["host", "lorenzo", "intervist", "video", "proprietario", "gestore", "chi gestisce"],
          answer: "Puoi conoscere meglio Lorenzo Cicogna e il progetto MUN Apartment nell'intervista video presente sul sito. Il video si avvia solo quando scegli di riprodurlo.",
          link: "Guarda l'intervista", href: "intervista.html"
        },
        {
          id: "contact", label: "Come posso contattare l'host?",
          keys: ["contatt", "email", "mail", "whatsapp", "telefono", "numero", "scrivere", "scriv", "aiuto", "problema"],
          answer: "Puoi contattare MUN Apartment via email a munapartment@gmail.com o al numero +39 351 689 6022. Per richieste specifiche sul soggiorno rivolgiti direttamente all'host.",
          link: "Contatti MUN Apartment", href: "contatti.html"
        }
      ]
    },
    en: {
      heading: "How can we help you?",
      open: "Have a question?",
      close: "Close the guide",
      intro: "I'm an automated information guide, not an AI assistant or a live chat with the host. I can help you find official information about MUN Apartment.",
      prompt: "Or ask a general question",
      placeholder: "E.g. what time is check-in?",
      send: "Ask",
      note: "Do not enter personal data, ID documents or booking details. Questions stay in your browser and are neither sent nor stored.",
      unknown: "I can help with bookings, arrival times, amenities, house rules, pets, location, surroundings, the virtual tour and contacting the host. If you cannot find an answer, please contact the host directly.",
      unknownLink: "Contact the host",
      pricing: "Rates, availability, terms and total prices may change. Please check the official Airbnb, Booking.com or Vrbo listings before booking. This guide does not check live booking calendars.",
      pricingLink: "Check booking platforms",
      parking: "I don't have verified parking or transport details. Please contact the host to plan your arrival.",
      parkingLink: "Contact the host",
      safety: "This guide cannot deal with emergencies or urgent problems. Call 112 if there is immediate danger. For apartment issues, contact the host directly.",
      safetyLink: "MUN contact details",
      topics: [
        {
          id: "booking", label: "How can I book a stay?",
          keys: ["book", "booking", "airbnb", "vrbo", "reserve", "reserv", "availab", "rental", "rent"],
          answer: "You can book MUN Apartment through Airbnb, Booking.com or Vrbo. The Book page links to all three platforms, where you can check current dates, rates and conditions.",
          link: "Booking options", href: "prenota.html"
        },
        {
          id: "checkin", label: "What are the check-in and check-out times?",
          keys: ["check-in", "check in", "check-out", "check out", "arrival", "departure", "time", "keys", "arrive", "leave"],
          answer: "Check-in is from 3:00 PM to midnight (15:00–00:00). Check-out is by 11:00 AM. Arrival instructions are sent after booking.",
          link: "House rules and times", href: "regole.html"
        },
        {
          id: "amenities", label: "Which amenities are available?",
          keys: ["amenit", "wifi", "wi-fi", "internet", "kitchen", "washing", "washer", "shower", "coffee", "bedroom", "facilit", "comfort"],
          answer: "The apartment includes a living area, equipped kitchen and dining space, double bedroom, bathroom with shower, Wi-Fi, washing machine and coffee machine. It also offers views of Valle Imagna.",
          link: "Explore the apartment", href: "appartamento.html"
        },
        {
          id: "rules", label: "What are the house rules?",
          keys: ["rules", "smok", "quiet", "party", "parties", "noise", "document", "identification", "safety", "waste"],
          answer: "Smoking is not allowed indoors and parties are not permitted. Quiet hours are from 10:00 PM to 8:00 AM. Guest ID documents are required for registration and should be provided only through arrangements specified by the host, never through this guide.",
          link: "Read house rules", href: "regole.html"
        },
        {
          id: "pets", label: "Are pets allowed?",
          keys: ["pet", "dog", "cat", "animal"],
          answer: "Small pets are allowed upon request. An additional cleaning charge may apply; please confirm with the host before booking.",
          link: "House rules", href: "regole.html"
        },
        {
          id: "location", label: "Where is MUN Apartment?",
          keys: ["where", "address", "location", "fuipiano", "bergamo", "via volta", "find", "directions"],
          answer: "MUN Apartment is at Via Alessandro Volta 10, 24030 Fuipiano Valle Imagna (BG), in the mountain landscape of Valle Imagna.",
          link: "Contact and location", href: "contatti.html"
        },
        {
          id: "territory", label: "What can I do nearby?",
          keys: ["nearby", "surrounding", "hiking", "walk", "nature", "mountain", "landscape", "village", "activity", "activities", "area"],
          answer: "The area offers mountain landscapes, nature walks, traditional villages and scenic views. Visit the Territory page for ideas on exploring Valle Imagna through the seasons.",
          link: "Explore the area", href: "territorio.html"
        },
        {
          id: "tour", label: "Is there a virtual tour?",
          keys: ["tour", "virtual", "photo", "picture", "image", "see the apartment", "gallery", "rooms"],
          answer: "Yes. A guided photographic tour lets you explore the living room, kitchen, bedroom and bathroom using real pictures. It is not a 3D or 360° reconstruction.",
          link: "Open the photo tour", href: "tour.html"
        },
        {
          id: "interview", label: "Can I meet the host?",
          keys: ["host", "lorenzo", "interview", "video", "owner", "manager", "who manages"],
          answer: "You can learn about Lorenzo Cicogna and MUN Apartment by watching the host interview on the website. Playback starts only when you decide to play the video.",
          link: "Watch the interview", href: "intervista.html"
        },
        {
          id: "contact", label: "How do I contact the host?",
          keys: ["contact", "email", "mail", "whatsapp", "phone", "telephone", "call", "help", "problem", "message"],
          answer: "You can contact MUN Apartment at munapartment@gmail.com or +39 351 689 6022. Please reach the host directly for specific booking or stay enquiries.",
          link: "Contact MUN Apartment", href: "contatti.html"
        }
      ]
    }
  };

  const normalize = value => value.toLocaleLowerCase().normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "").trim();

  const root = document.createElement("div");
  root.className = "mun-guide";
  root.innerHTML =
    '<section id="mun-guide-panel" class="mun-guide__panel" aria-label="MUN Apartment" hidden>' +
      '<div class="mun-guide__header">' +
        '<div><span class="mun-guide__eyebrow">MUN Apartment</span><strong class="mun-guide__title"></strong></div>' +
        '<button type="button" class="mun-guide__close"></button>' +
      '</div>' +
      '<div class="mun-guide__body">' +
        '<p class="mun-guide__intro"></p>' +
        '<div class="mun-guide__choices"></div>' +
        '<div class="mun-guide__answer" aria-live="polite" aria-atomic="true" hidden></div>' +
        '<form class="mun-guide__form" autocomplete="off">' +
          '<label for="mun-guide-question"></label>' +
          '<div class="mun-guide__form-row"><input type="text" id="mun-guide-question" maxlength="160" autocomplete="off" required /><button type="submit"></button></div>' +
        '</form>' +
        '<p class="mun-guide__note"></p>' +
      '</div>' +
    '</section>' +
    '<button type="button" class="mun-guide__toggle" aria-controls="mun-guide-panel" aria-expanded="false">' +
      '<span class="mun-guide__symbol" aria-hidden="true">?</span><span class="mun-guide__toggle-label"></span>' +
    '</button>';

  document.body.appendChild(root);

  const panel = root.querySelector(".mun-guide__panel");
  const toggle = root.querySelector(".mun-guide__toggle");
  const close = root.querySelector(".mun-guide__close");
  const title = root.querySelector(".mun-guide__title");
  const intro = root.querySelector(".mun-guide__intro");
  const choices = root.querySelector(".mun-guide__choices");
  const answer = root.querySelector(".mun-guide__answer");
  const form = root.querySelector(".mun-guide__form");
  const input = root.querySelector("#mun-guide-question");
  const note = root.querySelector(".mun-guide__note");

  let language = "it";
  let selectedTopic = null;

  function show(message, label, href) {
    answer.replaceChildren();
    const p = document.createElement("p");
    p.textContent = message;
    answer.appendChild(p);
    if (label && href) {
      const a = document.createElement("a");
      a.href = href;
      a.textContent = label;
      answer.appendChild(a);
    }
    answer.hidden = false;
  }

  function pick(id) {
    const topic = dictionary[language].topics.find(item => item.id === id);
    if (!topic) return;
    selectedTopic = id;
    show(topic.answer, topic.link, topic.href);
  }

  function render(lang) {
    language = dictionary[lang] ? lang : "it";
    const t = dictionary[language];
    title.textContent = t.heading;
    intro.textContent = t.intro;
    note.textContent = t.note;
    root.querySelector(".mun-guide__form label").textContent = t.prompt;
    root.querySelector(".mun-guide__form-row button").textContent = t.send;
    root.querySelector(".mun-guide__toggle-label").textContent = t.open;
    input.placeholder = t.placeholder;
    panel.setAttribute("aria-label", t.heading);
    close.textContent = "×";
    close.setAttribute("aria-label", t.close);
    toggle.setAttribute("aria-label", panel.hidden ? t.open : t.close);

    choices.replaceChildren();
    t.topics.forEach(item => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = item.label;
      btn.addEventListener("click", () => pick(item.id));
      choices.appendChild(btn);
    });
    if (selectedTopic) pick(selectedTopic);
    else if (!answer.hidden) show(t.unknown, t.unknownLink, "contatti.html");
  }

  function respond(question) {
    const text = normalize(question);
    const t = dictionary[language];
    selectedTopic = null;
    if (/emergenz|pericolo|incendio|ambulanz|urgent|emergency|danger|fire |ambulance/.test(text)) {
      show(t.safety, t.safetyLink, "contatti.html");
      return;
    }
    if (/parchegg|parking|trasport|transport|shuttle|bus\b|autobus/.test(text)) {
      show(t.parking, t.parkingLink, "contatti.html");
      return;
    }
    if (/prezz|cost[oia]|tariff|quanto costa|scont|price|cost\b|rate\b|discount|total price|cheap/.test(text)) {
      show(t.pricing, t.pricingLink, "prenota.html");
      return;
    }
    const topic = t.topics.find(item => item.keys.some(key => text.includes(normalize(key))));
    if (topic) pick(topic.id);
    else show(t.unknown, t.unknownLink, "contatti.html");
  }

  function setOpen(open) {
    panel.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? dictionary[language].close : dictionary[language].open);
    if (open) close.focus();
    else {
      selectedTopic = null;
      input.value = "";
      answer.hidden = true;
      answer.replaceChildren();
      toggle.focus();
    }
  }

  toggle.addEventListener("click", () => setOpen(panel.hidden));
  close.addEventListener("click", () => setOpen(false));
  form.addEventListener("submit", event => {
    event.preventDefault();
    const question = input.value.trim();
    input.value = "";
    if (question) respond(question);
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !panel.hidden) setOpen(false);
  });

  // The website's own language switch updates <html lang> on button clicks.
  document.addEventListener("click", event => {
    if (event.target.closest(".language-flag[data-language]")) {
      render(document.documentElement.lang);
    }
  });

  root.addEventListener("click", event => {
    const link = event.target.closest(".mun-guide__answer a");
    if (link?.getAttribute("href")?.includes("#")) setOpen(false);
  });

  render(document.documentElement.lang);
})();
