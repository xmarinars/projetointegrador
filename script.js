document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  requestAnimationFrame(() => body.classList.add("loaded"));

  document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", (e) => {
      const url = link.getAttribute("href");

      if (window.location.pathname.endsWith(url)) return;

      e.preventDefault();
      body.classList.remove("loaded");

      setTimeout(() => {
        window.location.href = url;
      }, 400);
    });
  });
});
