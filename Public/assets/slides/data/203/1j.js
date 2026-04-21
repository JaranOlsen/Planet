(function() {
  const socialWordList = [
    ['shame', 7],
    ['guilt', 6],
    ['pride', 6],
    ['compassion', 5],
    ['empathy', 5],
    ['love', 5],
    ['grief', 5],
    ['belonging', 4],
    ['honor', 4],
    ['loyalty', 4],
    ['affection', 3],
    ['trust', 3],
    ['friendship', 3],
    ['humility', 3],
    ['resentment', 3],
    ['envy', 2],
    ['gratitude', 2],
    ['forgiveness', 2],
    ['admiration', 2],
    ['jealousy', 2],
    ['connection', 2],
    ['bond', 2]
  ];

  window.addEventListener('slideLoaded', generateSocialWordCloud);

  function generateSocialWordCloud() {
  let canvas = document.getElementById('wordcloud');
  if (canvas) {
    WordCloud(canvas, { 
      list: socialWordList,
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