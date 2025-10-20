
if (!document.getElementById("hero-container")) {
  const heroContainer = document.createElement("div");
  heroContainer.id = "hero-container";


  const header = document.getElementById("header-container");
  header.insertAdjacentElement("afterend", heroContainer);
}


fetch("hero.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("hero-container").innerHTML = data;
  })
  .catch((error) => console.error("Error loading hero.html:", error));


const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "css/hero.css";
document.head.appendChild(link);
