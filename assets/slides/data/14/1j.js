const wordList = [
  ['Sīla', 7],
  ['virtue', 6],
  ['morality', 6],
  ['goodness', 6],
  ['ethics', 5],
  ['righteousness', 5],
  ['generosity', 5],
  ['integrity', 5],
  ['character', 5],
  ['honesty', 4],
  ['decency', 4],
  ['discipline', 4],
  ['empathy', 4],
  ['compassion', 4],
  ['friendliness', 4],
  ['dignity', 3],
  ['warmth', 3],
  ['respect', 3],
  ['tolerance', 3],
  ['trustworthiness', 3],
  ['principle', 2],
  ['nobility', 2],
  ['propriety', 2],
  ['honor', 2],
  ['conscience', 2],
  ['faithfulness', 2],
  ['restraint', 2],
  ['duty', 2],
  ['loyalty', 2],
  ['justice', 2],
  ['uprightness', 2],
  ['scruples', 2],
  ['equity', 2],
  ['fairness', 2],
  ['modesty', 2],
  ['incorruptibility', 2],
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
