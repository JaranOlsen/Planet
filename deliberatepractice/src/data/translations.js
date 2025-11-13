"use strict";

export const LANGUAGE_ORDER = ["en", "no"];

export const LANGUAGE_METADATA = {
  en: { label: "English", locale: "en", direction: "ltr" },
  no: { label: "Norsk (bokmål)", locale: "no", direction: "ltr" }
};

const ENGLISH_UI = {
  appTitle: "Deliberate Practice Lab",
  tagline: "Build precision with focused skills and curated cases across difficulty levels.",
  languageHeading: "Choose a Language",
  languageDescription: "Select the language you want to practice in.",
  languageListAria: "Language options",
  skillHeading: "Choose a Skill",
  skillDescription: "Pick the focus area you want to strengthen today.",
  skillListAria: "Skill options",
  caseHeading: "Pick a Case",
  caseDescription: "Explore curated scenarios with built-in difficulty levels.",
  caseListAria: "Case options",
  skillMarkerLabel: "Markers",
  skillSummaryLabel: "How to Work",
  skillAimLabel: "Aim",
  historyLabel: "History",
  schemaLabel: "Core Pain",
  styleLabel: "Style",
  caseBriefHeading: "Case Brief",
  roleBriefHeading: "Role Background",
  clientVoiceHeading: "Client Voice",
  practiceControlsAria: "Practice controls",
  shuffle: "Shuffle Statements",
  shuffleAria: "Shuffle statement order",
  next: "Next Statement",
  nextAria: "Advance to the next statement",
  showSuggestion: "Show Suggested Response",
  hideSuggestion: "Hide Suggested Response",
  suggestionHiddenLabel: "Suggested response is hidden",
  suggestionShownLabel: "Suggested response is visible",
  statementFallback: "Statements for this case are not available yet.",
  emptyPrompt: "Select a skill and case to begin practicing statements.",
  counterPattern: "{current} of {total}",
  startPractice: "Begin Practice",
  viewCaseBrief: "View Case Brief",
  backToLanguage: "Language",
  backToLanguageAria: "Back to language selection",
  backToSkills: "Skills",
  backToSkillsAria: "Back to skills",
  backToCases: "Cases",
  backToCasesAria: "Back to cases",
  footerNote: "Copyright © 2025 Jaran Olsen. All rights reserved.",
  statementPanelAria: "Client statements to practice with"
};

const LANGUAGE_UI_NO = {...ENGLISH_UI,
  tagline: "Bygg presisjon med målrettede ferdigheter på nøye utvalgte caser over flere vanskelighetsnivåer.",
  languageHeading: "Velg språk",
  languageDescription: "Velg språket du vil øve på.",
  languageListAria: "Språkvalg",
  skillHeading: "Velg en ferdighet",
  skillDescription: "Velg hva du vil øve på i dag.",
  skillListAria: "Ferdighetsvalg",
  caseHeading: "Velg en case",
  caseDescription: "Utforsk nøye utvalgte caser av forskjellig vanskelighetsgrad.",
  caseListAria: "Casevalg",
  skillMarkerLabel: "Markører",
  skillSummaryLabel: "Hvordan jobbe",
  skillAimLabel: "Mål",
  historyLabel: "Bakgrunn",
  schemaLabel: "Kjernesmerte",
  styleLabel: "Stil",
  caseBriefHeading: "Caseoversikt",
  roleBriefHeading: "Rollebakgrunn",
  clientVoiceHeading: "Klientens stemme",
  practiceControlsAria: "Kontroller for øving",
  shuffle: "Stokk om utsagnene",
  shuffleAria: "Stokk om rekkefølgen på utsagnene",
  next: "Neste utsagn",
  nextAria: "Gå til neste utsagn",
  showSuggestion: "Vis foreslått respons",
  hideSuggestion: "Skjul foreslått respons",
  suggestionHiddenLabel: "Foreslått respons er skjult",
  suggestionShownLabel: "Foreslått respons er synlig",
  statementFallback: "Utsagnene for denne casen er ikke tilgjengelige ennå.",
  emptyPrompt: "Velg en ferdighet og en case for å begynne å øve.",
  counterPattern: "{current} av {total}",
  startPractice: "Start øvingen",
  viewCaseBrief: "Vis caseoversikt",
  backToLanguage: "Språk",
  backToLanguageAria: "Tilbake til språkvalg",
  backToSkills: "Ferdigheter",
  backToSkillsAria: "Tilbake til ferdigheter",
  backToCases: "Caser",
  backToCasesAria: "Tilbake til caser",
  footerNote: "Opphavsrett © 2025 Jaran Olsen. Alle rettigheter forbeholdt.",
  statementPanelAria: "Klientutsagn for øving"
};

export const LANGUAGE_UI = {
  en: ENGLISH_UI,
  no: LANGUAGE_UI_NO
};

const NO_CASE_OVERRIDES = {
  "case-sara": {
    label: "Sara (Lett)",
    teaser: "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
    history:
      "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
    schema: "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
    style:
      "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
    voice:
      "Hei, jeg er Sara. På papiret går det fint – jeg leverer frister og tar kaffe med teamet – men idet jeg er alene, føles det som om bruddet beviser at jeg er for mye å elske. Jeg spiller samtaler om og om igjen og lurer på hvilken feil som til slutt dyttet ham bort. Jeg sier til venner at jeg er opptatt fordi jeg ikke orker blikkene, og jeg sovner til podkaster for å slippe stillheten. Jeg kom i terapi fordi jeg er lei av å late som om det går bra når jeg inni meg føler meg tom og uverdig.",
  },
  "case-michael": {
    label: "Michael (Lett)",
    teaser: "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
    history:
      "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
    schema: "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
    style:
      "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
    voice:
      "Jeg er Michael. Jeg holder prosjektene på skinner hele dagen, og idet noen stiller spørsmål, kjenner jeg varme i brystet og jeg bjeffer ordre. Jeg sier til meg selv at det er stress, men senere ligger jeg våken og ser for meg ansiktet til kona når jeg smeller. Pappa lærte meg at bare de beste overlever, så tanken på at folk ser meg som overreagerende eller svak er uutholdelig. Jeg vil slutte å eksplodere før jeg ødelegger det som betyr noe."
  },
  "case-jason": {
    label: "Jason (Lett)",
    teaser: "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
    history:
      "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
    schema: "Hvis folk virkelig ser meg, vil de bekrefte at jeg er klønete og uverdig.",
    style:
      "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
    voice:
      "Jeg er Jason. Hvert møte føles som en prøve jeg er i ferd med å stryke, så jeg holder kjeft og klandrer meg selv etterpå. Venner inviterer meg ut, men jeg stirrer på meldingen til det er for sent å svare. Når jeg ser for meg å si noe høyt, låser brystet seg og en stemme sier: «Avslør ikke hvor rar du er.» Jeg er utslitt av å leve i hodet mitt og vil kjenne at jeg hører til et sted.",
  },
  "case-laura": {
    label: "Laura (Moderat)",
    teaser: "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
    history:
      "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
    schema: "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
    style:
      "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
    voice:
      "Jeg heter Laura. De fleste dager går jeg fra vakt til vakt og gjør det som må gjøres, uten å kjenne noe særlig. Når noen hever stemmen, synker magen som om jeg er tilbake i det huset. Jeg sier til meg selv at fortiden er over, men når jeg prøver å stole på noen eller være nær, blir jeg blank eller heller i et glass for å bli nummen. Jeg er her fordi ensomheten har blitt høyere enn frykten.",
  },
  "case-carlos": {
    label: "Carlos (Moderat)",
    teaser: "Anleggsleder hvor raseri skjuler ydmykelse og frykt.",
    history:
      "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
    schema: "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
    style:
      "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
    voice:
      "Hei, jeg er Carlos. Jeg elsker familien min, men ett øyeblikk spøker jeg med kona, og det neste slår jeg i veggen fordi hun stilte meg spørsmål. På jobben kan et blikk fra en yngre fyr få meg til å se rødt. Jeg lærte at du slår først så du ikke blir slått, men nå ser jeg sønnen min skvette når jeg roper. Jeg vil finne en måte å verne stoltheten på uten å skremme dem jeg er glad i."
  },
  "case-nina": {
    label: "Nina (Moderat)",
    teaser: "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
    history:
      "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
    schema: "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
    style:
      "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
    voice:
      "Jeg er Nina. Dagen starter før soloppgang med matpakker og e-poster for andre, og om kvelden er jeg for sliten til å svare mine egne barn. Når jeg endelig ber om hjelp, skyller skyld inn og jeg kaller meg egoistisk. Jeg vet knapt hva jeg liker lenger. Jeg er redd for at hvis jeg slutter å overprestere, vil ingen ha meg, men jeg kan ikke fortsette på tomgang."
  },
  "case-aisha": {
    label: "Aisha (Krevende)",
    teaser: "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
    history:
      "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
    schema: "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
    style:
      "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
    voice:
      "Jeg er Aisha. Når noen jeg elsker ikke svarer raskt, føles det som om gulvet åpner seg og jeg faller. Jeg kan gå fra å idealisere til å hate på en time fordi smerten er uutholdelig. Jeg kutter for å dempe stormen eller kjenne at jeg finnes. Jeg vil tro at jeg ikke er for ødelagt til å bli elsket, og at jeg kan overleve å være alene litt.",
  },
  "case-david": {
    label: "David (Krevende)",
    teaser: "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
    history:
      "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
    schema: "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
    style:
      "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
    voice:
      "Jeg er David. Jeg har bygget en karriere på å ha svarene, men hjemme møter jeg himlende blikk og anklager om at jeg er kald. Ordet «narsissist» svir fordi det avslører hvor hul jeg føler meg når jeg ikke vinner. Faren min roste resultater, ikke meg, og jeg vet ikke hvordan jeg blir elsket uten å prestere. Jeg er redd for at de jeg bryr meg om vil se sprekkene og gå.",
  },
  "case-marcus": {
    label: "Marcus (Krevende)",
    teaser: "Krigsveteran nummen av komplekse traumer og ensom sorg.",
    history:
      "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
    schema: "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
    style:
      "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
    voice:
      "Jeg heter Marcus. De fleste dager beveger jeg meg gjennom jobben som et spøkelse og synker ned på sofaen og stirrer i veggen. Nettene er verre – ansikter fra utenlandsoppdrag eller barndommen dukker opp i drømmene. Når noen spør hvordan jeg har det, sier jeg «bra», fordi det føles farlig å vise mer. Jeg er her fordi det å ikke føle noe begynner å kjennes som å forsvinne.",
  }
};

const NO_SKILL_OVERRIDES = {
  "therapist-self-awareness": {
    name: "Terapeutens selvbevissthet",
    description: "Observer din indre tilstand slik at du forblir til stede og mottakelig, og kan velge den mest hjelpsomme responsen.",
    summary: "Følg kontinuerlig med på egen kropp, følelser og impulser slik at du kan regulere deg og holde innstillingen mot klienten. Når du kjenner spenning, hastverk eller forsvar, senk tempoet, mykne og finn ro før du velger neste steg som tjener klienten.",
    marker: "Du merker spenning, fiksetrang, forsvar, nummenhet eller sterke trekk mot eller vekk fra klienten.",
    aim: "Reguler deg selv slik at du forblir jordet, empatisk og i stand til å velge den mest hjelpsomme responsen.",
    cases: NO_CASE_OVERRIDES
  },
  "empathic-understanding": {
    name: "Empatisk forståelse",
    description: "Speil klientens opplevelse med følelsesnært språk for å formidle forståelse og invitere til utdyping.",
    summary: "Gi korte, følelsesmettede gjentakelser som speiler klientens indre verden slik at de kjenner seg dypt forstått. Match tone og tempo, hold deg i nåtid, og inviter til utdyping uten å legge til råd eller teori.",
    marker: "Følelser er til stede, klienten trenger å bli hørt, eller fortellingen er uklar og søkende.",
    aim: "Formidle presis forståelse for å bygge tillit og invitere til mer uttrykk.",
    cases: NO_CASE_OVERRIDES
  },
  "empathic-affirmation-validation": {
    name: "Empatisk bekreftelse og validering",
    description: "Legitimer klientens følelser i kontekst slik at skam og selvkritikk dempes.",
    summary: "Sett ord på hvorfor følelsen er forståelig i klientens situasjon slik at skam slipper og trygghet bygges. Gi varm tillatelse til at følelsen får være der, samtidig som dere beholder rom til å snakke om handlinger ved behov.",
    marker: "Skam, selvkritikk, unnskyldninger for å føle, eller utsagn som 'jeg burde ikke føle dette' dukker opp.",
    aim: "Legitimere følelsen slik at selvangrepet avtar og tryggheten til å føle og utforske øker.",
    cases: NO_CASE_OVERRIDES
  },
  "exploratory-questions": {
    name: "Utforskende spørsmål",
    description: "Still åpne, erfaringsnære spørsmål som vender oppmerksomheten innover og utfolder det som er i ferd med å komme.",
    summary: "Spør enkelt og åpent på en måte som vender oppmerksomheten mot kroppen og øyeblikkets sansninger. Slik får vage eller blandede opplevelser form, og dypere følelser kan komme frem i et tempo som tåles.",
    marker: "Opplevelsen kjennes vag, blandet, uferdig eller bare sanset uten ord.",
    aim: "Hjelpe den implisitte opplevelsen å ta form ved å vende oppmerksomheten innover.",
    cases: NO_CASE_OVERRIDES
  },
  "providing-treatment-rationale": {
    name: "Behandlingsrasjonale for EFT",
    description: "Gi en kort, empatisk forklaring på hvorfor følelsesarbeid hjelper, og hvordan vi gjør det.",
    summary: "Etter at du har møtt klienten empatisk, forklar med hverdagslig språk hvorfor følelsesarbeid gir lettelse og endring, og hvordan du skal lede det trygt. Bruk forklaringen til å roe tvil, redusere frykt og skape felles retning før nye steg eller oppgaver.",
    marker: "Klienten spør hvordan terapien virker, uttrykker skepsis eller frykt, eller nøler før en oppgave.",
    aim: "Gi en kort, erfaringsnær forklaring som roer uro og skaper felles retning for arbeidet.",
    cases: NO_CASE_OVERRIDES
  },
  "empathic-explorations": {
    name: "Empatiske utforskninger",
    description: "Følg og utvid forsiktig det som allerede er til stede, slik at klienten kan bli i og utdype opplevelsen.",
    summary: "Hold deg ved klientens ledende kant – reflekter litt av det som er der, og inviter dem til å dvele og legge merke til mer. Den forsiktige rytmen gjør at kontakten fordypes uten at du går foran deres egen prosess.",
    marker: "Følelsen er på vei frem men virker skjør; det finnes en levende kant som vil utdypes.",
    aim: "Holde og utdype kontakten ved å følge og forsiktig utvide det som er i ferd med å komme.",
    cases: NO_CASE_OVERRIDES
  },
  "empathic-evocations": {
    name: "Evokativ empati",
    description: "Bruk levende språk og metafor for å gjøre opplevelsen tydeligere og øke kontakten med følelsen.",
    summary: "Når følelsen er nær men dempet, tilby et kort, konkret bilde eller sanselig språk som fanger opplevelsen. Et treffende uttrykk hjelper klienten å kjenne følelsen tydeligere uten å overdøve dem.",
    marker: "Klienten snakker om følelser på en flat, fjern eller vanskelig beskrivbar måte.",
    aim: "Forsterke kontakten ved å tilby levende språk som hjelper følelsen frem.",
    cases: NO_CASE_OVERRIDES
  },
  "empathic-conjectures": {
    name: "Empatiske antakelser",
    description: "Tilby forsiktige gjetninger om opplevelser som ligger nær overflaten, for å hjelpe det usagte frem.",
    summary: "Gjør en myk, tentativ gjetning om den smerten, frykten eller lengselen du aner rett under overflaten. Marker at du kan ta feil, og la klienten bekrefte eller korrigere slik at opplevelsen får sitt eget språk.",
    marker: "Hint om dypere følelser viser seg gjennom unngåelse, tonebrudd eller uavsluttede fortellinger.",
    aim: "Sette ord på det som ligger nær overflaten slik at klienten kan bekrefte, avkrefte eller ta eierskap.",
    cases: NO_CASE_OVERRIDES
  },
  "staying-in-contact-intense-affect": {
    name: "Være i kontakt med intens affekt",
    description: "Hjelp klienten å være trygt med sterk affekt uten å bli overveldet, gjennom jording og passelig tempo.",
    summary: "Senk tempoet, hjelp klienten å jorde seg, og doser hvor mye av følelsen som kontaktes slik at store bølger av sorg, raseri, panikk eller skam kan bevege seg uten kollaps. Du holder deg nær, validerer styrken og lar mening komme i tålelige porsjoner.",
    marker: "Affekten skyter i været med gråt, skjelving, raseri, panikk, skamkollaps eller bønn om å stoppe.",
    aim: "Gi ramme og nærvær slik at sterk følelse kan bearbeides uten overveldelse.",
    cases: NO_CASE_OVERRIDES
  },
  "self-disclosure": {
    name: "Selvavsløring",
    description: "Del kort, relevant indre erfaring i klientens tjeneste for validering, fordypning eller reparasjon.",
    summary: "Del en kort, ekte bit av din umiddelbare erfaring bare når det tydelig støtter klienten – for eksempel for å vise at du er berørt, bekrefte påvirkningen deres eller reparere et brudd. Hold det konsist, uten forsvar, og vend raskt tilbake til klientens prosess.",
    marker: "Alliansen trenger validering eller reparasjon, eller et genuint terapeutisk svar vil fordype arbeidet.",
    aim: "Bruke kort, relevant åpenhet til å styrke båndet eller modellere resonans mens fokuset forblir hos klienten.",
    cases: NO_CASE_OVERRIDES
  },
  "marker-recognition-chairwork": {
    name: "Gjenkjenne markører og sette opp stolarbeid",
    description: "Se etter markører og sett trygt opp to-stol eller tom stol når forholdene ligger til rette.",
    summary: "Lytt etter markører som hard selvkritikk eller uoppgjort relasjon, og tilby en kort begrunnelse for to-stols- eller tom-stol-arbeid. Gi tydelige, trygge instruksjoner og følg aktiveringen slik at den emosjonelle prosessen kan forløse seg innenfor toleransevinduet.",
    marker: "Tydelige oppgavemarkører som hard selvkritikk, indre splitt eller uoppgjort forhold dukker opp.",
    aim: "Sette opp en erfaringsdialog som aktiverer udekkede behov og transformerende følelser.",
    cases: NO_CASE_OVERRIDES
  },
  "alliance-repair": {
    name: "Reparasjon av alliansen",
    description: "Ta imot reaksjoner uten forsvar, ta radikalt ansvar, og lag en plan sammen for å gå videre.",
    summary: "Inviter og ta imot misnøye uten å forsvare deg, valider hva klienten kjente, og anerkjenn din del der det trengs. Lag deretter en felles plan for hva som vil hjelpe nå, slik at trygghet, tillit og fremdrift gjenopprettes.",
    marker: "Tilbaketrekning, irritasjon mot deg, 'du forstår meg ikke', uteblitte timer eller plutselig kjølighet viser seg.",
    aim: "Gjenopprette tillit og samarbeid ved å ta imot bruddet, ta ansvar og planlegge neste steg sammen.",
    cases: NO_CASE_OVERRIDES
  },
  "empathic-refocusing": {
    name: "Empatisk refokusering",
    description: "Navngi beskyttelsen og inviter mildt tilbake når klienten beveger seg bort fra det som er sårt.",
    summary: "Legg merke til når klienten går over i analyser, spøk eller digresjoner for å slippe unna det ømme punktet. Anerkjenn beskyttelsen og inviter varsomt tilbake slik at arbeidet forblir forankret i følelsen som trenger oppmerksomhet.",
    marker: "Klienten går over i spøk, analyse, digresjoner eller bagatellisering når følelsen nærmer seg.",
    aim: "Anerkjenne beskyttelsen og invitere varsomt tilbake til den meningsfulle følelsen.",
    cases: NO_CASE_OVERRIDES
  }
};

export const LANGUAGE_OVERRIDES = {
  no: NO_SKILL_OVERRIDES
};

export const STATEMENT_TRANSLATIONS = {
  // Map statement ids (see STATEMENT_SETS) to translated text per language.
  no: {
    // Therapist Self-Awareness
    // Sara
    "dp_therapist-self-awareness_case-sara_01": {
      text: "Beklager, jeg overreagerer sikkert. Andre har det verre. Det går fint – la oss heller snakke om jobb.",
      suggestion: "[Internt] Mykne skuldrene, senk tempoet i pusten, legg merke til trangen til å redde. [Meta] Jeg vil gjerne senke tempoet litt – jeg merker et drag mot å gå vekk fra det som gjør vondt, og jeg vil bli litt sammen med deg her."
    },
    "dp_therapist-self-awareness_case-sara_02": {
      text: "Når jeg begynner å gråte her føler jeg meg teit, som om jeg burde hatt mer kontroll.",
      suggestion: "[Internt] Kjenn føttene; slipp kjeven; legg bort prestasjonsdrivet. [Meta] Tårer gir mening her. La oss ta et pust og gi dem litt plass."
    },
    "dp_therapist-self-awareness_case-sara_03": {
      text: "Hvis jeg bare holder meg opptatt slipper jeg å tenke på bruddet. Kanskje det er bedre?",
      suggestion: "[Internt] Legg merke til fiksetrangen; tilbake til innstemming. [Meta] En del av deg vil ha lettelse ved å holde deg opptatt – la oss kjenne etter hva som skjer inni deg idet du sier det."
    },

    // Michael
    "dp_therapist-self-awareness_case-michael_01": {
      text: "Folk pirker hele tiden. Hvis noen stiller spørsmål, tenker jeg ikke sitte der og ta det.",
      suggestion: "[Internt] Kjenn føttene; ro ned pusten; mykne brystet; merk forsvar. [Meta] Jeg hører hvor hett det blir – før vi går videre vil jeg bli litt ved det stikket under varmen."
    },
    "dp_therapist-self-awareness_case-michael_02": {
      text: "Kona sier jeg er for sint. Kanskje det stemmer – men helt ærlig provoserer hun meg.",
      suggestion: "[Internt] Legg merke til lysten til å argumentere/undervise; sentrer deg igjen. [Meta] Jeg vil forstå øyeblikket rett før sinnet – hva dukker opp i deg da?"
    },
    "dp_therapist-self-awareness_case-michael_03": {
      text: "Jeg kom ikke hit for å snakke om følelser. Jeg trenger strategier.",
      suggestion: "[Internt] Se trangen til å prestere/bevise; mykne stemmen. [Meta] Vi kan gå i ditt tempo – først vil jeg være sikker på at jeg får tak i det som er vanskeligst nå."
    },

    // Jason
    "dp_therapist-self-awareness_case-jason_01": {
      text: "Jeg kaster sikkert bort tiden din. Jeg vet aldri hva jeg skal si her uansett.",
      suggestion: "[Internt] Pust lavt; slipp trangen til å berolige; stem inn i skam. [Meta] En del av deg er redd for å kaste bort tiden – kan vi stoppe opp og legge merke til hva som skjer i kroppen idet du sier det?"
    },
    "dp_therapist-self-awareness_case-jason_02": {
      text: "Jeg blir helt blank når du spør hvordan jeg har det. Beklager.",
      suggestion: "[Internt] Legg merke til subtil utålmodighet; senk tempoet; utvid toleransevinduet. [Meta] Det er helt greit å ikke ha ord ennå – la oss bli litt ved det blanke og se hvordan det kjennes."
    },
    "dp_therapist-self-awareness_case-jason_03": {
      text: "Hvis jeg sier noe i et møte tenker alle at jeg er dum.",
      suggestion: "[Internt] Merk lysten til å gi råd; tilbake til empati. [Meta] Den frykten kjennes sterk – la oss senke tempoet litt; hvor i kroppen kjenner du den nå?"
    },

    // Laura
    "dp_therapist-self-awareness_case-laura_01": {
      text: "Helt ærlig kjenner jeg nesten ingenting. Det er bare… flatt.",
      suggestion: "[Internt] Slipp presset om å ‘få noe til å skje’; pust; fall til ro. [Meta] Vi kan være veldig milde her – hvordan er denne flatheten i kroppen, bare litt?"
    },
    "dp_therapist-self-awareness_case-laura_02": {
      text: "Når stemmer blir høye, kobler jeg ut. Jeg vil ikke dit.",
      suggestion: "[Internt] Følg aktivering; doser; hold stemmen varm. [Meta] Takk for at du sier fra – vi går sakte. Kan vi legge merke til hva som begynner å skje rett før du kobler ut?"
    },
    "dp_therapist-self-awareness_case-laura_03": {
      text: "Kanskje jeg bare er ødelagt. Kanskje følelser ikke er for meg.",
      suggestion: "[Internt] Legg merke til tristhet i meg; slipp trangen til å overbevise; stem inn igjen. [Meta] Å høre ‘ødelagt’ lander tungt – la oss ta et pust og bli ved det som gjør det sånn."
    },

    // Carlos
    "dp_therapist-self-awareness_case-carlos_01": {
      text: "Hvis en fyr ikke viser respekt, trekker jeg meg ikke. Sånn er det bare.",
      suggestion: "[Internt] Kjenn føttene; slipp knyttnevene; stå bredt; hold tonen jevn. [Meta] Jeg hører hvor viktig respekt er – kan vi se på øyeblikket rett før varmen stiger?"
    },
    "dp_therapist-self-awareness_case-carlos_02": {
      text: "Sønnen min så at jeg slo i veggen. Jeg hater det, men han burde ikke stått i veien.",
      suggestion: "[Internt] Følg beskyttelsen; mykne vurderingen; bli til stede. [Meta] Det øyeblikket høres vondt ut – la oss senke tempoet og bli ved det som traff deg da du så ansiktet hans."
    },
    "dp_therapist-self-awareness_case-carlos_03": {
      text: "Du skal vel ikke be meg bli myk, eller?",
      suggestion: "[Internt] Legg merke til trangen til å forsvare metoden; pust; hold samarbeid. [Meta] Vi jobber med det som betyr noe for deg – kanskje vi kan starte med hva ‘myk’ ville koste."
    },

    // Nina
    "dp_therapist-self-awareness_case-nina_01": {
      text: "Jeg vet jeg ikke burde klage. Andre har ekte problemer. Jeg må bare skjerpe meg.",
      suggestion: "[Internt] Merk impulsen til å over-fungere; senk tempoet. [Meta] En del av deg sier ‘skjerp deg’ – kan vi varsomt legge merke til hva som blir tungt i deg når du sier det?"
    },
    "dp_therapist-self-awareness_case-nina_02": {
      text: "Når jeg ber om hjelp, kjenner jeg skyld med en gang. Jeg vil ta det tilbake.",
      suggestion: "[Internt] Pust; slipp fiksing; stem inn i skyld/skam. [Meta] Skylden kommer raskt – la oss bli ved den et øyeblikk sammen."
    },
    "dp_therapist-self-awareness_case-nina_03": {
      text: "Jeg håndterer alt hjemme. Det går fint. Jeg vil ikke være en byrde her heller.",
      suggestion: "[Internt] Legg merke til trangen til å berolige; tilbake til sansing. [Meta] Jeg hører ‘ikke være en byrde’ – hva skjer i brystet når du sier det?"
    },

    // Aisha
    "dp_therapist-self-awareness_case-aisha_01": {
      text: "Du svarte ikke på meldingen min med en gang. Jeg følte at du glemte meg og fikk panikk.",
      suggestion: "[Internt] Jord deg; forleng utpusten; stabilt blikk; merk egen hast. [Meta] Jeg er her nå – la oss senke pusten sammen og bli ved hvor skremmende det var."
    },
    "dp_therapist-self-awareness_case-aisha_02": {
      text: "Hvis du noen gang forlater meg, overlever jeg ikke. Ikke forlat meg.",
      suggestion: "[Internt] Merk draget mot å love/fikse; sentrer deg igjen; myk stemme. [Meta] Jeg hører hvor skremmende det er – vi tar det steg for steg og kjenner litt på den frykten sammen."
    },
    "dp_therapist-self-awareness_case-aisha_03": {
      text: "I går kveld ville jeg nesten kutte fordi tomheten var for mye.",
      suggestion: "[Internt] Følg aktivering; forankre føtter/sete; hold rolig tempo; bruk sikkerhetsplan ved behov. [Meta] Takk for at du sier det – kan vi kjenne på en liten, trygg skive av den tomheten nå, med meg her?"
    },

    // David
    "dp_therapist-self-awareness_case-david_01": {
      text: "La oss være ærlige – du har nok ikke erfaring til å hjelpe en som meg.",
      suggestion: "[Internt] Legg merke til stikk/forsvar; mykne bryst/ansikt; stem inn igjen. [Meta] Det høres vanskelig ut å stole på hjelp – før vi bestemmer noe vil jeg forstå hva som står på spill for deg her."
    },
    "dp_therapist-self-awareness_case-david_02": {
      text: "Kona kaller meg narsissist. Folk elsker å rive ned suksess.",
      suggestion: "[Internt] Merk draget mot konfrontasjon; pust; hold varm tone. [Meta] Det ordet lander skarpt – kan vi bli ved hva det treffer i deg når hun sier det?"
    },
    "dp_therapist-self-awareness_case-david_03": {
      text: "Jeg er ikke her for å snakke om følelser; jeg vil ha løsninger.",
      suggestion: "[Internt] Slipp presset om å forsvare tilnærmingen; jorde. [Meta] Vi kan være praktiske – og først vil et klarere bilde av hva som gjør vondt hjelpe oss å velge riktige steg."
    },

    // Marcus
    "dp_therapist-self-awareness_case-marcus_01": {
      text: "Det er ikke så mye å si. Det går fint.",
      suggestion: "[Internt] Legg merke til utålmodighet/håpløshet; senk pusten; aksepter stillhet. [Meta] Vi kan gå sakte – hvordan kjennes ‘fint’ i kroppen akkurat nå, selv om det bare er en svak summing?"
    },
    "dp_therapist-self-awareness_case-marcus_02": {
      text: "Jeg sover ikke – marerittene kommer igjen og igjen. Dagen etter later jeg som alt er bra.",
      suggestion: "[Internt] Følg aktivering; hold stemmen lav og jevn; doser kontakt. [Meta] Vi skal ikke presse – kanskje vi kan legge merke til hva kroppen gjør idet du nevner marerittene."
    },
    "dp_therapist-self-awareness_case-marcus_03": {
      text: "Folk blir ikke værende. Det er enklere å være alene.",
      suggestion: "[Internt] Kjenn føttene; kjenn varme; slipp trangen til å overtale. [Meta] Det gir mening med det du har levd – kan vi sitte litt med hvordan ‘alene’ kjennes, her og nå?"
    },

    // Empathic Understanding
    // Sara
    "dp_empathic-understanding_case-sara_01": {
      text: "Om kvelden føles leiligheten enorm, og jeg kjenner meg så alene.",
      suggestion: "Kveldene bærer en tung ensomhet som fyller hele rommet."
    },
    "dp_empathic-understanding_case-sara_02": {
      text: "Jeg sier hele tiden til venner at det går bra, men jeg er utslitt av å late som.",
      suggestion: "Å holde masken er slitsomt, og under det føler du deg sliten og trist."
    },
    "dp_empathic-understanding_case-sara_03": {
      text: "Når jeg ser navnet hans et sted, synker magen.",
      suggestion: "Å se navnet hans slår i magen, og tapet skyller inn igjen."
    },
    "dp_empathic-understanding_case-sara_04": {
      text: "Jeg hater at jeg fortsatt sjekker telefonen i håp om at det er ham.",
      suggestion: "Det finnes et vart håp som fortsatt strekker seg, selv om det gjør vondt."
    },
    "dp_empathic-understanding_case-sara_05": {
      text: "Å våkne er verst—de første sekundene før jeg husker.",
      suggestion: "Morgenen treffer hardt når minnene krasjer inn etter et kort øyeblikk av letthet."
    },
    "dp_empathic-understanding_case-sara_06": {
      text: "Jeg kjenner meg flau over at jeg ikke er over det ennå.",
      suggestion: "Flauheten ligger oppå en sorg som ikke er ferdig."
    },
    "dp_empathic-understanding_case-sara_07": {
      text: "Jeg holder meg opptatt så jeg slipper å tenke, og så krasjer jeg om kvelden.",
      suggestion: "Opptattheten bedøver på dagtid, og om kvelden flommer tristheten tilbake."
    },
    "dp_empathic-understanding_case-sara_08": {
      text: "Jeg vil ikke belaste noen med dette.",
      suggestion: "Du er redd for å belaste andre, mens du bærer mye alene."
    },
    "dp_empathic-understanding_case-sara_09": {
      text: "Når jeg ser par, føler jeg meg uønsket.",
      suggestion: "Par vekker følelsen av å ikke være ønsket, og det stikker i hjertet."
    },
    "dp_empathic-understanding_case-sara_10": {
      text: "En del av meg lurer på om jeg rett og slett ikke er elskbar.",
      suggestion: "En smertefull tvil dukker opp og stiller spørsmål ved verdien din."
    },

    // Michael
    "dp_empathic-understanding_case-michael_01": {
      text: "Når noen påpeker en feil, føler jeg meg ydmyket og smeller.",
      suggestion: "En korrigering lander som ydmykelse, og sinnet skyter fram for å dekke over."
    },
    "dp_empathic-understanding_case-michael_02": {
      text: "Jeg tåler ikke å bli bedt om å roe meg.",
      suggestion: "«Ro deg ned» kjennes nedlatende og tenner varmen i deg."
    },
    "dp_empathic-understanding_case-michael_03": {
      text: "Etter at jeg roper, blir jeg kvalm av skam.",
      suggestion: "Etter utbruddet legger skammen seg, og du kjenner deg kvalm."
    },
    "dp_empathic-understanding_case-michael_04": {
      text: "Jeg leter etter mangel på respekt overalt.",
      suggestion: "Du står på vakt for tegn til respektløshet, klar til å forsvare deg."
    },
    "dp_empathic-understanding_case-michael_05": {
      text: "Hvis jeg ikke kan svaret, føler jeg meg liten.",
      suggestion: "Det å ikke vite gjør at du føler deg liten og blottstilt."
    },
    "dp_empathic-understanding_case-michael_06": {
      text: "Jeg forbereder meg altfor mye så ingen kan ta meg.",
      suggestion: "Å forberede deg er din måte å beskytte deg mot å bli tatt eller hengt ut."
    },
    "dp_empathic-understanding_case-michael_07": {
      text: "Min kones tonefall kan trigge meg før jeg rekker å tenke.",
      suggestion: "Et tonefall lander som en nedsettelse, og sinnet slår raskt inn."
    },
    "dp_empathic-understanding_case-michael_08": {
      text: "Jeg hater å beklage; det får meg til å føle meg svak.",
      suggestion: "Å beklage kjennes som å tape terreng og være svak."
    },
    "dp_empathic-understanding_case-michael_09": {
      text: "Jeg sier til meg selv at jeg bare holder standarder.",
      suggestion: "Du kaller det standarder, mens det inni gjør vondt å føle seg vurdert."
    },
    "dp_empathic-understanding_case-michael_10": {
      text: "Jeg ligger våken og spiller om igjen det jeg sa.",
      suggestion: "Nettene bringer reprise og tung anger."
    },

    // Jason
    "dp_empathic-understanding_case-jason_01": {
      text: "Når det er min tur, blir hodet blankt og halsen strammer seg.",
      suggestion: "Å være i rampelyset gjør hodet blankt og strammer i halsen."
    },
    "dp_empathic-understanding_case-jason_02": {
      text: "Jeg er redd folk synes jeg er klønete.",
      suggestion: "Du frykter å bli sett som klønete og dømt."
    },
    "dp_empathic-understanding_case-jason_03": {
      text: "Jeg vil bli med på ting, og så avlyser jeg.",
      suggestion: "Du lengter etter å bli med, og angsten trekker deg tilbake i siste liten."
    },
    "dp_empathic-understanding_case-jason_04": {
      text: "Komplimenter fester seg ikke; jeg tror ikke på dem.",
      suggestion: "Ros glir av fordi den indre kritikeren er høylytt."
    },
    "dp_empathic-understanding_case-jason_05": {
      text: "Jeg øver på meldinger i evigheter og sender dem likevel ikke.",
      suggestion: "Du finleser hvert ord, redd for å gjøre noe feil."
    },
    "dp_empathic-understanding_case-jason_06": {
      text: "Jeg spiser lunsj ved pulten for å unngå pauserommet.",
      suggestion: "Du holder deg for deg selv for å føle deg trygg fra blikk og vurdering."
    },
    "dp_empathic-understanding_case-jason_07": {
      text: "Etter at jeg har snakket, krymper jeg meg i timevis.",
      suggestion: "Etter at du har snakket, spiller du av og krymper deg, oversvømt av selvtvil."
    },
    "dp_empathic-understanding_case-jason_08": {
      text: "Jeg føler meg usynlig i grupper.",
      suggestion: "I grupper føler du deg usett og utenfor sirkelen."
    },
    "dp_empathic-understanding_case-jason_09": {
      text: "Hendene mine skjelver når jeg presenterer meg.",
      suggestion: "Introduksjoner bringer skjelving og et rush av nerver."
    },
    "dp_empathic-understanding_case-jason_10": {
      text: "Søndagskveldene kjennes smertefullt ensomme.",
      suggestion: "Søndagskveldene bærer en tung ensomhet og frykt for å være alene."
    },

    // Laura
    "dp_empathic-understanding_case-laura_01": {
      text: "De fleste dager føles flate, som om jeg er bak glass.",
      suggestion: "Livet kjennes dempet, som om du er bak glass og utenfor rekkevidde."
    },
    "dp_empathic-understanding_case-laura_02": {
      text: "Høye stemmer får kroppen min til å fryse.",
      suggestion: "Høye stemmer får magen til å falle og kroppen til å fryse for å holde deg trygg."
    },
    "dp_empathic-understanding_case-laura_03": {
      text: "Når noen er snille, trekker jeg meg unna.",
      suggestion: "Når varme kommer nær, trekker en beskytter deg tilbake."
    },
    "dp_empathic-understanding_case-laura_04": {
      text: "Jeg drikker om kvelden for å roe hodet.",
      suggestion: "Vinen hjelper deg å skru av når systemet ikke roer seg."
    },
    "dp_empathic-understanding_case-laura_05": {
      text: "Jeg vil ha nærhet, og så blir jeg nummen.",
      suggestion: "Du vil ha nærhet, og nummenheten trer inn for å holde deg trygg."
    },
    "dp_empathic-understanding_case-laura_06": {
      text: "Jeg får dårlig samvittighet for at jeg ikke føler så mye.",
      suggestion: "Det er skyld over nummenheten, selv om den hjelper deg å holde ut."
    },
    "dp_empathic-understanding_case-laura_07": {
      text: "Jeg våkner allerede anspent, som om jeg står på vakt.",
      suggestion: "Kroppen din våkner på vakt, forberedt på at noe kan skje."
    },
    "dp_empathic-understanding_case-laura_08": {
      text: "Jeg unngår filmer med krangling og slåssing.",
      suggestion: "Konfliktscener drar kroppen inn i gammel frykt, så du unngår dem."
    },
    "dp_empathic-understanding_case-laura_09": {
      text: "Gode nyheter når ikke inn.",
      suggestion: "Gode ting lander svakt, som om de ikke klarer å trenge gjennom tåken."
    },
    "dp_empathic-understanding_case-laura_10": {
      text: "Jeg glemmer hva jeg i det hele tatt liker.",
      suggestion: "Det er vanskelig å huske hva som gir glede når alt føles fjernt."
    },

    // Carlos
    "dp_empathic-understanding_case-carlos_01": {
      text: "Et skjevt blikk fyrer meg opp.",
      suggestion: "Et skjevt blikk tenner varmen, og kroppen stiller seg inn for å forsvare."
    },
    "dp_empathic-understanding_case-carlos_02": {
      text: "Jeg hater at ungen min så meg smelle igjen døra.",
      suggestion: "Å se ansiktet hans gjør vondt og viser hvor mye dette betyr for deg."
    },
    "dp_empathic-understanding_case-carlos_03": {
      text: "Hvis jeg gir meg, føler jeg meg som ingenting.",
      suggestion: "Å gi seg kjennes som å være liten og bli tråkket på."
    },
    "dp_empathic-understanding_case-carlos_04": {
      text: "Jeg trasker rundt og biter tenna sammen når jeg er sint.",
      suggestion: "Sinnet strammer kjeven og driver deg til å gå av deg trykket."
    },
    "dp_empathic-understanding_case-carlos_05": {
      text: "Etter at jeg eksploderer, skammer jeg meg.",
      suggestion: "Etter smellet kommer skammen og tynger deg."
    },
    "dp_empathic-understanding_case-carlos_06": {
      text: "Jeg stoler ikke på ro; det føles utrygt.",
      suggestion: "Ro tolkes som utrygt, som om det å senke garden inviterer fare."
    },
    "dp_empathic-understanding_case-carlos_07": {
      text: "Fars stemme i hodet kaller meg myk.",
      suggestion: "Det gamle budskapet om å være myk svir fortsatt og presser deg hardt."
    },
    "dp_empathic-understanding_case-carlos_08": {
      text: "Jeg vil ha respekt mer enn noe annet.",
      suggestion: "Respekt betyr trygghet for deg, så utfordringer lander som trusler."
    },
    "dp_empathic-understanding_case-carlos_09": {
      text: "Jeg slår i vegger i stedet for folk.",
      suggestion: "Du lar varmen gå ut over ting for å holde den borte fra folk, selv om det også skremmer deg."
    },
    "dp_empathic-understanding_case-carlos_10": {
      text: "Jeg vil at familien min skal føle seg trygg med meg.",
      suggestion: "Du bryr deg dypt og vil at hjemmet skal kjennes trygt rundt deg."
    },

    // Nina
    "dp_empathic-understanding_case-nina_01": {
      text: "Å be om hjelp får meg til å føle skyld.",
      suggestion: "Idet du ber om hjelp, skyller skyld inn og du trekker deg tilbake."
    },
    "dp_empathic-understanding_case-nina_02": {
      text: "Jeg gjør alt og føler meg usynlig.",
      suggestion: "Å bære så mye gjør at du føler deg usett og alene."
    },
    "dp_empathic-understanding_case-nina_03": {
      text: "Å si nei knyter magen min.",
      suggestion: "Et enkelt nei knyter magen i engstelige knuter."
    },
    "dp_empathic-understanding_case-nina_04": {
      text: "Jeg holder meg i gang så jeg slipper å kjenne på bitterhet.",
      suggestion: "Å holde deg travel skyver bitterhet og tristhet unna."
    },
    "dp_empathic-understanding_case-nina_05": {
      text: "Når jeg hviler, hører jeg en stemme kalle meg lat.",
      suggestion: "Hvile vekker en hard stemme som skammer deg."
    },
    "dp_empathic-understanding_case-nina_06": {
      text: "Jeg beklager selv små forespørsler.",
      suggestion: "Selv små behov kommer med en unnskyldning og en frykt for å belaste."
    },
    "dp_empathic-understanding_case-nina_07": {
      text: "Noen ganger eksploderer jeg, og så føler jeg meg forferdelig.",
      suggestion: "Etter sammenstøtet føler du deg forferdelig og skamfull."
    },
    "dp_empathic-understanding_case-nina_08": {
      text: "Jeg drømmer om at noen tar vare på meg.",
      suggestion: "Det finnes en stille lengsel etter å bli tatt vare på slik du tar vare på andre."
    },
    "dp_empathic-understanding_case-nina_09": {
      text: "Jeg sammenligner meg med andre mødre og føler at jeg feiler.",
      suggestion: "Sammenligning får deg til å føle deg ikke god nok og skamfull."
    },
    "dp_empathic-understanding_case-nina_10": {
      text: "Jeg får hodepine når jeg blir overveldet.",
      suggestion: "Stresset bygger seg opp i kroppen som dunkende smerte."
    },

    // Aisha
    "dp_empathic-understanding_case-aisha_01": {
      text: "Hvis du ser bort, får jeg panikk.",
      suggestion: "Et blikk bort kjennes som å bli forlatt, og panikken skyter i været."
    },
    "dp_empathic-understanding_case-aisha_02": {
      text: "Når en melding ikke kommer, får jeg ikke puste.",
      suggestion: "Stillheten griper pusten din og kjennes som et fall."
    },
    "dp_empathic-understanding_case-aisha_03": {
      text: "Jeg sier ‘ikke forlat meg’, og så roper jeg.",
      suggestion: "Du trygler, og så kommer sinnet når frykten skyter i været."
    },
    "dp_empathic-understanding_case-aisha_04": {
      text: "Tomheten kjennes som et hull i brystet.",
      suggestion: "Det er en dyp, verkende tomhet som gjør så vondt."
    },
    "dp_empathic-understanding_case-aisha_05": {
      text: "Jeg klorer meg i huden for å kjenne noe.",
      suggestion: "Du søker etter sansning når nummenhet og smerte blir uutholdelig."
    },
    "dp_empathic-understanding_case-aisha_06": {
      text: "Hvis noen avlyser, vil jeg gi opp.",
      suggestion: "En avlysning svir som å bli droppet, og du vil beskytte deg."
    },
    "dp_empathic-understanding_case-aisha_07": {
      text: "Jeg hater meg selv etter at jeg eksploderer.",
      suggestion: "Etter eksplosjonen hamrer skammen, og du vender den innover mot deg selv."
    },
    "dp_empathic-understanding_case-aisha_08": {
      text: "Jeg tester folk for å se om de bryr seg.",
      suggestion: "Å teste er en måte du prøver å kjenne deg ønsket og trygg på."
    },
    "dp_empathic-understanding_case-aisha_09": {
      text: "Avskjeder gjør meg svimmel.",
      suggestion: "Avskjeder får verden til å tippe av frykt og sorg."
    },
    "dp_empathic-understanding_case-aisha_10": {
      text: "Jeg vet ikke hvem jeg er uten noen.",
      suggestion: "Uten noen nær føler du deg tom og usikker på deg selv."
    },

    // David
    "dp_empathic-understanding_case-david_01": {
      text: "Å bli kalt kald får meg umiddelbart til å stritte imot.",
      suggestion: "Det ordet svir, og du blir raskt hard for å dekke over smerten."
    },
    "dp_empathic-understanding_case-david_02": {
      text: "Hvis jeg ikke er på topp, føler jeg meg verdiløs.",
      suggestion: "Å ikke være på topp kjennes som å være ingenting."
    },
    "dp_empathic-understanding_case-david_03": {
      text: "Jeg ramser opp prestasjoner når jeg føler meg angrepet.",
      suggestion: "Du griper prestasjoner som rustning når du føler deg dømt."
    },
    "dp_empathic-understanding_case-david_04": {
      text: "Ros føles godt, og så renner det ut igjen.",
      suggestion: "Beundring lander og renner ut igjen, og etterlater deg hul."
    },
    "dp_empathic-understanding_case-david_05": {
      text: "Jeg hater å innrømme at jeg tar feil.",
      suggestion: "Å innrømme feil kjennes avkledende og lite."
    },
    "dp_empathic-understanding_case-david_06": {
      text: "Barnas tårer gjør meg utålmodig.",
      suggestion: "Tårene deres er vanskelige å sitte med, og du blir rådvill der."
    },
    "dp_empathic-understanding_case-david_07": {
      text: "Siden affæren føles huset kaldt.",
      suggestion: "Alt ser greit ut, og likevel ligger det et kjølig drag i hjemmet."
    },
    "dp_empathic-understanding_case-david_08": {
      text: "Fars standarder styrer meg fortsatt.",
      suggestion: "De høye standardene driver deg fortsatt og svir når du ikke når opp."
    },
    "dp_empathic-understanding_case-david_09": {
      text: "Noen ganger tenker jeg at terapi er bortkastet.",
      suggestion: "Skepsisen kommer, og under den ønsker du fortsatt at noe skal endre seg."
    },
    "dp_empathic-understanding_case-david_10": {
      text: "Jeg er redd for å være ordinær.",
      suggestion: "Ordinær kjennes som å være usett og uverdig."
    },

    // Marcus
    "dp_empathic-understanding_case-marcus_01": {
      text: "De fleste dager føler jeg ingenting.",
      suggestion: "Nummenhet ligger over deg som et lag som holder følelsene ute."
    },
    "dp_empathic-understanding_case-marcus_02": {
      text: "Så, ut av ingenting, treffer en bølge meg.",
      suggestion: "Bølger slår plutselig inn og tar deg ned."
    },
    "dp_empathic-understanding_case-marcus_03": {
      text: "Mareritt gjør meg oppskrudd og tom.",
      suggestion: "Mareritt rykker deg våken—oppskrudd og hul på samme tid."
    },
    "dp_empathic-understanding_case-marcus_04": {
      text: "Jeg unngår folk fordi det føles tryggere.",
      suggestion: "Avstand føles tryggere enn risikoen for å bli såret igjen."
    },
    "dp_empathic-understanding_case-marcus_05": {
      text: "Jeg sitter i mørket etter jobb.",
      suggestion: "Det stille, mørke rommet speiler tomheten inni."
    },
    "dp_empathic-understanding_case-marcus_06": {
      text: "Gode øyeblikk føles uvirkelige.",
      suggestion: "Det gode føles langt borte, som om du ikke kan ta på det."
    },
    "dp_empathic-understanding_case-marcus_07": {
      text: "Høye lyder får meg til å skvette.",
      suggestion: "Plutselige lyder setter kroppen i høy beredskap."
    },
    "dp_empathic-understanding_case-marcus_08": {
      text: "Jeg tar ikke telefonen når familien ringer.",
      suggestion: "Du holder avstand for å slippe å bli dratt inn i følelser."
    },
    "dp_empathic-understanding_case-marcus_09": {
      text: "Noen ganger tenker jeg at det ikke ville bety noe om jeg forsvant.",
      suggestion: "Håpløsheten hvisker at du ikke betyr noe."
    },
    "dp_empathic-understanding_case-marcus_10": {
      text: "Jeg vil ha kontakt og tåler den ikke.",
      suggestion: "Du vil ha nærhet, og systemet ditt slår seg av når den kommer nær."
    },
    // Empatisk bekreftelse og validering
    // Sara
    "dp_empathic-affirmation-validation_case-sara_01": {
      text: "Jeg sjekker kontoene hans på sosiale medier selv om det knuser meg.",
      suggestion: "Selvsagt fortsetter du å se; etter et sånt tap vil hvem som helst strekke seg etter kontakt selv om det gjør vondt."
    },
    "dp_empathic-affirmation-validation_case-sara_02": {
      text: "Jeg sier stadig ‘det går bra’, selv når øynene er fulle av tårer.",
      suggestion: "Det gir mening at du prøver å holde deg sammen; du har båret så mye alene."
    },
    "dp_empathic-affirmation-validation_case-sara_03": {
      text: "Hvis jeg hadde vært morsommere eller enklere, hadde han kanskje blitt.",
      suggestion: "Ikke rart du leter etter hva du kunne gjort; selvbebreidelse prøver å gi smerten mening."
    },
    "dp_empathic-affirmation-validation_case-sara_04": {
      text: "Nettene er verst—når det blir stille føler jeg meg uønsket.",
      suggestion: "Stillheten kan forsterke smerten; det gir mening at det kjennes som å ikke være ønsket."
    },
    "dp_empathic-affirmation-validation_case-sara_05": {
      text: "Jeg begynte å skrive til ham og slettet det et titalls ganger.",
      suggestion: "Det gir mening at en del av deg vil ha kontakt, og en annen del beskytter deg mot mer smerte."
    },
    "dp_empathic-affirmation-validation_case-sara_06": {
      text: "Når jeg våkner, glemmer jeg det et sekund og så smeller det.",
      suggestion: "Hvem som helst ville kjent det krasjet når de våkner; det gir mening at det treffer så hardt."
    },
    "dp_empathic-affirmation-validation_case-sara_07": {
      text: "Jeg beklager at sorgen min tar plass.",
      suggestion: "Selvsagt bekymrer du deg for å ta plass; sorgen din hører hjemme her og gir mening."
    },
    "dp_empathic-affirmation-validation_case-sara_08": {
      text: "Mat smaker ingenting og magen synker ofte.",
      suggestion: "Den hule, fallende magefølelsen stemmer med hvor dypt dette traff."
    },
    "dp_empathic-affirmation-validation_case-sara_09": {
      text: "Venner inviterer meg ut, og jeg finner unnskyldninger fordi jeg ikke vil gråte offentlig.",
      suggestion: "Det gir mening at du beskytter deg mot mer smerte selv om du ønsker kontakt."
    },
    "dp_empathic-affirmation-validation_case-sara_10": {
      text: "En del av meg tenker at kjærlighet ikke er for meg.",
      suggestion: "Med det du har vært gjennom, gir det mening at den tanken dukker opp; jeg hører hvor ensomt det kjennes."
    },

    // Michael
    "dp_empathic-affirmation-validation_case-michael_01": {
      text: "Når trafikken er dårlig og noen skjærer meg av, blir ansiktet varmt og jeg eksploderer.",
      suggestion: "Det gir mening at kroppen din skyter til forsvar når du føler mangel på respekt eller blir presset inn i et hjørne."
    },
    "dp_empathic-affirmation-validation_case-michael_02": {
      text: "Hvis jeg ikke har svaret, føler jeg meg avslørt og bløffer.",
      suggestion: "Med hvordan du har blitt vurdert, er det klart at det å ikke vite kan kjennes som å bli avslørt."
    },
    "dp_empathic-affirmation-validation_case-michael_03": {
      text: "Å beklage får meg til å føle meg liten, som om jeg gir fra meg terreng.",
      suggestion: "Det gir mening at en unnskyldning kan kjennes som å miste status når det å stå høyt har betydd trygghet."
    },
    "dp_empathic-affirmation-validation_case-michael_04": {
      text: "Hjemme kan et sukk eller en himling med øynene sette meg av før jeg rekker å tenke.",
      suggestion: "Ikke rart de små signalene svir; de kan lande som respektløshet og tenne gammel smerte."
    },
    "dp_empathic-affirmation-validation_case-michael_05": {
      text: "Jeg fører regnskap i hodet så ingen har noe over meg.",
      suggestion: "Det gir mening at du holder oversikt over alt for å beskytte deg mot følelsen av å være underlegen."
    },
    "dp_empathic-affirmation-validation_case-michael_06": {
      text: "Når barnet mitt spør hvorfor jeg er sint, skammer jeg meg og føler meg fastlåst.",
      suggestion: "Selvsagt treffer skammen der; det viser hvor mye du bryr deg om å være den faren du vil være."
    },
    "dp_empathic-affirmation-validation_case-michael_07": {
      text: "Jeg smeller med dørene fordi det føles bedre enn å føle meg liten.",
      suggestion: "Det gir mening at sinnet trer inn for å dekke over den lille, stukne følelsen."
    },
    "dp_empathic-affirmation-validation_case-michael_08": {
      text: "Hvis noen utfordrer meg offentlig, dobler jeg innsatsen selv om jeg tar feil.",
      suggestion: "Når det føles truende å være underlegen, gir det mening at du graver deg ned for å beskytte deg."
    },
    "dp_empathic-affirmation-validation_case-michael_09": {
      text: "Jeg misliker at jeg trenger terapi; det føles som svakhet.",
      suggestion: "Selvsagt kjennes det risikabelt; at du kommer hit viser også hvor mye du vil at ting skal bli annerledes."
    },
    "dp_empathic-affirmation-validation_case-michael_10": {
      text: "Etter utbruddene ligger jeg våken og hater meg selv.",
      suggestion: "Hvem som helst ville følt seg elendig etter de øyeblikkene; det gir mening at skammen holder deg våken."
    },

    // Jason
    "dp_empathic-affirmation-validation_case-jason_01": {
      text: "Hjertet hamrer bare jeg hører navnet mitt i et møte.",
      suggestion: "Selvsagt løper hjertet når det å bli sett kjennes risikabelt."
    },
    "dp_empathic-affirmation-validation_case-jason_02": {
      text: "Jeg unngår øyekontakt så folk ikke legger merke til meg.",
      suggestion: "Det gir mening at du prøver å være usynlig når oppmerksomhet føles farlig."
    },
    "dp_empathic-affirmation-validation_case-jason_03": {
      text: "Jeg later som jeg tekster for å slippe småprat.",
      suggestion: "Selvsagt søker du dekning når du føler deg blottstilt; det ville hvem som helst."
    },
    "dp_empathic-affirmation-validation_case-jason_04": {
      text: "Jeg er redd jeg er kjedelig, og at folk bare er høflige.",
      suggestion: "Det gir mening at den harde indre stemmen får deg til å tvile på deg selv blant andre."
    },
    "dp_empathic-affirmation-validation_case-jason_05": {
      text: "Komplimenter preller av; jeg tror ikke på dem.",
      suggestion: "Når selvkritikken er så høy, gir det mening at ros er vanskelig å ta inn."
    },
    "dp_empathic-affirmation-validation_case-jason_06": {
      text: "Etter at jeg har snakket, spiller jeg av hver setning og krymper meg.",
      suggestion: "Det gir mening at du spiller alt om igjen når det å høre til betyr så mye."
    },
    "dp_empathic-affirmation-validation_case-jason_07": {
      text: "Trange rom gjør brystet stramt, og jeg leter etter døra.",
      suggestion: "Selvsagt skanner kroppen etter utganger når sosiale rom kjennes truende."
    },
    "dp_empathic-affirmation-validation_case-jason_08": {
      text: "Jeg sammenligner meg med alle og kommer alltid til kort.",
      suggestion: "Det gir mening at sammenligning stjeler verdien din når skammen er nær."
    },
    "dp_empathic-affirmation-validation_case-jason_09": {
      text: "Stemmen skjelver når jeg presenterer meg.",
      suggestion: "En skjelvende stemme gir mening når kroppen spenner seg for å bli vurdert."
    },
    "dp_empathic-affirmation-validation_case-jason_10": {
      text: "Noen netter er jeg sikker på at jeg alltid kommer til å være alene.",
      suggestion: "Det gir mening at nettene bringer den tunge ensomheten; jeg hører hvor vondt det er."
    },

    // Laura
    "dp_empathic-affirmation-validation_case-laura_01": {
      text: "De fleste dager føles flate, som om jeg er bak glass og ser livet skje.",
      suggestion: "Det gir mening at alt kjennes dempet etter det du har vært gjennom."
    },
    "dp_empathic-affirmation-validation_case-laura_02": {
      text: "Hvis stemmer heves, synker magen og jeg forsvinner et annet sted i hodet.",
      suggestion: "Selvsagt kobler kroppen ut når stemmer heves; den lærte det for å holde deg trygg."
    },
    "dp_empathic-affirmation-validation_case-laura_03": {
      text: "Når noen er snille mot meg, blir jeg nummen eller mistenksom.",
      suggestion: "Vennlighet kan kjennes forvirrende når tryggheten har vært usikker; det gir mening."
    },
    "dp_empathic-affirmation-validation_case-laura_04": {
      text: "Jeg tar lange dusjer bare for å kjenne noe varmt.",
      suggestion: "Det gir mening at du søker små, trygge sansninger når følelsene er langt unna."
    },
    "dp_empathic-affirmation-validation_case-laura_05": {
      text: "Fine dager føles likevel grå for meg.",
      suggestion: "Selvsagt kjennes glede dempet når systemet ditt har båret så mye."
    },
    "dp_empathic-affirmation-validation_case-laura_06": {
      text: "Å bli tatt på, selv vennlig, skremmer meg.",
      suggestion: "Det gir mening at kroppen skvetter; den lærte å beskytte deg."
    },
    "dp_empathic-affirmation-validation_case-laura_07": {
      text: "Når tristheten bryter gjennom, blir jeg redd og lukker den ned.",
      suggestion: "Selvsagt er følelsene skumle; å stenge dem ned har vært en måte å klare seg på."
    },
    "dp_empathic-affirmation-validation_case-laura_08": {
      text: "Jeg beklager at jeg trenger trøst.",
      suggestion: "Det gir mening at det føles vanskelig å trenge; behovene dine betyr noe her."
    },
    "dp_empathic-affirmation-validation_case-laura_09": {
      text: "Jeg glemmer hva jeg i det hele tatt liker å gjøre.",
      suggestion: "Etter så mye spenning gir det mening at interessene dine føles langt unna nå."
    },
    "dp_empathic-affirmation-validation_case-laura_10": {
      text: "Kroppen min slapper aldri helt av, selv i senga.",
      suggestion: "Selvsagt holder kroppen seg på vakt; den lærte å overleve sånn."
    },

    // Carlos
    "dp_empathic-affirmation-validation_case-carlos_01": {
      text: "Et skjevt blikk, og kjeven låser seg før jeg vet ordet av det.",
      suggestion: "Det gir mening at kroppen rigges raskt når du aner mangel på respekt."
    },
    "dp_empathic-affirmation-validation_case-carlos_02": {
      text: "Hvis jeg ikke kommer inn sterk, tråkker folk over meg.",
      suggestion: "Med bakgrunnen din er det klart at det å stå støtt har kjentes som trygghet."
    },
    "dp_empathic-affirmation-validation_case-carlos_03": {
      text: "På kampen til ungen ropte jeg til dommeren og følte meg dårlig etterpå.",
      suggestion: "Hvem som helst ville hatt vondt av det; det gir mening at det betyr så mye for deg."
    },
    "dp_empathic-affirmation-validation_case-carlos_04": {
      text: "Når jeg blir utfordret, føler jeg meg liten og blåser meg fort opp.",
      suggestion: "Det gir mening at en utfordring gjør deg liten inni, og at sinnet trer inn for å beskytte."
    },
    "dp_empathic-affirmation-validation_case-carlos_05": {
      text: "Jeg knytter nevene og går frem og tilbake; det føles som en kamp er på vei.",
      suggestion: "Selvsagt gjør kroppen seg klar til kamp; den lærte at det var måten å holde deg trygg."
    },
    "dp_empathic-affirmation-validation_case-carlos_06": {
      text: "Jeg ødelegger ting og angrer etterpå.",
      suggestion: "Det gir mening at varmen tar over raskt, og at angret kommer når du kjølner."
    },
    "dp_empathic-affirmation-validation_case-carlos_07": {
      text: "Kollegaer holder avstand og jeg skammer meg.",
      suggestion: "Selvsagt svir det; det gir mening at du kjenner både beskyttelse og skam."
    },
    "dp_empathic-affirmation-validation_case-carlos_08": {
      text: "Jeg går ut av rommet for å ikke eksplodere, og så føler jeg meg svak for å ha gått.",
      suggestion: "Det gir mening at det å gå føles svakt når styrke har betydd å stå på ditt."
    },
    "dp_empathic-affirmation-validation_case-carlos_09": {
      text: "Jeg stoler ikke på ro—som om det betyr at jeg blir tråkket på.",
      suggestion: "Med din historie gir det mening at ro kan kjennes farlig i stedet for trygg."
    },
    "dp_empathic-affirmation-validation_case-carlos_10": {
      text: "Jeg vil at familien min skal føle seg trygg med meg.",
      suggestion: "Ønsket om trygghet for dem gir mening og viser hjertet og engasjementet ditt."
    },

    // Nina
    "dp_empathic-affirmation-validation_case-nina_01": {
      text: "Hvis jeg hviler, kjennes det som jeg gjør noe galt.",
      suggestion: "Det gir mening at hvile kjennes feil når du har lært å fortjene plassen din ved å gjøre."
    },
    "dp_empathic-affirmation-validation_case-nina_02": {
      text: "Å si nei gjør meg engstelig hele dagen.",
      suggestion: "Selvsagt vekker et ‘nei’ uro, gitt de gamle reglene."
    },
    "dp_empathic-affirmation-validation_case-nina_03": {
      text: "Jeg gjør alt og føler meg likevel usynlig.",
      suggestion: "Hvem som helst som bærer så mye ville følt seg oversett; det gir mening at du lengter etter å bli lagt merke til."
    },
    "dp_empathic-affirmation-validation_case-nina_04": {
      text: "Når jeg blir sint, føler jeg straks skyld.",
      suggestion: "Det gir mening at skyld følger sinnet når du lærte at dine behov var mindre viktige."
    },
    "dp_empathic-affirmation-validation_case-nina_05": {
      text: "Å be om hjelp får meg til å føle meg som en byrde.",
      suggestion: "Det gir mening at det kjennes som en byrde å be om hjelp når du i årevis har vært den som hjelper."
    },
    "dp_empathic-affirmation-validation_case-nina_06": {
      text: "Hvis huset er rotete, føler jeg meg som et dårlig menneske.",
      suggestion: "Selvsagt kobles rot til skam når verdi ble knyttet til prestasjon."
    },
    "dp_empathic-affirmation-validation_case-nina_07": {
      text: "Jeg sier til meg selv at andre har det verre, så jeg burde ikke føle dette.",
      suggestion: "Det gir mening at du nedtoner smerten; du har måttet gjøre det lenge."
    },
    "dp_empathic-affirmation-validation_case-nina_08": {
      text: "Når jeg er syk, presser jeg meg likevel gjennom og krasjer etterpå.",
      suggestion: "Selvsagt presser du på; kroppen viser hvor mye dette har kostet."
    },
    "dp_empathic-affirmation-validation_case-nina_09": {
      text: "Jeg får panikk når noen virker skuffet over meg.",
      suggestion: "Det gir mening at skuffelse kjennes skremmende når kjærlighet har føltes betinget."
    },
    "dp_empathic-affirmation-validation_case-nina_10": {
      text: "En del av meg tror jeg er elskbar bare når jeg er nyttig.",
      suggestion: "Med din historie gir det mening at kjærlighet har føltes knyttet til å gjøre mer enn å være."
    },

    // Aisha
    "dp_empathic-affirmation-validation_case-aisha_01": {
      text: "Jeg fulgte med på døra mesteparten av timen for å være sikker på at du ikke drar.",
      suggestion: "Selvsagt holder du øye med døra etter så mange farvel; jeg hører hvor viktig trygghet er."
    },
    "dp_empathic-affirmation-validation_case-aisha_02": {
      text: "Jeg rev i stykker bilder etter bruddet og følte meg både sterk og tom.",
      suggestion: "Det gir mening at du grep etter hva som helst for å få lettelse; tomheten etterpå er forståelig."
    },
    "dp_empathic-affirmation-validation_case-aisha_03": {
      text: "Noen ganger vil jeg krype ut av huden min.",
      suggestion: "Den trangen gir mening når smerte og panikk kjennes uutholdelig; jeg er glad du sier det her."
    },
    "dp_empathic-affirmation-validation_case-aisha_04": {
      text: "Når du noterer, tenker jeg at du hater meg og vil løpe.",
      suggestion: "Med hvor ofte du har blitt misforstått, gir det mening at du leser fare og vil ut fort."
    },
    "dp_empathic-affirmation-validation_case-aisha_05": {
      text: "Jeg sender noen tjue meldinger og blokkerer dem så.",
      suggestion: "Det gir mening at du strekker deg hardt etter nærhet og så beskytter deg når frykten skyter i været."
    },
    "dp_empathic-affirmation-validation_case-aisha_06": {
      text: "Jeg føler meg skitten på grunn av det som ble gjort mot meg.",
      suggestion: "Å føle seg forurenset gir hjerteskjærende mening etter det du har vært gjennom; jeg er oppriktig lei for at det skjedde med deg."
    },
    "dp_empathic-affirmation-validation_case-aisha_07": {
      text: "Gode ord får meg til å hulke og også ville løpe.",
      suggestion: "Selvsagt lander det stort å bli sett—både lindrende og skremmende på samme tid."
    },
    "dp_empathic-affirmation-validation_case-aisha_08": {
      text: "Når du ser bort, tenker jeg at jeg er kjedelig og blir rasende.",
      suggestion: "Det gir mening at et blikk bort kjennes som avvisning og tenner sinne for å beskytte deg."
    },
    "dp_empathic-affirmation-validation_case-aisha_09": {
      text: "Jeg hører en stemme som sier at jeg er søppel og ikke elskbar.",
      suggestion: "Med svikene du har overlevd, gir det mening at den grusomme stemmen dukker opp og kjennes sann."
    },
    "dp_empathic-affirmation-validation_case-aisha_10": {
      text: "Jeg stirrer på klokka for å være sikker på at du ikke avslutter tidlig.",
      suggestion: "Selvsagt ser du på tiden; avslutninger har vært vonde, så det gir mening at du forbereder deg."
    },

    // David
    "dp_empathic-affirmation-validation_case-david_01": {
      text: "Når kona mi tar opp følelser, føler jeg meg trengt opp i et hjørne og vil argumentere fakta.",
      suggestion: "Det gir mening at du føler deg eksponert der; fakta kan kjennes tryggere når følelser svir som kritikk."
    },
    "dp_empathic-affirmation-validation_case-david_02": {
      text: "Jeg vil ha anerkjennelse for alt jeg gjør; når jeg ikke får det, kjenner jeg raseri.",
      suggestion: "Selvsagt gjør det vondt å ikke bli sett; skam og sinne går ofte sammen der."
    },
    "dp_empathic-affirmation-validation_case-david_03": {
      text: "Jeg sammenligner meg med andre fedre og føler meg som en bløff.",
      suggestion: "Det gir mening at sammenligning vekker skam når verdi har vært knyttet til prestasjon."
    },
    "dp_empathic-affirmation-validation_case-david_04": {
      text: "Å be om unnskyldning kjennes ydmykende for meg.",
      suggestion: "Det gir mening at det å beklage kjennes lite når du lærte at sårbarhet kostet deg."
    },
    "dp_empathic-affirmation-validation_case-david_05": {
      text: "Jeg planlegger perfekte ferier så vi ser bra ut utenfra.",
      suggestion: "Selvsagt strever du etter å se samlet ut; det gir mening at image har kjentes som beskyttelse."
    },
    "dp_empathic-affirmation-validation_case-david_06": {
      text: "Jeg gruer meg for å være ordinær; det kjennes som å mislykkes.",
      suggestion: "Det gir mening at ‘ordinær’ kjennes truende når det å være ekstraordinær har liknet verdi."
    },
    "dp_empathic-affirmation-validation_case-david_07": {
      text: "Jeg sier at det går bra mens jeg føler meg tom.",
      suggestion: "Selvsagt dekker du over tomheten; det gir mening å skjule det som kjennes sårbart."
    },
    "dp_empathic-affirmation-validation_case-david_08": {
      text: "Jeg skryter for å få respekt og føler meg hul etterpå.",
      suggestion: "Det gir mening at du søker beundring for å fylle et såret sted, og at du føler deg hul etterpå."
    },
    "dp_empathic-affirmation-validation_case-david_09": {
      text: "Jeg føler meg som en skuffelse for faren min, selv nå.",
      suggestion: "Selvsagt svir det gamle såret fortsatt; hvem som helst ville hatt vondt der."
    },
    "dp_empathic-affirmation-validation_case-david_10": {
      text: "Når teamet mitt overgår meg, føler jeg meg truet i stedet for stolt.",
      suggestion: "Det gir mening at andres suksess pirker i frykten for å være mindre enn."
    },

    // Marcus
    "dp_empathic-affirmation-validation_case-marcus_01": {
      text: "De fleste dager føler jeg meg som et spøkelse som går gjennom rutiner.",
      suggestion: "Det gir mening at du føler deg frakoblet etter så mye traume; nummenhet har hjulpet deg å overleve."
    },
    "dp_empathic-affirmation-validation_case-marcus_02": {
      text: "Jeg lar TV-en stå på for å overdøve tankene.",
      suggestion: "Selvsagt leter du etter måter å dempe det som kjennes overveldende inni."
    },
    "dp_empathic-affirmation-validation_case-marcus_03": {
      text: "Jeg sitter i bilen før jeg går inn fordi jeg ikke orker stillheten.",
      suggestion: "Det gir mening at stillheten er vanskelig; den kan bringe tyngden tilbake på et øyeblikk."
    },
    "dp_empathic-affirmation-validation_case-marcus_04": {
      text: "Høye smell får meg til å skvette, og så blir jeg sint på meg selv for reaksjonen.",
      suggestion: "Selvsagt skvetter kroppen; det gir mening å bli sint på deg selv etterpå når du skulle ønske det var annerledes."
    },
    "dp_empathic-affirmation-validation_case-marcus_05": {
      text: "Høytider kjennes hule; jeg føler ingenting av det jeg ‘burde’ føle.",
      suggestion: "Det gir mening at høytider lander flatt når systemet ditt har vært så nedstengt for å holde deg trygg."
    },
    "dp_empathic-affirmation-validation_case-marcus_06": {
      text: "Jeg unngår påminnelser om tjenesten fordi de åpner slusene.",
      suggestion: "Å unngå påminnelser gir mening når bølgene kan kjennes for store å bære."
    },
    "dp_empathic-affirmation-validation_case-marcus_07": {
      text: "Jeg holder leiligheten mørk og inviterer ikke folk.",
      suggestion: "Selvsagt kan det føles tryggere nå å holde ting smått og mørkt."
    },
    "dp_empathic-affirmation-validation_case-marcus_08": {
      text: "Jeg husker ikke sist jeg lo ordentlig.",
      suggestion: "Det gir mening at gleden føles langt unna når du har båret så mye smerte."
    },
    "dp_empathic-affirmation-validation_case-marcus_09": {
      text: "Jeg vil ikke trenge noen.",
      suggestion: "Med det du har levd, gir det mening at det føles farlig å trenge andre."
    },
    "dp_empathic-affirmation-validation_case-marcus_10": {
      text: "Noen ganger tenker jeg at jeg har det best alene for alltid.",
      suggestion: "Det gir mening at alene føles tryggere, selv om det er ensomt; jeg er glad du sier det her."
    },

    // Utforskende spørsmål
    // Sara
    "dp_exploratory-questions_case-sara_01": {
      text: "Når jeg ser navnet hans dukke opp hvor som helst, synker magen og jeg føler meg liten.",
      suggestion: "Når du kjenner det fallet nå, hvor i kroppen merker du det sterkest, og hvordan kjennes det – stramt, tungt, hult?"
    },
    "dp_exploratory-questions_case-sara_02": {
      text: "Jeg sier til venner at det går bra, mens halsen kjennes stram.",
      suggestion: "Hvis vi blir litt ved den stramme halsen, hva vil den fortelle deg om det som er vanskelig å si?"
    },
    "dp_exploratory-questions_case-sara_03": {
      text: "Kveldene føles endeløse, og jeg rydder og vasker for å holde meg opptatt.",
      suggestion: "Når du ser for deg i kveld, hvor i kroppen merker du trangen til å holde deg i gang, og hva skjer hvis vi blir med den i to rolige pust?"
    },
    "dp_exploratory-questions_case-sara_04": {
      text: "Jeg var nær ved å sende en beklagelse, selv om jeg ikke gjorde noe galt.",
      suggestion: "Hvis vi blir litt ved delen som vil beklage, hva håper den på, og hvilken frykt prøver den å roe?"
    },
    "dp_exploratory-questions_case-sara_05": {
      text: "Noen ganger sletter jeg bilder og leter så etter dem igjen.",
      suggestion: "Det er et dra–og–skyv her; hvis vi sitter med begge sider, hva vil hver del mest for deg akkurat nå?"
    },
    "dp_exploratory-questions_case-sara_06": {
      text: "Når noen er snille mot meg, ser jeg ned.",
      suggestion: "Når blikket faller, hvilken følelse ligger under vennligheten – og hvor i kroppen merker du den?"
    },
    "dp_exploratory-questions_case-sara_07": {
      text: "Jeg våkner, og så treffer det meg på nytt.",
      suggestion: "I det øyeblikket det kommer tilbake, hvilket signal sier at det er her igjen, og hvor lander det først i kroppen?"
    },
    "dp_exploratory-questions_case-sara_08": {
      text: "Jeg kjenner meg flau over at jeg fortsatt er så trist.",
      suggestion: "Hvor i deg sitter flauheten, og under den – hvilken følelse vil ha oppmerksomhet akkurat nå?"
    },
    "dp_exploratory-questions_case-sara_09": {
      text: "Når jeg ser par, verker det i brystet og jeg vil gå.",
      suggestion: "Kan vi bli litt ved den verken i ett pust – hvordan er den, og hva ser den ut til å lengte etter?"
    },
    "dp_exploratory-questions_case-sara_10": {
      text: "Jeg unngår steder vi pleide å dra.",
      suggestion: "Når du ser for deg ett av stedene, hvilket kroppssignal sier «ikke trygt», og hva ville gjort den delen én prosent tryggere?"
    },

    // Michael
    "dp_exploratory-questions_case-michael_01": {
      text: "Når noen retter på meg, skyter varmen opp i nakken.",
      suggestion: "I øyeblikket før varmen, hvilket lite glimt merker du i brystet eller halsen?"
    },
    "dp_exploratory-questions_case-michael_02": {
      text: "Et sukk fra kona får meg til å stritte imot.",
      suggestion: "Når du hører det sukket nå, hva skjer i kroppen, og hva ser det ut til å ville beskytte?"
    },
    "dp_exploratory-questions_case-michael_03": {
      text: "Etter at jeg eksploderer, får jeg en grop i magen.",
      suggestion: "Hvis den gropa hadde en størrelse, form eller noen ord, hvordan ville den vært?"
    },
    "dp_exploratory-questions_case-michael_04": {
      text: "Jeg skanner rom for respektløshet uten å mene det.",
      suggestion: "Når du ser for deg skanningen, hvor spenner det seg først, og hva beskytter den delen deg mest mot?"
    },
    "dp_exploratory-questions_case-michael_05": {
      text: "Å beklage får meg til å føle meg underlegen.",
      suggestion: "Hvor i kroppen kjenner du deg underlegen, og hva ville hjulpet det stedet å kjennes litt fastere?"
    },
    "dp_exploratory-questions_case-michael_06": {
      text: "Når jeg er usikker på et svar, strammer brystet seg.",
      suggestion: "Hvordan kjennes den stramheten nå – hard, varm, trang – og hva håper den å forhindre?"
    },
    "dp_exploratory-questions_case-michael_07": {
      text: "Jeg dobbeltkontrollerer alt for å unngå feil.",
      suggestion: "Når du ser for deg dobbeltkontrollen, hvilken frykt ligger nær, og hvor merker du den først?"
    },
    "dp_exploratory-questions_case-michael_08": {
      text: "Jeg smeller med dører i stedet for å si at jeg ble såret.",
      suggestion: "I hjerteslaget før smellet, hvilken smerte dukker opp, og hvordan kjennes den i kroppen?"
    },
    "dp_exploratory-questions_case-michael_09": {
      text: "Når noen sier jeg må roe meg, eksploderer jeg.",
      suggestion: "Når du hører de ordene inni deg nå, hvilket kroppssignal hopper først, og hvor lander det?"
    },
    "dp_exploratory-questions_case-michael_10": {
      text: "Jeg hater å føle meg svak.",
      suggestion: "Når du sier «svak» her, hvilket bilde eller hvilken sansing kommer, og hva ville hjulpet den delen å føle seg litt tryggere?"
    },

    // Jason
    "dp_exploratory-questions_case-jason_01": {
      text: "Når det er min tur til å snakke, strammer halsen seg og hodet blir blankt.",
      suggestion: "Hvis vi blir ved den stramme halsen i to langsomme pust, hva begynner å vise seg under blankheten, om så bare et hint?"
    },
    "dp_exploratory-questions_case-jason_02": {
      text: "Stemmen skjelver når jeg presenterer meg.",
      suggestion: "Legg merke til skjelvingen nå – hvor kjenner du den mest, og hva vil den at du skal gjøre?"
    },
    "dp_exploratory-questions_case-jason_03": {
      text: "Jeg øver på meldinger og sletter dem så.",
      suggestion: "I sekundet før du sletter, hvilken følelse er sterkest – frykt, skam – og hvor i kroppen er den?"
    },
    "dp_exploratory-questions_case-jason_04": {
      text: "Hvis noen ler, antar jeg at det er av meg.",
      suggestion: "Når du ser for deg den latteren, hva skjer i magen eller brystet akkurat nå?"
    },
    "dp_exploratory-questions_case-jason_05": {
      text: "Jeg unngår øyekontakt så folk ikke legger merke til meg.",
      suggestion: "Når blikket søker ned, hva sier kroppen om å bli sett – hva dukker opp først?"
    },
    "dp_exploratory-questions_case-jason_06": {
      text: "Etter møter krymper jeg meg i timevis.",
      suggestion: "Hvis vi velger ett sånt øyeblikk, hva er det verste bildet, og hvordan merker du det i kroppen?"
    },
    "dp_exploratory-questions_case-jason_07": {
      text: "Trange rom får meg til å lete etter utganger.",
      suggestion: "Akkurat nå, hva i kroppen sier «jeg må ut», og hvor kjenner du det?"
    },
    "dp_exploratory-questions_case-jason_08": {
      text: "Komplimenter fester seg ikke hos meg.",
      suggestion: "Når du prøver å la et vennlig ord lande, hvor spretter det av, og hva ser ut til å blokkere det?"
    },
    "dp_exploratory-questions_case-jason_09": {
      text: "Jeg sier jeg er opptatt for å slippe småprat.",
      suggestion: "Når du ser for deg småprat, hva er det skumleste, og hvor kjenner du det i kroppen?"
    },
    "dp_exploratory-questions_case-jason_10": {
      text: "Søndagskveldene kjennes tunge og ensomme.",
      suggestion: "Kan vi bli litt ved den tyngden i to pust – hvordan er kvaliteten i den, og hva ser den ut til å trenge mest?"
    },

    // Laura
    "dp_exploratory-questions_case-laura_01": {
      text: "De fleste dager kjennes dempet, som om jeg er bak glass.",
      suggestion: "Når du legger merke til glasset nå, hvor kjenner du det, og hva forteller deg at det er der – nummenhet, avstand, kjølighet?"
    },
    "dp_exploratory-questions_case-laura_02": {
      text: "Hevede stemmer får magen til å synke og skuldrene til å stramme seg.",
      suggestion: "Hvis vi blir litt ved fallet i ett pust, hvordan kjennes det, og hva advarer det deg om?"
    },
    "dp_exploratory-questions_case-laura_03": {
      text: "Når noen er snille, trekker jeg meg unna.",
      suggestion: "Når avstanden kommer, hvor går oppmerksomheten i kroppen, og hva vil den delen for deg?"
    },
    "dp_exploratory-questions_case-laura_04": {
      text: "Mild berøring skremmer meg fortsatt.",
      suggestion: "Legg merke til skvettingen – hvor tennes den først, og hva skjer deretter i kroppen?"
    },
    "dp_exploratory-questions_case-laura_05": {
      text: "Jeg drikker om kvelden for å skru av støyen.",
      suggestion: "Før første slurk, hvilken følelse er her, og hvor i kroppen merker du den mest nå?"
    },
    "dp_exploratory-questions_case-laura_06": {
      text: "Jeg våkner anspent, som om jeg står på vakt.",
      suggestion: "Skann kroppen – hva er mest spent, og hva kunne hjulpet det stedet å mykne én prosent nå?"
    },
    "dp_exploratory-questions_case-laura_07": {
      text: "Gode nyheter når ikke ordentlig inn.",
      suggestion: "Når gode nyheter kommer, hva står i veien inni, og hvilket lite tegn sier at noe positivt prøver å slippe gjennom?"
    },
    "dp_exploratory-questions_case-laura_08": {
      text: "Noen ganger sprekker noe opp i meg av en sang et lite øyeblikk.",
      suggestion: "Når du tenker på den sangen, hva kom gjennom sprekken, og hvordan kjente kroppen det?"
    },
    "dp_exploratory-questions_case-laura_09": {
      text: "Jeg beklager at jeg trenger trøst.",
      suggestion: "Hvor i deg bor den beklagelsen, og under den – hvilket behov vil bli navngitt akkurat nå?"
    },
    "dp_exploratory-questions_case-laura_10": {
      text: "Jeg unngår filmer med krangling og slåssing fordi kroppen ikke tåler det.",
      suggestion: "Når du ser for deg en slåssscene, hvilket kroppssignal sier «for mye», og hva hjelper det signalet å roe seg?"
    },

    // Carlos
    "dp_exploratory-questions_case-carlos_01": {
      text: "En bestemt tone fyrer meg opp på innsiden.",
      suggestion: "Når du hører den tonen for deg nå, hva tenner først – varme, spenning – og hvor merker du det?"
    },
    "dp_exploratory-questions_case-carlos_02": {
      text: "Jeg går frem og tilbake for å brenne det av.",
      suggestion: "Når du ser for deg at du går frem og tilbake, hva er den verste delen kroppen prøver å gå seg gjennom, og hva ville lette det én prosent?"
    },
    "dp_exploratory-questions_case-carlos_03": {
      text: "Hvis jeg trekker meg, føler jeg meg som ingenting.",
      suggestion: "La oss sitte litt med «ingenting» i ett pust – hvilket bilde følger med, og hvor kjenner du det mest?"
    },
    "dp_exploratory-questions_case-carlos_04": {
      text: "Sønnens sammenrykk går i loop i hodet mitt.",
      suggestion: "Når du ser ansiktet hans for deg nå, hvor gjør det mest vondt i kroppen, og hva vil det såre stedet at du gjør annerledes neste gang?"
    },
    "dp_exploratory-questions_case-carlos_05": {
      text: "Ro føles farlig, som å senke garden.",
      suggestion: "Når vi setter ord på «fare», hvor kjenner du den, og hva måtte roen inneholde for at den skulle kjennes sterk i stedet for svak?"
    },
    "dp_exploratory-questions_case-carlos_06": {
      text: "Jeg ødelegger ting så jeg ikke ødelegger folk.",
      suggestion: "I hjerteslaget før du slår, hva blinker gjennom deg, og hva vil det blinket beskytte mest?"
    },
    "dp_exploratory-questions_case-carlos_07": {
      text: "Jeg stoler ikke på å være myk.",
      suggestion: "Når «myk» dukker opp, hva betyr det på innsiden, og hvilken grense ville gjort det tryggere å prøve?"
    },
    "dp_exploratory-questions_case-carlos_08": {
      text: "Mangel på respekt kjennes som et slag.",
      suggestion: "Hvor lander det slaget først, og hva vil den delen som blir truffet at andre skal vite om deg?"
    },
    "dp_exploratory-questions_case-carlos_09": {
      text: "Jeg klemmer rattet til knokene blir hvite.",
      suggestion: "Akkurat nå, hvis hendene dine hadde ord, hva ville de sagt at de holder fast i?"
    },
    "dp_exploratory-questions_case-carlos_10": {
      text: "Jeg vil at familien min skal føle seg trygg med meg.",
      suggestion: "Når du holder på det ønsket, hvilken følelse stiger nå, og hvilket lite kroppssignal sier at trygghet er til stede?"
    },

    // Nina
    "dp_exploratory-questions_case-nina_01": {
      text: "Når jeg ber om hjelp, skyller skyld inn og jeg vil ta det tilbake.",
      suggestion: "Når vi legger merke til bølgen, hvor lander skylden først – hals, bryst – og hva anklager den deg for?"
    },
    "dp_exploratory-questions_case-nina_02": {
      text: "Jeg holder meg opptatt så jeg slipper å kjenne på bitterhet eller tristhet.",
      suggestion: "Hvis vi pauser travleheten i to pust, hva viser seg under, og hva trenger det akkurat nå?"
    },
    "dp_exploratory-questions_case-nina_03": {
      text: "Å si nei knyter magen.",
      suggestion: "Bli litt ved knuten – hvor stor er den, og hvilken frykt bærer den om hva som skjer hvis du sier nei?"
    },
    "dp_exploratory-questions_case-nina_04": {
      text: "Når jeg hviler, kaller en stemme meg lat.",
      suggestion: "Når det ordet lander, hvor kjenner du det, og hva vil du at den skamfulle delen skal høre fra deg?"
    },
    "dp_exploratory-questions_case-nina_05": {
      text: "Jeg beklager selv små forespørsler.",
      suggestion: "Når du ser for deg å spørre, hvilken yngre del er redd for å være en byrde, og hvor kjenner du den?"
    },
    "dp_exploratory-questions_case-nina_06": {
      text: "Jeg får hodepine når jeg er overveldet.",
      suggestion: "Akkurat nå – før hodepinen – hva er det første kroppssignalet du merker, og hvordan kunne én prosent lettelse se ut?"
    },
    "dp_exploratory-questions_case-nina_07": {
      text: "Jeg sammenligner meg med andre mødre og føler meg liten.",
      suggestion: "Når «liten» dukker opp, hvor i kroppen er den, og hva trenger den lille delen mest i dag?"
    },
    "dp_exploratory-questions_case-nina_08": {
      text: "Jeg drømmer om å bli tatt vare på og føler meg så egoistisk fordi jeg vil det.",
      suggestion: "Hvis vi blir litt ved ønsket, hvilken følelse følger med, og hva prøver «egoist»-delen å beskytte?"
    },
    "dp_exploratory-questions_case-nina_09": {
      text: "Jeg tar på meg alt så ingen blir skuffet.",
      suggestion: "Når du holder den byrden, hva er det tyngste stykket nå, og hvilken grense ville kroppen din takket deg for?"
    },
    "dp_exploratory-questions_case-nina_10": {
      text: "Jeg krasjer om kvelden etter å ha holdt meg sammen hele dagen.",
      suggestion: "Når du ser for deg krasjet, hvilken følelse slipper endelig gjennom, og hvordan kunne et mildt kveldsritual for den delen se ut?"
    },

    // Aisha
    "dp_exploratory-questions_case-aisha_01": {
      text: "Hvis et svar ikke kommer, føles det som om jeg faller.",
      suggestion: "Når fallet starter, hvor merker du det først, og hvordan kjennes det – fall, svimmelhet, tomhet?"
    },
    "dp_exploratory-questions_case-aisha_02": {
      text: "Jeg går fra «ikke forlat meg» til «la meg være i fred» på sekunder.",
      suggestion: "I pustet før det snur, hvilken følelse blinker gjennom – tap, raseri – og hvor kjenner du den?"
    },
    "dp_exploratory-questions_case-aisha_03": {
      text: "Noen ganger er tomheten så høylytt at jeg vil gjøre hva som helst for å stoppe den.",
      suggestion: "Kan vi sitte litt i kanten av tomheten – hvilken form eller temperatur har den, og hva ber den om?"
    },
    "dp_exploratory-questions_case-aisha_04": {
      text: "Når du ser bort, føler jeg meg droppet.",
      suggestion: "Når det droppet skjer, hvor gammel kjennes du da, og hva ville den unge delen trenge akkurat nå?"
    },
    "dp_exploratory-questions_case-aisha_05": {
      text: "Jeg klorer for å kjenne noe virkelig.",
      suggestion: "Når du setter ord på trangen, hvor i kroppen sitter tomheten, og hva hjelper det stedet å føle seg holdt?"
    },
    "dp_exploratory-questions_case-aisha_06": {
      text: "Hvis du avlyser, vil jeg ikke komme tilbake.",
      suggestion: "Når du ser for deg en avlysning, hvor kjenner du stikket, og hva kunne hjulpet det å føle seg holdt nok til å komme tilbake?"
    },
    "dp_exploratory-questions_case-aisha_07": {
      text: "Vennlighet får meg til å gråte og til å ville løpe.",
      suggestion: "I den trekkampen, hvilken del lengter etter å bli og hvilken del vil rømme – hva trenger hver av dem fra deg?"
    },
    "dp_exploratory-questions_case-aisha_08": {
      text: "Jeg tester folk for å se om de bryr seg.",
      suggestion: "Når du ser for deg en test, hvilken frykt prøver du å besvare, og hvordan ville det være å be direkte om omsorg – bare litt?"
    },
    "dp_exploratory-questions_case-aisha_09": {
      text: "Jeg hater meg selv etter at jeg slår ut.",
      suggestion: "Når du kjenner det selvhatet, hvor lander det i kroppen, og hva trenger den sårede delen under det mest?"
    },
    "dp_exploratory-questions_case-aisha_10": {
      text: "Avskjeder gjør meg svimmel.",
      suggestion: "Når svimmelheten kommer, hva hjelper føttene dine å finne gulvet, og hvilken følelse ligger under?"
    },

    // David
    "dp_exploratory-questions_case-david_01": {
      text: "Når hun kaller meg kald, blir kjeven som stein og brystet hardt.",
      suggestion: "Bli litt ved kjeven og brystet – hvilken følelse ligger under steinen, og hvor merker du den?"
    },
    "dp_exploratory-questions_case-david_02": {
      text: "Hvis jeg ikke vinner, føler jeg meg hul.",
      suggestion: "Når du legger merke til hulheten, hvilken størrelse eller tekstur har den, og hva ser den ut til å savne?"
    },
    "dp_exploratory-questions_case-david_03": {
      text: "Jeg glatter skjorta og ramser opp prestasjoner når jeg føler meg dømt.",
      suggestion: "Når du ser for deg at du gjør det, hvilken følelse tar du på rustning mot, og hvor dukker den først opp?"
    },
    "dp_exploratory-questions_case-david_04": {
      text: "Ros renner fort ut igjen.",
      suggestion: "Hvis vi holder et kompliment et sekund lenger, hvor lander det, og hva skyver det ut igjen?"
    },
    "dp_exploratory-questions_case-david_05": {
      text: "Å innrømme at jeg tar feil, får ansiktet til å brenne.",
      suggestion: "Legg merke til brenningen – hva er det redd for å bli sett som, og hvor i kroppen kjenner du den frykten?"
    },
    "dp_exploratory-questions_case-david_06": {
      text: "Jeg sjekker telefonen under vanskelige samtaler.",
      suggestion: "Når blikket faller til telefonen, hvilken følelse skyter opp, og hva kunne hjulpet den delen å bli ett pust lenger?"
    },
    "dp_exploratory-questions_case-david_07": {
      text: "Hvis barna protesterer, mister jeg det.",
      suggestion: "I pustet før du klikker, hva dukker opp inni – stikk, skam, frykt – og hvordan merker du det?"
    },
    "dp_exploratory-questions_case-david_08": {
      text: "Siden affæren kjennes nettene flate og tunge.",
      suggestion: "Når du legger merke til den flate tyngden, hvilken svak følelse lever under, og hva skulle den ønske at du kunne si?"
    },
    "dp_exploratory-questions_case-david_09": {
      text: "Jeg vil ha anerkjennelse for det jeg gjør.",
      suggestion: "Når du holder det ønsket, hvilken følelse stiger når anerkjennelsen ikke kommer, og hva trenger den følelsen mest fra dem?"
    },
    "dp_exploratory-questions_case-david_10": {
      text: "Jeg hater å være ordinær.",
      suggestion: "Når «ordinær» dukker opp, hva betyr det i kroppen, og hvilken lengsel peker det mot?"
    },

    // Marcus
    "dp_exploratory-questions_case-marcus_01": {
      text: "De fleste dager er jeg nummen, og så treffer en bølge ut av ingenting.",
      suggestion: "Hvis vi blir ved kanten før bølgen, hvilket signal sier at den kommer, og hvor kjenner du det?"
    },
    "dp_exploratory-questions_case-marcus_02": {
      text: "Mareritt rykker meg våken, og jeg føler meg både oppskrudd og tom.",
      suggestion: "Akkurat her med oppskrudd og tom – hva er sterkest nå, og hvordan merker du det i kroppen?"
    },
    "dp_exploratory-questions_case-marcus_03": {
      text: "Folkemengder gjør meg stram, så jeg holder meg nær utgangene.",
      suggestion: "Når du ser for deg en folkemengde, hvor i kroppen er spenningen høyest, og hvordan ville én prosent mer trygghet kjennes?"
    },
    "dp_exploratory-questions_case-marcus_04": {
      text: "Stillheten hjemme kjennes tung.",
      suggestion: "Hvor hviler tyngden, og hvis den hadde en vekt eller farge, hvordan ville den vært?"
    },
    "dp_exploratory-questions_case-marcus_05": {
      text: "Jeg sitter i bilen etter jobb for å slippe å gå opp.",
      suggestion: "Når du ser for deg at du sitter der, hvilken følelse er du ikke klar til å møte, og hva ville den trenge for å ta et lite steg?"
    },
    "dp_exploratory-questions_case-marcus_06": {
      text: "Jeg har lyset dempet og ignorerer telefoner.",
      suggestion: "Mens du legger merke til dempingen, hva sier kroppen om kontakt akkurat nå, og hvor finnes det det minste velkommen for nærhet?"
    },
    "dp_exploratory-questions_case-marcus_07": {
      text: "Gode øyeblikk kjennes uvirkelige, som om de er bak glass.",
      suggestion: "Hvis vi rører ved ett godt øyeblikk, hvor kjenner du det, og hva ser ut til å hindre det i å komme nærmere?"
    },
    "dp_exploratory-questions_case-marcus_08": {
      text: "Plutselige lyder får meg til å skvette.",
      suggestion: "Når du skvetter, hva kommer rett etter i kroppen, og hva hjelper deg å lande raskest?"
    },
    "dp_exploratory-questions_case-marcus_09": {
      text: "Jeg husker ikke sist jeg lo ordentlig.",
      suggestion: "Når du sier det, hvilken følelse dukker opp – tom, trist – og hvor lander den?"
    },
    "dp_exploratory-questions_case-marcus_10": {
      text: "En del av meg tenker at jeg har det best alene.",
      suggestion: "Hvis vi lytter til den delen, hva beskytter den deg mest mot, og hva ville den trenge for å våge et lite steg mot nærhet?"
    },

    // Behandlingsbegrunnelse i EFT (Providing Treatment Rationale)
    // Sara
    "dp_providing-treatment-rationale_case-sara_01": {
      text: "Jeg er redd for at det å snakke om følelser får meg til å spinne. Kan vi ikke bare holde det positivt?",
      suggestion: "Det gir mening å være redd for å spinne. I EFT går vi sakte og trygt så følelsene kan navngis og forstås; når de blir tydeligere, letter ensomheten og valgene blir flere."
    },
    "dp_providing-treatment-rationale_case-sara_02": {
      text: "Hvorfor fokusere på følelser og ikke mål og produktivitetstriks?",
      suggestion: "Siden du er så målrettet, er det et godt spørsmål. Følelser gir informasjon om behov og grenser; når vi lytter til dem, kan du sette mål som faktisk støtter deg."
    },
    "dp_providing-treatment-rationale_case-sara_03": {
      text: "Hvis jeg begynner å gråte, blir vi sittende fast der da?",
      suggestion: "Tårer gir mening her. Vi doserer i små porsjoner, ikke drukner i det; litt kontakt med følelsen hjelper den å bevege seg og viser hva som betyr mest for deg."
    },

    // Michael
    "dp_providing-treatment-rationale_case-michael_01": {
      text: "Jeg trenger sinnekontroll, ikke føleri. Hvordan hjelper det å snakke om følelser?",
      suggestion: "Det gir mening å ville ha kontroll. I EFT kartlegger vi hva sinnet beskytter, så du raskere merker stikket under og kan velge en mer stødig respons."
    },
    "dp_providing-treatment-rationale_case-michael_02": {
      text: "Er ikke dette å unnskylde dårlig oppførsel?",
      suggestion: "Fint at du sier det. Å forstå reaksjonene dine er ikke å unnskylde dem; det gir deg grep til å endre dem i de avgjørende øyeblikkene."
    },
    "dp_providing-treatment-rationale_case-michael_03": {
      text: "Hvorfor senke tempoet når jeg er under press til å levere?",
      suggestion: "Fordi noen sekunder saktere hjelper deg å merke første treff i brystet; den klarheten lar deg styre i stedet for å smelle."
    },

    // Jason
    "dp_providing-treatment-rationale_case-jason_01": {
      text: "Hjelper dette virkelig på sosial angst? Jeg vil bare bli tryggere.",
      suggestion: "Det gir mening å ville bli trygg fort. I EFT hjelper vi kroppen å gjenkjenne tidlige signaler på frykt og skam, så trygghet kan vokse innenfra."
    },
    "dp_providing-treatment-rationale_case-jason_02": {
      text: "Hva om jeg blir helt blank når du spør om følelser?",
      suggestion: "Blankhet er vanlig. Vi starter med enkel sansing så systemet ditt lærer at det er trygt å legge merke til litt og si litt av gangen."
    },
    "dp_providing-treatment-rationale_case-jason_03": {
      text: "Hvorfor bry seg om kroppssignaler?",
      suggestion: "Fordi kroppen er stedet angsten viser seg først. Å spore den gir oss et håndtak å jobbe med, ikke bare tanker om den."
    },

    // Laura
    "dp_providing-treatment-rationale_case-laura_01": {
      text: "Jeg tror dette er kjemisk. Hvordan skulle prat hjelpe?",
      suggestion: "Det synet gir mening. Vi kan likevel lindre ved å hjelpe systemet ditt å føle seg tryggere og ved forsiktig å navngi det som har vært holdt nede; mange merker stemningsskift når nervesystemet roer seg."
    },
    "dp_providing-treatment-rationale_case-laura_02": {
      text: "Jeg vil ikke gjenoppleve traumer.",
      suggestion: "Du blir ikke presset til å gjenoppleve noe. EFT jobber i små doser med jording, så du kan kjenne litt og komme tilbake, og bygge trygghet og valg."
    },
    "dp_providing-treatment-rationale_case-laura_03": {
      text: "Hva er poenget hvis jeg er nummen?",
      suggestion: "Nummenhet er en klok beskytter. Vi vil respektere den og lete etter små signaler under; selv litt bevissthet kan koble deg på igjen uten å overvelde."
    },

    // Carlos
    "dp_providing-treatment-rationale_case-carlos_01": {
      text: "Blir jeg myk av dette? Jeg må være sterk.",
      suggestion: "Styrke er viktig her. Å lære hva som treffer deg først er ikke mykhet; det er kontroll, fordi du kan velge før knyttnever eller ord flyr."
    },
    "dp_providing-treatment-rationale_case-carlos_02": {
      text: "Hvorfor snakke om følelser i stedet for å bare gi meg verktøy?",
      suggestion: "Verktøy virker best når de passer øyeblikket. Følelsesarbeid viser oss akkurat hva som trigges og hva som trengs, så verktøyet du bruker faktisk treffer."
    },
    "dp_providing-treatment-rationale_case-carlos_03": {
      text: "Hvordan hjelper dette meg på jobb når folk viser manglende respekt?",
      suggestion: "Vi kartlegger flammepunktet så du kan kjenne første støt av ydmykelse eller frykt og svare med fast, stødig selvrespekt i stedet for et utbrudd."
    },

    // Nina
    "dp_providing-treatment-rationale_case-nina_01": {
      text: "Er det ikke egoistisk å fokusere på følelsene mine?",
      suggestion: "Med din historie som omsorgsgiver gir den bekymringen mening. Å kjenne følelsene dine tydeliggjør behov og grenser, så du kan ta vare på andre på en bærekraftig måte."
    },
    "dp_providing-treatment-rationale_case-nina_02": {
      text: "Hva hjelper det å legge merke til kroppen?",
      suggestion: "Kroppen forteller tidlig når skyld eller tristhet dukker opp; å oppdage det lar deg stoppe opp, navngi det og velge, i stedet for å bli styrt av det."
    },
    "dp_providing-treatment-rationale_case-nina_03": {
      text: "Jeg vil bare ha konkrete steg.",
      suggestion: "Vi skal være konkrete. Kort fortalt peker følelser på behov; når vi hører dem, kan vi sette tydelige forespørsler og grenser."
    },

    // Aisha
    "dp_providing-treatment-rationale_case-aisha_01": {
      text: "Å snakke om å bli forlatt gjør meg panisk. Hvorfor skulle vi gå dit?",
      suggestion: "Det gir mening at det er skremmende. Vi går sakte og bare så langt du vil; å berøre litt av frykten med støtte kan redusere grepet og gi mer trygghet."
    },
    "dp_providing-treatment-rationale_case-aisha_02": {
      text: "Hva om du forlater meg, slik som alle andre?",
      suggestion: "Den frykten er viktig å navngi. En del av arbeidet er å bygge en pålitelig, forutsigbar prosess, så du kan teste og kjenne hvordan jevn støtte oppleves."
    },
    "dp_providing-treatment-rationale_case-aisha_03": {
      text: "Hvordan hjelper dette når jeg får lyst til å skade meg?",
      suggestion: "Vi kartlegger hva som leder frem til trangen og finner tryggere måter å lette det uutholdelige på; å navngi og berolige kjernesmerten senker behovet for å skade."
    },

    // David
    "dp_providing-treatment-rationale_case-david_01": {
      text: "Jeg vil ha prestasjonscoaching, ikke følelser.",
      suggestion: "Ønske om resultater gir mening. Følelsesarbeid gir deg dataene under reaksjonene, så du kan bli mer responsiv og mindre reaktiv–både hjemme og i lederskap."
    },
    "dp_providing-treatment-rationale_case-david_02": {
      text: "Jeg kan teorien. Hvorfor snakke om det her?",
      suggestion: "Kunnskap hjelper; øving endrer mønstre. Vi anvender det i levende øyeblikk så systemet ditt lærer en ny respons, ikke bare ideen om en."
    },
    "dp_providing-treatment-rationale_case-david_03": {
      text: "Kona er problemet. Hvorfor fokusere på meg?",
      suggestion: "Det er naturlig å se problemet der ute. Når vi jobber med dine indre triggere, får du påvirkningskraft uavhengig av hva andre gjør."
    },

    // Marcus
    "dp_providing-treatment-rationale_case-marcus_01": {
      text: "Prat endrer ikke det som har skjedd.",
      suggestion: "Sant, det endrer ikke fortiden. Det kan endre hvordan kroppen bærer den nå, så nummenhet og bølger blir mildere og livet åpner seg litt."
    },
    "dp_providing-treatment-rationale_case-marcus_02": {
      text: "Jeg vil ikke bli oversvømt.",
      suggestion: "Vi presser ikke. Vi jobber med jording og jobber i små steg så du kan kjenne litt, lande og bygge kontroll."
    },
    "dp_providing-treatment-rationale_case-marcus_03": {
      text: "Hvorfor merke kroppen når jeg helst vil ignorere den?",
      suggestion: "Fordi kroppen signaliserer fare eller lettelse før ordene gjør det; å lære de signalene lar deg styre tidligere og lide mindre."
    },

    // Empatiske utforskninger (Empathic Explorations)
    // Sara
    "dp_empathic-explorations_case-sara_01": {
      text: "Når jeg ser navnet hans dukke opp hvor som helst, synker magen og jeg føler meg liten.",
      suggestion: "Hvis vi blir litt ved det fallet i ett pust, hvor kjenner du det sterkest, og hvordan kjennes den litenheten på innsiden?"
    },
    "dp_empathic-explorations_case-sara_02": {
      text: "Jeg sier til venner at det går bra mens halsen kjennes stram.",
      suggestion: "Den stramme halsen er her nå; hvis vi dvæler litt, hva vil den fortelle deg om det som er vanskelig å si?"
    },
    "dp_empathic-explorations_case-sara_03": {
      text: "Kveldene føles endeløse, og jeg rydder for å holde meg opptatt.",
      suggestion: "Når du ser for deg i kveld, hvor i kroppen merker du trangen til å holde deg i gang, og hva skjer hvis vi blir ved den i to rolige pust?"
    },
    "dp_empathic-explorations_case-sara_04": {
      text: "Jeg var nær ved å sende en beklagelse, selv om jeg ikke gjorde noe galt.",
      suggestion: "Hvis vi blir litt ved delen som vil beklage, hva håper den på, og hvilken frykt prøver den å roe?"
    },
    "dp_empathic-explorations_case-sara_05": {
      text: "Noen ganger sletter jeg bilder og leter etter dem igjen.",
      suggestion: "Det er et dra–og–skyv der; hvis vi sitter med begge sider, hva vil hver del mest for deg akkurat nå?"
    },
    "dp_empathic-explorations_case-sara_06": {
      text: "Når noen er snille mot meg, ser jeg ned.",
      suggestion: "Når vi blir ved øyeblikket du ser ned, hvilken følelse dukker opp under vennligheten – om så bare en svak?"
    },
    "dp_empathic-explorations_case-sara_07": {
      text: "Jeg våkner, og så treffer det meg på nytt.",
      suggestion: "Akkurat i det morgenstøtet, hvor lander det i kroppen, og om det hadde en tekstur eller vekt, hvordan ville det kjennes?"
    },
    "dp_empathic-explorations_case-sara_08": {
      text: "Jeg kjenner meg flau over at jeg fortsatt er trist.",
      suggestion: "Når vi legger merke til flauheten, hvilken følelse ligger under, og hva ønsker den delen skulle bli forstått?"
    },
    "dp_empathic-explorations_case-sara_09": {
      text: "Å se par får brystet til å verke og jeg vil gå.",
      suggestion: "Kan vi bli litt ved den verken – hvordan er den, og hva ser den ut til å lengte etter?"
    },
    "dp_empathic-explorations_case-sara_10": {
      text: "Jeg vil ikke belaste noen med følelsene mine.",
      suggestion: "Hvis ‘belaste’-delen hadde en stemme, hva ville den si at den er redd skal skje hvis du slipper noen inn?"
    },

    // Michael
    "dp_empathic-explorations_case-michael_01": {
      text: "Når noen retter på meg, ringer det i ørene og kjeven låser seg.",
      suggestion: "Når du legger merke til ringing og låsing, hvilket aller første signal viser seg før varmen – hvor kjenner du det?"
    },
    "dp_empathic-explorations_case-michael_02": {
      text: "Jeg skanner rom for mangel på respekt uten å mene det.",
      suggestion: "Når du ser for deg skanningen, hva skjer i brystet eller magen, og hva prøver den delen å verne deg mest mot?"
    },
    "dp_empathic-explorations_case-michael_03": {
      text: "Etter et utbrudd er det en grop i magen jeg unngår.",
      suggestion: "Kan vi sitte litt ved den gropa – hvilken størrelse, form eller beskjed ville den hatt om den hadde noen ord?"
    },
    "dp_empathic-explorations_case-michael_04": {
      text: "Å beklage får meg til å kjenne meg én‑ned.",
      suggestion: "Når vi blir ved den én‑ned‑følelsen, hva minner den deg om, og hva trenger delen som motsetter seg å beklage akkurat da?"
    },
    "dp_empathic-explorations_case-michael_05": {
      text: "Et enkelt sukk fra kona setter meg av.",
      suggestion: "I sekundet før du reagerer, hvilket glimt dukker opp – stikk, skam, frykt – og hvor lander det?"
    },
    "dp_empathic-explorations_case-michael_06": {
      text: "Hvis jeg ikke kan svaret, spenner jeg meg.",
      suggestion: "Legg merke til spenningen nå; hvilke muskler strammer først, og hva håper stramheten å forhindre?"
    },
    "dp_empathic-explorations_case-michael_07": {
      text: "Jeg dobbeltkontrollerer alt for å unngå å bli tatt.",
      suggestion: "Når du ser for deg dobbeltkontrollen, hvilken følelse ligger under årvåkenheten, og hvordan ville det være å la den hvile 1 %?"
    },
    "dp_empathic-explorations_case-michael_08": {
      text: "Jeg hater å føle meg svak.",
      suggestion: "Hvis vi blir ved ‘svak’ i ett pust, hvilket bilde eller minne kommer, og hva vil den sterke delen mest for deg?"
    },
    "dp_empathic-explorations_case-michael_09": {
      text: "Noen ganger ligger jeg våken og spiller av hvert ord.",
      suggestion: "Hvis vi spiller av ett øyeblikk sammen, hvilket kroppssignal sier ‘dette er det verste’, og hva ber det signalet om?"
    },
    "dp_empathic-explorations_case-michael_10": {
      text: "Jeg vil ikke bli som faren min.",
      suggestion: "Når det ønsket dukker opp, hvilken følelse i deg er mest redd for å bli ham, og hvordan viser den seg nå?"
    },

    // Jason
    "dp_empathic-explorations_case-jason_01": {
      text: "Når det er min tur til å snakke, strammer halsen seg og hodet blir blankt.",
      suggestion: "Hvis vi blir ved den stramme halsen i to langsomme pust, hva begynner å vise seg under blankheten – om så bare et hint?"
    },
    "dp_empathic-explorations_case-jason_02": {
      text: "Jeg holder fingeren over ‘send’ og sletter meldingene mine.",
      suggestion: "Når du ser for deg øyeblikket, hvilken følelse griper mest – frykt, skam – og hvor merker du den først i kroppen?"
    },
    "dp_empathic-explorations_case-jason_03": {
      text: "Komplimenter fester seg ikke; jeg avfeier dem.",
      suggestion: "Hvis vi lar ett kompliment bli et sekund, hva gjør det vanskelig å ta det inn, og hva vil den skeptiske delen beskytte?"
    },
    "dp_empathic-explorations_case-jason_04": {
      text: "Jeg unngår øyekontakt så folk ikke legger merke til meg.",
      suggestion: "Når blikket senkes, hva skjer i bryst eller mage, og hva forestiller den delen seg ville skjedd om du ble sett?"
    },
    "dp_empathic-explorations_case-jason_05": {
      text: "Etter møter krymper jeg meg mens jeg spiller av små øyeblikk.",
      suggestion: "Kan vi bremse ved ett sånt øyeblikk – hva er det verste bildet, og hva frykter den krympende delen at det beviser om deg?"
    },
    "dp_empathic-explorations_case-jason_06": {
      text: "Når jeg går inn i et rom, ser jeg etter utgangen.",
      suggestion: "Når du legger merke til utgangen, hvilket signal sier at det ikke er trygt, og hvordan ville 1 % mer trygghet kjennes i kroppen?"
    },
    "dp_empathic-explorations_case-jason_07": {
      text: "Hendene svetter før jeg presenterer meg.",
      suggestion: "Bli ved svetten i ett pust – hva er budskapet i den, og hva trenger den delen av deg nå?"
    },
    "dp_empathic-explorations_case-jason_08": {
      text: "Jeg sammenligner meg med alle der.",
      suggestion: "Når sammenligningen skrus opp, hvilken følelse ligger under, og hva vil den følelsen mest for deg i øyeblikket?"
    },
    "dp_empathic-explorations_case-jason_09": {
      text: "Noen ganger later jeg som jeg tekster for å slippe småprat.",
      suggestion: "Hva er det skumleste ved småprat for deg, og hvor i kroppen merker du den frykten når vi setter ord på den?"
    },
    "dp_empathic-explorations_case-jason_10": {
      text: "Søndagskveldene kjennes tunge, og jeg utsetter å svare venner.",
      suggestion: "Hvis vi blir ved den tyngden, hva ser den ut til å handle om, og hvilket lite steg ville være vennlig mot den delen?"
    },

    // Laura
    "dp_empathic-explorations_case-laura_01": {
      text: "De fleste dager føles flate, og når en følelse flimrer, stenger jeg den ned.",
      suggestion: "Hvis vi berører kanten av flimringen, hvilken kvalitet har den – varm, tung, skarp – og hvor stor er den nå?"
    },
    "dp_empathic-explorations_case-laura_02": {
      text: "Hevede stemmer får magen til å falle og skuldrene til å stramme seg.",
      suggestion: "Hvis vi blir ved fallet i ett pust, hva advarer kroppen deg om, og hva ville gjort den 1 % tryggere nå?"
    },
    "dp_empathic-explorations_case-laura_03": {
      text: "Vennlighet får meg til å føle meg langt borte inni.",
      suggestion: "Når avstanden kommer, hvor kjenner du den, og om den hadde en hensikt – hva prøver den å gjøre for deg?"
    },
    "dp_empathic-explorations_case-laura_04": {
      text: "Jeg drikker vin om kvelden for å dempe støyen.",
      suggestion: "Før første slurk, hvilken følelse eller sansning dytter deg mot flasken, og hva ber den delen om i stedet?"
    },
    "dp_empathic-explorations_case-laura_05": {
      text: "Jeg våkner allerede anspent for dagen.",
      suggestion: "Skann kroppen nå – hva er mest spent, og hva ville det stedet trenge for å mykne litt?"
    },
    "dp_empathic-explorations_case-laura_06": {
      text: "Berøring skremmer meg, selv når den er mild.",
      suggestion: "Når du husker en mild berøring, hvor tennes skvettingen først, og hva frykter den skal skje etterpå?"
    },
    "dp_empathic-explorations_case-laura_07": {
      text: "Gode nyheter når ikke ordentlig inn.",
      suggestion: "Når noe godt kommer, hva står i veien inni, og hvilket lite tegn sier at noe positivt prøver å slippe gjennom?"
    },
    "dp_empathic-explorations_case-laura_08": {
      text: "Noen ganger sprekker noe opp i meg av musikk et lite øyeblikk.",
      suggestion: "Når du tenker på en sang som åpnet noe, hva kom gjennom sprekken, og hva ville den delen?"
    },
    "dp_empathic-explorations_case-laura_09": {
      text: "Jeg kjenner skyld for å trenge trøst.",
      suggestion: "La oss merke skylden først – hva anklager den deg for, og under den, hva ønsker den trengende delen seg?"
    },
    "dp_empathic-explorations_case-laura_10": {
      text: "Jeg unngår filmer med slåssing fordi kroppen ikke tåler det.",
      suggestion: "Hvis vi navngir ett kroppssignal som sier ‘for mye’, hva er det, og hva hjelper det signalet å roe seg nå?"
    },

    // Carlos
    "dp_empathic-explorations_case-carlos_01": {
      text: "En bestemt tone gjør brystet varmt og knyttnevene stramme.",
      suggestion: "Når vi blir ved varmen og stramheten, hva er første antydning under – smerte, ydmykelse – og hvordan merker du den?"
    },
    "dp_empathic-explorations_case-carlos_02": {
      text: "Jeg går frem og tilbake for å brenne det av.",
      suggestion: "Når du ser for deg at du går, hva er den verste delen kroppen prøver å komme gjennom, og hva ville den trenge for å senke farten 1 %?"
    },
    "dp_empathic-explorations_case-carlos_03": {
      text: "Hvis jeg trekker meg, føler jeg meg som ingenting.",
      suggestion: "La oss sitte med ‘ingenting’ i ett pust – hvilket bilde følger med, og hva vil delen som hater å trekke seg, for deg?"
    },
    "dp_empathic-explorations_case-carlos_04": {
      text: "Sønnens sammenrykk går i reprise i hodet mitt.",
      suggestion: "Når du ser ansiktet hans nå, hvor gjør det mest vondt i kroppen, og hva vil det såre stedet at du gjør annerledes?"
    },
    "dp_empathic-explorations_case-carlos_05": {
      text: "Ro føles farlig, som å senke garden.",
      suggestion: "Når vi setter ord på ‘fare’, hvor kjenner du den, og hva måtte roen inneholde for at den skulle kjennes sterk i stedet for svak?"
    },
    "dp_empathic-explorations_case-carlos_06": {
      text: "Jeg ødelegger ting så jeg ikke ødelegger folk.",
      suggestion: "I sekundet før du svinger, hva blinker gjennom, og hva vil det blinket beskytte mest?"
    },
    "dp_empathic-explorations_case-carlos_07": {
      text: "Jeg stoler ikke på å være myk.",
      suggestion: "Når ‘myk’ dukker opp, hva betyr det i kroppen, og hvilken grense ville gjort det tryggere å prøve?"
    },
    "dp_empathic-explorations_case-carlos_08": {
      text: "Mangel på respekt kjennes som et slag.",
      suggestion: "Hvis vi pauser ved ‘slaget’, hvor lander det først, og hva vil den delen som blir truffet at noen visste om deg?"
    },
    "dp_empathic-explorations_case-carlos_09": {
      text: "Jeg vil at familien skal føle seg trygge med meg.",
      suggestion: "Når du holder ønsket, hvilken følelse stiger nå, og hvilket lite kroppssignal forteller at trygghet er til stede?"
    },
    "dp_empathic-explorations_case-carlos_10": {
      text: "Jeg lærte tidlig aldri å være den lille.",
      suggestion: "Hvis vi blir ved den læresetningen, hvor gammel kjennes du, og hva trengte den yngre delen da – som den fortsatt trenger nå?"
    },

    // Nina
    "dp_empathic-explorations_case-nina_01": {
      text: "Når jeg ber om hjelp, skyller skyld inn og jeg vil ta det tilbake.",
      suggestion: "Når vi merker bølgen, hvor lander skylden først – hals, bryst – og hva anklager den deg for?"
    },
    "dp_empathic-explorations_case-nina_02": {
      text: "Jeg holder meg opptatt så jeg slipper å kjenne bitterhet eller tristhet.",
      suggestion: "Hvis vi pauser travleheten i to pust, hvilken følelse kikker frem, og hva trenger den akkurat nå?"
    },
    "dp_empathic-explorations_case-nina_03": {
      text: "Å si nei knyter magen.",
      suggestion: "Bli litt ved knuten – hvor stor er den, og hvilken frykt bærer den for hva som skjer hvis du sier nei?"
    },
    "dp_empathic-explorations_case-nina_04": {
      text: "Jeg beklager selv små forespørsler.",
      suggestion: "Når du ser for deg å beklage, hvilken yngre del er redd for å være en byrde, og hva vil du at den skal høre fra deg?"
    },
    "dp_empathic-explorations_case-nina_05": {
      text: "Hvis huset er rotete, føler jeg meg som en som feiler.",
      suggestion: "Når vi sitter med ‘feile’, hvordan kjennes det ordet i kroppen, og hvem lærte deg den regelen?"
    },
    "dp_empathic-explorations_case-nina_06": {
      text: "Jeg får hodepine når jeg er overveldet.",
      suggestion: "Akkurat nå, når du tenker på overveldelse, hvor merker du første signal, og hvordan kunne 1 % lettelse se ut for kroppen?"
    },
    "dp_empathic-explorations_case-nina_07": {
      text: "Jeg drømmer om å bli tatt vare på, og føler meg egoistisk for å ville det.",
      suggestion: "Hvis vi blir litt ved ønsket, hvilken følelse følger med, og hva frykter ‘egoist’-delen vil skje?"
    },
    "dp_empathic-explorations_case-nina_08": {
      text: "Jeg tar på meg alt så ingen blir skuffet over meg.",
      suggestion: "Når du holder den byrden, hva er det tyngste stykket nå, og hvilken grense ville kroppen din takket deg for?"
    },
    "dp_empathic-explorations_case-nina_09": {
      text: "Jeg sammenligner meg med andre mødre og føler meg liten.",
      suggestion: "Når ‘liten’ dukker opp, hvor i kroppen er den, og hva trenger den lille delen mest i dag?"
    },
    "dp_empathic-explorations_case-nina_10": {
      text: "Jeg krasjer om kvelden etter å ha holdt meg sammen hele dagen.",
      suggestion: "Når du ser for deg krasjet, hvilken følelse slipper endelig gjennom, og hvordan kunne et mildt kveldsritual for den delen se ut?"
    },

    // Aisha
    "dp_empathic-explorations_case-aisha_01": {
      text: "Hvis et svar ikke kommer, kjennes det som et hull åpner seg i brystet og jeg får ikke puste.",
      suggestion: "Hvis vi blir ved kanten av det hullet, hvor sitter pusten fast, og hva trenger den redde delen akkurat nå?"
    },
    "dp_empathic-explorations_case-aisha_02": {
      text: "Jeg går fra ‘ikke forlat meg’ til ‘la meg være i fred’ på sekunder.",
      suggestion: "I pustet før det snur, hvilken følelse blinker – tap, raseri – og hva vil den at du skal gjøre for å kjenne deg trygg?"
    },
    "dp_empathic-explorations_case-aisha_03": {
      text: "Noen ganger klorer jeg for å kjenne noe virkelig.",
      suggestion: "Når du setter ord på trangen, hvor i kroppen sitter tomheten, og om den hadde form eller temperatur – hvordan er den?"
    },
    "dp_empathic-explorations_case-aisha_04": {
      text: "Når du ser bort, føler jeg meg droppet.",
      suggestion: "Hvis vi blir ved droppet i ett sakte pust, hvor gammel kjennes du, og hva trengte den yngre delen da?"
    },
    "dp_empathic-explorations_case-aisha_05": {
      text: "Jeg tester folk for å se om de bryr seg.",
      suggestion: "Når du ser for deg en test, hvilken frykt prøver du å svare på, og hvordan ville det være å be direkte om omsorg – bare litt?"
    },
    "dp_empathic-explorations_case-aisha_06": {
      text: "Avskjeder gjør meg svimmel.",
      suggestion: "Når svimmelheten kommer, hvor finner føttene gulvet, og hva trenger du å høre for å kjenne at jeg fortsatt er med deg?"
    },
    "dp_empathic-explorations_case-aisha_07": {
      text: "Vennlighet får meg både til å hulke og til å ville løpe.",
      suggestion: "Når begge deler er der, hvilken del vil suge til seg vennligheten og hvilken vil rømme – hva trenger hver av dem fra deg nå?"
    },
    "dp_empathic-explorations_case-aisha_08": {
      text: "Jeg føler meg skitten på grunn av det som ble gjort mot meg.",
      suggestion: "Hvis vi forsiktig berører delen som føler seg forurenset, hvilke ord eller bilder bærer den, og hva vil den aller helst at jeg skal vite?"
    },
    "dp_empathic-explorations_case-aisha_09": {
      text: "Jeg stirrer på døra for å være sikker på at du ikke avslutter tidlig.",
      suggestion: "Når øynene holder på døra, hva frykter den årvåkne delen ville skje hvis den slapp opp i ett pust?"
    },
    "dp_empathic-explorations_case-aisha_10": {
      text: "Hvis du avlyser, vil jeg ikke komme tilbake.",
      suggestion: "La oss bli litt ved stikket i en avlysning – hvor kjenner du det, og hva ville hjulpet den delen å føle seg holdt nok til å komme tilbake?"
    },

    // David
    "dp_empathic-explorations_case-david_01": {
      text: "Når hun sier jeg er kald, brenner ansiktet og brystet blir hardt.",
      suggestion: "Når vi merker brenningen og hardheten, hvilken smerte ligger like under, og hva ber den om som er vanskelig å vise?"
    },
    "dp_empathic-explorations_case-david_02": {
      text: "Hvis jeg ikke er best, føler jeg meg hul.",
      suggestion: "La oss sitte litt ved hulheten – hvilken størrelse eller tekstur har den, og hva ser det ut til at den savner mest?"
    },
    "dp_empathic-explorations_case-david_03": {
      text: "Jeg glatter skjorta og ramser opp prestasjoner når jeg føler meg dømt.",
      suggestion: "Når du ser for deg at du retter deg opp, hvilken følelse tar du på rustning mot, og hvordan ville det være å la meg se 1 % av den?"
    },
    "dp_empathic-explorations_case-david_04": {
      text: "Ros føles godt og renner så ut igjen.",
      suggestion: "Hvis vi holder igjen ett lite kompliment et sekund lenger, hvor lander det, og hva gjør det vanskelig å beholde?"
    },
    "dp_empathic-explorations_case-david_05": {
      text: "Jeg sjekker telefonen i vanskelige samtaler.",
      suggestion: "I det øyeblikket blikket faller, hvilken følelse skyter opp, og hva ville hjulpet den delen å bli litt lenger?"
    },
    "dp_empathic-explorations_case-david_06": {
      text: "Barnas tårer gjør meg utålmodig.",
      suggestion: "Når du ser for deg tårene, hva skjer i kroppen, og hva trenger den utålmodige delen for å kunne mykne?"
    },
    "dp_empathic-explorations_case-david_07": {
      text: "Å innrømme feil får ansiktet til å brenne.",
      suggestion: "Bli ved brenningen i ett pust – hva er den redd for å bli sett som, og hva ville du ønske ble forstått om deg der?"
    },
    "dp_empathic-explorations_case-david_08": {
      text: "Siden affæren kjennes nettene flate og tunge.",
      suggestion: "Når du merker de flate, tunge nettene, hvilken svak følelse lever under, og hva skulle den ønske du kunne si?"
    },
    "dp_empathic-explorations_case-david_09": {
      text: "Jeg vil ha anerkjennelse for det jeg gjør.",
      suggestion: "Når du holder ønsket, hvilken følelse stiger når anerkjennelsen uteblir, og hva trenger den mest fra de du er glad i?"
    },
    "dp_empathic-explorations_case-david_10": {
      text: "Jeg hater å være ordinær.",
      suggestion: "Når ‘ordinær’ dukker opp, hva betyr det i kroppen, og hvilken lengsel peker det mot?"
    },

    // Marcus
    "dp_empathic-explorations_case-marcus_01": {
      text: "De fleste dager er jeg nummen, og så treffer en bølge ut av ingenting.",
      suggestion: "Det finnes en kant før bølgen; hvis vi holder oss nær den kanten, hvilket kroppssignal sier at den kommer, og hva hjelper deg å ri 1 % nå?"
    },
    "dp_empathic-explorations_case-marcus_02": {
      text: "Mareritt rykker meg våken, og jeg føler meg både oppskrudd og tom.",
      suggestion: "Akkurat her med oppskrudd og tom – hvilken er sterkest nå, og hva trenger den delen av oss i dette øyeblikket?"
    },
    "dp_empathic-explorations_case-marcus_03": {
      text: "Folkemengder gjør meg stram, så jeg holder meg i utkanten.",
      suggestion: "Når du ser for deg kanten, hvor i kroppen er spenningen høyest, og hvordan ville trygghet kjennes der i ett pust?"
    },
    "dp_empathic-explorations_case-marcus_04": {
      text: "Stillheten i leiligheten kjennes tung.",
      suggestion: "Når den tunge stillheten lander, hvor kjenner du den mest, og om den hadde en vekt eller farge – hvordan ville den vært?"
    },
    "dp_empathic-explorations_case-marcus_05": {
      text: "Jeg sitter i bilen etter jobb for å slippe å gå opp.",
      suggestion: "Når du ser for deg at du sitter der, hvilken følelse er du ikke klar til å møte, og hva ville den trenge for å ta ett lite steg mot døra?"
    },
    "dp_empathic-explorations_case-marcus_06": {
      text: "Jeg har lyset dempet og unngår telefoner.",
      suggestion: "Når du ser for deg dempet lys, hva sier kroppen om kontakt akkurat nå, og hvor finnes det det minste velkommen for forbindelse?"
    },
    "dp_empathic-explorations_case-marcus_07": {
      text: "Gode øyeblikk kjennes uvirkelige, som om de er bak glass.",
      suggestion: "Hvis vi holder én liten god ting, hvordan registrerer kroppen den, og hva blokkerer den fra å komme nærmere?"
    },
    "dp_empathic-explorations_case-marcus_08": {
      text: "Plutselige lyder får meg til å skvette.",
      suggestion: "Bli ved skvettingen i ett pust – hva dukker opp rett etter, og hva hjelper deg å lande raskest da?"
    },
    "dp_empathic-explorations_case-marcus_09": {
      text: "Jeg tar ikke telefonen når familien ringer fordi jeg ikke vil føle.",
      suggestion: "Når du legger merke til unngåelsen, hvilken følelse venter på den andre siden av samtalen, og hvordan kunne støtte se ut for å berøre 1 % av den?"
    },
    "dp_empathic-explorations_case-marcus_10": {
      text: "En del av meg tenker at jeg har det best alene for alltid.",
      suggestion: "Hvis vi sitter vennlig med den delen, hva beskytter den deg mest mot, og hva ville den trenge for å våge et lite steg mot nærhet?"
    },

    // Empatisk fremkalling (Empathic Evocations)
    // Sara
    "dp_empathic-evocations_case-sara_01": {
      text: "Kveldene trekker ut, og leiligheten føles for stor bare for meg.",
      suggestion: "Nettene blir lange, og rommene kjennes for store – med ekko av ensomhet."
    },
    "dp_empathic-evocations_case-sara_02": {
      text: "Jeg holder den muntre stemmen på, og under kjennes brystet hult.",
      suggestion: "En lys stemme over et uthult bryst, som et smil over en verkende smerte."
    },
    "dp_empathic-evocations_case-sara_03": {
      text: "Å se jakken hans i skapet treffer som en bølge.",
      suggestion: "Det skyller inn som en bølge idet blikket ditt fanger jakken."
    },
    "dp_empathic-evocations_case-sara_04": {
      text: "Jeg våkner og glemmer et sekund, så smeller det tilbake.",
      suggestion: "Det ene sekundet av lys, og så smeller tyngden ned igjen som en dør."
    },
    "dp_empathic-evocations_case-sara_05": {
      text: "Når venner spør, avfeier jeg det, men halsen strammer seg.",
      suggestion: "Et uanstrengt skuldertrekk utenpå, mens halsen snører seg inni."
    },
    "dp_empathic-evocations_case-sara_06": {
      text: "Jeg scroller sent på kvelden til øynene brenner.",
      suggestion: "Sene nattescroller – øyne som brenner mens du prøver å løpe fra smerten."
    },
    "dp_empathic-evocations_case-sara_07": {
      text: "Å høre sangen vår i en butikk gjorde knærne svake.",
      suggestion: "De første tonene tar beina vekk under deg."
    },
    "dp_empathic-evocations_case-sara_08": {
      text: "Jeg tenker stadig at hvis jeg var annerledes, ville jeg ikke vært alene.",
      suggestion: "Det lander som en dom over verdien din – tung og ubarmhjertig."
    },
    "dp_empathic-evocations_case-sara_09": {
      text: "Noen ganger sitter jeg på gulvet og holder rundt knærne bare for å kjenne meg holdt.",
      suggestion: "Krøllet rundt deg selv, en liten sirkel av varme i et kaldt rom."
    },
    "dp_empathic-evocations_case-sara_10": {
      text: "Når du er snill mot meg, vil jeg se bort.",
      suggestion: "Vennlighet kjennes skarp, nesten for sterk – du vender blikket bort fra lyset."
    },

    // Michael
    "dp_empathic-evocations_case-michael_01": {
      text: "En korrigering foran teamet får ansiktet til å brenne.",
      suggestion: "Ansiktet brenner hett, som om alle øyne er en lyskaster på en feil."
    },
    "dp_empathic-evocations_case-michael_02": {
      text: "Jeg går inn allerede anspent, klar for at noen skal trå feil.",
      suggestion: "Du treffer dørstokken i rustning, kjeven satt, og skanner etter neste treff."
    },
    "dp_empathic-evocations_case-michael_03": {
      text: "Kjeven verker av all spenningen innen dagen er over.",
      suggestion: "Den verken forteller hvor hardt du har bitt ned på smerten."
    },
    "dp_empathic-evocations_case-michael_04": {
      text: "Jeg smeller, og så henger skammen som en vekt.",
      suggestion: "Skammen legger seg på deg som en tung frakk du ikke får av."
    },
    "dp_empathic-evocations_case-michael_05": {
      text: "Når kona sukker, kjennes det som et slag.",
      suggestion: "Et lite sukk som lander som et svirrende slag over brystet."
    },
    "dp_empathic-evocations_case-michael_06": {
      text: "Jeg hører «ro deg ned», og noe eksploderer i meg.",
      suggestion: "De ordene antenner en lysbrann som skyter opp før du rekker å ta den igjen."
    },
    "dp_empathic-evocations_case-michael_07": {
      text: "Hvis jeg ikke vet svaret, synker magen.",
      suggestion: "Å ikke vite sender magen i fritt fall – som en heis som stuper."
    },
    "dp_empathic-evocations_case-michael_08": {
      text: "Jeg smeller igjen dører fordi det føles bedre enn å føle meg liten.",
      suggestion: "Smellet er stort og høyt for å dekke over det lille stikket inni."
    },
    "dp_empathic-evocations_case-michael_09": {
      text: "Å beklage smaker av rust i munnen.",
      suggestion: "En unnskyldning smaker metallisk og bittert på tungen."
    },
    "dp_empathic-evocations_case-michael_10": {
      text: "Om natten spiller jeg det av igjen, og jeg får ikke løsnet.",
      suggestion: "Du ligger stram som en streng og spiller scenen i en løkke som ikke stopper."
    },

    // Jason
    "dp_empathic-evocations_case-jason_01": {
      text: "Når det er min tur, høres navnet mitt langt borte og leppene blir numne.",
      suggestion: "Idet navnet lander, blir leppene numne og rommet trekker seg unna."
    },
    "dp_empathic-evocations_case-jason_02": {
      text: "Hendene svetter så mye at jeg gjemmer dem under bordet.",
      suggestion: "Svetthender gjemt bort, som om du prøver å gjøre deg mindre."
    },
    "dp_empathic-evocations_case-jason_03": {
      text: "Jeg øver foran speilet og fryser likevel.",
      suggestion: "All øving, og så fryser det til – som is."
    },
    "dp_empathic-evocations_case-jason_04": {
      text: "Hvis noen ler, rykker magen til.",
      suggestion: "En latter i nærheten rykker til i magen som et kort elektrisk støt."
    },
    "dp_empathic-evocations_case-jason_05": {
      text: "Jeg krymper meg i stolen når lyset nærmer seg meg.",
      suggestion: "Du folder deg innover idet lyset sveiper mot deg."
    },
    "dp_empathic-evocations_case-jason_06": {
      text: "Komplimenter glir av; jeg får ikke tak i dem.",
      suggestion: "Ros glir rett av som regn på glass."
    },
    "dp_empathic-evocations_case-jason_07": {
      text: "Søndagskvelder kjennes rommet grått og for stille.",
      suggestion: "En grå stillhet siger inn og legger seg over alt."
    },
    "dp_empathic-evocations_case-jason_08": {
      text: "Når jeg sender meldinger, skriver og sletter jeg til fingrene verker.",
      suggestion: "Skriving og sletting, verkende fingre, mens uroen går i ring."
    },
    "dp_empathic-evocations_case-jason_09": {
      text: "Stemmen skjelver allerede ved «hei».",
      suggestion: "Selv et «hei» kommer ut på en skjelvende tråd."
    },
    "dp_empathic-evocations_case-jason_10": {
      text: "Jeg stirrer på utgangen som en livline.",
      suggestion: "Døra kjennes som en livline som øynene dine klamrer seg til."
    },

    // Laura
    "dp_empathic-evocations_case-laura_01": {
      text: "De fleste morgener kjennes flate, som om fargene er vasket ut.",
      suggestion: "Alt i utvaskede toner, som om fargen er drenert."
    },
    "dp_empathic-evocations_case-laura_02": {
      text: "En dør som smeller gjør huden min kald.",
      suggestion: "Lyden sender en kald bølge over huden."
    },
    "dp_empathic-evocations_case-laura_03": {
      text: "Når noen sitter tett på, driver jeg noen skritt bakover på innsiden.",
      suggestion: "Du flyter bak en glassrute inne i deg."
    },
    "dp_empathic-evocations_case-laura_04": {
      text: "Jeg glemmer hvordan glede kjennes i kroppen.",
      suggestion: "Glede er som et fjernt minne kroppen ikke helt når."
    },
    "dp_empathic-evocations_case-laura_05": {
      text: "Vin hjelper meg å skru av støyen.",
      suggestion: "Vinen slår av bryteren og demper hele rommet på innsiden."
    },
    "dp_empathic-evocations_case-laura_06": {
      text: "Jeg ligger våken og føler jeg står vakt.",
      suggestion: "På vakt selv i senga, kroppen postert ved døra."
    },
    "dp_empathic-evocations_case-laura_07": {
      text: "Noen ganger sprekker en trist sang noe opp i meg et øyeblikk.",
      suggestion: "En tone slipper inn og lager en liten sprekk i nummenheten."
    },
    "dp_empathic-evocations_case-laura_08": {
      text: "Jeg går i hyllene bare for å slippe å dra hjem.",
      suggestion: "Driver gjennom hyllene som i et trygt, nøytralt rom."
    },
    "dp_empathic-evocations_case-laura_09": {
      text: "Gode ord får halsen til å verke.",
      suggestion: "Varmen stryker borti deg, og halsen verker av berøringen."
    },
    "dp_empathic-evocations_case-laura_10": {
      text: "Jeg har en liten bag pakket – i tilfelle.",
      suggestion: "En bag ved døra, som om kroppen aldri helt går av vakt."
    },

    // Carlos
    "dp_empathic-evocations_case-carlos_01": {
      text: "Et skjevt glis over bordet får hendene til å dirre.",
      suggestion: "Det gliset setter hendene i dirring som strømførende ledninger."
    },
    "dp_empathic-evocations_case-carlos_02": {
      text: "Brystet kjennes stramt som et trommeskinn før det sprekker.",
      suggestion: "Stramt som et trommeskinn spent til bristepunktet."
    },
    "dp_empathic-evocations_case-carlos_03": {
      text: "Jeg går frem og tilbake på kjøkkenet for å brenne det av.",
      suggestion: "Du går harde streker i kjøkkenet, prøver å riste varmen ut."
    },
    "dp_empathic-evocations_case-carlos_04": {
      text: "Blikket til gutten min, redd, slo hull i meg.",
      suggestion: "Det redde ansiktet hans slo et hull tvers igjennom deg."
    },
    "dp_empathic-evocations_case-carlos_05": {
      text: "Rolige folk ser myke ut for meg.",
      suggestion: "Ro leses som myk – uten rustning – farlig i din verden."
    },
    "dp_empathic-evocations_case-carlos_06": {
      text: "Etter at jeg eksploderer, kjennes rommet mindre.",
      suggestion: "Etter smellet kjennes huset lite og luftløst."
    },
    "dp_empathic-evocations_case-carlos_07": {
      text: "Jeg biter tennene så hardt at hodet dunker.",
      suggestion: "Tennene låst så stramt at smerten trommer i tinningene."
    },
    "dp_empathic-evocations_case-carlos_08": {
      text: "Hvis jeg trekker meg, føles det som jeg forsvinner.",
      suggestion: "Å trekke seg kjennes som å blekne ut, miste konturene."
    },
    "dp_empathic-evocations_case-carlos_09": {
      text: "Jeg klemmer rattet til knokene blir hvite.",
      suggestion: "Hvite knoker på rattet – holder deg selv sammen."
    },
    "dp_empathic-evocations_case-carlos_10": {
      text: "Jeg vil ikke at ungen min skal huske meg sånn.",
      suggestion: "Du kjenner verket – som et blåmerke – ønsket om å være en tryggere mann i øynene hans."
    },

    // Nina
    "dp_empathic-evocations_case-nina_01": {
      text: "Skyld slår meg i det jeg setter meg.",
      suggestion: "Den slår som en summer i det du hviler."
    },
    "dp_empathic-evocations_case-nina_02": {
      text: "Det er som om jeg bærer alles bager – og min egen.",
      suggestion: "Armer fulle av alles bager, skuldre som brenner."
    },
    "dp_empathic-evocations_case-nina_03": {
      text: "Magen vrir seg når jeg ber om hjelp.",
      suggestion: "Å be vrir magen i en stram knute."
    },
    "dp_empathic-evocations_case-nina_04": {
      text: "Jeg smiler gjennom hodepine og fortsetter å gå.",
      suggestion: "Et smil strekt over et dunkende hode mens du holder det gående."
    },
    "dp_empathic-evocations_case-nina_05": {
      text: "Mot kvelden kjennes knoklene tunge.",
      suggestion: "Tunge knokler, som å vasse i våt betong."
    },
    "dp_empathic-evocations_case-nina_06": {
      text: "Når jeg sier nei, banker hjertet som om jeg har gjort noe galt.",
      suggestion: "Et bankende hjerte – som en alarm, bare for å ha sagt nei."
    },
    "dp_empathic-evocations_case-nina_07": {
      text: "Jeg vasker benken ved midnatt fordi jeg ikke får ro.",
      suggestion: "Midnattsvasking – som om en ren benk kunne stilne støyen."
    },
    "dp_empathic-evocations_case-nina_08": {
      text: "Hvis huset er rotete, kryper skammen oppover halsen.",
      suggestion: "Skam kryper varmt oppover halsen bare av å se en tallerken ute."
    },
    "dp_empathic-evocations_case-nina_09": {
      text: "Jeg gråter stille i spiskammeret så ingen hører.",
      suggestion: "Tårer gjemt i spiskammeret, dempet bak en dør."
    },
    "dp_empathic-evocations_case-nina_10": {
      text: "Noen ganger drømmer jeg om en dag uten å gjøre noe – uten dårlig samvittighet.",
      suggestion: "Du ser for deg en myk dag uten gjøremål, og kroppen løsner bare ved tanken."
    },

    // Aisha
    "dp_empathic-evocations_case-aisha_01": {
      text: "Når du ser på klokka, synker magen.",
      suggestion: "Ett blikk på klokka, og magen faller ut."
    },
    "dp_empathic-evocations_case-aisha_02": {
      text: "Jeg går fra «ikke gå» til «la meg være i fred» på sekunder.",
      suggestion: "Det snur som en bryter – fra bønn til brann i et blunk."
    },
    "dp_empathic-evocations_case-aisha_03": {
      text: "Tomheten brenner som et hull i brystet.",
      suggestion: "Et brennende hull i brystet som virker bunnløst."
    },
    "dp_empathic-evocations_case-aisha_04": {
      text: "Jeg klorer i huden for å kjenne noe virkelig.",
      suggestion: "Klorer for å finne noe virkelig gjennom nummenhet og smerte."
    },
    "dp_empathic-evocations_case-aisha_05": {
      text: "Hvis skrivprikkene kommer og forsvinner, får jeg ikke puste.",
      suggestion: "De tre prikkene forsvinner – og pusten låser seg."
    },
    "dp_empathic-evocations_case-aisha_06": {
      text: "Et farvel gjør meg svimmel.",
      suggestion: "Et farvel får rommet til å tippe og spinne."
    },
    "dp_empathic-evocations_case-aisha_07": {
      text: "Når du avlyser, føles det som gulvet åpner seg.",
      suggestion: "En avlysning, og gulvet åpner seg under føttene dine."
    },
    "dp_empathic-evocations_case-aisha_08": {
      text: "Jeg hører «for mye» i hodet som et stempel.",
      suggestion: "Ordene «for mye» stemplet over hjertet."
    },
    "dp_empathic-evocations_case-aisha_09": {
      text: "Varmen får tårene til å renne ut av ingenting.",
      suggestion: "Litt varme – og tårene renner som et plutselig regn."
    },
    "dp_empathic-evocations_case-aisha_10": {
      text: "Jeg stirrer på døra for å være sikker på at du er her.",
      suggestion: "Øynene låst på døra – vokter mot at noen forsvinner."
    },

    // David
    "dp_empathic-evocations_case-david_01": {
      text: "Når hun kaller meg kald, blir kjeven steinhard.",
      suggestion: "Kjeven blir som stein mens ordet «kald» brenner seg inn."
    },
    "dp_empathic-evocations_case-david_02": {
      text: "Hvis jeg ikke vinner, kjennes brystet hult.",
      suggestion: "Uten seieren kjennes brystet som et tomt rom."
    },
    "dp_empathic-evocations_case-david_03": {
      text: "Jeg blåser meg opp når jeg føler meg liten.",
      suggestion: "Du blåser deg stor for å dekke det lille stikket inni."
    },
    "dp_empathic-evocations_case-david_04": {
      text: "Jeg glatter skjorta og ramser opp prestasjonene når jeg er trengt opp i et hjørne.",
      suggestion: "Retter på skjorta, ramser opp CV-en som rustningsplater."
    },
    "dp_empathic-evocations_case-david_05": {
      text: "Ros kjennes godt et øyeblikk og renner så ut.",
      suggestion: "Beundring fyller deg for et øyeblikk og renner så ut som vann gjennom en sil."
    },
    "dp_empathic-evocations_case-david_06": {
      text: "Jeg hater uttrykket i barnas ansikter når jeg smeller.",
      suggestion: "Det blikket treffer som et slag du skulle ønske du kunne stoppe."
    },
    "dp_empathic-evocations_case-david_07": {
      text: "Jeg melder meg ut av harde samtaler ved å se på telefonen.",
      suggestion: "Øynene faller til skjermen som et skjold å gjemme seg bak."
    },
    "dp_empathic-evocations_case-david_08": {
      text: "Å si «jeg tar feil» får ansiktet til å brenne.",
      suggestion: "Ordene gjør ansiktet varmt – som blottlagt hud."
    },
    "dp_empathic-evocations_case-david_09": {
      text: "Jeg går rundt i huset om natta når jeg føler meg dømt.",
      suggestion: "Nattlig vandring – prøver å gå av deg stikket av å bli dømt."
    },
    "dp_empathic-evocations_case-david_10": {
      text: "Etter affæren kjennes huset kaldere.",
      suggestion: "Huset kjennes kaldere, som om varmen snek seg ut gjennom en sprekk."
    },

    // Marcus
    "dp_empathic-evocations_case-marcus_01": {
      text: "Jeg beveger meg gjennom dagen som et spøkelse.",
      suggestion: "Spøkelsesaktig gjennom dagen, knapt spor etter deg."
    },
    "dp_empathic-evocations_case-marcus_02": {
      text: "Folkemengder får skuldrene opp til ørene.",
      suggestion: "Skuldre som klatrer opp mot ørene, muskler på vakt."
    },
    "dp_empathic-evocations_case-marcus_03": {
      text: "Jeg sitter med ryggen mot veggen.",
      suggestion: "Rygg mot vegg, øynene skanner utganger."
    },
    "dp_empathic-evocations_case-marcus_04": {
      text: "Mareritt røsker meg våken og etterlater meg summende.",
      suggestion: "Dratt ut av søvnen, summende som en strømførende ledning."
    },
    "dp_empathic-evocations_case-marcus_05": {
      text: "Stillheten hjemme kjennes som en vekt på brystet.",
      suggestion: "Stillhet som presser på brystet som en tung plate."
    },
    "dp_empathic-evocations_case-marcus_06": {
      text: "Gode øyeblikk føles langt borte, som bak glass.",
      suggestion: "Det gode bak glass – nært og utilgjengelig."
    },
    "dp_empathic-evocations_case-marcus_07": {
      text: "Jeg holder lyset lavt så jeg slipper å se så mye.",
      suggestion: "Dempet lys – holder verden myk og på avstand."
    },
    "dp_empathic-evocations_case-marcus_08": {
      text: "Hvis noen banker på, hamrer hjertet.",
      suggestion: "Et bank på døra får hjertet til å hamre hardt."
    },
    "dp_empathic-evocations_case-marcus_09": {
      text: "Jeg holder pusten når jeg snakker om det.",
      suggestion: "Holder pusten som om luft kunne slippe smerten inn."
    },
    "dp_empathic-evocations_case-marcus_10": {
      text: "Noen netter sitter jeg i bilen så jeg slipper å gå opp.",
      suggestion: "Du blir sittende i bilen som i en stille bunker før du går opp."
    },

    // Empatiske antakelser (Empathic Conjectures)
    // Sara
    "dp_empathic-conjectures_case-sara_01": {
      text: "Jeg sier hele tiden til vennene mine at det går bra så de ikke skal bekymre seg.",
      suggestion: "Du prøver å skåne dem; jeg lurer på om en del også frykter at det å trenge dem betyr at du er for mye eller ikke verdt det."
    },
    "dp_empathic-conjectures_case-sara_02": {
      text: "Jeg kastet meg inn i jobb for å slippe å tenke på ham.",
      suggestion: "Du holder deg opptatt for å klare deg; kanskje ligger det under en frykt for at stillheten skal bekrefte at du ikke var verdt å bli hos."
    },
    "dp_empathic-conjectures_case-sara_03": {
      text: "Jeg føler meg teit for at jeg fortsatt gråter flere måneder etterpå.",
      suggestion: "Du blir frustrert over tårene; jeg gjetter at det også kan ligge skam i det å trenge og bli sett."
    },
    "dp_empathic-conjectures_case-sara_04": {
      text: "Når noen spør hvordan jeg har det, smiler jeg og skifter tema.",
      suggestion: "Du beveger deg raskt vekk; kan det være at det også finnes en var lengsel etter å bli valgt som er vanskelig å vise?"
    },
    "dp_empathic-conjectures_case-sara_05": {
      text: "Når jeg ser par, himler jeg med øynene og sier at kjærlighet er oppskrytt.",
      suggestion: "Du skyver det unna; jeg lurer på om det bak himlingen ligger en verking etter nærhet."
    },
    "dp_empathic-conjectures_case-sara_06": {
      text: "Jeg sluttet å følge ham og sjekket så fra en venns telefon.",
      suggestion: "Du prøver å beskytte deg og strekke deg samtidig; kanskje er det en kamp i deg mellom selvbeskyttelse og håp."
    },
    "dp_empathic-conjectures_case-sara_07": {
      text: "Jeg sier til meg selv at andre har ekte problemer, så jeg burde være takknemlig.",
      suggestion: "Du nedtoner smerten; jeg gjetter at en redd del frykter å bli avfeid hvis du lar den synes."
    },
    "dp_empathic-conjectures_case-sara_08": {
      text: "Jeg var nær ved å sende ham ‘unnskyld’ selv om jeg ikke gjorde noe galt.",
      suggestion: "Du strekker deg for å reparere; kan det være at du prøver å roe en skam som sier at det må være din skyld?"
    },
    "dp_empathic-conjectures_case-sara_09": {
      text: "Nettene er verst; jeg spiller om igjen hva jeg gjorde feil.",
      suggestion: "Du spiller av for å få mening; jeg lurer på om det under finnes en yngre del som prøver å fortjene å bli værende."
    },
    "dp_empathic-conjectures_case-sara_10": {
      text: "Når du er snill mot meg, ser jeg ned og vil bytte tema.",
      suggestion: "Vennlighet lander sterkt; kanskje lengter en del etter den, mens en annen forventer at den forsvinner."
    },

    // Michael
    "dp_empathic-conjectures_case-michael_01": {
      text: "Hvis noen stiller spørsmål ved meg i et møte, biter jeg tilbake.",
      suggestion: "Du kommer inn hardt; jeg lurer på om det under varmen ligger et stikk av å bli sett som ikke god nok."
    },
    "dp_empathic-conjectures_case-michael_02": {
      text: "Jeg tåler ikke å bli rettet på foran andre.",
      suggestion: "Det treffer brutalt; kanskje er det et glimt av ydmykelse som sinnet legger lokk på."
    },
    "dp_empathic-conjectures_case-michael_03": {
      text: "Kona sier jeg er hard; jeg kaller det bare ærlighet.",
      suggestion: "Du verdsetter rett‑på‑sak; jeg gjetter at det også finnes en frykt for å bli sett som svak hvis du mykner."
    },
    "dp_empathic-conjectures_case-michael_04": {
      text: "Jeg sørger for at ingen har noe over meg.",
      suggestion: "Du beskytter posisjonen din; kan det være en uro for å havne én‑ned slik som før?"
    },
    "dp_empathic-conjectures_case-michael_05": {
      text: "Å beklage kjennes som å gi fra seg terreng.",
      suggestion: "Det kjennes risikabelt; jeg lurer på om det berører et lite, skamfullt sted du helst vil skjule."
    },
    "dp_empathic-conjectures_case-michael_06": {
      text: "Jeg hater å miste kontroll.",
      suggestion: "Kontroll betyr mye; kanskje ligger det under en frykt for at feil beviser noe dårlig om deg."
    },
    "dp_empathic-conjectures_case-michael_07": {
      text: "Jeg dobbeltkontrollerer alles arbeid så jeg ikke blir tatt på senga.",
      suggestion: "Du forutser trusler; jeg gjetter at en del forventer å få skylden."
    },
    "dp_empathic-conjectures_case-michael_08": {
      text: "Etter at jeg eksploderer, unngår jeg blikket til ungen min.",
      suggestion: "Du kjenner tyngden; kan det være skam som gjør det vanskelig å se ham i øynene?"
    },
    "dp_empathic-conjectures_case-michael_09": {
      text: "Når noen sier «ro deg ned», ser jeg rødt.",
      suggestion: "Det treffer hardt; jeg lurer på om det lander som å bli avfeid eller gjort liten."
    },
    "dp_empathic-conjectures_case-michael_10": {
      text: "Jeg driver ikke med følelser; jeg driver med løsninger.",
      suggestion: "Du lener deg på å fikse; kanskje kjennes følelser som feller som kan blottlegge et sårt sted."
    },

    // Jason
    "dp_empathic-conjectures_case-jason_01": {
      text: "Jeg øver på hva jeg skal si, og blir likevel blank.",
      suggestion: "Du forbereder deg hardt; jeg lurer på om blankheten beskytter deg mot en fryktet skam."
    },
    "dp_empathic-conjectures_case-jason_02": {
      text: "Jeg later som jeg er opptatt når jeg blir invitert.",
      suggestion: "Du unngår; kanskje finnes det en del som forventer å bli dømt eller oversett."
    },
    "dp_empathic-conjectures_case-jason_03": {
      text: "Jeg hører en stemme som sier «ikke drit deg ut».",
      suggestion: "Du hører kritikeren; jeg gjetter at den prøver å beskytte deg mot å kjenne deg liten."
    },
    "dp_empathic-conjectures_case-jason_04": {
      text: "Etter at jeg har snakket, krymper jeg meg i timevis.",
      suggestion: "Du krymper deg; kan det være en sorg over å ville bli tatt imot?"
    },
    "dp_empathic-conjectures_case-jason_05": {
      text: "Komplimenter kjennes falske for meg.",
      suggestion: "De preller av; jeg lurer på om det er vanskelig å slippe inn varme fordi det ikke passer med det gamle bildet."
    },
    "dp_empathic-conjectures_case-jason_06": {
      text: "Å se selvsikre folk får meg til å ville forsvinne.",
      suggestion: "Du krymper; kanskje er det både misunnelse og sorg over å føle seg på utsiden."
    },
    "dp_empathic-conjectures_case-jason_07": {
      text: "Hvis noen ler, antar jeg at det er av meg.",
      suggestion: "Du spenner deg; jeg gjetter at det finnes et sårt sted som forventer å bli gjort narr av."
    },
    "dp_empathic-conjectures_case-jason_08": {
      text: "Jeg skriver en melding og sletter før jeg sender.",
      suggestion: "Du redigerer; kan det være en frykt for å bli sett som kjemper med et ønske om kontakt?"
    },
    "dp_empathic-conjectures_case-jason_09": {
      text: "Jeg drikker før arrangementer for å løsne opp.",
      suggestion: "Du søker lindring; jeg lurer på om en mykere, redd del trenger beskyttelse."
    },
    "dp_empathic-conjectures_case-jason_10": {
      text: "Jeg holder munn selv når jeg har en god idé.",
      suggestion: "Du holder igjen; kanskje finnes det en dypere tro på at synlighet betyr fare."
    },

    // Laura
    "dp_empathic-conjectures_case-laura_01": {
      text: "Vennlighet gjør meg mistenksom.",
      suggestion: "Du trekker deg unna; jeg lurer på om nærhet vekker en gammel frykt for svik."
    },
    "dp_empathic-conjectures_case-laura_02": {
      text: "Når stemmer heves, stivner kroppen.",
      suggestion: "Kroppen din husker fare; kanskje kommer frykten før hodet rekker å forstå."
    },
    "dp_empathic-conjectures_case-laura_03": {
      text: "Jeg kjenner skyld for at jeg ikke føler så mye.",
      suggestion: "Du dømmer nummenheten; jeg gjetter at den beskytter en veldig sår sorg."
    },
    "dp_empathic-conjectures_case-laura_04": {
      text: "Jeg unngår filmer med familiekonflikter.",
      suggestion: "Du styrer unna; kan det være for å unngå å vekke gammel frykt og skam?"
    },
    "dp_empathic-conjectures_case-laura_05": {
      text: "Noen ganger stirrer jeg i veggen og føler ingenting.",
      suggestion: "Du blir flat; jeg lurer på om det kjennes tryggere enn å kjenne verken av å være alene."
    },
    "dp_empathic-conjectures_case-laura_06": {
      text: "Jeg sier til meg selv «ikke treng noen».",
      suggestion: "Du skyver behov vekk; kanskje lengter en del etter å bli holdt og er redd for det."
    },
    "dp_empathic-conjectures_case-laura_07": {
      text: "Når noen tar meg på skulderen, skvetter jeg.",
      suggestion: "Kroppen din skvetter; jeg gjetter at den lærte at berøring kunne bety fare."
    },
    "dp_empathic-conjectures_case-laura_08": {
      text: "Jeg er redd for at jeg er ødelagt.",
      suggestion: "Du frykter det; kan det være skammen fra det som skjedde med deg som snakker?"
    },
    "dp_empathic-conjectures_case-laura_09": {
      text: "Jeg holder livet veldig lite.",
      suggestion: "Du holder det tett; jeg lurer på om det er en måte å kontrollere risiko og unngå gammel smerte."
    },
    "dp_empathic-conjectures_case-laura_10": {
      text: "Jeg beklager at jeg gråter; det føles svakt.",
      suggestion: "Du beklager; kanskje berører gråt en tro på at du ville blitt klandret for å trenge omsorg."
    },

    // Carlos
    "dp_empathic-conjectures_case-carlos_01": {
      text: "En respektløs tone slår på en bryter i meg.",
      suggestion: "Den snur deg raskt; jeg lurer på om det under varmen er et glimt av ydmykelse."
    },
    "dp_empathic-conjectures_case-carlos_02": {
      text: "Hvis jeg trekker meg, tror de jeg er svak.",
      suggestion: "Du vokter status; kanskje finnes det en yngre del som nekter å bli liten igjen."
    },
    "dp_empathic-conjectures_case-carlos_03": {
      text: "Jeg tåler ikke å bli fortalt hva jeg skal gjøre.",
      suggestion: "Det skjærer; jeg gjetter at det berører en gammel frykt for å bli kontrollert."
    },
    "dp_empathic-conjectures_case-carlos_04": {
      text: "Sønnen min så meg smelle igjen en dør; jeg følte meg kvalm etterpå.",
      suggestion: "Du bryr deg dypt; kan det være skam og frykt for å bli som faren din."
    },
    "dp_empathic-conjectures_case-carlos_05": {
      text: "Etter en krangel klarer jeg ikke å se kona i øynene.",
      suggestion: "Du unngår blikket hennes; jeg lurer på om det berører anger og ømhet."
    },
    "dp_empathic-conjectures_case-carlos_06": {
      text: "Jeg blåser meg opp når noen utfordrer meg.",
      suggestion: "Du tar på rustning; kanskje for å dekke over et øyeblikk av å føle deg mindre‑verdig."
    },
    "dp_empathic-conjectures_case-carlos_07": {
      text: "Jeg knuser ting så jeg ikke skader folk.",
      suggestion: "Du prøver å beskytte; jeg gjetter at sinnet tar over for å blokkere smerten."
    },
    "dp_empathic-conjectures_case-carlos_08": {
      text: "Rolige menn virker som noen man kan tråkke på for meg.",
      suggestion: "Du likestiller ro med svakhet; kan det være at ro føles farlig fordi det ikke var trygt før."
    },
    "dp_empathic-conjectures_case-carlos_09": {
      text: "Jeg spiller mangel på respekt om igjen i flere dager.",
      suggestion: "Du grubler; jeg lurer på om det holder ydmykelsen på avstand fra å synke inn."
    },
    "dp_empathic-conjectures_case-carlos_10": {
      text: "Jeg vil gjøre det bedre for familien min.",
      suggestion: "Du vil endring; kanskje finnes det en var del som lengter etter å få være trygg nok til å elske."
    },

    // Nina
    "dp_empathic-conjectures_case-nina_01": {
      text: "Å hvile får meg til å føle meg egoistisk.",
      suggestion: "Du føler deg egoistisk; jeg lurer på om en del lærte at kjærlighet måtte fortjenes."
    },
    "dp_empathic-conjectures_case-nina_02": {
      text: "Jeg sier ja og blir så bitter.",
      suggestion: "Du sier ja; kanskje forteller sinnet om udekte behov for støtte."
    },
    "dp_empathic-conjectures_case-nina_03": {
      text: "Når jeg ber om hjelp, beklager jeg.",
      suggestion: "Du beklager; jeg gjetter at det finnes en frykt for å bli avvist for å trenge noe."
    },
    "dp_empathic-conjectures_case-nina_04": {
      text: "Hvis huset er rotete, føler jeg meg som en fiasko.",
      suggestion: "Du føler deg som en fiasko; kan det være skam knyttet til å være ‘god’ gjennom å gjøre?"
    },
    "dp_empathic-conjectures_case-nina_05": {
      text: "Jeg blir engstelig hvis noen virker skuffet over meg.",
      suggestion: "Du spenner deg; jeg lurer på om det vekker en gammel frykt for å miste kjærlighet."
    },
    "dp_empathic-conjectures_case-nina_06": {
      text: "Jeg svelger sinnet mitt fordi det ikke er pent.",
      suggestion: "Du svelger det; kanskje tror en yngre del at dine behov er feil."
    },
    "dp_empathic-conjectures_case-nina_07": {
      text: "Jeg tar vare på alle og føler meg så usynlig.",
      suggestion: "Du føler deg usynlig; jeg gjetter at det ligger en lengsel etter også å bli tatt vare på."
    },
    "dp_empathic-conjectures_case-nina_08": {
      text: "Jeg klarer ikke å si nei uten å bli kvalm.",
      suggestion: "Du blir kvalm; kan det være en beskytter som prøver å holde tilknytning trygg?"
    },
    "dp_empathic-conjectures_case-nina_09": {
      text: "Jeg sier til meg selv at andre har det verre.",
      suggestion: "Du nedtoner din smerte; jeg lurer på om det er en måte å forbli ‘akseptabel’ ved å skyve din ned."
    },
    "dp_empathic-conjectures_case-nina_10": {
      text: "Hvis jeg roer ned, kjenner jeg en klump i halsen.",
      suggestion: "Du kjenner klumpen; kanskje er sorgen nær og ber om å bli lagt merke til."
    },

    // Aisha
    "dp_empathic-conjectures_case-aisha_01": {
      text: "Hvis du ser på klokka, føler jeg meg forlatt.",
      suggestion: "Du kjenner fallet; jeg lurer på om det vekker en gammel skrekk for å bli alene."
    },
    "dp_empathic-conjectures_case-aisha_02": {
      text: "Da han ikke svarte, gikk jeg fra trist til rasende.",
      suggestion: "Du svinger fort; kanskje raseriet skynder seg inn for å beskytte et veldig rått sår."
    },
    "dp_empathic-conjectures_case-aisha_03": {
      text: "Noen ganger vil jeg klore meg på armene for å kjenne noe.",
      suggestion: "Du vil ha lindring; jeg gjetter at det ligger en uutholdelig tomhet under."
    },
    "dp_empathic-conjectures_case-aisha_04": {
      text: "Jeg ber folk om ikke å forlate meg og så eksploderer jeg på dem.",
      suggestion: "Du ber og skyver; kan det være at både lengselen og frykten er enorme?"
    },
    "dp_empathic-conjectures_case-aisha_05": {
      text: "Hvis du avlyser, vil jeg ikke komme tilbake.",
      suggestion: "Det stikker; jeg lurer på om det kjennes tryggere å avvise først enn å risikere å bli droppet."
    },
    "dp_empathic-conjectures_case-aisha_06": {
      text: "Jeg tenker at jeg er for mye for noen.",
      suggestion: "Du føler deg for mye; kanskje er det skammen fra det du ble utsatt for som taler."
    },
    "dp_empathic-conjectures_case-aisha_07": {
      text: "Vennlighet får meg til å hulke og ville løpe.",
      suggestion: "Det lander stort; jeg gjetter at en del lengter etter det, mens en annen forventer at det forsvinner."
    },
    "dp_empathic-conjectures_case-aisha_08": {
      text: "Jeg tester folk for å se om de bryr seg.",
      suggestion: "Du tester; kanskje prøver du å bevise at du betyr noe før du våger å stole på."
    },
    "dp_empathic-conjectures_case-aisha_09": {
      text: "Jeg hater meg selv etter at jeg slår ut.",
      suggestion: "Du blir hard mot deg selv; jeg lurer på om det dekker en sorg over hvor alene du føler deg."
    },
    "dp_empathic-conjectures_case-aisha_10": {
      text: "Jeg får panikk når jeg sier hadet.",
      suggestion: "Farvel trigger panikk; kanskje berører det den gamle frykten for at ingen kommer tilbake."
    },

    // David
    "dp_empathic-conjectures_case-david_01": {
      text: "Når kona mi sier jeg er kald, blir jeg sarkastisk.",
      suggestion: "Du blir skarp; jeg lurer på om det under den kanten ligger et stikk av å bli sett som ikke nok."
    },
    "dp_empathic-conjectures_case-david_02": {
      text: "Jeg liker ikke å bli fortalt hva jeg skal gjøre.",
      suggestion: "Du stritter imot; kanskje kjennes det ut som å bli gjort liten eller kontrollert."
    },
    "dp_empathic-conjectures_case-david_03": {
      text: "Hvis jeg ikke kan være best, hvorfor prøve.",
      suggestion: "Du sikter høyt; jeg gjetter at det finnes en frykt for at ordinær betyr uverdig."
    },
    "dp_empathic-conjectures_case-david_04": {
      text: "Jeg planlegger store gester og føler meg tom etterpå.",
      suggestion: "Du planlegger; kan det være at beundring ikke når inn til delen som vil bli sett for den du er?"
    },
    "dp_empathic-conjectures_case-david_05": {
      text: "Å beklage får meg til å krympe meg.",
      suggestion: "Det kjennes ydmykende; jeg lurer på om det treffer en gammel skam ved å ta feil."
    },
    "dp_empathic-conjectures_case-david_06": {
      text: "Jeg sjekker telefonen under vanskelige samtaler.",
      suggestion: "Du søker utvei; kanskje kjennes nærhet farlig når du forventer å bli vurdert."
    },
    "dp_empathic-conjectures_case-david_07": {
      text: "Jeg skryter når jeg føler meg utrygg.",
      suggestion: "Du pumper deg opp; jeg gjetter at det dekker over et sårbart sted."
    },
    "dp_empathic-conjectures_case-david_08": {
      text: "Hvis barna ikke respekterer meg, mister jeg det.",
      suggestion: "Respekt betyr mye; kan det være at motstand prikker i frykten for å mislykkes som far?"
    },
    "dp_empathic-conjectures_case-david_09": {
      text: "Jeg hater å bli misforstått av kona mi.",
      suggestion: "Du hater det; jeg lurer på om det under sinnet ligger en sorg over ikke å bli kjent."
    },
    "dp_empathic-conjectures_case-david_10": {
      text: "Jeg unngår terapioppgaver; det føles meningsløst.",
      suggestion: "Du unngår; kanskje finnes det en del som er redd for hva du kan finne hvis du senker tempoet."
    },

    // Marcus
    "dp_empathic-conjectures_case-marcus_01": {
      text: "Jeg føler ingenting de fleste dager.",
      suggestion: "Du kjennes flat; jeg lurer på om nummenheten beskytter mye smerte."
    },
    "dp_empathic-conjectures_case-marcus_02": {
      text: "Jeg sover med TV‑en på.",
      suggestion: "Du overdøver stillheten; kanskje bringer stillheten minner og sorg nærmere."
    },
    "dp_empathic-conjectures_case-marcus_03": {
      text: "Jeg sitter med ryggen mot veggen.",
      suggestion: "Du søker trygghet; jeg gjetter at kroppen fortsatt står i beredskap for fare."
    },
    "dp_empathic-conjectures_case-marcus_04": {
      text: "Jeg svarer ikke når søsteren min ringer.",
      suggestion: "Du holder avstand; kan det være at det gjør følelsene mer håndterlige."
    },
    "dp_empathic-conjectures_case-marcus_05": {
      text: "Høye lyder får meg til å skvette, og så blir jeg sint på meg selv.",
      suggestion: "Du skvetter og dømmer; jeg lurer på om sinnet dekker skam over å være sårbar."
    },
    "dp_empathic-conjectures_case-marcus_06": {
      text: "Gode ting føles uvirkelige.",
      suggestion: "De kjennes uvirkelige; kanskje åpner det å slippe inn det gode også døra til tap."
    },
    "dp_empathic-conjectures_case-marcus_07": {
      text: "Jeg drikker noen ganger for å slå meg selv ut.",
      suggestion: "Du slår deg ut; jeg gjetter at det er for å holde mareritt og følelser unna."
    },
    "dp_empathic-conjectures_case-marcus_08": {
      text: "Jeg holder lyset lavt hjemme.",
      suggestion: "Du holder det dempet; kan det være at lys og klarhet kjennes for avslørende."
    },
    "dp_empathic-conjectures_case-marcus_09": {
      text: "Jeg husker ikke sist jeg lo.",
      suggestion: "Du kan ikke huske; jeg lurer på om glede kjennes risikabelt etter så mye tap."
    },
    "dp_empathic-conjectures_case-marcus_10": {
      text: "En del av meg tenker at jeg har det bedre alene.",
      suggestion: "Den delen beskytter; kanskje den frykter å såre eller bli såret igjen."
    },

    // Være i kontakt med intens affekt (Staying in Contact with Intense Affect)
    // Sara
    "dp_staying-in-contact-intense-affect_case-sara_01": {
      text: "Å snakke om bruddet får meg til å gråte og jeg føler at jeg mister kontrollen.",
      suggestion: "Jeg er her. La oss senke pusten sammen og kjenne føttene i gulvet. Vi berører en liten bit av dette og trekker oss tilbake hvis det blir for mye."
    },
    "dp_staying-in-contact-intense-affect_case-sara_02": {
      text: "Nettene er uutholdelige og brystet verker som om det skal sprekke.",
      suggestion: "Ja, det er mye. Vær med meg i to rolige pust, hånd på brystet hvis det hjelper, og legg merke til verket litt mens du kjenner stolen holde deg."
    },
    "dp_staying-in-contact-intense-affect_case-sara_03": {
      text: "Jeg vil skyve det vekk fordi sorgen føles endeløs.",
      suggestion: "Det gir mening. Bare et øyeblikk lar vi en dråpe av sorgen være her mens vi holder én fot i rommet. Si fra hvis det stiger for høyt."
    },

    // Michael
    "dp_staying-in-contact-intense-affect_case-michael_01": {
      text: "Når noen konfronterer meg, skyter sinnet opp og jeg klarer ikke stoppe det.",
      suggestion: "Jeg er med deg. Kjenn føttene, slipp kjeven, senk skuldrene. Ta én rolig pust og legg merke til første stikk under varmen uten å dømme det."
    },
    "dp_staying-in-contact-intense-affect_case-michael_02": {
      text: "Jeg føler meg ydmyket når jeg spiller det av igjen, og brystet er stramt.",
      suggestion: "Stramheten viser hvor hardt dette treffer. Vær med meg og pust lavt ned i magen. Vi kjenner litt på stikket og trekker oss hvis det topper seg."
    },
    "dp_staying-in-contact-intense-affect_case-michael_03": {
      text: "En del av meg vil gå ut av rommet nå.",
      suggestion: "Takk for at du sier det. Én hånd på stolen, én på brystet, og to pust sammen–så kan vi bli ved en liten del på en trygg måte."
    },

    // Jason
    "dp_staying-in-contact-intense-affect_case-jason_01": {
      text: "Hjertet banker og jeg blir svimmel når du spør om meg.",
      suggestion: "Jeg er her. La oss orientere oss i rommet, nevn tre ting du ser, og kjenn føttene. Vi kjenner litt på bankingen og pauser om det trengs."
    },
    "dp_staying-in-contact-intense-affect_case-jason_02": {
      text: "Skammen skyller inn og jeg vil gjemme meg.",
      suggestion: "Den bølgen er sterk. Senk skuldrene, mykne pusten, og legg merke til kanten av skammen sammen med meg i ett pust–så kan vi trekke oss tilbake."
    },
    "dp_staying-in-contact-intense-affect_case-jason_03": {
      text: "Jeg føler at jeg kan besvime.",
      suggestion: "Ok, len deg tilbake, kjenn stolen og den kjølige luften mot huden. Vi tar det i små slurker–ser litt på frykten, så tilbake til rommet."
    },

    // Laura
    "dp_staying-in-contact-intense-affect_case-laura_01": {
      text: "En høy stemme ute nå fikk magen til å falle og jeg ble blank.",
      suggestion: "Jeg er her. La oss grunne sammen–føtter, sete, pust. Vi navngir ‘magen faller’ i ett pust, og går tilbake til rommet hvis det blir for mye."
    },
    "dp_staying-in-contact-intense-affect_case-laura_02": {
      text: "Når jeg kjenner noe, stiger panikken og jeg vil nummen meg.",
      suggestion: "Panikken gir mening. Et øyeblikk–bli med meg og legg merke til første lille krusning av følelse mens vi holder oppmerksomheten på føttene og luften som går inn og ut."
    },
    "dp_staying-in-contact-intense-affect_case-laura_03": {
      text: "Jeg føler meg langt borte nå.",
      suggestion: "Takk. Jeg er her. Se deg rundt og si fargen på veggen. Samtidig: kjenn etter om det finnes et lite signal av følelse vi kan berøre og så hvile."
    },

    // Carlos
    "dp_staying-in-contact-intense-affect_case-carlos_01": {
      text: "Jeg kjenner varmen bygge seg i brystet nå.",
      suggestion: "Bra observert. Plant føttene, slipp kjeven, og senk stemmen sammen med meg. Vi rir én bølge og trekker oss før den topper seg."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_02": {
      text: "Å tenke på ansiktet til ungen min får øynene til å svi.",
      suggestion: "Svien viser hvor mye du bryr deg. Pust lavt, kjenn hendene, og la litt av svien være her i to pust."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_03": {
      text: "Jeg vil storme ut av rommet.",
      suggestion: "Jeg hører det. Sitt med hælene tunge og ta en rolig utpust. Vi kjenner en trygg skive av trangen og sjekker kroppen igjen."
    },

    // Nina
    "dp_staying-in-contact-intense-affect_case-nina_01": {
      text: "Jeg gråter og føler meg skyldig for å rakne.",
      suggestion: "Tårer gir mening. Jeg er her. La oss senke pusten og kjenne støtten fra stolen mens vi lar litt av gråten få bevege seg gjennom."
    },
    "dp_staying-in-contact-intense-affect_case-nina_02": {
      text: "Brystet er stramt og hodet verker av å holde så mye.",
      suggestion: "Det er mye å bære. Legg en hånd på brystet hvis det hjelper, og så puster vi sammen i to runder og blir ved en liten del av stramheten."
    },
    "dp_staying-in-contact-intense-affect_case-nina_03": {
      text: "Jeg føler at jeg kan knekke hvis jeg stopper.",
      suggestion: "Vi går sakte. Ha ett øye på meg og ett på følelsen–bare en liten slurk–og så tilbake til rommet."
    },

    // Aisha
    "dp_staying-in-contact-intense-affect_case-aisha_01": {
      text: "Hvis du ser vekk, eksploderer panikken og jeg får ikke puste.",
      suggestion: "Jeg blir her med deg. Blikk hit hvis du kan. La oss forlenge utpusten sammen og kjenne føttene til det åpner seg litt rom."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_02": {
      text: "I går kveld ville jeg skade meg fordi tomheten var uutholdelig.",
      suggestion: "Takk for at du sier det. Vi holder det trygt og går sakte. Kjenn stolen, pust med meg, og la oss berøre en bitteliten del av tomheten i ett pust–så tilbake."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_03": {
      text: "Jeg vil løpe ut av rommet nå.",
      suggestion: "Jeg hører trangen. Kan vi presse føttene i gulvet og ta to langsomme utpust mens vi sammen navngir ‘trang til å løpe’, og så vurdere på nytt?"
    },

    // David
    "dp_staying-in-contact-intense-affect_case-david_01": {
      text: "Å høre ‘kald’ gjør at ansiktet brenner og jeg vil slå tilbake.",
      suggestion: "Jeg er her med deg. Slipp skuldrene, kjenn hendene, og ta én rolig pust mens vi legger merke til brenningen uten å handle på den."
    },
    "dp_staying-in-contact-intense-affect_case-david_02": {
      text: "Akkurat nå føler jeg meg eksponert og sint.",
      suggestion: "Den eksponerte følelsen er skarp. Vær med meg og pust lavt; vi kjenner en liten del av den og trekker oss hvis den topper seg."
    },
    "dp_staying-in-contact-intense-affect_case-david_03": {
      text: "Jeg vil stenge hele samtalen.",
      suggestion: "Takk for at du sier det. Én hånd på stolen og én på brystet; to rolige pust, og vi blir ved kanten av trangen."
    },

    // Marcus
    "dp_staying-in-contact-intense-affect_case-marcus_01": {
      text: "En bølge er på vei opp og jeg vil ikke kjenne den.",
      suggestion: "Vi tar det i slurker. Se deg rundt og nevn tre ting, kjenn føttene. La én liten bølge passere med meg, så tilbake til rommet."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_02": {
      text: "Jeg våknet gjennomvåt av et mareritt og nå føler jeg både ingenting og alt.",
      suggestion: "Den piskesnerten er tøff. Vi jobber med jording først–føtter, sete, pust–og berører en trygg skive av det som er her, så trekker vi oss."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_03": {
      text: "Stillhet hjemme kjennes som å gi opp.",
      suggestion: "Jeg er her. Mens vi sitter sammen, pust lavt og legg merke til om en liten følelse dukker opp under stillheten; vi blir bare så lenge det kjennes trygt."
    },

    // Selvavsløring (Self-Disclosure)
    // Sara
    "dp_self-disclosure_case-sara_01": {
      text: "Jeg føler meg dum som gråter over dette igjen.",
      suggestion: "Når jeg hører det, kjenner jeg et beskyttende drag; tårene dine gir mening for meg, og jeg vil bli her sammen med deg."
    },
    "dp_self-disclosure_case-sara_02": {
      text: "Jeg burde ikke trenge noen; det er flaut.",
      suggestion: "Når du sier det, merker jeg en tyngde i meg–som forteller hvor mye du har båret alene."
    },
    "dp_self-disclosure_case-sara_03": {
      text: "Jeg er redd du tenker at jeg er for mye.",
      suggestion: "Jeg blir glad for at du sier det; jeg vil du skal vite at jeg ønsker å være her med deg i dette."
    },

    // Michael
    "dp_self-disclosure_case-michael_01": {
      text: "Jeg mistet det på jobb igjen og følte meg ydmyket.",
      suggestion: "Når jeg hører ‘ydmyket’, kjenner jeg et trykk i brystet; det gir mening at dette svir så mye."
    },
    "dp_self-disclosure_case-michael_02": {
      text: "Å bli sett som svak er det verste.",
      suggestion: "Når du sier ‘svak’, kjenner jeg at jeg senker tempoet–jeg vil lage plass til det som gjør vondt under det ordet."
    },
    "dp_self-disclosure_case-michael_03": {
      text: "Ikke få meg til å snakke om følelser.",
      suggestion: "Jeg merker en dragning i meg mot å bevise at dette hjelper; jeg eier det, og vil holde fokus på det som er viktigst for deg."
    },

    // Jason
    "dp_self-disclosure_case-jason_01": {
      text: "Jeg kaster sikkert bort tiden din.",
      suggestion: "Jeg blir berørt av at du sier det høyt; jeg verdsetter å være med deg selv når ordene er vanskelige."
    },
    "dp_self-disclosure_case-jason_02": {
      text: "Folk vil tro jeg er dum hvis jeg snakker.",
      suggestion: "Når jeg hører den frykten, blir det mykt i meg–det forteller hvor mye dette betyr for deg."
    },
    "dp_self-disclosure_case-jason_03": {
      text: "Jeg ble hjemme i stedet for å gå ut igjen.",
      suggestion: "Jeg merker sorg i meg når du beskriver å bli hjemme; jeg vil være nær det den delen trengte."
    },

    // Laura
    "dp_self-disclosure_case-laura_01": {
      text: "Som oftest føler jeg ingenting.",
      suggestion: "Når du sier ‘ingenting’, kjenner jeg en mild ømhet i meg; vi kan være veldig milde og i ditt tempo."
    },
    "dp_self-disclosure_case-laura_02": {
      text: "Hevede stemmer gjør meg panisk.",
      suggestion: "Jeg merker at stemmen min mykner når jeg hører det; jeg vil at du skal kjenne at jeg er med deg mens vi jobber med jording sammen."
    },
    "dp_self-disclosure_case-laura_03": {
      text: "Vennlighet gjør at jeg blir fjern.",
      suggestion: "Når jeg hører det, blir jeg trist over hvor alene det må ha føltes; jeg vil bli hos deg mens vi legger merke til det."
    },

    // Carlos
    "dp_self-disclosure_case-carlos_01": {
      text: "Jeg slo i veggen og ungen min så det.",
      suggestion: "Når du forteller om ansiktet til sønnen din, strammer brystet mitt seg; det viser hvor mye du bryr deg om å være den pappaen du vil være."
    },
    "dp_self-disclosure_case-carlos_02": {
      text: "Mangel på respekt tenner meg med en gang.",
      suggestion: "Når du sier ‘mangel på respekt’, blir det alvor i meg; jeg vil gå sakte akkurat der det brenner."
    },
    "dp_self-disclosure_case-carlos_03": {
      text: "Du skal vel ikke prøve å gjøre meg myk, sant?",
      suggestion: "Jeg merker et ønske i meg om å fortjene tilliten din; jeg vil holde dette praktisk og på din side."
    },

    // Nina
    "dp_self-disclosure_case-nina_01": {
      text: "Hvis jeg hviler, føler jeg meg egoistisk.",
      suggestion: "Jeg kjenner et stikk når jeg hører det; det gir mening med det du har lært om å sette andre først."
    },
    "dp_self-disclosure_case-nina_02": {
      text: "Jeg er lei av å gjøre alt.",
      suggestion: "Når du sier det, blir jeg berørt; du har båret mye lenge."
    },
    "dp_self-disclosure_case-nina_03": {
      text: "Jeg vil ikke være en belastning her.",
      suggestion: "Jeg merker varme i meg for at du sier det; du er ikke en belastning her, og jeg vil bli ved det som kjennes tungt."
    },

    // Aisha
    "dp_self-disclosure_case-aisha_01": {
      text: "Hvis du forlater meg, overlever jeg ikke.",
      suggestion: "Jeg kjenner en dragning til å forsikre deg nå; jeg vil at du skal vite at jeg er her med deg akkurat nå."
    },
    "dp_self-disclosure_case-aisha_02": {
      text: "I går kveld ville jeg skade meg for å få det til å stoppe.",
      suggestion: "Når jeg hører det, blir jeg bekymret og veldig med deg; tryggheten din betyr mye for meg mens vi finner fastere grunn."
    },
    "dp_self-disclosure_case-aisha_03": {
      text: "Du svarte ikke på meldingen, og det gjorde vondt.",
      suggestion: "Jeg kjenner et stikk i meg når jeg hører det; jeg er lei for at det gjorde vondt, og vil ta vare på det sammen med deg."
    },

    // David
    "dp_self-disclosure_case-david_01": {
      text: "Du kan nok ikke hjelpe en som meg.",
      suggestion: "Jeg kjenner et lite stikk når jeg hører det; det sier meg at tillit er vanskelig her, og jeg vil forstå det bedre."
    },
    "dp_self-disclosure_case-david_02": {
      text: "Kona mi kaller meg narsissist.",
      suggestion: "Når jeg hører det ordet, kjenner jeg tyngde i rommet; jeg vil bli ved smerten under svien."
    },
    "dp_self-disclosure_case-david_03": {
      text: "Jeg vil ha løsninger, ikke følelser.",
      suggestion: "Jeg merker en del av meg som vil overbevise; jeg holder det kort og nyttig, og vi legger også merke til hva som driver reaksjonene."
    },

    // Marcus
    "dp_self-disclosure_case-marcus_01": {
      text: "De fleste dager føler jeg ingenting.",
      suggestion: "Når du sier det, kjenner jeg en tyngde i meg; vi går i ditt tempo og holder det trygt."
    },
    "dp_self-disclosure_case-marcus_02": {
      text: "Marerittene er tilbake.",
      suggestion: "Når du forteller om nettene, kjenner jeg et ønske om å senke tempoet sammen med deg; jeg er her mens vi tar ett steg av gangen."
    },
    "dp_self-disclosure_case-marcus_03": {
      text: "Det kjennes risikabelt å være med folk.",
      suggestion: "Jeg kjenner respekt i meg for hvordan du har holdt deg trygg; det vil jeg ære i arbeidet."
    },

    // Stolmarkører og stolarbeid (Marker Recognition & Chair-Work)
    // Sara
    "dp_marker-recognition-chairwork_case-sara_01": {
      text: "Jeg hører en stemme som sier: Slutt å være trengende, bare skjerp deg.",
      suggestion: "Jeg hører en sterk indre kritiker. Kunne du tenke deg å prøve en kort to-stol, så du kan svare den stemmen direkte? Jeg veileder, og vi kan stoppe når som helst."
    },
    "dp_marker-recognition-chairwork_case-sara_02": {
      text: "Jeg vil fortelle eksen hvor liten jeg følte meg, men det føles meningsløst nå.",
      suggestion: "Jeg hører uavsluttet oppgjør. Vi kan sette en tom stol for ham og la deg si det som trengs, bare ett minutt. Jeg holder det trygt og kort."
    },
    "dp_marker-recognition-chairwork_case-sara_03": {
      text: "Hver gang jeg får tårer, sier en annen del: Ta deg sammen.",
      suggestion: "Det høres ut som en tydelig kritiker-markør. Vil du prøve å sitte som kritikeren i en kort tur, og så bytte og svare fra det ømme stedet? Jeg coacher turene."
    },

    // Michael
    "dp_marker-recognition-chairwork_case-michael_01": {
      text: "Faren min ville kalt meg myk for å kjenne meg såret.",
      suggestion: "Jeg hører en markør for uavsluttet oppgjør med far. Vi kan prøve en kort tom stol–plasser ham her og si hvordan det var. Jeg holder det strukturert, og vi kan pause når som helst."
    },
    "dp_marker-recognition-chairwork_case-michael_02": {
      text: "I hodet sier jeg: Få kontroll, du er patetisk.",
      suggestion: "Det er en tydelig to-stol-kritiker. Kunne du være den harde stemmen i ett minutt, og så bytte og svare fra den såre siden?"
    },
    "dp_marker-recognition-chairwork_case-michael_03": {
      text: "En del sier at jeg må være perfekt; en annen del er bare sliten.",
      suggestion: "Det høres ut som en indre splittelse. En kort to-stol kan la hver del snakke. Jeg leder korte turer så det kjennes trygt."
    },

    // Jason
    "dp_marker-recognition-chairwork_case-jason_01": {
      text: "Jeg hører: Ikke vis deg frem, du kommer til å se dum ut.",
      suggestion: "Den indre kritikeren er aktiv. Vil du plassere den i den andre stolen og fortelle hva den gjør med deg, og så la den svare tilbake i en kort runde?"
    },
    "dp_marker-recognition-chairwork_case-jason_02": {
      text: "Jeg spiller av vennen som sluttet å snakke til meg på videregående.",
      suggestion: "Jeg hører uavsluttet oppgjør. Vi kan sette en tom stol for den vennen og la deg si det som aldri ble sagt. Jeg tar tiden og vi kan stoppe når som helst."
    },
    "dp_marker-recognition-chairwork_case-jason_03": {
      text: "En del vil prøve, en annen del stopper meg.",
      suggestion: "Det er en split-markør. En kort to-stol kan hjelpe begge delene å bli hørt. Jeg holder turene enkle og rolige."
    },

    // Laura
    "dp_marker-recognition-chairwork_case-laura_01": {
      text: "Når noen er snille, sier en stemme: Ikke stol på det.",
      suggestion: "Jeg hører en indre beskytter. Om du vil, kan vi prøve en mild to-stol: gi beskytteren en stol og la den snakke, og la lengselen svare. Vi holder det veldig kort og grunnende."
    },
    "dp_marker-recognition-chairwork_case-laura_02": {
      text: "Jeg vil fortsatt si til moren min at hun ikke beskyttet meg.",
      suggestion: "Det høres ut som uavsluttet oppgjør. Vi kan sette en tom stol for mor og prøve én kort, dosert tur, med lov til å stoppe når som helst."
    },
    "dp_marker-recognition-chairwork_case-laura_03": {
      text: "En del sier: Ikke kjenn noe, ellers blir du skadet.",
      suggestion: "Det er en beskytter vs. følelse-splitt. En kort to-stol kan la hver del si sin hensikt. Jeg coacher, og vi pauser om aktiveringen stiger."
    },

    // Carlos
    "dp_marker-recognition-chairwork_case-carlos_01": {
      text: "En stemme sier: Hvis du ikke er på topp, er du ingenting.",
      suggestion: "Jeg hører en tøff indre trener. Kunne du prøve en to-stol: snakk som treneren, og bytt til delen som føler seg liten og svar tilbake? Jeg veileder."
    },
    "dp_marker-recognition-chairwork_case-carlos_02": {
      text: "Jeg skulle ønske jeg kunne si til faren min hva beltet gjorde med meg.",
      suggestion: "Det er uavsluttet oppgjør. Vi kan sette en tom stol for ham og gi stemmen din én sterk, kort tur. Vi kan stoppe når som helst."
    },
    "dp_marker-recognition-chairwork_case-carlos_03": {
      text: "En del av meg vil beskytte; en annen del skammer seg etterpå.",
      suggestion: "Den splittelsen kan jobbes med i en kort to-stol: beskytter i én stol, skamfull del i den andre. Jeg holder turene korte og jevne."
    },

    // Nina
    "dp_marker-recognition-chairwork_case-nina_01": {
      text: "En stemme sier: Ikke be om hjelp, du er egoistisk.",
      suggestion: "Tydelig kritiker-markør. Kan du prøve å snakke som stemmen i ett minutt, og så bytte og la den trengende siden svare? Jeg coacher og holder det trygt."
    },
    "dp_marker-recognition-chairwork_case-nina_02": {
      text: "Jeg vil si til eksen at jeg følte meg forlatt med alt ansvaret og skylden.",
      suggestion: "Uavsluttet oppgjør er her. Vi kan sette en tom stol for ham og la deg si det du holdt tilbake, med mulighet til å stoppe når som helst."
    },
    "dp_marker-recognition-chairwork_case-nina_03": {
      text: "Jeg klarer ikke velge mellom å plise og å si ifra.",
      suggestion: "Det er en splitt-markør. En kort to-stol kan la begge sider uttrykke frykt og behov. Jeg holder korte turer."
    },

    // Aisha
    "dp_marker-recognition-chairwork_case-aisha_01": {
      text: "En del skriker: Skyv dem vekk før de forlater deg.",
      suggestion: "Jeg hører en kraftig beskytter. Kunne vi prøve en kort, nøye guidet to-stol så beskytteren får snakke og lengselen kan svare? Vi går sakte og kan stoppe når som helst."
    },
    "dp_marker-recognition-chairwork_case-aisha_02": {
      text: "Jeg vil spørre moren min hvorfor hun forlot meg.",
      suggestion: "Det er uavsluttet oppgjør. Hvis du er klar, kan vi prøve en tom stol–én til to setninger–med jording og mulighet til å pause."
    },
    "dp_marker-recognition-chairwork_case-aisha_03": {
      text: "Inni hører jeg: Du er for mye til å elske.",
      suggestion: "Det høres ut som en kritiker-melding. En mild to-stol kan hjelpe deg å svare den direkte. Jeg holder det veldig kort og støttende."
    },

    // David
    "dp_marker-recognition-chairwork_case-david_01": {
      text: "En stemme sier: Vær best, ellers er du ingenting.",
      suggestion: "Det er en sterk indre driver. Vi kan prøve en to-stol der driveren snakker og den mer sårbare delen svarer. Jeg leder korte, fokuserte turer."
    },
    "dp_marker-recognition-chairwork_case-david_02": {
      text: "Jeg vil fortsatt si til faren min at jeg var mer enn resultatene mine.",
      suggestion: "Uavsluttet oppgjør er her. En tom stol med ham kan hjelpe deg å si det direkte, mens jeg holder det trygt og avgrenset."
    },
    "dp_marker-recognition-chairwork_case-david_03": {
      text: "En del vil ha nærhet; en annen del stenger det ned.",
      suggestion: "Den splittelsen kan vi jobbe med i en kort to-stol. Vi lar hver del snakke i ett minutt, så de kan høre hverandre."
    },

    // Marcus
    "dp_marker-recognition-chairwork_case-marcus_01": {
      text: "En del sier: Ikke føl, hold vakt.",
      suggestion: "Beskytter-markør. Hvis du vil, kan vi prøve en veldig kort to-stol: gi vakten en stemme, og la den ensomme delen svare. Vi holder det dosert."
    },
    "dp_marker-recognition-chairwork_case-marcus_02": {
      text: "Jeg vil si til mitt yngre jeg at han ikke fortjente det som skjedde.",
      suggestion: "Det er uavsluttet oppgjør med et yngre selv. En tom stol for ham–én til to setninger–kan være virkningsfullt. Vi jobber med jording og stopper hvis det trengs."
    },
    "dp_marker-recognition-chairwork_case-marcus_03": {
      text: "Når noen strekker seg ut, trekker jeg meg unna.",
      suggestion: "Jeg hører en splitt mellom trygghet og kontakt. En kort to-stol kan la begge sider snakke. Jeg holder det rolig og trygt."
    },

    // Alliansereparasjon (Alliance Repair)
    // Sara
    "dp_alliance-repair_case-sara_01": {
      text: "Forrige uke da jeg gråt, føltes det som du gikk videre for fort.",
      suggestion: "Takk for at du sier fra. Du følte deg forhastet mens du hadde vondt, og jeg er lei for at jeg ikke fanget det. Hjelper det om vi senker tempoet mer og jeg sjekker inn før vi skifter?"
    },
    "dp_alliance-repair_case-sara_02": {
      text: "Da du spurte om jobb igjen, føltes det som om du ikke skjønte hvor vondt dette er.",
      suggestion: "Jeg hører at spørsmålet mitt landet som at jeg ikke forsto. Det er på meg. Jeg vil bli ved det som gjør vondt her først, og så kan vi sammen avgjøre om og når vi snakker om jobb."
    },
    "dp_alliance-repair_case-sara_03": {
      text: "Jeg er redd du synes jeg er for trengende for terapi.",
      suggestion: "Det gir mening å bekymre seg for det her. Jeg er lei om noe jeg gjorde forsterket det. Kan vi avtale at jeg sier tydelig ifra om jeg mister deg, og at du sier fra om du føler deg dømt?"
    },

    // Michael
    "dp_alliance-repair_case-michael_01": {
      text: "Da du sa at jeg hørtes såret ut, føltes det som om du kalte meg svak.",
      suggestion: "Jeg ser hvordan det kunne lande. Beklager. Målet mitt var å respektere det som traff deg. Hadde det passet bedre at jeg spør først og bruker ord som kjennes sterke for deg?"
    },
    "dp_alliance-repair_case-michael_02": {
      text: "Du fortsetter å presse følelser; jeg sa jeg trenger verktøy.",
      suggestion: "Rett å si ifra. Jeg lente for mye mot følelser uten å balansere med verktøy. La oss samplanlegge: kort følelsessjekk, så ett konkret grep hver gang."
    },
    "dp_alliance-repair_case-michael_03": {
      text: "Da du pauset og så på meg, følte jeg meg dømt.",
      suggestion: "Takk for at du sier det. Pausen var at jeg tenkte, men for deg kjentes det som dom. Jeg vil si ifra når jeg trenger et øyeblikk, og mykne ansiktet mitt; si fra hvis det sniker seg inn igjen."
    },

    // Jason
    "dp_alliance-repair_case-jason_01": {
      text: "Da det var stille så lenge, følte jeg at jeg feilet.",
      suggestion: "Godt du sier det. Stillheten var ment som rom, og det kjentes som press. Beklager. Jeg vil gi kortere inviteringer og sjekke tempoet for deg."
    },
    "dp_alliance-repair_case-jason_02": {
      text: "Du så på klokka og jeg følte meg uviktig.",
      suggestion: "Jeg ser at det stikker. Beklager. Jeg sier fra hvis jeg må sjekke tid, og vi kan ha et forvarsel før avslutning så det ikke blir brått."
    },
    "dp_alliance-repair_case-jason_03": {
      text: "Jeg følte meg presset da du spurte om kroppen med en gang.",
      suggestion: "Takk for at du sier det. Jeg gikk for fort. Kan jeg spørre om lov først og holde spørsmålene lette, og at du sier ifra om det er ok å gå et steg dypere?"
    },

    // Laura
    "dp_alliance-repair_case-laura_01": {
      text: "Da du spurte om barndommen, følte jeg meg eksponert og ville gå.",
      suggestion: "Beklager at det gikk for fort. Takk for at du ble. Vi kan senke tempoet og holde oss i nåtid, med mindre du gir et tydelig ja til å se tilbake."
    },
    "dp_alliance-repair_case-laura_02": {
      text: "Da døra smalt ute, ble jeg blank og du fortsatte å snakke.",
      suggestion: "Du har rett, jeg mistet skiftet. Beklager. Neste gang pauser jeg og jobber med jording med deg først; kan vi øve på et signal du kan bruke hvis du blir blank?"
    },
    "dp_alliance-repair_case-laura_03": {
      text: "Du snakket fort, og jeg hang ikke med.",
      suggestion: "Takk for at du sier det. Jeg vil senke tempoet og sjekke inn oftere; stopp meg når som helst hvis det går for fort."
    },

    // Carlos
    "dp_alliance-repair_case-carlos_01": {
      text: "Da du kalte det en ‘brenning i brystet’, føltes det som du dømte sinnet mitt.",
      suggestion: "Jeg hører det. Intensjonen var å spore kroppen, ikke dømme deg. Beklager at det landet sånn. Jeg spør først og bruker dine ord for det."
    },
    "dp_alliance-repair_case-carlos_02": {
      text: "Du ber meg bremse hele tiden; det høres mykt ut.",
      suggestion: "Takk for tydelighet. Jeg respekterer at du vil være sterk. La oss kalle det å holde kontroll, og vi holder det fast og praktisk."
    },
    "dp_alliance-repair_case-carlos_03": {
      text: "Da jeg snakket om ungen min, så du bort og jeg følte meg avvist.",
      suggestion: "Beklager at jeg så bort; jeg noterte, og det kostet kontakt. Jeg vil holde blikket hos deg der. Vil du gå tilbake til det øyeblikket i ett minutt nå?"
    },

    // Nina
    "dp_alliance-repair_case-nina_01": {
      text: "Da jeg gråt, var du stille og jeg følte meg alene i det.",
      suggestion: "Beklager at du sto alene. Jeg skulle sagt mer. Jeg vil være tydeligere i støtten når tårene kommer, og sjekke om du vil ha ord eller stillhet."
    },
    "dp_alliance-repair_case-nina_02": {
      text: "Det kjentes som du tok eksens side om husarbeidet.",
      suggestion: "Takk for at du sier fra. Jeg hører at det gjorde vondt. Jeg ville forstå begge sider og mistet deg. Beklager. Vi sentrer deg først."
    },
    "dp_alliance-repair_case-nina_03": {
      text: "Jeg er redd jeg kaster bort tiden din.",
      suggestion: "Når jeg hører det, vil jeg være tydelig: Du er ikke bortkastet tid. Hvis jeg har gitt det inntrykket, beklager jeg. Kan vi avtale at jeg tydeliggjør fokus hver time?"
    },

    // Aisha
    "dp_alliance-repair_case-aisha_01": {
      text: "Da du ikke svarte raskt på melding, fikk jeg panikk og følte meg forlatt.",
      suggestion: "Beklager at timingen min la seg oppå smerten. Følelsene dine gir mening. La oss lage tydelige forventninger for meldinger og hva du kan gjøre mellom timer når panikken kommer."
    },
    "dp_alliance-repair_case-aisha_02": {
      text: "Å avslutte på tiden føltes som at du slapp meg.",
      suggestion: "Takk for at du sier det. Jeg ser hvordan avslutningen kan kjennes brå. Jeg vil gi lenger varsel og vi kan lage en kort ‘anker’ før vi runder av."
    },
    "dp_alliance-repair_case-aisha_03": {
      text: "Da du foreslo en pause, hørtes det ut som om du ga opp meg.",
      suggestion: "Jeg er lei for at det landet sånn. Målet mitt var trygghet, ikke å forlate. Neste gang sier jeg det tydelig og spør hva som hjelper deg å føle deg holdt mens vi roer ned."
    },

    // David
    "dp_alliance-repair_case-david_01": {
      text: "Da du utfordret meg, føltes det som et angrep.",
      suggestion: "Jeg hører virkningen og beklager. Utfordring uten nok innkobling kan kjennes som angrep. Jeg vil forankre i ditt perspektiv først og spørre om du vil ha en utfordring."
    },
    "dp_alliance-repair_case-david_02": {
      text: "Du er for opptatt av følelser. Jeg ba om strategi.",
      suggestion: "Det er fair. Vi samplanlegger: kort sjekk på det som treffer, deretter konkrete strategirepper hver time."
    },
    "dp_alliance-repair_case-david_03": {
      text: "Det kjentes som om du tok konas parti.",
      suggestion: "Takk for at du sier det. Intensjonen min var å forstå, og jeg så ikke hvordan det ville lande. Beklager. Jeg vil være tydelig på at jeg står med deg mens vi ser på mønsteret."
    },

    // Marcus
    "dp_alliance-repair_case-marcus_01": {
      text: "Da jeg sa at jeg ikke følte noe, fortsatte du å spørre og jeg stengte ned.",
      suggestion: "Du har rett; jeg presset for langt. Beklager. Jeg vil trekke meg litt tilbake og gå saktere, og du kan signalisere når du trenger pause."
    },
    "dp_alliance-repair_case-marcus_02": {
      text: "Du satt for nærme; jeg ble urolig.",
      suggestion: "Takk for at du sier det. Beklager ubehaget. Vi kan justere sittestillingen og avstemme hva som kjennes trygt for deg."
    },
    "dp_alliance-repair_case-marcus_03": {
      text: "Da du spurte om marerittene, følte jeg meg presset.",
      suggestion: "Takk for at du sier det. Jeg vil spørre om samtykke før vi berører traumeinnhold og holde det i små trinn med jording først."
    }
  }
};
