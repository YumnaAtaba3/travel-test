let translations = {};

async function loadTranslations() {
  try {
    const res = await fetch("js/translations.json");
    translations = await res.json();
  } catch (err) {
    console.error("Failed to load translations:", err);
  }
}

function translatePage(lang) {
  if (!translations[lang]) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) el.placeholder = translations[lang][key];
  });

  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  document.documentElement.setAttribute("lang", lang);
  localStorage.setItem("lang", lang);
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadTranslations();

  let currentLang = localStorage.getItem("lang") || "en";
  let currentTheme = localStorage.getItem("theme") || "light";

  translatePage(currentLang);
  applyTheme(currentTheme);

  new Swiper(".myTestimonials", {
    direction: "vertical",
    loop: true,
    slidesPerView: 1,
    autoplay: { delay: 3000, disableOnInteraction: false },
    navigation: { nextEl: ".custom-next", prevEl: ".custom-prev" },
    pagination: { el: ".testimonials .swiper-pagination", clickable: true },
  });

  const langBtn = document.getElementById("langToggle");
  const themeBtn = document.getElementById("themeToggle");

  if (langBtn) {
    langBtn.textContent = translations[currentLang]?.language || "EN";
    langBtn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "ar" : "en";
      translatePage(currentLang);
      langBtn.textContent = translations[currentLang].language;
    });
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      currentTheme = currentTheme === "light" ? "dark" : "light";
      applyTheme(currentTheme);
    });
  }
});
