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
      text: "Kveldene er verst; stillheten får det til å kjennes som jeg aldri var god nok til å bli valgt.",
      suggestion: "I stillheten kjennes det som om ‘ikke god nok’ legger seg over deg."
    },
    "dp_empathic-understanding_case-sara_02": {
      text: "Når jeg begynner å gråte, sier jeg fort at det går bra så det ikke blir kleint.",
      suggestion: "Tårene kommer, og med en gang prøver du å gjøre det lettere for alle andre."
    },
    "dp_empathic-understanding_case-sara_03": {
      text: "Hvis jeg bare fortsetter å prestere, slipper jeg kanskje å kjenne på denne ensomheten.",
      suggestion: "Å prestere kjennes ut som en måte å holde ensomheten litt på avstand."
    },

    // Michael
    "dp_empathic-understanding_case-michael_01": {
      text: "Når noen retter på meg, strammer brystet seg og jeg smeller før jeg rekker å tenke.",
      suggestion: "En korrigering lander som et slag i brystet, og sinne skyter frem for å beskytte deg."
    },
    "dp_empathic-understanding_case-michael_02": {
      text: "Etter at jeg roper, hater jeg meg selv for det, men i øyeblikket føles det nødvendig.",
      suggestion: "Der og da føles det nødvendig, og etterpå kommer skammen hardt."
    },
    "dp_empathic-understanding_case-michael_03": {
      text: "Respekt betyr så mye at selv et lite øyekast føles som et angrep.",
      suggestion: "Selv små tegn kan svi som mangel på respekt og tenne det gamle såret."
    },

    // Jason
    "dp_empathic-understanding_case-jason_01": {
      text: "I møter blir jeg helt blank og hører en stemme: ikke avslør hvor klønete du er.",
      suggestion: "Blankheten og en hard indre stemme gjør det farlig å snakke."
    },
    "dp_empathic-understanding_case-jason_02": {
      text: "Når venner inviterer, har jeg lyst, men jeg fryser og svarer for sent.",
      suggestion: "Du lengter etter å bli med, og frysingen holder deg utenfor igjen."
    },
    "dp_empathic-understanding_case-jason_03": {
      text: "Søndag kveld ligger jeg og føler at jeg alltid kommer til å være alene.",
      suggestion: "Søndagskvelden bringer en tung ensomhet som sier at du alltid blir alene."
    },

    // Laura
    "dp_empathic-understanding_case-laura_01": {
      text: "De fleste dager kjennes dempet, som om jeg går i tåke og ingenting når inn.",
      suggestion: "Det er som en tåke der følelser ikke helt når frem."
    },
    "dp_empathic-understanding_case-laura_02": {
      text: "Høylytte stemmer gjør at magen faller, og jeg vil ut av rommet.",
      suggestion: "Når stemmer heves, synker magen og kroppen vil rett ut."
    },
    "dp_empathic-understanding_case-laura_03": {
      text: "Jeg vil ha nærhet, men når noen kommer nær, blir jeg nummen og forsvinner innover.",
      suggestion: "Du vil ha nærhet, og så kommer nummenheten for å holde deg trygg ved å trekke deg unna."
    },

    // Carlos
    "dp_empathic-understanding_case-carlos_01": {
      text: "Hvis noen ser skjevt på meg, blir jeg varm og knyttnevene strammer seg.",
      suggestion: "Et skjevt blikk tenner varmen i deg, og kroppen gjør seg klar til å forsvare."
    },
    "dp_empathic-understanding_case-carlos_02": {
      text: "Å se at ungen min skvatt da jeg slo i veggen, traff meg hardt.",
      suggestion: "Blikket hans skjærer dypt og viser hvor mye dette betyr for deg."
    },
    "dp_empathic-understanding_case-carlos_03": {
      text: "Jeg sier til meg selv at det bare er stress, men en del av meg er redd jeg blir som faren min.",
      suggestion: "Under stresset finnes en reell frykt for å bli han som såret deg."
    },

    // Nina
    "dp_empathic-understanding_case-nina_01": {
      text: "Når jeg ber om hjelp, flommer skyld inn og jeg beklager at jeg trenger noe.",
      suggestion: "Idet du strekker ut hånden, skyller skylden inn og du trekker deg tilbake."
    },
    "dp_empathic-understanding_case-nina_02": {
      text: "Jeg gjør alt og blir bitter, og så får jeg dårlig samvittighet for at jeg er bitter.",
      suggestion: "Du bærer så mye at bitterheten stiger, og så legger skammen seg oppå."
    },
    "dp_empathic-understanding_case-nina_03": {
      text: "Noen ganger sitter jeg i bilen før jeg går inn, bare for å samle meg.",
      suggestion: "Du tar en pause i bilen for å samle deg før du går inn igjen."
    },

    // Aisha
    "dp_empathic-understanding_case-aisha_01": {
      text: "Når en melding ikke blir besvart med en gang, kjennes det som å falle ned i et hull.",
      suggestion: "De minuttene med stillhet føles som et bunnløst fall inni deg."
    },
    "dp_empathic-understanding_case-aisha_02": {
      text: "Jeg kan elske noen, og hvis jeg kjenner at de trekker seg, får jeg panikk og skyver dem unna først.",
      suggestion: "I det du merker avstand, flammer panikken opp og du skyver for å slippe å bli forlatt."
    },
    "dp_empathic-understanding_case-aisha_03": {
      text: "Tomheten i brystet kan kjennes som den vil sluke meg.",
      suggestion: "Den tomheten kjennes enorm, som om den kan sluke deg helt."
    },

    // David
    "dp_empathic-understanding_case-david_01": {
      text: "Når kona kaller meg kald, føler jeg meg avslørt og blir rasende.",
      suggestion: "Å bli kalt kald svir som å bli avslørt, og sinne strømmer inn for å dekke over."
    },
    "dp_empathic-understanding_case-david_02": {
      text: "Hvis jeg ikke er imponerende, vet jeg ikke hvem jeg er i rommet.",
      suggestion: "Uten å være imponerende kjennes det som om selvfølelsen glipper."
    },
    "dp_empathic-understanding_case-david_03": {
      text: "Siden affæren ble kjent, er det en matt tomhet jeg ikke blir kvitt, selv når alt ser greit ut.",
      suggestion: "På overflaten ser det greit ut, og under ligger en matt tomhet."
    },

    // Marcus
    "dp_empathic-understanding_case-marcus_01": {
      text: "De fleste dager går jeg på autopilot og kjenner ingenting, og så kommer en bølge fra ingensteds.",
      suggestion: "Du går gjennom dagen nummen, og så kan en plutselig bølge slå inn."
    },
    "dp_empathic-understanding_case-marcus_02": {
      text: "Mareritt vekker meg gjennomvåt, og neste dag blir jeg stille og bare holder ut.",
      suggestion: "Nettene oversvømmer deg, og dagen etter tar du på stillheten som rustning for å komme gjennom."
    },
    "dp_empathic-understanding_case-marcus_03": {
      text: "Å være alene kjennes tryggere, men noen ganger føles stillheten som å gi opp.",
      suggestion: "Alene føles tryggere, og stillheten kan også kjennes som å gi opp å bli sett."
    },
    // Empatisk bekreftelse og validering
    // Sara
    "dp_empathic-affirmation-validation_case-sara_01": {
      text: "Nettene føles endeløse etter bruddet. Jeg tenker hele tiden at dette beviser at jeg ikke var verdt å bli.",
      suggestion: "Gitt hvor mye dette betydde og alt du har båret, gir det mening at nettene gjør vondt og at de tankene kommer."
    },
    "dp_empathic-affirmation-validation_case-sara_02": {
      text: "Jeg føler meg teit som gråter her. Jeg burde vært sterkere nå.",
      suggestion: "Selvsagt kommer tårene her; etter et sånt tap ville hvem som helst vært sår."
    },
    "dp_empathic-affirmation-validation_case-sara_03": {
      text: "Jeg hater å trenge hjelp. Det får meg til å føle meg svak.",
      suggestion: "Det gir mening at det kjennes risikabelt å trenge hjelp når du har lært å holde alt sammen selv."
    },

    // Michael
    "dp_empathic-affirmation-validation_case-michael_01": {
      text: "Å bli rettet på foran teamet var ydmykende. Jeg eksploderte, og nå skammer jeg meg.",
      suggestion: "Enhver i den situasjonen ville følt seg stukket og skamfull; det gir mening at sinnet kom for å beskytte deg, selv om det ikke hjalp."
    },
    "dp_empathic-affirmation-validation_case-michael_02": {
      text: "Når folk sier jeg er for intens, føles det som de kaller meg svak.",
      suggestion: "Med det du ble møtt med, gir det mening at sånne kommentarer lander som angrep på verdien din."
    },
    "dp_empathic-affirmation-validation_case-michael_03": {
      text: "Jeg presser meg til å være perfekt så ingen kan ta meg.",
      suggestion: "Det gir mening at du strever så hardt for å beskytte deg mot kritikk."
    },

    // Jason
    "dp_empathic-affirmation-validation_case-jason_01": {
      text: "Når det er min tur til å snakke, klemmer panikken rundt halsen og jeg sier ingenting.",
      suggestion: "Selvsagt fryser kroppen når det kjennes så risikabelt å bli sett; hvem som helst ville strevd i det øyeblikket."
    },
    "dp_empathic-affirmation-validation_case-jason_02": {
      text: "Jeg vil gå ut, men jeg trekker meg i siste liten.",
      suggestion: "Det gir mening at du trekker deg når frykt og selvkritikk topper seg."
    },
    "dp_empathic-affirmation-validation_case-jason_03": {
      text: "Jeg føler meg patetisk for å være så ensom.",
      suggestion: "Ensomhet gjør dypt vondt; det gir mening at du føler deg så nedfor med det du har vært gjennom."
    },

    // Laura
    "dp_empathic-affirmation-validation_case-laura_01": {
      text: "De fleste dager er jeg nummen. Jeg vet jeg burde føle mer, men jeg får det ikke til.",
      suggestion: "Med det du har levd gjennom, gir det mening at nummenhet kommer for å beskytte deg."
    },
    "dp_empathic-affirmation-validation_case-laura_02": {
      text: "Når stemmer heves, synker magen og jeg må ut.",
      suggestion: "Selvsagt reagerer kroppen; med historien din ville hvem som helst raskt søkt trygghet."
    },
    "dp_empathic-affirmation-validation_case-laura_03": {
      text: "Noen ganger drikker jeg for å få sove fordi hodet ikke stopper.",
      suggestion: "Det gir mening at du griper etter noe som roer systemet når det ikke vil lande, selv om det også har en pris."
    },

    // Carlos
    "dp_empathic-affirmation-validation_case-carlos_01": {
      text: "Jeg hater at jeg slo i veggen. Jeg følte meg inneklemt og uten respekt.",
      suggestion: "Å føle seg inneklemt og uten respekt gjør vondt; det gir mening at det steg raskt, selv om utbruddet ikke hjalp."
    },
    "dp_empathic-affirmation-validation_case-carlos_02": {
      text: "Et blikk eller en tone kan trigge meg som om jeg er ingenting.",
      suggestion: "Med det du har vært gjennom, gir det mening at små signaler kan kjennes som en trussel."
    },
    "dp_empathic-affirmation-validation_case-carlos_03": {
      text: "Jeg er redd jeg blir som faren min.",
      suggestion: "Selvsagt er den frykten sterk; det gir mening at du vil noe annet for familien din."
    },

    // Nina
    "dp_empathic-affirmation-validation_case-nina_01": {
      text: "Når jeg ber om hjelp, slår skylden meg i bakken og jeg beklager.",
      suggestion: "Det gir mening at skylden kommer med en gang når du ble lært å ta vare på alle først."
    },
    "dp_empathic-affirmation-validation_case-nina_02": {
      text: "Jeg gjør alt, blir bitter, og så får jeg dårlig samvittighet for at jeg er bitter.",
      suggestion: "Enhver som bærer den byrden ville blitt sliten og bitter; det gir mening at begge deler dukker opp."
    },
    "dp_empathic-affirmation-validation_case-nina_03": {
      text: "Jeg føler meg egoistisk hvis jeg hviler, selv når jeg er utslitt.",
      suggestion: "Med de gamle reglene gir det mening at hvile kjennes egoistisk selv når kroppen er tom."
    },

    // Aisha
    "dp_empathic-affirmation-validation_case-aisha_01": {
      text: "Når noen ikke svarer på melding, blir det uutholdelig, som om jeg blir droppet.",
      suggestion: "Med så mange brudd gir det mening at stillhet kjennes som å bli droppet på nytt."
    },
    "dp_empathic-affirmation-validation_case-aisha_02": {
      text: "I går kveld skremte jeg meg selv; jeg ville skade meg for å få smerten til å stoppe.",
      suggestion: "Smerten du står i er enorm; det gir mening at du ville ha lindring, selv om å skade deg ikke kan gi det du egentlig trenger."
    },
    "dp_empathic-affirmation-validation_case-aisha_03": {
      text: "En del av meg tenker at ingen kan elske meg lenge.",
      suggestion: "Med det du har opplevd, gir det mening at den tanken dukker opp og kjennes sann."
    },

    // David
    "dp_empathic-affirmation-validation_case-david_01": {
      text: "Hjemme føler jeg meg plukket på, og jeg går fort i forsvar.",
      suggestion: "Det gir mening å føle seg eksponert og gå i forsvar når det kjennes som kritikk hjemme."
    },
    "dp_empathic-affirmation-validation_case-david_02": {
      text: "Hvis jeg ikke er imponerende, føler jeg meg som ingenting.",
      suggestion: "Når kjærlighet ble koblet til prestasjon, gir det mening at egenverdi kjennes knyttet til å imponere."
    },
    "dp_empathic-affirmation-validation_case-david_03": {
      text: "Siden affæren kom frem, er det en tyngde jeg ikke blir kvitt.",
      suggestion: "Selvsagt er det tyngde og skam her; hvem som helst i dine sko ville følt seg nedtrykt."
    },

    // Marcus
    "dp_empathic-affirmation-validation_case-marcus_01": {
      text: "De fleste dager føler jeg ingenting, og så blir jeg plutselig oversvømt av minner.",
      suggestion: "Med det du har levd, gir det mening at systemet går i nummenhet og så blir oversvømt."
    },
    "dp_empathic-affirmation-validation_case-marcus_02": {
      text: "Marerittene tapper meg, og jeg holder hodet lavt og bare kommer meg gjennom.",
      suggestion: "Hvem som helst med de marerittene ville følt seg utmattet og valgt stillhet for å komme seg gjennom."
    },
    "dp_empathic-affirmation-validation_case-marcus_03": {
      text: "Å være alene kjennes tryggere, men det kan også føles som å gi opp.",
      suggestion: "Det gir mening at du velger trygghet, og at stillheten samtidig kan kjennes som å gi opp på å bli kjent."
    },

    // Utforskende spørsmål
    // Sara
    "dp_exploratory-questions_case-sara_01": {
      text: "Når jeg tenker på å se eksen med en ny, vrir magen seg og jeg får lyst til å kaste meg over alt mulig.",
      suggestion: "Når du ser det for deg, hvor kjenner du vridningen sterkest i kroppen akkurat nå?"
    },
    "dp_exploratory-questions_case-sara_02": {
      text: "Jeg sier til meg selv at jeg skal fokusere på jobb så sorgen ikke tar meg på senga.",
      suggestion: "Hva skjer inni deg når du sier det til deg selv–hva forteller deg at sorgen er i nærheten?"
    },
    "dp_exploratory-questions_case-sara_03": {
      text: "Hvis jeg roer ned om kvelden, kjennes ensomheten som et trykk i brystet.",
      suggestion: "Kan vi bli litt ved det trykket–hva slags trykk er det (stramt, tungt, varmt)?"
    },

    // Michael
    "dp_exploratory-questions_case-michael_01": {
      text: "Når en feil blir påpekt, er det noe som smeller og jeg må stoppe det kjapt.",
      suggestion: "I sekundet før det smeller, hva merker du i bryst eller hals?"
    },
    "dp_exploratory-questions_case-michael_02": {
      text: "Jeg tåler ikke blikket folk gir når de tror jeg har dummet meg ut.",
      suggestion: "Hva ser det blikket ut til å si til deg–og hvor kjenner du at det lander i kroppen?"
    },
    "dp_exploratory-questions_case-michael_03": {
      text: "Når jeg roer meg, er det en grop i magen jeg ikke snakker om.",
      suggestion: "Om den gropen fikk noen ord, hva ville den fortelle om det som gjorde vondt?"
    },

    // Jason
    "dp_exploratory-questions_case-jason_01": {
      text: "I møter planlegger jeg hva jeg skal si, og når det blir min tur, blir jeg helt blank.",
      suggestion: "Når du ser for deg at det blir din tur, hva begynner å skje i kroppen–stramhet, varme, kribling?"
    },
    "dp_exploratory-questions_case-jason_02": {
      text: "Jeg hører en stemme som sier: ikke avslør hvor klønete du er.",
      suggestion: "Hvordan høres den stemmen ut–tone, tempo–og hvor i deg kjennes den når den snakker?"
    },
    "dp_exploratory-questions_case-jason_03": {
      text: "Jeg vil svare på meldinger med en gang, men jeg fryser og venter for lenge.",
      suggestion: "I øyeblikket du fryser, hva er det skumleste–og hvis den frykten kunne snakke, hva ville den sagt?"
    },

    // Laura
    "dp_exploratory-questions_case-laura_01": {
      text: "De fleste dager kjennes dempet, som om jeg er bak glass.",
      suggestion: "Når du legger merke til glasset, hvilke signaler forteller at du er bak det–nummenhet, avstand, noe annet?"
    },
    "dp_exploratory-questions_case-laura_02": {
      text: "Når stemmer stiger, synker magen og jeg vil ut.",
      suggestion: "Hva skjer i kroppen de få sekundene før du vil ut–og hva trenger den delen da?"
    },
    "dp_exploratory-questions_case-laura_03": {
      text: "Når noen er snille mot meg, blir jeg noen ganger helt blank.",
      suggestion: "Hvis vi blir litt ved det blanke, hva begynner å komme–et bilde, en fornemmelse, et ord?"
    },

    // Carlos
    "dp_exploratory-questions_case-carlos_01": {
      text: "En skjev kommentar gjør brystet varmt og kjeven låser seg.",
      suggestion: "Kan du spore den varmen og kjeven nå–hva er det første signalet kroppen gir?"
    },
    "dp_exploratory-questions_case-carlos_02": {
      text: "Å se at ungen min skvatt, treffer meg fortsatt.",
      suggestion: "Når du husker ansiktet hans, hvor kjenner du det mest–og hva er det verste i det øyeblikket for deg?"
    },
    "dp_exploratory-questions_case-carlos_03": {
      text: "Jeg sier til meg selv at jeg må holde meg på topp, ellers blir jeg overkjørt.",
      suggestion: "Hvordan kjennes ‘på topp’ i kroppen, og hva ønsker delen som frykter å bli tråkket på for deg?"
    },

    // Nina
    "dp_exploratory-questions_case-nina_01": {
      text: "I det jeg ber om hjelp, flommer skylden inn.",
      suggestion: "Hvor lander skylden først–bryst, hals, mage–og hva anklager den deg for?"
    },
    "dp_exploratory-questions_case-nina_02": {
      text: "Jeg holder meg i gang hele dagen så jeg slipper å kjenne bitterhet eller sorg.",
      suggestion: "Hvis du stopper for et pust nå, hvilken følelse dukker opp først–og hva vil den fortelle deg?"
    },
    "dp_exploratory-questions_case-nina_03": {
      text: "Å hvile får meg til å føle meg egoistisk, selv når jeg er utslitt.",
      suggestion: "Hva skjer inni deg når du ser for deg å hvile–hvilken følelse eller hvilket bilde forteller at det kjennes egoistisk?"
    },

    // Aisha
    "dp_exploratory-questions_case-aisha_01": {
      text: "Hvis et svar ikke kommer raskt, kjennes det som om jeg faller.",
      suggestion: "Når fallet starter, hvor i kroppen merker du det først–og hvordan kjennes det (dropp, snurr, tomhet)?"
    },
    "dp_exploratory-questions_case-aisha_02": {
      text: "Når jeg merker avstand, vil jeg ringe hele tiden eller skyve dem vekk først.",
      suggestion: "I det du merker avstand, hva skjer inni deg–og hva trenger den mest redde delen av deg da?"
    },
    "dp_exploratory-questions_case-aisha_03": {
      text: "Noen ganger kjennes tomheten i brystet enorm.",
      suggestion: "Hvis vi retter varsom oppmerksomhet mot tomheten, hvilken form eller tekstur har den–og kommer det et ord med?"
    },

    // David
    "dp_exploratory-questions_case-david_01": {
      text: "Å bli kalt kald gjør at ansiktet brenner og jeg vil ramse opp alt jeg gjør.",
      suggestion: "Når ansiktet brenner, hva er det mest sårbare under varmen–og hva skulle du ønske hun visste om deg?"
    },
    "dp_exploratory-questions_case-david_02": {
      text: "Hvis jeg ikke er imponerende, føler jeg meg borte.",
      suggestion: "Hva er det vanskeligste ved å kjenne seg borte–og hvor i kroppen merker du det nå?"
    },
    "dp_exploratory-questions_case-david_03": {
      text: "Om kvelden er det en flathet jeg ikke blir kvitt.",
      suggestion: "Når du legger merke til flatheten, hva blir du først oppmerksom på–tyngde, tomhet, trykk–og hva ser det ut til å handle om?"
    },

    // Marcus
    "dp_exploratory-questions_case-marcus_01": {
      text: "Jeg kommer meg gjennom dagen på autopilot, og så slår en bølge inn fra ingensteds.",
      suggestion: "Hva forteller deg at en bølge er på vei–noen små kroppssignaler eller bilder som kommer først?"
    },
    "dp_exploratory-questions_case-marcus_02": {
      text: "Mareritt gjør meg oppskaket og tom dagen etter.",
      suggestion: "Akkurat nå, idet du nevner dem, hva legger du merke til i kroppen–og hvis den følelsen hadde en beskjed, hva ville den sagt?"
    },
    "dp_exploratory-questions_case-marcus_03": {
      text: "Å være med folk kjennes risikabelt; å være alene kjennes blankt.",
      suggestion: "Når du ser for deg å være med noen du stoler på, hva skifter inni deg–om så bare litt–og hvor merker du det?"
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
      text: "Når jeg hører at han dater igjen, faller det tungt i brystet og jeg vil forsvinne inn i jobb.",
      suggestion: "Det er et tungt fall der; hvis vi blir litt ved det, hva begynner å ta form inni deg?"
    },
    "dp_empathic-explorations_case-sara_02": {
      text: "Jeg tar meg i å smile og si at det går bra selv om øynene svir.",
      suggestion: "Øynene svir selv om du smiler; kan vi dvele litt ved svien og se hva den handler om?"
    },
    "dp_empathic-explorations_case-sara_03": {
      text: "Om kvelden er leiligheten for stille, og jeg scroller til jeg blir nummen.",
      suggestion: "Det er noe i den stillheten; hvis vi blir litt ved delen som vil bli nummen, hva legger du merke til?"
    },

    // Michael
    "dp_empathic-explorations_case-michael_01": {
      text: "Å høre at jeg har gjort feil kjennes som et slag, og varme skyter opp i nakken.",
      suggestion: "Slaget og varmen er her nå; hvis vi blir litt ved stikket, hva dukker opp like under?"
    },
    "dp_empathic-explorations_case-michael_02": {
      text: "Når jeg roer meg, er det en liten skamfull følelse jeg ikke liker å se på.",
      suggestion: "Der er den lille skamfulle plassen; hvis vi sitter varsomt med den, hvordan kjennes den fra innsiden?"
    },
    "dp_empathic-explorations_case-michael_03": {
      text: "Respekt betyr så mye at selv et sukk får meg til å stritte.",
      suggestion: "Noe stritter selv ved et sukk; hvis vi blir ved den kanten, hva ser det ut til å beskytte?"
    },

    // Jason
    "dp_empathic-explorations_case-jason_01": {
      text: "Når oppmerksomheten kommer til meg, blir jeg blank og stram i halsen.",
      suggestion: "Det er blankt og stramt i halsen; hvis vi blir ved stramheten litt, hva kommer i fokus–om noe?"
    },
    "dp_empathic-explorations_case-jason_02": {
      text: "Jeg vil si ja til invitasjoner, og så fryser jeg i siste sekund.",
      suggestion: "Frysen er helt i kanten her; kan vi holde oss nær den og legge merke til hva den prøver å spare deg for?"
    },
    "dp_empathic-explorations_case-jason_03": {
      text: "Noen ganger spiller jeg av samtaler på nytt og kjenner et lite sug i brystet.",
      suggestion: "Det lille suget er her; hvis vi gir det litt plass, hvordan kjennes det og hva ser det ut til å bry seg om?"
    },

    // Laura
    "dp_empathic-explorations_case-laura_01": {
      text: "Som oftest føler jeg meg flat, og så flimrer det litt og jeg presser det ned.",
      suggestion: "Det er et lite glimt under flatheten; hvis vi blir veldig varsomt ved glimtet, hvordan kjennes det innenfra?"
    },
    "dp_empathic-explorations_case-laura_02": {
      text: "En hevet stemme gjør at magen synker og kroppen vil ut.",
      suggestion: "Vi kan bli ved fallet i magen i ett pust; hvordan er det fallet, og hva ser det ut til å advare deg om?"
    },
    "dp_empathic-explorations_case-laura_03": {
      text: "Når noen er snille, blir en del av meg fjern.",
      suggestion: "Det kommer en avstand sammen med vennligheten; hvis vi sitter mykt ved den, hva begynner å vise seg der?"
    },

    // Carlos
    "dp_empathic-explorations_case-carlos_01": {
      text: "En skjev tone gjør brystet varmt og kjeven låser seg.",
      suggestion: "Varmen og låsen er her nå; hvis vi holder oss nær dem, hva ser de ut til å si på dine vegne?"
    },
    "dp_empathic-explorations_case-carlos_02": {
      text: "Når jeg husker at gutten min skvatt, er det noe i meg som synker.",
      suggestion: "Der er fallet når du ser ansiktet hans; kan vi dvele litt og merke hva som gjør mest vondt akkurat der?"
    },
    "dp_empathic-explorations_case-carlos_03": {
      text: "Jeg sier til meg selv at jeg må være tøffest så jeg ikke blir skadet.",
      suggestion: "Det er en del som må være tøffest; hvis vi blir litt ved den delen, hva ønsker den for deg når den spenner seg?"
    },

    // Nina
    "dp_empathic-explorations_case-nina_01": {
      text: "Idet jeg sier at jeg trenger hjelp, skyller skylden inn.",
      suggestion: "Skyllbølgen av skyld er her; hvis vi sitter mykt med den, hva ser den ut til å beskytte eller hindre?"
    },
    "dp_empathic-explorations_case-nina_02": {
      text: "Jeg holder meg i bevegelse så jeg slipper å kjenne bitterheten under.",
      suggestion: "Det ligger et lag under all bevegelsen; hvis vi blir ved det i ett pust, hva begynner å komme til syne?"
    },
    "dp_empathic-explorations_case-nina_03": {
      text: "Å hvile vekker en stram, egoistisk følelse i brystet.",
      suggestion: "La oss bli litt ved den stramme følelsen; hvilken tekstur har den, og hva vil den minne deg på når du hviler?"
    },

    // Aisha
    "dp_empathic-explorations_case-aisha_01": {
      text: "Hvis noen trekker seg, skyter panikken opp og det kjennes et hull i brystet.",
      suggestion: "Det er en hull-følelse idet panikken skyter; hvis vi blir ved helt i kanten, hva begynner å vise seg om hva den trenger?"
    },
    "dp_empathic-explorations_case-aisha_02": {
      text: "Jeg kan gå fra kjærlighet til raseri på minutter når jeg føler meg ignorert.",
      suggestion: "Det er en skarp sving der; hvis vi blir ved øyeblikket før raseriet, hva lever under?"
    },
    "dp_empathic-explorations_case-aisha_03": {
      text: "Noen ganger er tomheten så høy at jeg vil gjøre hva som helst for å dempe den.",
      suggestion: "Tomheten er høy; hvis vi sitter med en liten, trygg skive av den sammen, hva ser den ut til å be om?"
    },

    // David
    "dp_empathic-explorations_case-david_01": {
      text: "Å bli kalt kald gjør at ansiktet brenner og jeg blir hard.",
      suggestion: "Det er en brenning og en herding; hvis vi blir ved brenningen et øyeblikk, hva begynner å vise seg under hardheten?"
    },
    "dp_empathic-explorations_case-david_02": {
      text: "Når jeg ikke imponerer, kjenner jeg et hult punkt inni meg.",
      suggestion: "Det hule punktet er merkbart; hvis vi blir forsiktig ved det, hvordan er det–og hva ser det ut til å savne?"
    },
    "dp_empathic-explorations_case-david_03": {
      text: "Om kvelden er det en flathet jeg ikke blir kvitt.",
      suggestion: "Flatheten er her; hvis vi blir ved den i noen pust, hvilke svake signaler begynner å stige under–om noen?"
    },

    // Marcus
    "dp_empathic-explorations_case-marcus_01": {
      text: "De fleste dager går jeg på autopilot, og så kommer en bølge fra ingensteds.",
      suggestion: "Det er en kant før bølgen; hvis vi holder oss nær den kanten, hva legger du merke til i kroppen?"
    },
    "dp_empathic-explorations_case-marcus_02": {
      text: "Mareritt etterlater meg tom og oppskrudd.",
      suggestion: "Tom og oppskrudd er begge her; hvis vi blir ved den som er sterkest, hvordan kjennes den fra innsiden nå?"
    },
    "dp_empathic-explorations_case-marcus_03": {
      text: "Å være med folk kjennes risikabelt, så jeg holder meg for meg selv.",
      suggestion: "Kroppen din kjenner en risiko; hvis vi sitter med den følelsen et øyeblikk, hva ser den ut til å advare mest mot?"
    },

    // Empatisk fremkalling (Empathic Evocations)
    // Sara
    "dp_empathic-evocations_case-sara_01": {
      text: "Kveldene i leiligheten er så stille at det presser på brystet.",
      suggestion: "Stillheten legger seg på brystet som et tungt teppe av alene."
    },
    "dp_empathic-evocations_case-sara_02": {
      text: "Jeg smiler og sier at det går bra, men inni svir det.",
      suggestion: "Smilet kjennes som et tynt lokk over et skarpt stikk inni."
    },
    "dp_empathic-evocations_case-sara_03": {
      text: "Å se bilde av ham med en ny slår pusten ut av meg.",
      suggestion: "Det treffer som et slag i mellomgulvet og tar pusten fra deg."
    },

    // Michael
    "dp_empathic-evocations_case-michael_01": {
      text: "Når de peker på en feil, kjenner jeg varme skyte opp i nakken.",
      suggestion: "Som en varm flamme som skyter oppover halsen mot ansiktet."
    },
    "dp_empathic-evocations_case-michael_02": {
      text: "Jeg forbereder meg på mangel på respekt idet jeg går inn i rommet.",
      suggestion: "Du går inn med rustning og skanner etter neste treff."
    },
    "dp_empathic-evocations_case-michael_03": {
      text: "Etter et utbrudd henger skammen over meg hele natta.",
      suggestion: "Skammen ligger som en tung tåke som klistrer seg og ikke slipper."
    },

    // Jason
    "dp_empathic-evocations_case-jason_01": {
      text: "Når alle ser på meg, strammer halsen seg og hodet blir blankt.",
      suggestion: "Lyskasteren treffer, halsen knyter seg og skjermen inni blir svart."
    },
    "dp_empathic-evocations_case-jason_02": {
      text: "Jeg hører en stemme som kaller meg klønete og jeg krymper meg.",
      suggestion: "Den indre stemmen er en kald hvisken som får deg til å trekke deg inn."
    },
    "dp_empathic-evocations_case-jason_03": {
      text: "Søndagskveldene føles endeløse og tomme.",
      suggestion: "De strekker seg som en lang, dempet korridor uten dører."
    },

    // Laura
    "dp_empathic-evocations_case-laura_01": {
      text: "De fleste dager kjennes dempet, som å gå i tåke.",
      suggestion: "Som om en grå tåke demper farger og lyder rundt deg."
    },
    "dp_empathic-evocations_case-laura_02": {
      text: "Hevede stemmer gjør at magen faller.",
      suggestion: "I det stemmene stiger, synker magen som en heis som går for fort."
    },
    "dp_empathic-evocations_case-laura_03": {
      text: "Vennlighet gjør at jeg blir fjern.",
      suggestion: "Varmen kommer mot deg og en del av deg trekker seg bak glass."
    },

    // Carlos
    "dp_empathic-evocations_case-carlos_01": {
      text: "En skjev tone tenner meg og kjeven låser seg.",
      suggestion: "Som et raskt flammeutbrudd i brystet mens en klype strammer rundt kjeven."
    },
    "dp_empathic-evocations_case-carlos_02": {
      text: "Å huske at barnet mitt skvatt, skjærer i meg.",
      suggestion: "Det skjærer rett inn i midten av deg."
    },
    "dp_empathic-evocations_case-carlos_03": {
      text: "Jeg sier til meg selv at jeg må holde meg på topp, ellers blir jeg knust.",
      suggestion: "Det kjennes som å stå høyt og stramt–et lite glipp kan gi et hardt fall."
    },

    // Nina
    "dp_empathic-evocations_case-nina_01": {
      text: "Idet jeg ber om hjelp, summer skylden gjennom meg.",
      suggestion: "Skylden summer som et skarpt alarmvarsel som ber deg stå over."
    },
    "dp_empathic-evocations_case-nina_02": {
      text: "Jeg bærer alt selv om jeg er tom.",
      suggestion: "Som å gå med en ryggsekk full av stein som aldri settes ned."
    },
    "dp_empathic-evocations_case-nina_03": {
      text: "Noen ganger sitter jeg i bilen og puster før jeg går inn.",
      suggestion: "Den pausen er som en liten øy hvor du kan hente pusten."
    },

    // Aisha
    "dp_empathic-evocations_case-aisha_01": {
      text: "Når et svar ikke kommer, kjennes det som om jeg faller.",
      suggestion: "Stillheten åpner seg som et fall under deg, og magen slipper taket."
    },
    "dp_empathic-evocations_case-aisha_02": {
      text: "Jeg kan gå fra kjærlighet til raseri på minutter når jeg føler meg oversett.",
      suggestion: "Det svinger som en dør som smeller–fra bønn til brann på et øyeblikk."
    },
    "dp_empathic-evocations_case-aisha_03": {
      text: "Tomheten i brystet kan kjennes endeløs.",
      suggestion: "Tomheten er et bredt, mørkt hull som bare fortsetter."
    },

    // David
    "dp_empathic-evocations_case-david_01": {
      text: "Å bli kalt kald brenner, og jeg blir hard med en gang.",
      suggestion: "Ordet brenner som et brennmerke, og du tar på et hardt skall."
    },
    "dp_empathic-evocations_case-david_02": {
      text: "Hvis jeg ikke er imponerende, kjenner jeg meg hul.",
      suggestion: "Uten glansen er det et hult rom inni som gir gjenlyd."
    },
    "dp_empathic-evocations_case-david_03": {
      text: "Hjemme føler jeg meg plukket fra hverandre.",
      suggestion: "Som å stå under en skarp lampe der hver liten feil blir markert."
    },

    // Marcus
    "dp_empathic-evocations_case-marcus_01": {
      text: "De fleste dager går jeg på autopilot og kjenner ingenting.",
      suggestion: "Autopilot kjennes som å bevege seg under vann–alt går saktere og lenger unna."
    },
    "dp_empathic-evocations_case-marcus_02": {
      text: "Ut av det blå slår en bølge inn.",
      suggestion: "Bølgen er som en rivstrøm som river deg av føttene."
    },
    "dp_empathic-evocations_case-marcus_03": {
      text: "Stillheten hjemme kjennes tung.",
      suggestion: "Stillheten legger seg som et tykt teppe som kveler følelsen."
    },

    // Empatiske antakelser (Empathic Conjectures)
    // Sara
    "dp_empathic-conjectures_case-sara_01": {
      text: "Jeg sier til meg selv at jeg må slutte å være dramatisk og bare komme meg videre.",
      suggestion: "Jeg lurer på om det under presset om å komme videre finnes en del som føler seg veldig alene og uverdig."
    },
    "dp_empathic-conjectures_case-sara_02": {
      text: "Jeg slettet bildene våre så jeg kan bli normal igjen.",
      suggestion: "Kan det være at en del av deg fortsatt lengter etter å bli valgt, og at slettingen prøver å beskytte det ømme stedet?"
    },
    "dp_empathic-conjectures_case-sara_03": {
      text: "Når jeg begynner å gråte her, sier jeg unnskyld uten å tenke.",
      suggestion: "Kanskje ligger det litt skam ved siden av tristheten over det å trenge noen i det hele tatt."
    },

    // Michael
    "dp_empathic-conjectures_case-michael_01": {
      text: "Hvis jeg ikke presser folk, slakker de og jeg ser dårlig ut.",
      suggestion: "Jeg lurer på om det under presset ligger en frykt for å bli sett som liten eller ikke god nok."
    },
    "dp_empathic-conjectures_case-michael_02": {
      text: "Da kollegaen min rettet på meg, klikket det for meg.",
      suggestion: "Kan det være at sinnet kom raskt for å dekke over et stikk av sårethet eller forlegenhet akkurat da?"
    },
    "dp_empathic-conjectures_case-michael_03": {
      text: "Etter at jeg roper, unngår jeg øyekontakt hjemme.",
      suggestion: "Kanskje er det en stille skam der som er vanskelig å møte med dem."
    },

    // Jason
    "dp_empathic-conjectures_case-jason_01": {
      text: "Når jeg snakker, hører jeg en stemme som sier at jeg høres dum ut.",
      suggestion: "Jeg lurer på om den stemmen prøver å beskytte en veldig sår frykt for å bli avslørt eller avvist."
    },
    "dp_empathic-conjectures_case-jason_02": {
      text: "Jeg dropper lunsjinvitasjoner og sier at jeg er opptatt.",
      suggestion: "Kan det være at en del forventer å bli oversett igjen, og at å droppe er en måte å slippe det stikket på?"
    },
    "dp_empathic-conjectures_case-jason_03": {
      text: "Å bli blank kjennes tryggere enn å si noe feil.",
      suggestion: "Kanskje er blankheten en beskytter som trer inn når skammen kommer nær."
    },

    // Laura
    "dp_empathic-conjectures_case-laura_01": {
      text: "Når noen er snille, føler jeg meg fjern, som om det ikke er ment for meg.",
      suggestion: "Jeg lurer på om avstanden kommer for å holde deg trygg fra en veldig gammel smerte rundt tillit og omsorg."
    },
    "dp_empathic-conjectures_case-laura_02": {
      text: "Et smell i en dør fikk meg til å fryse i flere minutter.",
      suggestion: "Kan det være at kroppen din husket fare og frykt, selv om hodet visste at du var her og nå?"
    },
    "dp_empathic-conjectures_case-laura_03": {
      text: "Jeg unngår koret fordi jeg kan komme til å gråte.",
      suggestion: "Kanskje ligger det en sorg rett under overflaten som føles for stor til å slippe ut ennå."
    },

    // Carlos
    "dp_empathic-conjectures_case-carlos_01": {
      text: "Et himlende blikk trigger meg som en bryter.",
      suggestion: "Jeg lurer på om det under varmen er et øyeblikk av ydmykelse som gjør fort vondt."
    },
    "dp_empathic-conjectures_case-carlos_02": {
      text: "At ungen min skvatt, spiller seg om og om igjen i hodet mitt.",
      suggestion: "Kan det være at en del av deg er redd for at du blir som den som såret deg, og at det skjærer dypt?"
    },
    "dp_empathic-conjectures_case-carlos_03": {
      text: "Jeg hater å si unnskyld fordi det føles svakt.",
      suggestion: "Kanskje berører det å beklage et sårt sted som er redd for å bli sett som mindre."
    },

    // Nina
    "dp_empathic-conjectures_case-nina_01": {
      text: "Å hvile får meg til å føle meg egoistisk.",
      suggestion: "Jeg lurer på om en del lærte for lenge siden at å be om eller trenge noe risikerer å bli avvist."
    },
    "dp_empathic-conjectures_case-nina_02": {
      text: "Jeg blir bitter, og så med en gang får jeg skyldfølelse.",
      suggestion: "Kan det være at skylden skynder seg inn for å dekke over et sinne som sier at du har stått alene med for mye for lenge?"
    },
    "dp_empathic-conjectures_case-nina_03": {
      text: "Jeg beklager selv for små forespørsler.",
      suggestion: "Kanskje finnes det en tro på at behovene dine ikke teller med mindre du gir."
    },

    // Aisha
    "dp_empathic-conjectures_case-aisha_01": {
      text: "Hvis du ikke svarer raskt, kjennes det som om jeg forsvinner.",
      suggestion: "Jeg lurer på om det under panikken finnes en skrekk for å være alene som startet for lenge siden."
    },
    "dp_empathic-conjectures_case-aisha_02": {
      text: "Etter at jeg eksploderer, hater jeg meg selv.",
      suggestion: "Kan det være at raseriet dekker over en dyp smerte og skam du bærer på rundt det å være elskbar?"
    },
    "dp_empathic-conjectures_case-aisha_03": {
      text: "Noen ganger skyver jeg folk vekk først.",
      suggestion: "Kanskje er det å skyve først en måte å slippe smerten ved å bli forlatt igjen."
    },

    // David
    "dp_empathic-conjectures_case-david_01": {
      text: "Når kona kaller meg kald, blir jeg hard og ramser opp feilene hennes.",
      suggestion: "Jeg lurer på om det under hardheten er et raskt stikk av ikke å være nok."
    },
    "dp_empathic-conjectures_case-david_02": {
      text: "Hvis jeg ikke er best i rommet, føler jeg meg tom.",
      suggestion: "Kan det være at tomheten handler om ikke å føle seg verdsatt for hvem du er, ikke bare for det du presterer?"
    },
    "dp_empathic-conjectures_case-david_03": {
      text: "Jeg sier at affæren ikke betydde noe, men jeg føler meg fortsatt off.",
      suggestion: "Kanskje er det en stille smerte eller skyld der som er vanskelig å la seg selv kjenne."
    },

    // Marcus
    "dp_empathic-conjectures_case-marcus_01": {
      text: "Jeg tar ekstravakter så jeg slipper å tenke.",
      suggestion: "Jeg lurer på om det å holde seg opptatt hindrer en smertefull ensomhet eller sorg fra å flomme inn."
    },
    "dp_empathic-conjectures_case-marcus_02": {
      text: "Jeg holder leiligheten mørk og stille.",
      suggestion: "Kan det være at stillheten er tryggere enn å risikere nærhet og bli såret?"
    },
    "dp_empathic-conjectures_case-marcus_03": {
      text: "Jeg ignorerer invitasjoner fordi folk ikke blir.",
      suggestion: "Kanskje er det en del som lengter etter nærhet og en annen som beskytter deg ved å holde avstand."
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
