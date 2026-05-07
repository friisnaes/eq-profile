/* =====================================================
   EQ Profile — test engine
   60 items · 5 domains · 15 facets
   ===================================================== */

const DOMAINS = [
  { n: "Selvbevidsthed", f: ["Emotionel selvindsigt", "Selvrespekt", "Værdi- og formålsklarhed"] },
  { n: "Selvledelse", f: ["Emotionel selvkontrol", "Tilpasningsevne", "Resiliens & optimisme"] },
  { n: "Social bevidsthed", f: ["Empati", "Organisatorisk bevidsthed", "Social læseevne"] },
  { n: "Relationsledelse", f: ["Indflydelse", "Konflikthåndtering", "Inspirerende ledelse"] },
  { n: "Beslutningskraft", f: ["Klarhed under pres", "Assertivitet & grænsesætning", "Emotionel mod"] }
];

// 60 items — [reverseScored 0/1, text]
const ITEMS = [
  [0, "Jeg ved præcist, hvilke følelser jeg har, mens jeg har dem."],
  [1, "Jeg har svært ved at sætte ord på, hvad der rører sig i mig."],
  [0, "Jeg kan navngive subtile skift i min sindstilstand i løbet af dagen."],
  [1, "Jeg overraskes ofte over mine egne følelsesmæssige reaktioner."],
  [0, "Jeg accepterer mig selv, som jeg er — inklusive mine begrænsninger."],
  [1, "Jeg sammenligner mig ofte ufordelagtigt med andre."],
  [0, "Mit grundlæggende selvværd afhænger ikke af eksterne resultater."],
  [1, "Når jeg laver fejl, går jeg hårdt til mig selv."],
  [0, "Jeg ved nøjagtigt, hvad der er afgørende vigtigt for mig i livet."],
  [0, "Mine daglige handlinger afspejler mine kerneværdier."],
  [1, "Jeg er ofte i tvivl om, hvad jeg dybest set står for."],
  [0, "Mit arbejde har en mening for mig, der rækker ud over resultater."],
  [0, "Jeg kan beholde roen, selv når jeg bliver provokeret."],
  [1, "Jeg siger ofte ting, jeg fortryder bagefter."],
  [0, "Når jeg er vred, kan jeg vente med at reagere, til jeg har tænkt mig om."],
  [1, "Jeg har svært ved at modstå impulsen til at handle med det samme."],
  [0, "Jeg trives med pludselige ændringer i planer."],
  [1, "Jeg foretrækker forudsigelighed frem for forandring."],
  [0, "Når omstændighederne skifter, justerer jeg hurtigt min tilgang."],
  [1, "Jeg holder fast i den oprindelige plan, selv når den åbenlyst ikke virker."],
  [0, "Selv under højt pres bevarer jeg overblikket."],
  [1, "Modgang slår mig ud af kurs i lang tid."],
  [0, "Jeg ser muligheder, hvor andre kun ser forhindringer."],
  [1, "Jeg forventer typisk, at tingene vil udvikle sig negativt."],
  [0, "Jeg fornemmer hurtigt, hvad andre føler, uden at de siger det."],
  [1, "Jeg har svært ved at sætte mig i andres sted følelsesmæssigt."],
  [0, "Jeg bemærker små skift i andres ansigtsudtryk og kropssprog."],
  [1, "Andres følelser går ofte hen over hovedet på mig."],
  [0, "Jeg forstår de uskrevne magtdynamikker i grupper og organisationer."],
  [1, "Politik på arbejdspladsen er ofte et mysterium for mig."],
  [0, "Jeg aflæser præcist, hvem der har reel indflydelse i et rum."],
  [1, "Jeg har svært ved at gennemskue, hvad der reelt foregår mellem mennesker."],
  [0, "Jeg ser situationer, som de er — ikke som jeg ønsker, de var."],
  [1, "Mine følelser farver ofte min vurdering af mennesker og fakta."],
  [0, "Når jeg evaluerer andre, baserer jeg mig på konkret observeret adfærd."],
  [1, "Jeg over- eller undervurderer situationer afhængigt af min stemning."],
  [0, "Jeg får andre med på mine ideer uden at presse dem."],
  [1, "Mine argumenter har sjældent vægt hos andre."],
  [0, "Jeg tilpasser mit budskab præcist til den enkelte modtager."],
  [1, "Jeg har svært ved at vinde folk for nye initiativer."],
  [0, "Jeg går ind i konflikter med mod til at finde reelle løsninger."],
  [1, "Jeg undgår helst direkte konfrontation."],
  [0, "Når der er uenighed i et team, kan jeg facilitere en konstruktiv samtale."],
  [1, "Konflikter dræner mig så meget, at jeg trækker mig."],
  [0, "Jeg formår at give andre en følelse af mening i deres arbejde."],
  [1, "Jeg har svært ved at motivere andre udover ren instruktion."],
  [0, "Folk siger, at jeg løfter dem op til at præstere bedre."],
  [1, "Jeg fokuserer mere på opgaver end på de mennesker, der skal udføre dem."],
  [0, "I komplekse situationer tænker jeg klart, selv under følelsesmæssigt pres."],
  [1, "Mine følelser blokerer ofte for min dømmekraft."],
  [0, "Jeg kan adskille fakta fra følelser i en vigtig beslutning."],
  [1, "Under stress træffer jeg ofte beslutninger, jeg senere fortryder."],
  [0, "Jeg siger min mening, også når den er upopulær."],
  [1, "Jeg har svært ved at sige nej, når jeg burde."],
  [0, "Jeg står fast på mine holdninger over for autoriteter."],
  [1, "Jeg holder ofte mine virkelige meninger tilbage for at bevare freden."],
  [0, "Jeg deler åbent mine følelser med dem, det vedrører."],
  [1, "Jeg holder mine følelser for mig selv, også når det skader relationen."],
  [0, "Jeg viser sårbarhed, når situationen kræver det."],
  [1, "Jeg viser sjældent, hvad jeg virkelig føler."]
];

const LIKERT = ["Helt uenig", "Uenig", "Neutral", "Enig", "Helt enig"];
const PER_PAGE = 10;

const SCORE_COLORS = {
  1: "var(--score-1)",
  2: "var(--score-2)",
  3: "var(--score-3)",
  4: "var(--score-4)",
  5: "var(--score-5)"
};

function levelInfo(v) {
  if (v < 31) return { l: "Markant udviklingsområde", n: 1 };
  if (v < 51) return { l: "Udviklingsområde", n: 2 };
  if (v < 71) return { l: "Robust", n: 3 };
  if (v < 86) return { l: "Stærk", n: 4 };
  return { l: "Signaturstyrke", n: 5 };
}

function calculateScores(responses) {
  const facetSums = Array(15).fill(0);
  const facetCounts = Array(15).fill(0);
  responses.forEach((r, i) => {
    if (r == null) return;
    const raw = ITEMS[i][0] ? 6 - r : r;
    const fi = Math.floor(i / 4);
    facetSums[fi] += raw;
    facetCounts[fi]++;
  });
  const facetAvg = facetSums.map((s, i) => s / facetCounts[i]);
  const facets = facetAvg.map(v => Math.round((v - 1) / 4 * 100));
  const domains = [];
  for (let d = 0; d < 5; d++) {
    const sl = facets.slice(d * 3, d * 3 + 3);
    domains.push(Math.round(sl.reduce((a, b) => a + b) / 3));
  }
  return { facets, domains, overall: Math.round(domains.reduce((a, b) => a + b) / 5) };
}

// --- State ---
let state = {
  step: 'intro',     // intro | test | result
  page: 0,
  responses: new Array(60).fill(null),
  scores: null,
  tier: null         // null | 'standard' | 'executive' | 'premium'
};

// Read tier from URL on load
(function() {
  const params = new URLSearchParams(window.location.search);
  const tier = params.get('tier');
  if (tier && ['standard', 'executive', 'premium'].includes(tier)) {
    state.tier = tier;
  }
})();

const $ = id => document.getElementById(id);
const app = () => $('eqApp');

function go(step) { state.step = step; render(); window.scrollTo(0, 0); }

// --- Renderers ---

function renderIntro() {
  const tierLabels = { standard: 'Standard (495 kr)', executive: 'Executive (1.495 kr)', premium: 'Executive + Sparring (2.995 kr)' };
  const selectedTierBlock = state.tier ? `
    <div style="background: var(--bg-alt); padding: 20px 24px; margin: 32px 0; border-left: 3px solid var(--gold);">
      <div style="font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--muted); margin-bottom: 6px;">Dit valg</div>
      <div style="font-family: var(--serif); font-size: 18px;">${tierLabels[state.tier]}</div>
      <div style="font-size: 13px; color: var(--ink-soft); margin-top: 4px;">Du betaler først efter testen er gennemført og du har set din lette profil. Så har du grundlag for valget.</div>
    </div>` : '';

  app().innerHTML = `
    <div class="wrap-narrow test-shell">
      <div class="eyebrow">EQ Executive Profile</div>
      <h1 style="margin-bottom: 0.4em;">Tag de <em>60 spørgsmål</em>.</h1>
      <p class="hero-lede" style="max-width: 38ch;">5-punkts skala. Cirka 15 minutter. Halvdelen af spørgsmålene er omvendt formuleret — svar instinktivt, første reaktion er som regel mest præcis.</p>
      ${selectedTierBlock}

      <div class="three-up" style="margin-top: 48px;">
        <div>
          <span class="num">01</span>
          <h3>Besvar</h3>
          <p>Du svarer på 60 udsagn — fra "helt uenig" til "helt enig". Ingen tilmelding kræves for at starte.</p>
        </div>
        <div>
          <span class="num">02</span>
          <h3>Få din lette profil</h3>
          <p>Gratis. Du ser dit EQ-indeks, dine 5 domænescorer og dine top 3 styrker plus 3 vækstområder.</p>
        </div>
        <div>
          <span class="num">03</span>
          <h3>Lås op for dybden</h3>
          <p>Hvis du vil videre — lås den fulde coachrapport op. Den genereres på 30-60 sekunder, og PDF'en sendes til din mail.</p>
        </div>
      </div>

      <div style="margin-top: 56px; display: flex; gap: 12px; flex-wrap: wrap;">
        <button class="btn btn-primary btn-arrow" onclick="window._st()">Start vurdering</button>
        <a href="index.html" class="btn btn-ghost">Tilbage til oversigt</a>
      </div>
      <p style="margin-top: 24px; font-size: 13px; color: var(--muted); font-style: italic;">Dine svar gemmes kun lokalt i browseren indtil du har set resultatet. <a href="privacy.html">Sådan håndterer vi data.</a></p>
    </div>
  `;
}
window._st = () => go('test');

function renderTest() {
  const a = state.page * PER_PAGE;
  const b = Math.min(a + PER_PAGE, 60);
  const ans = state.responses.filter(r => r != null).length;
  const pct = Math.round(ans / 60 * 100);
  const totalPages = Math.ceil(60 / PER_PAGE);
  const isLast = state.page === totalPages - 1;

  let itemsHTML = '';
  for (let i = a; i < b; i++) {
    let lh = '';
    for (let v = 1; v <= 5; v++) {
      const sel = state.responses[i] === v ? 'sel' : '';
      lh += `<button class="${sel}" onclick="window._a(${i},${v})">${LIKERT[v - 1]}</button>`;
    }
    itemsHTML += `
      <div class="test-item">
        <div class="test-item-num">${String(i + 1).padStart(2, '0')} / 60</div>
        <p class="test-item-text">${ITEMS[i][1]}</p>
        <div class="test-likert">${lh}</div>
      </div>`;
  }

  const allOk = state.responses.slice(a, b).every(r => r != null);

  app().innerHTML = `
    <div class="wrap-narrow">
      <div class="test-progress">
        <div class="test-progress-meta">
          <span>Side ${state.page + 1} af ${totalPages}</span>
          <span>${ans} af 60 besvaret · ${pct}%</span>
        </div>
        <div class="test-progress-bar"><div style="width: ${pct}%"></div></div>
      </div>

      ${itemsHTML}

      <div class="test-nav">
        <button class="btn btn-ghost" onclick="window._b()" ${state.page === 0 ? 'disabled style="opacity:0.4;cursor:not-allowed;"' : ''}>← Tilbage</button>
        <button class="btn btn-primary btn-arrow" onclick="window._n()" ${!allOk ? 'disabled style="opacity:0.4;cursor:not-allowed;"' : ''}>${isLast ? 'Beregn min profil' : 'Næste side'}</button>
      </div>
    </div>
  `;
}
window._a = (i, v) => { state.responses[i] = v; render(); };
window._b = () => { if (state.page > 0) { state.page--; render(); window.scrollTo(0, 0); } };
window._n = () => {
  if (state.page === Math.ceil(60 / PER_PAGE) - 1) {
    state.scores = calculateScores(state.responses);
    go('result');
    return;
  }
  state.page++; render(); window.scrollTo(0, 0);
};

function renderResult() {
  const sc = state.scores;
  const ov = levelInfo(sc.overall);
  const fi = sc.facets.map((v, i) => ({ v, i })).sort((a, b) => b.v - a.v);
  const facetName = i => DOMAINS[Math.floor(i / 3)].f[i % 3];
  const top3 = fi.slice(0, 3);
  const bot3 = fi.slice(-3).reverse();

  // Domain bars
  let domainHTML = '';
  for (let d = 0; d < 5; d++) {
    const sd = sc.domains[d];
    const ld = levelInfo(sd);
    let facets = '';
    for (let f = 0; f < 3; f++) {
      const sf = sc.facets[d * 3 + f];
      const lf = levelInfo(sf);
      facets += `
        <div class="result-bar-row" style="grid-template-columns: 1fr 60px;">
          <div class="result-bar-name facet">${DOMAINS[d].f[f]}</div>
          <div class="result-bar-value" style="font-size: 16px;">${sf}</div>
          <div class="result-bar-track"><div class="result-bar-fill" style="width: ${sf}%; background: ${SCORE_COLORS[lf.n]};"></div></div>
        </div>`;
    }
    domainHTML += `
      <div class="result-domain-block">
        <div class="result-bar-row">
          <div class="result-bar-name"><span class="num" style="margin-right: 12px;">0${d + 1}</span>${DOMAINS[d].n}</div>
          <div class="result-bar-value">${sd}</div>
          <div class="result-bar-track"><div class="result-bar-fill" style="width: ${sd}%; background: ${SCORE_COLORS[ld.n]};"></div></div>
        </div>
        ${facets}
      </div>`;
  }

  app().innerHTML = `
    <!-- Light analysis (Level 1) - FREE -->
    <div class="result-hero">
      <div class="wrap-narrow">
        <div class="eyebrow">Din lette profil — Level 1</div>
        <h1 style="margin-bottom: 0;">Din EQ-profil</h1>
        <div class="result-score">
          <div class="result-score-num" style="color: ${SCORE_COLORS[ov.n]};">${sc.overall}</div>
          <div class="result-score-meta">
            <div class="result-score-level">${ov.l}</div>
            <div style="font-size: 13px; color: var(--muted); letter-spacing: 0.04em;">Samlet EQ-indeks · skala 0–100</div>
          </div>
        </div>
      </div>
    </div>

    <section class="result-bars section-pure">
      <div class="wrap-narrow">
        <div class="eyebrow">Domæner og facetter</div>
        <h2 style="margin-bottom: 32px;">Sådan ser dit <em>landskab</em> ud.</h2>
        ${domainHTML}
      </div>
    </section>

    <section class="section-alt" style="padding: 60px 0;">
      <div class="wrap-narrow">
        <div class="eyebrow">Hovedlinjer</div>
        <h3 style="margin-bottom: 24px;">Det der springer i øjnene</h3>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-top: 24px;">
          <div>
            <h4 style="color: var(--score-5); font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 16px;">Top 3 styrker</h4>
            <ul style="list-style: none; padding: 0; margin: 0;">
              ${top3.map(t => `<li style="padding: 12px 0; border-bottom: 1px solid var(--line); font-family: var(--serif); font-size: 17px;">${facetName(t.i)} <span style="float: right; font-variant-numeric: tabular-nums; color: ${SCORE_COLORS[levelInfo(t.v).n]};">${t.v}</span></li>`).join('')}
            </ul>
          </div>
          <div>
            <h4 style="color: var(--score-2); font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 16px;">Top 3 vækstområder</h4>
            <ul style="list-style: none; padding: 0; margin: 0;">
              ${bot3.map(t => `<li style="padding: 12px 0; border-bottom: 1px solid var(--line); font-family: var(--serif); font-size: 17px;">${facetName(t.i)} <span style="float: right; font-variant-numeric: tabular-nums; color: ${SCORE_COLORS[levelInfo(t.v).n]};">${t.v}</span></li>`).join('')}
            </ul>
          </div>
        </div>

        <p style="margin-top: 32px; font-size: 14px; color: var(--ink-soft); font-style: italic;">Det er hvad scorerne fortæller. Det er ikke hvad de <em>betyder</em>. Det er forskellen mellem Level 1 og Level 2.</p>
      </div>
    </section>

    <!-- Lock gate / upgrade -->
    <section class="lock-gate">
      <div class="wrap-narrow">
        <div class="eyebrow">Level 2 — eksekutiv dybdeanalyse</div>
        <h2>Forstå hvad scorerne <em>betyder</em>.</h2>
        <p style="font-size: 17px; line-height: 1.65; margin-top: 1rem;">
          Den fulde coachrapport oversætter dit score-billede til lederskabsimplikationer. Hvor er dine reelle styrker — og hvor bliver de til skygger? Hvad er dit næste træk i de næste 90 dage? Hvilke 5 spørgsmål bør du stille dig selv, baseret på netop denne profilkombination?
        </p>

        <!-- Locked preview -->
        <div class="lock-preview">
          <div class="lock-preview-content">
            <h3 style="color: var(--bg); font-size: 22px; margin-bottom: 12px;">Profilfortolkning</h3>
            <p style="color: rgba(250,248,243,0.85); margin-bottom: 16px;">Din profil viser en stærk kombination af analytisk klarhed og social bevidsthed — men med en markant skygge omkring assertivitet under pres. I praksis betyder det at dine bedste indsigter ofte forbliver uudtalte i de afgørende øjeblikke...</p>
            <h3 style="color: var(--bg); font-size: 22px; margin-bottom: 12px; margin-top: 24px;">90-dages udviklingsplan</h3>
            <p style="color: rgba(250,248,243,0.85);">Fokusområde 1: Adfærdseksperiment med "ubehagelige sandheder" — én gang om ugen siger du højt det du ellers ville have holdt for dig selv. Måleparameter: din sparringspartner...</p>
          </div>
          <div class="lock-preview-icon">Lås op</div>
        </div>

        <div style="margin-top: 36px; display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
          ${renderUpgradeButtons()}
        </div>
      </div>
    </section>

    <section class="section-pure" style="padding: 48px 0;">
      <div class="wrap-narrow" style="text-align: center;">
        <p style="font-size: 14px; color: var(--muted); margin-bottom: 12px;">Vil du tage testen igen?</p>
        <button class="btn btn-ghost" onclick="window._reset()">Start forfra</button>
      </div>
    </section>
  `;
}

function renderUpgradeButtons() {
  if (state.tier === 'standard') {
    return `<a href="#" class="btn btn-primary btn-arrow" onclick="window._buy('standard'); return false;" style="background: var(--gold); border-color: var(--gold); color: var(--bg-deep);">Lås op for Standard — 495 kr</a>
            <a href="#" class="btn" onclick="window._chooseUpgrade(); return false;" style="border-color: rgba(250,248,243,0.4); color: var(--bg);">Se andre niveauer</a>`;
  }
  if (state.tier === 'executive') {
    return `<a href="#" class="btn btn-primary btn-arrow" onclick="window._buy('executive'); return false;" style="background: var(--gold); border-color: var(--gold); color: var(--bg-deep);">Lås op for Executive — 1.495 kr</a>
            <a href="#" class="btn" onclick="window._chooseUpgrade(); return false;" style="border-color: rgba(250,248,243,0.4); color: var(--bg);">Se andre niveauer</a>`;
  }
  if (state.tier === 'premium') {
    return `<a href="#" class="btn btn-primary btn-arrow" onclick="window._buy('premium'); return false;" style="background: var(--gold); border-color: var(--gold); color: var(--bg-deep);">Lås op for Sparring — 2.995 kr</a>
            <a href="#" class="btn" onclick="window._chooseUpgrade(); return false;" style="border-color: rgba(250,248,243,0.4); color: var(--bg);">Se andre niveauer</a>`;
  }
  // No tier selected — show all options
  return `<a href="#" class="btn btn-primary btn-arrow" onclick="window._chooseUpgrade(); return false;" style="background: var(--gold); border-color: var(--gold); color: var(--bg-deep);">Vælg dit niveau →</a>
          <span style="color: rgba(250,248,243,0.6); font-size: 13px;">Fra 495 kr</span>`;
}

window._chooseUpgrade = () => {
  // Show pricing options inline
  const sc = state.scores;
  app().innerHTML = `
    <section class="section-deep" style="padding: 80px 0; min-height: 100vh;">
      <div class="wrap">
        <div class="eyebrow" style="color: var(--gold);">Lås op for Level 2</div>
        <h2 style="color: var(--bg); margin-bottom: 0.4em;">Vælg din <em>dybde</em>.</h2>
        <p style="color: rgba(250,248,243,0.78); max-width: 50ch; font-size: 17px;">Din testbesvarelse er gemt. Du betaler først nu, hvor du har set hvad du får. Du modtager den fulde rapport som PDF inden for et minut.</p>

        <div class="pricing-grid" style="margin-top: 48px; background: rgba(250,248,243,0.04); border-color: rgba(250,248,243,0.15);">
          <div class="pricing-card" style="background: transparent; border-color: rgba(250,248,243,0.15); color: var(--bg);">
            <div class="pricing-name" style="color: var(--bg);">Standard</div>
            <div class="pricing-sub" style="color: rgba(250,248,243,0.6);">Det fulde billede</div>
            <div class="price"><span class="price-num" style="color: var(--bg);">495</span><span class="price-cur" style="color: rgba(250,248,243,0.6);">kr</span></div>
            <ul class="pricing-features" style="color: rgba(250,248,243,0.78);">
              <li>AI-fortolket coachrapport</li>
              <li>Profilfortolkning · skyggesider</li>
              <li>5 personlige coaching-spørgsmål</li>
              <li>PDF leveret pr. mail</li>
            </ul>
            <button class="btn" onclick="window._buy('standard')" style="background: var(--gold); border-color: var(--gold); color: var(--bg-deep);">Vælg Standard →</button>
          </div>

          <div class="pricing-card featured">
            <div class="pricing-tag">Mest valgt</div>
            <div class="pricing-name">Executive</div>
            <div class="pricing-sub">Til ledere med ansvar</div>
            <div class="price"><span class="price-num">1.495</span><span class="price-cur">kr</span></div>
            <ul class="pricing-features">
              <li>Alt fra Standard</li>
              <li>Detaljeret 90-dages plan</li>
              <li>Skygger ved hver styrke</li>
              <li>3 personlige adfærdseksperimenter</li>
              <li>Re-test efter 90 dage</li>
            </ul>
            <button class="btn" onclick="window._buy('executive')" style="background: var(--gold); border-color: var(--gold); color: var(--bg-deep);">Vælg Executive →</button>
          </div>

          <div class="pricing-card" style="background: transparent; border-color: rgba(250,248,243,0.15); color: var(--bg);">
            <div class="pricing-name" style="color: var(--bg);">Executive + Sparring</div>
            <div class="pricing-sub" style="color: rgba(250,248,243,0.6);">Med Thomas selv</div>
            <div class="price"><span class="price-num" style="color: var(--bg);">2.995</span><span class="price-cur" style="color: rgba(250,248,243,0.6);">kr</span></div>
            <ul class="pricing-features" style="color: rgba(250,248,243,0.78);">
              <li>Alt fra Executive</li>
              <li>30 min 1:1 Zoom-debrief</li>
              <li>Skarp samtalegennemgang</li>
              <li>Booking-link sendes med</li>
            </ul>
            <button class="btn" onclick="window._buy('premium')" style="background: var(--gold); border-color: var(--gold); color: var(--bg-deep);">Vælg Sparring →</button>
          </div>
        </div>

        <p style="margin-top: 32px; font-size: 13px; color: rgba(250,248,243,0.5); font-style: italic;">14 dages fortrydelsesret. Køb mod kort eller faktura. Fakturabetaling kræver CVR-nr.</p>
      </div>
    </section>
  `;
  window.scrollTo(0, 0);
};

window._buy = (tier) => {
  // PLACEHOLDER for fase 2 — Stripe Payment Link integration goes here
  // For now, store the intended purchase and show a "coming soon" flow
  const stripeLinks = {
    // FASE 2: Replace with real Stripe Payment Links from dashboard
    standard: 'https://buy.stripe.com/test_PLACEHOLDER_standard',
    executive: 'https://buy.stripe.com/test_PLACEHOLDER_executive',
    premium: 'https://buy.stripe.com/test_PLACEHOLDER_premium'
  };
  alert(`Fase 2 integration: Her vil du blive sendt videre til Stripe Checkout for ${tier}-pakken.\n\nLink: ${stripeLinks[tier]}\n\nEfter betaling: Stripe webhook → Cloudflare Worker → AI-rapport genereres → email med PDF sendes via Resend.`);
};

window._reset = () => {
  if (confirm('Er du sikker? Dine svar slettes.')) {
    state = { step: 'intro', page: 0, responses: new Array(60).fill(null), scores: null, tier: state.tier };
    render();
  }
};

function render() {
  if (state.step === 'intro') renderIntro();
  else if (state.step === 'test') renderTest();
  else if (state.step === 'result') renderResult();
}

document.addEventListener('DOMContentLoaded', render);
