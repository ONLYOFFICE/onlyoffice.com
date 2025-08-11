export const smoothScrollTo = (targetY: number, duration = 300): void => {
  const startY = window.scrollY || document.documentElement.scrollTop;
  const diff = targetY - startY;
  if (diff === 0) return;

  const startTime = performance.now();

  const easeInOutQuad = (t: number): number =>
    t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  const step = (currentTime: number): void => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutQuad(progress);
    window.scrollTo(0, startY + diff * easedProgress);
    if (elapsed < duration) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};
