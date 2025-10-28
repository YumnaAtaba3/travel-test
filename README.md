
---

# 🌍 Travel Landing Page

A modern, responsive **travel landing page** built using **HTML5**, **Bootstrap 5**, and **Swiper.js**, featuring **multi-language support**, **light/dark themes**, and **interactive testimonials**.

---

## 🚀 Features

* ✈️ **Beautiful Travel Design** — Responsive layout optimized for all devices.
* 🌐 **Multi-Language Support** — English & Arabic translations using `translations.json`.
* 🌓 **Light / Dark Theme Toggle** — Theme saved in `localStorage`.
* 💬 **Interactive Testimonials** — Vertical Swiper slider with autoplay and navigation.
* 🧭 **Bootstrap 5.3 Components** — Responsive header, mobile menu (offcanvas), and buttons.
* 📱 **Subscribe Section** — Email input with custom placeholder translation.
* 🧩 **Structured Components** — Organized sections: Header, Hero, Categories, Booking, Testimonials, Footer.

---

## 🧠 Project Structure

```
Travel-Landing/
│
├── index.html
│
├── css/
│   ├── header.css
│   ├── hero.css
│   ├── main.css
│   ├── booking.css
│   ├── testimonials.css
│   └── footer.css
│
├── js/
│   ├── script.js
│   └── translations.json
│
├── assets/
│   ├── header/
│   ├── category/
│   ├── top-selling/
│   ├── booking/
│   ├── testimonials/
│   ├── airlineComp/
│   └── footer/
│
└── README.md
```

---

## ⚙️ How It Works

### 🈶 1. Language Toggle

* Controlled by the **“EN”** button (`id="langToggle"`).
* Translations are loaded from `js/translations.json`.
* All text elements with `data-i18n` or placeholders with `data-i18n-placeholder` are replaced dynamically.
* RTL layout is automatically applied for Arabic.

```js
translatePage(lang);
```

Stores preference:

```js
localStorage.setItem("lang", lang);
```

---

### 🌗 2. Theme Toggle

* Controlled by the **moon/sun** icon (`id="themeToggle"`).
* Toggles between `light` and `dark` modes using a `data-theme` attribute on `<html>`.
* Saves user preference in `localStorage`.

```js
applyTheme(theme);
```

---

### 💬 3. Testimonials Slider

Implemented using **Swiper.js**:

```js
new Swiper(".myTestimonials", {
  direction: "vertical",
  loop: true,
  autoplay: { delay: 3000 },
  navigation: { nextEl: ".custom-next", prevEl: ".custom-prev" },
  pagination: { el: ".testimonials .swiper-pagination", clickable: true },
});
```

---

## 🧩 Setup & Usage

### 🔧 1. Clone the Repository

```bash
git clone https://github.com/YumnaAtaba3/travel-landing.git
cd travel-landing
```

### 🌍 2. Run Locally

Open `index.html` in your browser directly, or use a local server:

```bash
# Using VSCode Live Server extension
Right-click index.html → “Open with Live Server”
```

or with Node.js:

```bash
npx serve
```

Then visit [http://localhost:3000](http://localhost:3000).

---

### 🗺️ 3. Add Translations

Edit `js/translations.json`:

```json
{
  "en": {
    "title": "Travel Landing",
    "language": "EN",
    "heroSubtitle": "Best destinations around the world"
  },
  "ar": {
    "title": "صفحة السفر",
    "language": "AR",
    "heroSubtitle": "أفضل الوجهات حول العالم"
  }
}
```

---

### 💡 4. Customizing Styles

All section-specific styles are in `/css/`:

* `header.css` → navigation & logo
* `hero.css` → hero image & intro text
* `booking.css` → 3-step booking section
* `testimonials.css` → reviews carousel
* `footer.css` → footer links & icons

You can add a theme switch by styling:

```css
:root[data-theme="dark"] {
  --bg-color: #121212;
  --text-color: #f8f9fa;
}
```

---

## 🧰 Dependencies

| Library / Framework                                | Purpose                                  |
| -------------------------------------------------- | ---------------------------------------- |
| [Bootstrap 5.3](https://getbootstrap.com/)         | Responsive grid, buttons, offcanvas menu |
| [Bootstrap Icons](https://icons.getbootstrap.com/) | Icons for UI                             |
| [Swiper.js](https://swiperjs.com/)                 | Testimonials slider                      |
| [JavaScript (ES6+)]                                | Language, theme, and Swiper logic        |

---

## 📦 Local Storage Keys

| Key     | Description                               |
| ------- | ----------------------------------------- |
| `lang`  | Stores selected language (`en` or `ar`)   |
| `theme` | Stores selected theme (`light` or `dark`) |

---

## 💻 Browser Support

✅ Chrome
✅ Firefox
✅ Edge
✅ Safari
✅ Opera

---

## 🧑‍💻 Yumna Ataba

**Jadoo Travel Landing Page**
Designed for modern travel platforms and tourism agencies.
Built with ❤️ using **HTML, CSS, Bootstrap, and JavaScript**.

---


