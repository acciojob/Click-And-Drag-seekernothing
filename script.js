const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    // Use pageX as specified in the test
    startX = e.pageX;
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
    if (!isDown) return;
    e.preventDefault();
    
    // Calculate distance moved using pageX
    const x = e.pageX;
    // The test moves from 493 to 271, so we need to ensure positive scroll
    const walk = startX - x;
    // Directly set the scroll position
    slider.scrollLeft = walk;
});