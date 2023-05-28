import { createRequire } from 'module'; // to enable the require function in ES6
import { fileURLToPath } from 'url';
import { dirname } from 'path';

function automate() {
    const require = createRequire(import.meta.url); 
    const fs = require('fs');
    const path = require('path');
    
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    // assuming this data comes from your JS file
    const contentData = [
    [],
    ['1', ['2-1', '2-2', '2-3', '2-4', '2-5'], ['3-1', '3-2', '3-3', '3-4', '3-5'], ['4-1', '4-2', '4-3', '4-4', '4-5'], ['5-1', '5-2', '5-3', '5-4', '5-5'], '6', '7'],
    ['1', '2', '3', '4', '5', '6', '7'],
    ['1', '2', '3', '4', '5', '6', '7'],
    ["1", "2", "3"],
    ["1"],
    ["1"],
    ["1", "2"],
    ["1", "2", "3", "4", "5", "6"],
    ["1"],
    ["1", "2", "3", "4", "5", "6", "7"],
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
    ["https://www.youtube-nocookie.com/embed/l3bynimi8HQ"],
    ["https://www.youtube-nocookie.com/embed/TK-MbNj83NM"],
    ["https://www.youtube-nocookie.com/embed/x_uUEaeqFog"],
    ["/Planet/assets/images/anomalies/biology/Slide1.jpeg", "https://www.youtube-nocookie.com/embed/bJ53o73QCRA", "/Planet/assets/images/anomalies/biology/Slide2.jpeg", "https://www.youtube-nocookie.com/embed/CYuDbfFRTsw", "/Planet/assets/images/anomalies/biology/Slide3.jpeg", "https://www.youtube-nocookie.com/embed/5YrmQvu5Eus"],
    ["https://www.youtube-nocookie.com/embed/O4ndIDcDSGc", "https://www.youtube-nocookie.com/embed/mccoBBf0VDM"],
    ["/Planet/assets/images/exercises/sixsenses/Slide1.jpeg", "/Planet/assets/images/exercises/sixsenses/Slide2.jpeg", "/Planet/assets/images/exercises/sixsenses/Slide3.jpeg", "/Planet/assets/images/exercises/sixsenses/Slide4.jpeg", "/Planet/assets/images/exercises/sixsenses/Slide5.jpeg", "/Planet/assets/images/exercises/sixsenses/Slide6.jpeg", "/Planet/assets/images/exercises/sixsenses/Slide7.jpeg", "/Planet/assets/images/exercises/sixsenses/Slide8.jpeg", "/Planet/assets/images/exercises/sixsenses/Slide9.jpeg", "/Planet/assets/images/exercises/sixsenses/Slide10.jpeg", "/Planet/assets/images/exercises/sixsenses/Slide11.jpeg", "/Planet/assets/images/exercises/sixsenses/Slide12.jpeg", "/Planet/assets/images/exercises/sixsenses/Slide13.jpeg", "/Planet/assets/images/exercises/sixsenses/Slide14.jpeg"],
    ["/Planet/assets/images/mindmaps/allianceFormation.png", "/Planet/assets/images/mindmaps/allianceRepair.png", "/Planet/assets/images/mindmaps/selfDisclosure.png"],
    ["/Planet/assets/images/mindmaps/caseFormulation.png"],
    ["/Planet/assets/images/mindmaps/clearingSpace.png", "/Planet/assets/images/mindmaps/focusing.png"],
    ["/Planet/assets/images/mindmaps/conflictSplit.png"],
    ["https://www.youtube-nocookie.com/embed/ynHioCxAMEI", "https://www.youtube-nocookie.com/embed/D8lmjmJ0OPg", "/Planet/assets/images/mindmaps/emotionTheory.png"],
    ["/Planet/assets/images/mindmaps/empathyExploration.png", "/Planet/assets/images/mindmaps/emphaticExploration.png"],
    ["/Planet/assets/images/mindmaps/meaningCreation.png"],
    ["https://www.youtube-nocookie.com/embed/RuZRc8Axln0", "https://www.youtube-nocookie.com/embed/VfsVqk-ke_s", "/Planet/assets/images/mindmaps/pascualLeoneModel.png"],
    ["/Planet/assets/images/mindmaps/selfSoothing.png"],
    ["/Planet/assets/images/mindmaps/SEU.png"],
    ["/Planet/assets/images/mindmaps/traumaRetelling.png"],
    ["https://www.youtube-nocookie.com/embed/XcymHw9AZvg", "https://www.youtube-nocookie.com/embed/4AHJkOF6eR8", "https://www.youtube-nocookie.com/embed/wfCRSMr5eUk", "https://www.youtube-nocookie.com/embed/-CxfrVifuUA", "https://www.youtube-nocookie.com/embed/LRuoHv-ODrI", "https://www.youtube-nocookie.com/embed/5OIy0Fdg3Ko", "/Planet/assets/images/mindmaps/treatmentPrinciples.png"],
    ["/Planet/assets/images/mindmaps/unfinishedBusiness.png"],
    ["https://www.youtube-nocookie.com/embed/7xTwvfGckLo", "https://www.youtube-nocookie.com/embed/31RQw-cLgOQ", "https://www.youtube-nocookie.com/embed/BqshniPymrQ", "https://www.youtube-nocookie.com/embed/sJl3GJLTUj4"],
    ["https://www.youtube-nocookie.com/embed/hEHbrQ6hwFs"],
    ["https://www.youtube-nocookie.com/embed/kNRg2DFtgOw", "/Planet/assets/images/mindmaps/pascualLeoneModel.png"],
    ["https://www.youtube-nocookie.com/embed/TKztYwAniaw"],
    ["https://www.youtube-nocookie.com/embed/W-koCNHdiBA", "https://www.youtube-nocookie.com/embed/7H7SGkhdtNQ"],
    ["https://www.youtube-nocookie.com/embed/OwVhyod-Ar4"],
    ["https://www.youtube-nocookie.com/embed/FYVmfHvODJw"],
    ["https://www.youtube-nocookie.com/embed/qsRW9Kj6TBI"],
    ["https://www.youtube-nocookie.com/embed/i84Pllb3hBE"],
    ["https://www.youtube-nocookie.com/embed/cxbSlP9kdno"],
    ["https://www.youtube-nocookie.com/embed/WmYGtKB9EEA?start=1196", "https://www.youtube-nocookie.com/embed/nRSBaq3vAeY", "https://www.youtube-nocookie.com/embed/AQDILJb9yK8"],
    ["https://www.youtube-nocookie.com/embed/Wxe1PkyJev8", "https://www.youtube-nocookie.com/embed/hvf4seEFtnY", "https://www.youtube-nocookie.com/embed/dFs9WO2B8uI", "https://www.youtube-nocookie.com/embed/OjCt-L0Ph5o", "https://www.youtube-nocookie.com/embed/TTSYzWkK5Qo", "https://www.youtube-nocookie.com/embed/Ko2SPWgDH6o", "https://www.youtube-nocookie.com/embed/TluNbkNrRKU", "https://www.youtube-nocookie.com/embed/6g0_c-je7ag", "https://www.youtube-nocookie.com/embed/_ee7MAtfhkM"],
    ["https://www.youtube-nocookie.com/embed/vo8izCKHiF0", "https://www.youtube-nocookie.com/embed/IxXaizglscw"],
    ["/Planet/assets/images/emotion/westeast.jpg"],
    ["/Planet/assets/images/consciousness/venn.webp"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-1-just-listen"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-2-distracted-by-truth"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-3-breath"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-4-growing-like-a-tree"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-5-innocent"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-6-choiceless-awareness"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-7-sound-of-silence"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-8-seeds-of-good"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-9-roots-of-a-tree"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-10-unbleaching-the-rainbow"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-11-body"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-12-vulnerable-strength"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-13-breath-of-love"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-14-validation"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-15-at-peace-with-pain"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-16-what-the"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-17-eternal-hug"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-18-climbing-the-flat-mountain"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-19-everything-is-now"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-20-question"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-21-buddho"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-22-not-sure"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-23-subtle-body"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-24-views"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-25-still-flowing-water"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-26-fingers-pointing-at-the-moon"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-27-like-holding-a-bird"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-28-this-too-will-pass"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-29-a-pearl-in-a-shell"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-30-only-one-problem"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-31-open"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-32-the-monkeys-fist"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-33-beyond-thought"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-34-free-will-or-will-freed"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-35-flow-of-life"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-36-belonging-to-nature"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-37-who-am-i-2"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-38-one"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-39-illusion"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-40-road-to-here"],
    ["https://insighttimer.com/jarandelossantosolsen/guided-meditations/road-to-here-number-41-awakening"],
    ["<b>Transcend</b>, /trɑːnˈsɛnd/, <i>verb</i>:<br>be or go beyond the range or limits of (a field of activity or conceptual sphere).<br><br><b>Transcendence</b>, /trɑːnˈsɛnd(ə)ns/, <i>noun</i>:<br>existence or experience beyond the normal or physical level.<br><br>(Oxford English Dictionary)", "<i>“Transcendence refers to the very highest and most inclusive or holistic levels of human consciousness, behaving and relating, as ends rather than means, to oneself, to significant others, to human beings in general, to other species, to nature, and to the cosmos.“</i><br>(Maslow, 1971, p. 269).", "According to Maslow, self-transcendence brings the individual what he termed “peak experiences” in which they transcend their own personal concerns and see from a higher perspective. These experiences often bring strong positive emotions like joy, peace, and a well-developed sense of awareness (Messerly, 2017).<br><br>Someone who is highly self-transcendent may also experience “plateau experiences” in which they consistently maintain or enter a state of serenity and higher perspective (Messerly, 2017)."],
    ["https://www.youtube-nocookie.com/embed/_5iLt1p-W1U"],
    ["https://www.youtube-nocookie.com/embed/0zfw76P_Cq4"],
    ["https://www.youtube-nocookie.com/embed/z_Gy3mTztgg"],
    ["https://www.youtube-nocookie.com/embed/w0d1TsOcbQs"],
    ["https://www.youtube-nocookie.com/embed/BZFlE0eKTvw"],
    ["https://www.youtube-nocookie.com/embed/XEHYK3TM2jc"],
    ["Greed is trying to create what isn't.<br>Hate is trying to destroy what is.<br>This is samsara.<br>Delusion is believing in this.<br><br>Peace is allowing what isn't not to be.<br>Love is allowing what is to be.<br>This is Nirvana.<br>Wisdom is knowing this."],
    ["Greed is trying to create what isn't.<br>Hate is trying to destroy what is.<br>This is samsara.<br>Delusion is believing in this.<br><br>Peace is allowing what isn't not to be.<br>Love is allowing what is to be.<br>This is Nirvana.<br>Wisdom is knowing this."],
    ["Greed is trying to create what isn't.<br>Hate is trying to destroy what is.<br>This is samsara.<br>Delusion is believing in this.<br><br>Peace is allowing what isn't not to be.<br>Love is allowing what is to be.<br>This is Nirvana.<br>Wisdom is knowing this."],
    ["Greed is trying to create what isn't.<br>Hate is trying to destroy what is.<br>This is samsara.<br>Delusion is believing in this.<br><br>Peace is allowing what isn't not to be.<br>Love is allowing what is to be.<br>This is Nirvana.<br>Wisdom is knowing this."],
    ["Greed is trying to create what isn't.<br>Hate is trying to destroy what is.<br>This is samsara.<br>Delusion is believing in this.<br><br>Peace is allowing what isn't not to be.<br>Love is allowing what is to be.<br>This is Nirvana.<br>Wisdom is knowing this."],
    ["Greed is trying to create what isn't.<br>Hate is trying to destroy what is.<br>This is samsara.<br>Delusion is believing in this.<br><br>Peace is allowing what isn't not to be.<br>Love is allowing what is to be.<br>This is Nirvana.<br>Wisdom is knowing this."],
    ["Greed is trying to create what isn't.<br>Hate is trying to destroy what is.<br>This is samsara.<br>Delusion is believing in this.<br><br>Peace is allowing what isn't not to be.<br>Love is allowing what is to be.<br>This is Nirvana.<br>Wisdom is knowing this."],
    ["Greed is trying to create what isn't.<br>Hate is trying to destroy what is.<br>This is samsara.<br>Delusion is believing in this.<br><br>Peace is allowing what isn't not to be.<br>Love is allowing what is to be.<br>This is Nirvana.<br>Wisdom is knowing this."],
    ["Greed is trying to create what isn't.<br>Hate is trying to destroy what is.<br>This is samsara.<br>Delusion is believing in this.<br><br>Peace is allowing what isn't not to be.<br>Love is allowing what is to be.<br>This is Nirvana.<br>Wisdom is knowing this."],
    ["<u>Night sky</u><br><br>How much<br>can I open up<br>before you<br>stop shining?<br>I ask the moon.<br><br>How much of me<br>can I bring forth<br>and lay down<br>in the moonlight<br>before my darkness<br>devours your light?<br><br>In a fragile glimpse of trust<br>I walk into the night<br><br>with all my old songs<br>I don't dare to sing –<br><br>And the moon is shining.<br><br>The moon is shining.<br><br>- Hege Fridtun"],
    ["Greed is trying to create what isn't.<br>Hate is trying to destroy what is.<br>This is samsara.<br>Delusion is believing in this.<br><br>Peace is allowing what isn't not to be.<br>Love is allowing what is to be.<br>This is Nirvana.<br>Wisdom is knowing this."],
    ["Greed is trying to create what isn't.<br>Hate is trying to destroy what is.<br>This is samsara.<br>Delusion is believing in this.<br><br>Peace is allowing what isn't not to be.<br>Love is allowing what is to be.<br>This is Nirvana.<br>Wisdom is knowing this."],
    ["Greed is trying to create what isn't.<br>Hate is trying to destroy what is.<br>This is samsara.<br>Delusion is believing in this.<br><br>Peace is allowing what isn't not to be.<br>Love is allowing what is to be.<br>This is Nirvana.<br>Wisdom is knowing this."],
    ["<br><br><br><br>Although he died an agnostic, toward the end of his life, Rogers began speaking about transcendental or mystical experiences (Thorne, 1992). These spiritual statements were mostly made in the context of interpersonal mutuality and human connection, derived from person-centered or I-Thou experiences. Within the person-centered world, his statements about spirituality have been viewed as controversial (Fruehwirth, 2013).<br><br><br><br>"],
    ["Altered states<br><br><i>&quot;You can't force your mind to be silent. That would be like trying to smooth ripples in water with a flatiron. Water becomes clear and calm only when left alone.&quot;</i><br>- Alan Watts", "<br><br><br><font style=opacity:.6> I too have experienced this. When I am at my best as a group facilitator, or a therapist, I discover this characteristic. I find that when I am closest to my </font><b>inner intuitive self</b><font style=opacity:.6>, when I am somehow in touch with </font><b>the unknown in me</b><font style=opacity:.6>, when perhaps I am in a slightly </font><b>altered state of consciousness</b><font style=opacity:.6>, then what ever I do seems to be full of healing. Then simply my presence is releasing and helpful.<br><br>There is </font><b>nothing I can do to force this experience</b><font style=opacity:.6>. But when I can </font><b>relax</b><font style=opacity:.6> and be close to </font><b>the transcendental core of me</b><font style=opacity:.6>, then I may behave in strange and impulsive ways in the relationship, ways which I can't justify rationally which </font><b>have nothing to do with my thought processes</b><font style=opacity:.6>. But these strange behaviors turn out to be right in some odd way. At those moments it seems that my inner spirit has reached out and touched the inner spirit of the other. Our relationship transcends itself and had become part of something larger. Profound growth and healing and energy are present.<br><br><br><br><br>"],
    ["Altered traits<br><br><i>&quot;Waking up to who you are requires letting go of who you imagine yourself to be.&quot;</i><br> - Alan Watts", "/Planet/assets/images/books/alteredtraits.webp", "<br><br><br><font style=opacity:.6> I too have experienced this. When I am at my best as a group facilitator, or a therapist, I discover this characteristic. I find that when I am closest to my inner intuitive self, when I am somehow in touch with the unknown in me, when perhaps I am in a slightly altered state of consciousness, then what ever I do seems to be full of healing. Then simply my presence is releasing and helpful.<br><br>There is nothing I can do to force this experience. But when I can relax and be close to </font><b>the transcendental core of me</b><font style=opacity:.6>, then I may behave in strange and impulsive ways in the relationship, ways which I can't justify rationally which have nothing to do with my thought processes. But these strange behaviors turn out to be right in some odd way. At those moments it seems that my inner spirit has reached out and touched the inner spirit of the other. Our relationship transcends itself and had become part of something larger. Profound growth and healing and energy are present.<br><br><br><br><br>", "Exercise: How to discover the 'Transcendental Core of Me'?<br><br>What am I not?<br><br>What am i?<br><br>What is real?<br><br>How can something about me be real in the strong sense?", "https://www.youtube-nocookie.com/embed/10J6crRacZg"],
    ["/Planet/assets/images/carlrogers/Slide1.jpeg", "/Planet/assets/images/carlrogers/Slide3.jpeg", "/Planet/assets/images/carlrogers/Slide4.jpeg", "https://www.youtube-nocookie.com/embed/iMi7uY83z-U", "/Planet/assets/images/carlrogers/Slide7.jpeg", "/Planet/assets/images/carlrogers/Slide8.jpeg", "/Planet/assets/images/carlrogers/Slide9.jpeg", "/Planet/assets/images/carlrogers/Slide10.jpeg", "/Planet/assets/images/carlrogers/Slide11.jpeg", "/Planet/assets/images/carlrogers/Slide12.jpeg", "/Planet/assets/images/carlrogers/Slide13.jpeg", "/Planet/assets/images/carlrogers/Slide14.jpeg", "/Planet/assets/images/carlrogers/Slide15.jpeg", "/Planet/assets/images/carlrogers/Slide16.jpeg", "/Planet/assets/images/carlrogers/Slide18.jpeg", "/Planet/assets/images/carlrogers/Slide17.jpeg", "https://www.youtube-nocookie.com/embed/idgjD5tir_w"],
    ["https://www.youtube-nocookie.com/embed/9oX2xFo7JA4", "https://www.youtube-nocookie.com/embed/XEHYK3TM2jc", "/Planet/assets/images/carlrogers/Slide1.jpeg", "<u>Poem for a rainy day</u><br><br>I know it feels as if<br>this night through which we journey<br>will never end.<br><br>Darkness <br>is all you see,<br>as you have yet to rub<br>the sleep from your eyes.<br><br>You don't believe it,<br>but one day you will<br>awake from the dream<br>and see what I see<br><br>you too,<br>are a child of light –<br>shining brighter than a million suns,<br>shining bright through the darkest of nights.<br><br>- Hege Fridtun", "https://insig.ht/jZUguRAk7ub", "https://img.youtube.com/vi/XEHYK3TM2jc/hqdefault.jpg"],
    ["https://www.youtube-nocookie.com/embed/XmdPY-hFSt0"],
    ["https://www.youtube-nocookie.com/embed/neDutbcedUY"],
    ["Need for postulates or axioms: Every theory must begin with a set of basic assumptions or postulates that cannot be derived from or proven by the theory itself. These postulates serve as the foundation upon which the theory is built and can sometimes be subject to revision or rejection based on new evidence or insights."],
    ["Incompleteness: No theory can provide a complete and exhaustive account of every aspect of a phenomenon. There will always be some level of uncertainty or unknowns that a theory cannot fully address or explain."],
    ["Approximations: Many theories rely on simplifying assumptions or approximations to make them more manageable or easier to work with. While these approximations may be useful for certain purposes, they can also introduce inaccuracies or limit the applicability of the theory in certain situations."],
    ["Underdetermination of theories by data: Empirical evidence is often insufficient to uniquely determine a single theory. Multiple competing theories may be consistent with the same set of data, making it difficult to conclusively establish one theory over another."],
    ["Falsifiability and the problem of induction: The process of induction, or generalizing from specific observations to broader principles, is inherently uncertain. Even a theory that has been supported by a large body of evidence could potentially be falsified by new observations, which means that all theories are, in principle, provisional and subject to revision."],
    ["Paradigm-dependence: The development and acceptance of theories are influenced by prevailing scientific paradigms and the broader cultural, social, and historical contexts in which they are formulated. This can sometimes lead to biases or blind spots in the way theories are constructed, evaluated, or interpreted."],
    ["Language and conceptual constraints: Theories are expressed using human language and concepts, which are inevitably limited in their capacity to precisely capture or represent the full complexity of the phenomena they seek to explain."],
    ["Cognitive biases: Human cognition is subject to various biases and heuristics, which can affect the way theories are formulated, tested, and accepted. Confirmation bias, for example, may lead researchers to favor evidence that supports their existing theories while discounting or overlooking contradictory evidence."],
    ["Parsimony (Occam's Razor): The theory should be as simple as possible while still effectively explaining the phenomenon. It should avoid unnecessary complexity or assumptions."],
    ["Explanatory power: The theory should be able to provide a comprehensive and clear explanation for the phenomenon it addresses, including the underlying mechanisms, causes, or principles."],
    ["Internal consistency: The components and assumptions of the theory should be coherent and logically consistent with one another, avoiding contradictions or discrepancies."],
    ["Empirical testability: A good theory should generate testable predictions or hypotheses that can be confirmed or refuted through empirical observation or experimentation."],
    ["Falsifiability: The theory should be structured in a way that allows for the possibility of being proven wrong through empirical evidence."],
    ["External consistency: The theory should be consistent with other well-established theories, principles, and empirical findings in the relevant domain or field."],
    ["Generalizability: The theory should be able to apply to a wide range of contexts, situations, or cases, rather than being restricted to a specific set of circumstances."],
    ["Fruitfulness: A good theory should inspire further research, generate new questions, and contribute to the development of new ideas and theories in the field."],
    ["Operational definitions: The key concepts and constructs within the theory should be clearly and unambiguously defined, with measurable or observable indicators."],
    ["Predictive accuracy: The theory should have a track record of making accurate predictions about future observations or phenomena, thus demonstrating its practical utility and reliability."],
    ["https://www.youtube-nocookie.com/embed/BCdV6BMMpOo"],

    ];

    for (let i = 0; i < contentData.length; i++) {
        const directoryPath = path.join(__dirname, (i).toString());
        if (!fs.existsSync(directoryPath)) {
            fs.mkdirSync(directoryPath, { recursive: true });
        }
        for (let j = 0; j < contentData[i].length; j++) {
            const filePath = path.join(directoryPath, (j + 1).toString() + '.html');
            let fileContent;
    
            if(contentData[i][j].includes('/Planet/assets/images/')) {
                fileContent = `<img src="${contentData[i][j]}">`;
            } else if(contentData[i][j].includes('https')) {
                fileContent = `<iframe src="${contentData[i][j]}" frameborder="0"></iframe>`;
            } else {
                fileContent = `<div class="quote">${contentData[i][j]}</div>`;
            }
    
            fs.writeFileSync(filePath, fileContent);
        }
    }
}

automate();  // Call the function
