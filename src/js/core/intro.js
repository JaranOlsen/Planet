const introState = {
  started: false,
  tuneLength: undefined,
  audio: null,
  elapsedTime: 0,
};

export function animateLetterSpacing(elementId = 'silence', duration = 50000) {
  const element = document.getElementById(elementId);
  if (!element) {
    return;
  }

  let start = null;
  const initialSpacing = 4;
  const maxSpacing = 8;

  function step(timestamp) {
    if (start === null) start = timestamp;
    const progress = (timestamp - start) / duration;
    const easing = 1 - Math.pow(1 - progress, 3);
    const currentSpacing = Math.min(initialSpacing + easing * (maxSpacing - initialSpacing), maxSpacing);

    element.style.letterSpacing = `${currentSpacing}rem`;
    element.style.marginRight = `-${currentSpacing}rem`;

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      element.style.letterSpacing = `${maxSpacing}rem`;
      element.style.marginRight = `-${maxSpacing}rem`;
    }
  }

  window.requestAnimationFrame(step);
}

export function fadeOutAudio(audioElement, fadeDuration = 3000) {
  if (!audioElement) return;

  const originalVolume = audioElement.volume;
  const intervalSpeed = 50;
  const decrementAmount = (originalVolume / fadeDuration) * intervalSpeed;

  const fadeOut = setInterval(() => {
    if (audioElement.volume > decrementAmount) {
      audioElement.volume -= decrementAmount;
    } else {
      audioElement.volume = 0;
      audioElement.pause();
      audioElement.currentTime = 0;
      clearInterval(fadeOut);
    }
  }, intervalSpeed);
}

export function setupIntro({ orbitControls, camera, scene }) {
  const playButton = document.getElementById('playbutton');
  const skipButton = document.getElementById('skipbutton');
  const credits = document.getElementById('credits');
  const subtitleContainer = document.getElementById('subtitle-container');
  const introSelect = document.getElementById('intro-select');
  const audioElement = document.getElementById('introTune');
  const sourceElement = audioElement?.getElementsByTagName('source')[0];

  introState.audio = audioElement || null;

  const subtitleState = {
    subtitles: null,
    currentSubtitle: null,
  };

  let creditTextElement = null;
  if (credits) {
    creditTextElement = credits.querySelector('[data-intro-credit]');
    if (!creditTextElement) {
      creditTextElement = document.createElement('div');
      creditTextElement.id = 'intro-credit-text';
      creditTextElement.dataset.introCredit = 'true';
      creditTextElement.className = 'intro-credit-text';
      credits.appendChild(creditTextElement);
    }
  }

  const setCreditsText = (text) => {
    if (creditTextElement) {
      creditTextElement.textContent = text;
    }
  };

  async function loadSubtitles(subtitleFileName) {
    if (!subtitleFileName || subtitleFileName === 'false' || subtitleFileName === 'null') {
      subtitleState.subtitles = null;
      subtitleContainer.textContent = '';
      return;
    }

    try {
      const module = await import(`../data/subtitles/${subtitleFileName}.js`);
      subtitleState.subtitles = module.default;
    } catch (error) {
      console.error(`Failed to load subtitles: ${error}`);
      subtitleState.subtitles = null;
    }
  }

  function updateSubtitles() {
    if (!subtitleState.subtitles || !audioElement) return;

    const currentTime = audioElement.currentTime;
    const newSubtitle = subtitleState.subtitles.find(({ start, end }) => currentTime >= start && currentTime <= end);

    if (newSubtitle && newSubtitle !== subtitleState.currentSubtitle) {
      subtitleState.currentSubtitle = newSubtitle;
      subtitleContainer.textContent = newSubtitle.text;
    } else if (!newSubtitle) {
      subtitleContainer.textContent = '';
      subtitleState.currentSubtitle = null;
    }
  }

  function updateIntroSelection() {
    if (!audioElement || !sourceElement) return;

    const selection = introSelect?.value || 'welcome';

    let creditText = 'Welcome to my Planet - Jaran de los Santos Olsen';
    let audioSrc = '/Planet/assets/audio/candle.mp3';
    let subtitleFile = 'null';

    switch (selection) {
      case 'desiderata':
        creditText = 'Desiderata - Max Ehrmann. RedFrost Motivation';
        audioSrc = '/Planet/assets/audio/desiderata.mp3';
        break;
      case 'astronomer':
        creditText = "When I Heard the Learn'd Astronomer - Walt Whitman. RedFrost Motivation";
        audioSrc = '/Planet/assets/audio/astronomer.mp3';
        subtitleFile = 'astronomer';
        break;
      case 'carlrogers':
        creditText = "Carl Rogers speaking about listening and presence. Music: First Step - Hans Zimmer";
        audioSrc = '/Planet/assets/audio/carlrogers.mp3';
        subtitleFile = 'carlrogers';
        break;
      case 'carlrogers2':
        creditText = "Carl Rogers speaking about listening and presence. Music: This Is Me - Jaran de los Santos Olsen";
        audioSrc = '/Planet/assets/audio/carlrogers2.mp3';
        subtitleFile = 'carlrogers2';
        break;
      case 'alanwatts':
        creditText = "Alan Watts on Swimming With the Stream. Music: Agarb - Bilro & Barbosa and Passion - Sappheiros";
        audioSrc = '/Planet/assets/audio/alanwatts.mp3';
        subtitleFile = 'alanwatts';
        break;
      case 'alanwatts2':
        creditText = "Alan Watts on Letting Go. Music: Kevin MacLeod - Meditation Impromptu 1";
        audioSrc = '/Planet/assets/audio/alanwatts2.mp3';
        break;
      case 'ajahnchah':
        creditText = "Ajahn Chah from the BBC documentary 'The Mindful Way' & Jack Kornfield speaking about Ajahn Chah and loving awareness. Music: Jaran Olsen - This is me";
        audioSrc = '/Planet/assets/audio/ajahnchah.mp3';
        break;
      case 'honestIntro':
        creditText = 'An Honest Meditation';
        audioSrc = '/Planet/assets/audio/honestIntro.mp3';
        break;
      case 'guesthouse':
        creditText = "The Guesthouse - Rumi. Read by Helena Bonham Carter";
        audioSrc = '/Planet/assets/audio/guesthouse.mp3';
        break;
      case 'ramanamaharsi':
        creditText = 'Jack Kornfield reads about Ramana Maharsi';
        audioSrc = '/Planet/assets/audio/ramanamaharsi.mp3';
        break;
      case 'krishnamurti':
        creditText = 'Krishnamurti on Meditation and Love';
        audioSrc = '/Planet/assets/audio/krishnamurti.mp3';
        break;
      case 'rupertspira':
        creditText = 'I am Always I - Rupert Spira';
        audioSrc = '/Planet/assets/audio/rupertspira.mp3';
        break;
      case 'rupertspira2':
        creditText = 'I am That - Rupert Spira';
        audioSrc = '/Planet/assets/audio/rupertspira2.mp3';
        break;
      case 'portianelson':
        creditText = 'Autobiography in five chapters - Portia Nelson';
        audioSrc = '/Planet/assets/audio/portianelson.mp3';
        break;
      case 'welcome':
        creditText = 'Welcome to my Planet - Jaran de los Santos Olsen';
        audioSrc = '/Planet/assets/audio/candle.mp3';
        break;
      default:
        break;
    }

    const shouldShowCredits = selection !== 'welcome' && creditText;
    setCreditsText(shouldShowCredits ? `Credits: ${creditText}` : '');
    if (subtitleContainer) {
      subtitleContainer.dataset.subtitleFile = subtitleFile;
    }

    sourceElement.src = audioSrc;
    audioElement.load();
    if (audioElement.readyState > 0) {
      introState.tuneLength = audioElement.duration;
    } else {
      audioElement.addEventListener('loadedmetadata', function handleMetadata() {
        introState.tuneLength = audioElement.duration;
        audioElement.removeEventListener('loadedmetadata', handleMetadata);
      });
    }

    loadSubtitles(subtitleFile).then(() => {
      audioElement.removeEventListener('timeupdate', updateSubtitles);
      audioElement.addEventListener('timeupdate', updateSubtitles);
    });
  }

  if (introSelect) {
    introSelect.addEventListener('change', updateIntroSelection);
  }

  function initialiseIntroControls() {
    if (!audioElement) return;

    audioElement.preload = 'auto';
    audioElement.currentTime = 0;
    audioElement.volume = 1;

    if (audioElement.readyState > 0) {
      introState.tuneLength = audioElement.duration;
    } else {
      audioElement.addEventListener('loadedmetadata', function initialMetadata() {
        introState.tuneLength = audioElement.duration;
        audioElement.removeEventListener('loadedmetadata', initialMetadata);
      });
    }

    const handlePlayButtonClick = () => {
      audioElement.play();
      introState.started = true;
      window.appStatus = 'orbit';
      playButton.style.display = 'none';
      skipButton.style.display = 'none';
      credits.style.display = 'none';
      subtitleContainer.style.display = 'block';
      orbitControls.enabled = true;
      document.body.style.cursor = 'none';
    };

    const handleSkipButtonClick = () => {
      window.appStatus = 'orbit';
      introState.started = false;
      playButton.style.display = 'none';
      skipButton.style.display = 'none';
      credits.style.display = 'none';
      camera.position.z = 15;
      orbitControls.enabled = true;
      const titleMesh = scene.getObjectByName('title');
      if (titleMesh) scene.remove(titleMesh);
    };

    playButton?.addEventListener('click', handlePlayButtonClick);
    playButton?.addEventListener('touchend', (event) => {
      event.preventDefault();
      handlePlayButtonClick();
    });

    skipButton?.addEventListener('click', handleSkipButtonClick);
    skipButton?.addEventListener('touchend', (event) => {
      event.preventDefault();
      handleSkipButtonClick();
    });
  }

  if (subtitleContainer) {
    const initialFile = subtitleContainer.getAttribute('data-subtitle-file');
    loadSubtitles(initialFile).then(() => {
      audioElement?.addEventListener('timeupdate', updateSubtitles);
    });
  }

  updateIntroSelection();
  initialiseIntroControls();
}

export { introState };
