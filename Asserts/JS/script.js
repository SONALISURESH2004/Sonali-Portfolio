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

    const videoElement = document.createElement('video');
    videoElement.setAttribute('autoplay', true);
    videoElement.setAttribute('loop', true);
    videoElement.setAttribute('muted', true);
    videoElement.setAttribute('playsinline', true);

    // Add the source for the video
    const sourceElement = document.createElement('source');
    sourceElement.setAttribute('src', 'Animation - Compressed.webm'); // Update with your file path
    sourceElement.setAttribute('type', 'video/webm');

    // Append source to video
    videoElement.appendChild(sourceElement);

    // Append video to container
    videoBackground.appendChild(videoElement);

    // Add the video container to the body
    document.body.prepend(videoBackground);
