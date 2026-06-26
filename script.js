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

// --- Contact Form Background Submission ---

const contactForm = document.querySelector('.contact-form form');
const submitBtn = document.querySelector('.submit-btn');

contactForm.addEventListener('submit', async function(e) {
    // 1. Stop the browser from redirecting to the Web3Forms page
    e.preventDefault(); 
    
    // 2. Change the button text to show the client it is working
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.style.cursor = 'wait';

    // 3. Send the data silently in the background
    const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(contactForm)
    });

    // 4. Handle the success
    if (response.ok) {
        contactForm.reset(); // This blanks out the form fields!
        submitBtn.textContent = 'Message Sent!';
        submitBtn.style.backgroundColor = '#00cfcf'; // Changes to your teal color
        submitBtn.style.color = '#000';
        
        // 5. Revert the button back to normal after 3 seconds
        setTimeout(() => {
            submitBtn.textContent = originalBtnText;
            submitBtn.style.backgroundColor = ''; 
            submitBtn.style.cursor = 'pointer';
        }, 3000);
    } else {
        submitBtn.textContent = 'Error. Please try again.';
        submitBtn.style.backgroundColor = '#ff4d4d'; // Red for error
    }
});