(function() { 
 const existentialWordList = [
    ['awe', 7],
    ['wonder', 6],
    ['existential dread', 6],
    ['curiosity', 5],
    ['boredom', 5],
    ['purpose', 4],
    ['meaning', 4],
    ['transcendence', 4],
    ['futility', 4],
    ['hope', 3],
    ['despair', 3],
    ['contemplation', 3],
    ['absurdity', 3],
    ['insight', 3],
    ['mortality', 2],
    ['emptiness', 2],
    ['self-awareness', 2],
    ['freedom', 2],
    ['insignificance', 2],
    ['realization', 2],
    ['fulfillment', 2],
  ];

  window.addEventListener('slideLoaded', generateExistentialWordCloud);

  function generateExistentialWordCloud() {
  let canvas = document.getElementById('wordcloud');
  if (canvas) {
    WordCloud(canvas, { 
      list: existentialWordList,
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