/* SHOW MENU */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')
 
 
 
 
 
 // images slider
 
 const slider = document.querySelector('.slider');
 const slides = document.querySelectorAll('.slide');
 const prevButton = document.querySelector('.prev');
 const nextButton = document.querySelector('.next');
 const dots = document.querySelectorAll('.dot');
 
 let currentIndex = 0;
 
 function updateSliderPosition() {
     slider.style.transform = `translateX(-${currentIndex * 100}%)`;
     updateActiveDot();
 }
 
 function updateActiveDot() {
     dots.forEach((dot, index) => {
         dot.classList.toggle('active', index === currentIndex);
     });
 }
 
 nextButton.addEventListener('click', () => {
     currentIndex = (currentIndex + 1) % slides.length;
     updateSliderPosition();
 });
 
 prevButton.addEventListener('click', () => {
     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
     updateSliderPosition();
 });
 
 dots.forEach((dot, index) => {
     dot.addEventListener('click', () => {
         currentIndex = index;
         updateSliderPosition();
     });
 });

 // toggle the nested list of countries' flights

 function toggleFlights(destinationId) {
    const flightOptions = document.getElementById(destinationId);
    flightOptions.classList.toggle('show'); // Toggle the 'show' class for smooth transition

    const arrow = headerElement.querySelector('.arrow');
    arrow.classList.toggle('rotate');
}