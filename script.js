(() => {
  const root = document.documentElement;
  const storageKey = "resume-theme";

  const systemTheme = () =>
    "light";

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === "light" ? "#f4f7ff" : "#0b1226";
  };

  applyTheme(localStorage.getItem(storageKey) || systemTheme());

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const next = root.dataset.theme === "light" ? "dark" : "light";
      localStorage.setItem(storageKey, next);
      applyTheme(next);
    });
  });
})();
