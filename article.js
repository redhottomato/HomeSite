import Carousel from "./js/slider.js";

document.addEventListener('DOMContentLoaded', function() {
// Fetch the JSON file
fetch('art.json')
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
    // Access the article data
    const article = data.article;

    // Set the header and date
    document.getElementById('article-header').innerText = article.header;
    document.getElementById('article-date').innerText = article.date;

    // Generate the content
    const contentContainer = document.getElementById('article-content');
    article.sections.forEach(section => {
        const sectionTitle = document.createElement('h2');
        sectionTitle.innerText = section.title;
        contentContainer.appendChild(sectionTitle);

        const sectionContent = document.createElement('div');
        sectionContent.innerHTML = section.content;
        contentContainer.appendChild(sectionContent);
    });

    // Set social media links
    document.getElementById('twitter-link').href = article.socialMediaLinks.twitter;
    document.getElementById('instagram-link').href = article.socialMediaLinks.instagram;
    document.getElementById('youtube-link').href = article.socialMediaLinks.youtube;


    const imageUrls = [];
    // Add images to the page
    const imagesContainer = document.getElementById('article-images');
    
    console.log(article.images);

    article.images.forEach(image => {
        imageUrls.push(image.url);
    })
    console.log(imageUrls);

    const carousel = new Carousel(imageUrls, ".carousel-container");

    })
    .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
    });
    //const carousel = new Carousel(imageUrls, ".carousel-container");
});