const CRM_ENDPOINT = "";
const ANALYTICS_ID = "";
const WHATSAPP_CONTACT = "";
const TELEGRAM_CONTACT = "";

window.dataLayer = window.dataLayer || [];

const houses = [
  {
    id: "horizon-hosta",
    title: "Horizon House",
    district: "Хоста",
    type: "Семейный дом",
    price: 58,
    area: 186,
    land: 4.8,
    rooms: 4,
    finish: "чистовая отделка",
    tone: "tone-forest",
    location: "Тихая улица в Хосте, быстрый выезд к морю и социальной инфраструктуре.",
    description: "Дом для постоянной жизни семьи. Гостиная раскрыта к террасе, спальни отделены от общего пространства, участок не требует сложного ухода.",
    values: [
      "186 м² дают отдельную приватную зону для родителей, детей и гостей.",
      "Участок 4,8 сотки подходит для террасы, сада и спокойного отдыха вечером.",
      "Планировка сокращает лишние коридоры и делает дом удобным каждый день.",
      "Район Хоста подходит тем, кто хочет быть ближе к природе и городской инфраструктуре."
    ],
    specs: ["4 комнаты", "2 этажа", "панорамная гостиная", "терраса", "парковка на 2 авто"]
  },
  {
    id: "stone-adler",
    title: "Stone Villa",
    district: "Адлер",
    type: "Вилла",
    price: 86,
    area: 248,
    land: 5.6,
    rooms: 5,
    finish: "white box",
    tone: "tone-stone",
    location: "Адлер, район с понятной логистикой к аэропорту, Сириусу и морю.",
    description: "Дом для тех, кому важны простор, видовые точки и возможность настроить отделку под свой ритм жизни.",
    values: [
      "248 м² позволяют разместить кабинет, гостевую спальню и большую кухню-гостиную.",
      "Участок 5,6 сотки дает место для бассейна, зоны барбекю и зелени.",
      "Архитектура из камня, стекла и дерева выглядит спокойно и долго не устаревает.",
      "Адлер удобен для частых поездок и жизни между городом, морем и горами."
    ],
    specs: ["5 комнат", "2 этажа", "мастер-спальня", "видовая терраса", "место под бассейн"]
  },
  {
    id: "forest-polyana",
    title: "Forest Slope",
    district: "Красная Поляна",
    type: "Вилла",
    price: 98,
    area: 312,
    land: 6.4,
    rooms: 5,
    finish: "с отделкой",
    tone: "tone-wood",
    location: "Красная Поляна, природное окружение и сценарий жизни рядом с горами.",
    description: "Дом работает с рельефом: нижний уровень можно использовать под спорт, хранение и гостевую зону.",
    values: [
      "312 м² дают запас пространства для семьи, гостей и сезонного хранения.",
      "Участок 6,4 сотки сохраняет приватность и открывает виды на зеленый склон.",
      "Планировка разделяет активные и тихие зоны, поэтому дом удобен при разном ритме дня.",
      "Локация подходит для тех, кто выбирает горный воздух и спокойные выходные."
    ],
    specs: ["5 комнат", "3 уровня", "сауна", "гостевая зона", "терраса"]
  },
  {
    id: "matsesta-line",
    title: "Matsesta Line",
    district: "Мацеста",
    type: "Таунхаус",
    price: 42,
    area: 138,
    land: 2.4,
    rooms: 3,
    finish: "чистовая отделка",
    tone: "tone-sea",
    location: "Мацеста, удобная связь с центром и зелеными маршрутами района.",
    description: "Компактный формат для жизни в Сочи без лишней площади. Простая эксплуатация и понятная планировка.",
    values: [
      "138 м² закрывают базовый семейный сценарий без больших расходов на содержание.",
      "Участок 2,4 сотки дает личную террасу и небольшую зеленую зону.",
      "Три комнаты помогают разделить спальни, кабинет и общее пространство.",
      "Мацеста удобна для тех, кому важен баланс центра, природы и повседневных маршрутов."
    ],
    specs: ["3 комнаты", "2 этажа", "терраса", "парковка", "компактный участок"]
  }
];

const catalogGrid = document.querySelector("#catalogGrid");
const filters = document.querySelector("#filters");
const houseDialog = document.querySelector("#houseDialog");
const houseDetails = document.querySelector("#houseDetails");
const quizDialog = document.querySelector("#quizDialog");
const toast = document.querySelector("#toast");
const menuBtn = document.querySelector(".menu-btn");

function formatPrice(price) {
  return `${price} млн ₽`;
}

function eventTrack(name, payload = {}) {
  window.dataLayer.push({ event: name, ...payload });
  if (ANALYTICS_ID) {
    console.info("Analytics event", name, payload);
  }
}

async function sendLead(source, payload) {
  eventTrack(`${source}_submit`, payload);

  if (!CRM_ENDPOINT) {
    showToast("Заявка зафиксирована в демо-режиме. Подключите CRM_ENDPOINT в app.js.");
    return;
  }

  await fetch(CRM_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ source, payload, createdAt: new Date().toISOString() })
  });

  showToast("Заявка отправлена. Специалист SK123 свяжется с вами.");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("is-visible"), 4200);
}

function renderCatalog(items = houses) {
  catalogGrid.innerHTML = "";

  if (!items.length) {
    catalogGrid.innerHTML = `<article class="house-card"><div class="house-content"><h3>Под такие фильтры нет объекта</h3><p>Оставьте заявку, и специалист предложит близкие варианты или проект под строительство.</p><button class="primary-btn" data-open-quiz type="button">Подобрать вариант</button></div></article>`;
    bindQuizButtons();
    return;
  }

  items.forEach((house) => {
    const card = document.createElement("article");
    card.className = "house-card reveal is-visible";
    card.innerHTML = `
      <div class="house-image ${house.tone}" role="img" aria-label="Архитектурный образ дома ${house.title}"></div>
      <div class="house-content">
        <div class="house-meta">
          <span>${house.district}</span>
          <span>${house.type}</span>
          <span>${house.area} м²</span>
          <span>${house.rooms} комнаты</span>
        </div>
        <h3>${house.title}</h3>
        <div class="house-price">${formatPrice(house.price)}</div>
        <p>${house.description}</p>
        <div class="house-actions">
          <button class="secondary-btn" data-house="${house.id}" type="button">Подробнее</button>
          <button class="primary-btn" data-request="${house.id}" type="button">Запросить детали</button>
        </div>
      </div>
    `;
    catalogGrid.appendChild(card);
  });
}

function applyFilters() {
  const data = new FormData(filters);
  const price = Number(data.get("price"));
  const area = Number(data.get("area"));
  const district = data.get("district");
  const rooms = Number(data.get("rooms"));
  const type = data.get("type");

  const filtered = houses.filter((house) => {
    return house.price <= price &&
      house.area >= area &&
      (district === "all" || house.district === district) &&
      house.rooms >= rooms &&
      (type === "all" || house.type === type);
  });

  eventTrack("catalog_filter", { price, area, district, rooms, type, results: filtered.length });
  renderCatalog(filtered);
}

function openHouse(id) {
  const house = houses.find((item) => item.id === id);
  if (!house) return;

  houseDetails.innerHTML = `
    <div class="detail-layout">
      <div class="detail-visual house-image ${house.tone}" role="img" aria-label="Архитектурный образ дома ${house.title}"></div>
      <div class="detail-copy">
        <p class="eyebrow">Карточка объекта</p>
        <h2 id="dialogTitle">${house.title}</h2>
        <div class="detail-meta">
          <span>${house.district}</span>
          <span>${house.type}</span>
          <span>${house.area} м²</span>
          <span>${house.land} сот.</span>
          <span>${house.rooms} комнаты</span>
        </div>
        <p>${house.description}</p>
        <h3>Что это дает для жизни</h3>
        <ul class="value-list">${house.values.map((value) => `<li>${value}</li>`).join("")}</ul>
        <h3>Планировка</h3>
        <div class="plan-box" aria-label="Схема планировки"><span></span><span></span><span></span></div>
        <ul class="detail-list">${house.specs.map((spec) => `<li>${spec}</li>`).join("")}</ul>
        <h3>Расположение</h3>
        <p>${house.location}</p>
        <div class="house-actions">
          <button class="secondary-btn" data-contact="telegram" type="button">Задать вопрос</button>
          <button class="primary-btn" data-request="${house.id}" type="button">Получить документы</button>
        </div>
      </div>
    </div>
  `;

  houseDialog.showModal();
  eventTrack("house_open", { id: house.id, title: house.title });
}

function bindQuizButtons() {
  document.querySelectorAll("[data-open-quiz]").forEach((button) => {
    button.addEventListener("click", () => {
      quizDialog.showModal();
      eventTrack("quiz_open");
    });
  });
}

function handleContact(channel) {
  const map = {
    whatsapp: WHATSAPP_CONTACT,
    telegram: TELEGRAM_CONTACT
  };

  if (map[channel]) {
    window.open(map[channel], "_blank", "noopener,noreferrer");
    eventTrack("messenger_click", { channel });
    return;
  }

  showToast(`Кнопка ${channel === "whatsapp" ? "WhatsApp" : "Telegram"} готова. Добавьте контакт в app.js.`);
  eventTrack("messenger_demo_click", { channel });
}

function bindGlobalClicks() {
  document.addEventListener("click", (event) => {
    const houseButton = event.target.closest("[data-house]");
    const requestButton = event.target.closest("[data-request]");
    const contactButton = event.target.closest("[data-contact]");
    const closeButton = event.target.closest(".dialog-close");

    if (houseButton) openHouse(houseButton.dataset.house);

    if (requestButton) {
      const house = houses.find((item) => item.id === requestButton.dataset.request);
      sendLead("house_request", {
        houseId: requestButton.dataset.request,
        houseTitle: house?.title || "object",
        intent: "details"
      });
    }

    if (contactButton) handleContact(contactButton.dataset.contact);

    if (closeButton) {
      closeButton.closest("dialog")?.close();
    }
  });
}

function bindForms() {
  document.querySelector("#leadForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const payload = Object.fromEntries(new FormData(event.currentTarget).entries());
    sendLead("lead", payload);
    event.currentTarget.reset();
  });

  document.querySelector("#quizForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const payload = Object.fromEntries(new FormData(event.currentTarget).entries());
    sendLead("quiz", payload);
    event.currentTarget.reset();
    quizDialog.close();
  });
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach((item) => observer.observe(item));
}

function initMenu() {
  menuBtn.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("menu-open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("menu-open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

function initHashRoutes() {
  if (location.hash.startsWith("#house-")) {
    openHouse(location.hash.replace("#house-", ""));
  }
}

filters.addEventListener("change", applyFilters);
renderCatalog();
bindQuizButtons();
bindGlobalClicks();
bindForms();
initReveal();
initMenu();
initHashRoutes();
