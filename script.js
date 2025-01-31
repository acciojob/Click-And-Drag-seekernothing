const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    // Calculate the starting X position relative to the viewport
    startX = e.clientX - slider.offsetLeft;
    // Store the current scroll position
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;  // Stop if mouse is not down
    e.preventDefault();
    
    // Calculate the current X position
    const x = e.clientX - slider.offsetLeft;
    // Calculate the distance moved (multiply for faster scrolling)
    const walk = (x - startX) * 3;
    // Update the scroll position
    slider.scrollLeft = scrollLeft - walk;
});