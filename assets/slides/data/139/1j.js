(function() {
  const WisdomWordList = [
    ['Pañña', 10],
    ['wisdom', 6],
    ['insight', 6],
    ['understanding', 6],
    ['discernment', 5],
    ['awareness', 5],
    ['intuition', 4],
    ['comprehension', 4],
    ['clarity', 4],
    ['knowledge', 3],
    ['intelligence', 3],
    ['realization', 2],
    ['perceptiveness', 2],
    ['mindfulness', 2],
    ['illumination', 2],
    ['recognition', 2],
    ['learning', 2],
    ['intelligibility', 2],
    ['sagacity', 2],
    ['acuity', 2],
    ['prudence', 2],
    ['foresight', 2],
    ['penetration', 2],
    ['perspicacity', 2],
    ['acumen', 2],
  ];


  window.addEventListener('slideLoaded', generateWordCloud);

  function generateWordCloud() {
    let canvas = document.getElementById('wordcloud');
    if (canvas) {
      WordCloud(canvas, { 
        list: WisdomWordList,
        gridSize: 8,
        weightFactor: 16,
        fontFamily: 'Helvetica, sans-serif',
        color: mutedPalette,
        rotateRatio: 0.1,
        minRotation: -0.75,
        maxRotation: 0.75,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        drawOutOfBound: false,
      });
    }
  }

  // Deterministic tiny hash
  const hash = (s) => [...s].reduce((h,ch)=>((h<<5)-h+ch.charCodeAt(0))|0,0);

  const PALETTE_MUTED = [
    '#5a6f45', // olive
    '#6c8a6e', // moss
    '#a3b18a', // sage
    '#708d81', // muted teal
    '#a68a64', // sand
    '#b08968', // clay
    '#7f5539', // bark
    '#8f7a66', // soil
    '#ccd5ae', // light sage
  ];
  const mutedPalette = (word) => PALETTE_MUTED[Math.abs(hash(word)) % PALETTE_MUTED.length];
})();