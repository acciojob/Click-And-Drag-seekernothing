const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

// When mouse button is pressed down
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  // Get initial mouse position relative to the container
  startX = e.pageX - slider.offsetLeft;
  // Get current scroll position
  scrollLeft = slider.scrollLeft;
});

// When mouse leaves the container
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

// When mouse button is released
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

// When mouse is moved while button is pressed
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;  // stop if mouse button is not pressed
  e.preventDefault();  // prevent text selection
  
  // Calculate how far the mouse has moved
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // multiply by 2 for faster scrolling
  
  // Update scroll position
  slider.scrollLeft = scrollLeft - walk;
});

// Add touch support for mobile devices
slider.addEventListener('touchstart', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('touchend', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('touchmove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.touches[0].pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});