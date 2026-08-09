const CRM_ENDPOINT = "";
const ANALYTICS_ID = "";
const WHATSAPP_CONTACT = "";
const TELEGRAM_CONTACT = "";

window.dataLayer = window.dataLayer || [];

const galleryCounts = Object.freeze({
  "object-1": 10,
  "object-2": 6,
  "object-3": 8,
  "object-4": 8,
  "object-7": 6,
  "object-8": 9,
  "object-9": 10,
  "object-10": 10
});

const houses = [
  {
    id: "object-1",
    title: "Дом в КП «Иверия»",
    district: "Адлерский район",
    type: "Дом",
    status: "Строится",
    price: 16.5,
    area: 130,
    land: "4,19–4,55 сот.",
    rooms: null,
    cover: "./assets/objects/object-1.jpg",
    location: "г. Сочи, Адлерский район, КП «Иверия», д. 41/1.",
    description: "Два дома на закрытой территории в экологичном районе. Срок реализации — ориентировочно 6 месяцев.",
    values: [
      "Монолитный каркас из бетона марки 300, двойное армирование арматурой 12 мм.",
      "Панорамное остекление, керамзит-блок, утеплитель 5 см и фасад «короед» с керамогранитом.",
      "Подключены оптоволоконный интернет, 15 кВт электричества, скважина и ЛОС.",
      "Рядом школы, детские сады, Олимпийский парк, море, магазины и ПВЗ."
    ],
    specs: ["130 м²", "участки 4,19 и 4,55 сот.", "от 16,5 млн ₽", "строительство"]
  },
  {
    id: "object-2",
    title: "Дома в Нижней Шиловке",
    district: "Адлерский район",
    type: "Дом",
    status: "Строится",
    price: 13,
    area: 80,
    land: "4 сот.",
    rooms: null,
    cover: "./assets/objects/object-2.jpg",
    location: "г. Сочи, Адлерский район, с. Нижняя Шиловка, ул. Мясникяна, 47.",
    description: "Три дома свободной планировки на этапе котлована. Ориентировочный срок реализации — 4 месяца.",
    values: [
      "Монолитный каркас из бетона марки 300, двойное армирование и керамзит-блок.",
      "Панорамное остекление, утеплитель 5 см, фасад «короед» с керамогранитом.",
      "Четырехскатная кровля из металлочерепицы; интернет, 15 кВт, скважина и ЛОС.",
      "В окружении — школы, детские сады, Олимпийский парк, море, магазины и ПВЗ."
    ],
    specs: ["80 м²", "участок 4 сот.", "свободная планировка", "от 13 млн ₽"]
  },
  {
    id: "object-3",
    title: "Дом с видом на море",
    district: "Адлерский район",
    type: "Дом",
    status: "Строится",
    price: 18.5,
    area: 130,
    land: "5 сот.",
    rooms: null,
    cover: "./assets/objects/object-3.jpg",
    location: "г. Сочи, Адлерский район, с. Нижняя Шиловка, д. 21.",
    description: "Участок с прямым видом на море для дома площадью 130 или 190 м². Срок реализации — ориентировочно 6 месяцев.",
    values: [
      "Монолитный каркас из бетона марки 300, двойное армирование и керамзит-блок.",
      "Панорамное остекление, утеплитель 5 см и фасад «короед» с керамогранитом.",
      "Оптоволоконный интернет, 15 кВт электричества, скважина и ЛОС.",
      "Экологичное окружение, школы и детские сады, магазины, ПВЗ, море и Олимпийский парк рядом."
    ],
    specs: ["130–190 м²", "участок 5 сот.", "вид на море", "от 18,5 млн ₽"]
  },
  {
    id: "object-4",
    title: "Готовый дом на Мясникяна",
    district: "Адлерский район",
    type: "Дом",
    status: "Готовый дом",
    price: 31,
    area: 259,
    land: "8,8 сот.",
    rooms: null,
    cover: "./assets/objects/object-4.jpg",
    location: "г. Сочи, Адлерский район, с. Нижняя Шиловка, ул. Мясникяна, 31.",
    description: "Готовый дом с ремонтом, мебелью и техникой. Панорамные виды на море и горы, без соседних домов вплотную.",
    values: [
      "Подведены газ, скважина, 15 кВт электричества, ЛОС и оптоволоконный интернет.",
      "Участок 8,8 сотки с плодовыми деревьями и баней.",
      "Панорамный вид на море и горы.",
      "Экологичное окружение, школы, детские сады, магазины и ПВЗ рядом."
    ],
    specs: ["259 м²", "участок 8,8 сот.", "ремонт, мебель и техника", "31 млн ₽"]
  },
  {
    id: "object-5",
    title: "Шале на Мясникяна",
    district: "Адлерский район",
    type: "Дом",
    status: "В продаже",
    price: null,
    area: null,
    land: null,
    rooms: null,
    cover: "",
    location: "г. Сочи, Адлерский район, ул. Мясникяна.",
    description: "Шале на улице Мясникяна. Подробные параметры, комплектация и стоимость уточняются у специалиста SK123.",
    values: ["Локация — Адлерский район, улица Мясникяна.", "Подробности по объекту предоставит специалист SK123."],
    specs: ["параметры уточняются", "стоимость уточняется"]
  },
  {
    id: "object-6",
    title: "Рижская",
    district: "Сочи",
    type: "Дом",
    status: "Продано",
    price: null,
    area: null,
    land: null,
    rooms: null,
    cover: "",
    location: "г. Сочи, ул. Рижская.",
    description: "Объект на Рижской продан.",
    values: ["Статус объекта — продано.", "Специалист SK123 подберёт похожий вариант."],
    specs: ["объект продан"]
  },
  {
    id: "object-7",
    title: "Дом в Весёлом",
    district: "Веселое",
    type: "Дом",
    status: "Готовый дом",
    price: 35,
    area: 141,
    land: "4,7 сот. / фактически 7,8 сот.",
    rooms: null,
    cover: "./assets/objects/object-7.jpg",
    location: "с. Весёлое, СНТ «Зелёная горка», д. 1/16.",
    description: "Готовый дом в черновой отделке со свободной планировкой, видом на горы и закрытой территорией.",
    values: [
      "Каркасный монолит, наружные стены из керамзит-блока, фасад «шуба» и утеплитель 5 см.",
      "Газ в доме, 15 кВт, центральная вода, септик, интернет и ТВ.",
      "Электрические ворота с дистанционным открыванием и точки под 5 камер видеонаблюдения.",
      "Рядом школа, детский сад, магазины, ПВЗ; вид на горы."
    ],
    specs: ["141 м²", "4,7 сот. / фактически 7,8 сот.", "черновая отделка", "35 млн ₽"]
  },
  {
    id: "object-8",
    title: "Дом на Золотом Гребешке",
    district: "Черешня",
    type: "Дом",
    status: "Черновой",
    price: 16,
    area: 138,
    land: "5,65 сот., ИЖС",
    rooms: 4,
    cover: "./assets/objects/object-8.jpg",
    location: "с. Черешня, Золотой Гребешок, СНТ, бригада №10.",
    description: "Дом в черновой отделке, готовый к продаже. Планировка: кухня-гостиная, гостевая спальня или кабинет и три спальни на втором этаже.",
    values: [
      "Монолитный каркас с блочным заполнением; выполнена внутренняя черновая планировка.",
      "Газ, вода и 15 кВт электричества подключены.",
      "Окружение зелени, вид на горы, рядом море и Олимпийский парк.",
      "В пешей и транспортной доступности — магазины, ПВЗ, школа и детский сад."
    ],
    specs: ["138 м²", "участок 5,65 сот., ИЖС", "4 спальни/сценария", "16 млн ₽"]
  },
  {
    id: "object-9",
    title: "Участок в Липниках",
    district: "Липники",
    type: "Участок",
    status: "Готов к продаже",
    price: 11.5,
    area: null,
    land: "8,5 сот., ЛПХ",
    rooms: null,
    cover: "./assets/objects/object-9.jpg",
    location: "Адлерский район, Липники.",
    description: "Земельный участок с видом на море в окружении зелени. Есть небольшой уклон.",
    values: [
      "Площадь 8,5 сотки, статус ЛПХ.",
      "Плодовые деревья на участке.",
      "Удобный выезд в Адлер, к аэропорту и на Красную Поляну.",
      "Вид на море и природное окружение."
    ],
    specs: ["8,5 сот.", "ЛПХ", "вид на море", "11,5 млн ₽"]
  },
  {
    id: "object-10",
    title: "Участок на Золотом Гребешке",
    district: "Черешня",
    type: "Участок",
    status: "Готов к продаже",
    price: null,
    area: null,
    land: "5 сот.",
    rooms: null,
    cover: "./assets/objects/object-10.jpg",
    location: "с. Черешня, Золотой Гребешок, СНТ, бригада №10.",
    description: "Участок в зелёном, экологичном районе. Подключения к участку пока не выполнены; стоимость уточняется.",
    values: [
      "Площадь участка — 5 соток.",
      "В окружении зелень и вид на горы.",
      "Рядом море, Олимпийский парк, магазины, ПВЗ, школа и детский сад.",
      "Коммуникации и стоимость уточняются у специалиста."
    ],
    specs: ["5 сот.", "без подключений", "стоимость уточняется"]
  }
];

const catalogGrid = document.querySelector("#catalogGrid");
const filters = document.querySelector("#filters");
const houseDialog = document.querySelector("#houseDialog");
const houseDetails = document.querySelector("#houseDetails");
const quizDialog = document.querySelector("#quizDialog");
const quizTitle = document.querySelector("#quizTitle");
const quizObjectInput = document.querySelector("#quizForm [name='object']");
const cookieBanner = document.querySelector("#cookieBanner");
const toast = document.querySelector("#toast");
const menuBtn = document.querySelector(".menu-btn");

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[character]));
}

function formatPrice(price) {
  return price === null ? "Стоимость уточняется" : `от ${price} млн ₽`;
}

function eventTrack(name, payload = {}) {
  window.dataLayer.push({ event: name, ...payload });
  if (ANALYTICS_ID) console.info("Analytics event", name, payload);
}

async function sendLead(source, payload) {
  eventTrack(`${source}_submit`, {
    hasSelectedObject: Boolean(payload.object),
    interest: payload.interest || "",
    scenario: payload.scenario || ""
  });

  if (!CRM_ENDPOINT) {
    showToast("Приём заявок временно не подключён. Свяжитесь с нами по адресу sk123sochi@gmail.com.");
    return false;
  }

  try {
    const response = await fetch(CRM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source, payload, createdAt: new Date().toISOString() })
    });

    if (!response.ok) throw new Error(`CRM response: ${response.status}`);
    showToast("Заявка отправлена. Специалист SK123 свяжется с вами.");
    return true;
  } catch (error) {
    console.error(error);
    eventTrack(`${source}_error`);
    showToast("Не удалось отправить заявку. Пожалуйста, попробуйте ещё раз или напишите нам в мессенджер.");
    return false;
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("is-visible"), 5200);
}

function objectMedia(house, className = "house-media") {
  const label = `Открыть карточку объекта: ${escapeHtml(house.title)}`;

  if (!house.cover) {
    return `<button class="${className} house-media-button image-placeholder" data-house="${house.id}" type="button" aria-label="${label}"><span>Фото готовятся</span></button>`;
  }

  return `<button class="${className} house-media-button" data-house="${house.id}" type="button" aria-label="${label}"><img src="${house.cover}" alt="${escapeHtml(house.title)}" loading="lazy" decoding="async"></button>`;
}

function galleryMedia(house) {
  const count = galleryCounts[house.id] || 0;
  if (!count) return objectMedia(house, "detail-media");

  const images = Array.from({ length: count }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    const src = `./assets/objects/${house.id}/${number}.jpg`;
    const loading = index === 0 ? "eager" : "lazy";
    return `<img src="${src}" alt="${escapeHtml(house.title)} — фото ${index + 1}" loading="${loading}" decoding="async">`;
  }).join("");

  return `<div class="detail-gallery" aria-label="Фотогалерея объекта ${escapeHtml(house.title)}">${images}</div>`;
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
      ${objectMedia(house)}
      <div class="house-content">
        <div class="house-meta">
          <span class="${house.status === "Продано" ? "is-sold" : ""}">${escapeHtml(house.status)}</span>
          <span>${escapeHtml(house.district)}</span>
          <span>${escapeHtml(house.type)}</span>
          ${house.area ? `<span>${house.area} м²</span>` : ""}
        </div>
        <h3>${escapeHtml(house.title)}</h3>
        <div class="house-price">${formatPrice(house.price)}</div>
        <p>${escapeHtml(house.description)}</p>
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
    const priceMatches = price === 999 || (house.price !== null && house.price <= price);
    const areaMatches = area === 0 || (house.area !== null && house.area >= area);
    const roomMatches = rooms === 0 || (house.rooms !== null && house.rooms >= rooms);

    return priceMatches && areaMatches && roomMatches &&
      (district === "all" || house.district === district) &&
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
      ${galleryMedia(house)}
      <div class="detail-copy">
        <p class="eyebrow">Карточка объекта</p>
        <h2 id="dialogTitle">${escapeHtml(house.title)}</h2>
        <div class="detail-meta">
          <span class="${house.status === "Продано" ? "is-sold" : ""}">${escapeHtml(house.status)}</span>
          <span>${escapeHtml(house.district)}</span>
          <span>${escapeHtml(house.type)}</span>
          ${house.area ? `<span>${house.area} м²</span>` : ""}
          ${house.land ? `<span>${escapeHtml(house.land)}</span>` : ""}
        </div>
        <p>${escapeHtml(house.description)}</p>
        <h3>Ключевые особенности</h3>
        <ul class="value-list">${house.values.map((value) => `<li>${escapeHtml(value)}</li>`).join("")}</ul>
        <h3>Параметры</h3>
        <ul class="detail-list">${house.specs.map((spec) => `<li>${escapeHtml(spec)}</li>`).join("")}</ul>
        <h3>Расположение</h3>
        <p>${escapeHtml(house.location)}</p>
        <div class="house-actions">
          <button class="secondary-btn" data-contact="telegram" type="button">Задать вопрос</button>
          <button class="primary-btn" data-request="${house.id}" type="button">Получить детали</button>
        </div>
      </div>
    </div>
  `;

  houseDialog.showModal();
  eventTrack("house_open", { id: house.id, title: house.title });
}

function openQuiz(houseId = "") {
  const house = houses.find((item) => item.id === houseId);
  quizObjectInput.value = house ? house.title : "";
  quizTitle.textContent = house ? `Узнать детали: ${house.title}` : "Подберем понятный вариант";
  quizDialog.showModal();
  eventTrack("quiz_open", { houseId });
}

function bindQuizButtons() {
  document.querySelectorAll("[data-open-quiz]").forEach((button) => {
    button.addEventListener("click", () => openQuiz());
  });
}

function handleContact(channel) {
  const map = { whatsapp: WHATSAPP_CONTACT, telegram: TELEGRAM_CONTACT };

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
      if (houseDialog.open) houseDialog.close();
      openQuiz(requestButton.dataset.request);
    }
    if (contactButton) handleContact(contactButton.dataset.contact);
    if (closeButton) closeButton.closest("dialog")?.close();
  });
}

function initDialogs() {
  [houseDialog, quizDialog].forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target !== dialog) return;

      const bounds = dialog.getBoundingClientRect();
      const clickedOutside = event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom;

      if (clickedOutside) dialog.close();
    });
  });
}

function bindForms() {
  document.querySelector("#leadForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    payload.privacyConsent = true;

    if (await sendLead("lead", payload)) form.reset();
  });

  document.querySelector("#quizForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    payload.privacyConsent = true;

    if (await sendLead("quiz", payload)) {
      form.reset();
      quizDialog.close();
    }
  });
}

function initCookieBanner() {
  try {
    if (!localStorage.getItem("sk123-cookie-consent")) cookieBanner.hidden = false;
  } catch (error) {
    cookieBanner.hidden = false;
  }

  cookieBanner.querySelectorAll("[data-cookie-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      const choice = button.dataset.cookieChoice;
      try { localStorage.setItem("sk123-cookie-consent", choice); } catch (error) { /* storage is unavailable */ }
      cookieBanner.hidden = true;
      eventTrack("cookie_consent", { choice });
    });
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
  if (location.hash.startsWith("#house-")) openHouse(location.hash.replace("#house-", ""));
}

filters.addEventListener("change", applyFilters);
renderCatalog();
bindQuizButtons();
bindGlobalClicks();
initDialogs();
bindForms();
initCookieBanner();
initReveal();
initMenu();
initHashRoutes();
