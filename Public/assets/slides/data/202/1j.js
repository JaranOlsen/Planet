  (function() {
  const primalWordList = [
    ['fear', 7],
    ['rage', 6],
    ['lust', 6],
    ['hunger', 5],
    ['thirst', 5],
    ['pain', 5],
    ['pleasure', 5],
    ['disgust', 4],
    ['anxiety', 4],
    ['panic', 3],
    ['startle', 3],
    ['aggression', 3],
    ['desire', 3],
    ['fight', 2],
    ['flight', 2],
    ['survival', 2],
    ['instinct', 2],
    ['shock', 2]
  ];

  window.addEventListener('slideLoaded', generatePrimalWordCloud);

  function generatePrimalWordCloud() {
  let canvas = document.getElementById('wordcloud');
  if (canvas) {
    WordCloud(canvas, { 
      list: primalWordList,
      gridSize: 8,
      weightFactor: 16,
      fontFamily: 'Helvetica, sans-serif',
      color: 'random-light',
      rotateRatio: 0.1,
      minRotation: -0.75,
      maxRotation: 0.75,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      drawOutOfBound: false,
    });
    }
  }
})();