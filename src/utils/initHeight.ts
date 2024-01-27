function initVh() {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}

export function initHeight() {
  initVh();

  window.addEventListener('resize', () => {
    initVh();
  });
}
