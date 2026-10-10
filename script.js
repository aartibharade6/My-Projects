
const themeButton = document.querySelector(".theme-toggle");

const savedTheme = localStorage.getItem("portfolio-theme") || "light";

document.documentElement.dataset.theme = savedTheme;

function updateThemeButton() {
    if (!themeButton) return;

    const isDark =
        document.documentElement.dataset.theme === "dark";

    themeButton.textContent = isDark ? "Light Mode" : "Dark Mode";

    themeButton.setAttribute("aria-pressed", String(isDark));

    themeButton.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );
}

updateThemeButton();

if (themeButton) {
    themeButton.addEventListener("click", function () {
        const currentTheme =
            document.documentElement.dataset.theme;

        const newTheme =
            currentTheme === "dark" ? "light" : "dark";

        document.documentElement.dataset.theme = newTheme;

        localStorage.setItem("portfolio-theme", newTheme);

        updateThemeButton();
    });
}
