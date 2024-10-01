class Carousel {
    constructor(images, containerSelector) {
        this.images = images; // Array of image URLs
        this.carouselContainer = document.querySelector(containerSelector);
        this.carouselSlide = this.carouselContainer.querySelector('.carousel-slide');
        this.prevBtn = this.carouselContainer.querySelector('#prevBtn');
        this.nextBtn = this.carouselContainer.querySelector('#nextBtn');
        this.counter = 1;
        this.size = 0; // Will be set dynamically

        this.setup();
    }

    setup() {
        this.createSlide();
        this.size = this.carouselSlide.children[0].clientWidth;

        this.carouselSlide.style.transform = `translateX(${-this.size * this.counter}px)`;
        this.nextBtn.addEventListener('click', () => this.next());
        this.prevBtn.addEventListener('click', () => this.prev());

        this.carouselSlide.addEventListener('transitionend', () => this.transitionEnd());
    }

    createSlide() {
        this.images.forEach(image => {
            const img = document.createElement('img');
            img.src = image;
            img.classList.add('carousel-images');
            this.carouselSlide.appendChild(img);
        });

        // Clone first and last image for infinite loop effect
        const firstClone = this.carouselSlide.children[0].cloneNode(true);
        const lastClone = this.carouselSlide.children[this.images.length - 1].cloneNode(true);

        this.carouselSlide.insertBefore(lastClone, this.carouselSlide.children[0]);
        this.carouselSlide.appendChild(firstClone);

        this.carouselSlide.style.transition = "none";
        this.carouselSlide.style.transform = `translateX(${-this.size}px)`;
    }

    next() {
        if (this.counter >= this.images.length + 1) return;
        this.carouselSlide.style.transition = "transform 0.4s ease-in-out";
        this.counter++;
        this.carouselSlide.style.transform = `translateX(${-this.size * this.counter}px)`;
    }

    prev() {
        if (this.counter <= 0) return;
        this.carouselSlide.style.transition = "transform 0.4s ease-in-out";
        this.counter--;
        this.carouselSlide.style.transform = `translateX(${-this.size * this.counter}px)`;
    }

    transitionEnd() {
        if (this.counter === 0) {
            this.carouselSlide.style.transition = "none";
            this.counter = this.images.length;
            this.carouselSlide.style.transform = `translateX(${-this.size * this.counter}px)`;
        }
        if (this.counter === this.images.length + 1) {
            this.carouselSlide.style.transition = "none";
            this.counter = 1;
            this.carouselSlide.style.transform = `translateX(${-this.size * this.counter}px)`;
        }
    }
}

// Use to export the carousel
export default Carousel;


// Usage example
// document.addEventListener('DOMContentLoaded', function() {
//     const images = [
//         'https://via.placeholder.com/600x400?text=Image+1',
//         'https://via.placeholder.com/600x400?text=Image+2',
//         'https://via.placeholder.com/600x400?text=Image+3',
//         'https://via.placeholder.com/600x400?text=Image+4'
//     ];

//     const carousel = new Carousel(images, '.carousel-container');
// });
