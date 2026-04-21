window.addEventListener('slideLoaded', () => {
    const image = document.getElementById('moving-image');
    const container = document.getElementById('slide-content');
  
    // Get starting position (should be at top-left corner)
    const startX = 10; // Initial left offset
    const startY = 10; // Initial top offset
  
    // Calculate ending position (bottom-right corner)
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
  
    const imageWidth = image.offsetWidth;
    const imageHeight = image.offsetHeight;
  
    const endX = containerWidth - imageWidth - 10; // 10px right offset
    const endY = containerHeight - imageHeight - 10; // 10px bottom offset
  
    // Set initial position
    image.style.left = `${startX}px`;
    image.style.top = `${startY}px`;
  
    // Set up transition
    image.style.transition = 'left 1s ease-in-out, top 1s ease-in-out';
    image.style.transitionDelay = '0.15s';
  
    // Force reflow to ensure the browser registers the starting position
    image.getBoundingClientRect();
  
    // Start animation
    requestAnimationFrame(() => {
      image.style.left = `${endX}px`;
      image.style.top = `${endY}px`;
    });
  });