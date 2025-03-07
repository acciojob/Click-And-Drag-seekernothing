const container = document.querySelector('.items');
const items = document.querySelectorAll('.item');
let activeItem = null;
let startX, startY, initialX, initialY;

// Add drag handlers to all items
items.forEach(item => {
  item.addEventListener('mousedown', startDrag);
  item.addEventListener('touchstart', startDrag);
});

function startDrag(e) {
  activeItem = e.target;
  const rect = activeItem.getBoundingClientRect();
  
  // Get initial positions
  startX = (e.clientX || e.touches[0].clientX) - rect.left;
  startY = (e.clientY || e.touches[0].clientY) - rect.top;
  initialX = rect.left - container.offsetLeft;
  initialY = rect.top - container.offsetTop;

  // Add event listeners
  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', stopDrag);
  document.addEventListener('touchmove', drag);
  document.addEventListener('touchend', stopDrag);
}

function drag(e) {
  if (!activeItem) return;
  e.preventDefault();

  // Calculate new position
  const clientX = e.clientX || e.touches[0].clientX;
  const clientY = e.clientY || e.touches[0].clientY;
  
  let newX = clientX - container.offsetLeft - startX;
  let newY = clientY - container.offsetTop - startY;

  // Boundary constraints
  const containerRect = container.getBoundingClientRect();
  const itemRect = activeItem.getBoundingClientRect();
  
  newX = Math.max(0, Math.min(newX, containerRect.width - itemRect.width));
  newY = Math.max(0, Math.min(newY, containerRect.height - itemRect.height));

  // Apply movement
  activeItem.style.transform = `translate(${newX}px, ${newY}px)`;
}

function stopDrag() {
  if (!activeItem) return;
  
  // Update final position
  const transform = activeItem.style.transform;
  activeItem.style.left = transform.replace('translate', '').replace(/[()]/g, '');
  activeItem.style.transform = '';
  
  activeItem = null;
  
  // Remove listeners
  document.removeEventListener('mousemove', drag);
  document.removeEventListener('mouseup', stopDrag);
  document.removeEventListener('touchmove', drag);
  document.removeEventListener('touchend', stopDrag);
}