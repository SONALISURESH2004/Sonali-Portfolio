
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const mobileNav = document.getElementById('mobile-nav');

    hamburgerIcon.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
    });

  // Optional: Close nav on link click
    const navLinks = document.querySelectorAll('#mobile-nav a');
    navLinks.forEach(link => {
    link.addEventListener('click', () => {
    mobileNav.classList.remove('show');
    });
    })


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
    let isDeleting = false;document.addEventListener("DOMContentLoaded", function () {
        const hamburger = document.getElementById("hamburger-icon");
        const nav = document.getElementById("mobile-nav");
        const links = nav.querySelectorAll("a");
        // Toggle nav on click
        hamburger.addEventListener("click", () => {
            nav.classList.toggle("show");
        });
        // Hide menu on link click
        links.forEach(link => {
        link.addEventListener("click", () => {
            setTimeout(() => {
            nav.classList.remove("show");
            }, 150);
        });
        });
    });
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
