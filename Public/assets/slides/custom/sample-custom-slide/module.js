window.addEventListener('slideLoaded', (event) => {
  const root = event.detail?.root?.querySelector?.('.custom-sample-slide');
  if (!root || root.dataset.customSampleReady === 'true') return;
  root.dataset.customSampleReady = 'true';
  let state = 0;
  root.querySelector('.custom-sample-slide__button')?.addEventListener('click', () => {
    state = state === 0 ? 1 : 0;
    root.dataset.state = String(state);
  });
});
