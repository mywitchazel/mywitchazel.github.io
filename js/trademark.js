document.addEventListener("DOMContentLoaded", function () {
    const el = document.getElementById("trademark-year");
    if (!el) return;

    const startYear = 2025;
    const currentYear = new Date().getFullYear();

    el.textContent =
        startYear === currentYear
            ? currentYear
            : `${startYear} - ${currentYear}`;
});
