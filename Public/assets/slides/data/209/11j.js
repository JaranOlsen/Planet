(function registerWordcloudTemplate() {
  const words = [
    ['presence', 64],
    ['equanimity', 48],
    ['curiosity', 42],
    ['embodiment', 38],
    ['attention', 34],
    ['stillness', 32],
    ['resonance', 28],
    ['play', 26],
    ['mindmap', 24],
    ['gutta', 22],
    ['jaranius', 20],
    ['flux', 18],
    ['spiral', 18],
    ['enneagram', 16],
    ['nugget', 16],
    ['dev-mode', 14],
    ['sanctuary', 14],
    ['intro', 12],
    ['orbit', 12],
    ['flight', 12]
  ];

  function renderCloud() {
    const canvas = document.getElementById('template-wordcloud');
    if (!canvas || typeof WordCloud !== 'function') {
      return;
    }
    WordCloud(canvas, {
      list: words,
      backgroundColor: 'rgba(12, 18, 28, 0.0)',
      color: () => '#5ac8fa',
      rotateRatio: 0,
      classes: 'appear-visible',
      drawOutOfBound: false,
    });
  }

  window.addEventListener('slideLoaded', renderCloud);
})();
