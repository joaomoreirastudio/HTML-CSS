document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".navbar__menu");

    hamburger.addEventListener("click", function () {
        const expanded = this.getAttribute("aria-expanded") === "true" || false;
        this.setAttribute("aria-expanded", !expanded);
        menu.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(
        ".first__deliveries_carrousel__container .carousel__image"
    );
    let currentIndex = 0;

    function nextSlide() {
        // Remove the current class from the current image
        slides[currentIndex].style.transform = "translateX(-100%)";
        currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first image
        slides[currentIndex].style.transform = "translateX(0)";
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});
