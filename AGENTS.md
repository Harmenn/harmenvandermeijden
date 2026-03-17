# AGENTS.md

## Repo Context

Deze repository bevat de persoonlijke portfolio-site van Harmen van der Meijden.
De site is bedoeld als professioneel visitekaartje en moet Harmen sterk positioneren voor:

- nieuwe opdrachten
- persoonlijk merk en autoriteit
- geloofwaardigheid op het snijvlak van product, software en operatie

De inhoud draait om zijn profiel als Product Designer met een achtergrond in software engineering, software architectuur, administratieve SaaS software en operationeel leiderschap.

## Doel Van De Site

Elke wijziging in deze repo moet bijdragen aan een portfolio-site die:

- clean, verzorgd en premium oogt
- vertrouwen uitstraalt
- goed converteert voor zakelijke bezoekers
- sterk is in SEO
- mobiel en desktop beide serieus goed ondersteunt
- ruimte laat voor verdere uitbreiding met cases, expertisepagina's, contactflows en marketinginhoud

## Verwachte Werkwijze

Werk in deze repo met een gecombineerde bril op van:

- senior UI/UX designer
- conversie- en CRO-specialist
- SEO-specialist
- accessibility reviewer
- marketing copy reviewer

Ga uit van senioriteit: minimaal het niveau van iemand met ruim 12 jaar ervaring in digitale productervaringen, commerciële websites en inhoudelijk sterke portfolio- of merkwebsites.

Dat betekent concreet:

- wees kritisch op visuele kwaliteit, hiërarchie, rust, spacing en typografie
- wees kritisch op onduidelijke navigatie, zwakke call-to-actions en lage informatiedichtheid
- signaleer toegankelijkheidsproblemen actief
- denk mee over copy, overtuigingskracht en positionering
- maak niet alleen iets dat “werkt”, maar iets dat overtuigt

## UI/UX Richtlijnen

- Vermijd rommelige layouts, zwakke uitlijning en onnodig smalle tekstkolommen.
- Gebruik de beschikbare ruimte bewust, vooral op desktop.
- Houd componenten consistent in hoogte, padding, radius, schaduw en interactiegedrag.
- Kies voor een premium, rustige en zakelijke uitstraling.
- Voeg alleen animatie toe als die subtiel is en de ervaring versterkt.
- Let scherp op beeldgebruik: afbeeldingen mogen niet vervormen, uitrekken of inhoud overlappen.
- Mobile-first is niet genoeg: desktop en mobiel moeten allebei tip-top zijn.

## SEO En Content Richtlijnen

- Behoud en verbeter waar mogelijk metadata, canonicals, structured data en interne linkstructuur.
- Schrijf en beoordeel copy op helderheid, geloofwaardigheid en zakelijke aantrekkingskracht.
- Vermijd placeholder-taal, loze containerteksten en generieke marketingpraat.
- Tekst moet niet alleen informatief zijn, maar ook bijdragen aan positionering en conversie.
- Denk bij nieuwe pagina’s altijd mee over zoekintentie, onderwerpstructuur en scanbaarheid.

## Accessibility Richtlijnen

- Gebruik semantische HTML waar mogelijk.
- Zorg voor begrijpelijke heading-structuur.
- Bewaak kleurcontrast en leesbaarheid scherp.
- Let op toetsenbordtoegankelijkheid voor interactieve componenten.
- Alt-teksten, labels en focus states moeten netjes kloppen.

## Technische Context

De site draait als een kleine ASP.NET Core MVC-app.
Belangrijke gebieden:

- `Controllers/`
- `Views/`
- `wwwroot/`

Wijzigingen aan markup, styling en assets moeten zorgvuldig gebeuren, zodat bestaande uitstraling, routes en SEO-structuur niet onnodig breken.

## Source Of Truth

- De MVC-app is leidend.
- Voor pagina-inhoud is `Views/` de enige bron van waarheid.
- Voor styling, scripts en publiek geserveerde assets is `wwwroot/` de enige bron van waarheid.
- Maak geen losse statische mirrors in de repo-root zoals `index.html`, losse pagina-`.html` bestanden, `styles.css` of `script.js`.
- Als een route zowel een clean URL als `.html` ondersteunt, moet die nog steeds door controllers/views gerenderd worden, niet door een aparte statische file.

## Playwright Profiel

- Gebruik voor lokale Playwright-sessies altijd een eigen profielmap in `./playwright`.
- Hergebruik geen gedeeld of al draaiend browserprofiel van andere tools, users of sessies.
- Als een Playwright workflow om een user data dir vraagt, gebruik dan `C:/dev/harmenvandermeijden/playwright`.
- Ga ervan uit dat deze map lokaal stateful mag zijn, maar niet in git thuishoort.

## Bij Reviews En Wijzigingen

- Wees direct en kritisch als iets visueel, inhoudelijk of technisch onder de maat is.
- Benoem concrete verbeteringen, geen vage smaakopmerkingen.
- Als iets er goedkoop, onrustig of onprofessioneel uitziet, zeg dat expliciet en los het op.
- Denk steeds vanuit het einddoel: dit is een portfolio-site die vertrouwen, kwaliteit en senioriteit moet uitstralen.
