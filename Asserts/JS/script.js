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
document.addEventListener("DOMContentLoaded", function() {
    const words = ["Front-end Developer", "Public Speaker", "Bibliophile", "Techie"];
    let wordIndex = 0;
    let charIndex = 0;
    let typingSpeed = 150;
    let deletingSpeed = 100;
    let delayBetweenWords = 1000;
    let isDeleting = false;

    const typingElement = document.querySelector(".wrapper");

    function typeEffect() {
        let currentWord = words[wordIndex];
        let displayText = isDeleting
            ? currentWord.substring(0, charIndex--)
            : currentWord.substring(0, charIndex++);

        typingElement.innerHTML = displayText;

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, delayBetweenWords);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
    }

    typeEffect();
});
