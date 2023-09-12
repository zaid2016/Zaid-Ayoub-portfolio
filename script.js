 // Select all the img elements within #slider and store them in the variable "images"
 const images = document.querySelectorAll('#slider img');
  
 // This variable keeps track of the currently displayed image
 let currentIndex = 0;

 // The "reset" function removes the "active" class from all images
 // The "active" class is what makes an image visible, so this effectively hides all images
 function reset() {
   for (let i = 0; i < images.length; i++) {
     images[i].classList.remove('active');
   }
 }

 // The "initializeSlider" function first hides all images using the "reset" function, 
 // and then shows the current image by adding the "active" class to it
 function initializeSlider() {
   reset();
   images[currentIndex].classList.add('active');
 }

 // The "slideLeft" function hides all images, then decreases the currentIndex by 1 (showing the previous image)
 // If currentIndex goes below 0, it wraps around to the end of the images array
 // Finally, it shows the new current image
 function slideLeft() {
   reset();
   currentIndex--;
   if (currentIndex < 0) {
     currentIndex = images.length - 1;
   }
   images[currentIndex].classList.add('active');
 }

 // The "slideRight" function hides all images, then increases the currentIndex by 1 (showing the next image)
 // If currentIndex goes past the end of the images array, it wraps around to 0
 // Finally, it shows the new current image
 function slideRight() {
   reset();
   currentIndex++;
   if (currentIndex >= images.length) {
     currentIndex = 0;
   }
   images[currentIndex].classList.add('active');
 }

 // When the page first loads, initialize the slider by showing the current image (which is the first image at this point)
 initializeSlider();

 // When the #prev button is clicked, show the previous image
 document.querySelector('#prev').addEventListener('click', function() {
   slideLeft();
 });

 // When the #next button is clicked, show the next image
 document.querySelector('#next').addEventListener('click', function() {
   slideRight();
 });

 // Slid and Fade in on Scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".animated")[0].classList.add("fadeInLeft");
        }
    })
})