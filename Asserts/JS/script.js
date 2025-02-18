function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
const img = document.querySelector(".home-img img");

img.addEventListener("touchstart", () => {
    img.style.animation = "none"; // Reset animation
    setTimeout(() => {
        img.style.animation = "floatImage 4s ease-in-out infinite"; // Restart animation
    }, 10); // Restart animation
});
