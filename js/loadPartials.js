document.addEventListener("DOMContentLoaded", () => {
  const partials = [
    { id: "header-container", file: "header.html" },
    { id: "destinations-container", file: "destinations.html" },
    { id: "booking-container", file: "booking.html" },
    { id: "testimonials-container", file: "testimonials.html" },
    { id: "airlines-container", file: "airlines.html" },
    { id: "subscribe-container", file: "subscribe.html" },
    { id: "footer-container", file: "footer.html" },
  ];

  // Load all partials asynchronously
  const loadPromises = partials.map((partial) => {
    const el = document.getElementById(partial.id);
    if (!el) return Promise.resolve();

    return fetch(`partials/${partial.file}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load ${partial.file}`);
        return res.text();
      })
      .then((html) => (el.innerHTML = html));
  });

  // After all partials are loaded
  Promise.all(loadPromises)
    .then(() => {
      let currentLang = "en";
      translatePage(currentLang);

      // Add toggle listener **after header is loaded**
      const langBtn = document.getElementById("langToggle");
      if (langBtn) {
        langBtn.addEventListener("click", () => {
          currentLang = currentLang === "en" ? "ar" : "en";
          translatePage(currentLang);
          langBtn.textContent = translations[currentLang].language;
        });
      }
    })
    .catch((err) => console.error(err));
});
