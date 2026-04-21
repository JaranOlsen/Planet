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
      color: organicEarthy,
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

// Earthy, muted range (ochre → moss → sage → teal)
const organicEarthy = (word, weight) => {
  const hues = [25, 35, 45, 95, 120, 160]; // ochre, sand, olive, moss, sage, teal
  const hue = hues[Math.abs(hash(word)) % hues.length];
  const sat = 28 + (Math.abs(hash(word + 's')) % 12); // 28–40% (muted)
  const baseL = 52 + (Math.abs(hash(word + 'l')) % 10); // 52–62%
  const light = Math.max(32, baseL - Math.min(weight * 2, 16)); // darker for heavier
  return `hsl(${hue}deg ${sat}% ${light}%)`;
};

const forest = (word, weight) => {
  const h = Math.abs(hash(word));
  const hue = 100 + (h % 50); // 100–150
  const sat = 24 + ((h >> 3) % 16); // 24–40%
  const baseL = 44 + ((h >> 5) % 18); // 44–62%
  const light = Math.max(28, Math.min(70, baseL - Math.min(weight, 10)));
  return `hsl(${hue}deg ${sat}% ${light}%)`;
};

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
