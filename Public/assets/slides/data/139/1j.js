const wordList = [
  ['Pañña', 7],
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
      list: wordList,
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
