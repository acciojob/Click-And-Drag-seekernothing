// Your code here.
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

// Mouse Down Event
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    // Get initial mouse position
    startX = e.pageX - slider.offsetLeft;
    // Get current scroll position
    scrollLeft = slider.scrollLeft;
});

// Mouse Leave Event
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

// Mouse Up Event
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

// Mouse Move Event
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; // stop the function if mouse is not pressed
    e.preventDefault(); // prevent text selection while dragging
    
    // Calculate current mouse position
    const x = e.pageX - slider.offsetLeft;
    // Calculate distance moved
    const walk = (x - startX) * 2; // multiply by 2 for faster scrolling
    // Update scroll position
    slider.scrollLeft = scrollLeft - walk;
});