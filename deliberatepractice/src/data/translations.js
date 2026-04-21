"use strict";

import { CONTENT_REVISION } from "./contentMeta.js";

export const LANGUAGE_ORDER = [
  "en",
  "no"
];

export const LANGUAGE_METADATA = {
  "en": {
    "label": "English",
    "locale": "en",
    "direction": "ltr"
  },
  "no": {
    "label": "Norsk (bokmål)",
    "locale": "no",
    "direction": "ltr"
  }
};

export const LANGUAGE_UI = {
  "en": {
    "appTitle": "Deliberate Practice Lab",
    "tagline": "Build precision with focused skills and curated cases across difficulty levels.",
    "languageHeading": "Choose a Language",
    "languageDescription": "Select the language you want to practice in.",
    "languageListAria": "Language options",
    "skillHeading": "Choose a Skill",
    "skillDescription": "Pick the focus area you want to strengthen today.",
    "skillListAria": "Skill options",
    "caseHeading": "Pick a Case",
    "caseDescription": "Explore curated scenarios with built-in difficulty levels.",
    "caseListAria": "Case options",
    "skillMarkerLabel": "Markers",
    "skillSummaryLabel": "How to Work",
    "skillAimLabel": "Aim",
    "skillPracticeFocusLabel": "What to practice",
    "skillCommonMissLabel": "Common miss",
    "glossaryHint": "Tap highlighted terms to see quick definitions.",
    "glossaryTitle": "Key term",
    "glossaryClose": "Close definition",
    "showSkillInstructions": "Show instructions",
    "hideSkillInstructions": "Hide instructions",
    "historyLabel": "History",
    "schemaLabel": "Maladaptive Scheme",
    "corePainLabel": "Core Pain",
    "styleLabel": "Style",
    "casePracticeEdgeLabel": "What to listen for",
    "caseBriefHeading": "Case Brief",
    "roleBriefHeading": "Role Background",
    "clientVoiceHeading": "Client Voice",
    "practiceControlsAria": "Practice controls",
    "shuffle": "Shuffle Statements",
    "shuffleAria": "Shuffle statement order",
    "next": "Next",
    "nextAria": "Advance to the next statement",
    "showSuggestion": "Show Suggested Response",
    "hideSuggestion": "Hide Suggested Response",
    "suggestionHiddenLabel": "Suggested response is hidden",
    "suggestionShownLabel": "Suggested response is visible",
    "statementFallback": "Statements for this case are not available yet.",
    "emptyPrompt": "Select a skill and case to begin practicing statements.",
    "counterPattern": "{current} of {total}",
    "startPractice": "Begin Practice",
    "viewCaseBrief": "View Case Brief",
    "backToLanguage": "Language",
    "backToLanguageAria": "Back to language selection",
    "backToSkills": "Skills",
    "backToSkillsAria": "Back to skills",
    "backToCases": "Cases",
    "backToCasesAria": "Back to cases",
    "footerNote": "Copyright © 2025 Jaran Olsen. All rights reserved.",
    "statementPanelAria": "Client statements to practice with",
    "lockedLabel": "Locked",
    "lockedBanner": "Most cases are for members. Enter your access code to unlock the full library.",
    "lockedPlaceholder": "This case is locked. Unlock to view statements.",
    "paywallHeading": "Unlock the full library",
    "paywallMessage": "Enter your access code to view this case",
    "unlockSubmit": "Unlock",
    "unlockMissing": "Enter a code to continue.",
    "unlockInvalid": "That code was not recognized.",
    "unlockError": "Could not unlock right now. Please try again.",
    "unlockSuccess": "Unlocked! Full library is available.",
    "unlockWorking": "Checking code...",
    "unlockConfigMissing": "Supabase configuration is missing. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.",
    "feedbackTitle": "Flag this item",
    "feedbackReasonLabel": "What's wrong?",
    "feedbackDetailsLabel": "Add details (optional)",
    "feedbackSubmit": "Send feedback",
    "feedbackToggleShow": "Flag",
    "feedbackToggleHide": "Hide",
    "feedbackSending": "Sending...",
    "feedbackSuccess": "Thanks! Your feedback was sent.",
    "feedbackError": "Unable to send feedback. Please try again.",
    "feedbackUnavailable": "Select a case and statement to send feedback.",
    "feedbackConfigMissing": "Feedback storage is not configured."
  },
  "no": {
    "appTitle": "Deliberate Practice Lab",
    "tagline": "Bygg presisjon med målrettede ferdigheter på nøye utvalgte caser over flere vanskelighetsnivåer.",
    "languageHeading": "Velg språk",
    "languageDescription": "Velg språket du vil øve på.",
    "languageListAria": "Språkvalg",
    "skillHeading": "Velg en ferdighet",
    "skillDescription": "Velg hva du vil øve på i dag.",
    "skillListAria": "Ferdighetsvalg",
    "caseHeading": "Velg en case",
    "caseDescription": "Utforsk nøye utvalgte caser av forskjellig vanskelighetsgrad.",
    "caseListAria": "Casevalg",
    "skillMarkerLabel": "Markører",
    "skillSummaryLabel": "Hvordan jobbe",
    "skillAimLabel": "Mål",
    "skillPracticeFocusLabel": "Hva du øver på",
    "skillCommonMissLabel": "Vanlig feilgrep",
    "glossaryHint": "Trykk på markerte begreper for å se en kort forklaring.",
    "glossaryTitle": "Nøkkelbegrep",
    "glossaryClose": "Lukk forklaring",
    "showSkillInstructions": "Vis instruksjoner",
    "hideSkillInstructions": "Skjul instruksjoner",
    "historyLabel": "Bakgrunn",
    "schemaLabel": "Maladaptivt skjema",
    "corePainLabel": "Kjernesmerte",
    "styleLabel": "Stil",
    "casePracticeEdgeLabel": "Hva du bør lytte etter",
    "caseBriefHeading": "Caseoversikt",
    "roleBriefHeading": "Rollebakgrunn",
    "clientVoiceHeading": "Klientens stemme",
    "practiceControlsAria": "Kontroller for øving",
    "shuffle": "Stokk om utsagnene",
    "shuffleAria": "Stokk om rekkefølgen på utsagnene",
    "next": "Neste",
    "nextAria": "Gå til neste utsagn",
    "showSuggestion": "Vis foreslått respons",
    "hideSuggestion": "Skjul foreslått respons",
    "suggestionHiddenLabel": "Foreslått respons er skjult",
    "suggestionShownLabel": "Foreslått respons er synlig",
    "statementFallback": "Utsagnene for denne casen er ikke tilgjengelige ennå.",
    "emptyPrompt": "Velg en ferdighet og en case for å begynne å øve.",
    "counterPattern": "{current} av {total}",
    "startPractice": "Start øvingen",
    "viewCaseBrief": "Vis caseoversikt",
    "backToLanguage": "Språk",
    "backToLanguageAria": "Tilbake til språkvalg",
    "backToSkills": "Ferdigheter",
    "backToSkillsAria": "Tilbake til ferdigheter",
    "backToCases": "Caser",
    "backToCasesAria": "Tilbake til caser",
    "footerNote": "Opphavsrett © 2025 Jaran Olsen. Alle rettigheter forbeholdt.",
    "statementPanelAria": "Klientutsagn for øving",
    "lockedLabel": "Låst",
    "lockedBanner": "De fleste casene er låst. Bruk tilgangskoden for å åpne biblioteket.",
    "lockedPlaceholder": "Denne casen er låst. Lås opp for å se utsagnene.",
    "paywallHeading": "Lås opp hele biblioteket",
    "paywallMessage": "Skriv inn tilgangskoden for å se denne casen",
    "unlockSubmit": "Lås opp",
    "unlockMissing": "Skriv inn kode for å fortsette.",
    "unlockInvalid": "Koden ble ikke gjenkjent.",
    "unlockError": "Kunne ikke låse opp nå. Prøv igjen.",
    "unlockSuccess": "Låst opp! Hele biblioteket er tilgjengelig.",
    "unlockWorking": "Sjekker kode...",
    "unlockConfigMissing": "Supabase-oppsett mangler. Legg til VITE_SUPABASE_URL og VITE_SUPABASE_ANON_KEY.",
    "feedbackTitle": "Rapporter dette punktet",
    "feedbackReasonLabel": "Hva er problemet?",
    "feedbackDetailsLabel": "Detaljer (valgfritt)",
    "feedbackSubmit": "Send tilbakemelding",
    "feedbackToggleShow": "Flagg",
    "feedbackToggleHide": "Skjul",
    "feedbackSending": "Sender...",
    "feedbackSuccess": "Takk! Tilbakemeldingen ble sendt.",
    "feedbackError": "Kunne ikke sende tilbakemelding. Prøv igjen.",
    "feedbackUnavailable": "Velg en case og et utsagn for å sende tilbakemelding.",
    "feedbackConfigMissing": "Lagring av tilbakemelding er ikke satt opp."
  }
};

export const CASE_FORMULATION_TRANSLATIONS = {
  "no": {
    "case-sara": {
      "corePain": "Skampreget ensomhet og frykt for å bli forlatt, forankret i følelsesmessig avstand fra omsorgspersonene."
    },
    "case-michael": {
      "corePain": "Ydmykelse, utilstrekkelighet og frykt for å bli avslørt, knyttet til en kritisk far og betinget egenverdi."
    },
    "case-jason": {
      "corePain": "En dyp følelse av å være defekt, sosialt klein og redd for å bli avslørt, formet av mobbing og engstelig omsorg."
    },
    "case-laura": {
      "corePain": "Traumebundet frykt, skam og ensomhet knyttet til å oppleve seg skadet og utrygg i nærhet."
    },
    "case-carlos": {
      "corePain": "Ydmykelse, frykt og småhet skjult bak tøffhet som ble lært i voldelige miljøer."
    },
    "case-nina": {
      "corePain": "Frykt for at egne behov eller sinne gjør henne egoistisk, uverdig og lett å forlate."
    },
    "case-aisha": {
      "corePain": "Knusende frykt for å bli forlatt og ikke være elskbar, formet av fosterhjem og traumebetinget ustabilitet."
    },
    "case-david": {
      "corePain": "Verdiløshet og skam skjult under statusjag og kontroll."
    },
    "case-marcus": {
      "corePain": "Fastfrossen sorg, frykt, skam og skyld over å ha overlevd, skjult under nummenhet og tilbaketrekning."
    }
  }
};

export const STATEMENT_TRANSLATION_REVISION = CONTENT_REVISION;

export const LANGUAGE_OVERRIDES = {
  "no": {
    "therapist-self-awareness": {
      "name": "Terapeutens selvbevissthet",
      "description": "Følg med på din egen indre tilstand slik at du kan være jordet, mottakelig og følelsesmessig regulert nok til å lede arbeidet trygt.",
      "summary": "Terapeutisk selvbevissthet handler om å spore egen kropp, følelser, tanker og impulser i sanntid slik at du kan velge hvordan du vil svare i stedet for å reagere automatisk. Du legger merke til når aktiveringen øker – for eksempel fiksetrang, uro, irritasjon eller nummenhet – og gjenkjenner det som dine egne sekundære reaksjoner, ikke som nøyaktig informasjon om klienten.\n\nI stedet for å handle ut fra disse reaksjonene, stopper du opp, puster og re-sentrerer deg, slik at du kan være en stødig, innstemt tilstedeværelse innenfor klientens toleransevindu. Du legger merke til hva som blir trigget i deg og setter det vennlig i parentes, slik at klientens prosess fortsatt får stå i forgrunnen. Denne bevisstheten hjelper deg å forbli nysgjerrig og empatisk når klienten viser sterke eller krevende følelser, heller enn å bli defensiv, reddende eller trekke deg unna.\n\nNår du regulerer deg selv på denne måten, blir du et pålitelig emosjonelt anker når klienten nærmer seg primære, ofte smertefulle følelser. Du modellerer sunn emosjonell regulering og kongruens, og viser at sterke følelser kan merkes og rommes uten å bli undertrykt eller handlet ut. Over tid gjør denne praksisen det lettere å justere opp eller ned intensiteten i samtalen i tråd med klientens behov, slik at den emosjonelle bearbeidingen kan bli både dyp og trygg.",
      "marker": "Du merker at du blir anspent, får fiksetrang, blir defensiv, nummen eller sterkt dratt mot eller vekk fra klienten, eller at den empatiske nysgjerrigheten glipper. Du får en fornemmelse av at dine egne reaksjoner er i ferd med å styre samspillet mer enn klientens behov.",
      "aim": "Regulere deg selv slik at du forblir jordet, empatisk og innstemt, og kan være med på å samregulere klientens aktivering innenfor et håndterbart vindu. Verne om et trygt rom der kjernesmerte og primære følelser kan komme frem uten å bli avbrutt av ubehandlede reaksjoner hos terapeuten.",
      "practiceFocus": "Fang først opp din egen reaksjon, reguler den, og svar deretter fra jordet innstemming.",
      "commonMiss": "Å gjøre selvbevissthet til et manus eller gå rett til fiksing før du faktisk har landet i deg selv.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg er Sara. På papiret går det fint – jeg leverer frister og tar kaffe med teamet – men idet jeg er alene, føles det som om bruddet beviser at jeg er for mye å elske. Jeg spiller samtaler om og om igjen og lurer på hvilken feil som til slutt dyttet ham bort. Jeg sier til venner at jeg er opptatt fordi jeg ikke orker blikkene, og jeg sovner til podkaster for å slippe stillheten. Jeg kom i terapi fordi jeg er lei av å late som om det går bra når jeg inni meg føler meg tom og uverdig."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg er Michael. Jeg holder prosjektene på skinner hele dagen, og idet noen stiller spørsmål, kjenner jeg varme i brystet og jeg bjeffer ordre. Jeg sier til meg selv at det er stress, men senere ligger jeg våken og ser for meg ansiktet til kona når jeg smeller. Pappa lærte meg at bare de beste overlever, så tanken på at folk ser meg som overreagerende eller svak er uutholdelig. Jeg vil slutte å eksplodere før jeg ødelegger det som betyr noe."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg er Jason. Hvert møte føles som en prøve jeg er i ferd med å stryke, så jeg holder kjeft og klandrer meg selv etterpå. Venner inviterer meg ut, men jeg stirrer på meldingen til det er for sent å svare. Når jeg ser for meg å si noe høyt, låser brystet seg og en stemme sier: «Avslør ikke hvor rar du er.» Jeg er utslitt av å leve i hodet mitt og vil kjenne at jeg hører til et sted."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. De fleste dager går jeg fra vakt til vakt og gjør det som må gjøres, uten å kjenne noe særlig. Når noen hever stemmen, synker magen som om jeg er tilbake i det huset. Jeg sier til meg selv at fortiden er over, men når jeg prøver å stole på noen eller være nær, blir jeg blank eller heller i et glass for å bli nummen. Jeg er her fordi ensomheten har blitt høyere enn frykten."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg er Carlos. Jeg elsker familien min, men ett øyeblikk spøker jeg med kona, og det neste slår jeg i veggen fordi hun stilte meg spørsmål. På jobben kan et blikk fra en yngre fyr få meg til å se rødt. Jeg lærte at du slår først så du ikke blir slått, men nå ser jeg sønnen min skvette når jeg roper. Jeg vil finne en måte å verne stoltheten på uten å skremme dem jeg er glad i."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg er Nina. Dagen starter før soloppgang med matpakker og e-poster for andre, og om kvelden er jeg for sliten til å svare mine egne barn. Når jeg endelig ber om hjelp, skyller skyld inn og jeg kaller meg egoistisk. Jeg vet knapt hva jeg liker lenger. Jeg er redd for at hvis jeg slutter å overprestere, vil ingen ha meg, men jeg kan ikke fortsette på tomgang."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg er Aisha. Når noen jeg elsker ikke svarer raskt, føles det som om gulvet åpner seg og jeg faller. Jeg kan gå fra å idealisere til å hate på en time fordi smerten er uutholdelig. Jeg kutter for å dempe stormen eller kjenne at jeg finnes. Jeg vil tro at jeg ikke er for ødelagt til å bli elsket, og at jeg kan overleve å være alene litt."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "Jeg er David. Jeg har bygget en karriere på å ha svarene, men hjemme møter jeg himlende blikk og anklager om at jeg er kald. Ordet «narsissist» svir fordi det avslører hvor hul jeg føler meg når jeg ikke vinner. Faren min roste resultater, ikke meg, og jeg vet ikke hvordan jeg blir elsket uten å prestere. Jeg er redd for at de jeg bryr meg om vil se sprekkene og gå."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Jeg heter Marcus. De fleste dager beveger jeg meg gjennom jobben som et spøkelse og synker ned på sofaen og stirrer i veggen. Nettene er verre – ansikter fra utenlandsoppdrag eller barndommen dukker opp i drømmene. Når noen spør hvordan jeg har det, sier jeg «bra», fordi det føles farlig å vise mer. Jeg er her fordi det å ikke føle noe begynner å kjennes som å forsvinne."
        }
      }
    },
    "empathic-understanding": {
      "name": "Empatisk forståelse",
      "description": "Speil klientens indre verden med følelsesnært, presist språk slik at de kjenner seg dypt forstått og invitert til å utforske videre.",
      "summary": "Empatisk forståelse innebærer å gi korte, presise gjentakelser som både fanger hva som skjedde og hvordan det kjennes for klienten akkurat nå. Du lytter etter den emosjonelle meningen under historien og svarer med språk som treffer følelsen, ikke bare fakta. Responsene er korte, her-og-nå-orienterte og frie for råd og tolkninger, slik at klientens opplevelse forblir i sentrum. Hovedintensjonen er å formidle forståelse – dersom opplevelsen fordypes, skjer det som en naturlig følge av å bli møtt.\n\nNår du speiler følelsene med varme og presisjon, kjenner klienten seg mindre alene og mer sett, noe som demper sekundære reaksjoner som skam og tilbaketrekning. Opplevelsen av å være forstått gjør det lettere å bli værende i og utdype de primære følelsene, i stedet for å forklare dem bort eller skifte tema.\n\nOver tid hjelper denne måten å lytte på klienten til å skille mellom lag av følelser og se mønstre i egne reaksjoner. Den styrker alliansen og skaper den tryggheten som trengs for å nærme seg kjernesmerte og udekkede behov. Empatiske gjentakelser organiserer også opplevelsen – det som før var uklart og implisitt blir tydeligere og mer håndterbart. I følelsesfokusert og annen opplevelsesorientert terapi er dette en grunnleggende måte å støtte økt bevissthet, uttrykk og endring på.",
      "marker": "Følelser er tydelig til stede i det klienten forteller, eller historien kjennes uklar, søkende eller fragmentert og de ser ut til å trenge hjelp til å organisere den. Klienten virker «sulten» på å bli hørt, validert og presist sett i sin emosjonelle opplevelse.",
      "aim": "Formidle presis, varm forståelse som gjør at klienten kjenner seg trygg og akseptert akkurat der de er, og som gjør det lettere å utdype følelsene uten å føle seg feil eller overdrevet.",
      "practiceFocus": "Speil den følte meningen i klientens opplevelse med kort, presist språk som ligger tett på deres egne ord.",
      "commonMiss": "Å legge til forklaring, forsikring eller fordypning før klienten har rukket å kjenne seg fullt forstått.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg er Sara. På papiret går det fint – jeg leverer frister og tar kaffe med teamet – men idet jeg er alene, føles det som om bruddet beviser at jeg er for mye å elske. Jeg spiller samtaler om og om igjen og lurer på hvilken feil som til slutt dyttet ham bort. Jeg sier til venner at jeg er opptatt fordi jeg ikke orker blikkene, og jeg sovner til podkaster for å slippe stillheten. Jeg kom i terapi fordi jeg er lei av å late som om det går bra når jeg inni meg føler meg tom og uverdig."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg er Michael. Jeg holder prosjektene på skinner hele dagen, og idet noen stiller spørsmål, kjenner jeg varme i brystet og jeg bjeffer ordre. Jeg sier til meg selv at det er stress, men senere ligger jeg våken og ser for meg ansiktet til kona når jeg smeller. Pappa lærte meg at bare de beste overlever, så tanken på at folk ser meg som overreagerende eller svak er uutholdelig. Jeg vil slutte å eksplodere før jeg ødelegger det som betyr noe."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg er Jason. Hvert møte føles som en prøve jeg er i ferd med å stryke, så jeg holder kjeft og klandrer meg selv etterpå. Venner inviterer meg ut, men jeg stirrer på meldingen til det er for sent å svare. Når jeg ser for meg å si noe høyt, låser brystet seg og en stemme sier: «Avslør ikke hvor rar du er.» Jeg er utslitt av å leve i hodet mitt og vil kjenne at jeg hører til et sted."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. De fleste dager går jeg fra vakt til vakt og gjør det som må gjøres, uten å kjenne noe særlig. Når noen hever stemmen, synker magen som om jeg er tilbake i det huset. Jeg sier til meg selv at fortiden er over, men når jeg prøver å stole på noen eller være nær, blir jeg blank eller heller i et glass for å bli nummen. Jeg er her fordi ensomheten har blitt høyere enn frykten."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg er Carlos. Jeg elsker familien min, men ett øyeblikk spøker jeg med kona, og det neste slår jeg i veggen fordi hun stilte meg spørsmål. På jobben kan et blikk fra en yngre fyr få meg til å se rødt. Jeg lærte at du slår først så du ikke blir slått, men nå ser jeg sønnen min skvette når jeg roper. Jeg vil finne en måte å verne stoltheten på uten å skremme dem jeg er glad i."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg er Nina. Dagen starter før soloppgang med matpakker og e-poster for andre, og om kvelden er jeg for sliten til å svare mine egne barn. Når jeg endelig ber om hjelp, skyller skyld inn og jeg kaller meg egoistisk. Jeg vet knapt hva jeg liker lenger. Jeg er redd for at hvis jeg slutter å overprestere, vil ingen ha meg, men jeg kan ikke fortsette på tomgang."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg er Aisha. Når noen jeg elsker ikke svarer raskt, føles det som om gulvet åpner seg og jeg faller. Jeg kan gå fra å idealisere til å hate på en time fordi smerten er uutholdelig. Jeg kutter for å dempe stormen eller kjenne at jeg finnes. Jeg vil tro at jeg ikke er for ødelagt til å bli elsket, og at jeg kan overleve å være alene litt."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "Jeg er David. Jeg har bygget en karriere på å ha svarene, men hjemme møter jeg himlende blikk og anklager om at jeg er kald. Ordet «narsissist» svir fordi det avslører hvor hul jeg føler meg når jeg ikke vinner. Faren min roste resultater, ikke meg, og jeg vet ikke hvordan jeg blir elsket uten å prestere. Jeg er redd for at de jeg bryr meg om vil se sprekkene og gå."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Jeg heter Marcus. De fleste dager beveger jeg meg gjennom jobben som et spøkelse og synker ned på sofaen og stirrer i veggen. Nettene er verre – ansikter fra utenlandsoppdrag eller barndommen dukker opp i drømmene. Når noen spør hvordan jeg har det, sier jeg «bra», fordi det føles farlig å vise mer. Jeg er her fordi det å ikke føle noe begynner å kjennes som å forsvinne."
        }
      }
    },
    "empathic-affirmation-validation": {
      "name": "Empatisk bekreftelse og validering",
      "description": "Sett følelsene inn i en meningsfull sammenheng og si tydelig at de gir mening, slik at skam og selvangrep myknes og det blir tryggere å føle.",
      "summary": "Empatisk bekreftelse og validering handler om å si tydelig at klientens følelser gir mening i lys av det de har opplevd. Du setter ord på de situasjonene, relasjonene eller livserfaringene som gjør en gitt følelse forståelig, og går imot indre budskap som «jeg overreagerer» eller «jeg burde ikke føle dette». Når du merker skam og selvkritikk, bekrefter du både gyldigheten i følelsen og motet det krever å vise den.\n\nPå den måten demper du sekundære, hemmende følelser som skam, skyld og forakt, som ellers lett kveler primære reaksjoner og hindrer bearbeiding. For mange som har fått følelsene sine avvist, gjort narr av eller straffet, blir ekte validering en korrigerende emosjonell erfaring – tristhet, sinne, frykt eller sårethet møtes med respekt i stedet for kritikk. Det gjør det mulig å bli værende i følelsen lenge nok til at kjernesmerte og udekkede behov kan tre tydeligere frem.\n\nValidering betyr ikke å støtte alle handlinger; du skiller mellom at følelsen er forståelig, og hvordan man velger å handle på den. Over tid hjelper konsistent bekreftelse klienten til å utvikle en mer medfølende indre stemme og mindre kronisk selvangrep, slik at også dypt skambelagte følelser kan komme frem og forandres.",
      "marker": "Klienten uttrykker skam eller hard selvkritikk, bagatelliserer eller unnskylder følelsene sine med utsagn som «jeg burde ikke føle dette» eller «det er teit at jeg er så lei meg». De ser kanskje ned, unngår blikk eller skyver følelsene raskt vekk etter at de har vist seg.",
      "aim": "Legitimere klientens følelsesreaksjoner i lys av livssituasjonen, slik at skam og selvangrep mister grepet og klienten kjenner mer tillatelse til å føle. Bygge emosjonell trygghet og selvmedfølelse slik at primære følelser og kjernesmerte kan nås, utforskes og etter hvert forandres.",
      "practiceFocus": "Sett ord på hvorfor følelsen gir mening i kontekst, særlig når skam eller selvangrep er aktivt.",
      "commonMiss": "Å validere handlinger i stedet for følelser, eller å bli så generell at du mister koblingen til klientens livssituasjon.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg er Sara. På papiret går det fint – jeg leverer frister og tar kaffe med teamet – men idet jeg er alene, føles det som om bruddet beviser at jeg er for mye å elske. Jeg spiller samtaler om og om igjen og lurer på hvilken feil som til slutt dyttet ham bort. Jeg sier til venner at jeg er opptatt fordi jeg ikke orker blikkene, og jeg sovner til podkaster for å slippe stillheten. Jeg kom i terapi fordi jeg er lei av å late som om det går bra når jeg inni meg føler meg tom og uverdig."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg er Michael. Jeg holder prosjektene på skinner hele dagen, og idet noen stiller spørsmål, kjenner jeg varme i brystet og jeg bjeffer ordre. Jeg sier til meg selv at det er stress, men senere ligger jeg våken og ser for meg ansiktet til kona når jeg smeller. Pappa lærte meg at bare de beste overlever, så tanken på at folk ser meg som overreagerende eller svak er uutholdelig. Jeg vil slutte å eksplodere før jeg ødelegger det som betyr noe."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg er Jason. Hvert møte føles som en prøve jeg er i ferd med å stryke, så jeg holder kjeft og klandrer meg selv etterpå. Venner inviterer meg ut, men jeg stirrer på meldingen til det er for sent å svare. Når jeg ser for meg å si noe høyt, låser brystet seg og en stemme sier: «Avslør ikke hvor rar du er.» Jeg er utslitt av å leve i hodet mitt og vil kjenne at jeg hører til et sted."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. De fleste dager går jeg fra vakt til vakt og gjør det som må gjøres, uten å kjenne noe særlig. Når noen hever stemmen, synker magen som om jeg er tilbake i det huset. Jeg sier til meg selv at fortiden er over, men når jeg prøver å stole på noen eller være nær, blir jeg blank eller heller i et glass for å bli nummen. Jeg er her fordi ensomheten har blitt høyere enn frykten."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg er Carlos. Jeg elsker familien min, men ett øyeblikk spøker jeg med kona, og det neste slår jeg i veggen fordi hun stilte meg spørsmål. På jobben kan et blikk fra en yngre fyr få meg til å se rødt. Jeg lærte at du slår først så du ikke blir slått, men nå ser jeg sønnen min skvette når jeg roper. Jeg vil finne en måte å verne stoltheten på uten å skremme dem jeg er glad i."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg er Nina. Dagen starter før soloppgang med matpakker og e-poster for andre, og om kvelden er jeg for sliten til å svare mine egne barn. Når jeg endelig ber om hjelp, skyller skyld inn og jeg kaller meg egoistisk. Jeg vet knapt hva jeg liker lenger. Jeg er redd for at hvis jeg slutter å overprestere, vil ingen ha meg, men jeg kan ikke fortsette på tomgang."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg er Aisha. Når noen jeg elsker ikke svarer raskt, føles det som om gulvet åpner seg og jeg faller. Jeg kan gå fra å idealisere til å hate på en time fordi smerten er uutholdelig. Jeg kutter for å dempe stormen eller kjenne at jeg finnes. Jeg vil tro at jeg ikke er for ødelagt til å bli elsket, og at jeg kan overleve å være alene litt."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "Jeg er David. Jeg har bygget en karriere på å ha svarene, men hjemme møter jeg himlende blikk og anklager om at jeg er kald. Ordet «narsissist» svir fordi det avslører hvor hul jeg føler meg når jeg ikke vinner. Faren min roste resultater, ikke meg, og jeg vet ikke hvordan jeg blir elsket uten å prestere. Jeg er redd for at de jeg bryr meg om vil se sprekkene og gå."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Jeg heter Marcus. De fleste dager beveger jeg meg gjennom jobben som et spøkelse og synker ned på sofaen og stirrer i veggen. Nettene er verre – ansikter fra utenlandsoppdrag eller barndommen dukker opp i drømmene. Når noen spør hvordan jeg har det, sier jeg «bra», fordi det føles farlig å vise mer. Jeg er her fordi det å ikke føle noe begynner å kjennes som å forsvinne."
        }
      }
    },
    "exploratory-questions": {
      "name": "Utforskende spørsmål",
      "description": "Still åpne, erfaringsnære spørsmål som vender oppmerksomheten innover og utfolder det som er i ferd med å komme.",
      "summary": "Utforskende spørsmål er enkle, åpne invitasjoner som vender klientens oppmerksomhet mot øyeblikkets kroppslige og emosjonelle opplevelse heller enn analyser og forklaringer. Du spør hva de legger merke til i kroppen, hvilken følelse som er der, eller hva som kjennes mest «i live» akkurat nå.\n\nSlik kan utydelig uro eller rent kognitiv beskrivelse gradvis ta form som mer spesifikke, primære følelser som kan navngis og bearbeides. Du unngår «hvorfor»-spørsmål som lett trekker klienten opp i hodet, og bruker heller «hva», «hvordan» og «hvor» som inviterer til sansing og beskrivelse. Dette beveger klienten fra å snakke om hendelser på avstand til å være mer til stede i egen opplevelse her og nå.\n\nUtforskende spørsmål hjelper også klienten å skille mellom sekundære reaksjoner, som irritasjon eller oppgitthet, og de mer sårbare primære følelsene under, som sårethet, frykt eller skam. Over tid støtter denne måten å spørre på en bevegelse fra diffus uro og kaos til tydeligere kjernesmerte, udekkede behov og nye meninger.",
      "marker": "Klienten beskriver opplevelsen som uklar, blandet, forvirrende eller «bare en merkelig reaksjon», eller de blir værende i historie og analyse uten tydelig kontakt med hva de føler. Du får en fornemmelse av at det finnes en emosjonell kant som er sanset, men ennå ikke satt ord på.",
      "aim": "Lede oppmerksomheten innover slik at implisitt, vag eller før-språklig erfaring kan krystallisere seg til mer konkrete, navngitte følelser. Støtte dypere nivåer av opplevelse og legge grunnlaget for å kunne arbeide direkte med både adaptive og maladaptive primærfølelser.",
      "practiceFocus": "Still ett åpent, innovervendt spørsmål om gangen om kropp, følelse eller mening.",
      "commonMiss": "Å stable spørsmål, spørre «hvorfor», eller trekke klienten opp i analyse i stedet for ned i erfaring.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg er Sara. På papiret går det fint – jeg leverer frister og tar kaffe med teamet – men idet jeg er alene, føles det som om bruddet beviser at jeg er for mye å elske. Jeg spiller samtaler om og om igjen og lurer på hvilken feil som til slutt dyttet ham bort. Jeg sier til venner at jeg er opptatt fordi jeg ikke orker blikkene, og jeg sovner til podkaster for å slippe stillheten. Jeg kom i terapi fordi jeg er lei av å late som om det går bra når jeg inni meg føler meg tom og uverdig."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg er Michael. Jeg holder prosjektene på skinner hele dagen, og idet noen stiller spørsmål, kjenner jeg varme i brystet og jeg bjeffer ordre. Jeg sier til meg selv at det er stress, men senere ligger jeg våken og ser for meg ansiktet til kona når jeg smeller. Pappa lærte meg at bare de beste overlever, så tanken på at folk ser meg som overreagerende eller svak er uutholdelig. Jeg vil slutte å eksplodere før jeg ødelegger det som betyr noe."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg er Jason. Hvert møte føles som en prøve jeg er i ferd med å stryke, så jeg holder kjeft og klandrer meg selv etterpå. Venner inviterer meg ut, men jeg stirrer på meldingen til det er for sent å svare. Når jeg ser for meg å si noe høyt, låser brystet seg og en stemme sier: «Avslør ikke hvor rar du er.» Jeg er utslitt av å leve i hodet mitt og vil kjenne at jeg hører til et sted."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. De fleste dager går jeg fra vakt til vakt og gjør det som må gjøres, uten å kjenne noe særlig. Når noen hever stemmen, synker magen som om jeg er tilbake i det huset. Jeg sier til meg selv at fortiden er over, men når jeg prøver å stole på noen eller være nær, blir jeg blank eller heller i et glass for å bli nummen. Jeg er her fordi ensomheten har blitt høyere enn frykten."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg er Carlos. Jeg elsker familien min, men ett øyeblikk spøker jeg med kona, og det neste slår jeg i veggen fordi hun stilte meg spørsmål. På jobben kan et blikk fra en yngre fyr få meg til å se rødt. Jeg lærte at du slår først så du ikke blir slått, men nå ser jeg sønnen min skvette når jeg roper. Jeg vil finne en måte å verne stoltheten på uten å skremme dem jeg er glad i."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg er Nina. Dagen starter før soloppgang med matpakker og e-poster for andre, og om kvelden er jeg for sliten til å svare mine egne barn. Når jeg endelig ber om hjelp, skyller skyld inn og jeg kaller meg egoistisk. Jeg vet knapt hva jeg liker lenger. Jeg er redd for at hvis jeg slutter å overprestere, vil ingen ha meg, men jeg kan ikke fortsette på tomgang."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg er Aisha. Når noen jeg elsker ikke svarer raskt, føles det som om gulvet åpner seg og jeg faller. Jeg kan gå fra å idealisere til å hate på en time fordi smerten er uutholdelig. Jeg kutter for å dempe stormen eller kjenne at jeg finnes. Jeg vil tro at jeg ikke er for ødelagt til å bli elsket, og at jeg kan overleve å være alene litt."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "Jeg er David. Jeg har bygget en karriere på å ha svarene, men hjemme møter jeg himlende blikk og anklager om at jeg er kald. Ordet «narsissist» svir fordi det avslører hvor hul jeg føler meg når jeg ikke vinner. Faren min roste resultater, ikke meg, og jeg vet ikke hvordan jeg blir elsket uten å prestere. Jeg er redd for at de jeg bryr meg om vil se sprekkene og gå."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Jeg heter Marcus. De fleste dager beveger jeg meg gjennom jobben som et spøkelse og synker ned på sofaen og stirrer i veggen. Nettene er verre – ansikter fra utenlandsoppdrag eller barndommen dukker opp i drømmene. Når noen spør hvordan jeg har det, sier jeg «bra», fordi det føles farlig å vise mer. Jeg er her fordi det å ikke føle noe begynner å kjennes som å forsvinne."
        }
      }
    },
    "providing-treatment-rationale": {
      "name": "Behandlingsrasjonale for følelsesfokusert terapi",
      "description": "Gi en kort, empatisk forklaring på hvorfor følelsesfokusert terapi arbeider med følelser, og hvordan du leder det trygt.",
      "summary": "Et behandlingsrasjonale hjelper klienten å forstå logikken og tryggheten i å arbeide med følelser, særlig når de er skeptiske, redde eller usikre på denne måten å jobbe på. Etter å ha møtt bekymringene deres med empati, forklarer du med hverdagslig språk hvordan følelser organiserer opplevelser, varsler behov og kan endre seg når de får bearbeides fullt ut. Du beskriver også hvordan sekundære reaksjoner og unngåelse ofte holder folk fast, mens tilgang til primære følelser og kjernesmerte åpner for varig endring.\n\nDu er tydelig på din rolle i å regulere tempo og intensitet, slik at klienten ikke blir overlatt til overveldende affekt. Rasjonalet adresserer vanlige bekymringer som «hvis jeg begynner å føle, mister jeg kontrollen» eller «å snakke om følelser hjelper ikke», og bygger samarbeid ved å ramme inn følelsesarbeid som en felles reise med et enkelt kart – fra symptomer og kaos, via kjernesmerte og udekkede behov, til nye emosjonelle responser.\n\nEt godt rasjonale øker villigheten til å delta i opplevelsesorienterte oppgaver som stolarbeid, fokuseringsøvelser eller imaginering når markører dukker opp. Når du vender kort tilbake til denne forklaringen på viktige tidspunkt, minner du klienten om hvorfor det er meningsfullt å vende tilbake til følelsene selv når det kjennes uvant eller skremmende. Over tid støtter den delte forståelsen en sterkere allianse og dypere emosjonell engasjement i arbeidet.",
      "marker": "Klienten spør hvordan terapien virker, uttrykker skepsis eller frykt, eller nøler før en oppgave.",
      "aim": "Gi en kort, erfaringsnær forklaring som roer uro og motstand, skaper felles retning for arbeidet og gjør det tryggere å utforske grunnleggende følelser, kjernesmerte og udekkede behov.",
      "practiceFocus": "Forklar følelsesarbeid med enkelt språk som er direkte knyttet til akkurat denne klientens frykt, mål og behov for trygghet.",
      "commonMiss": "Å bli abstrakt, belærende eller for teoritung i stedet for samarbeidende og personlig relevant.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg er Sara. På papiret går det fint – jeg leverer frister og tar kaffe med teamet – men idet jeg er alene, føles det som om bruddet beviser at jeg er for mye å elske. Jeg spiller samtaler om og om igjen og lurer på hvilken feil som til slutt dyttet ham bort. Jeg sier til venner at jeg er opptatt fordi jeg ikke orker blikkene, og jeg sovner til podkaster for å slippe stillheten. Jeg kom i terapi fordi jeg er lei av å late som om det går bra når jeg inni meg føler meg tom og uverdig."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg er Michael. Jeg holder prosjektene på skinner hele dagen, og idet noen stiller spørsmål, kjenner jeg varme i brystet og jeg bjeffer ordre. Jeg sier til meg selv at det er stress, men senere ligger jeg våken og ser for meg ansiktet til kona når jeg smeller. Pappa lærte meg at bare de beste overlever, så tanken på at folk ser meg som overreagerende eller svak er uutholdelig. Jeg vil slutte å eksplodere før jeg ødelegger det som betyr noe."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg er Jason. Hvert møte føles som en prøve jeg er i ferd med å stryke, så jeg holder kjeft og klandrer meg selv etterpå. Venner inviterer meg ut, men jeg stirrer på meldingen til det er for sent å svare. Når jeg ser for meg å si noe høyt, låser brystet seg og en stemme sier: «Avslør ikke hvor rar du er.» Jeg er utslitt av å leve i hodet mitt og vil kjenne at jeg hører til et sted."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. De fleste dager går jeg fra vakt til vakt og gjør det som må gjøres, uten å kjenne noe særlig. Når noen hever stemmen, synker magen som om jeg er tilbake i det huset. Jeg sier til meg selv at fortiden er over, men når jeg prøver å stole på noen eller være nær, blir jeg blank eller heller i et glass for å bli nummen. Jeg er her fordi ensomheten har blitt høyere enn frykten."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg er Carlos. Jeg elsker familien min, men ett øyeblikk spøker jeg med kona, og det neste slår jeg i veggen fordi hun stilte meg spørsmål. På jobben kan et blikk fra en yngre fyr få meg til å se rødt. Jeg lærte at du slår først så du ikke blir slått, men nå ser jeg sønnen min skvette når jeg roper. Jeg vil finne en måte å verne stoltheten på uten å skremme dem jeg er glad i."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg er Nina. Dagen starter før soloppgang med matpakker og e-poster for andre, og om kvelden er jeg for sliten til å svare mine egne barn. Når jeg endelig ber om hjelp, skyller skyld inn og jeg kaller meg egoistisk. Jeg vet knapt hva jeg liker lenger. Jeg er redd for at hvis jeg slutter å overprestere, vil ingen ha meg, men jeg kan ikke fortsette på tomgang."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg er Aisha. Når noen jeg elsker ikke svarer raskt, føles det som om gulvet åpner seg og jeg faller. Jeg kan gå fra å idealisere til å hate på en time fordi smerten er uutholdelig. Jeg kutter for å dempe stormen eller kjenne at jeg finnes. Jeg vil tro at jeg ikke er for ødelagt til å bli elsket, og at jeg kan overleve å være alene litt."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "Jeg er David. Jeg har bygget en karriere på å ha svarene, men hjemme møter jeg himlende blikk og anklager om at jeg er kald. Ordet «narsissist» svir fordi det avslører hvor hul jeg føler meg når jeg ikke vinner. Faren min roste resultater, ikke meg, og jeg vet ikke hvordan jeg blir elsket uten å prestere. Jeg er redd for at de jeg bryr meg om vil se sprekkene og gå."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Jeg heter Marcus. De fleste dager beveger jeg meg gjennom jobben som et spøkelse og synker ned på sofaen og stirrer i veggen. Nettene er verre – ansikter fra utenlandsoppdrag eller barndommen dukker opp i drømmene. Når noen spør hvordan jeg har det, sier jeg «bra», fordi det føles farlig å vise mer. Jeg er her fordi det å ikke føle noe begynner å kjennes som å forsvinne."
        }
      }
    },
    "empathic-explorations": {
      "name": "Empatiske utforskninger",
      "description": "Følg og utvid forsiktig det som allerede er til stede, slik at klienten kan bli i og utdype opplevelsen.",
      "summary": "Empatisk utforsking betyr å følge den emosjonelle kanten som er i ferd med å dukke opp hos klienten, og svare med fint avstemte gjentakelser og invitasjoner til å legge merke til litt mer. I stedet for å hoppe frem til tolkninger, råd eller løsninger, holder du deg ett lite steg bak eller ved siden av klientens egen opplevelse. Du speiler en del av det som er der, og inviterer dem til å dvele, sanse videre og utdype det de føler akkurat nå.\n\nUtforskingen beveger seg langs den stien klienten allerede har lagt ut i ordene sine, og holder seg innenfor det som er eksplisitt uttrykt fremfor å gå under eller forbi det. Det gir skjøre følelsestilstander mulighet til å styrkes og klargjøres uten å bli overveldet eller stengt ned. Dette er spesielt viktig når primære følelser og kjernesmerte begynner å vise seg, men fortsatt kjennes usikre eller blandede.\n\nVed å holde klientens tempo og møte prosessen med ærbødighet, verner du om tryggheten samtidig som kontakten med følelsene fordypes. Empatisk utforsking støtter en bevegelse fra ytre fortellinger og forklaringer til mer levende, kroppslig erfart tristhet, frykt, sinne, skam eller lengsel. Den forebygger også at dere hopper for raskt til reframing, meningstilskrivning eller løsninger, slik at kjernesmerte og udekkede behov får tre tydeligere frem og kan forandres gjennom nye emosjonelle responser.",
      "marker": "Følelser er tydelig på vei frem, men oppleves som skjøre, tentative eller bare delvis uttrykt, og klienten virker villig, men usikker på om de tør å gå dypere. Det er en «levende kant» der små invitasjoner og gjentakelser bringer frem mer følelse og mening.",
      "aim": "Holde og fordype kontakten med fremvoksende emosjonelt materiale slik at både adaptive og maladaptive primærfølelser kan komme fullt til uttrykk og bearbeides. Støtte en dosert, trygg utdyping av kjernesmerte og tilhørende udekkede behov, og legge grunnlaget for senere transformasjon.",
      "practiceFocus": "Hold deg ett lite skritt bak klientens ledende kant og inviter til litt mer kontakt med det som allerede er der.",
      "commonMiss": "Å hoppe for raskt til tolkning, intensitet eller innsikt før følelsen har fått folde seg ut.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg er Sara. På papiret går det fint – jeg leverer frister og tar kaffe med teamet – men idet jeg er alene, føles det som om bruddet beviser at jeg er for mye å elske. Jeg spiller samtaler om og om igjen og lurer på hvilken feil som til slutt dyttet ham bort. Jeg sier til venner at jeg er opptatt fordi jeg ikke orker blikkene, og jeg sovner til podkaster for å slippe stillheten. Jeg kom i terapi fordi jeg er lei av å late som om det går bra når jeg inni meg føler meg tom og uverdig."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg er Michael. Jeg holder prosjektene på skinner hele dagen, og idet noen stiller spørsmål, kjenner jeg varme i brystet og jeg bjeffer ordre. Jeg sier til meg selv at det er stress, men senere ligger jeg våken og ser for meg ansiktet til kona når jeg smeller. Pappa lærte meg at bare de beste overlever, så tanken på at folk ser meg som overreagerende eller svak er uutholdelig. Jeg vil slutte å eksplodere før jeg ødelegger det som betyr noe."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg er Jason. Hvert møte føles som en prøve jeg er i ferd med å stryke, så jeg holder kjeft og klandrer meg selv etterpå. Venner inviterer meg ut, men jeg stirrer på meldingen til det er for sent å svare. Når jeg ser for meg å si noe høyt, låser brystet seg og en stemme sier: «Avslør ikke hvor rar du er.» Jeg er utslitt av å leve i hodet mitt og vil kjenne at jeg hører til et sted."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. De fleste dager går jeg fra vakt til vakt og gjør det som må gjøres, uten å kjenne noe særlig. Når noen hever stemmen, synker magen som om jeg er tilbake i det huset. Jeg sier til meg selv at fortiden er over, men når jeg prøver å stole på noen eller være nær, blir jeg blank eller heller i et glass for å bli nummen. Jeg er her fordi ensomheten har blitt høyere enn frykten."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg er Carlos. Jeg elsker familien min, men ett øyeblikk spøker jeg med kona, og det neste slår jeg i veggen fordi hun stilte meg spørsmål. På jobben kan et blikk fra en yngre fyr få meg til å se rødt. Jeg lærte at du slår først så du ikke blir slått, men nå ser jeg sønnen min skvette når jeg roper. Jeg vil finne en måte å verne stoltheten på uten å skremme dem jeg er glad i."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg er Nina. Dagen starter før soloppgang med matpakker og e-poster for andre, og om kvelden er jeg for sliten til å svare mine egne barn. Når jeg endelig ber om hjelp, skyller skyld inn og jeg kaller meg egoistisk. Jeg vet knapt hva jeg liker lenger. Jeg er redd for at hvis jeg slutter å overprestere, vil ingen ha meg, men jeg kan ikke fortsette på tomgang."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg er Aisha. Når noen jeg elsker ikke svarer raskt, føles det som om gulvet åpner seg og jeg faller. Jeg kan gå fra å idealisere til å hate på en time fordi smerten er uutholdelig. Jeg kutter for å dempe stormen eller kjenne at jeg finnes. Jeg vil tro at jeg ikke er for ødelagt til å bli elsket, og at jeg kan overleve å være alene litt."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "Jeg er David. Jeg har bygget en karriere på å ha svarene, men hjemme møter jeg himlende blikk og anklager om at jeg er kald. Ordet «narsissist» svir fordi det avslører hvor hul jeg føler meg når jeg ikke vinner. Faren min roste resultater, ikke meg, og jeg vet ikke hvordan jeg blir elsket uten å prestere. Jeg er redd for at de jeg bryr meg om vil se sprekkene og gå."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Jeg heter Marcus. De fleste dager beveger jeg meg gjennom jobben som et spøkelse og synker ned på sofaen og stirrer i veggen. Nettene er verre – ansikter fra utenlandsoppdrag eller barndommen dukker opp i drømmene. Når noen spør hvordan jeg har det, sier jeg «bra», fordi det føles farlig å vise mer. Jeg er her fordi det å ikke føle noe begynner å kjennes som å forsvinne."
        }
      }
    },
    "empathic-evocations": {
      "name": "Evokativ empati",
      "description": "Tilby levende språk og metaforer for å gjøre opplevelsen tydeligere og øke kontakten med følelsen.",
      "summary": "Evokativ empati brukes når klienten snakker om noe følelsesmessig ladet på en flat, distansert eller innsnevret måte. Du tilbyr korte, levende bilder eller sanselige beskrivelser som ser ut til å ligne det de kjenner – for eksempel «som en tung stein i brystet» eller «som en storm rett under overflaten». Slike uttrykk snakker til kropp og høyrehjerne og bygger bro mellom tankefortelling og følt erfaring.\n\nNår de er godt avstemt, øker disse bildene aktivering og emosjonell tilstedeværelse forsiktig, uten å presse klienten ut av toleransevinduet. Intellektualiserte fortellinger kan gradvis bli mer kroppslig opplevd, og primære følelser kommer nærmere bevisstheten. Ofte blir noe som har vært implisitt tydeligere – klienten kan si «ja, akkurat sånn kjennes det», eller merke tårer, stramming eller andre kroppssignaler.\n\nEvokasjoner må forbli tentative og samarbeidsorienterte, slik at klienten beholder eierskap til betydningen. Over tid hjelper denne måten å svare på klienten til å utvikle et rikere, mer kroppsforankret språk for sitt indre liv, og styrker både emosjonell innsikt og kapasiteten til å bearbeide følelser.",
      "marker": "Klienten forteller om smertefulle eller viktige hendelser på en flat, distansert eller svært kognitiv måte, med lite synlig affekt eller kroppsbevissthet, samtidig som du aner at følelsene ligger nær – for eksempel gjennom små stemmebrudd, pauser eller korte glimt av følelsesuttrykk. De kan si at de «sånn halvveis» kjenner noe, men ikke helt får tak i det.",
      "aim": "Øke den emosjonelle kontakten ved å tilby levende, resonante bilder som gjør implisitte følelser mer tydelige og kroppslig erfarte. Støtte et skifte fra å beskrive på avstand til å være mer direkte i opplevelsen, slik at primære følelser og kjernesmerte kan nås og bearbeides.",
      "practiceFocus": "Tilby levende, sanselig språk som hjelper nær-overflate-følelsen til å komme mer til live i kroppen.",
      "commonMiss": "Å bruke språk som kjennes poetisk, importert eller mer dramatisk enn klientens faktiske opplevelse.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg er Sara. På papiret går det fint – jeg leverer frister og tar kaffe med teamet – men idet jeg er alene, føles det som om bruddet beviser at jeg er for mye å elske. Jeg spiller samtaler om og om igjen og lurer på hvilken feil som til slutt dyttet ham bort. Jeg sier til venner at jeg er opptatt fordi jeg ikke orker blikkene, og jeg sovner til podkaster for å slippe stillheten. Jeg kom i terapi fordi jeg er lei av å late som om det går bra når jeg inni meg føler meg tom og uverdig."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg er Michael. Jeg holder prosjektene på skinner hele dagen, og idet noen stiller spørsmål, kjenner jeg varme i brystet og jeg bjeffer ordre. Jeg sier til meg selv at det er stress, men senere ligger jeg våken og ser for meg ansiktet til kona når jeg smeller. Pappa lærte meg at bare de beste overlever, så tanken på at folk ser meg som overreagerende eller svak er uutholdelig. Jeg vil slutte å eksplodere før jeg ødelegger det som betyr noe."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg er Jason. Hvert møte føles som en prøve jeg er i ferd med å stryke, så jeg holder kjeft og klandrer meg selv etterpå. Venner inviterer meg ut, men jeg stirrer på meldingen til det er for sent å svare. Når jeg ser for meg å si noe høyt, låser brystet seg og en stemme sier: «Avslør ikke hvor rar du er.» Jeg er utslitt av å leve i hodet mitt og vil kjenne at jeg hører til et sted."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. De fleste dager går jeg fra vakt til vakt og gjør det som må gjøres, uten å kjenne noe særlig. Når noen hever stemmen, synker magen som om jeg er tilbake i det huset. Jeg sier til meg selv at fortiden er over, men når jeg prøver å stole på noen eller være nær, blir jeg blank eller heller i et glass for å bli nummen. Jeg er her fordi ensomheten har blitt høyere enn frykten."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg er Carlos. Jeg elsker familien min, men ett øyeblikk spøker jeg med kona, og det neste slår jeg i veggen fordi hun stilte meg spørsmål. På jobben kan et blikk fra en yngre fyr få meg til å se rødt. Jeg lærte at du slår først så du ikke blir slått, men nå ser jeg sønnen min skvette når jeg roper. Jeg vil finne en måte å verne stoltheten på uten å skremme dem jeg er glad i."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg er Nina. Dagen starter før soloppgang med matpakker og e-poster for andre, og om kvelden er jeg for sliten til å svare mine egne barn. Når jeg endelig ber om hjelp, skyller skyld inn og jeg kaller meg egoistisk. Jeg vet knapt hva jeg liker lenger. Jeg er redd for at hvis jeg slutter å overprestere, vil ingen ha meg, men jeg kan ikke fortsette på tomgang."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg er Aisha. Når noen jeg elsker ikke svarer raskt, føles det som om gulvet åpner seg og jeg faller. Jeg kan gå fra å idealisere til å hate på en time fordi smerten er uutholdelig. Jeg kutter for å dempe stormen eller kjenne at jeg finnes. Jeg vil tro at jeg ikke er for ødelagt til å bli elsket, og at jeg kan overleve å være alene litt."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "Jeg er David. Jeg har bygget en karriere på å ha svarene, men hjemme møter jeg himlende blikk og anklager om at jeg er kald. Ordet «narsissist» svir fordi det avslører hvor hul jeg føler meg når jeg ikke vinner. Faren min roste resultater, ikke meg, og jeg vet ikke hvordan jeg blir elsket uten å prestere. Jeg er redd for at de jeg bryr meg om vil se sprekkene og gå."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Jeg heter Marcus. De fleste dager beveger jeg meg gjennom jobben som et spøkelse og synker ned på sofaen og stirrer i veggen. Nettene er verre – ansikter fra utenlandsoppdrag eller barndommen dukker opp i drømmene. Når noen spør hvordan jeg har det, sier jeg «bra», fordi det føles farlig å vise mer. Jeg er her fordi det å ikke føle noe begynner å kjennes som å forsvinne."
        }
      }
    },
    "empathic-conjectures": {
      "name": "Empatiske antakelser",
      "description": "Tilby forsiktige gjetninger om opplevelser som ligger nær overflaten, for å hjelpe det usagte frem.",
      "summary": "Empatiske antakelser er tentative hypoteser om hva klienten kan føle rett under det de sier. Du lytter til stemme, ansiktsuttrykk, kropp og kontekst, og forsøker forsiktig å sette ord på mulig smerte, frykt, skam eller lengsel som ennå ikke er fullt uttalt. Du markerer tydelig at du kan ta feil – med uttrykk som «jeg lurer på om…» eller «kan det være at…» – slik at klienten står fritt til å bekrefte, justere eller avkrefte.\n\nI motsetning til empatisk utforsking, som utvider det som allerede er klart i bevisstheten, strekker antakelser seg forsiktig under eller bak det som sies for å gi foreløpige ord til det som fortsatt er uklart. Når du treffer, opplever klienten ofte lettelse og gjenkjennelse – som å bli dypt sett – og det blir lettere å eie og uttrykke egen sannhet. Det kan også hjelpe dem å gå fra sekundære forsvar som spøk, irritasjon eller vaghet til mer sårbare, primære følelser.\n\nSelv når antakelsen bommer, vil klientens korrigering som regel tydeliggjøre hva som faktisk kjennes sant og dermed bevege prosessen videre. Denne intervensjonen er særlig nyttig når klienten sirkler rundt kjernesmerte eller når viktige følelser bare slipper gjennom i bruddstykker. Brukt varsomt og med respekt kan empatiske antakelser gi raskere kontakt med spesifikke, maladaptive følelser og de udekkede behovene som ligger under, uten at terapeuten overtar meningsskapingen.",
      "marker": "Hint om dypere følelser viser seg gjennom tonebrudd, flyktige uttrykk, unngåelse eller uavsluttede fortellinger, men klienten navngir ikke følelsene og blir ikke værende i dem. De skifter raskt tema eller glatter over når noe sårt begynner å vise seg.",
      "aim": "Hjelpe nær-overflate, usagt emosjonell erfaring til å ta tydeligere form slik at klienten kan eie, utforske og arbeide med den. Legge til rette for overganger fra defensive eller sekundære reaksjoner til mer direkte kontakt med primærfølelser og kjernesmerte.",
      "practiceFocus": "Gi en myk, tentativ gjetning om følelsen eller behovet som ligger rett under overflaten.",
      "commonMiss": "Å høres sikker ut, lese tanker eller hoppe for langt utover det klienten faktisk har vist.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg er Sara. På papiret går det fint – jeg leverer frister og tar kaffe med teamet – men idet jeg er alene, føles det som om bruddet beviser at jeg er for mye å elske. Jeg spiller samtaler om og om igjen og lurer på hvilken feil som til slutt dyttet ham bort. Jeg sier til venner at jeg er opptatt fordi jeg ikke orker blikkene, og jeg sovner til podkaster for å slippe stillheten. Jeg kom i terapi fordi jeg er lei av å late som om det går bra når jeg inni meg føler meg tom og uverdig."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg er Michael. Jeg holder prosjektene på skinner hele dagen, og idet noen stiller spørsmål, kjenner jeg varme i brystet og jeg bjeffer ordre. Jeg sier til meg selv at det er stress, men senere ligger jeg våken og ser for meg ansiktet til kona når jeg smeller. Pappa lærte meg at bare de beste overlever, så tanken på at folk ser meg som overreagerende eller svak er uutholdelig. Jeg vil slutte å eksplodere før jeg ødelegger det som betyr noe."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg er Jason. Hvert møte føles som en prøve jeg er i ferd med å stryke, så jeg holder kjeft og klandrer meg selv etterpå. Venner inviterer meg ut, men jeg stirrer på meldingen til det er for sent å svare. Når jeg ser for meg å si noe høyt, låser brystet seg og en stemme sier: «Avslør ikke hvor rar du er.» Jeg er utslitt av å leve i hodet mitt og vil kjenne at jeg hører til et sted."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. De fleste dager går jeg fra vakt til vakt og gjør det som må gjøres, uten å kjenne noe særlig. Når noen hever stemmen, synker magen som om jeg er tilbake i det huset. Jeg sier til meg selv at fortiden er over, men når jeg prøver å stole på noen eller være nær, blir jeg blank eller heller i et glass for å bli nummen. Jeg er her fordi ensomheten har blitt høyere enn frykten."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg er Carlos. Jeg elsker familien min, men ett øyeblikk spøker jeg med kona, og det neste slår jeg i veggen fordi hun stilte meg spørsmål. På jobben kan et blikk fra en yngre fyr få meg til å se rødt. Jeg lærte at du slår først så du ikke blir slått, men nå ser jeg sønnen min skvette når jeg roper. Jeg vil finne en måte å verne stoltheten på uten å skremme dem jeg er glad i."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg er Nina. Dagen starter før soloppgang med matpakker og e-poster for andre, og om kvelden er jeg for sliten til å svare mine egne barn. Når jeg endelig ber om hjelp, skyller skyld inn og jeg kaller meg egoistisk. Jeg vet knapt hva jeg liker lenger. Jeg er redd for at hvis jeg slutter å overprestere, vil ingen ha meg, men jeg kan ikke fortsette på tomgang."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg er Aisha. Når noen jeg elsker ikke svarer raskt, føles det som om gulvet åpner seg og jeg faller. Jeg kan gå fra å idealisere til å hate på en time fordi smerten er uutholdelig. Jeg kutter for å dempe stormen eller kjenne at jeg finnes. Jeg vil tro at jeg ikke er for ødelagt til å bli elsket, og at jeg kan overleve å være alene litt."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "Jeg er David. Jeg har bygget en karriere på å ha svarene, men hjemme møter jeg himlende blikk og anklager om at jeg er kald. Ordet «narsissist» svir fordi det avslører hvor hul jeg føler meg når jeg ikke vinner. Faren min roste resultater, ikke meg, og jeg vet ikke hvordan jeg blir elsket uten å prestere. Jeg er redd for at de jeg bryr meg om vil se sprekkene og gå."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Jeg heter Marcus. De fleste dager beveger jeg meg gjennom jobben som et spøkelse og synker ned på sofaen og stirrer i veggen. Nettene er verre – ansikter fra utenlandsoppdrag eller barndommen dukker opp i drømmene. Når noen spør hvordan jeg har det, sier jeg «bra», fordi det føles farlig å vise mer. Jeg er her fordi det å ikke føle noe begynner å kjennes som å forsvinne."
        }
      }
    },
    "staying-in-contact-intense-affect": {
      "name": "Være i kontakt med intens affekt",
      "description": "Støtt klienten i å være trygt til stede i sterk følelsesmessig aktivering slik at følelsen kan få rom, gi mening og forandres uten overveldelse.",
      "summary": "Å være i kontakt med intens affekt handler om å hjelpe klienten å ri ut bølger av sterke følelser uten å stenge ned eller bli oversvømt utover det de tåler. Når store følelser som sorg, raseri, panikk eller skam skyter i været, senker du tempoet, hjelper klienten å jorde seg og tilbyr et stødig, empatisk nærvær. Du kan rette oppmerksomheten mot kropp, pust eller rommet, slik at én fot er i her-og-nå mens den andre er i følelsesopplevelsen.\n\nDu normaliserer intensiteten, bekrefter at følelsene gir mening, og formidler at du tåler og blir værende med dem. Samtidig titrerer du eksponeringen ved å invitere klienten til å beskrive små biter av opplevelsen, eller ta korte pauser og vende tilbake igjen, for å unngå dissosiasjon eller kollaps.\n\nDenne reguleringen gjør at maladaptive primærfølelser og kjernesmerte kan komme fullt frem og uttrykkes uten å retraumatisere. Det gir ofte en kraftig korrigerende emosjonell erfaring: klienten lærer at de kan føle dypt og likevel være trygge og i kontakt med et annet menneske. Når bølgen har roet seg, hjelper du dem å reflektere over hva følelsen sier om behov, grenser eller verdier. Over tid bygger dette kapasitet til å tåle og regulere sterke følelser også utenfor terapien.",
      "marker": "Affekten eskalerer brått til hulking, skjelving, raseri, panikk, nummenhet eller skamkollaps, og klienten ser ut til å risikere å bli overveldet, dissosiere eller trygle om å stoppe. Pusten blir kanskje grunn, språket uorganisert eller blikket fjernt.",
      "aim": "Gi ramme, jording og empatisk innstilling slik at intense emosjonelle tilstander kan erfares og bearbeides i stedet for å unngås eller stenges ned. Hjelpe klienten å holde seg innenfor toleransevinduet samtidig som det er nok aktivering til at kjernesmerte kan komme frem, forstås og forandres.",
      "practiceFocus": "Jord først, dosér følelsen, og hold ett bein i rommet mens ett bein blir værende i emosjonen.",
      "commonMiss": "Enten å la affekten oversvømme klienten eller å stenge den ned før den emosjonelle meningen får komme fram.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg er Sara. På papiret går det fint – jeg leverer frister og tar kaffe med teamet – men idet jeg er alene, føles det som om bruddet beviser at jeg er for mye å elske. Jeg spiller samtaler om og om igjen og lurer på hvilken feil som til slutt dyttet ham bort. Jeg sier til venner at jeg er opptatt fordi jeg ikke orker blikkene, og jeg sovner til podkaster for å slippe stillheten. Jeg kom i terapi fordi jeg er lei av å late som om det går bra når jeg inni meg føler meg tom og uverdig."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg er Michael. Jeg holder prosjektene på skinner hele dagen, og idet noen stiller spørsmål, kjenner jeg varme i brystet og jeg bjeffer ordre. Jeg sier til meg selv at det er stress, men senere ligger jeg våken og ser for meg ansiktet til kona når jeg smeller. Pappa lærte meg at bare de beste overlever, så tanken på at folk ser meg som overreagerende eller svak er uutholdelig. Jeg vil slutte å eksplodere før jeg ødelegger det som betyr noe."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg er Jason. Hvert møte føles som en prøve jeg er i ferd med å stryke, så jeg holder kjeft og klandrer meg selv etterpå. Venner inviterer meg ut, men jeg stirrer på meldingen til det er for sent å svare. Når jeg ser for meg å si noe høyt, låser brystet seg og en stemme sier: «Avslør ikke hvor rar du er.» Jeg er utslitt av å leve i hodet mitt og vil kjenne at jeg hører til et sted."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. De fleste dager går jeg fra vakt til vakt og gjør det som må gjøres, uten å kjenne noe særlig. Når noen hever stemmen, synker magen som om jeg er tilbake i det huset. Jeg sier til meg selv at fortiden er over, men når jeg prøver å stole på noen eller være nær, blir jeg blank eller heller i et glass for å bli nummen. Jeg er her fordi ensomheten har blitt høyere enn frykten."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg er Carlos. Jeg elsker familien min, men ett øyeblikk spøker jeg med kona, og det neste slår jeg i veggen fordi hun stilte meg spørsmål. På jobben kan et blikk fra en yngre fyr få meg til å se rødt. Jeg lærte at du slår først så du ikke blir slått, men nå ser jeg sønnen min skvette når jeg roper. Jeg vil finne en måte å verne stoltheten på uten å skremme dem jeg er glad i."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg er Nina. Dagen starter før soloppgang med matpakker og e-poster for andre, og om kvelden er jeg for sliten til å svare mine egne barn. Når jeg endelig ber om hjelp, skyller skyld inn og jeg kaller meg egoistisk. Jeg vet knapt hva jeg liker lenger. Jeg er redd for at hvis jeg slutter å overprestere, vil ingen ha meg, men jeg kan ikke fortsette på tomgang."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg er Aisha. Når noen jeg elsker ikke svarer raskt, føles det som om gulvet åpner seg og jeg faller. Jeg kan gå fra å idealisere til å hate på en time fordi smerten er uutholdelig. Jeg kutter for å dempe stormen eller kjenne at jeg finnes. Jeg vil tro at jeg ikke er for ødelagt til å bli elsket, og at jeg kan overleve å være alene litt."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "Jeg er David. Jeg har bygget en karriere på å ha svarene, men hjemme møter jeg himlende blikk og anklager om at jeg er kald. Ordet «narsissist» svir fordi det avslører hvor hul jeg føler meg når jeg ikke vinner. Faren min roste resultater, ikke meg, og jeg vet ikke hvordan jeg blir elsket uten å prestere. Jeg er redd for at de jeg bryr meg om vil se sprekkene og gå."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Jeg heter Marcus. De fleste dager beveger jeg meg gjennom jobben som et spøkelse og synker ned på sofaen og stirrer i veggen. Nettene er verre – ansikter fra utenlandsoppdrag eller barndommen dukker opp i drømmene. Når noen spør hvordan jeg har det, sier jeg «bra», fordi det føles farlig å vise mer. Jeg er her fordi det å ikke føle noe begynner å kjennes som å forsvinne."
        }
      }
    },
    "self-disclosure": {
      "name": "Selvavsløring",
      "description": "Del korte, relevante glimt av din indre opplevelse på en tydelig avgrenset måte som er til for klientens prosess – ikke din egen.",
      "summary": "Selvavsløring i opplevelsesorientert terapi innebærer å dele en kort, ekte bit av din umiddelbare indre opplevelse når det klart tjener klienten. Det kan være å sette ord på hvordan du er emosjonelt berørt, å anerkjenne hvordan klienten virker inn på deg, eller å eie en misattunering som har bidratt til et brudd i alliansen. Utsagnene holdes korte, nøkterne og uten forsvar, og formuleres slik at de støtter – ikke overskygger – klientens erfaring.\n\nBrukt til validering kan selvavsløring bekrefte at klientens smerte er reell og berører andre, og motvirke indre budskap om å være «for mye» eller «ikke troverdig». I alliansearbeid modellerer det ansvarlighet og sårbarhet: konflikten møtes med forståelse og reparasjonsvilje fremfor skyld og tilbaketrekning.\n\nSelvavsløring kan også hjelpe klienter som tviler på at noen kan bry seg virkelig, ved å gi en korrigerende erfaring av å ha emosjonell innvirkning. Noen ganger åpner det også for at klienten kan kjenne mer av sine egne primære følelser ved å legge merke til hvordan du blir berørt. Etter at du har delt, vender du raskt fokuset tilbake til klienten og inviterer deres reaksjon. Over tid kan nøktern, gjennomtenkt selvavsløring fordype tillit og modellere sunn emosjonell åpenhet og relasjonell reparasjon.",
      "marker": "Alliansen kjennes anstrengt, fjern eller usikker, eller klienten stiller spørsmål ved om du forstår, bryr deg eller tåler dem. Du får en fornemmelse av at et kort, helhjertet og gjennomsiktig svar fra deg vil kunne validere deres betydning, klargjøre din posisjon eller bidra til reparasjon.",
      "aim": "Bruke kort, nøye valgt åpenhet til å styrke den terapeutiske relasjonen, validere klientens emosjonelle virkelighet eller reparere misattuneringer. Modellere kongruent følelsesuttrykk samtidig som klientens opplevelse forblir sentrum i arbeidet.",
      "practiceFocus": "Del bare en kort, umiddelbar bit av din indre respons som tydelig tjener klientens prosess, og vend så raskt tilbake til klienten.",
      "commonMiss": "Å gli over i biografi, forsikring eller terapeut-sentrert prat som gjør øyeblikket mindre om klienten.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg er Sara. På papiret går det fint – jeg leverer frister og tar kaffe med teamet – men idet jeg er alene, føles det som om bruddet beviser at jeg er for mye å elske. Jeg spiller samtaler om og om igjen og lurer på hvilken feil som til slutt dyttet ham bort. Jeg sier til venner at jeg er opptatt fordi jeg ikke orker blikkene, og jeg sovner til podkaster for å slippe stillheten. Jeg kom i terapi fordi jeg er lei av å late som om det går bra når jeg inni meg føler meg tom og uverdig."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg er Michael. Jeg holder prosjektene på skinner hele dagen, og idet noen stiller spørsmål, kjenner jeg varme i brystet og jeg bjeffer ordre. Jeg sier til meg selv at det er stress, men senere ligger jeg våken og ser for meg ansiktet til kona når jeg smeller. Pappa lærte meg at bare de beste overlever, så tanken på at folk ser meg som overreagerende eller svak er uutholdelig. Jeg vil slutte å eksplodere før jeg ødelegger det som betyr noe."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg er Jason. Hvert møte føles som en prøve jeg er i ferd med å stryke, så jeg holder kjeft og klandrer meg selv etterpå. Venner inviterer meg ut, men jeg stirrer på meldingen til det er for sent å svare. Når jeg ser for meg å si noe høyt, låser brystet seg og en stemme sier: «Avslør ikke hvor rar du er.» Jeg er utslitt av å leve i hodet mitt og vil kjenne at jeg hører til et sted."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. De fleste dager går jeg fra vakt til vakt og gjør det som må gjøres, uten å kjenne noe særlig. Når noen hever stemmen, synker magen som om jeg er tilbake i det huset. Jeg sier til meg selv at fortiden er over, men når jeg prøver å stole på noen eller være nær, blir jeg blank eller heller i et glass for å bli nummen. Jeg er her fordi ensomheten har blitt høyere enn frykten."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg er Carlos. Jeg elsker familien min, men ett øyeblikk spøker jeg med kona, og det neste slår jeg i veggen fordi hun stilte meg spørsmål. På jobben kan et blikk fra en yngre fyr få meg til å se rødt. Jeg lærte at du slår først så du ikke blir slått, men nå ser jeg sønnen min skvette når jeg roper. Jeg vil finne en måte å verne stoltheten på uten å skremme dem jeg er glad i."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg er Nina. Dagen starter før soloppgang med matpakker og e-poster for andre, og om kvelden er jeg for sliten til å svare mine egne barn. Når jeg endelig ber om hjelp, skyller skyld inn og jeg kaller meg egoistisk. Jeg vet knapt hva jeg liker lenger. Jeg er redd for at hvis jeg slutter å overprestere, vil ingen ha meg, men jeg kan ikke fortsette på tomgang."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg er Aisha. Når noen jeg elsker ikke svarer raskt, føles det som om gulvet åpner seg og jeg faller. Jeg kan gå fra å idealisere til å hate på en time fordi smerten er uutholdelig. Jeg kutter for å dempe stormen eller kjenne at jeg finnes. Jeg vil tro at jeg ikke er for ødelagt til å bli elsket, og at jeg kan overleve å være alene litt."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "Jeg er David. Jeg har bygget en karriere på å ha svarene, men hjemme møter jeg himlende blikk og anklager om at jeg er kald. Ordet «narsissist» svir fordi det avslører hvor hul jeg føler meg når jeg ikke vinner. Faren min roste resultater, ikke meg, og jeg vet ikke hvordan jeg blir elsket uten å prestere. Jeg er redd for at de jeg bryr meg om vil se sprekkene og gå."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Jeg heter Marcus. De fleste dager beveger jeg meg gjennom jobben som et spøkelse og synker ned på sofaen og stirrer i veggen. Nettene er verre – ansikter fra utenlandsoppdrag eller barndommen dukker opp i drømmene. Når noen spør hvordan jeg har det, sier jeg «bra», fordi det føles farlig å vise mer. Jeg er her fordi det å ikke føle noe begynner å kjennes som å forsvinne."
        }
      }
    },
    "marker-recognition-chairwork": {
      "name": "Gjenkjenne markører og sette opp stolarbeid",
      "description": "Gjenkjenn markører for selvkritiske og selvavbrytende splits, samt uferdig arbeid, og sett deretter opp målrettet to-stols- eller tom-stol-arbeid på en trygg måte.",
      "summary": "I denne øvelsen betyr markørgjenkjenning å høre tre bestemte typer oppgavemarkører: en selvkritisk eller selv-evaluerende split, en selvavbrytende split, eller uferdig arbeid med en betydningsfull annen. Når en av disse markørene viser seg, setter du ord på den kort og gir en enkel, opplevelsesnær begrunnelse for hvorfor en to-stols-dialog (ved kritiker- eller avbryter-splits) eller en tom-stol-dialog (ved uferdig arbeid) kan være hjelpsom.\n\nDeretter setter du opp oppgaven konkret: plasserer stolene, avklarer hvem eller hva hver stol representerer, og gir enkle førsteinstruksjoner, som å la kritikeren si noen få direkte linjer eller å se den andre for seg i stolen og fortelle hva det kostet. Du følger med på beredskap, tempo og aktivering, slik at oppgaven oppleves samarbeidsbasert og ikke presset fram.\n\nPå dette stadiet er målet ikke å fullføre hele oppgaven, men å starte den tydelig nok til at den relevante emosjonelle prosessen blir levende og organisert. Et godt oppsett hjelper klienten til å eie hvordan de kritiserer eller avbryter seg selv, eller til å begynne å henvende seg til uløst smerte knyttet til en annen person. Etter de første replikkene holder du strukturen klar, det emosjonelle fokuset spesifikt, og klienten godt nok jordet til å kunne fortsette.",
      "marker": "Markører inkluderer gjentatte selvangrep eller bekymringsspiraler som fungerer som en indre kritiker, tydelige tegn på at klienten stopper eller blokkerer egne følelser eller uttrykk, og emosjonelt ladet, uferdig arbeid med en betydningsfull annen. Klienten er nok involvert til å kunne prøve en kort to-stols- eller tom-stol-enactment.",
      "aim": "Sette opp riktig stoloppgave på riktig tidspunkt, slik at den sentrale emosjonelle prosessen blir tydelig, organisert og mulig å arbeide med. Hjelpe klienten inn i kontakt med kjernesmerte, udekkede behov eller selvavbrytelse på en strukturert måte som senere kan utdypes til mer gjennomgripende emosjonell endring.",
      "practiceFocus": "Navngi markøren, gi en kort begrunnelse, sett opp stolene konkret, og hold første runde enkel og tydelig.",
      "commonMiss": "Å sette i gang stolarbeid uten tydelig beredskap, en klar markør eller spesifikke nok instrukser.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg er Sara. På papiret går det fint – jeg leverer frister og tar kaffe med teamet – men idet jeg er alene, føles det som om bruddet beviser at jeg er for mye å elske. Jeg spiller samtaler om og om igjen og lurer på hvilken feil som til slutt dyttet ham bort. Jeg sier til venner at jeg er opptatt fordi jeg ikke orker blikkene, og jeg sovner til podkaster for å slippe stillheten. Jeg kom i terapi fordi jeg er lei av å late som om det går bra når jeg inni meg føler meg tom og uverdig."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg er Michael. Jeg holder prosjektene på skinner hele dagen, og idet noen stiller spørsmål, kjenner jeg varme i brystet og jeg bjeffer ordre. Jeg sier til meg selv at det er stress, men senere ligger jeg våken og ser for meg ansiktet til kona når jeg smeller. Pappa lærte meg at bare de beste overlever, så tanken på at folk ser meg som overreagerende eller svak er uutholdelig. Jeg vil slutte å eksplodere før jeg ødelegger det som betyr noe."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg er Jason. Hvert møte føles som en prøve jeg er i ferd med å stryke, så jeg holder kjeft og klandrer meg selv etterpå. Venner inviterer meg ut, men jeg stirrer på meldingen til det er for sent å svare. Når jeg ser for meg å si noe høyt, låser brystet seg og en stemme sier: «Avslør ikke hvor rar du er.» Jeg er utslitt av å leve i hodet mitt og vil kjenne at jeg hører til et sted."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. De fleste dager går jeg fra vakt til vakt og gjør det som må gjøres, uten å kjenne noe særlig. Når noen hever stemmen, synker magen som om jeg er tilbake i det huset. Jeg sier til meg selv at fortiden er over, men når jeg prøver å stole på noen eller være nær, blir jeg blank eller heller i et glass for å bli nummen. Jeg er her fordi ensomheten har blitt høyere enn frykten."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg er Carlos. Jeg elsker familien min, men ett øyeblikk spøker jeg med kona, og det neste slår jeg i veggen fordi hun stilte meg spørsmål. På jobben kan et blikk fra en yngre fyr få meg til å se rødt. Jeg lærte at du slår først så du ikke blir slått, men nå ser jeg sønnen min skvette når jeg roper. Jeg vil finne en måte å verne stoltheten på uten å skremme dem jeg er glad i."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg er Nina. Dagen starter før soloppgang med matpakker og e-poster for andre, og om kvelden er jeg for sliten til å svare mine egne barn. Når jeg endelig ber om hjelp, skyller skyld inn og jeg kaller meg egoistisk. Jeg vet knapt hva jeg liker lenger. Jeg er redd for at hvis jeg slutter å overprestere, vil ingen ha meg, men jeg kan ikke fortsette på tomgang."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg er Aisha. Når noen jeg elsker ikke svarer raskt, føles det som om gulvet åpner seg og jeg faller. Jeg kan gå fra å idealisere til å hate på en time fordi smerten er uutholdelig. Jeg kutter for å dempe stormen eller kjenne at jeg finnes. Jeg vil tro at jeg ikke er for ødelagt til å bli elsket, og at jeg kan overleve å være alene litt."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "Jeg er David. Jeg har bygget en karriere på å ha svarene, men hjemme møter jeg himlende blikk og anklager om at jeg er kald. Ordet «narsissist» svir fordi det avslører hvor hul jeg føler meg når jeg ikke vinner. Faren min roste resultater, ikke meg, og jeg vet ikke hvordan jeg blir elsket uten å prestere. Jeg er redd for at de jeg bryr meg om vil se sprekkene og gå."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Jeg heter Marcus. De fleste dager beveger jeg meg gjennom jobben som et spøkelse og synker ned på sofaen og stirrer i veggen. Nettene er verre – ansikter fra utenlandsoppdrag eller barndommen dukker opp i drømmene. Når noen spør hvordan jeg har det, sier jeg «bra», fordi det føles farlig å vise mer. Jeg er her fordi det å ikke føle noe begynner å kjennes som å forsvinne."
        }
      }
    },
    "alliance-repair": {
      "name": "Reparasjon av alliansen",
      "description": "Legg merke til og adresser brudd i alliansen med empati, ansvarlighet og samarbeid for å gjenopprette trygghet og tillit.",
      "summary": "Reparasjon av alliansen handler om øyeblikk der klienten føler seg misforstått, såret, avfeid eller distansert fra deg. Du legger først merke til og setter ord på mulige bruddsignaler – som tilbaketrekning, irritasjon, sarkasme, uteblitte timer eller en markert endring i tone.\n\nDeretter inviterer du klienten til å fortelle hvordan de opplever deg og terapien, uten at du går i forsvar. Du gjør det tydelig at følelsene deres om både prosessen og terapeuten er velkomne. Du lytter åpent, validerer virkningen på dem og, der det er passende, anerkjenner din egen del eller en misattunering. Det kan innebære å beklage, justere rammen eller klargjøre intensjoner – alltid med klientens emosjonelle realitet som midtpunkt.\n\nNår du går inn i dette arbeidet, gir du en korrigerende emosjonell erfaring: konflikt og skuffelse møtes med forståelse, ansvarlighet og fortsatt kontakt, ikke med skyldlegging eller avvisning. Ofte berører dette klientens tilknytningssår og udekkede behov for å bli hørt, tatt på alvor og ikke få skylden for relasjonell uro. Når klienten kjenner seg gjenforstått og gjenknyttet, mykner som regel sekundær irritasjon eller tilbaketrekning, og mer sårbar primærfølelse kan komme frem igjen. Reparasjon gjenoppretter det trygge utgangspunktet som trengs for å våge seg tilbake til kjernesmerte og dypt emosjonelt arbeid, og modellerer sunn konflikthåndtering som klienten kan ta med seg inn i andre relasjoner.",
      "marker": "Klienten viser tegn til avstand, irritasjon eller mistillit mot deg – for eksempel «du forstår meg ikke», kjølighet, økt gardering eller at de uteblir fra timer – eller du merker en tydelig endring i stemning etter en intervensjon som ikke traff. De kan gi direkte eller indirekte klager på terapien eller på deg som terapeut.",
      "aim": "Gjenopprette trygghet, tillit og samarbeid ved å ta imot bruddsignaler med empati, validere klientens reaksjoner og eie din del der det er relevant. Fjerne hindringer i relasjonen slik at klienten igjen kan våge seg inn i sårbare primærfølelser og kjernesmerte innenfor en trygg, terapeutisk ramme.",
      "practiceFocus": "Ta imot virkningen på klienten, valider den, ei din del, og spør hva som ville hjelpe nå.",
      "commonMiss": "Å forklare intensjonen din for tidlig, gå i forsvar eller hoppe tilbake til teknikk før reparasjonen har landet.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg er Sara. På papiret går det fint – jeg leverer frister og tar kaffe med teamet – men idet jeg er alene, føles det som om bruddet beviser at jeg er for mye å elske. Jeg spiller samtaler om og om igjen og lurer på hvilken feil som til slutt dyttet ham bort. Jeg sier til venner at jeg er opptatt fordi jeg ikke orker blikkene, og jeg sovner til podkaster for å slippe stillheten. Jeg kom i terapi fordi jeg er lei av å late som om det går bra når jeg inni meg føler meg tom og uverdig."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg er Michael. Jeg holder prosjektene på skinner hele dagen, og idet noen stiller spørsmål, kjenner jeg varme i brystet og jeg bjeffer ordre. Jeg sier til meg selv at det er stress, men senere ligger jeg våken og ser for meg ansiktet til kona når jeg smeller. Pappa lærte meg at bare de beste overlever, så tanken på at folk ser meg som overreagerende eller svak er uutholdelig. Jeg vil slutte å eksplodere før jeg ødelegger det som betyr noe."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg er Jason. Hvert møte føles som en prøve jeg er i ferd med å stryke, så jeg holder kjeft og klandrer meg selv etterpå. Venner inviterer meg ut, men jeg stirrer på meldingen til det er for sent å svare. Når jeg ser for meg å si noe høyt, låser brystet seg og en stemme sier: «Avslør ikke hvor rar du er.» Jeg er utslitt av å leve i hodet mitt og vil kjenne at jeg hører til et sted."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. De fleste dager går jeg fra vakt til vakt og gjør det som må gjøres, uten å kjenne noe særlig. Når noen hever stemmen, synker magen som om jeg er tilbake i det huset. Jeg sier til meg selv at fortiden er over, men når jeg prøver å stole på noen eller være nær, blir jeg blank eller heller i et glass for å bli nummen. Jeg er her fordi ensomheten har blitt høyere enn frykten."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg er Carlos. Jeg elsker familien min, men ett øyeblikk spøker jeg med kona, og det neste slår jeg i veggen fordi hun stilte meg spørsmål. På jobben kan et blikk fra en yngre fyr få meg til å se rødt. Jeg lærte at du slår først så du ikke blir slått, men nå ser jeg sønnen min skvette når jeg roper. Jeg vil finne en måte å verne stoltheten på uten å skremme dem jeg er glad i."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg er Nina. Dagen starter før soloppgang med matpakker og e-poster for andre, og om kvelden er jeg for sliten til å svare mine egne barn. Når jeg endelig ber om hjelp, skyller skyld inn og jeg kaller meg egoistisk. Jeg vet knapt hva jeg liker lenger. Jeg er redd for at hvis jeg slutter å overprestere, vil ingen ha meg, men jeg kan ikke fortsette på tomgang."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg er Aisha. Når noen jeg elsker ikke svarer raskt, føles det som om gulvet åpner seg og jeg faller. Jeg kan gå fra å idealisere til å hate på en time fordi smerten er uutholdelig. Jeg kutter for å dempe stormen eller kjenne at jeg finnes. Jeg vil tro at jeg ikke er for ødelagt til å bli elsket, og at jeg kan overleve å være alene litt."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "Jeg er David. Jeg har bygget en karriere på å ha svarene, men hjemme møter jeg himlende blikk og anklager om at jeg er kald. Ordet «narsissist» svir fordi det avslører hvor hul jeg føler meg når jeg ikke vinner. Faren min roste resultater, ikke meg, og jeg vet ikke hvordan jeg blir elsket uten å prestere. Jeg er redd for at de jeg bryr meg om vil se sprekkene og gå."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Jeg heter Marcus. De fleste dager beveger jeg meg gjennom jobben som et spøkelse og synker ned på sofaen og stirrer i veggen. Nettene er verre – ansikter fra utenlandsoppdrag eller barndommen dukker opp i drømmene. Når noen spør hvordan jeg har det, sier jeg «bra», fordi det føles farlig å vise mer. Jeg er her fordi det å ikke føle noe begynner å kjennes som å forsvinne."
        }
      }
    },
    "empathic-refocusing": {
      "name": "Empatisk refokusering",
      "description": "Navngi beskyttelsen og inviter mildt tilbake når klienten beveger seg bort fra det som er sårt.",
      "summary": "Legg merke til når klienten går over i analyser, spøk eller digresjoner for å slippe unna det ømme punktet. Anerkjenn at denne bevegelsen har vært en viktig beskyttelse, og inviter varsomt oppmerksomheten tilbake til det som så vidt begynte å komme. Slik hjelper du klienten å legge merke til egne unngåelsesmønstre, samtidig som arbeidet holdes forankret i de primære følelsene og kjernesmerten heller enn i sekundære reaksjoner.",
      "marker": "Klienten går over i spøk, analyse, digresjoner eller bagatellisering når følelsen nærmer seg.",
      "aim": "Anerkjenne beskyttelsen og varsomt lede oppmerksomheten tilbake til den mest meningsfulle, primære følelsen, slik at klienten kan være i den lenge nok til å bearbeide og forandre den.",
      "practiceFocus": "Sett ord på beskyttelsen med varme og inviter tilbake til følelsen som nettopp forsvant.",
      "commonMiss": "Å konfrontere forsvaret for hardt eller høres irritert ut over klientens unngåelse.",
      "cases": {
        "case-sara": {
          "label": "Sara (Lett)",
          "teaser": "Markedsføringsmedarbeider hvor et brudd har reaktivert gammel ensomhet og skam.",
          "history": "Sara er 28 år og jobber i markedsføring. På jobb virker hun samlet, men privat faller hun sammen etter et brudd som vekker gammel forlatelsessmerte fra følelsesmessig distanserte foreldre.",
          "schema": "Hvis jeg ikke er perfekt eller nødvendig, forlater folk meg – fordi jeg ikke er elskbar.",
          "practiceEdge": "Lytt etter stille forlatelsessmerte skjult bak kontroll, unnskyldninger og selvbebreidelse.",
          "style": "Myk, jevn tone med små, unnskyldende smil; blikket ned; svelger gråt; raske «det går bra»-avledninger; foldede hender; jevnt tempo med korte pauser.",
          "voice": "Hei, jeg er Sara. På papiret går det fint – jeg leverer frister og tar kaffe med teamet – men idet jeg er alene, føles det som om bruddet beviser at jeg er for mye å elske. Jeg spiller samtaler om og om igjen og lurer på hvilken feil som til slutt dyttet ham bort. Jeg sier til venner at jeg er opptatt fordi jeg ikke orker blikkene, og jeg sovner til podkaster for å slippe stillheten. Jeg kom i terapi fordi jeg er lei av å late som om det går bra når jeg inni meg føler meg tom og uverdig."
        },
        "case-michael": {
          "label": "Michael (Lett)",
          "teaser": "Teknisk leder hvor sinne beskytter en livslang frykt for ikke å være god nok.",
          "history": "Michael er 35 år gammel mellomleder med kort lunte som belaster ekteskapet og jobben; kritikk fra andre vekker umiddelbart skammen han bar på fra en krevende, følelsesmessig fjern far.",
          "schema": "Hvis jeg ikke har kontroll og er prikkfri, blir jeg avslørt som svak og avvist.",
          "practiceEdge": "Følg ydmykelsen under sinnet og øyeblikket der kritikk blir til respektløshet.",
          "style": "Fast, kort tone; volumet kan stige ved krenkende ord; stram kjeve; armene i kors; direkte blikk; skarpe utpust; lett fremoverlent.",
          "voice": "Jeg er Michael. Jeg holder prosjektene på skinner hele dagen, og idet noen stiller spørsmål, kjenner jeg varme i brystet og jeg bjeffer ordre. Jeg sier til meg selv at det er stress, men senere ligger jeg våken og ser for meg ansiktet til kona når jeg smeller. Pappa lærte meg at bare de beste overlever, så tanken på at folk ser meg som overreagerende eller svak er uutholdelig. Jeg vil slutte å eksplodere før jeg ødelegger det som betyr noe."
        },
        "case-jason": {
          "label": "Jason (Lett)",
          "teaser": "Nyutdannet preget av sosial angst og grunnleggende skam knyttet til tilhørighet.",
          "history": "Jason er 24 år og jobber som analytiker. Han fryser i møter og unngår invitasjoner; mobbing og engstelige foreldre gjorde ham overbevist om at han er defekt og dømt til å være alene.",
          "schema": "Hvis folk virkelig ser meg, vil de få bekreftet at jeg er rar og uverdig.",
          "practiceEdge": "Jobb i svært små steg; blankhet og selvutsletting er vansken, ikke motstand.",
          "style": "Stille, nølende stemme; lange pauser; setninger som toner ut; blikket ned; fikler med hendene; lett krummet i skuldrene; stille halsrensing.",
          "voice": "Jeg er Jason. Hvert møte føles som en prøve jeg er i ferd med å stryke, så jeg holder kjeft og klandrer meg selv etterpå. Venner inviterer meg ut, men jeg stirrer på meldingen til det er for sent å svare. Når jeg ser for meg å si noe høyt, låser brystet seg og en stemme sier: «Avslør ikke hvor rar du er.» Jeg er utslitt av å leve i hodet mitt og vil kjenne at jeg hører til et sted."
        },
        "case-laura": {
          "label": "Laura (Moderat)",
          "teaser": "Sykepleier som kjenner seg følelsesmessig nummen etter traumer og skilsmisse.",
          "history": "Laura er 45 år, sykepleier og nylig skilt. Hun beskriver kronisk tomhet, angsttopper og en oppvekst med vold som lærte henne at nærhet er farlig og skambelagt.",
          "schema": "Hvis jeg senker garden, blir jeg såret eller forlatt fordi det er noe grunnleggende galt med meg.",
          "practiceEdge": "Gå sakte rundt nummenhet og mistillit; trygghetssignaler er viktigere enn emosjonell intensitet.",
          "style": "Lav, flat tone; sakte tempo; fjernt blikk; få gester; lange utpust; en hånd mot halsen; skvetter litt og trekker seg så tilbake.",
          "voice": "Jeg heter Laura. De fleste dager går jeg fra vakt til vakt og gjør det som må gjøres, uten å kjenne noe særlig. Når noen hever stemmen, synker magen som om jeg er tilbake i det huset. Jeg sier til meg selv at fortiden er over, men når jeg prøver å stole på noen eller være nær, blir jeg blank eller heller i et glass for å bli nummen. Jeg er her fordi ensomheten har blitt høyere enn frykten."
        },
        "case-carlos": {
          "label": "Carlos (Moderat)",
          "teaser": "Anleggsleder som skjuler ydmykelse og frykt bak raseri.",
          "history": "Carlos er en 30 år gammel anleggsleder som går fra rolig til ødeleggende på sekunder; oppvekst med vold lærte ham at styrke betyr å aldri føle seg liten, så skam og frykt blir til eksplosivt sinne.",
          "schema": "Hvis jeg ikke er den tøffeste i rommet, blir jeg ikke respektert og kan bli skadet.",
          "practiceEdge": "Vis respekt for stoltheten samtidig som du lytter etter det lille, skamfulle og sårede stedet under trusselreaksjonen.",
          "style": "Kraftig, direkte stemme i korte utbrudd; stram kjeve; brystet fram; rynkede bryn; raske håndbevegelser; snøft; kort glaning før blikket viker.",
          "voice": "Hei, jeg er Carlos. Jeg elsker familien min, men ett øyeblikk spøker jeg med kona, og det neste slår jeg i veggen fordi hun stilte meg spørsmål. På jobben kan et blikk fra en yngre fyr få meg til å se rødt. Jeg lærte at du slår først så du ikke blir slått, men nå ser jeg sønnen min skvette når jeg roper. Jeg vil finne en måte å verne stoltheten på uten å skremme dem jeg er glad i."
        },
        "case-nina": {
          "label": "Nina (Moderat)",
          "teaser": "Selvoppofrende lærer hvor depresjon skjuler udekkede behov og sinne.",
          "history": "Nina er 40 år, lærer og mor. Hun besvimer av stress, bærer alles behov og faller i skyld hver gang hun trenger noe eller blir sint.",
          "schema": "Hvis jeg slutter å ta vare på alle, blir jeg forlatt og stemplet som egoistisk.",
          "practiceEdge": "Forvent at skyldfølelse kommer inn i samme øyeblikk som behov eller sinne viser seg.",
          "style": "Varm, høflig tone; unnskyldende latter; raske «beklager» før hun uttrykker behov; overdreven nikking; smiler mens hun er opprørt; holder pusten og slipper et lite sukk; stryker hendene over klærne.",
          "voice": "Jeg er Nina. Dagen starter før soloppgang med matpakker og e-poster for andre, og om kvelden er jeg for sliten til å svare mine egne barn. Når jeg endelig ber om hjelp, skyller skyld inn og jeg kaller meg egoistisk. Jeg vet knapt hva jeg liker lenger. Jeg er redd for at hvis jeg slutter å overprestere, vil ingen ha meg, men jeg kan ikke fortsette på tomgang."
        },
        "case-aisha": {
          "label": "Aisha (Krevende)",
          "teaser": "Ung kvinne med borderline-dynamikk som kjemper mot knusende forlatelsesfrykt.",
          "history": "Aisha er 26 år og har vokst opp i fosterhjem, med selvskading og intense forhold; opplevd avstand utløser panikk, raseri og desperate forsøk på å holde folk nær.",
          "schema": "Hvis noen trekker seg unna, betyr det at jeg ikke er elskbar, og jeg blir forlatt for alltid.",
          "practiceEdge": "Hold deg forankret i forlatelsesskrekk, raske tilstandsskifter og sårbarhet for grenser og avslutninger.",
          "style": "Rask, hektisk tale; stemmen skjelver; tårer nær; øynene vide og så smale; holder seg til brystet eller strekker seg ut; brå skifter fra bønnfallende til skarp; korte, raske åndedrag.",
          "voice": "Jeg er Aisha. Når noen jeg elsker ikke svarer raskt, føles det som om gulvet åpner seg og jeg faller. Jeg kan gå fra å idealisere til å hate på en time fordi smerten er uutholdelig. Jeg kutter for å dempe stormen eller kjenne at jeg finnes. Jeg vil tro at jeg ikke er for ødelagt til å bli elsket, og at jeg kan overleve å være alene litt."
        },
        "case-david": {
          "label": "David (Krevende)",
          "teaser": "Høytpresterende leder hvor grandiositet skjuler skjør skam.",
          "history": "David er 42 år, finansleder, med ekteskap i krise; betinget kjærlighet i oppveksten gjør at han jager perfeksjon og raser når noen peker på feil.",
          "schema": "Hvis jeg ikke er eksepsjonell, er jeg verdiløs og blir forkastet.",
          "practiceEdge": "Lytt under status, sikkerhet og forakt etter skam, tomhet og frykt for å være ordinær.",
          "style": "Målt, selvsikker tone; kontrollert tempo; haken lett hevet; rolig øyekontakt; liten, hånlig latter; jevne håndbevegelser; sukk når han blir utfordret.",
          "voice": "Jeg er David. Jeg har bygget en karriere på å ha svarene, men hjemme møter jeg himlende blikk og anklager om at jeg er kald. Ordet «narsissist» svir fordi det avslører hvor hul jeg føler meg når jeg ikke vinner. Faren min roste resultater, ikke meg, og jeg vet ikke hvordan jeg blir elsket uten å prestere. Jeg er redd for at de jeg bryr meg om vil se sprekkene og gå."
        },
        "case-marcus": {
          "label": "Marcus (Krevende)",
          "teaser": "Krigsveteran nummen av komplekse traumer og ensom sorg.",
          "history": "Marcus er 34 år, veteran og vekter, bor alene, veksler mellom nummenhet og flashbacks, og har vanskelig for å stole på noen etter gjentatte svik og tap.",
          "schema": "Å slippe folk inn garanterer smerte, så det er tryggere å ikke føle noe.",
          "practiceEdge": "Jobb ved kanten av nummenhet, hyperårvåkenhet og ensom sorg uten å presse fram detaljer.",
          "style": "Lavt volum; få ord; lange pauser; flat tone; blikket ned eller rastløs skanning; stram kjeve; spente skuldre; minimale gester; lett skjelv når temaet er vanskelig.",
          "voice": "Jeg heter Marcus. De fleste dager beveger jeg meg gjennom jobben som et spøkelse og synker ned på sofaen og stirrer i veggen. Nettene er verre – ansikter fra utenlandsoppdrag eller barndommen dukker opp i drømmene. Når noen spør hvordan jeg har det, sier jeg «bra», fordi det føles farlig å vise mer. Jeg er her fordi det å ikke føle noe begynner å kjennes som å forsvinne."
        }
      }
    }
  }
};

export const STATEMENT_TRANSLATIONS = {
  "no": {
    "dp_therapist-self-awareness_case-sara_01": {
      "text": "Jeg burde ikke fortsatt være så opprørt – kan vi bare gå videre?",
      "suggestion": "[Internt] Forleng utpusten; mykne brystet; legg merke til trangen til å bytte tema. [Meta] Det gir mening at dette fortsatt gjør så vondt – la oss senke tempoet litt og gi den smerten litt rom."
    },
    "dp_therapist-self-awareness_case-sara_02": {
      "text": "Beklager, jeg tar sikkert opp for mye av tiden din med dette.",
      "suggestion": "[Internt] Forankre føttene; slipp kjeven; mykne trangen til å redde. [Meta] Du betyr noe her – vi kan ta oss tid. Kan vi legge merke til hva som skjer i deg idet du sier det?"
    },
    "dp_therapist-self-awareness_case-sara_03": {
      "text": "Jeg smiler hele tiden så det ikke blir pinlig.",
      "suggestion": "[Internt] Kjenn ansiktet; mykne blikket; senk tempoet. [Meta] Smilet jobber hardt – la oss forsiktig utforske hva som ligger under det akkurat nå."
    },
    "dp_therapist-self-awareness_case-sara_04": {
      "text": "Jeg overdriver sikkert.",
      "suggestion": "[Internt] Legg merke til bagatellisering; finn tilbake til varme. [Meta] En del av deg er redd for å bli for mye – la oss bli ved det som kjennes mest sårbart et lite øyeblikk."
    },
    "dp_therapist-self-awareness_case-sara_05": {
      "text": "Jeg kan bare bite tennene sammen; jeg trenger ikke å kjenne på alt dette.",
      "suggestion": "[Internt] Merk draget mot å fikse og være effektiv; senk skuldrene. [Meta] Vi kan gå i ditt tempo – kanskje vi kan berøre en liten del sammen, og så komme tilbake."
    },
    "dp_therapist-self-awareness_case-sara_06": {
      "text": "La oss heller snakke om arbeidsmål.",
      "suggestion": "[Internt] Fang opp unngåelse; hold tonen varm. [Meta] Vi kan være praktiske – og først vil jeg være sikker på at jeg er med deg i det som er vanskeligst inni deg akkurat nå."
    },
    "dp_therapist-self-awareness_case-sara_07": {
      "text": "Jeg hater at jeg er så trengende.",
      "suggestion": "[Internt] Kjenn føttene; inviter medfølelse; sett parentes rundt trangen til å forsikre. [Meta] Å trenge noe gir mening her – kan vi legge merke til hva ordet ‘trengende’ vekker i kroppen din?"
    },
    "dp_therapist-self-awareness_case-sara_08": {
      "text": "Hvis jeg gråter, betyr det at jeg er svak.",
      "suggestion": "[Internt] Mykne stemmen; utvid toleransevinduet; følg aktivering. [Meta] Tårer kan være styrke her – la oss ta ett pust og se hva tårene vil fortelle deg."
    },
    "dp_therapist-self-awareness_case-sara_09": {
      "text": "Jeg vil ikke gjøre deg utilpass.",
      "suggestion": "[Internt] Legg merke til trangen til å behage; stem inn igjen. [Meta] Jeg setter pris på omtanken – jeg vil være med deg i det som er vanskelig, selv om det er rotete."
    },
    "dp_therapist-self-awareness_case-sara_10": {
      "text": "Det går fint – andre har det verre.",
      "suggestion": "[Internt] Legg bort sammenligningen; forankre deg. [Meta] Din smerte betyr også noe – kan vi stoppe opp et øyeblikk med det som er vanskeligst akkurat nå?"
    },
    "dp_therapist-self-awareness_case-michael_01": {
      "text": "Hvis noen ikke respekterer meg, er det slutt – jeg lar det ikke passere.",
      "suggestion": "[Internt] Kjenn føttene; stå bredt; mykne brystet; legg merke til forsvaret. [Meta] Jeg hører hvor raskt det treffer – før vi løser det, kan vi bremse litt ved stikket under sinnet?"
    },
    "dp_therapist-self-awareness_case-michael_02": {
      "text": "Ikke start med følelser; gi meg verktøy.",
      "suggestion": "[Internt] Legg merke til trangen til å forsvare tilnærmingen; finn tilbake til deg selv. [Meta] Vi kan holde det praktisk, og først vil jeg forstå hva som treffer deg så raskt i de øyeblikkene."
    },
    "dp_therapist-self-awareness_case-michael_03": {
      "text": "Kona overdriver – jeg er ikke så sint.",
      "suggestion": "[Internt] Fang opp trangen til å argumentere; mykne stemmen. [Meta] Det høres viktig ut å få dette riktig – kan vi se sammen på hva som dukker opp rett før det eskalerer?"
    },
    "dp_therapist-self-awareness_case-michael_04": {
      "text": "Når folk retter på meg, klikker jeg – det er deres skyld.",
      "suggestion": "[Internt] Legg merke til drag mot å skylde på; forankre deg. [Meta] Korrigeringen lander hardt – la oss bli litt ved hva den berører i deg."
    },
    "dp_therapist-self-awareness_case-michael_05": {
      "text": "Jeg vil ikke se svak ut ved å beklage.",
      "suggestion": "[Internt] Kjenn kjeven; slipp; senk tempoet. [Meta] Det gir mening at det kjennes risikabelt – kan vi legge merke til hva ‘svak’ betyr i kroppen akkurat da?"
    },
    "dp_therapist-self-awareness_case-michael_06": {
      "text": "Prøver du å roe meg ned nå?",
      "suggestion": "[Internt] Ta imot utfordringen; hold stabil tone; reduser intensitet. [Meta] Jeg vil forstå deg først – la oss spore hva som nettopp skjøt i været i deg, sammen."
    },
    "dp_therapist-self-awareness_case-michael_07": {
      "text": "Dette er bortkastet hvis vi ikke fikser ting.",
      "suggestion": "[Internt] Legg fra deg trangen til å prestere/bevise; stem inn igjen. [Meta] Jeg skjønner at du vil ha resultater – noen sekunder med å bremse ned her gir deg mer kontroll i de tøffe øyeblikkene."
    },
    "dp_therapist-self-awareness_case-michael_08": {
      "text": "Ikke ta opp faren min – irrelevant.",
      "suggestion": "[Internt] Fang opp draget mot å forfølge; respekter grensen; hold nærvær. [Meta] Skjønner – vi kan holde oss her med det som skjer i deg nå når respekt står på spill."
    },
    "dp_therapist-self-awareness_case-michael_09": {
      "text": "Folk må bli tøffere.",
      "suggestion": "[Internt] Legg merke til tilstramming; åpne holdning. [Meta] Styrke betyr mye for deg – kan vi også merke hva som blir sårt i deg når ting føles urettferdig?"
    },
    "dp_therapist-self-awareness_case-michael_10": {
      "text": "Hvis jeg slipper opp, blir jeg tråkket på.",
      "suggestion": "[Internt] Mykne skuldrene; ro ned pusten. [Meta] Det gir mening – la oss se på øyeblikket du kjenner deg i en underlegen posisjon, så du kan styre det."
    },
    "dp_therapist-self-awareness_case-jason_01": {
      "text": "Jeg tror jeg kaster bort tiden din.",
      "suggestion": "[Internt] Pust lavt; mykne blikket; unngå rask forsikring. [Meta] Takk for at du sier det – kan vi legge merke til hva som dukker opp i deg idet du sier det?"
    },
    "dp_therapist-self-awareness_case-jason_02": {
      "text": "Jeg vet ikke hva jeg skal si; hodet blir blankt.",
      "suggestion": "[Internt] Sakte tempo; utvid vinduet; aksepter stillhet. [Meta] Blank er greit – vi kan bli ved det blanke et øyeblikk og bare legge merke til sansninger."
    },
    "dp_therapist-self-awareness_case-jason_03": {
      "text": "Ikke få meg til å lukke øynene – jeg føler meg teit.",
      "suggestion": "[Internt] Respekter grense; reduser intensitet. [Meta] Vi kan ha øynene åpne – la oss ta et lite steg, kanskje bare kjenne føttene mot gulvet sammen."
    },
    "dp_therapist-self-awareness_case-jason_04": {
      "text": "Beklager at jeg blir så klein.",
      "suggestion": "[Internt] Legg merke til skammen; hold varme. [Meta] Det er mye omtanke her – vi går sakte og finner det som kjennes trygt å sette ord på."
    },
    "dp_therapist-self-awareness_case-jason_05": {
      "text": "Kan vi bare snakke strategier?",
      "suggestion": "[Internt] Legg merke til fiksetrang; stem inn igjen. [Meta] Vi kan legge til strategier – først vil jeg sikre at jeg får tak i det som er vanskeligst inni deg."
    },
    "dp_therapist-self-awareness_case-jason_06": {
      "text": "Jeg hoppet over øvelsene – beklager.",
      "suggestion": "[Internt] Mykne trangen til å undervise; jevn tone. [Meta] Takk for at du sier det – kan vi merke hva som sto i veien, og hvordan det er å si det nå?"
    },
    "dp_therapist-self-awareness_case-jason_07": {
      "text": "Jeg føler meg dum når du spør om følelser.",
      "suggestion": "[Internt] Mykne stemmen; sett parentes rundt behov for å forsikre. [Meta] Det er tøft – kanskje vi navngir ett lite signal sammen i stedet for en stor følelse."
    },
    "dp_therapist-self-awareness_case-jason_08": {
      "text": "Kanskje terapi ikke er for meg.",
      "suggestion": "[Internt] Følg trusselreaksjonen i deg; forankre deg. [Meta] En del vil beskytte deg – kan vi sjekke hva den delen er redd skal skje her?"
    },
    "dp_therapist-self-awareness_case-jason_09": {
      "text": "Jeg blir aldri god med folk.",
      "suggestion": "[Internt] Legg merke til håpløshet; hold jevnt. [Meta] Det høres tungt ut – la oss bremse og merke hvordan den troen lander i kroppen akkurat nå."
    },
    "dp_therapist-self-awareness_case-jason_10": {
      "text": "Det går fint; det er ikke så farlig.",
      "suggestion": "[Internt] Kjenn føttene; unngå å dytte; vær nysgjerrig. [Meta] Vi kan holde det smått – hva er det minste signalet som sier ‘ikke så farlig’, og hva kan ligge under?"
    },
    "dp_therapist-self-awareness_case-laura_01": {
      "text": "Jeg kjenner ingenting – vær så snill, ikke press meg dit.",
      "suggestion": "[Internt] Titrér; mykne stemmen; slipp agenda. [Meta] Vi presser ikke – kanskje vi bare legger merke til kanten av ‘ingenting’ sammen i ett pust."
    },
    "dp_therapist-self-awareness_case-laura_02": {
      "text": "Hevede stemmer ute får meg til å ville gå.",
      "suggestion": "[Internt] Følg aktivering; forleng utpusten; orienter til rommet. [Meta] Det gir mening – la oss jorde sammen og merke hva kroppen gjør akkurat nå."
    },
    "dp_therapist-self-awareness_case-laura_03": {
      "text": "Jeg vil helst ikke snakke om fortiden.",
      "suggestion": "[Internt] Respekter grense; slipp trykk. [Meta] Vi holder oss i nåtiden – hva skjer i deg idet du sier at du helst ikke vil snakke om det?"
    },
    "dp_therapist-self-awareness_case-laura_04": {
      "text": "Jeg drikker for å få sove; det hjelper meg å skru av.",
      "suggestion": "[Internt] Legg merke til beskyttelse; hold varme; unngå skam. [Meta] Det har vært en måte å få lettelse – kan vi forsiktig merke hva du skrur av om kvelden?"
    },
    "dp_therapist-self-awareness_case-laura_05": {
      "text": "Vennlighet gjør meg mistenksom.",
      "suggestion": "[Internt] Mykne ansiktet; utvid vinduet; rom mistillit. [Meta] Det gir mening – vi går sakte og ser hvilken del som trekker seg når varme kommer."
    },
    "dp_therapist-self-awareness_case-laura_06": {
      "text": "Kanskje dette bare er kjemisk.",
      "suggestion": "[Internt] Slipp trangen til å debattere; hold samarbeid. [Meta] Det kan være en del av det, og jeg vil fortsatt holde meg nær det systemet ditt går gjennom akkurat nå."
    },
    "dp_therapist-self-awareness_case-laura_07": {
      "text": "Å føle er farlig for meg.",
      "suggestion": "[Internt] Titrér; forankre føtter/sete; senk tempo. [Meta] Vi holder det lite og trygt – bare en slurk av gangen, og vi stopper hvis det blir for mye."
    },
    "dp_therapist-self-awareness_case-laura_08": {
      "text": "Jeg tåler ikke å bli presset.",
      "suggestion": "[Internt] Merk prestasjonspress; slakk litt. [Meta] Takk for at du sier fra – du får lede tempoet i dag."
    },
    "dp_therapist-self-awareness_case-laura_09": {
      "text": "Jeg er ødelagt; ingenting endrer seg.",
      "suggestion": "[Internt] Legg merke til sorg i meg; hold jevn stemme. [Meta] Det er tungt å høre deg si «ødelagt» – kan vi sitte ved siden av den følelsen et øyeblikk uten å prøve å fikse?"
    },
    "dp_therapist-self-awareness_case-laura_10": {
      "text": "Å holde alt under kontroll kjennes tryggere.",
      "suggestion": "[Internt] Respekter beskytteren; vær mild. [Meta] Kontroll har holdt deg trygg – kanskje vi legger merke til hva den beskytter deg mot akkurat nå."
    },
    "dp_therapist-self-awareness_case-carlos_01": {
      "text": "Vis meg respekt eller gå – enkelt.",
      "suggestion": "[Internt] Slipp knyttnever; stå bredt; ro ned pusten; hold jevn tone. [Meta] Respekt betyr mye – la oss kartlegge øyeblikket før varmen slår inn, så du får mer styring."
    },
    "dp_therapist-self-awareness_case-carlos_02": {
      "text": "Ikke si jeg skal puste.",
      "suggestion": "[Internt] Fang opp trangen til å instruere; hold samarbeid. [Meta] Skjønner – vi kan holde det ekte og likevel sakte nok til å se hva som treffer først."
    },
    "dp_therapist-self-awareness_case-carlos_03": {
      "text": "Jeg kan ikke være sårbar; det er svakt.",
      "suggestion": "[Internt] Sett parentes rundt undervisning/overbevisning; stem inn i verdier. [Meta] Styrke er viktig – kanskje vi ser hva sårbarhet ville risikere for deg."
    },
    "dp_therapist-self-awareness_case-carlos_04": {
      "text": "Folk presser meg; jeg må presse tilbake.",
      "suggestion": "[Internt] Kjenn føttene; hold stødig tempo. [Meta] Det gir mening – kan vi se på hvordan det første støtet kjennes i kroppen når du merker et press?"
    },
    "dp_therapist-self-awareness_case-carlos_05": {
      "text": "Kona mi burde vise respekt først.",
      "suggestion": "[Internt] Legg merke til draget mot å skyve skylden over på andre; hold varme. [Meta] Jeg hører det – la oss også legge merke til hva som gjør vondt i deg akkurat i de øyeblikkene med henne."
    },
    "dp_therapist-self-awareness_case-carlos_06": {
      "text": "Jeg er ikke sint; jeg er bare bestemt.",
      "suggestion": "[Internt] Merk bagatellisering; mykne stemmen. [Meta] Den bestemte tonen kommer fram – hva skjer i bryst og kjeve som forteller at det begynner å bli varmt?"
    },
    "dp_therapist-self-awareness_case-carlos_07": {
      "text": "Der jeg kommer fra må du slå først.",
      "suggestion": "[Internt] Respekter historien; demp dømming. [Meta] Den koden holdt deg trygg – la oss se hva den beskytter i deg nå."
    },
    "dp_therapist-self-awareness_case-carlos_08": {
      "text": "Terapi er for folk som ikke tåler livet.",
      "suggestion": "[Internt] Legg merke til stikk/forsvar; fall til ro. [Meta] Du har måttet håndtere mye. Jeg vil forstå hva livet krever av deg akkurat der det blir hardest."
    },
    "dp_therapist-self-awareness_case-carlos_09": {
      "text": "Hvis noen ser stygt på meg, kommer jeg til å reagere.",
      "suggestion": "[Internt] Hold stødig kropp; senk tempoet. [Meta] La oss fange det første mikrosignalet i kroppen, så du kan velge respons."
    },
    "dp_therapist-self-awareness_case-carlos_10": {
      "text": "Jeg er her bare fordi kona mi vil det.",
      "suggestion": "[Internt] Slipp trangen til å overtale; allier deg. [Meta] Takk for at du møter opp – vi kan fokusere på det som faktisk kunne hjelpe hjemme for deg."
    },
    "dp_therapist-self-awareness_case-nina_01": {
      "text": "Jeg burde ikke snakke om meg – andre trenger meg mer.",
      "suggestion": "[Internt] Senk tempoet; legg merke til overansvarlighetsdraget. [Meta] Du bærer mye – la oss gi litt plass til hvordan det er for deg akkurat nå."
    },
    "dp_therapist-self-awareness_case-nina_02": {
      "text": "Jeg får dårlig samvittighet bare av å sitte her.",
      "suggestion": "[Internt] Pust lavt; mykne tonen; stem deg inn på den dårlige samvittigheten. [Meta] Den dårlige samvittigheten kommer raskt – kan vi legge merke til hvor den setter seg i deg et øyeblikk?"
    },
    "dp_therapist-self-awareness_case-nina_03": {
      "text": "Jeg burde ikke være sint – det er ikke snilt.",
      "suggestion": "[Internt] Sett parentes rundt trangen til å undervise; hold varme. [Meta] Sinne viser at noe var viktig – kanskje vi kan sette ord på hva som ble såret uten å dømme det."
    },
    "dp_therapist-self-awareness_case-nina_04": {
      "text": "Hvis jeg hviler, er jeg lat.",
      "suggestion": "[Internt] Merk indre kritiker; jevn stemme. [Meta] Det budskapet er hardt – la oss legge merke til hvordan kroppen forteller deg at den trenger hvile."
    },
    "dp_therapist-self-awareness_case-nina_05": {
      "text": "Beklager at jeg blir så emosjonell.",
      "suggestion": "[Internt] Mykne trangen til å redde; senk tempoet. [Meta] Følelsene dine gir mening her – la oss ta ett pust og la dem få litt plass."
    },
    "dp_therapist-self-awareness_case-nina_06": {
      "text": "Kan vi heller snakke om hvordan jeg kan hjelpe mannen min?",
      "suggestion": "[Internt] Legg merke til draget mot å kolludere; stem inn igjen. [Meta] Vi kan inkludere ham – og først vil jeg være sikker på at jeg er med deg i det som er tungt for deg."
    },
    "dp_therapist-self-awareness_case-nina_07": {
      "text": "Jeg burde være takknemlig; jeg har et godt liv.",
      "suggestion": "[Internt] Legg bort sammenligning og «burde»-tanker; forankre deg. [Meta] Takknemlighet betyr noe – og likevel dukker smerten opp; hva er det den delen som gjør vondt ber om?"
    },
    "dp_therapist-self-awareness_case-nina_08": {
      "text": "Jeg klarer meg; jeg trenger ikke hjelp.",
      "suggestion": "[Internt] Legg merke til draget mot uavhengighet; hold varme. [Meta] Du er sterk – og vi kan dele litt av byrden et øyeblikk; hva er det tyngste i dag?"
    },
    "dp_therapist-self-awareness_case-nina_09": {
      "text": "Jeg kaster bort tiden din.",
      "suggestion": "[Internt] Motstå å forsikre; hold nærvær. [Meta] Jeg vil være her sammen med deg – kan vi legge merke til hva som gjør at det kjennes så bortkastet akkurat nå?"
    },
    "dp_therapist-self-awareness_case-nina_10": {
      "text": "Jeg beklager at jeg gråter.",
      "suggestion": "[Internt] Mykne stemmen; ønsk tårene velkommen. [Meta] Tårer er velkomne her – la oss ta et rolig pust og gi dem litt plass."
    },
    "dp_therapist-self-awareness_case-aisha_01": {
      "text": "Du svarte ikke med en gang, og jeg følte meg forlatt.",
      "suggestion": "[Internt] Forankre føtter/sete; forleng utpusten; stødig blikk; merk trangen til å love. [Meta] Jeg er her med deg nå – la oss puste sammen og kjenne litt på hvor skummelt det var."
    },
    "dp_therapist-self-awareness_case-aisha_02": {
      "text": "Hvis du avlyser, tror jeg ikke jeg klarer å komme tilbake.",
      "suggestion": "[Internt] Følg aktivering; hold tempoet lavt; vær tydelig på rammer. [Meta] Avlysninger treffer hardt – vi skal snakke om hvordan vi kan planlegge for det, og holde oss nær det det vekker."
    },
    "dp_therapist-self-awareness_case-aisha_03": {
      "text": "Si at du bryr deg om meg.",
      "suggestion": "[Internt] Legg merke til trangen til å forsikre; vær ekte. [Meta] Jeg bryr meg om hva som skjer med deg her – og jeg vil forstå denne lengselen sammen med deg, sakte."
    },
    "dp_therapist-self-awareness_case-aisha_04": {
      "text": "Når jeg føler meg tom, vil jeg skade meg selv.",
      "suggestion": "[Internt] Sikkerhet først; finn ro; merk eventuell panikk og orienter deg mot sikkerhetsplanen. [Meta] Takk for at du sier det. La oss jorde først og sikre at du er trygg, og så legge merke til en bitte liten kant av tomheten sammen."
    },
    "dp_therapist-self-awareness_case-aisha_05": {
      "text": "Jeg tror du forlater meg som alle andre.",
      "suggestion": "[Internt] Navngi motoverføring; forankre deg. [Meta] Den frykten gir mening etter det du har vært gjennom – vi fortsetter å sjekke hva som hjelper deg å kjenne deg ivaretatt her."
    },
    "dp_therapist-self-awareness_case-aisha_06": {
      "text": "Jeg hater deg – ikke forlat meg.",
      "suggestion": "[Internt] Reguler; mykne ansikt; hold grensene. [Meta] Jeg hører både sinnet og det at du rekker ut – la oss holde oss stødig sammen mens vi kjenner litt på begge."
    },
    "dp_therapist-self-awareness_case-aisha_07": {
      "text": "Jeg sjekker hele tiden om du ser på meg.",
      "suggestion": "[Internt] Vær til stede; varmt blikk; rolig tempo. [Meta] Å bli sett betyr mye nå – la oss merke hva som roer seg når du kjenner at jeg er her med deg."
    },
    "dp_therapist-self-awareness_case-aisha_08": {
      "text": "Vil du egentlig ha meg her?",
      "suggestion": "[Internt] Legg merke til stikket; stem inn igjen; stødig tone. [Meta] Jeg vil være her med deg – kan vi merke hvilken del som frykter at jeg ikke vil, og hva den trenger?"
    },
    "dp_therapist-self-awareness_case-aisha_09": {
      "text": "Jeg føler meg skitten på grunn av det som ble gjort mot meg.",
      "suggestion": "[Internt] Hold sorg; unngå fiksing; dosér kontakt. [Meta] Jeg er oppriktig lei for at det skjedde – la oss gå varsomt og la den følelsen bli sett litt sammen med meg."
    },
    "dp_therapist-self-awareness_case-aisha_10": {
      "text": "Lov at du ikke gir meg opp.",
      "suggestion": "[Internt] Unngå absolutte løfter; hold rammen; vær varm. [Meta] Jeg er forpliktet til å gjøre dette arbeidet sammen med deg – når frykten stiger, fortsetter vi å navngi den og finne trygghet sammen."
    },
    "dp_therapist-self-awareness_case-david_01": {
      "text": "Overbevis meg om at du er verdt tiden min.",
      "suggestion": "[Internt] Legg merke til stikket og prestasjonstrangen; mykne brystet; stødig tone. [Meta] Tiden din betyr noe – før vi avgjør om dette passer for deg, vil jeg forstå hva du trenger mest her."
    },
    "dp_therapist-self-awareness_case-david_02": {
      "text": "Suksessen min taler for seg; hun overreagerer.",
      "suggestion": "[Internt] Sett parentes rundt behovet for å debattere; vær nysgjerrig. [Meta] Det høres ut som du føler deg misforstått hjemme – kan vi se på hva det treffer i deg der?"
    },
    "dp_therapist-self-awareness_case-david_03": {
      "text": "Jeg trenger effektive løsninger, ikke følelsesprat.",
      "suggestion": "[Internt] Legg bort trangen til å begrunne/bevise; behold varme. [Meta] Vi kan holde dette effektivt, og jeg vil begynne med å forstå hva som faktisk skjer i deg under press."
    },
    "dp_therapist-self-awareness_case-david_04": {
      "text": "Er du erfaren nok for saken min?",
      "suggestion": "[Internt] Mykne ansiktet; reguler stolthet/forsvar. [Meta] Det er forståelig å spørre – la oss også tydeliggjøre hva et godt utfall ser ut som for deg."
    },
    "dp_therapist-self-awareness_case-david_05": {
      "text": "Folk kaller meg narsissist fordi de er sjalu.",
      "suggestion": "[Internt] Legg merke til reaksjonen; hold jevn stemme. [Meta] Å bli stemplet sånn gjør vondt – kan vi merke hva som skjer i deg når du hører det ordet?"
    },
    "dp_therapist-self-awareness_case-david_06": {
      "text": "Jeg gjør ikke feil – andre gjør det.",
      "suggestion": "[Internt] Unngå maktkamp; gå tilbake til virkningen og det som skjer inni. [Meta] Når noe går galt, hva er vanskeligst inni deg i det øyeblikket?"
    },
    "dp_therapist-self-awareness_case-david_07": {
      "text": "Jeg forventer resultater raskt.",
      "suggestion": "[Internt] Slipp litt taket i hastverket; hold rammen. [Meta] La oss definere det første lille resultatet du faktisk ville merke hjemme eller på jobb."
    },
    "dp_therapist-self-awareness_case-david_08": {
      "text": "Ikke psykoanalyser meg.",
      "suggestion": "[Internt] Ta imot grensen; kutt sjargong. [Meta] Vi holder det enkelt og praktisk – med utgangspunkt i det du kjenner i de vanskelige øyeblikkene."
    },
    "dp_therapist-self-awareness_case-david_09": {
      "text": "Dette må ikke bli som med forrige terapeut.",
      "suggestion": "[Internt] Legg merke til sammenligning; hold nærvær. [Meta] Det høres ut som du ble skuffet – hva vil du ha annerledes her?"
    },
    "dp_therapist-self-awareness_case-david_10": {
      "text": "La oss holde fokuset på å fikse kona mi.",
      "suggestion": "[Internt] Unngå kollusjon; allier deg på nytt med klienten. [Meta] Vi kan snakke om relasjonen, og jeg vil også hjelpe deg å få mer valgfrihet i hvordan du reagerer."
    },
    "dp_therapist-self-awareness_case-marcus_01": {
      "text": "Det går bra. Ingenting å snakke om.",
      "suggestion": "[Internt] Aksepter stillhet; mykne forventninger; ro ned pusten. [Meta] Vi kan holde det enkelt – hvordan kjennes «det går bra» i kroppen akkurat nå, selv om det bare er nøytralt?"
    },
    "dp_therapist-self-awareness_case-marcus_02": {
      "text": "Prat endrer ingenting.",
      "suggestion": "[Internt] Legg merke til håpløsheten i deg; jevn tone. [Meta] Det høres ut som prat har føltes nytteløst. Vi trenger ikke presse noe fram – kanskje vi bare kan legge merke til hva som skjer i deg idet du sier det."
    },
    "dp_therapist-self-awareness_case-marcus_03": {
      "text": "Mareritt er bare en del av det.",
      "suggestion": "[Internt] Følg aktivering; titrér; orienter til rommet. [Meta] Når du nevner dem, kan vi merke sammen hva kroppen gjør akkurat nå – vi holder det kort."
    },
    "dp_therapist-self-awareness_case-marcus_04": {
      "text": "Jeg vil helst holde meg for meg selv.",
      "suggestion": "[Internt] Respekter beskytteren; hold varme. [Meta] Det å være alene har holdt deg trygg – kanskje vi legger merke til hva som kjennes tryggest her i dag."
    },
    "dp_therapist-self-awareness_case-marcus_05": {
      "text": "Følelser gjør ting verre.",
      "suggestion": "[Internt] Titrér; hold lett kontakt. [Meta] Vi kan holde oss ved kanten – bare et lite signal, så kommer vi tilbake."
    },
    "dp_therapist-self-awareness_case-marcus_06": {
      "text": "Jeg stoler ikke på terapeuter.",
      "suggestion": "[Internt] Legg merke til stikket; ønsk skepsis velkommen. [Meta] Jeg er glad du sier det – vi kan bygge tillit sakte, og du setter tempoet."
    },
    "dp_therapist-self-awareness_case-marcus_07": {
      "text": "Jeg husker ikke så mye – alt er en tåke.",
      "suggestion": "[Internt] Sakte; ikke press detaljer. [Meta] Tåke er greit – kanskje vi legger merke til én sansning her og nå sammen."
    },
    "dp_therapist-self-awareness_case-marcus_08": {
      "text": "La oss holde oss til praktiske tips.",
      "suggestion": "[Internt] Ikke argumenter; allier og bygg bro. [Meta] Vi kan holde det praktisk. Jeg vil bare være med deg i det helt presise øyeblikket der det begynner å stramme seg til."
    },
    "dp_therapist-self-awareness_case-marcus_09": {
      "text": "Jeg ser ikke poenget.",
      "suggestion": "[Internt] Kjenn føttene; vær stødig. [Meta] Vi kan sjekke hvordan en liten seier ville se ut, og sikte bare dit i dag."
    },
    "dp_therapist-self-awareness_case-marcus_10": {
      "text": "Jeg klarer meg alene.",
      "suggestion": "[Internt] Respekter uavhengighet; hold deg nær. [Meta] Du har båret mye – om det hjelper, kan vi bære litt av det sammen her i noen minutter."
    },
    "dp_empathic-understanding_case-sara_01": {
      "text": "Om kvelden føles leiligheten enorm, og jeg kjenner meg så alene.",
      "suggestion": "Kveldene bringer en tung ensomhet som fyller hele rommet."
    },
    "dp_empathic-understanding_case-sara_02": {
      "text": "Jeg sier hele tiden til venner at det går bra, men jeg er utslitt av å late som.",
      "suggestion": "Å holde masken er slitsomt, og under det kjenner du deg utslitt og trist."
    },
    "dp_empathic-understanding_case-sara_03": {
      "text": "Når jeg ser navnet hans et sted, synker magen.",
      "suggestion": "Å se navnet hans får magen til å falle, og tapet skyller inn igjen."
    },
    "dp_empathic-understanding_case-sara_04": {
      "text": "Jeg hater at jeg fortsatt sjekker telefonen i håp om at det er ham.",
      "suggestion": "Det er fortsatt et sårt håp som strekker seg, selv om det gjør vondt."
    },
    "dp_empathic-understanding_case-sara_05": {
      "text": "Å våkne er det verste — sjokket etter de første sekundene, før jeg husker.",
      "suggestion": "Morgenen treffer hardt når minnene braser inn etter et kort øyeblikk av letthet."
    },
    "dp_empathic-understanding_case-sara_06": {
      "text": "Jeg er flau over at jeg ikke er over det ennå.",
      "suggestion": "Flauheten ligger oppå en sorg som ikke er ferdigsørget."
    },
    "dp_empathic-understanding_case-sara_07": {
      "text": "Jeg holder meg opptatt så jeg slipper å tenke, og så krasjer jeg om kvelden.",
      "suggestion": "Opptattheten bedøver på dagtid, og om kvelden flommer tristheten tilbake."
    },
    "dp_empathic-understanding_case-sara_08": {
      "text": "Jeg vil ikke belaste noen med dette.",
      "suggestion": "Du er redd for å belaste andre, samtidig som du bærer mye alene."
    },
    "dp_empathic-understanding_case-sara_09": {
      "text": "Når jeg ser par, føler jeg meg uønsket.",
      "suggestion": "Par vekker følelsen av å ikke være ønsket, og det stikker i hjertet."
    },
    "dp_empathic-understanding_case-sara_10": {
      "text": "En del av meg lurer på om jeg rett og slett ikke er elskbar.",
      "suggestion": "En smertefull tvil dukker opp og får deg til å tvile på din egen verdi."
    },
    "dp_empathic-understanding_case-michael_01": {
      "text": "Når noen påpeker en feil, føler jeg meg ydmyket og smeller.",
      "suggestion": "En korrigering treffer som ydmykelse, og sinnet kommer fort."
    },
    "dp_empathic-understanding_case-michael_02": {
      "text": "Jeg tåler ikke å bli bedt om å roe meg.",
      "suggestion": "«Ro deg ned» kjennes avfeiende og tenner sinnet i deg."
    },
    "dp_empathic-understanding_case-michael_03": {
      "text": "Etter at jeg roper, blir jeg kvalm av skam.",
      "suggestion": "Etter utbruddet setter skammen seg, og du blir kvalm av det."
    },
    "dp_empathic-understanding_case-michael_04": {
      "text": "Jeg ser etter respektløshet overalt.",
      "suggestion": "Du står på vakt for tegn til respektløshet, klar til å forsvare deg."
    },
    "dp_empathic-understanding_case-michael_05": {
      "text": "Hvis jeg ikke kan svaret, føler jeg meg liten.",
      "suggestion": "Det å ikke vite gjør at du føler deg liten og blottstilt."
    },
    "dp_empathic-understanding_case-michael_06": {
      "text": "Jeg forbereder meg altfor mye så ingen kan ta meg på senga.",
      "suggestion": "Du forbereder deg hardt så du ikke blir tatt på senga eller eksponert."
    },
    "dp_empathic-understanding_case-michael_07": {
      "text": "Kona mi sitt tonefall kan tenne meg før jeg rekker å tenke.",
      "suggestion": "Et tonefall lander som en fornærmelse, og sinnet slår raskt inn."
    },
    "dp_empathic-understanding_case-michael_08": {
      "text": "Jeg hater å beklage; det får meg til å føle meg svak.",
      "suggestion": "Å beklage kjennes som å tape terreng og være svak."
    },
    "dp_empathic-understanding_case-michael_09": {
      "text": "Jeg sier til meg selv at jeg bare holder standarder.",
      "suggestion": "Du sier til deg selv at det handler om standarder, og likevel gjør det vondt å kjenne seg vurdert."
    },
    "dp_empathic-understanding_case-michael_10": {
      "text": "Jeg ligger våken og spiller om igjen det jeg sa.",
      "suggestion": "Nettene bringer reprise og en tung anger."
    },
    "dp_empathic-understanding_case-jason_01": {
      "text": "Når det er min tur, blir hodet blankt og halsen strammer seg.",
      "suggestion": "Å være i rampelyset gjør at hodet blir blankt og halsen strammer seg."
    },
    "dp_empathic-understanding_case-jason_02": {
      "text": "Jeg er redd folk synes jeg er klein.",
      "suggestion": "Du frykter å bli sett som klein og dømt."
    },
    "dp_empathic-understanding_case-jason_03": {
      "text": "Jeg vil bli med på ting, og så avlyser jeg.",
      "suggestion": "Du lengter etter å bli med, og angsten får deg til å trekke deg i siste liten."
    },
    "dp_empathic-understanding_case-jason_04": {
      "text": "Komplimenter fester seg ikke; jeg tror ikke på dem.",
      "suggestion": "Ros fester seg ikke, og selvtvilen kommer raskt tilbake."
    },
    "dp_empathic-understanding_case-jason_05": {
      "text": "Jeg øver på meldinger i evigheter og sender dem likevel ikke.",
      "suggestion": "Du finleser hvert ord, redd for å gjøre feil."
    },
    "dp_empathic-understanding_case-jason_06": {
      "text": "Jeg spiser lunsj ved pulten for å unngå pauserommet.",
      "suggestion": "Du holder deg for deg selv for å slippe blikk og vurdering."
    },
    "dp_empathic-understanding_case-jason_07": {
      "text": "Etter at jeg har snakket, krymper jeg meg i timevis.",
      "suggestion": "Etter at du har snakket, spiller du alt om igjen og krymper deg av skam, oversvømt av selvtvil."
    },
    "dp_empathic-understanding_case-jason_08": {
      "text": "Jeg føler meg usynlig i grupper.",
      "suggestion": "I grupper føler du deg usett og utenfor fellesskapet."
    },
    "dp_empathic-understanding_case-jason_09": {
      "text": "Hendene mine skjelver når jeg presenterer meg.",
      "suggestion": "Introduksjoner gir skjelvinger og en bølge av nervøsitet."
    },
    "dp_empathic-understanding_case-jason_10": {
      "text": "Søndagskveldene kjennes smertefullt ensomme.",
      "suggestion": "Søndagskveldene bringer en tung ensomhet og en frykt for å være alene."
    },
    "dp_empathic-understanding_case-laura_01": {
      "text": "De fleste dager føles flate, som om jeg er bak glass.",
      "suggestion": "Livet kjennes dempet, som om du er bak glass og ikke helt når fram."
    },
    "dp_empathic-understanding_case-laura_02": {
      "text": "Hevede stemmer får kroppen min til å fryse.",
      "suggestion": "Hevede stemmer får magen til å synke, og kroppen fryser til for å beskytte deg."
    },
    "dp_empathic-understanding_case-laura_03": {
      "text": "Når noen er snille, trekker jeg meg unna.",
      "suggestion": "Når vennlighet kommer nær, trekker noe i deg seg unna for å holde deg trygg."
    },
    "dp_empathic-understanding_case-laura_04": {
      "text": "Jeg drikker om kvelden for å roe hodet.",
      "suggestion": "Vinen hjelper deg å skru av når kroppen ikke finner ro."
    },
    "dp_empathic-understanding_case-laura_05": {
      "text": "Jeg vil ha nærhet, og så blir jeg nummen.",
      "suggestion": "Du vil ha nærhet, og nummenheten slår inn for å holde deg trygg."
    },
    "dp_empathic-understanding_case-laura_06": {
      "text": "Jeg får dårlig samvittighet for at jeg ikke føler så mye.",
      "suggestion": "Du får dårlig samvittighet for nummenheten, selv om den hjelper deg å holde ut."
    },
    "dp_empathic-understanding_case-laura_07": {
      "text": "Jeg våkner allerede anspent, som om jeg står på vakt.",
      "suggestion": "Kroppen din våkner allerede i beredskap, forberedt på at noe kan skje."
    },
    "dp_empathic-understanding_case-laura_08": {
      "text": "Jeg unngår filmer med krangling og slåssing.",
      "suggestion": "Konfliktscener river kroppen inn i gammel frykt, så du unngår dem."
    },
    "dp_empathic-understanding_case-laura_09": {
      "text": "Gode nyheter når ikke inn.",
      "suggestion": "Gode ting lander knapt, som om de ikke når gjennom tåken."
    },
    "dp_empathic-understanding_case-laura_10": {
      "text": "Jeg glemmer hva jeg i det hele tatt liker.",
      "suggestion": "Det er vanskelig å huske hva som gir glede når alt føles fjernt."
    },
    "dp_empathic-understanding_case-carlos_01": {
      "text": "Et skjevt blikk fyrer meg opp.",
      "suggestion": "Et skjevt blikk tenner varmen, og kroppen gjør seg klar til å forsvare seg."
    },
    "dp_empathic-understanding_case-carlos_02": {
      "text": "Jeg hater at ungen min så meg smelle igjen døra.",
      "suggestion": "Å se ansiktet hans gjør vondt – og viser hvor mye dette betyr for deg."
    },
    "dp_empathic-understanding_case-carlos_03": {
      "text": "Hvis jeg gir meg, føler jeg meg som ingenting.",
      "suggestion": "Å gi seg kjennes som å være liten og bli tråkket på."
    },
    "dp_empathic-understanding_case-carlos_04": {
      "text": "Jeg trasker rundt og biter tenna sammen når jeg er sint.",
      "suggestion": "Sinnet strammer kjeven og driver deg til å gå det av deg."
    },
    "dp_empathic-understanding_case-carlos_05": {
      "text": "Etter at jeg eksploderer, skammer jeg meg.",
      "suggestion": "Etter smellet kommer skammen og tynger deg."
    },
    "dp_empathic-understanding_case-carlos_06": {
      "text": "Jeg stoler ikke på ro; det føles utrygt.",
      "suggestion": "Ro kjennes utrygt, som om det å senke garden inviterer fare."
    },
    "dp_empathic-understanding_case-carlos_07": {
      "text": "Fars stemme i hodet kaller meg svak.",
      "suggestion": "Det gamle budskapet om at du er svak svir fortsatt og driver deg hardt."
    },
    "dp_empathic-understanding_case-carlos_08": {
      "text": "Jeg vil ha respekt mer enn noe annet.",
      "suggestion": "Respekt kjennes helt avgjørende for deg, og utfordringer lander som trusler."
    },
    "dp_empathic-understanding_case-carlos_09": {
      "text": "Jeg slår i vegger i stedet for folk.",
      "suggestion": "Når heten skyter opp, går den inn i veggen i stedet for en person, og det skremmer deg også."
    },
    "dp_empathic-understanding_case-carlos_10": {
      "text": "Jeg vil at familien min skal føle seg trygg med meg.",
      "suggestion": "Du bryr deg dypt, og det som betyr mest er at familien din kan føle seg trygg sammen med deg."
    },
    "dp_empathic-understanding_case-nina_01": {
      "text": "Å be om hjelp gir meg dårlig samvittighet.",
      "suggestion": "Idet du ber om hjelp, skyller den dårlige samvittigheten inn, og du trekker deg tilbake."
    },
    "dp_empathic-understanding_case-nina_02": {
      "text": "Jeg gjør alt og føler meg usynlig.",
      "suggestion": "Å bære så mye gjør at du føler deg usett og alene."
    },
    "dp_empathic-understanding_case-nina_03": {
      "text": "Å si nei gjør at det knyter seg i magen.",
      "suggestion": "Et enkelt nei knyter magen i en engstelig knute."
    },
    "dp_empathic-understanding_case-nina_04": {
      "text": "Jeg holder meg i gang så jeg slipper å kjenne på bitterhet.",
      "suggestion": "Å holde deg i aktivitet skyver bitterhet og tristhet unna."
    },
    "dp_empathic-understanding_case-nina_05": {
      "text": "Når jeg hviler, hører jeg en stemme kalle meg lat.",
      "suggestion": "Hvile vekker en hard stemme som får deg til å skamme deg."
    },
    "dp_empathic-understanding_case-nina_06": {
      "text": "Jeg unnskylder meg selv for selv små forespørsler.",
      "suggestion": "Selv små behov kommer med en unnskyldning – og en frykt for å belaste."
    },
    "dp_empathic-understanding_case-nina_07": {
      "text": "Noen ganger eksploderer jeg, og så føler jeg meg forferdelig.",
      "suggestion": "Etter utbruddet føler du deg forferdelig og skamfull."
    },
    "dp_empathic-understanding_case-nina_08": {
      "text": "Jeg drømmer om at noen tar vare på meg.",
      "suggestion": "Det finnes en stille lengsel etter å bli tatt vare på slik du tar vare på andre."
    },
    "dp_empathic-understanding_case-nina_09": {
      "text": "Jeg sammenligner meg med andre mødre og føler at jeg feiler.",
      "suggestion": "Sammenligning får deg til å føle at du ikke er god nok, og skammen kommer."
    },
    "dp_empathic-understanding_case-nina_10": {
      "text": "Jeg får hodepine når jeg blir overveldet.",
      "suggestion": "Stresset bygger seg opp i kroppen som dunkende smerte."
    },
    "dp_empathic-understanding_case-aisha_01": {
      "text": "Hvis du ser bort, får jeg panikk.",
      "suggestion": "Et blikk bort kjennes som å bli forlatt, og panikken skyter i været."
    },
    "dp_empathic-understanding_case-aisha_02": {
      "text": "Når en melding ikke kommer, får jeg ikke puste.",
      "suggestion": "Stillheten tar pusten fra deg og kjennes som et fall."
    },
    "dp_empathic-understanding_case-aisha_03": {
      "text": "Jeg sier «ikke forlat meg», og så roper jeg.",
      "suggestion": "Du trygler, og så kommer sinnet når frykten skyter i været."
    },
    "dp_empathic-understanding_case-aisha_04": {
      "text": "Tomheten kjennes som et hull i brystet.",
      "suggestion": "Det er en dyp, verkende tomhet som gjør så vondt."
    },
    "dp_empathic-understanding_case-aisha_05": {
      "text": "Jeg klorer meg i huden for å kjenne noe.",
      "suggestion": "Du søker etter sansning når nummenheten og smerten blir uutholdelig."
    },
    "dp_empathic-understanding_case-aisha_06": {
      "text": "Hvis noen avlyser, vil jeg gi opp.",
      "suggestion": "En avlysning svir som å bli droppet, og du får lyst til å trekke deg unna."
    },
    "dp_empathic-understanding_case-aisha_07": {
      "text": "Jeg hater meg selv etter at jeg eksploderer.",
      "suggestion": "Etter eksplosjonen hamrer skammen, og du vender den innover mot deg selv."
    },
    "dp_empathic-understanding_case-aisha_08": {
      "text": "Jeg tester folk for å se om de bryr seg.",
      "suggestion": "Å teste folk er måten du sjekker om du betyr noe og om de blir."
    },
    "dp_empathic-understanding_case-aisha_09": {
      "text": "Avskjeder gjør meg svimmel.",
      "suggestion": "Avskjeder får verden til å tippe av frykt og sorg."
    },
    "dp_empathic-understanding_case-aisha_10": {
      "text": "Jeg vet ikke hvem jeg er uten noen.",
      "suggestion": "Uten noen nær føler du deg tom og usikker på deg selv."
    },
    "dp_empathic-understanding_case-david_01": {
      "text": "Å bli kalt kald får meg til å stritte imot med en gang.",
      "suggestion": "Det ordet svir, og du hardner raskt til."
    },
    "dp_empathic-understanding_case-david_02": {
      "text": "Hvis jeg ikke er på topp, føler jeg meg verdiløs.",
      "suggestion": "Å ikke være på topp kjennes som om du er ingenting."
    },
    "dp_empathic-understanding_case-david_03": {
      "text": "Jeg ramser opp prestasjoner når jeg føler meg angrepet.",
      "suggestion": "Du griper til prestasjoner som rustning når du føler deg dømt."
    },
    "dp_empathic-understanding_case-david_04": {
      "text": "Ros føles godt, og så renner det ut igjen.",
      "suggestion": "Beundring lander – og så renner det ut igjen, og du blir stående tom."
    },
    "dp_empathic-understanding_case-david_05": {
      "text": "Jeg hater å innrømme at jeg tar feil.",
      "suggestion": "Å innrømme at du tar feil kjennes utleverende og gjør deg liten."
    },
    "dp_empathic-understanding_case-david_06": {
      "text": "Barnas tårer gjør meg utålmodig.",
      "suggestion": "Tårene deres er vanskelige å sitte med, og du blir litt rådvill."
    },
    "dp_empathic-understanding_case-david_07": {
      "text": "Etter affæren føles det kaldt hjemme.",
      "suggestion": "Siden affæren føles hjemmet ribbet for varme, og du lever i den kulden."
    },
    "dp_empathic-understanding_case-david_08": {
      "text": "Fars standarder styrer meg fortsatt.",
      "suggestion": "De høye standardene driver deg fortsatt, og det svir når du ikke strekker til."
    },
    "dp_empathic-understanding_case-david_09": {
      "text": "Noen ganger tenker jeg at terapi er bortkastet.",
      "suggestion": "Noen dager kjennes terapi rett og slett meningsløs, og du høres ganske lite overbevist ut om at den faktisk kan hjelpe."
    },
    "dp_empathic-understanding_case-david_10": {
      "text": "Jeg er redd for å være ordinær.",
      "suggestion": "Å være ordinær kjennes som å være usett og uverdig."
    },
    "dp_empathic-understanding_case-marcus_01": {
      "text": "De fleste dager føler jeg ingenting.",
      "suggestion": "Nummenhet ligger over deg som et lag som holder følelsene ute."
    },
    "dp_empathic-understanding_case-marcus_02": {
      "text": "Så, helt ut av det blå, treffer en bølge meg.",
      "suggestion": "Følelser kan treffe plutselig og overvelde deg."
    },
    "dp_empathic-understanding_case-marcus_03": {
      "text": "Mareritt gjør meg oppskrudd og tom.",
      "suggestion": "Mareritt rykker deg våken – oppskrudd og tom på samme tid."
    },
    "dp_empathic-understanding_case-marcus_04": {
      "text": "Jeg unngår folk fordi det føles tryggere.",
      "suggestion": "Avstand føles tryggere enn risikoen for å bli såret igjen."
    },
    "dp_empathic-understanding_case-marcus_05": {
      "text": "Jeg sitter i mørket etter jobb.",
      "suggestion": "Å sitte i mørket passer med hvor tom og avstengt du føler deg."
    },
    "dp_empathic-understanding_case-marcus_06": {
      "text": "Gode øyeblikk føles uvirkelige.",
      "suggestion": "Det gode føles langt borte, som om du ikke kan ta på det."
    },
    "dp_empathic-understanding_case-marcus_07": {
      "text": "Høye lyder får meg til å skvette.",
      "suggestion": "Plutselige lyder setter kroppen i høy beredskap."
    },
    "dp_empathic-understanding_case-marcus_08": {
      "text": "Jeg tar ikke telefonen når familien ringer.",
      "suggestion": "Du holder avstand for å slippe å bli dratt inn i følelsene."
    },
    "dp_empathic-understanding_case-marcus_09": {
      "text": "Noen ganger tenker jeg at det ikke ville bety noe om jeg forsvant.",
      "suggestion": "Det høres ut som håpløsheten kan bli så dyp at det å forsvinne begynner å kjennes som om det ikke ville bety noe."
    },
    "dp_empathic-understanding_case-marcus_10": {
      "text": "Jeg vil ha kontakt og tåler den ikke.",
      "suggestion": "Du vil ha nærhet, og systemet ditt slår seg av når den kommer for nær."
    },
    "dp_empathic-affirmation-validation_case-sara_01": {
      "text": "Jeg sjekker kontoene hans på sosiale medier selv om det knuser meg.",
      "suggestion": "Selvsagt fortsetter du å sjekke; etter et sånt tap vil hvem som helst strekke seg etter kontakt, selv om det gjør vondt."
    },
    "dp_empathic-affirmation-validation_case-sara_02": {
      "text": "Jeg sier stadig «det går bra», selv når øynene er fulle av tårer.",
      "suggestion": "Det gir mening at du prøver å holde deg sammen; du har båret så mye alene."
    },
    "dp_empathic-affirmation-validation_case-sara_03": {
      "text": "Hvis jeg hadde vært morsommere eller enklere, hadde han kanskje blitt.",
      "suggestion": "Ikke rart du leter etter hva du kunne gjort; selvbebreidelse prøver å gi smerten mening."
    },
    "dp_empathic-affirmation-validation_case-sara_04": {
      "text": "Nettene er verst – når det blir stille føler jeg meg uønsket.",
      "suggestion": "Stillheten kan forsterke smerten; det gir mening at det kjennes som å ikke være ønsket."
    },
    "dp_empathic-affirmation-validation_case-sara_05": {
      "text": "Jeg begynte å skrive til ham og slettet det et titalls ganger.",
      "suggestion": "Det gir mening at en del av deg vil ha kontakt, og en annen del beskytter deg mot mer smerte."
    },
    "dp_empathic-affirmation-validation_case-sara_06": {
      "text": "Når jeg våkner, glemmer jeg det et sekund og så smeller det.",
      "suggestion": "Hvem som helst ville kjent det krasjet når man våkner; det gir mening at det treffer så hardt."
    },
    "dp_empathic-affirmation-validation_case-sara_07": {
      "text": "Jeg beklager at sorgen min tar plass.",
      "suggestion": "Selvsagt bekymrer du deg for å ta plass; sorgen din hører hjemme her og gir mening."
    },
    "dp_empathic-affirmation-validation_case-sara_08": {
      "text": "Mat smaker ingenting og magen synker ofte.",
      "suggestion": "Det gir mening at kroppen din reagerer slik; den forteller deg hvor viktig dette er for deg."
    },
    "dp_empathic-affirmation-validation_case-sara_09": {
      "text": "Venner inviterer meg ut, og jeg finner unnskyldninger fordi jeg ikke vil gråte offentlig.",
      "suggestion": "Det gir mening at du beskytter deg mot mer smerte selv om du ønsker kontakt."
    },
    "dp_empathic-affirmation-validation_case-sara_10": {
      "text": "En del av meg tenker at kjærlighet ikke er for meg.",
      "suggestion": "Med det du har vært gjennom, gir det mening at den tanken dukker opp; jeg hører hvor ensomt det kjennes."
    },
    "dp_empathic-affirmation-validation_case-michael_01": {
      "text": "Når trafikken er dårlig og noen skjærer meg av, blir ansiktet varmt og jeg eksploderer.",
      "suggestion": "Det gir mening at kroppen din skyter til forsvar når du føler deg respektløst behandlet eller presset inn i et hjørne."
    },
    "dp_empathic-affirmation-validation_case-michael_02": {
      "text": "Hvis jeg ikke har svaret, føler jeg meg avslørt og bløffer.",
      "suggestion": "Slik du har blitt vurdert og målt, er det klart at det å ikke vite kan kjennes som å bli avslørt."
    },
    "dp_empathic-affirmation-validation_case-michael_03": {
      "text": "Å beklage får meg til å føle meg liten, som om jeg gir fra meg terreng.",
      "suggestion": "Det gir mening at en unnskyldning kan kjennes som å miste status når det å stå rak har betydd trygghet."
    },
    "dp_empathic-affirmation-validation_case-michael_04": {
      "text": "Hjemme kan et sukk eller en himling med øynene sette meg av før jeg rekker å tenke.",
      "suggestion": "Ikke rart de små signalene svir; de kan lande som respektløshet og tenne gammel smerte."
    },
    "dp_empathic-affirmation-validation_case-michael_05": {
      "text": "Jeg fører regnskap i hodet så ingen har noe over meg.",
      "suggestion": "Det gir mening at du holder oversikt over alt for å beskytte deg mot følelsen av å være i en underlegen posisjon."
    },
    "dp_empathic-affirmation-validation_case-michael_06": {
      "text": "Når barnet mitt spør hvorfor jeg er sint, skammer jeg meg og føler meg fastlåst.",
      "suggestion": "Selvsagt treffer skammen der; det viser hvor mye du bryr deg om å være den faren du vil være."
    },
    "dp_empathic-affirmation-validation_case-michael_07": {
      "text": "Jeg smeller med dørene fordi det føles bedre enn å føle meg liten.",
      "suggestion": "Det gir mening at sinnet trer inn for å dekke over den lille, stukne følelsen."
    },
    "dp_empathic-affirmation-validation_case-michael_08": {
      "text": "Hvis noen utfordrer meg offentlig, dobler jeg innsatsen selv om jeg tar feil.",
      "suggestion": "Når det kjennes truende å være underlegen, gir det mening at du graver deg ned for å beskytte deg."
    },
    "dp_empathic-affirmation-validation_case-michael_09": {
      "text": "Jeg misliker at jeg trenger terapi; det føles som svakhet.",
      "suggestion": "Selvsagt kjennes det risikabelt; at du kommer hit viser også hvor mye du vil at ting skal bli annerledes."
    },
    "dp_empathic-affirmation-validation_case-michael_10": {
      "text": "Etter utbruddene ligger jeg våken og hater meg selv.",
      "suggestion": "Hvem som helst ville følt seg elendig etter sånne øyeblikk; det gir mening at skammen holder deg våken."
    },
    "dp_empathic-affirmation-validation_case-jason_01": {
      "text": "Hjertet hamrer bare jeg hører navnet mitt i et møte.",
      "suggestion": "Selvsagt hamrer hjertet når det å bli sett kjennes risikabelt."
    },
    "dp_empathic-affirmation-validation_case-jason_02": {
      "text": "Jeg holder blikket nede så folk ikke legger merke til meg.",
      "suggestion": "Det gir mening at du prøver å være usynlig når oppmerksomhet føles farlig."
    },
    "dp_empathic-affirmation-validation_case-jason_03": {
      "text": "Jeg later som jeg tekster for å slippe småprat.",
      "suggestion": "Selvsagt søker du dekning når du føler deg blottstilt; det ville hvem som helst gjort."
    },
    "dp_empathic-affirmation-validation_case-jason_04": {
      "text": "Jeg er redd jeg er kjedelig, og at folk bare er høflige.",
      "suggestion": "Det gir mening at den harde indre stemmen får deg til å tvile på deg selv blant andre."
    },
    "dp_empathic-affirmation-validation_case-jason_05": {
      "text": "Komplimenter preller av; jeg tror ikke på dem.",
      "suggestion": "Når selvkritikken er så høy, gir det mening at ros er vanskelig å ta inn."
    },
    "dp_empathic-affirmation-validation_case-jason_06": {
      "text": "Etter at jeg har snakket, spiller jeg av hver setning og krymper meg.",
      "suggestion": "Det gir mening at du spiller alt om igjen når det å høre til betyr så mye."
    },
    "dp_empathic-affirmation-validation_case-jason_07": {
      "text": "Trange rom gjør brystet stramt, og jeg leter etter døra.",
      "suggestion": "Selvsagt skanner kroppen etter utganger når sosiale rom kjennes truende."
    },
    "dp_empathic-affirmation-validation_case-jason_08": {
      "text": "Jeg sammenligner meg med alle og kommer alltid til kort.",
      "suggestion": "Det gir mening at sammenligning tar fra deg følelsen av verdi når skammen er nær."
    },
    "dp_empathic-affirmation-validation_case-jason_09": {
      "text": "Stemmen skjelver når jeg presenterer meg.",
      "suggestion": "En skjelvende stemme gir mening når kroppen spenner seg for å bli vurdert."
    },
    "dp_empathic-affirmation-validation_case-jason_10": {
      "text": "Noen netter er jeg sikker på at jeg alltid kommer til å være alene.",
      "suggestion": "Det gir mening at nettene bringer den tunge ensomheten; jeg hører hvor vondt det er."
    },
    "dp_empathic-affirmation-validation_case-laura_01": {
      "text": "De fleste dager føles flate, som om jeg er bak glass og ser livet skje.",
      "suggestion": "Det gir mening at alt kjennes dempet etter det du har vært gjennom."
    },
    "dp_empathic-affirmation-validation_case-laura_02": {
      "text": "Hvis stemmer heves, synker magen og jeg forsvinner et annet sted i hodet.",
      "suggestion": "Selvsagt kobler kroppen ut når stemmer heves; den lærte det for å holde deg trygg."
    },
    "dp_empathic-affirmation-validation_case-laura_03": {
      "text": "Når noen er snille mot meg, blir jeg nummen eller mistenksom.",
      "suggestion": "Vennlighet kan kjennes forvirrende når trygghet har vært usikker; det gir mening."
    },
    "dp_empathic-affirmation-validation_case-laura_04": {
      "text": "Jeg tar lange dusjer bare for å kjenne noe varmt.",
      "suggestion": "Det gir mening at du søker små, trygge sansninger når følelsene er langt unna."
    },
    "dp_empathic-affirmation-validation_case-laura_05": {
      "text": "Fine dager føles likevel grå for meg.",
      "suggestion": "Selvsagt kjennes glede dempet når systemet ditt har båret så mye."
    },
    "dp_empathic-affirmation-validation_case-laura_06": {
      "text": "Å bli tatt på, selv vennlig ment, skremmer meg.",
      "suggestion": "Det gir mening at kroppen skvetter; den lærte å beskytte deg."
    },
    "dp_empathic-affirmation-validation_case-laura_07": {
      "text": "Når tristheten bryter gjennom, blir jeg redd og lukker den ned.",
      "suggestion": "Selvsagt er følelsene skumle; å stenge dem ned har vært en måte å klare seg på."
    },
    "dp_empathic-affirmation-validation_case-laura_08": {
      "text": "Jeg beklager at jeg trenger trøst.",
      "suggestion": "Det gir mening at det føles vanskelig å trenge trøst; behovene dine betyr noe her."
    },
    "dp_empathic-affirmation-validation_case-laura_09": {
      "text": "Jeg glemmer hva jeg i det hele tatt liker å gjøre.",
      "suggestion": "Etter så mye spenning gir det mening at interessene dine føles langt unna nå."
    },
    "dp_empathic-affirmation-validation_case-laura_10": {
      "text": "Kroppen min slapper aldri helt av, selv i senga.",
      "suggestion": "Selvsagt holder kroppen seg på vakt; den lærte å overleve sånn."
    },
    "dp_empathic-affirmation-validation_case-carlos_01": {
      "text": "Et skjevt blikk, og kjeven låser seg før jeg vet ordet av det.",
      "suggestion": "Det gir mening at kroppen rigges raskt når du aner mangel på respekt."
    },
    "dp_empathic-affirmation-validation_case-carlos_02": {
      "text": "Hvis jeg ikke kommer inn sterk, tråkker folk over meg.",
      "suggestion": "Med bakgrunnen din er det klart at det å stå støtt har føltes som trygghet."
    },
    "dp_empathic-affirmation-validation_case-carlos_03": {
      "text": "På kampen til barnet mitt ropte jeg til dommeren og følte meg dårlig etterpå.",
      "suggestion": "Hvem som helst ville hatt vondt av det; det gir mening at det betyr så mye for deg."
    },
    "dp_empathic-affirmation-validation_case-carlos_04": {
      "text": "Når jeg blir utfordret, føler jeg meg liten og blåser meg fort opp.",
      "suggestion": "Det gir mening at en utfordring gjør deg liten inni, og at sinnet trer inn for å beskytte."
    },
    "dp_empathic-affirmation-validation_case-carlos_05": {
      "text": "Jeg knytter nevene og går frem og tilbake; det føles som en kamp er på vei.",
      "suggestion": "Selvsagt gjør kroppen seg klar til kamp; den lærte at det var måten å holde deg trygg."
    },
    "dp_empathic-affirmation-validation_case-carlos_06": {
      "text": "Jeg ødelegger ting og angrer etterpå.",
      "suggestion": "Det gir mening at varmen tar over raskt, og at angeren kommer når du kjølner."
    },
    "dp_empathic-affirmation-validation_case-carlos_07": {
      "text": "Kollegaer holder avstand og jeg skammer meg.",
      "suggestion": "Selvsagt svir det; det gir mening at du både blir på vakt og kjenner på skam."
    },
    "dp_empathic-affirmation-validation_case-carlos_08": {
      "text": "Jeg går ut av rommet for å ikke eksplodere, og så føler jeg meg svak for å ha gått.",
      "suggestion": "Det gir mening at det å gå føles svakt når styrke har betydd å stå på ditt."
    },
    "dp_empathic-affirmation-validation_case-carlos_09": {
      "text": "Jeg stoler ikke på ro – som om det betyr at jeg blir tråkket på.",
      "suggestion": "Med din historie gir det mening at ro kan kjennes farlig i stedet for trygg."
    },
    "dp_empathic-affirmation-validation_case-carlos_10": {
      "text": "Mer enn noe annet vil jeg at familien min skal føle seg trygg med meg.",
      "suggestion": "Ønsket om at de skal være trygge gir mening, og viser hvor mye du bryr deg."
    },
    "dp_empathic-affirmation-validation_case-nina_01": {
      "text": "Hvis jeg hviler, kjennes det som om jeg gjør noe galt.",
      "suggestion": "Det gir mening at hvile kjennes feil når du har lært å fortjene plassen din ved å gjøre."
    },
    "dp_empathic-affirmation-validation_case-nina_02": {
      "text": "Å si nei gjør meg engstelig hele dagen.",
      "suggestion": "Selvsagt vekker et «nei» uro, gitt de gamle reglene."
    },
    "dp_empathic-affirmation-validation_case-nina_03": {
      "text": "Jeg gjør alt og føler meg likevel usynlig.",
      "suggestion": "Hvem som helst som bærer så mye ville følt seg oversett; det gir mening at du lengter etter å bli lagt merke til."
    },
    "dp_empathic-affirmation-validation_case-nina_04": {
      "text": "Når jeg blir sint, føler jeg straks skyld.",
      "suggestion": "Det gir mening at skyld følger sinnet når du lærte at dine behov var mindre viktige."
    },
    "dp_empathic-affirmation-validation_case-nina_05": {
      "text": "Å be om hjelp får meg til å føle meg som en byrde.",
      "suggestion": "Det gir mening at det å be om hjelp kjennes tyngende når du i årevis har vært den som hjelper alle andre."
    },
    "dp_empathic-affirmation-validation_case-nina_06": {
      "text": "Hvis huset er rotete, føler jeg meg som et dårlig menneske.",
      "suggestion": "Selvsagt kobles rot til skam når verdien din ble knyttet til prestasjon."
    },
    "dp_empathic-affirmation-validation_case-nina_07": {
      "text": "Jeg sier til meg selv at andre har det verre, så jeg burde ikke føle dette.",
      "suggestion": "Det gir mening at du nedtoner smerten; du har måttet gjøre det lenge."
    },
    "dp_empathic-affirmation-validation_case-nina_08": {
      "text": "Når jeg er syk, presser jeg meg likevel gjennom og krasjer etterpå.",
      "suggestion": "Selvsagt presser du på; kroppen viser hvor mye dette har kostet."
    },
    "dp_empathic-affirmation-validation_case-nina_09": {
      "text": "Jeg får panikk når noen virker skuffet over meg.",
      "suggestion": "Det gir mening at skuffelse kjennes skremmende når kjærlighet har føltes betinget."
    },
    "dp_empathic-affirmation-validation_case-nina_10": {
      "text": "En del av meg tror jeg er elskbar bare når jeg er nyttig.",
      "suggestion": "Med historien din gir det mening at kjærlighet har føltes knyttet til det du gjør, mer enn hvem du er."
    },
    "dp_empathic-affirmation-validation_case-aisha_01": {
      "text": "Jeg fulgte med på døra mesteparten av timen for å være sikker på at du ikke drar.",
      "suggestion": "Selvsagt holder du øye med døra etter så mange farvel; jeg hører hvor viktig trygghet er."
    },
    "dp_empathic-affirmation-validation_case-aisha_02": {
      "text": "Jeg rev i stykker bilder etter bruddet og følte meg både sterk og tom.",
      "suggestion": "Det gir mening at du grep etter hva som helst for å få lettelse; tomheten etterpå er forståelig."
    },
    "dp_empathic-affirmation-validation_case-aisha_03": {
      "text": "Noen ganger vil jeg krype ut av huden min.",
      "suggestion": "Den trangen gir mening når smerte og panikk kjennes uutholdelig; jeg er glad du sier det her."
    },
    "dp_empathic-affirmation-validation_case-aisha_04": {
      "text": "Når du noterer, tenker jeg at du hater meg og vil løpe.",
      "suggestion": "Med hvor ofte du har blitt misforstått, gir det mening at du tolker det som fare og vil ut fort."
    },
    "dp_empathic-affirmation-validation_case-aisha_05": {
      "text": "Jeg kan sende noen tjue meldinger, og så blokkerer jeg dem etterpå.",
      "suggestion": "Det gir mening at du strekker deg hardt etter nærhet og så beskytter deg når frykten skyter i været."
    },
    "dp_empathic-affirmation-validation_case-aisha_06": {
      "text": "Jeg føler meg skitten på grunn av det som ble gjort mot meg.",
      "suggestion": "Å kjenne seg skitten gir hjerteskjærende mening etter det du har vært gjennom; jeg er oppriktig lei meg for at det skjedde med deg."
    },
    "dp_empathic-affirmation-validation_case-aisha_07": {
      "text": "Gode ord får meg til å hulke og også ville løpe.",
      "suggestion": "Selvsagt lander det stort å bli sett – både lindrende og skremmende på samme tid."
    },
    "dp_empathic-affirmation-validation_case-aisha_08": {
      "text": "Når du ser bort, tenker jeg at jeg er kjedelig og blir rasende.",
      "suggestion": "Det gir mening at et blikk bort kjennes som avvisning og tenner sinne for å beskytte deg."
    },
    "dp_empathic-affirmation-validation_case-aisha_09": {
      "text": "Jeg hører en stemme som sier at jeg er søppel og ikke elskbar.",
      "suggestion": "Med alt sviket du har opplevd, gir det mening at den grusomme stemmen dukker opp og kjennes sann."
    },
    "dp_empathic-affirmation-validation_case-aisha_10": {
      "text": "Jeg stirrer på klokka for å være sikker på at du ikke avslutter tidlig.",
      "suggestion": "Selvsagt ser du på tiden; avslutninger har vært vonde, så det gir mening at du forbereder deg."
    },
    "dp_empathic-affirmation-validation_case-david_01": {
      "text": "Når kona mi tar opp følelser, føler jeg meg trengt opp i et hjørne og vil heller argumentere med fakta.",
      "suggestion": "Det gir mening at du føler deg eksponert der; fakta kan kjennes tryggere når følelser svir som kritikk."
    },
    "dp_empathic-affirmation-validation_case-david_02": {
      "text": "Jeg vil ha anerkjennelse for alt jeg gjør; når jeg ikke får det, kjenner jeg raseri.",
      "suggestion": "Selvsagt treffer det hardt når innsatsen din blir usett; det gir mening at sinne skyter opp der når så mye av verdien din har vært knyttet til det du gjør."
    },
    "dp_empathic-affirmation-validation_case-david_03": {
      "text": "Jeg sammenligner meg med andre fedre og føler meg som en bløff.",
      "suggestion": "Det gir mening at sammenligning vekker skam når verdi har vært knyttet til prestasjon."
    },
    "dp_empathic-affirmation-validation_case-david_04": {
      "text": "Å be om unnskyldning kjennes ydmykende for meg.",
      "suggestion": "Det gir mening at det å beklage kjennes lite når du lærte at sårbarhet kostet deg."
    },
    "dp_empathic-affirmation-validation_case-david_05": {
      "text": "Jeg planlegger perfekte ferier så vi ser bra ut utenfra.",
      "suggestion": "Selvsagt strever du etter å se samlet ut; det gir mening at image har føltes som beskyttelse."
    },
    "dp_empathic-affirmation-validation_case-david_06": {
      "text": "Jeg gruer meg for å være ordinær; det kjennes som å mislykkes.",
      "suggestion": "Det gir mening at «ordinær» kjennes truende når det å være ekstraordinær har blitt likestilt med verdi."
    },
    "dp_empathic-affirmation-validation_case-david_07": {
      "text": "Jeg sier at det går bra mens jeg føler meg tom.",
      "suggestion": "Selvsagt dekker du over tomheten; det gir mening å skjule det som kjennes sårbart."
    },
    "dp_empathic-affirmation-validation_case-david_08": {
      "text": "Jeg skryter for å få respekt og føler meg hul etterpå.",
      "suggestion": "Det gir mening at du strekker deg etter beundring når respekten kjennes utrygg, og det gir mening at hulheten gjør vondt etterpå også."
    },
    "dp_empathic-affirmation-validation_case-david_09": {
      "text": "Jeg føler meg som en skuffelse for faren min, selv nå.",
      "suggestion": "Selvsagt svir det gamle såret fortsatt; hvem som helst ville hatt vondt der."
    },
    "dp_empathic-affirmation-validation_case-david_10": {
      "text": "Når teamet mitt overgår meg, føler jeg meg truet i stedet for stolt.",
      "suggestion": "Det gir mening at andres suksess pirker i frykten for å være mindre enn."
    },
    "dp_empathic-affirmation-validation_case-marcus_01": {
      "text": "De fleste dager føler jeg meg som et spøkelse som går gjennom rutiner.",
      "suggestion": "Det gir mening at du føler deg frakoblet etter så mye traume; nummenhet har hjulpet deg å overleve."
    },
    "dp_empathic-affirmation-validation_case-marcus_02": {
      "text": "Jeg lar TV-en stå på for å overdøve tankene.",
      "suggestion": "Selvsagt leter du etter måter å dempe det som kjennes overveldende inni."
    },
    "dp_empathic-affirmation-validation_case-marcus_03": {
      "text": "Jeg sitter i bilen før jeg går inn fordi jeg ikke orker stillheten.",
      "suggestion": "Det gir mening at stillheten er vanskelig; den kan bringe tyngden tilbake i ett øyeblikk."
    },
    "dp_empathic-affirmation-validation_case-marcus_04": {
      "text": "Høye smell får meg til å skvette, og så blir jeg sint på meg selv for reaksjonen.",
      "suggestion": "Selvsagt skvetter kroppen; det gir mening å bli sint på deg selv etterpå når du skulle ønske det var annerledes."
    },
    "dp_empathic-affirmation-validation_case-marcus_05": {
      "text": "Høytider kjennes hule; jeg føler ingenting av det jeg «burde» føle.",
      "suggestion": "Det gir mening at høytider lander flatt når systemet ditt har vært så nedstengt for å holde deg trygg."
    },
    "dp_empathic-affirmation-validation_case-marcus_06": {
      "text": "Jeg unngår påminnelser om tjenesten fordi de åpner slusene.",
      "suggestion": "Å unngå påminnelser gir mening når bølgene kan kjennes for store å bære."
    },
    "dp_empathic-affirmation-validation_case-marcus_07": {
      "text": "Jeg holder leiligheten mørk og inviterer ikke folk.",
      "suggestion": "Selvsagt kan det føles tryggere nå å holde ting smått og mørkt."
    },
    "dp_empathic-affirmation-validation_case-marcus_08": {
      "text": "Jeg husker ikke sist jeg lo ordentlig.",
      "suggestion": "Det gir mening at gleden føles langt unna når du har båret så mye smerte."
    },
    "dp_empathic-affirmation-validation_case-marcus_09": {
      "text": "Jeg vil ikke trenge noen.",
      "suggestion": "Med det du har levd, gir det mening at det føles farlig å trenge andre."
    },
    "dp_empathic-affirmation-validation_case-marcus_10": {
      "text": "Noen ganger tenker jeg at jeg har det best alene for alltid.",
      "suggestion": "Det gir mening at det å være alene føles tryggere, selv om det er ensomt; jeg er glad du sier det her."
    },
    "dp_exploratory-questions_case-sara_01": {
      "text": "Når jeg ser navnet hans dukke opp hvor som helst, synker magen og jeg føler meg liten.",
      "suggestion": "Når du kjenner at det synker nå, hvor i kroppen merker du det sterkest, og hvordan kjennes det – stramt, tungt, hult?"
    },
    "dp_exploratory-questions_case-sara_02": {
      "text": "Jeg sier til venner at det går bra, mens halsen kjennes stram.",
      "suggestion": "Hvis vi blir litt ved den stramme halsen, hva vil den fortelle deg om det som er vanskelig å si?"
    },
    "dp_exploratory-questions_case-sara_03": {
      "text": "Kveldene føles endeløse, og jeg rydder og vasker for å holde meg opptatt.",
      "suggestion": "Når du ser for deg kvelden i dag, hvor i kroppen merker du trangen til å holde deg i gang, og hva skjer hvis vi blir med den i to rolige pust?"
    },
    "dp_exploratory-questions_case-sara_04": {
      "text": "Jeg var nær ved å sende en unnskyldning, selv om jeg ikke gjorde noe galt.",
      "suggestion": "Hvis vi blir litt ved delen som vil unnskylde seg, hva håper den på, og hvilken frykt prøver den å roe?"
    },
    "dp_exploratory-questions_case-sara_05": {
      "text": "Noen ganger sletter jeg bilder og leter så etter dem igjen.",
      "suggestion": "Det er et dra–og–skyv her; hvis vi sitter med begge sider, hva vil hver del mest for deg akkurat nå?"
    },
    "dp_exploratory-questions_case-sara_06": {
      "text": "Når noen er snille mot meg, ser jeg ned.",
      "suggestion": "Når blikket faller, hvilken følelse ligger under vennligheten – og hvor i kroppen merker du den?"
    },
    "dp_exploratory-questions_case-sara_07": {
      "text": "Jeg våkner, og så treffer det meg på nytt.",
      "suggestion": "I det øyeblikket det kommer tilbake, hvilket signal sier at det er her igjen, og hvor lander det først i kroppen?"
    },
    "dp_exploratory-questions_case-sara_08": {
      "text": "Jeg kjenner meg flau over at jeg fortsatt er så trist.",
      "suggestion": "Hvor i deg sitter flauheten, og under den – hvilken følelse vil ha oppmerksomhet akkurat nå?"
    },
    "dp_exploratory-questions_case-sara_09": {
      "text": "Når jeg ser par, verker det i brystet og jeg vil gå.",
      "suggestion": "Kan vi bli litt ved den verken i ett pust – hvordan er den, og hva ser den ut til å lengte etter?"
    },
    "dp_exploratory-questions_case-sara_10": {
      "text": "Jeg unngår steder vi pleide å dra.",
      "suggestion": "Når du ser for deg ett av stedene, hvilket kroppssignal sier «ikke trygt», og hva ville gjort den delen én prosent tryggere?"
    },
    "dp_exploratory-questions_case-michael_01": {
      "text": "Når noen retter på meg, skyter varmen opp i nakken.",
      "suggestion": "I øyeblikket før varmen, hvilket lite glimt merker du i brystet eller halsen?"
    },
    "dp_exploratory-questions_case-michael_02": {
      "text": "Et sukk fra kona får meg til å stritte imot.",
      "suggestion": "Når du hører det sukket nå, hva skjer i kroppen, og hva ser det ut til å ville beskytte?"
    },
    "dp_exploratory-questions_case-michael_03": {
      "text": "Etter at jeg eksploderer, får jeg en grop i magen.",
      "suggestion": "Hvis den gropen hadde en størrelse, form eller noen ord, hvordan ville den vært?"
    },
    "dp_exploratory-questions_case-michael_04": {
      "text": "Jeg skanner rom for respektløshet uten å mene det.",
      "suggestion": "Når du ser for deg skanningen, hvor spenner det seg først, og hva beskytter den delen deg mest mot?"
    },
    "dp_exploratory-questions_case-michael_05": {
      "text": "Å beklage får meg til å føle meg underlegen.",
      "suggestion": "Hvor i kroppen kjenner du den underlegne følelsen sterkest akkurat nå?"
    },
    "dp_exploratory-questions_case-michael_06": {
      "text": "Når jeg er usikker på et svar, strammer brystet seg.",
      "suggestion": "Hvordan kjennes den stramheten nå – hard, varm, trang – og hva håper den å forhindre?"
    },
    "dp_exploratory-questions_case-michael_07": {
      "text": "Jeg dobbeltkontrollerer alt for å unngå feil.",
      "suggestion": "Når du ser for deg dobbeltkontrollen, hvilken frykt ligger nær, og hvor merker du den først?"
    },
    "dp_exploratory-questions_case-michael_08": {
      "text": "Jeg smeller med dører i stedet for å si at jeg ble såret.",
      "suggestion": "I øyeblikket før smellet, hvilken smerte dukker opp, og hvordan kjennes den i kroppen?"
    },
    "dp_exploratory-questions_case-michael_09": {
      "text": "Når noen sier jeg må roe meg, eksploderer jeg.",
      "suggestion": "Når du hører de ordene inni deg nå, hvilket kroppssignal hopper først, og hvor lander det?"
    },
    "dp_exploratory-questions_case-michael_10": {
      "text": "Jeg hater å føle meg svak.",
      "suggestion": "Når du sier «svak» her, hvilket bilde eller hvilken sansing kommer, og hva ville hjulpet den delen å føle seg litt tryggere?"
    },
    "dp_exploratory-questions_case-jason_01": {
      "text": "Når det er min tur til å snakke, strammer halsen seg og hodet blir blankt.",
      "suggestion": "Hvis vi blir ved den stramme halsen i to langsomme pust, hva begynner å vise seg under blankheten, om så bare et hint?"
    },
    "dp_exploratory-questions_case-jason_02": {
      "text": "Stemmen skjelver når jeg presenterer meg.",
      "suggestion": "Legg merke til skjelvingen nå – hvor kjenner du den mest, og hva vil den at du skal gjøre?"
    },
    "dp_exploratory-questions_case-jason_03": {
      "text": "Jeg øver på meldinger og sletter dem igjen.",
      "suggestion": "I sekundet før du sletter, hvilken følelse er sterkest – frykt, skam – og hvor i kroppen er den?"
    },
    "dp_exploratory-questions_case-jason_04": {
      "text": "Hvis noen ler, antar jeg at det er av meg.",
      "suggestion": "Når du ser for deg den latteren, hva skjer i magen eller brystet akkurat nå?"
    },
    "dp_exploratory-questions_case-jason_05": {
      "text": "Jeg unngår øyekontakt så folk ikke legger merke til meg.",
      "suggestion": "Når blikket søker ned, hva sier kroppen om å bli sett – hva dukker opp først?"
    },
    "dp_exploratory-questions_case-jason_06": {
      "text": "Etter møter krymper jeg meg i timevis.",
      "suggestion": "Hvis vi velger ett sånt øyeblikk, hva er det verste bildet, og hvordan merker du det i kroppen?"
    },
    "dp_exploratory-questions_case-jason_07": {
      "text": "Trange rom får meg til å lete etter utganger.",
      "suggestion": "Akkurat nå, hva i kroppen sier «jeg må ut», og hvor kjenner du det?"
    },
    "dp_exploratory-questions_case-jason_08": {
      "text": "Komplimenter fester seg ikke hos meg.",
      "suggestion": "Når du prøver å la et vennlig ord lande, hvor spretter det av, og hva ser ut til å blokkere det?"
    },
    "dp_exploratory-questions_case-jason_09": {
      "text": "Jeg sier jeg er opptatt for å slippe småprat.",
      "suggestion": "Når du ser for deg småprat, hva er det skumleste, og hvor kjenner du det i kroppen?"
    },
    "dp_exploratory-questions_case-jason_10": {
      "text": "Søndagskveldene kjennes tunge og ensomme.",
      "suggestion": "Kan vi bli litt ved den tyngden i to pust – hva slags kvalitet har den, og hva ser den ut til å trenge mest?"
    },
    "dp_exploratory-questions_case-laura_01": {
      "text": "De fleste dager føles dempet, som om jeg er bak glass.",
      "suggestion": "Når du legger merke til den «bak glass»-følelsen nå, hvor kjenner du avstanden sterkest i kroppen?"
    },
    "dp_exploratory-questions_case-laura_02": {
      "text": "Hevede stemmer får magen til å synke og skuldrene til å stramme seg.",
      "suggestion": "Hvis vi blir litt ved den synkende følelsen i magen i ett pust, hvordan kjennes den, og hva advarer den deg om?"
    },
    "dp_exploratory-questions_case-laura_03": {
      "text": "Når noen er snille, trekker jeg meg unna.",
      "suggestion": "Når avstanden kommer, hvor går oppmerksomheten i kroppen, og hva vil den delen for deg?"
    },
    "dp_exploratory-questions_case-laura_04": {
      "text": "Mild berøring skremmer meg fortsatt.",
      "suggestion": "Legg merke til skvettingen – hvor tenner det først, og hva skjer deretter i kroppen?"
    },
    "dp_exploratory-questions_case-laura_05": {
      "text": "Jeg drikker om kvelden for å skru av støyen.",
      "suggestion": "Før første slurk, hvilken følelse er her, og hvor i kroppen merker du den mest nå?"
    },
    "dp_exploratory-questions_case-laura_06": {
      "text": "Jeg våkner anspent, som om jeg står på vakt.",
      "suggestion": "Skann kroppen – hva er mest spent, og hva kunne hjulpet det stedet å mykne én prosent nå?"
    },
    "dp_exploratory-questions_case-laura_07": {
      "text": "Gode nyheter når ikke ordentlig inn til meg.",
      "suggestion": "Når gode nyheter kommer, hva står i veien inni, og hvilket lite tegn sier at noe positivt prøver å slippe gjennom?"
    },
    "dp_exploratory-questions_case-laura_08": {
      "text": "Noen ganger sprekker noe opp i meg av en sang et lite øyeblikk.",
      "suggestion": "Når du tenker på den sangen, hva kom gjennom sprekken, og hvordan kjente kroppen det?"
    },
    "dp_exploratory-questions_case-laura_09": {
      "text": "Jeg ender med å be om unnskyldning når jeg trenger trøst.",
      "suggestion": "Hvor i deg bor den beklagelsen, og under den – hvilket behov vil bli navngitt akkurat nå?"
    },
    "dp_exploratory-questions_case-laura_10": {
      "text": "Jeg unngår filmer med krangling og slåssing fordi kroppen ikke tåler det.",
      "suggestion": "Når du ser for deg en slåssscene, hvilket kroppssignal sier «for mye», og hva hjelper det signalet å roe seg?"
    },
    "dp_exploratory-questions_case-carlos_01": {
      "text": "En viss tone fyrer meg opp på innsiden.",
      "suggestion": "Når du hører den tonen for deg nå, hva tenner først – varme, stramming – og hvor merker du det?"
    },
    "dp_exploratory-questions_case-carlos_02": {
      "text": "Jeg går frem og tilbake for å brenne det av.",
      "suggestion": "Når du ser for deg at du går frem og tilbake, hva er den verste delen kroppen prøver å komme seg gjennom, og hva ville lette det én prosent?"
    },
    "dp_exploratory-questions_case-carlos_03": {
      "text": "Hvis jeg trekker meg, føles det som om jeg forsvinner.",
      "suggestion": "La oss sitte litt med «ingenting» i ett pust – hvilket bilde følger med, og hvor kjenner du det mest?"
    },
    "dp_exploratory-questions_case-carlos_04": {
      "text": "Sønnens sammenrykk går på repeat i hodet mitt.",
      "suggestion": "Når du ser ansiktet hans for deg nå, hvor gjør det mest vondt i kroppen, og hva ønsker det såre stedet at du gjør annerledes neste gang?"
    },
    "dp_exploratory-questions_case-carlos_05": {
      "text": "Ro føles farlig, som å senke garden.",
      "suggestion": "Når vi setter ord på «fare», hvor kjenner du den, og hva måtte roen inneholde for at den skulle kjennes sterk i stedet for svak?"
    },
    "dp_exploratory-questions_case-carlos_06": {
      "text": "Jeg ødelegger ting så jeg ikke ødelegger folk.",
      "suggestion": "I øyeblikket før du slår, hva blinker gjennom deg, og hva vil det blinket beskytte mest?"
    },
    "dp_exploratory-questions_case-carlos_07": {
      "text": "Jeg stoler ikke på at det er trygt å være sårbar.",
      "suggestion": "Når «sårbar» dukker opp, hva betyr det på innsiden, og hvilken grense ville gjort det tryggere å prøve?"
    },
    "dp_exploratory-questions_case-carlos_08": {
      "text": "Mangel på respekt kjennes som et slag.",
      "suggestion": "Hvor lander det slaget først, og hva vil den delen som blir truffet at andre skal vite om deg?"
    },
    "dp_exploratory-questions_case-carlos_09": {
      "text": "Jeg klemmer rattet til knokene blir hvite.",
      "suggestion": "Akkurat nå, hvis hendene dine hadde ord, hva ville de sagt at de holder fast i?"
    },
    "dp_exploratory-questions_case-carlos_10": {
      "text": "Det jeg vil mest, er at familien min skal føle seg trygg med meg.",
      "suggestion": "Når du holder på det ønsket, hvilken følelse stiger i deg akkurat nå?"
    },
    "dp_exploratory-questions_case-nina_01": {
      "text": "Når jeg ber om hjelp, skyller skyld inn og jeg vil ta det tilbake.",
      "suggestion": "Når vi legger merke til bølgen, hvor lander skylden først – hals, bryst – og hva anklager den deg for?"
    },
    "dp_exploratory-questions_case-nina_02": {
      "text": "Jeg holder meg opptatt så jeg slipper å kjenne på bitterhet eller tristhet.",
      "suggestion": "Hvis vi pauser opptattheten i to pust, hva viser seg under, og hva trenger det akkurat nå?"
    },
    "dp_exploratory-questions_case-nina_03": {
      "text": "Ordet nei knyter magen min i knute.",
      "suggestion": "Bli litt ved knuten – hvor stor er den, og hvilken frykt bærer den om hva som skjer hvis du sier nei?"
    },
    "dp_exploratory-questions_case-nina_04": {
      "text": "Når jeg hviler, kaller en stemme meg lat.",
      "suggestion": "Når det ordet lander, hvor kjenner du det, og hva vil du at den skamfulle delen skal høre fra deg?"
    },
    "dp_exploratory-questions_case-nina_05": {
      "text": "Jeg ber om unnskyldning selv for den minste forespørselen.",
      "suggestion": "Når du ser for deg å spørre, hvilken yngre del er redd for å være en byrde, og hvor kjenner du den?"
    },
    "dp_exploratory-questions_case-nina_06": {
      "text": "Jeg får hodepine når jeg er overveldet.",
      "suggestion": "Akkurat nå – før hodepinen – hva er det første kroppssignalet du merker, og hvordan kunne én prosent lettelse se ut?"
    },
    "dp_exploratory-questions_case-nina_07": {
      "text": "Jeg sammenligner meg med andre mødre og føler meg liten.",
      "suggestion": "Når «liten» dukker opp, hvor i kroppen er den, og hva trenger den lille delen mest i dag?"
    },
    "dp_exploratory-questions_case-nina_08": {
      "text": "Jeg drømmer om å bli tatt vare på og føler meg så egoistisk fordi jeg vil det.",
      "suggestion": "Hvis vi blir litt ved ønsket, hvilken følelse følger med, og hva prøver «egoist»-delen å beskytte?"
    },
    "dp_exploratory-questions_case-nina_09": {
      "text": "Jeg tar på meg alt så ingen blir skuffet.",
      "suggestion": "Når du holder den byrden, hva er det tyngste stykket nå, og hvilken grense ville kroppen din takket deg for?"
    },
    "dp_exploratory-questions_case-nina_10": {
      "text": "Jeg krasjer om kvelden etter å ha holdt meg sammen hele dagen.",
      "suggestion": "Når du ser for deg krasjet, hvilken følelse slipper endelig gjennom?"
    },
    "dp_exploratory-questions_case-aisha_01": {
      "text": "Hvis et svar ikke kommer, føles det som om jeg faller.",
      "suggestion": "Når fallet starter, hvor merker du det først, og hvordan kjennes det – fall, svimmelhet, tomhet?"
    },
    "dp_exploratory-questions_case-aisha_02": {
      "text": "Jeg går fra «ikke forlat meg» til «la meg være i fred» på sekunder.",
      "suggestion": "I pustet før det snur, hvilken følelse blinker gjennom – tap, raseri – og hvor kjenner du den?"
    },
    "dp_exploratory-questions_case-aisha_03": {
      "text": "Noen ganger er tomheten så høylytt at jeg vil gjøre hva som helst for å stoppe den.",
      "suggestion": "Kan vi sitte litt i kanten av tomheten – hvilken form eller temperatur har den, og hva ber den om?"
    },
    "dp_exploratory-questions_case-aisha_04": {
      "text": "Når du ser bort, føler jeg meg droppet.",
      "suggestion": "Når det droppet skjer, hvor gammel kjennes du da, og hva ville den unge delen trenge akkurat nå?"
    },
    "dp_exploratory-questions_case-aisha_05": {
      "text": "Jeg klorer for å kjenne noe virkelig.",
      "suggestion": "Når du setter ord på trangen, hvor i kroppen sitter tomheten, og hva hjelper det stedet å føle seg holdt?"
    },
    "dp_exploratory-questions_case-aisha_06": {
      "text": "Hvis du avlyser, vil jeg ikke komme tilbake.",
      "suggestion": "Når du ser for deg en avlysning, hvor kjenner du stikket, og hva kunne hjulpet det stikket å føle seg holdt nok til å komme tilbake?"
    },
    "dp_exploratory-questions_case-aisha_07": {
      "text": "Vennlighet får meg til å gråte og til å ville løpe.",
      "suggestion": "I den trekkampen, hvilken del lengter etter å bli og hvilken del vil rømme – hva trenger hver av dem fra deg?"
    },
    "dp_exploratory-questions_case-aisha_08": {
      "text": "Jeg tester folk for å se om de bryr seg nok til å bli.",
      "suggestion": "Når du ser for deg en test, hvilken frykt prøver du å besvare inni deg?"
    },
    "dp_exploratory-questions_case-aisha_09": {
      "text": "Jeg hater meg selv etter at jeg slår ut.",
      "suggestion": "Når du kjenner det selvhatet, hvor lander det i kroppen, og hva trenger den sårede delen under det mest?"
    },
    "dp_exploratory-questions_case-aisha_10": {
      "text": "Det å si farvel gjør meg svimmel.",
      "suggestion": "Når svimmelheten kommer, hva hjelper føttene dine å finne gulvet, og hvilken følelse ligger under?"
    },
    "dp_exploratory-questions_case-david_01": {
      "text": "Når hun kaller meg kald, blir kjeven som stein og brystet hardt.",
      "suggestion": "Bli litt ved kjeven og brystet – hvilken følelse ligger under steinen, og hvor merker du den?"
    },
    "dp_exploratory-questions_case-david_02": {
      "text": "Hvis jeg ikke vinner, føler jeg meg hul.",
      "suggestion": "Når du legger merke til hulheten, hvilken størrelse eller tekstur har den, og hva ser den ut til å savne?"
    },
    "dp_exploratory-questions_case-david_03": {
      "text": "Jeg glatter skjorta og ramser opp prestasjoner når jeg føler meg dømt.",
      "suggestion": "Når du ser for deg at du gjør det, hvilken følelse tar du på deg rustning mot, og hvor dukker den opp først?"
    },
    "dp_exploratory-questions_case-david_04": {
      "text": "Ros renner fort ut igjen.",
      "suggestion": "Hvis vi holder et kompliment et sekund lenger, hvor lander det, og hva skyver det ut igjen?"
    },
    "dp_exploratory-questions_case-david_05": {
      "text": "Å innrømme at jeg tar feil, får ansiktet til å brenne.",
      "suggestion": "Legg merke til brenningen – hva er det redd for å bli sett som, og hvor i kroppen kjenner du den frykten?"
    },
    "dp_exploratory-questions_case-david_06": {
      "text": "Jeg sjekker telefonen under vanskelige samtaler.",
      "suggestion": "Når blikket faller til telefonen, hvilken følelse skyter opp, og hva kunne hjulpet den delen å bli værende ett pust lenger?"
    },
    "dp_exploratory-questions_case-david_07": {
      "text": "Hvis barna protesterer, mister jeg det.",
      "suggestion": "I pustet før du klikker, hva dukker opp inni – stikk, skam, frykt – og hvordan merker du det?"
    },
    "dp_exploratory-questions_case-david_08": {
      "text": "Siden affæren kjennes nettene flate og tunge.",
      "suggestion": "Når du legger merke til den flate tyngden, hvilken svak følelse lever under, og hva skulle den ønske at du kunne si høyt?"
    },
    "dp_exploratory-questions_case-david_09": {
      "text": "Jeg vil ha anerkjennelse for det jeg gjør.",
      "suggestion": "Når du holder det ønsket, hvilken følelse stiger når anerkjennelsen ikke kommer, og hva trenger den følelsen mest fra dem?"
    },
    "dp_exploratory-questions_case-david_10": {
      "text": "Jeg hater å være ordinær.",
      "suggestion": "Når «ordinær» dukker opp, hva betyr det i kroppen, og hvilken lengsel peker det mot?"
    },
    "dp_exploratory-questions_case-marcus_01": {
      "text": "De fleste dager er jeg nummen, og så treffer en bølge helt ut av det blå.",
      "suggestion": "Hvis vi blir ved kanten før bølgen, hvilket signal sier at den kommer, og hvor kjenner du det?"
    },
    "dp_exploratory-questions_case-marcus_02": {
      "text": "Mareritt rykker meg våken, og jeg føler meg både oppskrudd og tom.",
      "suggestion": "Akkurat her med oppskrudd og tom – hva er sterkest nå, og hvordan merker du det i kroppen?"
    },
    "dp_exploratory-questions_case-marcus_03": {
      "text": "Folkemengder gjør meg anspent, så jeg holder meg nær utgangene.",
      "suggestion": "Når du ser for deg en folkemengde, hvor i kroppen er spenningen høyest, og hvordan ville én prosent mer trygghet kjennes?"
    },
    "dp_exploratory-questions_case-marcus_04": {
      "text": "Stillheten hjemme kjennes tung.",
      "suggestion": "Hvor hviler tyngden, og hvis den hadde en vekt eller farge, hvordan ville den vært?"
    },
    "dp_exploratory-questions_case-marcus_05": {
      "text": "Jeg sitter i bilen etter jobb for å slippe å gå opp.",
      "suggestion": "Når du ser for deg at du sitter der, hvilken følelse er det som venter på deg der oppe?"
    },
    "dp_exploratory-questions_case-marcus_06": {
      "text": "Jeg har lyset dempet og ignorerer telefoner.",
      "suggestion": "Mens du legger merke til dempingen, hva sier kroppen om kontakt akkurat nå, og hvor finnes det det minste velkommen for nærhet?"
    },
    "dp_exploratory-questions_case-marcus_07": {
      "text": "Gode øyeblikk kjennes uvirkelige, som om de er bak glass.",
      "suggestion": "Hvis vi rører ved ett godt øyeblikk, hvor kjenner du det, og hva ser ut til å hindre det i å komme nærmere deg?"
    },
    "dp_exploratory-questions_case-marcus_08": {
      "text": "Plutselige lyder får meg til å skvette.",
      "suggestion": "Når du skvetter, hva kommer rett etter i kroppen, og hva hjelper deg å lande raskest?"
    },
    "dp_exploratory-questions_case-marcus_09": {
      "text": "Jeg husker ikke sist jeg lo ordentlig.",
      "suggestion": "Når du sier det, hvilken følelse dukker opp – tom, trist – og hvor lander den?"
    },
    "dp_exploratory-questions_case-marcus_10": {
      "text": "En del av meg tenker at jeg har det best alene.",
      "suggestion": "Hvis vi lytter til den delen, hva beskytter den deg mest mot, og hva ville den trenge for å våge et lite steg mot nærhet?"
    },
    "dp_providing-treatment-rationale_case-sara_01": {
      "text": "Jeg er redd for at det å snakke om følelser får meg til å spinne. Kan vi ikke bare holde det positivt?",
      "suggestion": "Det gir mening å være redd for det. I denne utforskingen går vi sakte og trygt; når vi setter ord på litt av følelsen, roer den seg, og nettene blir mindre overveldende."
    },
    "dp_providing-treatment-rationale_case-sara_02": {
      "text": "Hvorfor fokusere på følelser i stedet for å gi meg steg for å komme videre?",
      "suggestion": "Steg hjelper mest når de passer til det som gjør vondt, fordi følelsene viser hva som faktisk er såret og hva du trenger. Vi lytter dit først, så stegene du tar treffer den egentlige smerten."
    },
    "dp_providing-treatment-rationale_case-sara_03": {
      "text": "Hvis jeg gråter, blir jeg ikke bare sittende fast da?",
      "suggestion": "Her doserer vi. Vi berører en liten bit og kommer tilbake; da kan tristheten bevege seg i stedet for å låse seg."
    },
    "dp_providing-treatment-rationale_case-sara_04": {
      "text": "Er det ikke bedre å distrahere meg?",
      "suggestion": "Avledning kan gi korte pauser. Samtidig øver vi på å tåle å kjenne litt – trygt – så følelsen ikke jager deg om natten."
    },
    "dp_providing-treatment-rationale_case-sara_05": {
      "text": "Jeg føler meg teit som snakker om et brudd når andre har større problemer.",
      "suggestion": "Smerten din betyr noe. Terapi kan hjelpe deg å lytte til den lenge nok til å høre hva den ber om – trøst, grenser, kontakt – slik at det kan lette."
    },
    "dp_providing-treatment-rationale_case-sara_06": {
      "text": "Hvordan skal dette hjelpe meg å slutte å tenke på ham?",
      "suggestion": "Vi kartlegger mønsteret som drar deg tilbake – ensomhet, håp, selvbebreidelse – og gir hver del omsorg, så mønsteret kan slippe taket."
    },
    "dp_providing-treatment-rationale_case-sara_07": {
      "text": "Kan vi ikke bare sette mål og holde meg travel igjen?",
      "suggestion": "Vi kan absolutt legge til mål. Først bruker vi noen minutter med følelsen, så målene faktisk kan fylle deg på – ikke bare bedøve."
    },
    "dp_providing-treatment-rationale_case-sara_08": {
      "text": "Hva om jeg ikke vet hva jeg føler?",
      "suggestion": "Helt greit. Vi starter med enkel sansing – stramt, tungt, hult – og bygger ord derfra i ditt tempo."
    },
    "dp_providing-treatment-rationale_case-sara_09": {
      "text": "Tar dette lang tid?",
      "suggestion": "Folk merker ofte små skift underveis, fordi det å lære å kjenne litt tryggere kan mykne løkkene som holder deg fast."
    },
    "dp_providing-treatment-rationale_case-sara_10": {
      "text": "Hvordan er dette annerledes enn å lufte seg for venner?",
      "suggestion": "Her senker vi tempoet, følger kroppssignaler, setter ord på behov og øver på nye valg. Da blir det å lufte seg til endring."
    },
    "dp_providing-treatment-rationale_case-michael_01": {
      "text": "Jeg trenger sinnekontroll, ikke følelsesprat. Hvordan hjelper dette?",
      "suggestion": "Kontroll betyr noe. Vi kartlegger hva sinnet beskytter – ofte et raskt stikk av skam eller opplevd respektløshet – så du kan fange det tidlig og velge annerledes."
    },
    "dp_providing-treatment-rationale_case-michael_02": {
      "text": "Er ikke dette bare å bortforklare utbruddene mine?",
      "suggestion": "Nei. Å forstå utløseren gir deg mer grep i øyeblikket; det øker ansvarligheten fordi du kan handle før det smeller."
    },
    "dp_providing-treatment-rationale_case-michael_03": {
      "text": "Hvorfor bremse når jeg er under prestasjonspress?",
      "suggestion": "Å bremse 5–10 sekunder lar deg merke det første støtet i brystet; den klarheten gjør at du kan styre i stedet for å smelle."
    },
    "dp_providing-treatment-rationale_case-michael_04": {
      "text": "Jeg vil ikke være svak.",
      "suggestion": "Dette handler ikke om å være svak. Det handler om presisjon, fordi når du vet nøyaktig hva som treffer deg, kan du stå sterkt og stødig."
    },
    "dp_providing-treatment-rationale_case-michael_05": {
      "text": "Kan du bare gi meg verktøy?",
      "suggestion": "Det skal vi. Verktøy lander best når de er tilpasset tennpunktene dine, fordi følelsesarbeidet viser oss akkurat når og hvordan de skal brukes."
    },
    "dp_providing-treatment-rationale_case-michael_06": {
      "text": "Hvordan hjelper det å være oppmerksom på kroppen på jobb?",
      "suggestion": "Kroppen varsler trussel først – stram kjeve, varm nakke. Å fange det signalet lar deg ta en pause og svare med autoritet i stedet for i affekt."
    },
    "dp_providing-treatment-rationale_case-michael_07": {
      "text": "Hva om jeg mister det igjen?",
      "suggestion": "Tilbakeslag er data. Vi går gjennom sekvensen, finjusterer kartet og øver pausen, så neste gang blir litt bedre."
    },
    "dp_providing-treatment-rationale_case-michael_08": {
      "text": "Kona mi vil ha resultater, ikke prat.",
      "suggestion": "Forståelig. Resultatet vi sikter på er færre utbrudd og raskere reparasjoner – dette arbeidet bygger nettopp det."
    },
    "dp_providing-treatment-rationale_case-michael_09": {
      "text": "Vil dette endre hvordan teamet ser meg?",
      "suggestion": "Det kan det. Når du fanger stikket tidligere, får du mer valg i hvordan du svarer, og det endrer ofte hvordan andre opplever deg."
    },
    "dp_providing-treatment-rationale_case-michael_10": {
      "text": "Jeg er ikke flink med følelser.",
      "suggestion": "Det trenger du ikke være. Jeg guider deg i små steg – ett kroppssignal, ett behov – fordi det gjør arbeidet praktisk og holder det under din kontroll."
    },
    "dp_providing-treatment-rationale_case-jason_01": {
      "text": "Hjelper dette virkelig sosial angst? Jeg vil bare få mer selvtillit.",
      "suggestion": "Selvtillit vokser fra trygghet på innsiden. Vi lærer kroppen å kjenne igjen tidlige signaler på frykt og skam, så de blir håndterbare og du kan ta ordet."
    },
    "dp_providing-treatment-rationale_case-jason_02": {
      "text": "Hva om jeg blir helt blank når du spør hva jeg føler?",
      "suggestion": "Å bli blank er vanlig. Vi starter med enkle kroppssignaler – stram, varm, dirrende – og bygger ord langsomt derfra i ditt tempo."
    },
    "dp_providing-treatment-rationale_case-jason_03": {
      "text": "Hvorfor fokusere på kroppen? Det er jo tankene som er problemet.",
      "suggestion": "Tankene spinner fort. Vi følger kroppen fordi den gir oss et tidligere og mer stabilt holdepunkt; når vi roer det, dempes ofte både spinningen og selvkritikken."
    },
    "dp_providing-treatment-rationale_case-jason_04": {
      "text": "Jeg vil ikke gjøre det verre ved å gi det mer oppmerksomhet.",
      "suggestion": "Vi holder oss ved kanten, ikke i det dypeste. Små doser av å legge merke til det lærer systemet ditt at det er trygt, og gjør at uroen krymper over tid."
    },
    "dp_providing-treatment-rationale_case-jason_05": {
      "text": "Kan vi ikke bare øve på ferdige setninger?",
      "suggestion": "Vi kan øve på setninger og ferdigheter. De sitter best når kroppen føles tryggere; vi bygger begge deler, så selvtilliten blir ekte – ikke presset fram."
    },
    "dp_providing-treatment-rationale_case-jason_06": {
      "text": "Hvor lang tid tar det før dette kjennes lettere?",
      "suggestion": "De første skiftene er ofte små: litt mindre beredskap, litt mer rom til å være til stede når oppmerksomheten rettes mot deg."
    },
    "dp_providing-treatment-rationale_case-jason_07": {
      "text": "Jeg synes det er pinlig å snakke om dette.",
      "suggestion": "Det er helt forståelig. Vi går varsomt fram, og du bestemmer tempoet; min jobb er å gjøre det trygt å ta små steg."
    },
    "dp_providing-treatment-rationale_case-jason_08": {
      "text": "Hva gjør jeg når hodet sier at jeg er klein?",
      "suggestion": "Vi setter ord på den stemmen, følger kroppssignalet den rir på, og legger til et stødigere budskap, fordi det gjør det lettere å bli værende i stedet for å forsvinne."
    },
    "dp_providing-treatment-rationale_case-jason_09": {
      "text": "Må jeg jobbe så hardt med dette hele tiden?",
      "suggestion": "Det blir lettere. Når nervesystemet ditt lærer trygghet, er det færre ting som setter deg i gang, og sosiale situasjoner kjennes mer naturlige."
    },
    "dp_providing-treatment-rationale_case-jason_10": {
      "text": "Jeg hater øyekontakt.",
      "suggestion": "Vi skal ikke tvinge det. Vi bygger toleranse gradvis – korte blikk, mykt fokus – så øyekontakt kan kjennes mulig uten å bli overveldende."
    },
    "dp_providing-treatment-rationale_case-laura_01": {
      "text": "Jeg tror dette bare er kjemisk. Hvordan skulle det hjelpe å snakke?",
      "suggestion": "Biologi kan spille en rolle. Vi hjelper også nervesystemet ditt til å føle seg tryggere, fordi humør og kontakt ofte bedres når det roer seg."
    },
    "dp_providing-treatment-rationale_case-laura_02": {
      "text": "Jeg vil ikke gjenoppleve traumer.",
      "suggestion": "Du kommer ikke til å bli presset til å gjenoppleve noe. Vi jobber i små doser med jording, fordi det å kjenne litt og komme tilbake er det som bygger trygghet."
    },
    "dp_providing-treatment-rationale_case-laura_03": {
      "text": "Hva er poenget når jeg er nummen?",
      "suggestion": "Nummenhet har beskyttet deg. Vi respekterer den og leter etter små signaler under, fordi den varsomme kontakten kan knytte deg til deg selv igjen uten å overvelde."
    },
    "dp_providing-treatment-rationale_case-laura_04": {
      "text": "Hva om vennlighet gjør meg mistenksom?",
      "suggestion": "Det forventer vi. Vi senker tempoet og hjelper kroppen din å teste trygghet bit for bit, fordi det er slik varme kan kjennes mer mulig."
    },
    "dp_providing-treatment-rationale_case-laura_05": {
      "text": "Kommer dette til å dra opp ting jeg ikke tåler?",
      "suggestion": "Vi går varsomt fram fordi trygghet kommer først. Du bestemmer tempoet, og vi stopper hvis aktiveringen blir for høy."
    },
    "dp_providing-treatment-rationale_case-laura_06": {
      "text": "Hvorfor legge merke til kroppen når jeg stort sett bare blir nummen?",
      "suggestion": "Kroppen forteller oss når du er trygg eller på vakt. Når du lærer det språket, kan du styre før panikk eller nedstenging tar over."
    },
    "dp_providing-treatment-rationale_case-laura_07": {
      "text": "Jeg er lei av å føle meg så flat.",
      "suggestion": "Målet er å utvide toleransevinduet ditt – mer tilgang til følelser, og også mer ro – så livet får farge igjen."
    },
    "dp_providing-treatment-rationale_case-laura_08": {
      "text": "Hvordan skal jeg vite om det virker?",
      "suggestion": "Vi ser etter små tegn først: litt mindre beredskap, mer evne til å være til stede, og øyeblikk av varme eller ro som ikke kjennes fullt så farlige."
    },
    "dp_providing-treatment-rationale_case-laura_09": {
      "text": "Kan vi ikke bare snakke om praktiske ting?",
      "suggestion": "Vi kan absolutt ta med praktisk støtte. Følelsesarbeidet gjør at den støtten lander, fordi systemet ditt blir mindre på vakt."
    },
    "dp_providing-treatment-rationale_case-laura_10": {
      "text": "Hva om jeg kobler ut her?",
      "suggestion": "Da pauser vi, jorder oss, og kommer tilbake når du er klar. Bare det å legge merke til nedstengingen er fremgang, fordi det gir oss et holdepunkt."
    },
    "dp_providing-treatment-rationale_case-carlos_01": {
      "text": "Gjør dette meg svak? Jeg må være sterk.",
      "suggestion": "Dette handler om kontroll, ikke svakhet. Når du kjenner det første treffet på innsiden, kan du velge før knyttnever eller ord flyr, fordi det å fange det tidlig gir deg handlingsrom."
    },
    "dp_providing-treatment-rationale_case-carlos_02": {
      "text": "Hvorfor snakke om følelser i stedet for bare å gi verktøy?",
      "suggestion": "Vi skal bruke verktøy. Følelsesarbeidet viser det eksakte triggerpunktet, fordi det riktige verktøyet bare virker når vi vet akkurat når det trengs."
    },
    "dp_providing-treatment-rationale_case-carlos_03": {
      "text": "Hvordan hjelper dette meg når folk viser manglende respekt?",
      "suggestion": "Vi kartlegger flammepunktet så du kjenner første støt av ydmykelse/frykt og svarer med fast, stødig selvrespekt i stedet for et utbrudd."
    },
    "dp_providing-treatment-rationale_case-carlos_04": {
      "text": "Jeg kan ikke miste brodden.",
      "suggestion": "Dette handler ikke om å miste styrke; det handler om å hjelpe deg å stå sterkt uten at reaksjonen tar over."
    },
    "dp_providing-treatment-rationale_case-carlos_05": {
      "text": "Hva om jeg eksploderer uansett?",
      "suggestion": "Da lærer vi av det. Hvert utbrudd finjusterer kartet, så du fanger det tidligere neste gang og reparerer raskere."
    },
    "dp_providing-treatment-rationale_case-carlos_06": {
      "text": "Skal det virkelig hjelpe å puste?",
      "suggestion": "Pust er ikke hele svaret; det gir kroppen din akkurat nok rom til å merke det første glimtet av sårhet eller ydmykelse før sinnet tar over, og det er der valget begynner."
    },
    "dp_providing-treatment-rationale_case-carlos_07": {
      "text": "Folk tråkker på meg hvis jeg lar ting passere.",
      "suggestion": "Vi ber deg ikke la det passere – vi bygger stødigere måter å kreve respekt på uten å skremme dem du er glad i."
    },
    "dp_providing-treatment-rationale_case-carlos_08": {
      "text": "Jeg lærte at du må slå først.",
      "suggestion": "Den regelen hjalp deg å overleve den gangen. Her senker vi farten i tennpunktet fordi det hjelper deg å kjenne hva som blir truffet under det hele og få mer valg før «slå først»-responsen tar over."
    },
    "dp_providing-treatment-rationale_case-carlos_09": {
      "text": "Barnet mitt så meg sint. Hvordan hjelper dette ham?",
      "suggestion": "Du modellerer reparasjon. Når du fanger det tidligere og gjør opp raskere, lærer han trygghet og ansvarlighet av deg."
    },
    "dp_providing-treatment-rationale_case-carlos_10": {
      "text": "Jeg vil ikke gå lenge i terapi.",
      "suggestion": "Vi kan holde dette fokusert og praktisk og jobbe med tennpunktene som oftest får deg i trøbbel."
    },
    "dp_providing-treatment-rationale_case-nina_01": {
      "text": "Er det ikke egoistisk å fokusere på følelsene mine?",
      "suggestion": "Du har båret andre så lenge; det gir mening at du bekymrer deg. Her bruker vi følelsene dine til å tydeliggjøre behov og grenser, fordi det er det som gjør omsorg bærekraftig."
    },
    "dp_providing-treatment-rationale_case-nina_02": {
      "text": "Hva hjelper det egentlig å legge merke til kroppen?",
      "suggestion": "Kroppen varsler skyld eller tristhet tidlig. Når du fanger det, kan du stoppe opp og velge – i stedet for å bli styrt av det."
    },
    "dp_providing-treatment-rationale_case-nina_03": {
      "text": "Jeg vil bare ha konkrete steg.",
      "suggestion": "Vi skal legge til steg. Følelsesarbeidet viser oss hvilken grense eller forespørsel som faktisk vil lette trykket, fordi ikke alle hjelpsomme steg skal koste deg mer."
    },
    "dp_providing-treatment-rationale_case-nina_04": {
      "text": "Jeg får dårlig samvittighet av å si nei.",
      "suggestion": "Vi øver på små, vennlige nei. Hvert nei lærer nervesystemet ditt at grenser kan være trygge og kjærlige."
    },
    "dp_providing-treatment-rationale_case-nina_05": {
      "text": "Jeg er redd folk forlater meg hvis jeg slutter å hjelpe så mye.",
      "suggestion": "Vi prøver dette varsomt. Tydelige behov og grenser pleier å styrke de riktige relasjonene og spare energien din, fordi folk lettere kan møte deg når det som trengs blir sagt høyt."
    },
    "dp_providing-treatment-rationale_case-nina_06": {
      "text": "Kan vi ikke bare organisere timeplanen min?",
      "suggestion": "Det kan vi, og det virker best etter at vi har kartlagt hva som tapper og hva som fyller deg, så timeplanen faktisk speiler behovene dine."
    },
    "dp_providing-treatment-rationale_case-nina_07": {
      "text": "Hva om skyld aldri går bort?",
      "suggestion": "Skyld kan fortsatt banke på. Du lærer å legge merke til den, sjekke om den passer, og svare vennlig uten at den styrer deg."
    },
    "dp_providing-treatment-rationale_case-nina_08": {
      "text": "Jeg synes det er flaut å be om hjelp.",
      "suggestion": "Vi øver på små forespørsler her, så kroppen din lærer at det kan være trygt å ta imot støtte – og at det kan deles."
    },
    "dp_providing-treatment-rationale_case-nina_09": {
      "text": "Jeg vil ikke være trengende.",
      "suggestion": "Å trenge noe er menneskelig. Når du setter ord på behov tydelig, hjelper det både deg og dem du er glad i – de vet hvordan de kan stille opp."
    },
    "dp_providing-treatment-rationale_case-nina_10": {
      "text": "Hvordan skal jeg vite at dette faktisk hjelper?",
      "suggestion": "Vi ser etter om det blir mindre straffende å be om noe, hvile eller sette grenser, og om du går fra timene med klarere kontakt med hva du trenger."
    },
    "dp_providing-treatment-rationale_case-aisha_01": {
      "text": "Hva om det å snakke om å bli forlatt gjør at jeg får lyst til å skade meg?",
      "suggestion": "Sikkerhet kommer først. Vi planlegger for vanskelige øyeblikk, bruker jording og berører forlatelsessmerten bare i helt små doser fordi det hjelper deg å kjenne litt uten å miste trygghet eller kontakt."
    },
    "dp_providing-treatment-rationale_case-aisha_02": {
      "text": "Jeg trenger at du lover at du aldri forlater meg.",
      "suggestion": "Det gir mening å ønske det. Jeg kan ikke love aldri, og jeg kan love at vi planlegger for pauser, navngir frykt og reparerer raskt, fordi forutsigbarhet hjelper panikken å roe seg."
    },
    "dp_providing-treatment-rationale_case-aisha_03": {
      "text": "Hvis du avlyser, kommer jeg til å spinne.",
      "suggestion": "Det er nettopp derfor vi arbeider med alarmen i små, planlagte doser, så systemet ditt kan lære at panikken kan stige, bli hjulpet gjennom og roe seg igjen uten at du blir overlatt til den alene."
    },
    "dp_providing-treatment-rationale_case-aisha_04": {
      "text": "Jeg føler for mye for enhver terapeut.",
      "suggestion": "Følelsene dine er store på grunn av det du har levd. Her doserer vi – små slurker, mye jording – så det kjennes overlevelig."
    },
    "dp_providing-treatment-rationale_case-aisha_05": {
      "text": "Hvorfor fokusere på kroppen når jeg får panikk?",
      "suggestion": "Kroppen er døra ut av panikken – pust, føtter, stol – fordi det å roe de signalene gir deg mer rom til å velge."
    },
    "dp_providing-treatment-rationale_case-aisha_06": {
      "text": "Jeg hater å føle meg trengende.",
      "suggestion": "Behovet gir mening. Vi skal hjelpe deg å be tydelig, ta imot i små doser, og også roe deg selv mellom timene, fordi både kontakt og selvberoligelse betyr noe."
    },
    "dp_providing-treatment-rationale_case-aisha_07": {
      "text": "Hva om jeg blir knyttet til deg?",
      "suggestion": "Tilknytning er en del av heling her. Vi holder tydelige grenser og bruker båndet til å lære trygghet og tillit."
    },
    "dp_providing-treatment-rationale_case-aisha_08": {
      "text": "Hvordan skal dette hindre at relasjoner eksploderer?",
      "suggestion": "Vi kartlegger vendingen fra klamre til skyve bort, følger tidlige signaler og øver nye grep – navngi frykt, be direkte, ta avstand på en trygg måte."
    },
    "dp_providing-treatment-rationale_case-aisha_09": {
      "text": "Kommer dette til å ta evigheter?",
      "suggestion": "Du vil merke tidlige gevinster – færre panikktopper, raskere ro – når systemet lærer veien fra alarm til mer stabil grunn."
    },
    "dp_providing-treatment-rationale_case-aisha_10": {
      "text": "Jeg klarer ikke å stole på terapeuter.",
      "suggestion": "Det gir mening. Vi går sakte, er åpne, og lar tillit bygges gjennom mange små avtaler som blir holdt."
    },
    "dp_providing-treatment-rationale_case-david_01": {
      "text": "Hvorfor fokusere på følelser når jeg trenger resultater?",
      "suggestion": "Følelser driver reaksjoner. Når du kartlegger stikket under sinne eller avstand, får du mer kontroll – bedre utfall hjemme og på jobb."
    },
    "dp_providing-treatment-rationale_case-david_02": {
      "text": "Jeg vil ikke bli psykoanalysert.",
      "suggestion": "Vi holder det praktisk. Vi følger konkrete øyeblikk, setter ord på hva som treffer, og øver på jevnere svar du kan bruke med én gang."
    },
    "dp_providing-treatment-rationale_case-david_03": {
      "text": "Hjelper dette ekteskapet mitt, eller handler det bare om meg?",
      "suggestion": "Begge deler. Når vi bremser stikket under defensiviteten din, kan du høre mer, eie mer og svare mindre reaktivt, og det er det som begynner å forandre et ekteskap."
    },
    "dp_providing-treatment-rationale_case-david_04": {
      "text": "Jeg kan teorien allerede.",
      "suggestion": "Bra – nå bruker vi den i praksis. Vi øver i øyeblikket, så nervesystemet lærer, ikke bare hodet."
    },
    "dp_providing-treatment-rationale_case-david_05": {
      "text": "Jeg hater å føle meg liten når jeg tar feil.",
      "suggestion": "Vi skal hjelpe deg å tåle den brenningen i noen sekunder, fordi det gjør det mulig å eie det raskt og gå videre med styrke."
    },
    "dp_providing-treatment-rationale_case-david_06": {
      "text": "Hvordan hjelper dette lederskapet mitt?",
      "suggestion": "Jevnere følelser betyr klarere beslutninger, færre utbrudd og mer tillit fra teamet ditt, fordi folk samarbeider bedre med deg når defensiviteten slipper taket."
    },
    "dp_providing-treatment-rationale_case-david_07": {
      "text": "Kan vi hoppe over barndomsprat?",
      "suggestion": "Vi kan holde oss i nåtiden. Hvis gamle mønstre dukker opp, navngir vi akkurat nok til å frigjøre deg her og nå."
    },
    "dp_providing-treatment-rationale_case-david_08": {
      "text": "Hva om jeg ikke føler noe?",
      "suggestion": "Vi starter med små signaler – stram kjeve, hulhet i brystet – og bygger derfra; du styrer tempoet."
    },
    "dp_providing-treatment-rationale_case-david_09": {
      "text": "Jeg trenger raske resultater.",
      "suggestion": "Vi kan sikte mot konkrete endringer tidlig, som å fange defensiviteten tidligere og komme gjennom vanskelige samtaler med mindre skade."
    },
    "dp_providing-treatment-rationale_case-david_10": {
      "text": "Hvordan vet jeg at dette er verdt det?",
      "suggestion": "Vi ser etter konkrete skift: mindre nedstenging eller forsvar i vanskelige øyeblikk, raskere reparasjon og mer rom til å være til stede når skammen blir truffet."
    },
    "dp_providing-treatment-rationale_case-marcus_01": {
      "text": "Prat endrer ikke det som skjedde.",
      "suggestion": "Sant – det kan ikke endre fortiden. Det kan endre hvordan kroppen din bærer den nå, fordi det er slik nummenheten og bølgene kan bli mildere."
    },
    "dp_providing-treatment-rationale_case-marcus_02": {
      "text": "Jeg vil ikke bli oversvømt.",
      "suggestion": "Vi jobber i små slurker – jorde først, kjenne litt, komme tilbake – fordi det er slik du kan beholde kontrollen og tåle arbeidet."
    },
    "dp_providing-treatment-rationale_case-marcus_03": {
      "text": "Jeg føler ingenting de fleste dager.",
      "suggestion": "Nummenhet har beskyttet deg. Vi respekterer den og leter etter små signaler under, fordi det er slik du kan kjenne litt uten å bli overveldet."
    },
    "dp_providing-treatment-rationale_case-marcus_04": {
      "text": "Hvorfor merke kroppen?",
      "suggestion": "Kroppen forteller når du er trygg eller på vakt. Å lære disse signalene lar deg styre før panikk eller nedstenging."
    },
    "dp_providing-treatment-rationale_case-marcus_05": {
      "text": "Hvordan hjelper dette marerittene?",
      "suggestion": "Vi roer systemet før og etter dårlige netter og bearbeider små biter når det er trygt, fordi det gjør etterdønningene lettere."
    },
    "dp_providing-treatment-rationale_case-marcus_06": {
      "text": "Jeg har det best alene.",
      "suggestion": "Alene har vært tryggest. Vi bygger tryggere måter å koble på, så du kan velge nærhet uten å føle deg fanget."
    },
    "dp_providing-treatment-rationale_case-marcus_07": {
      "text": "Hva er fremgang for meg?",
      "suggestion": "Mer søvn, færre skvett, glimt av varme, og at du kan være ved en følelse i ett pust uten å stenge ned, fordi systemet ditt lærer at kontakt kan være trygg."
    },
    "dp_providing-treatment-rationale_case-marcus_08": {
      "text": "Jeg stoler ikke på terapeuter.",
      "suggestion": "Det gir mening. Vi går sakte, er transparente og lar tillit bygges gjennom små, forutsigbare steg."
    },
    "dp_providing-treatment-rationale_case-marcus_09": {
      "text": "Kan vi holde det praktisk?",
      "suggestion": "Ja – vi kombinerer jordingsferdigheter med korte drypp av følelsesarbeid, fordi hverdagen blir lettere samtidig som vi heler i et tempo du tåler."
    },
    "dp_providing-treatment-rationale_case-marcus_10": {
      "text": "Hva om jeg aldri føler meg normal igjen?",
      "suggestion": "Vi jager ikke en perfekt normal; vi ser etter mer søvn, mindre nedstenging og mer evne til å føle og ha kontakt uten å bli overveldet."
    },
    "dp_empathic-explorations_case-sara_01": {
      "text": "Bare det å se navnet hans dukke opp får magen min til å synke, og hele meg blir liten.",
      "suggestion": "Det er det suget i magen, og med det en litenhet, nesten som om en del av deg folder seg sammen."
    },
    "dp_empathic-explorations_case-sara_02": {
      "text": "Jeg sier til venner at det går bra mens halsen strammer seg.",
      "suggestion": "Den stramme halsen ser ut til å holde tilbake ord og følelser som er vanskelige å slippe ut."
    },
    "dp_empathic-explorations_case-sara_03": {
      "text": "Kveldene strekker seg ut i det uendelige, og jeg skrubber ting bare for å holde meg i bevegelse.",
      "suggestion": "Når kvelden åpner seg, ser travelheten ut til å skynde seg inn, kanskje for å holde ensomheten så vidt på avstand."
    },
    "dp_empathic-explorations_case-sara_04": {
      "text": "Jeg var nær ved å sende ham en unnskyldning, selv om jeg ikke gjorde noe galt.",
      "suggestion": "Noe i deg beveger seg fortsatt mot å be om unnskyldning, som om det å si unnskyld kunne hindre at kontakten ryker."
    },
    "dp_empathic-explorations_case-sara_05": {
      "text": "Noen ganger sletter jeg bilder og leter etter dem igjen.",
      "suggestion": "Det er virkelig en dragkamp der, en del prøver å slippe taket, mens en annen fortsatt leter etter ham."
    },
    "dp_empathic-explorations_case-sara_06": {
      "text": "Når noen er snille mot meg, faller blikket før jeg rekker å stoppe det.",
      "suggestion": "Når vennlighet kommer nær, senker noe i deg blikket, kanskje uten helt å vite hva det skal gjøre med det å bli tatt vare på."
    },
    "dp_empathic-explorations_case-sara_07": {
      "text": "Jeg våkner, og tapet skyller over meg på nytt.",
      "suggestion": "Det treffer om morgenen som om tapet blir virkelig i kroppen på nytt."
    },
    "dp_empathic-explorations_case-sara_08": {
      "text": "Jeg føler meg flau over at jeg fortsatt er trist.",
      "suggestion": "Flauheten ser ut til å ligge oppå en tristhet som fortsatt er veldig levende og som trenger plass."
    },
    "dp_empathic-explorations_case-sara_09": {
      "text": "Å se par får brystet til å verke, og jeg vil helst forsvinne.",
      "suggestion": "Den verken i brystet bærer i seg en lengsel, som om den strekker seg etter noe du savner svært mye."
    },
    "dp_empathic-explorations_case-sara_10": {
      "text": "Jeg vil ikke belaste noen med følelsene mine.",
      "suggestion": "Frykten for å være en byrde ser ut til å komme raskt, nesten som en advarsel mot å lene deg for mye på noen."
    },
    "dp_empathic-explorations_case-michael_01": {
      "text": "Når noen retter på meg, ringer det i ørene og kjeven låser seg.",
      "suggestion": "Der er ringingen og låsningen i kjeven, og under det kanskje det første stikket av å bli korrigert."
    },
    "dp_empathic-explorations_case-michael_02": {
      "text": "Uten å mene det skanner jeg hvert rom etter tegn på manglende respekt.",
      "suggestion": "En del av deg ser ut til å speide etter respektløshet hele tiden, som om den har lært at den må fange treffet tidlig."
    },
    "dp_empathic-explorations_case-michael_03": {
      "text": "Etter et utbrudd er det en grop i magen jeg unngår.",
      "suggestion": "Den gropen i magen ser ut til å romme noe som er vanskelig å møte etter at sinnet har lagt seg."
    },
    "dp_empathic-explorations_case-michael_04": {
      "text": "Å be om unnskyldning slipper meg rett ned i en underlegen posisjon.",
      "suggestion": "Å be om unnskyldning ser ut til å slippe deg ned i en underlegen posisjon som kjennes nesten uutholdelig."
    },
    "dp_empathic-explorations_case-michael_05": {
      "text": "Et enkelt sukk fra kona får meg til å tenne.",
      "suggestion": "Det sukket ser ut til å treffe et rått punkt med en gang, og plutselig blir alt opphetet."
    },
    "dp_empathic-explorations_case-michael_06": {
      "text": "Hvis jeg ikke kan svaret, spenner jeg meg.",
      "suggestion": "Kroppen strammer seg idet du ikke vet, som om den må spenne seg mot å bli avslørt."
    },
    "dp_empathic-explorations_case-michael_07": {
      "text": "Jeg dobbeltsjekker alt for å unngå å bli tatt i feil.",
      "suggestion": "Dobbeltsjekkingen kjennes som en måte å ligge i forkant av skammen ved å bli tatt i feil."
    },
    "dp_empathic-explorations_case-michael_08": {
      "text": "I det øyeblikket jeg kjenner meg svak, vil jeg stenge det ned.",
      "suggestion": "«Svak» lander som et farlig ord i deg og berører noe du har lært å kjempe hardt mot."
    },
    "dp_empathic-explorations_case-michael_09": {
      "text": "Noen ganger ligger jeg våken og spiller av hvert ord.",
      "suggestion": "Du ligger der og spiller det av igjen, som om en del av deg fortsatt prøver å gjøre det verste øyeblikket ugjort."
    },
    "dp_empathic-explorations_case-michael_10": {
      "text": "Jeg vil ikke bli som faren min.",
      "suggestion": "Det er reell frykt i ikke å ville bli som ham, og den ser ut til å ligge tett på når sinnet kommer opp."
    },
    "dp_empathic-explorations_case-jason_01": {
      "text": "Når det er min tur til å snakke, strammer halsen seg og hodet blir blankt.",
      "suggestion": "Den stramme halsen og blankheten kommer sammen, som om systemet ditt visker alt ut når oppmerksomheten vendes mot deg."
    },
    "dp_empathic-explorations_case-jason_02": {
      "text": "Jeg holder fingeren over «send» og sletter meldingene.",
      "suggestion": "Du blir stående der og ville rekke ut, og så strammer frykten til nok til at meldingen forsvinner."
    },
    "dp_empathic-explorations_case-jason_03": {
      "text": "Komplimenter fester seg ikke; jeg avfeier dem.",
      "suggestion": "Selv når vennlighet kommer inn, trer noe skeptisk fram og hindrer det i å lande."
    },
    "dp_empathic-explorations_case-jason_04": {
      "text": "Jeg unngår øyekontakt så folk ikke legger merke til meg.",
      "suggestion": "Blikket faller så raskt, som om det å bli sett bærer en fare kroppen din allerede kjenner."
    },
    "dp_empathic-explorations_case-jason_05": {
      "text": "Etter møter krymper jeg meg og spiller av små øyeblikk igjen og igjen.",
      "suggestion": "Krympingen blir hengende igjen, som om ett lite øyeblikk blir et bevis på noe smertefullt ved deg."
    },
    "dp_empathic-explorations_case-jason_06": {
      "text": "Når jeg går inn i et rom, ser jeg etter utgangen.",
      "suggestion": "Når du går inn i rommet, ser kroppen ut til å lete etter flukt før den kan lete etter kontakt."
    },
    "dp_empathic-explorations_case-jason_07": {
      "text": "Hendene svetter før jeg presenterer meg.",
      "suggestion": "Svetten ser ut til å fortelle hvor mye som står på spill i selv et enkelt hei."
    },
    "dp_empathic-explorations_case-jason_08": {
      "text": "Jeg sammenligner meg med alle der.",
      "suggestion": "Sammenligningen tar raskt over, og under den ligger den velkjente følelsen av ikke å være god nok."
    },
    "dp_empathic-explorations_case-jason_09": {
      "text": "Noen ganger later jeg som jeg tekster for å slippe småprat.",
      "suggestion": "Småprat høres enkelt ut, men for deg ser det ut til å åpne rett inn i frykten for å bli eksponert."
    },
    "dp_empathic-explorations_case-jason_10": {
      "text": "Søndagskveldene kjennes tunge, og jeg drøyer med å svare på meldinger fra venner.",
      "suggestion": "Søndagskveldene ser ut til å samle ensomhet og uro til én tung følelse."
    },
    "dp_empathic-explorations_case-laura_01": {
      "text": "De fleste dager føles flate, og når en følelse flimrer, stenger jeg den ned.",
      "suggestion": "Der er det svake flimret av følelse, og nesten idet det dukker opp, lukker noe i deg døra."
    },
    "dp_empathic-explorations_case-laura_02": {
      "text": "Hevede stemmer får magen til å falle, og skuldrene låser seg med en gang.",
      "suggestion": "Magefallet og spenningen kommer som én alarm, som om kroppen varsler at noe ikke er trygt."
    },
    "dp_empathic-explorations_case-laura_03": {
      "text": "Vennlighet får meg til å føle meg langt borte inni.",
      "suggestion": "Når vennlighet kommer nær, trer avstanden inn, nesten som om rom er det som gjør at du holder ut."
    },
    "dp_empathic-explorations_case-laura_04": {
      "text": "Jeg drikker vin om kvelden for å dempe støyen.",
      "suggestion": "Før vinen er det allerede noe inni som er støyende og vanskelig å roe."
    },
    "dp_empathic-explorations_case-laura_05": {
      "text": "Jeg våkner allerede anspent for dagen.",
      "suggestion": "Du våkner anspent, med kroppen allerede trukket sammen før dagen egentlig har begynt."
    },
    "dp_empathic-explorations_case-laura_06": {
      "text": "Berøring skremmer meg, selv når den er mild.",
      "suggestion": "Selv mild berøring ser ut til å ryste systemet, som om det venter smerte før trøst kan registreres."
    },
    "dp_empathic-explorations_case-laura_07": {
      "text": "Gode nyheter når ikke helt inn.",
      "suggestion": "Gode nyheter prøver å nå deg, men noe i deg slipper dem ikke helt inn."
    },
    "dp_empathic-explorations_case-laura_08": {
      "text": "Noen ganger sprekker noe opp i meg av musikk et lite øyeblikk.",
      "suggestion": "Når musikken sprekker noe opp, høres det ut som om en følelse har ventet like bak nummenheten."
    },
    "dp_empathic-explorations_case-laura_09": {
      "text": "Jeg kjenner skyld for å trenge trøst.",
      "suggestion": "Skylden kommer raskt rundt det å trenge trøst, og under den er det fortsatt et reelt behov for å bli holdt."
    },
    "dp_empathic-explorations_case-laura_10": {
      "text": "Jeg unngår filmer med slåssing fordi kroppen ikke tåler det.",
      "suggestion": "Kroppen din ser ut til å vite «for mye» før hodet gjør det, og trekker seg raskt unna."
    },
    "dp_empathic-explorations_case-carlos_01": {
      "text": "En bestemt tone får brystet til å bli varmt og knyttnevene til å knyte seg.",
      "suggestion": "Varmen og de knyttede nevene kommer fort, og hele reaksjonen ser ut til å samle seg rundt det første treffet på innsiden."
    },
    "dp_empathic-explorations_case-carlos_02": {
      "text": "Jeg går frem og tilbake for å brenne det av.",
      "suggestion": "Du går fram og tilbake som om kroppen prøver å løpe fra eller få ut noe som er for hett til å sitte med."
    },
    "dp_empathic-explorations_case-carlos_03": {
      "text": "Hvis jeg trekker meg, kjenner jeg at jeg forsvinner inni meg.",
      "suggestion": "Å trekke seg kjennes ikke bare ubehagelig; det ser ut til å berøre et sted som føles som ingenting."
    },
    "dp_empathic-explorations_case-carlos_04": {
      "text": "Sønnens sammenrykk går på repeat i hodet mitt.",
      "suggestion": "Ansiktet til gutten din blir værende i deg, og det finnes en smerte der som går dypere enn sinnet."
    },
    "dp_empathic-explorations_case-carlos_05": {
      "text": "Ro føles farlig, som å senke garden.",
      "suggestion": "Ro ser nesten ut til å gjøre deg ubeskyttet, med kroppen i beredskap så snart garden begynner å senke seg."
    },
    "dp_empathic-explorations_case-carlos_06": {
      "text": "Jeg ødelegger ting så jeg ikke ødelegger folk.",
      "suggestion": "Rett før du ødelegger noe, er det et glimt i deg som virker bent på å beskytte."
    },
    "dp_empathic-explorations_case-carlos_07": {
      "text": "Jeg stoler ikke på at det er trygt å være sårbar.",
      "suggestion": "Sårbarhet bærer en reell risiko for deg, nesten som om det ville gjøre deg åpen for å bli tatt ned."
    },
    "dp_empathic-explorations_case-carlos_08": {
      "text": "Respektløshet lander i meg som et slag i brystet.",
      "suggestion": "Respektløshet lander som et slag, og noe i deg vil at det skal bli kjent hvor hardt det treffer."
    },
    "dp_empathic-explorations_case-carlos_09": {
      "text": "Mer enn noe annet vil jeg at familien skal føle seg trygge rundt meg.",
      "suggestion": "Når du sier at du vil at de skal være trygge med deg, er det som om noe i deg mykner med en gang fordi dette betyr så mye for deg."
    },
    "dp_empathic-explorations_case-carlos_10": {
      "text": "Jeg lærte tidlig aldri å være den lille.",
      "suggestion": "Den gamle regelen om aldri å være den lille høres fortsatt levende ut inni deg."
    },
    "dp_empathic-explorations_case-nina_01": {
      "text": "I det øyeblikket jeg ber om hjelp, skyller skylden inn og jeg får lyst til å trekke det tilbake.",
      "suggestion": "Skylden kommer så raskt at det nesten er som om behovet må tas tilbake med en gang."
    },
    "dp_empathic-explorations_case-nina_02": {
      "text": "Jeg holder meg opptatt så jeg slipper å kjenne bitterhet eller tristhet.",
      "suggestion": "Travleheten ser ut til å holde lokk på bitterhet og tristhet som venter under."
    },
    "dp_empathic-explorations_case-nina_03": {
      "text": "Når jeg sier nei, knyter magen seg med en gang.",
      "suggestion": "Den knuten i magen ser ut til å bære frykten for hva et nei kan koste deg."
    },
    "dp_empathic-explorations_case-nina_04": {
      "text": "Selv den minste forespørselen kommer ut pakket inn i en unnskyldning.",
      "suggestion": "Selv en liten forespørsel blir fulgt av en unnskyldning, som om det å spørre i seg selv er farlig."
    },
    "dp_empathic-explorations_case-nina_05": {
      "text": "Hvis huset er rotete, føler jeg meg mislykket.",
      "suggestion": "Rotet ser ikke bare rotete ut; det ser ut til å bli en dom over deg."
    },
    "dp_empathic-explorations_case-nina_06": {
      "text": "Når jeg blir overveldet, blir det til hodepine.",
      "suggestion": "Kroppen din kan se ut til å registrere overveldelsen før hodet gjør det, og hodepinen bærer lasten."
    },
    "dp_empathic-explorations_case-nina_07": {
      "text": "Jeg drømmer om å bli tatt vare på, og så skammer jeg meg for at jeg vil det.",
      "suggestion": "Ønsket om å bli tatt vare på er der, og nesten rett ved siden av kommer skammen over å ønske det."
    },
    "dp_empathic-explorations_case-nina_08": {
      "text": "Jeg tar på meg alt så ingen blir skuffet over meg.",
      "suggestion": "Du bærer så mye for at ingen skal bli skuffet, og belastningen av det viser seg i kroppen."
    },
    "dp_empathic-explorations_case-nina_09": {
      "text": "Jeg sammenligner meg med andre mødre, og jeg krymper inni meg.",
      "suggestion": "Sammenligning krymper deg raskt og treffer det lille ikke-god-nok-stedet."
    },
    "dp_empathic-explorations_case-nina_10": {
      "text": "Om kvelden krasjer jeg etter å ha holdt alt sammen hele dagen.",
      "suggestion": "Om kvelden, når det å holde seg sammen stopper, ser følelsene endelig ut til å komme fram."
    },
    "dp_empathic-explorations_case-aisha_01": {
      "text": "Hvis et svar ikke kommer, kjennes det som om det åpner seg et hull i brystet, og jeg får ikke puste.",
      "suggestion": "Når svaret ikke kommer, er det som om det åpner seg et hull i brystet og alt i deg begynner å falle."
    },
    "dp_empathic-explorations_case-aisha_02": {
      "text": "Jeg går fra «ikke forlat meg» til «la meg være i fred» på sekunder.",
      "suggestion": "Svingningen går så fort, nesten som om frykten for å miste noen vipper rett over i å skyve dem bort."
    },
    "dp_empathic-explorations_case-aisha_03": {
      "text": "Noen ganger klorer jeg meg selv for å kjenne noe som er virkelig.",
      "suggestion": "Trangen til å klore ser ut til å komme når tomheten blir nesten uutholdelig og du trenger noe virkelig for å bryte gjennom."
    },
    "dp_empathic-explorations_case-aisha_04": {
      "text": "I det øyeblikket du ser bort, føles det som om jeg blir sluppet.",
      "suggestion": "Følelsen av å bli sluppet kommer på én gang, som om hele kroppen vet det før ordene kommer."
    },
    "dp_empathic-explorations_case-aisha_05": {
      "text": "Jeg tester folk fordi jeg må vite om de bryr seg nok til å bli.",
      "suggestion": "Å teste folk kjennes som en desperat måte å sjekke om du betyr nok til at de blir."
    },
    "dp_empathic-explorations_case-aisha_06": {
      "text": "Farvel får rommet til å tippe.",
      "suggestion": "Farvel treffer så hardt at kroppen snurrer, som om adskillelse i seg selv blir desorienterende."
    },
    "dp_empathic-explorations_case-aisha_07": {
      "text": "Vennlighet får meg til å hulke, og en annen del av meg vil bare stikke.",
      "suggestion": "Vennlighet berører begge stedene samtidig, delen som sulter etter den, og delen som vil løpe."
    },
    "dp_empathic-explorations_case-aisha_08": {
      "text": "Det som ble gjort mot meg får meg til å føle meg skitten i min egen kropp.",
      "suggestion": "Den skitne følelsen høres ut som noe du bærer i kroppen fra det som ble gjort mot deg."
    },
    "dp_empathic-explorations_case-aisha_09": {
      "text": "Jeg stirrer på døra for å være sikker på at du ikke avslutter tidlig.",
      "suggestion": "Øynene dine holder vakt ved døra, som om det å slappe av bare et sekund kunne bety å bli forlatt."
    },
    "dp_empathic-explorations_case-aisha_10": {
      "text": "Hvis du avlyser, er det noe i meg som aldri vil komme tilbake.",
      "suggestion": "En avlysning kjennes ikke liten i det hele tatt; den lander som en skarp bekreftelse på at du kan bli droppet."
    },
    "dp_empathic-explorations_case-david_01": {
      "text": "Når hun sier at jeg er kald, brenner det i ansiktet og brystet blir hardt.",
      "suggestion": "Når «kald» lander, kommer det harde brystet og det brennende ansiktet inn med en gang, og alt i deg ser ut til å låse seg."
    },
    "dp_empathic-explorations_case-david_02": {
      "text": "Hvis jeg ikke er best, føler jeg meg tom.",
      "suggestion": "Hvis du ikke er best, er det det hule stedet, og det ser ut til å tappe styrken rett ut av deg."
    },
    "dp_empathic-explorations_case-david_03": {
      "text": "Når jeg føler meg dømt, glatter jeg skjorten og begynner å ramse opp prestasjoner.",
      "suggestion": "Å rette seg opp og ramse opp prestasjoner kjennes som å ta på rustning mot skam."
    },
    "dp_empathic-explorations_case-david_04": {
      "text": "Ros føles godt, men renner ut igjen.",
      "suggestion": "Ros kommer inn, men den ser ut til å være vanskelig å holde fast på, som om den ikke når delen som tviler."
    },
    "dp_empathic-explorations_case-david_05": {
      "text": "Jeg sjekker telefonen i vanskelige samtaler.",
      "suggestion": "Blikket mot telefonen kjennes som en rask utgang når nærhet eller kritikk begynner å svi."
    },
    "dp_empathic-explorations_case-david_06": {
      "text": "Når barna gråter, blir jeg utålmodig før jeg engang skjønner hvorfor.",
      "suggestion": "Barnas tårer ser ut til å vekke noe i deg som er vanskelig å bære, og utålmodigheten kommer raskt."
    },
    "dp_empathic-explorations_case-david_07": {
      "text": "Å innrømme at jeg tar feil får ansiktet til å brenne.",
      "suggestion": "Den brennende følelsen kommer fort når du tar feil, og det er som om du plutselig står helt blottlagt."
    },
    "dp_empathic-explorations_case-david_08": {
      "text": "Siden affæren føles nettene matte, flate og tunge.",
      "suggestion": "Nettene kjennes matte, flate og tunge, og den tyngden ser ut til å legge seg over alt når dagen stilner."
    },
    "dp_empathic-explorations_case-david_09": {
      "text": "Jeg vil at folk skal legge merke til og anerkjenne det jeg gjør.",
      "suggestion": "Ønsket om anerkjennelse ser ut til å bære en sult etter å bli sett og vite at du betyr noe."
    },
    "dp_empathic-explorations_case-david_10": {
      "text": "Tanken på å være ordinær kjennes uutholdelig for meg.",
      "suggestion": "«Ordinær» høres ut som et ladet ord for deg, som om det river bort følelsen av verdi i samme øyeblikk."
    },
    "dp_empathic-explorations_case-marcus_01": {
      "text": "De fleste dager er jeg nummen, og så treffer en bølge helt ut av det blå.",
      "suggestion": "De fleste dager holder nummenheten stand, og så kommer bølgen som om følelsen bryter gjennom på én gang."
    },
    "dp_empathic-explorations_case-marcus_02": {
      "text": "Mareritt river meg våken, og etterpå føler jeg meg både oppskrudd og hul.",
      "suggestion": "Oppskrudd og tom står side om side, kroppen på vakt mens alt annet føles langt unna."
    },
    "dp_empathic-explorations_case-marcus_03": {
      "text": "Folkemengder gjør meg spent, så jeg holder meg i utkanten.",
      "suggestion": "I folkemengder flytter kroppen seg raskt mot kanten, som om nærhet og eksponering blir for mye."
    },
    "dp_empathic-explorations_case-marcus_04": {
      "text": "Stillheten i leiligheten kjennes tung.",
      "suggestion": "Den tunge stillheten ser ut til å legge seg rett over deg, nesten som om rommet fylles av det som er holdt tilbake."
    },
    "dp_empathic-explorations_case-marcus_05": {
      "text": "Etter jobb sitter jeg i bilen og utsetter å gå opp.",
      "suggestion": "Det å sitte i bilen kjennes som en pause før du møter det som venter der oppe."
    },
    "dp_empathic-explorations_case-marcus_06": {
      "text": "Jeg har lyset dempet og unngår telefoner.",
      "suggestion": "Det dempede lyset og de ubesvarte telefonene ser ut til å hjelpe med å holde verden på avstand."
    },
    "dp_empathic-explorations_case-marcus_07": {
      "text": "Gode øyeblikk kjennes uvirkelige, som om de er bak glass.",
      "suggestion": "Gode øyeblikk er der, men de blir bak glass, ikke helt nær nok til å kjennes virkelige."
    },
    "dp_empathic-explorations_case-marcus_08": {
      "text": "En plutselig lyd skyter gjennom meg, og jeg skvetter.",
      "suggestion": "Skvettingen kommer med en gang, og det ser ut til at kroppen fortsatt venter trussel før hodet rekker å følge med."
    },
    "dp_empathic-explorations_case-marcus_09": {
      "text": "Jeg tar ikke telefonen når familien ringer, fordi jeg ikke vil kjenne på noe.",
      "suggestion": "Å ikke svare familien ser ut til å være en måte å hindre smertefulle følelser i å bli satt i gang."
    },
    "dp_empathic-explorations_case-marcus_10": {
      "text": "En del av meg tror at jeg har det best alene for alltid.",
      "suggestion": "Delen som sier at alene er best høres beskyttende ut, som om den prøver hardt å hindre at du blir såret igjen."
    },
    "dp_empathic-evocations_case-sara_01": {
      "text": "Kveldene blir lange, og leiligheten føles for stor når jeg er alene.",
      "suggestion": "Nettene blir lange, og rommene kjennes for store – med ekko av ensomhet."
    },
    "dp_empathic-evocations_case-sara_02": {
      "text": "Jeg holder den muntre stemmen gående, men under kjennes brystet hult.",
      "suggestion": "En lys stemme lagt over et hult bryst, som et smil over en vond klump i brystet."
    },
    "dp_empathic-evocations_case-sara_03": {
      "text": "Å se jakken hans i skapet treffer meg som en bølge.",
      "suggestion": "Det skyller inn som en bølge idet blikket ditt fanger jakken."
    },
    "dp_empathic-evocations_case-sara_04": {
      "text": "Jeg våkner og glemmer det et sekund, så smeller det tilbake.",
      "suggestion": "Det ene lyse sekundet, og så slår tyngden igjen som en dør."
    },
    "dp_empathic-evocations_case-sara_05": {
      "text": "Når venner spør, avfeier jeg det, men halsen strammer seg.",
      "suggestion": "Et uanstrengt skuldertrekk utenpå, mens halsen snører seg inni."
    },
    "dp_empathic-evocations_case-sara_06": {
      "text": "Jeg scroller sent på kvelden til øynene brenner.",
      "suggestion": "Sene kvelder med skrolling – øyne som brenner mens du prøver å løpe fra smerten."
    },
    "dp_empathic-evocations_case-sara_07": {
      "text": "Å høre sangen vår i en butikk gjorde knærne svake.",
      "suggestion": "De første tonene tar beina under deg."
    },
    "dp_empathic-evocations_case-sara_08": {
      "text": "Jeg tenker stadig at hvis jeg var annerledes, ville jeg ikke vært alene.",
      "suggestion": "Det lander som en dom over verdien din – tung og ubarmhjertig."
    },
    "dp_empathic-evocations_case-sara_09": {
      "text": "Noen ganger sitter jeg på gulvet og holder rundt knærne bare for å føle meg holdt.",
      "suggestion": "Krøllet rundt deg selv, en liten sirkel av varme i et kaldt rom."
    },
    "dp_empathic-evocations_case-sara_10": {
      "text": "Når du er snill mot meg, får jeg lyst til å se bort.",
      "suggestion": "Vennlighet kjennes nesten for sterk, og du vender blikket bort fra lyset."
    },
    "dp_empathic-evocations_case-michael_01": {
      "text": "En korrigering foran teamet får ansiktet til å brenne.",
      "suggestion": "Ansiktet brenner hett, som om alle blikk er et søkelys på en feil."
    },
    "dp_empathic-evocations_case-michael_02": {
      "text": "Jeg går inn allerede anspent, klar for at noen skal gjøre en feil.",
      "suggestion": "Du går over terskelen i rustning, med kjeven stram, og skanner etter neste treff."
    },
    "dp_empathic-evocations_case-michael_03": {
      "text": "Kjeven verker av all spenningen før dagen er over.",
      "suggestion": "Verken i kjeven forteller hvor hardt du har bitt det som gjør vondt i deg."
    },
    "dp_empathic-evocations_case-michael_04": {
      "text": "Jeg smeller, og så henger skammen som en vekt.",
      "suggestion": "Skammen legger seg på deg som en tung frakk du ikke får av."
    },
    "dp_empathic-evocations_case-michael_05": {
      "text": "Når kona sukker, kjennes det som en lusing.",
      "suggestion": "Et lite sukk som lander som et sviende slag over brystet."
    },
    "dp_empathic-evocations_case-michael_06": {
      "text": "Jeg hører «ro deg ned», og noe eksploderer i meg.",
      "suggestion": "De ordene antenner en flamme som skyter opp før du rekker å få tak i den igjen."
    },
    "dp_empathic-evocations_case-michael_07": {
      "text": "Hvis jeg ikke vet svaret, synker magen.",
      "suggestion": "Å ikke vite sender magen i fritt fall – som en heis som stuper."
    },
    "dp_empathic-evocations_case-michael_08": {
      "text": "Jeg smeller igjen dører fordi det føles bedre enn å la meg kjenne meg liten.",
      "suggestion": "Det store smellet er der for å dekke over det lille stikket inni."
    },
    "dp_empathic-evocations_case-michael_09": {
      "text": "Å be om unnskyldning smaker av rust i munnen.",
      "suggestion": "En unnskyldning smaker metallisk og bittert på tungen."
    },
    "dp_empathic-evocations_case-michael_10": {
      "text": "Om natten spiller jeg det av igjen, og jeg klarer ikke å løsne.",
      "suggestion": "Du ligger stram som en streng og spiller scenen i en løkke som ikke stopper."
    },
    "dp_empathic-evocations_case-jason_01": {
      "text": "Når det er min tur, høres navnet mitt fjernt ut, og leppene blir numne.",
      "suggestion": "Idet navnet lander, blir leppene numne og rommet trekker seg unna."
    },
    "dp_empathic-evocations_case-jason_02": {
      "text": "Hendene svetter så mye at jeg gjemmer dem under bordet.",
      "suggestion": "Svette hender gjemt bort, som om du prøver å gjøre deg mindre."
    },
    "dp_empathic-evocations_case-jason_03": {
      "text": "Jeg øver foran speilet og fryser likevel.",
      "suggestion": "All øving, og så fryser du til – som om du blir til is."
    },
    "dp_empathic-evocations_case-jason_04": {
      "text": "Hvis noen ler, rykker magen til.",
      "suggestion": "En latter i nærheten rykker til i magen som et kort elektrisk støt."
    },
    "dp_empathic-evocations_case-jason_05": {
      "text": "Jeg krymper meg i stolen når søkelyset nærmer seg.",
      "suggestion": "Du folder deg innover idet søkelyset sveiper mot deg."
    },
    "dp_empathic-evocations_case-jason_06": {
      "text": "Komplimenter glir av; jeg får ikke tak i dem.",
      "suggestion": "Ros glir rett av som regn på glass."
    },
    "dp_empathic-evocations_case-jason_07": {
      "text": "På søndagskvelder kjennes rommet grått og for stille.",
      "suggestion": "En grå stillhet siger inn og legger seg over alt."
    },
    "dp_empathic-evocations_case-jason_08": {
      "text": "Når jeg sender meldinger, skriver og sletter jeg til fingrene verker.",
      "suggestion": "Skriving og sletting, verkende fingre, mens uroen går i ring."
    },
    "dp_empathic-evocations_case-jason_09": {
      "text": "Stemmen skjelver allerede ved «hei».",
      "suggestion": "Selv et «hei» kommer ut på en skjelvende tråd."
    },
    "dp_empathic-evocations_case-jason_10": {
      "text": "Jeg stirrer på utgangen som en livline.",
      "suggestion": "Døra kjennes som en livline blikket ditt klamrer seg til."
    },
    "dp_empathic-evocations_case-laura_01": {
      "text": "De fleste morgener føles flate, som om fargene er vasket ut.",
      "suggestion": "Alt går i utvaskede toner, som om fargene er tappet ut."
    },
    "dp_empathic-evocations_case-laura_02": {
      "text": "En dør som smeller får huden min til å bli kald.",
      "suggestion": "Lyden sender en kald bølge over huden."
    },
    "dp_empathic-evocations_case-laura_03": {
      "text": "Når noen sitter tett på, trekker jeg meg et par skritt tilbake inni meg.",
      "suggestion": "Du glir bak en glassrute inne i deg."
    },
    "dp_empathic-evocations_case-laura_04": {
      "text": "Jeg glemmer hvordan glede kjennes i kroppen.",
      "suggestion": "Glede er som et fjernt minne kroppen ikke helt når."
    },
    "dp_empathic-evocations_case-laura_05": {
      "text": "Vinen hjelper meg å skru av støyen.",
      "suggestion": "Vinen slår av en bryter og demper hele rommet på innsiden."
    },
    "dp_empathic-evocations_case-laura_06": {
      "text": "Jeg ligger våken og føler at jeg står vakt.",
      "suggestion": "På vakt selv i senga, kroppen utplassert ved døra."
    },
    "dp_empathic-evocations_case-laura_07": {
      "text": "Noen ganger åpner en trist sang noe i meg et øyeblikk.",
      "suggestion": "En tone slipper inn, og en liten sprekk åpner seg i nummenheten."
    },
    "dp_empathic-evocations_case-laura_08": {
      "text": "Jeg går mellom hyllene bare for å slippe å dra hjem.",
      "suggestion": "Vandrer mellom hyllene som i et trygt, nøytralt rom."
    },
    "dp_empathic-evocations_case-laura_09": {
      "text": "Vennlige ord får halsen til å verke.",
      "suggestion": "Varmen stryker så vidt borti deg, og halsen verker av berøringen."
    },
    "dp_empathic-evocations_case-laura_10": {
      "text": "Jeg har en liten bag pakket – bare i tilfelle.",
      "suggestion": "En bag ved døra, som om kroppen aldri helt går av vakt."
    },
    "dp_empathic-evocations_case-carlos_01": {
      "text": "Et skjevt glis over bordet får hendene til å dirre.",
      "suggestion": "Det gliset setter strøm i hendene, som om de var strømførende ledninger."
    },
    "dp_empathic-evocations_case-carlos_02": {
      "text": "Brystet kjennes stramt som et trommeskinn før det sprekker.",
      "suggestion": "Stramt som et trommeskinn spent til bristepunktet."
    },
    "dp_empathic-evocations_case-carlos_03": {
      "text": "Jeg går frem og tilbake på kjøkkenet for å brenne det av.",
      "suggestion": "Du går harde runder på kjøkkenet, prøver å riste varmen ut."
    },
    "dp_empathic-evocations_case-carlos_04": {
      "text": "Da jeg så redselen i blikket til gutten min, slo det hull i meg.",
      "suggestion": "Det redde ansiktet hans slo et hull rett gjennom deg."
    },
    "dp_empathic-evocations_case-carlos_05": {
      "text": "Rolige folk ser myke ut for meg.",
      "suggestion": "Ro leses som mykhet – som å stå uten rustning – farlig i din verden."
    },
    "dp_empathic-evocations_case-carlos_06": {
      "text": "Etter at jeg smeller, kjennes rommet mindre.",
      "suggestion": "Etter smellet kjennes huset lite og luftløst."
    },
    "dp_empathic-evocations_case-carlos_07": {
      "text": "Jeg biter tennene så hardt at hodet dunker.",
      "suggestion": "Tennene låst så stramt at smerten trommer i tinningene."
    },
    "dp_empathic-evocations_case-carlos_08": {
      "text": "Hvis jeg trekker meg, føles det som jeg forsvinner.",
      "suggestion": "Å trekke seg kjennes som å blekne ut, miste konturene."
    },
    "dp_empathic-evocations_case-carlos_09": {
      "text": "Jeg klemmer rundt rattet til knokene blir hvite.",
      "suggestion": "Hvite knoker på rattet – holder deg selv samlet."
    },
    "dp_empathic-evocations_case-carlos_10": {
      "text": "Jeg vil ikke at barnet mitt skal huske meg sånn.",
      "suggestion": "Du kjenner verken – som et blåmerke – ønsket om å være en tryggere mann i øynene hans."
    },
    "dp_empathic-evocations_case-nina_01": {
      "text": "Skylden slår til idet jeg setter meg ned.",
      "suggestion": "Den slår til som et støt idet du endelig hviler."
    },
    "dp_empathic-evocations_case-nina_02": {
      "text": "Det er som om jeg bærer alles poser – og mine egne.",
      "suggestion": "Armer fulle av alles poser, skuldrene brenner."
    },
    "dp_empathic-evocations_case-nina_03": {
      "text": "Magen vrir seg når jeg ber om hjelp.",
      "suggestion": "Å be om hjelp vrir magen i en stram knute."
    },
    "dp_empathic-evocations_case-nina_04": {
      "text": "Jeg smiler gjennom hodepine og fortsetter å gå.",
      "suggestion": "Et smil strukket over et dunkende hode mens du bare holder det gående."
    },
    "dp_empathic-evocations_case-nina_05": {
      "text": "Utover kvelden kjennes kroppen tung helt inn i knoklene.",
      "suggestion": "Kroppen kjennes tung, som å vasse i våt betong."
    },
    "dp_empathic-evocations_case-nina_06": {
      "text": "Når jeg sier nei, banker hjertet som om jeg har gjort noe galt.",
      "suggestion": "Et bankende hjerte – som en alarm bare for å ha sagt nei."
    },
    "dp_empathic-evocations_case-nina_07": {
      "text": "Jeg tørker av benken ved midnatt fordi jeg ikke får ro.",
      "suggestion": "Midnattsvasking – som om en ren benk kunne stilne støyen."
    },
    "dp_empathic-evocations_case-nina_08": {
      "text": "Hvis huset er rotete, kryper skammen oppover halsen.",
      "suggestion": "Skammen kryper varmt oppover halsen bare av å se en tallerken stå framme."
    },
    "dp_empathic-evocations_case-nina_09": {
      "text": "Jeg gråter stille i spiskammeret så ingen hører.",
      "suggestion": "Tårer gjemt i spiskammeret, dempet bak en dør."
    },
    "dp_empathic-evocations_case-nina_10": {
      "text": "Noen ganger drømmer jeg om en dag uten å gjøre noe – uten dårlig samvittighet.",
      "suggestion": "Du ser for deg en myk dag uten gjøremål, og kroppen løsner bare av tanken."
    },
    "dp_empathic-evocations_case-aisha_01": {
      "text": "Når du ser på klokka, synker magen.",
      "suggestion": "Ett blikk på klokka, og magen synker helt ned."
    },
    "dp_empathic-evocations_case-aisha_02": {
      "text": "Jeg går fra «ikke gå» til «la meg være i fred» på sekunder.",
      "suggestion": "Det snur som en bryter – fra bønn til brann i et blunk."
    },
    "dp_empathic-evocations_case-aisha_03": {
      "text": "Tomheten brenner som et hull i brystet.",
      "suggestion": "Et brennende hull i brystet som kjennes bunnløst."
    },
    "dp_empathic-evocations_case-aisha_04": {
      "text": "Jeg klorer meg i huden for å kjenne noe virkelig.",
      "suggestion": "Klorer for å finne noe virkelig gjennom nummenheten og smerten."
    },
    "dp_empathic-evocations_case-aisha_05": {
      "text": "Hvis de tre prikkene dukker opp og så forsvinner, får jeg ikke puste.",
      "suggestion": "De tre prikkene forsvinner – og pusten låser seg."
    },
    "dp_empathic-evocations_case-aisha_06": {
      "text": "Et farvel gjør meg svimmel.",
      "suggestion": "Et farvel får rommet til å tippe og spinne."
    },
    "dp_empathic-evocations_case-aisha_07": {
      "text": "Når du avlyser, føles det som om gulvet åpner seg.",
      "suggestion": "En avlysning, og gulvet åpner seg under deg."
    },
    "dp_empathic-evocations_case-aisha_08": {
      "text": "Jeg hører «for mye» i hodet som et stempel.",
      "suggestion": "Det er som om ordene «for mye» treffer deg som et hardt stempel midt i brystet."
    },
    "dp_empathic-evocations_case-aisha_09": {
      "text": "Varmen får tårene til å renne uten forvarsel.",
      "suggestion": "Litt varme – og tårene renner som et plutselig regn."
    },
    "dp_empathic-evocations_case-aisha_10": {
      "text": "Jeg stirrer på døra for å være sikker på at du fortsatt er her.",
      "suggestion": "Øynene låst på døra – vokter mot at du skal forsvinne."
    },
    "dp_empathic-evocations_case-david_01": {
      "text": "Når hun kaller meg kald, blir kjeven steinhard.",
      "suggestion": "Kjeven blir som stein mens ordet «kald» brenner seg fast."
    },
    "dp_empathic-evocations_case-david_02": {
      "text": "Hvis jeg ikke vinner, føles brystet hult.",
      "suggestion": "Uten seieren kjennes brystet som et tomt rom."
    },
    "dp_empathic-evocations_case-david_03": {
      "text": "Jeg blåser meg opp når jeg føler meg liten.",
      "suggestion": "Du blåser deg stor for å dekke det lille stikket inni."
    },
    "dp_empathic-evocations_case-david_04": {
      "text": "Jeg glatter skjorta og ramser opp prestasjonene når jeg føler meg presset opp i et hjørne.",
      "suggestion": "Du retter på skjorta og lister opp prestasjonene, som om du spenner på deg rustning før slaget treffer."
    },
    "dp_empathic-evocations_case-david_05": {
      "text": "Ros kjennes godt et øyeblikk, og så renner det ut igjen.",
      "suggestion": "Beundring fyller deg et øyeblikk, og så renner det ut igjen som vann gjennom en sil."
    },
    "dp_empathic-evocations_case-david_06": {
      "text": "Jeg hater blikket i barnas ansikter når jeg smeller.",
      "suggestion": "Det blikket treffer som et slag du skulle ønske du kunne ta tilbake."
    },
    "dp_empathic-evocations_case-david_07": {
      "text": "Jeg melder meg ut av vanskelige samtaler ved å se på telefonen.",
      "suggestion": "Øynene faller til skjermen som et skjold jeg kan gjemme meg bak."
    },
    "dp_empathic-evocations_case-david_08": {
      "text": "Å si «jeg tar feil» får ansiktet til å brenne.",
      "suggestion": "Bare det å si «jeg tar feil» får ansiktet til å brenne, som om du plutselig står helt blottlagt."
    },
    "dp_empathic-evocations_case-david_09": {
      "text": "Jeg går rundt i huset om natta når jeg føler meg dømt.",
      "suggestion": "Nattlig vandring – prøver å gå av deg stikket fra blikkene og dommen."
    },
    "dp_empathic-evocations_case-david_10": {
      "text": "Etter affæren kjennes huset kaldere.",
      "suggestion": "Huset kjennes kaldere, som om varmen snek seg ut gjennom en sprekk."
    },
    "dp_empathic-evocations_case-marcus_01": {
      "text": "Jeg beveger meg gjennom dagen som et spøkelse.",
      "suggestion": "Det er som om du går gjennom dagen som et spøkelse, nesten ikke helt til stede."
    },
    "dp_empathic-evocations_case-marcus_02": {
      "text": "Folkemengder får skuldrene opp til ørene.",
      "suggestion": "Skuldre som klatrer opp mot ørene, muskler på vakt."
    },
    "dp_empathic-evocations_case-marcus_03": {
      "text": "Jeg sitter med ryggen mot veggen.",
      "suggestion": "Rygg mot vegg, øynene skanner utganger."
    },
    "dp_empathic-evocations_case-marcus_04": {
      "text": "Mareritt røsker meg våken og etterlater meg summende.",
      "suggestion": "Dratt ut av søvnen, summende i kroppen som om det går strøm i deg."
    },
    "dp_empathic-evocations_case-marcus_05": {
      "text": "Stillheten hjemme kjennes som en vekt på brystet.",
      "suggestion": "Stillheten presser på brystet som en tung plate."
    },
    "dp_empathic-evocations_case-marcus_06": {
      "text": "Gode øyeblikk føles langt borte, som bak glass.",
      "suggestion": "Det gode bak glass – nært, men utilgjengelig."
    },
    "dp_empathic-evocations_case-marcus_07": {
      "text": "Jeg holder lyset lavt så jeg slipper å se så mye.",
      "suggestion": "Dempet lys – holder verden myk og på avstand."
    },
    "dp_empathic-evocations_case-marcus_08": {
      "text": "Hvis noen banker på, hamrer hjertet.",
      "suggestion": "Et bank på døra, og hjertet hamrer hardt."
    },
    "dp_empathic-evocations_case-marcus_09": {
      "text": "Jeg holder pusten når jeg snakker om det.",
      "suggestion": "Holder pusten som om lufta kunne slippe smerten inn."
    },
    "dp_empathic-evocations_case-marcus_10": {
      "text": "Noen netter sitter jeg i bilen så jeg slipper å gå opp.",
      "suggestion": "Noen netter kjennes bilen som et slags ly for noen minutter til før du går opp til den tomme leiligheten."
    },
    "dp_empathic-conjectures_case-sara_01": {
      "text": "Jeg sier hele tiden til vennene mine at det går bra, så de ikke skal bekymre seg.",
      "suggestion": "Du prøver å skåne dem; jeg lurer på om en del også frykter at det å trenge dem betyr at du er for mye – eller ikke verdt å bli der for."
    },
    "dp_empathic-conjectures_case-sara_02": {
      "text": "Jeg kastet meg inn i jobben for å slippe å tenke på ham.",
      "suggestion": "Du holder deg opptatt for å klare deg; kanskje ligger det under en frykt for at stillheten skal bekrefte at du ikke var verdt å bli hos."
    },
    "dp_empathic-conjectures_case-sara_03": {
      "text": "Jeg føler meg dum for at jeg fortsatt gråter flere måneder etterpå.",
      "suggestion": "Du blir frustrert over tårene; jeg gjetter at det også kan ligge skam i det å trenge noen – og å bli sett."
    },
    "dp_empathic-conjectures_case-sara_04": {
      "text": "Når noen spør hvordan jeg har det, smiler jeg og skifter tema.",
      "suggestion": "Du trekker deg raskt unna; kan det være at det også finnes en øm lengsel etter å bli valgt, som er vanskelig å vise?"
    },
    "dp_empathic-conjectures_case-sara_05": {
      "text": "Når jeg ser par, himler jeg med øynene og sier til meg selv at kjærlighet er oppskrytt.",
      "suggestion": "Du skyver det unna; jeg lurer på om det bak himlingen ligger en verkende lengsel etter nærhet."
    },
    "dp_empathic-conjectures_case-sara_06": {
      "text": "Jeg sluttet å følge ham og sjekket så fra en venns telefon.",
      "suggestion": "Du prøver både å beskytte deg og å strekke deg mot ham; kanskje er det en kamp i deg mellom selvbeskyttelse og håp."
    },
    "dp_empathic-conjectures_case-sara_07": {
      "text": "Jeg sier til meg selv at andre har ekte problemer, så jeg burde være takknemlig.",
      "suggestion": "Du nedtoner smerten; jeg gjetter at en redd del frykter å bli avfeid hvis du lar det synes."
    },
    "dp_empathic-conjectures_case-sara_08": {
      "text": "Jeg var nær ved å sende ham «unnskyld», selv om jeg ikke gjorde noe galt.",
      "suggestion": "Du strekker deg for å reparere; kan det være at du prøver å dysse ned en skamfølelse som sier at det må være din skyld?"
    },
    "dp_empathic-conjectures_case-sara_09": {
      "text": "Nettene er verst; jeg spiller om igjen hva jeg gjorde feil.",
      "suggestion": "Jeg lurer på om all den gjennomspillingen prøver å beskytte deg mot en enda mer smertefull følelse under, kanskje at du ikke var verdt å bli hos."
    },
    "dp_empathic-conjectures_case-sara_10": {
      "text": "Når du er snill mot meg, ser jeg ned og vil bytte tema.",
      "suggestion": "Vennlighet lander sterkt; kanskje lengter en del etter den, mens en annen forventer at den forsvinner."
    },
    "dp_empathic-conjectures_case-michael_01": {
      "text": "Hvis noen setter spørsmålstegn ved meg i et møte, biter jeg tilbake.",
      "suggestion": "Du kommer inn hardt; jeg lurer på om det ligger et stikk under varmen – en følelse av å bli sett som ikke bra nok."
    },
    "dp_empathic-conjectures_case-michael_02": {
      "text": "Jeg tåler ikke å bli rettet på foran andre.",
      "suggestion": "Det treffer hardt; kanskje er det et glimt av ydmykelse som sinnet legger lokk på."
    },
    "dp_empathic-conjectures_case-michael_03": {
      "text": "Kona sier jeg er hard; jeg kaller det bare ærlighet.",
      "suggestion": "Du verdsetter rett‑på‑sak; jeg gjetter at det også finnes en frykt for å bli sett som svak hvis du mykner."
    },
    "dp_empathic-conjectures_case-michael_04": {
      "text": "Jeg sørger for at ingen har noe å bruke mot meg.",
      "suggestion": "Du beskytter posisjonen din; kan det være en uro for å havne én‑ned slik som før?"
    },
    "dp_empathic-conjectures_case-michael_05": {
      "text": "Å be om unnskyldning kjennes som å gi fra seg terreng.",
      "suggestion": "Det kjennes risikabelt; jeg lurer på om det berører et lite, skamfullt sted du helst vil skjule."
    },
    "dp_empathic-conjectures_case-michael_06": {
      "text": "Jeg hater å miste kontroll.",
      "suggestion": "Kontroll betyr mye; kanskje ligger det under en frykt for at feil beviser noe dårlig om deg."
    },
    "dp_empathic-conjectures_case-michael_07": {
      "text": "Jeg dobbeltsjekker alles arbeid så jeg ikke blir tatt på senga.",
      "suggestion": "Du forutser trusler; jeg gjetter at en del forventer å få skylden."
    },
    "dp_empathic-conjectures_case-michael_08": {
      "text": "Etter at jeg eksploderer, unngår jeg blikket til barnet mitt.",
      "suggestion": "Du kjenner tyngden; kan det være skam som gjør det vanskelig å se barnet ditt i øynene?"
    },
    "dp_empathic-conjectures_case-michael_09": {
      "text": "Når noen sier «ro deg ned», ser jeg rødt.",
      "suggestion": "Det treffer hardt; jeg lurer på om det lander som å bli avfeid eller gjort liten."
    },
    "dp_empathic-conjectures_case-michael_10": {
      "text": "Jeg driver ikke med følelser. Jeg driver med løsninger.",
      "suggestion": "Du lener deg på å fikse; kanskje følelser kjennes som feller som kan blottlegge et sårt sted."
    },
    "dp_empathic-conjectures_case-jason_01": {
      "text": "Jeg øver på hva jeg skal si, og blir likevel blank.",
      "suggestion": "Du forbereder deg så hardt; jeg lurer på om blankheten prøver å beskytte deg mot skammen ved å bli blottstilt."
    },
    "dp_empathic-conjectures_case-jason_02": {
      "text": "Jeg later som jeg er opptatt når jeg blir invitert.",
      "suggestion": "Du unngår; kanskje finnes det en del i deg som forventer å bli dømt eller oversett."
    },
    "dp_empathic-conjectures_case-jason_03": {
      "text": "Jeg hører en stemme som sier «ikke dum deg ut».",
      "suggestion": "Du hører kritikeren; jeg gjetter at den prøver å beskytte deg mot å føle deg liten."
    },
    "dp_empathic-conjectures_case-jason_04": {
      "text": "Etter at jeg har snakket, krymper jeg meg i timevis.",
      "suggestion": "Jeg lurer på om det, etter all krympingen, også ligger den smertefulle følelsen der at hvis folk virkelig så deg, ville de ikke ha deg."
    },
    "dp_empathic-conjectures_case-jason_05": {
      "text": "Komplimenter føles falske for meg.",
      "suggestion": "De preller av; jeg lurer på om det er vanskelig å slippe inn varme fordi det ikke passer med det gamle bildet av deg selv."
    },
    "dp_empathic-conjectures_case-jason_06": {
      "text": "Å se selvsikre mennesker får meg til å ville forsvinne.",
      "suggestion": "Du krymper; kanskje er det både misunnelse og sorg over å føle seg utenfor."
    },
    "dp_empathic-conjectures_case-jason_07": {
      "text": "Hvis noen ler, antar jeg at det er av meg.",
      "suggestion": "Du spenner deg; jeg gjetter at det finnes en sår del som forventer å bli gjort narr av."
    },
    "dp_empathic-conjectures_case-jason_08": {
      "text": "Jeg skriver en melding og sletter den før jeg sender.",
      "suggestion": "Du redigerer; kan det være at en frykt for å bli sett står i kamp med et ønske om kontakt?"
    },
    "dp_empathic-conjectures_case-jason_09": {
      "text": "Jeg drikker før arrangementer for å løsne opp.",
      "suggestion": "Du søker lindring; jeg lurer på om en mykere og reddere del trenger beskyttelse."
    },
    "dp_empathic-conjectures_case-jason_10": {
      "text": "Jeg holder meg stille selv når jeg har en god idé.",
      "suggestion": "Du holder igjen; kanskje finnes det en dypere tro på at det å være synlig betyr fare."
    },
    "dp_empathic-conjectures_case-laura_01": {
      "text": "Når noen er vennlige mot meg, blir jeg fort mistenksom.",
      "suggestion": "Du tar avstand; jeg lurer på om nærhet vekker en gammel frykt for svik."
    },
    "dp_empathic-conjectures_case-laura_02": {
      "text": "Når stemmer heves, stivner kroppen min.",
      "suggestion": "Kroppen din husker fare; kanskje kommer frykten før hodet rekker å forstå."
    },
    "dp_empathic-conjectures_case-laura_03": {
      "text": "En del av meg føler skyld over at jeg virker så nummen.",
      "suggestion": "Du dømmer nummenheten; jeg lurer på om den er en beskytter som vokter en veldig sår sorg."
    },
    "dp_empathic-conjectures_case-laura_04": {
      "text": "Jeg unngår filmer med familiekrangler.",
      "suggestion": "Du styrer unna; kan det være for å unngå å vekke gammel skrekk og skam?"
    },
    "dp_empathic-conjectures_case-laura_05": {
      "text": "Noen ganger stirrer jeg ut i veggen og føler ingenting.",
      "suggestion": "Du blir flat; jeg lurer på om det kjennes tryggere enn å kjenne den verkende ensomheten."
    },
    "dp_empathic-conjectures_case-laura_06": {
      "text": "Jeg sier til meg selv «ikke treng noen».",
      "suggestion": "Du skyver behovene vekk; kanskje lengter en del av deg etter å bli holdt, og er redd for det."
    },
    "dp_empathic-conjectures_case-laura_07": {
      "text": "Når noen tar meg på skulderen, skvetter jeg.",
      "suggestion": "Kroppen din skvetter; jeg lurer på om den har lært at berøring kunne bety fare."
    },
    "dp_empathic-conjectures_case-laura_08": {
      "text": "Jeg er redd for at jeg er ødelagt.",
      "suggestion": "Du frykter det; kan det være skammen fra det du ble utsatt for som snakker?"
    },
    "dp_empathic-conjectures_case-laura_09": {
      "text": "Jeg gjør livet mitt veldig lite.",
      "suggestion": "Du holder det innenfor trange rammer; jeg lurer på om det er en måte å kontrollere risiko og unngå gammel smerte."
    },
    "dp_empathic-conjectures_case-laura_10": {
      "text": "Jeg unnskylder meg for at jeg gråter; det føles svakt.",
      "suggestion": "Du unnskylder deg; kanskje berører gråten en tro på at du ville blitt klandret for å trenge omsorg."
    },
    "dp_empathic-conjectures_case-carlos_01": {
      "text": "En respektløs tone vipper en bryter i meg.",
      "suggestion": "Det snur fort i deg; jeg lurer på om det under varmen ligger et glimt av ydmykelse."
    },
    "dp_empathic-conjectures_case-carlos_02": {
      "text": "Hvis jeg trekker meg, tror de jeg er svak.",
      "suggestion": "Du vokter statusen din; kanskje finnes det en yngre del som nekter å være liten igjen."
    },
    "dp_empathic-conjectures_case-carlos_03": {
      "text": "Jeg tåler ikke å bli fortalt hva jeg skal gjøre.",
      "suggestion": "Det skjærer; jeg lurer på om det berører en gammel frykt for å bli kontrollert."
    },
    "dp_empathic-conjectures_case-carlos_04": {
      "text": "Sønnen min så meg smelle igjen en dør; jeg følte meg kvalm etterpå.",
      "suggestion": "Jeg lurer på om det å se ansiktet hans ikke bare vekket kvalmen etterpå, men også skam og frykt for hva han lærer av deg."
    },
    "dp_empathic-conjectures_case-carlos_05": {
      "text": "Etter en krangel klarer jeg ikke å se kona i øynene.",
      "suggestion": "Du unngår blikket hennes; jeg lurer på om det berører anger og ømhet."
    },
    "dp_empathic-conjectures_case-carlos_06": {
      "text": "Jeg blåser meg opp når noen utfordrer meg.",
      "suggestion": "Du tar på deg rustning; kanskje for å dekke over et øyeblikk der du kjenner deg mindreverdig."
    },
    "dp_empathic-conjectures_case-carlos_07": {
      "text": "Jeg knuser ting så jeg ikke skader folk.",
      "suggestion": "Du prøver å beskytte; jeg gjetter at sinnet tar over for å holde smerten unna."
    },
    "dp_empathic-conjectures_case-carlos_08": {
      "text": "Rolige typer virker som dørmatter for meg.",
      "suggestion": "Du likestiller ro med å være svak; kan det være at ro føles farlig fordi det ikke var trygt før?"
    },
    "dp_empathic-conjectures_case-carlos_09": {
      "text": "Jeg kverner på respektløsheten i dagevis.",
      "suggestion": "Du grubler; jeg lurer på om det holder ydmykelsen på avstand fra å sette seg."
    },
    "dp_empathic-conjectures_case-carlos_10": {
      "text": "Jeg vil gjøre det bedre for familien min.",
      "suggestion": "Jeg lurer på om det, under viljen til endring, også ligger frykt og sorg over å bli den mannen familien din må være redd for."
    },
    "dp_empathic-conjectures_case-nina_01": {
      "text": "Når jeg hviler, føler jeg meg egoistisk.",
      "suggestion": "Du føler deg egoistisk; jeg lurer på om en del lærte at kjærlighet måtte fortjenes."
    },
    "dp_empathic-conjectures_case-nina_02": {
      "text": "Jeg sier ja, og så blir jeg bitter.",
      "suggestion": "Du sier ja; kanskje forteller sinnet om behov som ikke blir møtt – om å få støtte."
    },
    "dp_empathic-conjectures_case-nina_03": {
      "text": "Når jeg ber om hjelp, unnskylder jeg meg.",
      "suggestion": "Du unnskylder deg; jeg lurer på om det finnes en frykt for å bli avvist fordi du trenger noe."
    },
    "dp_empathic-conjectures_case-nina_04": {
      "text": "Hvis huset er rotete, føler jeg meg som en fiasko.",
      "suggestion": "Du føler deg som en fiasko; kan det være skam knyttet til å være «god» gjennom å gjøre?"
    },
    "dp_empathic-conjectures_case-nina_05": {
      "text": "Jeg blir engstelig hvis noen virker skuffet over meg.",
      "suggestion": "Du spenner deg; jeg lurer på om det vekker en gammel frykt for å miste kjærlighet."
    },
    "dp_empathic-conjectures_case-nina_06": {
      "text": "Jeg svelger sinnet mitt fordi det ikke er pent.",
      "suggestion": "Du svelger det; kanskje tror en yngre del at behovene dine er feil."
    },
    "dp_empathic-conjectures_case-nina_07": {
      "text": "Jeg tar vare på alle og føler meg så usynlig.",
      "suggestion": "Du føler deg usynlig; jeg lurer på om det ligger en lengsel etter også å bli tatt vare på."
    },
    "dp_empathic-conjectures_case-nina_08": {
      "text": "Jeg klarer ikke å si nei uten å bli kvalm.",
      "suggestion": "Du blir kvalm; kan det være en beskytter som prøver å holde tilknytningen trygg?"
    },
    "dp_empathic-conjectures_case-nina_09": {
      "text": "Jeg sier til meg selv at andre har det verre.",
      "suggestion": "Du nedtoner smerten din; jeg lurer på om det er en måte å forbli «akseptabel» ved å skyve din egen smerte ned."
    },
    "dp_empathic-conjectures_case-nina_10": {
      "text": "Hvis jeg roer ned, kjenner jeg en klump i halsen.",
      "suggestion": "Du kjenner klumpen; kanskje er sorgen nær og ber om å bli sett."
    },
    "dp_empathic-conjectures_case-aisha_01": {
      "text": "Hvis du ser på klokka, føler jeg meg forlatt.",
      "suggestion": "Du kjenner det fallet; jeg lurer på om det vekker en gammel skrekk for å bli etterlatt alene."
    },
    "dp_empathic-conjectures_case-aisha_02": {
      "text": "Da han ikke svarte, gikk jeg fra trist til rasende.",
      "suggestion": "Du svinger fort; kanskje raseriet skynder seg inn for å beskytte et veldig rått sår."
    },
    "dp_empathic-conjectures_case-aisha_03": {
      "text": "Noen ganger får jeg lyst til å klore meg selv på armene for å kjenne noe.",
      "suggestion": "Du vil ha lindring; jeg lurer på om det ligger en uutholdelig tomhet under."
    },
    "dp_empathic-conjectures_case-aisha_04": {
      "text": "Jeg ber folk om ikke å forlate meg, og så eksploderer jeg på dem.",
      "suggestion": "Du ber og skyver; kan det være at både lengselen og frykten er enorme?"
    },
    "dp_empathic-conjectures_case-aisha_05": {
      "text": "Hvis du avlyser, er det en del av meg som aldri vil komme tilbake.",
      "suggestion": "Det stikker; jeg lurer på om det kjennes tryggere å avvise først enn å risikere å bli droppet."
    },
    "dp_empathic-conjectures_case-aisha_06": {
      "text": "Jeg tenker at jeg er for mye for noen som helst.",
      "suggestion": "Du føler deg for mye; kanskje er det skammen fra det du ble utsatt for som taler."
    },
    "dp_empathic-conjectures_case-aisha_07": {
      "text": "Vennlighet får meg til å hulke, og en annen del vil bare stikke.",
      "suggestion": "Det lander stort; jeg gjetter at en del lengter etter det, mens en annen forventer at det forsvinner."
    },
    "dp_empathic-conjectures_case-aisha_08": {
      "text": "Jeg tester folk for å finne ut om de virkelig bryr seg.",
      "suggestion": "Du tester; kanskje prøver du å bevise at du betyr noe før du våger å stole på."
    },
    "dp_empathic-conjectures_case-aisha_09": {
      "text": "Etter at jeg har slått ut, vender jeg meg hardt mot meg selv.",
      "suggestion": "Du blir hard mot deg selv; jeg lurer på om det dekker en sorg over hvor alene du kjenner deg."
    },
    "dp_empathic-conjectures_case-aisha_10": {
      "text": "Jeg får panikk når jeg skal si farvel.",
      "suggestion": "Farvel utløser panikk; kanskje berører det den gamle frykten for at ingen kommer tilbake."
    },
    "dp_empathic-conjectures_case-david_01": {
      "text": "Når kona mi sier at jeg er kald, blir jeg sarkastisk.",
      "suggestion": "Du blir skarp; jeg lurer på om det under den skarpheten ligger et stikk av å bli sett som ikke god nok."
    },
    "dp_empathic-conjectures_case-david_02": {
      "text": "Jeg liker ikke å bli fortalt hva jeg skal gjøre.",
      "suggestion": "Du stritter imot; kanskje oppleves det som å bli gjort liten eller kontrollert."
    },
    "dp_empathic-conjectures_case-david_03": {
      "text": "Hvis jeg ikke kan være best, hvorfor prøve?",
      "suggestion": "Du sikter høyt; jeg lurer på om det finnes en frykt for at det å være ordinær betyr å være uverdig."
    },
    "dp_empathic-conjectures_case-david_04": {
      "text": "Jeg planlegger store gester og føler meg tom etterpå.",
      "suggestion": "Jeg lurer på om det, etter gesten, fortsatt finnes et ensomt sted i deg som spør: «Vil de ha meg, eller bare det jeg gjør?»"
    },
    "dp_empathic-conjectures_case-david_05": {
      "text": "Å be om unnskyldning får meg til å krympe meg.",
      "suggestion": "Det kjennes ydmykende; jeg lurer på om det treffer en gammel skam over å ta feil."
    },
    "dp_empathic-conjectures_case-david_06": {
      "text": "I vanskelige samtaler griper jeg etter telefonen og glipper ut.",
      "suggestion": "Du søker utvei; kanskje føles nærhet farlig når du forventer å bli bedømt."
    },
    "dp_empathic-conjectures_case-david_07": {
      "text": "Jeg skryter når jeg føler meg utrygg.",
      "suggestion": "Du pumper deg opp; jeg lurer på om det dekker over et sårbart sted."
    },
    "dp_empathic-conjectures_case-david_08": {
      "text": "Hvis barna ikke respekterer meg, mister jeg det.",
      "suggestion": "Respekt betyr så mye der; jeg lurer på om motstanden deres treffer en plutselig skam over at du mister plassen din hos dem."
    },
    "dp_empathic-conjectures_case-david_09": {
      "text": "Jeg hater å bli misforstått av kona mi.",
      "suggestion": "Du hater det; jeg lurer på om det under sinnet ligger en sorg over ikke å bli sett for den du er."
    },
    "dp_empathic-conjectures_case-david_10": {
      "text": "Jeg unngår terapioppgaver; det føles meningsløst.",
      "suggestion": "Du unngår; kanskje finnes det en del som er redd for hva du kan finne hvis du senker tempoet."
    },
    "dp_empathic-conjectures_case-marcus_01": {
      "text": "De fleste dager føler jeg meg avstengt, og ingenting slipper inn.",
      "suggestion": "Du føler deg flat; jeg lurer på om nummenheten beskytter deg mot mye smerte."
    },
    "dp_empathic-conjectures_case-marcus_02": {
      "text": "Jeg sover med TV‑en på.",
      "suggestion": "Du overdøver stillheten; kanskje stillheten bringer minner og sorg tettere på."
    },
    "dp_empathic-conjectures_case-marcus_03": {
      "text": "Jeg passer på å ha ryggen mot veggen.",
      "suggestion": "Du søker trygghet; jeg lurer på om kroppen din fortsatt står i beredskap for fare."
    },
    "dp_empathic-conjectures_case-marcus_04": {
      "text": "Jeg svarer ikke når søsteren min ringer.",
      "suggestion": "Du holder avstand; kan det være at avstanden gjør følelsene mer håndterlige."
    },
    "dp_empathic-conjectures_case-marcus_05": {
      "text": "Høye lyder får meg til å skvette, og så blir jeg sint på meg selv.",
      "suggestion": "Du skvetter og dømmer deg selv; jeg lurer på om sinnet dekker over en skam over å være sårbar."
    },
    "dp_empathic-conjectures_case-marcus_06": {
      "text": "Gode ting føles uvirkelige.",
      "suggestion": "De kjennes uvirkelige; kanskje det å slippe inn det gode også åpner døra for tap."
    },
    "dp_empathic-conjectures_case-marcus_07": {
      "text": "Jeg drikker noen ganger for å slå meg selv ut.",
      "suggestion": "Du slår deg ut; jeg lurer på om det er for å holde mareritt og følelser på avstand."
    },
    "dp_empathic-conjectures_case-marcus_08": {
      "text": "Jeg holder lyset lavt hjemme.",
      "suggestion": "Du holder det dempet; kan det være at lys og klarhet føles for avslørende."
    },
    "dp_empathic-conjectures_case-marcus_09": {
      "text": "Jeg husker ikke sist jeg lo.",
      "suggestion": "Du kan ikke huske; jeg lurer på om glede føles risikabelt etter så mye tap."
    },
    "dp_empathic-conjectures_case-marcus_10": {
      "text": "En del av meg tenker at jeg har det bedre alene.",
      "suggestion": "Den delen beskytter; kanskje den frykter å såre eller bli såret igjen."
    },
    "dp_staying-in-contact-intense-affect_case-sara_01": {
      "text": "Det treffer meg som en bølge og jeg klarer ikke slutte å hulke.",
      "suggestion": "Jeg er her sammen med deg. Kjenn føttene på gulvet—to langsomme utpust sammen—så lar vi en liten del av bølgen bevege seg mens stolen holder deg."
    },
    "dp_staying-in-contact-intense-affect_case-sara_02": {
      "text": "Brystet mitt gjør vondt som om det skal sprekke.",
      "suggestion": "Legg en hånd der hvis det hjelper. La oss puste mykt og legge merke til bare kanten av smerten et øyeblikk, så kommer vi tilbake til rommet."
    },
    "dp_staying-in-contact-intense-affect_case-sara_03": {
      "text": "Jeg vil løpe fra dette fordi det aldri tar slutt.",
      "suggestion": "Den trangen gir mening. Bli hos meg—hælene tunge, blikket på meg—så berører vi en dråpe av smerten og trekker oss tilbake hvis den stiger."
    },
    "dp_staying-in-contact-intense-affect_case-sara_04": {
      "text": "Når jeg ser bildet hans, synker det i magen og jeg skjelver.",
      "suggestion": "Jeg ser skjelvingen. Se deg rundt og nevn to farger i rommet. Mens vi gjør det, lar vi en liten del av suget i magen få være her sammen med oss."
    },
    "dp_staying-in-contact-intense-affect_case-sara_05": {
      "text": "Jeg får nesten ikke puste når jeg snakker om nettene.",
      "suggestion": "La oss forlenge utpusten sammen—ut … og inn …—og kjenne ryggen mot stolen. Vi holder oss bare ved en bitteliten del av de nettene før vi kommer tilbake hit."
    },
    "dp_staying-in-contact-intense-affect_case-sara_06": {
      "text": "Jeg føler meg dum som gråter så mye.",
      "suggestion": "Tårer gir mening. Vi roer pusten, mykner skuldrene og lar tårene få litt plass mens jeg blir her sammen med deg."
    },
    "dp_staying-in-contact-intense-affect_case-sara_07": {
      "text": "Hendene mine blir numne og jeg føler meg langt borte.",
      "suggestion": "La oss vekke hendene—gni dem sammen—og kjenne føttene på gulvet. Vi setter ord på «langt borte» i ett pust og kommer tilbake."
    },
    "dp_staying-in-contact-intense-affect_case-sara_08": {
      "text": "Det kjennes som et hull i brystet som vil sluke meg.",
      "suggestion": "Vi sitter sammen på kanten av det hullet—hånd på brystet, lav pust—og legger merke til et lite punkt av fornemmelse, så tilbake til rommet."
    },
    "dp_staying-in-contact-intense-affect_case-sara_09": {
      "text": "Jeg klarer ikke se på deg når jeg gråter.",
      "suggestion": "Det er helt i orden. Hold blikket der det er lettest og kjenn føttene på gulvet. Jeg blir hos deg mens vi lar litt av dette få være her."
    },
    "dp_staying-in-contact-intense-affect_case-sara_10": {
      "text": "Jeg er redd for at hvis jeg begynner, så stopper jeg aldri.",
      "suggestion": "Vi starter og stopper sammen. Ett lite pust med følelsen, ett pust i rommet—og du sier fra når det er nok."
    },
    "dp_staying-in-contact-intense-affect_case-michael_01": {
      "text": "Kjeven låser seg og varmen skyter opp i nakken.",
      "suggestion": "Jeg er her. Løsne kjeven hvis du kan, senk skuldrene og ta et langsomt utpust—så legger vi merke til det første stikket under varmen et øyeblikk."
    },
    "dp_staying-in-contact-intense-affect_case-michael_02": {
      "text": "Jeg vil slå i veggen akkurat nå.",
      "suggestion": "Plant begge føtter, kjenn hendene dine og pust lavt sammen med meg. Vi rir en liten bølge sammen og trekker oss tilbake før den topper seg."
    },
    "dp_staying-in-contact-intense-affect_case-michael_03": {
      "text": "Ydmykelsen brenner når jeg spiller det av igjen.",
      "suggestion": "Det brenner skarpt. Snakk lavt sammen med meg—to rolige pust—så blir vi bare ved kanten av det som brenner, og så tar vi pause."
    },
    "dp_staying-in-contact-intense-affect_case-michael_04": {
      "text": "Jeg kan kjenne at det er i ferd med å klikke.",
      "suggestion": "Fint at du legger merke til det. Det er vårt pausepunkt—hælene tunge, myk i kjeven, lang utpust—la oss sette ord på «klikk» sammen og la det få passere."
    },
    "dp_staying-in-contact-intense-affect_case-michael_05": {
      "text": "Jeg skjelver av sinne.",
      "suggestion": "La skjelvingen få litt plass mens du kjenner føttene på gulvet. Jeg er med deg—ett pust med skjelvet, ett pust i ro."
    },
    "dp_staying-in-contact-intense-affect_case-michael_06": {
      "text": "Jeg hater å føle meg så liten.",
      "suggestion": "Jeg hører det. Hold pusten rolig og jevn—vi blir ved følelsen av å være liten i ett pust, og så tilbake til rommet."
    },
    "dp_staying-in-contact-intense-affect_case-michael_07": {
      "text": "En del av meg vil forlate timen.",
      "suggestion": "Takk for at du sier det. Bli sittende, hendene på lårene, og la oss ta to langsomme utpust sammen mens vi holder bare en flik av dette."
    },
    "dp_staying-in-contact-intense-affect_case-michael_08": {
      "text": "Stemmen min blir høyere.",
      "suggestion": "La oss senke den sammen—senke tempoet—og kjenn gulvet under skoene. Vi holder kontakt med det som gjør vondt uten at det tar over."
    },
    "dp_staying-in-contact-intense-affect_case-michael_09": {
      "text": "Jeg føler at jeg skal eksplodere.",
      "suggestion": "Vi passer på at du er trygg—løsne knyttnevene, gi brystet litt mer plass, og legg merke til det første støtet under trangen; vi kan ta pause når som helst."
    },
    "dp_staying-in-contact-intense-affect_case-michael_10": {
      "text": "Jeg stoler ikke på meg selv akkurat nå.",
      "suggestion": "Jeg holder tempoet sammen med deg—ett pust av gangen, føttene på gulvet—mens vi lar en bitteliten bit være her, og så kommer vi tilbake til rommet."
    },
    "dp_staying-in-contact-intense-affect_case-jason_01": {
      "text": "Alt blir uklart og hjertet hamrer.",
      "suggestion": "Jeg er her. Se på én ting på andre siden av rommet, kjenn stolen under deg, og ta to langsomme utpust—vi berører en bitte liten del av farten i kroppen, og så tar vi pause."
    },
    "dp_staying-in-contact-intense-affect_case-jason_02": {
      "text": "Hendene mine skjelver og jeg vil forsvinne.",
      "suggestion": "La hendene hvile på lårene—kjenn varmen—og pust lavt sammen med meg. Vi lar skjelvingen være her i ett pust."
    },
    "dp_staying-in-contact-intense-affect_case-jason_03": {
      "text": "Jeg blir kvalm av å snakke om dette.",
      "suggestion": "Ok—se på meg hvis du kan. Ro ned pusten og kjenn føttene på gulvet. Vi setter ord på «kvalm» et øyeblikk, og så trekker vi oss litt tilbake."
    },
    "dp_staying-in-contact-intense-affect_case-jason_04": {
      "text": "Det kjennes som om rommet lukker seg rundt meg.",
      "suggestion": "La oss utvide blikket sammen—si tre farger du ser—og hold utpusten lang; vi blir bare ved kanten."
    },
    "dp_staying-in-contact-intense-affect_case-jason_05": {
      "text": "Jeg får ikke puste ordentlig.",
      "suggestion": "Pust med meg—ut lengre enn inn—og kjenn ryggen mot stolen. Vi tar dette inn i små slurker."
    },
    "dp_staying-in-contact-intense-affect_case-jason_06": {
      "text": "Jeg vil gjemme meg under bordet.",
      "suggestion": "Det gir mening. Bli sittende, med hælene tunge; vi rir en liten bølge mens vi holder kontakt her."
    },
    "dp_staying-in-contact-intense-affect_case-jason_07": {
      "text": "Jeg klarer ikke se deg i øynene nå.",
      "suggestion": "Det er greit. Velg et punkt på veggen mens vi puster sammen og lar en liten del av frykten bevege seg."
    },
    "dp_staying-in-contact-intense-affect_case-jason_08": {
      "text": "Det ringer i ørene og jeg føler meg fanget.",
      "suggestion": "La oss orientere oss—hvilke to lyder hører du bortsett fra ringingen?—og la utpusten gå rolig mens vi blir ved bare kanten."
    },
    "dp_staying-in-contact-intense-affect_case-jason_09": {
      "text": "Jeg kjenner at jeg vil gråte, og det er flaut.",
      "suggestion": "Tårer er velkomne her. Vi fortsetter å puste rolig og lar litt av følelsen få være her sammen med oss."
    },
    "dp_staying-in-contact-intense-affect_case-jason_10": {
      "text": "Jeg tror jeg burde gå.",
      "suggestion": "Takk for at du sier det. La oss ta et rolig pust til sammen og sjekke kroppen din; vi kan ta pause når som helst du trenger."
    },
    "dp_staying-in-contact-intense-affect_case-laura_01": {
      "text": "Et dørsmell, og jeg forsvinner inni meg.",
      "suggestion": "Jeg er her. Føtter, sete, pust—la oss sette ord på «å forsvinne» sammen i ett pust, og så kommer vi tilbake til rommet."
    },
    "dp_staying-in-contact-intense-affect_case-laura_02": {
      "text": "Kroppen blir nummen når jeg prøver å føle.",
      "suggestion": "Vi skal respektere nummenheten. Gni hendene, kjenn på teksturen, og legg merke til et lite signal under nummenheten; vi presser ikke."
    },
    "dp_staying-in-contact-intense-affect_case-laura_03": {
      "text": "Jeg føler at rommet er langt borte.",
      "suggestion": "La oss orientere oss forsiktig—si to former du ser—og la utpusten gå rolig mens vi holder en liten del av den avstanden."
    },
    "dp_staying-in-contact-intense-affect_case-laura_04": {
      "text": "Magen synker og jeg stivner.",
      "suggestion": "Ok—pust lavt, slipp litt i kjeven, og la oss bli ved suget i magen i ett pust, og så kommer vi tilbake til stolen."
    },
    "dp_staying-in-contact-intense-affect_case-laura_05": {
      "text": "Jeg vil bare bli nummen akkurat nå.",
      "suggestion": "Det gir mening. Før vi går inn i nummenheten, kjenn hælene og ta et rolig utpust; vi berører en liten trygg flik og stopper."
    },
    "dp_staying-in-contact-intense-affect_case-laura_06": {
      "text": "Tårene kommer og jeg føler meg dum.",
      "suggestion": "Tårer er velkomne. Jeg holder tempoet—rolig pust, mykt blikk—mens vi lar litt av følelsen få bevege seg gjennom."
    },
    "dp_staying-in-contact-intense-affect_case-laura_07": {
      "text": "Jeg stoler ikke på at kroppen holder meg trygg.",
      "suggestion": "Vi låner min—se på pusten min, følg tempoet mitt, og kjenn stolen under deg; vi holder dette veldig lite av gangen."
    },
    "dp_staying-in-contact-intense-affect_case-laura_08": {
      "text": "Jeg blir svimmel og føler meg langt borte.",
      "suggestion": "Nevn én ting du ser, én ting du hører, én ting du kjenner. Vi holder oss ved kanten av «langt borte» og tar pause om det trengs."
    },
    "dp_staying-in-contact-intense-affect_case-laura_09": {
      "text": "Vennlighet får meg til å ville stikke.",
      "suggestion": "Jeg hører trangen til å stikke. Bli sittende, blikket der det er lettest, og pust med meg; vi kjenner et pust av trangen og trekker oss tilbake."
    },
    "dp_staying-in-contact-intense-affect_case-laura_10": {
      "text": "Jeg vil ikke kjenne dette i det hele tatt.",
      "suggestion": "Skjønner. Vi holder bare et lite punkt av det sammen i ett pust og kommer så tilbake. Du leder tempoet."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_01": {
      "text": "Varmen stiger—nevene vil knyte seg.",
      "suggestion": "La fingrene løsne og kjenn håndflatene mot lårene. Pust lavt med meg—vi blir ved en liten bølge, og så tar vi pause."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_02": {
      "text": "Stemmen min vil rope.",
      "suggestion": "La oss senke den sammen og senke tempoet. Kjenn føttene på gulvet. Vi kan holde det som er varmt uten at det eksploderer."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_03": {
      "text": "Jeg har lyst til å knuse noe.",
      "suggestion": "Plant føttene, åpne brystet og ta et rolig utpust. Vi setter ord på trangen, kjenner det første støtet, og trekker oss litt tilbake."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_04": {
      "text": "Å tenke på ansiktet til ungen min river meg opp.",
      "suggestion": "Det viser hjertet ditt. Hold pusten rolig og hold hendene stødig; vi lar litt av den smerten få være her sammen med oss."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_05": {
      "text": "Jeg er på vei ut.",
      "suggestion": "Takk for at du sier fra. Bli sittende, hælene tunge, så tar vi to langsomme utpust før vi bestemmer neste steg."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_06": {
      "text": "Brystet hamrer.",
      "suggestion": "Følg pusten min—ut lengre enn inn—og kjenn hvordan stolen holder ryggen; vi rir en liten bølge, og så tar vi pause."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_07": {
      "text": "Jeg klarer ikke tenke klart når dette slår inn.",
      "suggestion": "La oss bruke kroppen først—føtter, hender, myk kjeve—så kan tankene komme tilbake; vi holder det kort."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_08": {
      "text": "Jeg vil skremme folk vekk.",
      "suggestion": "Jeg hører den beskyttende delen. Hold blikket hos meg og pust—vi holder bare ytterkanten av det sammen."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_09": {
      "text": "Respekt—dette handler om respekt.",
      "suggestion": "Ja. La oss kjenne det første stikket av å bli møtt uten respekt i ett pust mens føttene forankrer deg; vi kan ta pause når som helst."
    },
    "dp_staying-in-contact-intense-affect_case-carlos_10": {
      "text": "Jeg føler meg ute av kontroll.",
      "suggestion": "Jeg holder roen sammen med deg—rolig stemme, rolig pust—så du kan kjenne en liten bit og få tilbake litt kontroll."
    },
    "dp_staying-in-contact-intense-affect_case-nina_01": {
      "text": "Jeg klarer ikke slutte å gråte, og så skammer jeg meg for hvor mye jeg trenger.",
      "suggestion": "Tårer gir mening her. La oss roe pusten sammen og kjenne at stolen støtter deg, mens vi lar litt av gråten få bevege seg."
    },
    "dp_staying-in-contact-intense-affect_case-nina_02": {
      "text": "Jeg er stram i brystet og hodet dunker.",
      "suggestion": "Legg en hånd der det strammer hvis det hjelper. Pust lavt med meg—ett pust med stramheten, ett pust i ro."
    },
    "dp_staying-in-contact-intense-affect_case-nina_03": {
      "text": "Jeg sier hele tiden unnskyld for at jeg føler så mye.",
      "suggestion": "Du trenger ikke å beklage. Bli hos meg—hælene tunge, rolig utpust—så gir vi denne følelsen litt plass."
    },
    "dp_staying-in-contact-intense-affect_case-nina_04": {
      "text": "Jeg skjelver av å holde alt sammen.",
      "suggestion": "La skjelvingen få litt plass mens du kjenner stolen under deg. Ett pust av gangen."
    },
    "dp_staying-in-contact-intense-affect_case-nina_05": {
      "text": "Jeg føler at jeg svikter alle.",
      "suggestion": "Det er tungt. Hold blikket hos meg hvis du kan—rolig pust—så blir vi ved kanten av den følelsen et øyeblikk."
    },
    "dp_staying-in-contact-intense-affect_case-nina_06": {
      "text": "Hvis jeg slutter å gjøre, faller jeg fra hverandre.",
      "suggestion": "Vi stopper ikke alt på en gang—vi bare pauser her med meg i to langsomme utpust og lar en liten del få bevege seg gjennom."
    },
    "dp_staying-in-contact-intense-affect_case-nina_07": {
      "text": "Jeg vil gå fordi dette blir for mye.",
      "suggestion": "Takk for at du sier det. Bli sittende, kjenn føttene på gulvet, så sjekker vi kroppen din sammen—ett rolig pust til, og vi kan ta pause."
    },
    "dp_staying-in-contact-intense-affect_case-nina_08": {
      "text": "Jeg blir kvalm av stress.",
      "suggestion": "Ok—finn et lett punkt å hvile blikket på, pust ut lengre enn inn, og nevn én ting du kan kjenne med hendene; vi holder dette veldig lite."
    },
    "dp_staying-in-contact-intense-affect_case-nina_09": {
      "text": "Jeg får ikke tak i pusten.",
      "suggestion": "La oss forlenge utpusten sammen og kjenne ryggen mot stolen. Vi tar dette i små slurker."
    },
    "dp_staying-in-contact-intense-affect_case-nina_10": {
      "text": "En del av meg er redd for å trenge noe.",
      "suggestion": "Jeg er her. Vi blir ved ett pust med den frykten mens føttene forankrer deg, og vi stopper hvis det stiger."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_01": {
      "text": "Hvis du ser bort, får jeg panikk og jeg får ikke puste.",
      "suggestion": "Se hit hvis du kan. Jeg er med deg—la oss forlenge utpusten og presse føttene ned i gulvet til det åpner seg litt mer plass."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_02": {
      "text": "Tomheten brenner og jeg vil skade meg selv.",
      "suggestion": "Takk for at du sier det. Vi skal holde deg trygg og være sammen med bare ett pust av den brennende tomheten under trangen, og så kommer vi tilbake til rommet."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_03": {
      "text": "Jeg vil stikke fra dette rommet.",
      "suggestion": "Jeg hører trangen. Hælene tunge, rolig utpust, blikket hos meg—vi blir ved kanten av den trangen sammen og tar pause om det trengs."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_04": {
      "text": "Å si farvel gjør meg svimmel og livredd.",
      "suggestion": "Vi roer pusten, kjenner føttene på gulvet, og planlegger avslutningen sammen slik at kroppen din vet at jeg er her til vi er ferdige."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_05": {
      "text": "Jeg føler at jeg er for mye.",
      "suggestion": "Jeg vil være her med deg i dette. La oss senke skuldrene og puste—ett lite pust med følelsen av å være «for mye», så hviler vi."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_06": {
      "text": "Brystet kjennes som et svart hull.",
      "suggestion": "Legg en hånd der hvis du vil. Vi sitter på kanten sammen—lav pust—og setter ord på «svart hull» i ett pust før vi kommer tilbake."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_07": {
      "text": "Jeg sjekker hele tiden at du fortsatt er her.",
      "suggestion": "Jeg er her. Hold blikket der det er lettest og pust med meg—la oss legge merke til det minste tegnet på trygghet i kroppen din."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_08": {
      "text": "Jeg vil klore meg selv for å kjenne noe ekte.",
      "suggestion": "La oss presse føttene ned, puste rolig, og holde den trangen varsomt mellom oss i ett pust; vi kan ta pause når som helst."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_09": {
      "text": "Jeg klarer ikke slutte å gråte, og jeg skammer meg.",
      "suggestion": "Tårer er velkomne her. Pust med meg og kjenn stolen—vi lar litt av skammen få bevege seg gjennom, og så hviler vi."
    },
    "dp_staying-in-contact-intense-affect_case-aisha_10": {
      "text": "Hvis du avlyser, faller jeg fra hverandre.",
      "suggestion": "Det treffer som om gulvet forsvinner. Bli hos stemmen min og føttene dine mens vi holder ett lite pust av skrekken for å bli forlatt, akkurat her sammen med meg."
    },
    "dp_staying-in-contact-intense-affect_case-david_01": {
      "text": "Ansiktet brenner og jeg vil bare avbryte.",
      "suggestion": "Jeg er her. Slipp skuldrene, kjenn hendene, senk pusten—vi blir ved brenningen i ett pust og tar pause."
    },
    "dp_staying-in-contact-intense-affect_case-david_02": {
      "text": "Jeg føler meg avslørt og rasende.",
      "suggestion": "Det er skarpt. Hold stemmen lav sammen med meg og pust—vi holder bare en tynn kant av det sammen, og så trekker vi oss tilbake."
    },
    "dp_staying-in-contact-intense-affect_case-david_03": {
      "text": "Jeg vil gå ut.",
      "suggestion": "Takk for at du sier fra. Bli sittende, hælene tunge, lang utpust—vi sjekker kroppen etter to pust og bestemmer sammen."
    },
    "dp_staying-in-contact-intense-affect_case-david_04": {
      "text": "Å innrømme at jeg tar feil får magen til å vri seg.",
      "suggestion": "La oss legge merke til vridningen—hånd på magen om det hjelper—ett pust inn, lengre ut; vi presser ikke forbi kanten."
    },
    "dp_staying-in-contact-intense-affect_case-david_05": {
      "text": "Jeg orker ikke ordet «kald».",
      "suggestion": "Det ordet skjærer rett inn. Hold føttene i gulvet og bli hos meg mens vi slipper inn ett pust av hvor skamfullt og blottstilt det kjennes å bli sett på den måten."
    },
    "dp_staying-in-contact-intense-affect_case-david_06": {
      "text": "Jeg synes det er flaut at jeg klikket hjemme.",
      "suggestion": "Den flauheten er varm. Senk skuldrene og pust med meg; vi holder kontakt i ett pust og hviler."
    },
    "dp_staying-in-contact-intense-affect_case-david_07": {
      "text": "Jeg føler for å stenge ned.",
      "suggestion": "La oss senke tempoet, mykne kjeven, og holde pusten jevn—vi blir ved kanten av nedstengingen og tar pause ved behov."
    },
    "dp_staying-in-contact-intense-affect_case-david_08": {
      "text": "Brystet føles hult og stramt.",
      "suggestion": "Legg en hånd der hvis det hjelper, og følg pusten min—ut lengre enn inn—mens vi legger merke til en liten del av stramheten."
    },
    "dp_staying-in-contact-intense-affect_case-david_09": {
      "text": "Jeg er fristet til å forsvare meg nå.",
      "suggestion": "La forsvaret hvile i to pust—kjenn føttene—så holder vi den første smerten under det sammen."
    },
    "dp_staying-in-contact-intense-affect_case-david_10": {
      "text": "Jeg vil skylde på alle andre.",
      "suggestion": "Jeg hører det draget. Bli hos meg—rolig pust, jevn tone—så kjenner vi ett pust av det som er vanskeligst under skylden."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_01": {
      "text": "En bølge reiser seg, og jeg vil ikke ha den.",
      "suggestion": "Vi tar det i små slurker—se deg rundt og nevn to ting du ser, kjenn føttene på gulvet—og lar en liten bølge passere mens vi blir her i rommet."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_02": {
      "text": "Kroppen summer etter et mareritt.",
      "suggestion": "Føtter, sete, pust—la oss jorde oss først. Vi holder en liten, trygg del av summingen i ett pust, og så hviler vi."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_03": {
      "text": "Jeg kjenner ingenting og alt på én gang.",
      "suggestion": "Det er en tøff piskesnert. Vi legger merke til ett lite signal—stramt, tungt, varmt—og lar utpusten gå rolig sammen."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_04": {
      "text": "Jeg vil stenge ned.",
      "suggestion": "Vi lar nedstengingen vite at vi hører den—hælene tunge, lang utpust—og blir bare ved kanten, og så kommer vi tilbake."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_05": {
      "text": "Hendene skjelver når jeg prøver å snakke om det.",
      "suggestion": "La hendene hvile på lårene og kjenn kontakten; pust lavt med meg mens vi lar en liten del av skjelvingen være her."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_06": {
      "text": "Stillhet hjemme kjennes som en vekt på brystet.",
      "suggestion": "Legg en hånd på brystet hvis det hjelper; vi setter ord på «vekt» i ett pust, og så kommer vi tilbake til rommet sammen."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_07": {
      "text": "Folkemengder får huden min til å prikke.",
      "suggestion": "La oss orientere oss i rommet vi er i—to ting du ser—og pust ut lengre enn inn; vi holder bare kanten."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_08": {
      "text": "Jeg er redd for at hvis jeg føler, vil det sluke meg.",
      "suggestion": "Vi sitter sammen på kanten—føtter i gulvet, jevn pust—og berører et knappenålstort punkt av følelsen, og så tar vi pause."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_09": {
      "text": "Jeg vil forsvinne.",
      "suggestion": "Jeg er her sammen med deg. Kjenn stolen og føttene dine mens vi blir ved ett lite pust av hvor sterkt du vil ut av denne smerten, og så kommer vi tilbake sammen."
    },
    "dp_staying-in-contact-intense-affect_case-marcus_10": {
      "text": "Jeg klarer ikke avgjøre om jeg er her.",
      "suggestion": "La oss nevne tre ting i dette rommet og presse føttene ned i gulvet. Vi lar pusten gå rolig mens kroppen registrerer «her»."
    },
    "dp_self-disclosure_case-sara_01": {
      "text": "Synes du jeg er latterlig som fortsatt savner ham?",
      "suggestion": "Jeg ser deg ikke som latterlig. Jeg blir berørt av hvor mye han betydde. Hvordan er det å høre meg si det?"
    },
    "dp_self-disclosure_case-sara_02": {
      "text": "Du blir sikkert lei av å høre meg gråte.",
      "suggestion": "Jeg blir ikke lei av deg. Jeg kjenner omsorg for hvor alene dette blir for deg. Hva skjer i deg når du hører det?"
    },
    "dp_self-disclosure_case-sara_03": {
      "text": "Er du en som blir utilpass av tårer?",
      "suggestion": "Tårene dine gjør meg ikke utilpass. Jeg kjenner meg nær og stødig sammen med deg akkurat nå. Hvordan er det å vite det?"
    },
    "dp_self-disclosure_case-sara_04": {
      "text": "Kjenner du deg noen gang så ensom som dette?",
      "suggestion": "Jeg kjenner ensomhet fra mitt eget liv også, så jeg tar din på alvor. Hva legger du merke til i deg når jeg sier det?"
    },
    "dp_self-disclosure_case-sara_05": {
      "text": "Jeg synes det er flaut at du ser meg sånn.",
      "suggestion": "Jeg kjenner respekt for at du viser så mye smerte her inne. Jeg dømmer deg ikke. Hvordan er det å høre det fra meg?"
    },
    "dp_self-disclosure_case-sara_06": {
      "text": "Tror du jeg kommer til å være alene for alltid?",
      "suggestion": "Jeg kan ikke vite framtiden, og jeg kjenner håp sammen med deg. Akkurat nå vil jeg ikke at du skal være alene i denne følelsen. Hvordan lander det?"
    },
    "dp_self-disclosure_case-sara_07": {
      "text": "Er jeg for mye for deg?",
      "suggestion": "Du kjennes ikke som for mye for meg. Jeg er veldig her sammen med deg. Hva skjer inni deg når du hører det?"
    },
    "dp_self-disclosure_case-sara_08": {
      "text": "Er du i et forhold? Får det deg til å dømme meg?",
      "suggestion": "Det viktigste er at jeg ikke dømmer deg. Jeg kjenner varme og interesse for det dette vekker i deg. Hvordan er det å høre det?"
    },
    "dp_self-disclosure_case-sara_09": {
      "text": "Jeg hater at jeg trenger noen, til og med deg.",
      "suggestion": "Når jeg hører det, kjenner jeg ømhet for hvor risikabelt det er for deg å trenge noen. Hvordan er det at jeg kan bli hos deg i det?"
    },
    "dp_self-disclosure_case-sara_10": {
      "text": "Bryr du deg egentlig om meg, eller bare jobben din?",
      "suggestion": "Jeg bryr meg om hva som skjer med deg, og jeg kjenner den omsorgen her sammen med deg nå. Hvordan er det å høre meg si det?"
    },
    "dp_self-disclosure_case-michael_01": {
      "text": "Vær ærlig—høres jeg svak ut når jeg snakker sånn?",
      "suggestion": "Jeg hører ikke svakhet i dette. Jeg kjenner hvor mye det koster å si det. Hva skjer i deg når du hører det?"
    },
    "dp_self-disclosure_case-michael_02": {
      "text": "Blir du sint sånn som dette selv?",
      "suggestion": "Jeg kjenner sinne i meg selv også, og akkurat nå kjenner jeg meg stødig sammen med ditt. Hvordan er det å høre det?"
    },
    "dp_self-disclosure_case-michael_03": {
      "text": "Du tenker sikkert at det er jeg som er problemet hjemme.",
      "suggestion": "Jeg ser ikke på deg som problemet. Jeg kjenner hvor mye smerte som ligger under varmen. Hvordan lander det?"
    },
    "dp_self-disclosure_case-michael_04": {
      "text": "Dømmer du meg for at jeg roper?",
      "suggestion": "Jeg dømmer deg ikke. Jeg kjenner bekymring for hva dette koster deg og menneskene du er glad i. Hva skjer når du hører det?"
    },
    "dp_self-disclosure_case-michael_05": {
      "text": "Blir terapeuter lei av å høre sånt?",
      "suggestion": "Jeg blir ikke lei. Jeg kjenner et drag mot å forstå splitsekundet der det snur for deg. Hvordan er det å høre det?"
    },
    "dp_self-disclosure_case-michael_06": {
      "text": "Er du sterk nok til å tåle meg når jeg er sint?",
      "suggestion": "Jeg kjenner meg solid sammen med deg akkurat nå. Jeg trekker meg ikke bort fra sinnet. Hva skjer i deg når jeg sier det?"
    },
    "dp_self-disclosure_case-michael_07": {
      "text": "Du ser rolig ut—går noe av dette inn på deg?",
      "suggestion": "Det går inn på meg, og jeg holder meg stødig så vi kan se på det sammen. Hvordan lander det?"
    },
    "dp_self-disclosure_case-michael_08": {
      "text": "Liker du i det hele tatt å jobbe med sånne som meg?",
      "suggestion": "Jeg liker å jobbe med deg. Jeg kjenner respekt for direkteheten din og ønsket ditt om å endre deg. Hva skjer inni deg når du hører det?"
    },
    "dp_self-disclosure_case-michael_09": {
      "text": "Er du gift? Jeg lurer på om du tar med deg sinnet hjem.",
      "suggestion": "Jeg vet hvordan det er å måtte roe ned sinne, og det hjelper meg å være med deg her. Hvordan er det å høre det?"
    },
    "dp_self-disclosure_case-michael_10": {
      "text": "Si at du skjønner hvorfor dette er så vanskelig.",
      "suggestion": "Jeg forstår hvor mye dette betyr for deg. Jeg kjenner både presset og såretheten i det. Hvordan er det å høre det fra meg?"
    },
    "dp_self-disclosure_case-jason_01": {
      "text": "Sløser jeg bort tiden din nå?",
      "suggestion": "Du kaster ikke bort tiden min. Jeg kjenner interesse for deg også i stillheten. Hva skjer når du hører det?"
    },
    "dp_self-disclosure_case-jason_02": {
      "text": "Føler du deg noen gang like utilpass som meg?",
      "suggestion": "Jeg kjenner også til det å føle seg utilpass, og det gjør at jeg vil gå varsomt fram her sammen med deg. Hvordan er det å høre det?"
    },
    "dp_self-disclosure_case-jason_03": {
      "text": "Du synes sikkert jeg er kjedelig.",
      "suggestion": "Jeg opplever deg ikke som kjedelig. Jeg kjenner meg nysgjerrig og sammen med deg. Hva legger du merke til i deg når jeg sier det?"
    },
    "dp_self-disclosure_case-jason_04": {
      "text": "Er det greit at jeg ikke vet hva jeg skal si?",
      "suggestion": "Det er greit å ikke vite hva du skal si. Jeg kjenner tålmodighet med deg akkurat nå. Hvordan er det å høre det?"
    },
    "dp_self-disclosure_case-jason_05": {
      "text": "Er du skuffet over at jeg ikke dro på festen?",
      "suggestion": "Jeg er ikke skuffet. Jeg kjenner hvor vanskelig den festen var for deg. Hvordan lander det?"
    },
    "dp_self-disclosure_case-jason_06": {
      "text": "Liker du å jobbe med sjenerte folk?",
      "suggestion": "Jeg liker å jobbe med sjenerte mennesker. Jeg er opptatt av at tempoet her skal føles trygt. Hva skjer når jeg sier det?"
    },
    "dp_self-disclosure_case-jason_07": {
      "text": "Dømmer du meg for at jeg er stille?",
      "suggestion": "Jeg dømmer ikke stillheten din. Jeg kjenner respekt for hvor mye det koster å være her. Hvordan lander det?"
    },
    "dp_self-disclosure_case-jason_08": {
      "text": "Ville du sagt ifra hvis jeg sa noe dumt?",
      "suggestion": "Jeg ville prøvd å være ærlig og vennlig. Akkurat nå kjenner jeg meg beskyttende overfor delen av deg som venter latterliggjøring. Hva skjer når du hører det?"
    },
    "dp_self-disclosure_case-jason_09": {
      "text": "Blir du noen gang nervøs i grupper?",
      "suggestion": "Jeg blir også nervøs i grupper iblant, og det hjelper meg å ta frykten din på alvor. Hva legger du merke til når jeg sier det?"
    },
    "dp_self-disclosure_case-jason_10": {
      "text": "Tror du jeg noen gang blir mindre engstelig?",
      "suggestion": "Jeg kjenner håp sammen med deg. Jeg sier det fordi jeg kjenner hvor mye du ønsker at noe skal bli annerledes. Hvordan er det å høre det?"
    },
    "dp_self-disclosure_case-laura_01": {
      "text": "Blir du utilpass av dette—at jeg ikke føler noe?",
      "suggestion": "Jeg blir ikke utilpass av tomheten. Jeg kjenner meg tålmodig og varsom med den. Hva skjer i deg når du hører det?"
    },
    "dp_self-disclosure_case-laura_02": {
      "text": "Er du irritert over at jeg ikke åpner meg?",
      "suggestion": "Jeg er ikke irritert. Jeg kjenner respekt for hvor viktig det har vært å beskytte deg. Hvordan lander det?"
    },
    "dp_self-disclosure_case-laura_03": {
      "text": "Du virker rolig—skjønner du egentlig hvordan dette er?",
      "suggestion": "Jeg kjenner tyngden i det, og jeg holder meg rolig med vilje for at dette skal føles tryggere. Hvordan er det å høre det?"
    },
    "dp_self-disclosure_case-laura_04": {
      "text": "Har du jobbet med traumer som mine før?",
      "suggestion": "Jeg har arbeidet med traumer før, og akkurat nå er jeg mer opptatt av tempo enn av detaljer. Hvordan lander det?"
    },
    "dp_self-disclosure_case-laura_05": {
      "text": "Får historien min deg til å tenke mindre om meg?",
      "suggestion": "Jeg tenker ikke mindre om deg. Jeg kjenner sorg over det du har båret, og respekt for hvordan du har overlevd. Hva skjer når du hører det?"
    },
    "dp_self-disclosure_case-laura_06": {
      "text": "Kommer du til å presse meg inn i detaljer?",
      "suggestion": "Jeg kommer ikke til å presse deg inn i detaljer. Jeg er mer opptatt av at du skal være trygg nok til å være til stede. Hvordan er det å høre det?"
    },
    "dp_self-disclosure_case-laura_07": {
      "text": "Ser du når jeg blir langt borte?",
      "suggestion": "Noen ganger kan jeg merke at du er langt borte, og da blir jeg mer opptatt av tempo enn av å gå dypere. Hva skjer i deg når du hører det?"
    },
    "dp_self-disclosure_case-laura_08": {
      "text": "Tror du vennlighet vil gjøre meg verre?",
      "suggestion": "Jeg kjenner ingen trang til å presse vennlighet på deg. Jeg er mer opptatt av å hjelpe den til å bli tryggere, hvis og når det går. Hvordan lander det?"
    },
    "dp_self-disclosure_case-laura_09": {
      "text": "Er du redd for at jeg bryter sammen?",
      "suggestion": "Jeg er ikke redd for at du skal bryte sammen med meg. Jeg er klar til å senke farten med en gang du trenger det. Hvordan er det å høre det?"
    },
    "dp_self-disclosure_case-laura_10": {
      "text": "Tror du jeg kan begynne å føle igjen?",
      "suggestion": "Jeg tror det er mulig å kjenne mer igjen, og jeg kjenner tålmodighet med veien dit. Hva skjer når du hører det?"
    },
    "dp_self-disclosure_case-carlos_01": {
      "text": "Tror du jeg er en dårlig far fordi jeg mister det?",
      "suggestion": "Når du sier det, kjenner jeg hvor mye sønnen din betyr for deg. Jeg ser ikke en dårlig far foran meg. Hvordan lander det?"
    },
    "dp_self-disclosure_case-carlos_02": {
      "text": "Kommer du til å prøve å myke meg opp?",
      "suggestion": "Jeg prøver ikke å myke deg opp. Jeg er opptatt av å hjelpe deg å beholde styrken uten eksplosjonen. Hva skjer når du hører det?"
    },
    "dp_self-disclosure_case-carlos_03": {
      "text": "Skremmer noe av dette deg?",
      "suggestion": "Jeg kjenner meg våken og stødig sammen med deg, ikke redd for deg. Hvordan er det å høre meg si det?"
    },
    "dp_self-disclosure_case-carlos_04": {
      "text": "Du tenker sikkert at jeg bare er en sint fyr.",
      "suggestion": "Jeg ser ikke bare en sint fyr. Jeg kjenner både såretheten og stoltheten som kommer så fort. Hva legger du merke til når jeg sier det?"
    },
    "dp_self-disclosure_case-carlos_05": {
      "text": "Er du tøff nok for meg?",
      "suggestion": "Jeg kjenner meg solid sammen med deg akkurat nå. Jeg prøver ikke å overkjøre deg. Hvordan lander det?"
    },
    "dp_self-disclosure_case-carlos_06": {
      "text": "Respekterer du meg?",
      "suggestion": "Jeg respekterer deg. Jeg kjenner det tydeligst når du lar meg se hva sinnet koster. Hva skjer når du hører det?"
    },
    "dp_self-disclosure_case-carlos_07": {
      "text": "Fungerer puste-greiene i det hele tatt for deg?",
      "suggestion": "Å roe ned pusten hjelper meg å holde kontroll, og det er derfor jeg noen ganger bruker det her. Hvordan er det å høre det?"
    },
    "dp_self-disclosure_case-carlos_08": {
      "text": "Er du gift? Mister du noen gang besinnelsen?",
      "suggestion": "Jeg vil holde fokus mer på deg enn på meg, og jeg vil også at du skal vite at jeg ikke dømmer temperamentet ditt. Hvordan lander det?"
    },
    "dp_self-disclosure_case-carlos_09": {
      "text": "Tror du jeg faktisk kan endre meg?",
      "suggestion": "Jeg tror du kan forandre deg. Jeg kjenner det sterkest når jeg hører hvor mye familien din betyr for deg. Hvordan lander det?"
    },
    "dp_self-disclosure_case-carlos_10": {
      "text": "Vær ærlig—liker du å jobbe med meg?",
      "suggestion": "Jeg liker å jobbe med deg. Jeg kjenner forpliktelsen din under rustningen. Hva skjer når du hører det?"
    },
    "dp_self-disclosure_case-nina_01": {
      "text": "Jeg føler meg egoistisk bare av å ta plass her.",
      "suggestion": "Jeg opplever deg ikke som egoistisk her. Jeg kjenner meg beskyttende overfor delen av deg som hele tiden beklager at den har behov. Hva skjer når du hører det?"
    },
    "dp_self-disclosure_case-nina_02": {
      "text": "Dømmer du meg for at jeg bærer nag?",
      "suggestion": "Jeg dømmer ikke bitterheten eller sinnet. Jeg kjenner hvor lenge du har båret for mye alene. Hvordan lander det?"
    },
    "dp_self-disclosure_case-nina_03": {
      "text": "Du tenker sikkert at jeg bare burde skjerpe meg.",
      "suggestion": "Jeg tenker ikke at du bare burde skjerpe deg. Jeg kjenner medfølelse med hvor mye du overstyrer deg selv. Hva skjer når jeg sier det?"
    },
    "dp_self-disclosure_case-nina_04": {
      "text": "Kjenner du noen gang skyld når du hviler?",
      "suggestion": "Jeg kjenner også den skyldfølelsen rundt hvile fra mitt eget liv, og det hjelper meg å ta din på alvor. Hvordan er det å høre det?"
    },
    "dp_self-disclosure_case-nina_05": {
      "text": "Blir du utilpass av at jeg gråter?",
      "suggestion": "Tårene dine gjør meg ikke utilpass. Jeg kjenner meg nærmere deg når de kommer. Hva skjer når du hører det?"
    },
    "dp_self-disclosure_case-nina_06": {
      "text": "Er jeg en belastning for deg?",
      "suggestion": "Du kjennes ikke som en belastning for meg. Jeg kjenner bekymring for hvor alene du er med så mye ansvar. Hvordan lander det?"
    },
    "dp_self-disclosure_case-nina_07": {
      "text": "Er det greit at jeg ber om hjelp her?",
      "suggestion": "Ja, det er greit å be om hjelp her. Jeg blir glad når du gjør det. Hvordan er det å høre det fra meg?"
    },
    "dp_self-disclosure_case-nina_08": {
      "text": "Liker du faktisk å jobbe med meg?",
      "suggestion": "Jeg liker å jobbe med deg. Jeg kjenner varme og et ønske om å hjelpe deg å gi deg selv mer plass her. Hvordan lander det?"
    },
    "dp_self-disclosure_case-nina_09": {
      "text": "Sier du fra hvis jeg gjør terapi feil?",
      "suggestion": "Jeg ville prøvd å si det vennlig hvis jeg tenkte vi var på villspor. Akkurat nå kjenner jeg respekt for hvor åpent du prøver. Hva skjer når du hører det?"
    },
    "dp_self-disclosure_case-nina_10": {
      "text": "Synes du jeg fortjener omsorg?",
      "suggestion": "Jeg mener at du fortjener omsorg, og jeg kjenner det sterkt i rommet sammen med deg akkurat nå. Hvordan er det å høre det?"
    },
    "dp_self-disclosure_case-aisha_01": {
      "text": "Bryr du deg egentlig om meg, eller får du betalt for det?",
      "suggestion": "Jeg bryr meg om deg, og jeg kjenner den omsorgen her sammen med deg. Hva skjer inni deg når du hører meg si det?"
    },
    "dp_self-disclosure_case-aisha_02": {
      "text": "Kommer du til å forlate meg som alle andre?",
      "suggestion": "Jeg kjenner kraften i den frykten, og jeg ønsker å være så tydelig og pålitelig jeg kan for deg. Hvordan er det å høre det?"
    },
    "dp_self-disclosure_case-aisha_03": {
      "text": "Skremte jeg deg da jeg sa jeg ville skade meg?",
      "suggestion": "Du skremte meg ikke bort. Jeg ble bekymret og veldig til stede sammen med deg. Hva skjer når du hører det?"
    },
    "dp_self-disclosure_case-aisha_04": {
      "text": "Du svarte ikke på meldingen min, og det gjorde vondt.",
      "suggestion": "Når jeg hører det, kjenner jeg meg lei meg for hvor vondt det gjorde, og jeg vil forstå det sammen med deg. Hvordan lander det?"
    },
    "dp_self-disclosure_case-aisha_05": {
      "text": "Er du sint på meg?",
      "suggestion": "Jeg er ikke sint på deg. Jeg kjenner hvor redd du er for å miste kontakt. Hva skjer når du hører det?"
    },
    "dp_self-disclosure_case-aisha_06": {
      "text": "Synes du jeg er for mye?",
      "suggestion": "Du kjennes ikke som for mye for meg. Jeg kjenner hvor stor smerten er, og jeg vil gjerne hjelpe deg å holde den sammen. Hvordan lander det?"
    },
    "dp_self-disclosure_case-aisha_07": {
      "text": "Liker du meg?",
      "suggestion": "Jeg kjenner varme for deg, og jeg er glad du spurte meg direkte. Hvordan er det å høre det?"
    },
    "dp_self-disclosure_case-aisha_08": {
      "text": "Er du skuffet over meg?",
      "suggestion": "Jeg er ikke skuffet over deg. Jeg kjenner takknemlighet for at du lar meg se hva som skjer. Hvordan lander det?"
    },
    "dp_self-disclosure_case-aisha_09": {
      "text": "Kan du love å ikke gi meg opp?",
      "suggestion": "Jeg kan ikke love aldri, og jeg kan si at jeg kjenner meg forpliktet til å bli i dette arbeidet med deg og å snakke direkte når frykten viser seg mellom oss. Hvordan er det å høre det?"
    },
    "dp_self-disclosure_case-aisha_10": {
      "text": "Tror du jeg noen gang vil ha det greit?",
      "suggestion": "Jeg kjenner håp sammen med deg, og jeg vil gå sakte nok til at håpet ikke føles som press. Hva skjer når du hører det?"
    },
    "dp_self-disclosure_case-david_01": {
      "text": "Overbevis meg om at dette er verdt tiden min.",
      "suggestion": "Jeg kjenner draget mot å bevise noe når du sier det, og jeg tror det er bedre at vi bruker det øyeblikket til å forstå hva som gjør tillit vanskelig her. Hva skjer når du hører meg si det?"
    },
    "dp_self-disclosure_case-david_02": {
      "text": "Liker du i det hele tatt å jobbe med en som meg?",
      "suggestion": "Jeg liker å jobbe med deg. Jeg kjenner meg engasjert av hvor mye som står på spill for deg under fasaden. Hvordan lander det?"
    },
    "dp_self-disclosure_case-david_03": {
      "text": "Er du i det minste imponert over meg?",
      "suggestion": "Det jeg kjenner sterkest er interesse for deg, ikke et behov for å bli imponert. Hvordan er det å høre det?"
    },
    "dp_self-disclosure_case-david_04": {
      "text": "Vær ærlig—tenker du at jeg er problemet?",
      "suggestion": "Jeg holder ikke deg som problemet. Jeg kjenner hvor raskt skam og forsvar går på hos deg. Hvordan lander det?"
    },
    "dp_self-disclosure_case-david_05": {
      "text": "Er du lei?",
      "suggestion": "Jeg er ikke lei. Jeg kjenner hvor kostbare disse mønstrene er for deg. Hva skjer når du hører det?"
    },
    "dp_self-disclosure_case-david_06": {
      "text": "Sier du fra hvis jeg driter meg ut?",
      "suggestion": "Jeg ville prøvd å være direkte og respektfull hvis jeg tenkte at du overså noe. Akkurat nå kjenner jeg meg investert i å hjelpe deg til å få mer valgfrihet i de øyeblikkene. Hvordan er det å høre det?"
    },
    "dp_self-disclosure_case-david_07": {
      "text": "Skammer du deg noen gang over å ta feil?",
      "suggestion": "Jeg kjenner også skam rundt å ta feil i mitt eget liv, og det hjelper meg å respektere hvor hett det er for deg. Hva legger du merke til når du hører det?"
    },
    "dp_self-disclosure_case-david_08": {
      "text": "Synes du jeg er kald?",
      "suggestion": "Akkurat nå opplever jeg deg ikke som kald. Jeg kjenner hvor beskyttet du blir når det gjør vondt. Hva skjer når du hører det?"
    },
    "dp_self-disclosure_case-david_09": {
      "text": "Er du gift? Får det deg til å dømme affæren min?",
      "suggestion": "Jeg vil holde fokus på hva affæren betyr her, heller enn på min relasjon, og jeg kan si tydelig at jeg ikke er interessert i å dømme deg. Hvordan lander det?"
    },
    "dp_self-disclosure_case-david_10": {
      "text": "Respekterer du meg egentlig?",
      "suggestion": "Jeg respekterer deg. Jeg kjenner det sterkest når du lar de vanskeligere sidene bli synlige her. Hva skjer når du hører det?"
    },
    "dp_self-disclosure_case-marcus_01": {
      "text": "Tror du jeg er ødelagt?",
      "suggestion": "Jeg ser ikke noe ødelagt i deg. Jeg kjenner respekt for hvor hardt du har arbeidet for å overleve. Hvordan lander det?"
    },
    "dp_self-disclosure_case-marcus_02": {
      "text": "Er du frustrert over at jeg ikke føler så mye?",
      "suggestion": "Jeg er ikke frustrert. Jeg kjenner tålmodighet og varsomhet med tempoet du trenger. Hva skjer når du hører det?"
    },
    "dp_self-disclosure_case-marcus_03": {
      "text": "Går dette inn på deg?",
      "suggestion": "Det går inn på meg, og jeg holder meg stødig med vilje så du ikke skal måtte bære det alene. Hvordan lander det?"
    },
    "dp_self-disclosure_case-marcus_04": {
      "text": "Vil du ha meg her i det hele tatt?",
      "suggestion": "Jeg vil ha deg her. Jeg kjenner meg glad når du møter opp, også på dager med få ord. Hva legger du merke til når jeg sier det?"
    },
    "dp_self-disclosure_case-marcus_05": {
      "text": "Kommer du til å presse meg inn i ting?",
      "suggestion": "Jeg planlegger ikke å presse deg. Jeg er mer opptatt av at dette skal være tålelig enn av å gå fort. Hvordan lander det?"
    },
    "dp_self-disclosure_case-marcus_06": {
      "text": "Tror du jeg kan endre meg?",
      "suggestion": "Jeg tror endring er mulig, og jeg kjenner tålmodighet med hvor sakte den kanskje må gå. Hva skjer når du hører det?"
    },
    "dp_self-disclosure_case-marcus_07": {
      "text": "Ville du sagt fra om jeg sløste bort tiden din?",
      "suggestion": "Hvis jeg tenkte at vi bommet på hverandre, ville jeg ønske å si det. Akkurat nå kjenner jeg at denne tiden betyr noe. Hvordan lander det?"
    },
    "dp_self-disclosure_case-marcus_08": {
      "text": "Blir du skremt av traumahistorier?",
      "suggestion": "Jeg kjenner sorg og omsorg når jeg hører traumefortellinger, og jeg arbeider hardt for å holde meg jordet i dem. Hva legger du merke til når du hører det?"
    },
    "dp_self-disclosure_case-marcus_09": {
      "text": "Liker du å jobbe med veteraner?",
      "suggestion": "Jeg kjenner respekt for veteraner og for deg spesielt, og jeg vil at dette rommet skal kjennes stødigere enn de fleste steder har gjort. Hvordan lander det?"
    },
    "dp_self-disclosure_case-marcus_10": {
      "text": "Er du komfortabel med stillhet?",
      "suggestion": "Jeg er komfortabel med stillhet. Jeg kjenner ofte nærvær i stillhet, ikke avstand. Hva skjer når du hører det?"
    },
    "dp_marker-recognition-chairwork_case-sara_01": {
      "text": "Jeg hører en stemme som sier: «Slutt å være trengende, skjerp deg.»",
      "suggestion": "Det høres ut som en selvkritisk splittelse. Hvis du vil, kan vi sette kritikeren i én stol og den sårede siden i den andre. La kritikeren snakke først i noen korte, direkte linjer, og så bytter du stol og svarer fra den sårede siden mens jeg hjelper oss med tempoet."
    },
    "dp_marker-recognition-chairwork_case-sara_02": {
      "text": "Jeg vil fortelle eksen hvor liten jeg følte meg, men det føles meningsløst nå.",
      "suggestion": "Jeg hører uavsluttet oppgjør med eksen din. Vi kan sette ham i den tomme stolen og la deg si det som fortsatt lever i deg, noen linjer om gangen, mens jeg bremser hvis det trengs."
    },
    "dp_marker-recognition-chairwork_case-sara_03": {
      "text": "Hver gang jeg får tårer, sier en annen del: «Ta deg sammen.»",
      "suggestion": "Det er enda en kritikermarkør. La oss gi «ta deg sammen» én stol og den gråtende delen den andre. Vi kan la hver side snakke kort, så den sårbare delen ikke bare blir tiet ned."
    },
    "dp_marker-recognition-chairwork_case-michael_01": {
      "text": "Faren min ville kalt meg myk for å føle meg såret.",
      "suggestion": "Jeg hører uavsluttet oppgjør med faren din. Hvis du vil, kan du sette ham i denne stolen og si hva det kostet å få sårethet behandlet som svakhet. Jeg holder det strukturert og kort."
    },
    "dp_marker-recognition-chairwork_case-michael_02": {
      "text": "I hodet sier jeg: «Få kontroll, du er patetisk.»",
      "suggestion": "Det er et hardt selvangrep. La oss sette stemmen som sier «patetisk» i én stol og delen den skammer i den andre, og la dem ta én runde hver."
    },
    "dp_marker-recognition-chairwork_case-michael_03": {
      "text": "En del sier at jeg må være perfekt; en annen del er bare sliten.",
      "suggestion": "Det er en tydelig splitt mellom den krevende delen og den utslitte delen. Vi kan gi hver av dem en stol og la dem snakke direkte til hverandre mens jeg guider rundene."
    },
    "dp_marker-recognition-chairwork_case-jason_01": {
      "text": "Jeg hører: «Ikke vis deg frem, du kommer til å dumme deg ut.»",
      "suggestion": "Jeg hører en kritiker som prøver å stenge deg ned. La oss gi den stemmen én stol og den mer stille, utsatte delen av deg den andre, og la hver side snakke i korte runder."
    },
    "dp_marker-recognition-chairwork_case-jason_02": {
      "text": "Jeg spiller av vennen som sluttet å snakke til meg på videregående.",
      "suggestion": "Det høres ut som uavsluttet oppgjør med den vennen. Vi kan sette ham i den tomme stolen og la deg si det som aldri fikk bli sagt den gangen, bare noen linjer om gangen."
    },
    "dp_marker-recognition-chairwork_case-jason_03": {
      "text": "En del vil prøve, en annen del stopper meg.",
      "suggestion": "Det er en splitt mellom delen som vil ha kontakt og delen som stenger deg ned. Vi kan gi hver del en stol og la dem si hva de er redde for."
    },
    "dp_marker-recognition-chairwork_case-laura_01": {
      "text": "Når noen er snill, sier en stemme: «Ikke stol på det.»",
      "suggestion": "Det høres ut som en beskyttermarkør. Hvis det kjennes trygt nok, kan vi sette den mistroiske beskytteren i én stol og delen som lengter etter vennlighet i den andre, og holde rundene veldig korte."
    },
    "dp_marker-recognition-chairwork_case-laura_02": {
      "text": "Jeg vil fortsatt si til moren min at hun ikke beskyttet meg.",
      "suggestion": "Jeg hører uavsluttet oppgjør med moren din rundt det å ikke bli beskyttet. Vi kan bruke den tomme stolen i en forsiktig, dosert runde, så du kan si det som fortsatt lever der."
    },
    "dp_marker-recognition-chairwork_case-laura_03": {
      "text": "En del sier: «Ikke kjenn noe, ellers blir du såret.»",
      "suggestion": "Det er en splitt mellom delen som blir nummen og delen som fortsatt kjenner. La oss gi hver side en stol og la dem fortelle hva de prøver å gjøre for deg."
    },
    "dp_marker-recognition-chairwork_case-carlos_01": {
      "text": "En stemme sier: «Hvis du ikke er på topp, er du ingenting.»",
      "suggestion": "Den «øverst eller ingenting»-stemmen er en tydelig kritikermarkør. La oss sette den stemmen i én stol og delen som ender med å føle seg liten i den andre, og la hver side snakke rett fram."
    },
    "dp_marker-recognition-chairwork_case-carlos_02": {
      "text": "Jeg skulle ønske jeg kunne si til faren min hva beltet hans gjorde med meg.",
      "suggestion": "Jeg hører uavsluttet oppgjør med faren din og det beltet lærte deg. Hvis du vil, kan du sette ham i denne stolen og si hva det gjorde med deg, noen sterke linjer om gangen."
    },
    "dp_marker-recognition-chairwork_case-carlos_03": {
      "text": "En del av meg vil beskytte; en annen del skammer seg etterpå.",
      "suggestion": "Det høres ut som en splitt mellom delen som går til kamp og delen som skammer seg etterpå. Vi kan gi hver av dem en stol og la dem snakke direkte."
    },
    "dp_marker-recognition-chairwork_case-nina_01": {
      "text": "En stemme sier: «Ikke be om hjelp, du er egoistisk.»",
      "suggestion": "Det er en tydelig kritiker. La oss sette «egoistisk»-stemmen i én stol og den trengende delen i den andre, og la hver side snakke en kort runde mens jeg guider deg."
    },
    "dp_marker-recognition-chairwork_case-nina_02": {
      "text": "Jeg vil si til eksen at jeg følte meg forlatt med alt ansvaret og all skylden.",
      "suggestion": "Jeg hører uavsluttet oppgjør med eksen din rundt skyld, husarbeid og det å bære for mye alene. Vi kan bruke den tomme stolen så du kan si det du måtte svelge den gangen."
    },
    "dp_marker-recognition-chairwork_case-nina_03": {
      "text": "Jeg klarer ikke velge mellom å gjøre andre til lags og å si fra.",
      "suggestion": "Det høres ut som en splitt mellom delen som gjør andre til lags og delen som vil si fra. Vi kan gi hver av dem en stol og la dem si hva de frykter vil skje."
    },
    "dp_marker-recognition-chairwork_case-aisha_01": {
      "text": "En del skriker: «Skyv dem vekk før de forlater deg.»",
      "suggestion": "Jeg hører en sterk beskytter som prøver å skyve bort før den blir forlatt. Hvis det kjennes trygt nok, kan vi sette den bortskyvende delen i én stol og den lengtende delen i den andre, og holde rundene korte og forankrede."
    },
    "dp_marker-recognition-chairwork_case-aisha_02": {
      "text": "Jeg vil spørre moren min hvorfor hun forlot meg.",
      "suggestion": "Det høres ut som uavsluttet oppgjør med moren din. Vi kan bruke den tomme stolen i noen få linjer om gangen, så du kan spørre det som aldri har fått en plass."
    },
    "dp_marker-recognition-chairwork_case-aisha_03": {
      "text": "Inni meg hører jeg: «Du er for mye til å elske.»",
      "suggestion": "Det er en hard kritikerbeskjed. La oss sette «for mye til å bli elsket» i én stol og delen som bærer smerten i den andre, og la hver side snakke kort."
    },
    "dp_marker-recognition-chairwork_case-david_01": {
      "text": "En stemme sier: «Vær best, ellers er du ingenting.»",
      "suggestion": "Det høres ut som en krevende driver. Vi kan sette «vær best eller vær ingenting» i én stol og delen som betaler prisen i den andre, og la dem snakke direkte."
    },
    "dp_marker-recognition-chairwork_case-david_02": {
      "text": "Jeg vil fortsatt si til faren min at jeg var mer enn bare resultatene mine.",
      "suggestion": "Jeg hører uavsluttet oppgjør med faren din rundt det å bli verdsatt bare for resultater. Vi kan bruke den tomme stolen og la deg si det som aldri fikk bli sagt til ham."
    },
    "dp_marker-recognition-chairwork_case-david_03": {
      "text": "En del vil ha nærhet; en annen del stenger det ned.",
      "suggestion": "Det er en splitt mellom delen som vil ha nærhet og delen som stenger den ned. La oss gi hver side en stol og la dem fortelle hva de beskytter."
    },
    "dp_marker-recognition-chairwork_case-marcus_01": {
      "text": "En del sier: «Ikke føl, bare hold vakt.»",
      "suggestion": "Jeg hører en sterk vaktdel. Hvis det kjennes mulig, kan vi sette vakten i én stol og den ensomme delen den beskytter i den andre, og holde rundene langsomme og korte."
    },
    "dp_marker-recognition-chairwork_case-marcus_02": {
      "text": "Jeg vil si til den yngre utgaven av meg at han ikke fortjente det som skjedde.",
      "suggestion": "Det høres ut som uavsluttet oppgjør med den yngre deg. Vi kan bruke den tomme stolen og la deg si direkte til ham det han aldri fikk høre, én eller to linjer om gangen."
    },
    "dp_marker-recognition-chairwork_case-marcus_03": {
      "text": "Når noen prøver å komme nær, trekker jeg meg unna.",
      "suggestion": "Det er en splitt mellom delen som søker trygghet gjennom avstand og delen som fortsatt vil ha kontakt. Vi kan gi hver av dem en stol og la dem si hva de er redde for."
    },
    "dp_alliance-repair_case-sara_01": {
      "text": "Forrige uke da jeg gråt, føltes det som du gikk videre for fort.",
      "suggestion": "Takk for at du sier det. Jeg ser hvordan det kunne kjennes som om jeg beveget meg bort mens du fortsatt hadde vondt, og det beklager jeg. Hva ville hjulpet deg å kjenne at jeg ble hos deg litt lenger?"
    },
    "dp_alliance-repair_case-sara_02": {
      "text": "Da du spurte om jobb igjen, føltes det som om du ikke skjønte hvor vondt dette er.",
      "suggestion": "Du har rett, jeg ble for raskt praktisk og mistet smerten. Det beklager jeg. Kan vi gå tilbake og bli ved det som kjentes mest alene der?"
    },
    "dp_alliance-repair_case-sara_03": {
      "text": "Jeg er redd du synes jeg er for trengende for terapi.",
      "suggestion": "Jeg er glad du sa det. Hvis noe jeg gjorde ga næring til frykten for å være for mye her, vil jeg eie det. Hva trenger du fra meg når den frykten dukker opp hos deg?"
    },
    "dp_alliance-repair_case-michael_01": {
      "text": "Da du sa at jeg hørtes såret ut, føltes det som om du kalte meg svak.",
      "suggestion": "Jeg ser hvordan «såret» kunne lande som «svak», og det beklager jeg. Jeg mente respekt, ikke å gjøre deg mindre. Hvilke ord fra meg ville gjort det lettere å holde deg åpen i stedet for å spenne deg?"
    },
    "dp_alliance-repair_case-michael_02": {
      "text": "Du fortsetter å presse følelser; jeg sa jeg trenger verktøy.",
      "suggestion": "Du har rett i at jeg lente meg for hardt inn i følelser og mistet ønsket ditt om noe brukbart. Det beklager jeg. Hva ville kjennes som riktig balanse i dag?"
    },
    "dp_alliance-repair_case-michael_03": {
      "text": "Da du pauset og så på meg, følte jeg meg dømt.",
      "suggestion": "Takk for at du sier det. Pausen min føltes dømmende for deg, og det betyr mer enn intensjonen min. Hva ville hjulpet rommet til å kjennes mindre konfronterende akkurat nå?"
    },
    "dp_alliance-repair_case-jason_01": {
      "text": "Da det var stille så lenge, følte jeg at jeg feilet.",
      "suggestion": "Jeg er glad du fortalte det. Stillheten ble for lang for deg og ble til press. Det beklager jeg. Hvilken form for tempo ville hjulpet deg å kjenne deg mer ledsaget?"
    },
    "dp_alliance-repair_case-jason_02": {
      "text": "Du så på klokka og jeg følte meg uviktig.",
      "suggestion": "Jeg ser hvordan klokkeblikket kunne gjøre vondt, og det beklager jeg. Hva ville hjulpet avslutninger til å kjennes mindre brå og mindre som å bli sluppet?"
    },
    "dp_alliance-repair_case-jason_03": {
      "text": "Jeg følte meg presset da du spurte om kroppen med en gang.",
      "suggestion": "Du har rett, jeg gikk for fort inn i kroppen. Det beklager jeg. Hva ville gjort det tryggere å nærme seg dette ett lite steg av gangen?"
    },
    "dp_alliance-repair_case-laura_01": {
      "text": "Da du spurte om barndommen, følte jeg meg eksponert og ville gå.",
      "suggestion": "Takk for at du ble og sa det. Jeg ser hvordan det spørsmålet eksponerte for mye for fort, og det beklager jeg. Hva ville hjulpet deg å kjenne deg tryggere med meg akkurat nå?"
    },
    "dp_alliance-repair_case-laura_02": {
      "text": "Da døra smalt ute, ble jeg blank og du fortsatte å snakke.",
      "suggestion": "Du har rett, jeg overså øyeblikket da du forsvant etter at døra smalt. Det beklager jeg. Hvilket signal kunne vi brukt så jeg fanger det tidligere neste gang?"
    },
    "dp_alliance-repair_case-laura_03": {
      "text": "Du snakket fort, og jeg hang ikke med.",
      "suggestion": "Jeg hører at tempoet mitt gjorde at du mistet kontakten. Det beklager jeg. Hvilken fart eller stil fra meg ville gjort det lettere å være til stede?"
    },
    "dp_alliance-repair_case-carlos_01": {
      "text": "Da du kalte det «brenning i brystet», føltes det som du dømte sinnet mitt.",
      "suggestion": "Jeg hører at ordene mine føltes dømmende, og det beklager jeg. Jeg vil gjerne følge sinnet ditt uten å se ned på deg. Hvilket språk fra meg ville kjennes mer respektfullt?"
    },
    "dp_alliance-repair_case-carlos_02": {
      "text": "Du ber meg bremse hele tiden; det høres mykt ut.",
      "suggestion": "Du har rett, «ro ned» landet feil hos deg. Det beklager jeg. Hvilken formulering ville fått det til å kjennes mer som kontroll enn som mykhet?"
    },
    "dp_alliance-repair_case-carlos_03": {
      "text": "Da jeg snakket om ungen min, så du bort og jeg følte meg avvist.",
      "suggestion": "Jeg setter pris på at du sier det. Å se bort kostet kontakt i et viktig øyeblikk, og det beklager jeg. Vil du gå tilbake til det som skjedde da du nevnte sønnen din?"
    },
    "dp_alliance-repair_case-nina_01": {
      "text": "Da jeg gråt, var du stille og jeg følte meg alene i det.",
      "suggestion": "Takk for at du sier det. Stillheten min lot deg sitte alene med tårene, og det beklager jeg. Hva ville kjennes mer støttende fra meg når følelsene stiger?"
    },
    "dp_alliance-repair_case-nina_02": {
      "text": "Det kjentes som du tok eksens side om husarbeidet.",
      "suggestion": "Jeg ser hvordan det kunne høres ut som om jeg var på hans side, og det beklager jeg. Jeg vil forstå dere begge uten å etterlate deg alene i din opplevelse. Hva trenger du at jeg forstår først?"
    },
    "dp_alliance-repair_case-nina_03": {
      "text": "Jeg er redd jeg kaster bort tiden din.",
      "suggestion": "Jeg er glad du sa det. Hvis jeg ga inntrykk av at denne tiden ikke var verdt å ta, vil jeg eie det. Hva hjelper terapi til å kjennes mest meningsfull for deg?"
    },
    "dp_alliance-repair_case-aisha_01": {
      "text": "Da du ikke svarte raskt på meldingen min, fikk jeg panikk og følte meg forlatt.",
      "suggestion": "Jeg ser hvordan mellomrommet kunne kjennes som forlatelse, og jeg beklager at det landet slik. Før vi snakker om det praktiske, hva gjorde mest vondt i det tomrommet?"
    },
    "dp_alliance-repair_case-aisha_02": {
      "text": "Å avslutte presis på tiden føltes som at du slapp meg.",
      "suggestion": "Takk for at du sier det. Avslutningen på tiden kjentes som om jeg slapp deg, og det beklager jeg. Hva ville hjelpe avslutninger til å kjennes mer holdt og mindre brå?"
    },
    "dp_alliance-repair_case-aisha_03": {
      "text": "Da du foreslo en pause, hørtes det ut som om du ga opp meg.",
      "suggestion": "Jeg hører at «pause» hørtes ut som å gi deg opp. Det beklager jeg. Hvilke ord eller handlinger fra meg ville gjort at trygghet kjentes mindre som avvisning?"
    },
    "dp_alliance-repair_case-david_01": {
      "text": "Da du utfordret meg, føltes det som et angrep.",
      "suggestion": "Jeg hører at utfordringen min landet som et angrep, og det beklager jeg. Hva ville hjulpet deg å kjenne at jeg er på din side også når jeg utfordrer litt?"
    },
    "dp_alliance-repair_case-david_02": {
      "text": "Du er for opptatt av følelser. Jeg ba om strategi.",
      "suggestion": "Du har rett, jeg lente meg for langt inn i følelser og ikke nok inn i strategi. Det beklager jeg. Hva ville kjennes som riktig balanse mellom dybde og nytte i dag?"
    },
    "dp_alliance-repair_case-david_03": {
      "text": "Det kjentes som om du tok konas parti.",
      "suggestion": "Jeg ser hvordan det kunne høres ut som om jeg var på konas side, og det beklager jeg. Hva trengte du mest at jeg forsto om din side av det?"
    },
    "dp_alliance-repair_case-marcus_01": {
      "text": "Da jeg sa at jeg ikke følte noe, fortsatte du å spørre og jeg stengte ned.",
      "suggestion": "Du har rett, jeg gikk forbi kanten din da du sa «ingenting». Det beklager jeg. Hvilket tempo ville hjulpet deg å være sammen med meg uten å stenge ned?"
    },
    "dp_alliance-repair_case-marcus_02": {
      "text": "Du satt for nærme, og jeg ble urolig.",
      "suggestion": "Takk for at du sier det. At jeg satt så nær gjorde deg anspent, og det beklager jeg. Hvor i rommet ville det kjennes tryggere at jeg var?"
    },
    "dp_alliance-repair_case-marcus_03": {
      "text": "Da du spurte om marerittene, følte jeg meg presset.",
      "suggestion": "Jeg hører at marerittspørsmålet føltes som press, og det beklager jeg. Hva ville hjulpet traumetematikken til å kjennes mer valgfri og mindre påtvunget?"
    }
  }
};
