const wordList = [
    ['Samādhi', 7],
    ['peace', 6],
    ['stillness', 6],
    ['tranquility', 5],
    ['presence', 5],
    ['clarity', 5],
    ['concentration', 4],
    ['serenity', 4],
    ['unity', 4],
    ['focus', 4],
    ['absorption', 3],
    ['calm', 3],
    ['silence', 3],
    ['harmony', 2],
    ['flow', 2],
    ['bliss', 2],
    ['immersed', 2],
    ['balance', 2],
    ['equanimity', 2],
    ['release', 2],
    ['comfort', 2],
    ['solitude', 2],
    ['centered', 2],
    ['restful', 2],
    ['safe', 2],
    ['unburdened', 2],
    ['openness', 2],
    ['attuned', 2],
    ['soothing', 2],
    ['unruffled', 2]
]

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
