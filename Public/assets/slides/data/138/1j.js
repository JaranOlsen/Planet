(function() {  
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
        color: forest,
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

  const forest = (word, weight) => {
    const h = Math.abs(hash(word));
    const hue = 100 + (h % 50); // 100–150
    const sat = 24 + ((h >> 3) % 16); // 24–40%
    const baseL = 44 + ((h >> 5) % 18); // 44–62%
    const light = Math.max(28, Math.min(70, baseL - Math.min(weight, 10)));
    return `hsl(${hue}deg ${sat}% ${light}%)`;
  };
})();