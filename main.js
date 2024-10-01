import Carousel from "./js/slider.js";

document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "./images/firefox_icon.png",
        "./images/flameshot_icon_screen.png",
        "./images/myUbuntu_start_icon.png",
        "./images/test.png"
    ];

    const carousel = new Carousel(images, ".carousel-container");

    console.log(images);
});

