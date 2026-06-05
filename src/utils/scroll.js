/**
 * Silky-smooth custom scroll animation with ease-out-expo or cubic bezier style easing.
 * Avoids browser's native rigid/linear smooth scroll and provides a luxury interactive feel.
 * 
 * @param {string|HTMLElement} target - Element ID or HTMLElement to scroll to
 * @param {number} duration - Scroll duration in ms (default: 1200ms)
 * @param {number} offset - Vertical offset adjustment (e.g. for fixed header height, default: 0)
 */
export const smoothScrollTo = (target, duration = 1200, offset = 0) => {
  const element = typeof target === 'string' ? document.getElementById(target) : target;
  if (!element) return;

  // Calculate the target absolute position on the page relative to the document body
  let targetPosition = 0;
  let currentElement = element;
  while (currentElement) {
    targetPosition += currentElement.offsetTop;
    currentElement = currentElement.offsetParent;
  }
  
  // Apply offset adjustment
  targetPosition = Math.max(0, targetPosition - offset);

  const startPosition = window.pageYOffset || window.scrollY;
  const distance = targetPosition - startPosition;
  if (Math.abs(distance) < 2) return; // Already there

  let startTime = null;

  // Premium Quintic Ease Out Easing function (extremely smooth start, very gentle deceleration)
  const easeOutQuint = (t) => {
    return 1 - Math.pow(1 - t, 5);
  };

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    const easeProgress = easeOutQuint(progress);
    const scrollPosition = startPosition + distance * easeProgress;

    window.scrollTo(0, scrollPosition);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};
