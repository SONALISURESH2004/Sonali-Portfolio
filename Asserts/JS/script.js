function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
const text = document.querySelector(".sec-text");
        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Front-end  Developer";
            },0);
            setTimeout(() => {
                text.textContent = "Public Speaker";
            },1000);
            setTimeout(() => {
                text.textContent = "Bibliophile";
            },3000);
            setTimeout(() => {
                text.textContent = "Techie";
            },5000);
        
        }
    
        textLoad();
        setInterval(textLoad, 7000);

    