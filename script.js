// Grab the modal elements from the DOM
const modal = document.getElementById("lightbox-modal");
const modalImg = document.getElementById("lightbox-img");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close-modal");

// Grab all the portfolio grid items
const gridItems = document.querySelectorAll(".grid-item");

// Loop through each grid item and attach a click listener
gridItems.forEach(item => {
    item.addEventListener("click", () => {
        // Find the image and overlay text within the clicked item
        const img = item.querySelector("img");
        const overlay = item.querySelector(".overlay");
        
        // Change modal display from 'none' to 'flex' and inject content
        modal.style.display = "flex";
        modalImg.src = img.src;
        captionText.innerHTML = overlay.innerHTML;
    });
});

// Close modal when clicking the X button
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking anywhere on the dark background
modal.addEventListener("click", (e) => {
    if (e.target !== modalImg) {
        modal.style.display = "none";
    }
});