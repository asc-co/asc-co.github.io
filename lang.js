function setLanguage(lang) {
  fetch(lang + '.json')
    .then(response => response.json())
    .then(data => {
      document.querySelectorAll("[data-lang]").forEach(el => {
        let key = el.getAttribute("data-lang");
        el.textContent = data[key];
      });

  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

      // Save the selected language in local storage
      localStorage.setItem("language", lang);
    });
}

// AUTO LOAD LANGUAGE WHEN PAGE OPENS
document.addEventListener("DOMContentLoaded", () => {
  let saved = localStorage.getItem("language");

  // ✅ CHANGE DEFAULT LANGUAGE HERE
  let defaultLang = "en"; // change to "ar" if you want Arabic to be default

  setLanguage(saved || defaultLang);
});
