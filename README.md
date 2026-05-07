# EQ Profile Executive

> Karakter · Disciplin · Klarhed. Et selvbetjent EQ-vurderingsprodukt udgivet under Friisnæs-brandet.

---

## Hvad det er

Et selvbetjent emotionel intelligens-assessment for ledere, bygget på syntesen af de tre stærkeste validerede instrumenter (EQ-i 2.0 + ESCI/Goleman + MSCEIT). 60 spørgsmål, 5 domæner, 15 facetter. Levering i fire tiers: gratis lette profil → AI-fortolket coachrapport → executive dybdeanalyse → med 1:1 sparringssamtale.

**Mål:** Volumenforretning. Bredt ud, mange analyser, ikke superdyre. Skalerbar til andre sprog.

---

## Filstruktur

```
eq-profile/
├── index.html                  # Landingside — den primære salgsenhed
├── test.html                   # Test-flowet (intro → 60 spørgsmål → Level 1 → opgraderingsgate)
├── assets/
│   ├── styles.css              # Komplet design-system (Friisnæs-æstetik)
│   ├── test-engine.js          # 60 items, scoring, Level 1-rapport, opgraderingsflow
│   └── consent.js              # GDPR cookie-banner
├── demos/
│   └── strateg.html            # Komplet Level 2-rapport: "Den driftsstærke kommandant"
└── i18n/                       # Klar til DK/EN/SE/NO/DE (kommer i fase 2)
```

**Næste demo-pages (kommer i næste iteration):** visionar.html, empath.html, performer.html, ny-ceo.html, pragmatiker.html

---

## Prisstruktur og hvorfor

Den valgte struktur er optimeret til volumen, ikke margin pr. enhed. Da marginalomkostningen pr. test er ~3-4 kr (API-kald + Stripe-fee), er det mere lønsomt at sælge mange middelpriskøb end få superdyre.

| Tier | Pris | Hvad bruger får | Hvad du får |
|---|---|---|---|
| **Lette profil** | 0 kr | Score-billede, top 3 styrker/vækstområder | Lead, email-fanger, opgraderings-conversion |
| **Standard** | 495 kr | AI-rapport ~10 sider, PDF | Volumendrivere — under impulskøb-tærskel |
| **Executive** ⭐ | 1.495 kr | + 90-dages plan, skygger ved styrker, adfærdseksperimenter | Hovedrevenue-tieren, anchored som "mest valgt" |
| **Executive + Sparring** | 2.995 kr | + 30 min Zoom med dig | Premium tier — konverterer din tid til ren toplinjeomsætning |

**Prislogik:**

- **Free** er et lead-magnet. Vi tager ingen email i fase 1, men efter fase 2 vil opgraderings-CTA kræve email — det giver dig en kvalificeret pipeline til retainer-konvertering.
- **495 kr** ligger lige under den psykologiske 500 kr-tærskel for impulskøb, hvor middelchefen selv betaler. Markedet for traditionelle EQ-tests starter ved $275 (~1.900 kr) — vi underbyder med 75% og positionerer som "AI-leveret, ikke certificeret konsulent".
- **1.495 kr** er den klassiske SaaS-tier-anker. 80% af køberne vælger middel-tieren når 3 priser er synlige. Featuret med "Mest valgt"-tag og guld-accent.
- **2.995 kr** beskytter din tid. Når dette tier konverterer, har du allerede solgt produktet (de har set Standard- eller Executive-pris) og betalt for konsulent-tid, ikke for produkt.

**Volumenestimat (konservativt, 6-12 mdr efter launch):**

```
Tier            Conv. rate    Vol/mdr     Pris      Mdr.omsætning
─────────────────────────────────────────────────────────────────
Lette (free)    100%          1.000       0         0
Standard        15%           150         495       74.250 kr
Executive ⭐    8%            80          1.495     119.600 kr
Sparring        2%            20          2.995     59.900 kr
                                                    ─────────────
                                          Total:    253.750 kr/mdr
                                          Årligt:   3.045.000 kr
```

Aggressivt scenarie (efter 12+ mdr SEO-bygning og word-of-mouth): 5.000-8.000 leads/mdr → 4-7M kr/år.

---

## Sådan deployer du fase 1 (i dag)

### 1. GitHub repo
```bash
# Lav nyt repo på GitHub: friisnaes/eq-profile (eller tilføj mappe i din eksisterende friisnaes.github.io)
git init
git add .
git commit -m "Phase 1: landing page + test + demo"
git remote add origin git@github.com:friisnaes/eq-profile.git
git push -u origin main
```

### 2. GitHub Pages
Gå til repo → Settings → Pages → Source: `main` branch, root folder.
Sitet er live på `https://friisnaes.github.io/eq-profile/` inden for 1-2 minutter.

### 3. Custom domæne (anbefalet)
- I one.com: opret CNAME-record `eq.friisnaes.com` pegende på `friisnaes.github.io`
- I GitHub Pages settings: tilføj `eq.friisnaes.com` som custom domain
- Aktiver "Enforce HTTPS"

### 4. Test
Besøg `https://eq.friisnaes.com` — siden skal rendere identisk med friisnaes.com's æstetik. Test-flowet kører hele vejen igennem (Stripe-betaling viser placeholder-alert i denne fase).

### 5. Cookie-banner og analytics (valgfrit)
Plausible Analytics (~50 kr/mdr) loader automatisk efter brugersamtykke. Eller fjern Plausible-loadet i `consent.js` hvis du ikke ønsker analytics.

---

## Roadmap

### Fase 1 — leveret nu ✓
- ✓ Landingside med fuld Friisnæs-æstetik
- ✓ Test-flow med 60 spørgsmål, Level 1-rapport, opgraderingsgate
- ✓ Demoprofil "Den driftsstærke kommandant" med komplet Level 2-rapport
- ✓ GDPR-cookie-banner
- ✓ FAQ, priser, schema.org-markup, OpenGraph

### Fase 1.5 — næste iteration (1-2 timer arbejde)
- [ ] 5 resterende demoprofiler (visionar, empath, performer, ny-ceo, pragmatiker)
- [ ] privacy.html, terms.html (på dansk, GDPR-2026-fortolkningen)
- [ ] thank-you.html (post-Stripe-checkout landingsside)
- [ ] sitemap.xml, robots.txt
- [ ] i18n-struktur (DK + EN templates)

### Fase 2 — backend kobles på (kræver dine konti)
**Du opretter (≈30 min):**
1. **Stripe**-konto, opret 3 Payment Links (Standard 495, Executive 1495, Sparring 2995). Aktivér automatic moms og faktura-pdf.
2. **Cloudflare**-konto + Worker (gratis tier). Bruges som proxy til Anthropic API så API-nøglen ikke eksponeres.
3. **Resend**-konto (gratis 3.000 mails/mdr). Bruges til at sende rapport-PDF til kunden.
4. **Supabase**-konto (gratis tier, vælg EU/Frankfurt-region). Gemmer testbesvarelser og adgangstokens GDPR-compliant.

**Jeg bygger:**
- Cloudflare Worker der modtager Stripe-webhook → kalder Claude API → gemmer rapport → sender via Resend
- PDF-generering (puppeteer-light eller HTML-to-PDF via Cloudflare Browser Rendering)
- Supabase-skema for besvarelser + 90-dages re-test-flow

### Fase 3 — selv-opdaterende SEO (det mest kreative element)
GitHub Action der kører ugentligt søndag aften:
1. Henter trending søgeord via Google Trends API for "executive coaching", "EQ test", "emotionel intelligens leder" osv.
2. Analyserer dine eksisterende Friisnæs-blogartikler og EQ Profile-sider for indholdshuller
3. Anthropic API foreslår 1-3 nye blogposts eller FAQ-tilføjelser pr. uge
4. Åbner pull request på GitHub med færdige draft-artikler i Friisnæs-tone
5. Du godkender på 5-10 min over morgenkaffen → merger → publicerer automatisk

Aldrig auto-publish. Altid menneskelig godkendelse. Det beskytter brand-kvaliteten.

### Fase 4 — sprogudrulning
DK først, EN næst (auto-oversat med Claude, manuelt finetuned), derefter SE/NO/DE efter validering af DK/EN-økonomien.

---

## Nøglevalg jeg har truffet for dig

1. **Single-file HTML pr. side, ingen build-step.** Holdt i din eksisterende GitHub Pages-deployment-stil. Du kan editere alt med en almindelig editor.
2. **Fraunces (display) + Manrope (body).** Fraunces er en variabel serif med stærke italics — passer præcist til din "italic på det vigtigste ord"-signatur fra friisnaes.com.
3. **Warm cream (#FAF8F3) + oxblood-accent (#7C3A40) + guld (#A88857) til premium tier.** Editorial, ikke corporate. Passer til exec-coach-positioneringen.
4. **Numbered section markers (01, 02, 03).** Direkte arvet fra friisnaes.com.
5. **Italic emphasis-mønster** ("Din EQ. Dit *blinde punkt*. Dit næste træk.") — replikerer din signaturstil.
6. **Stripe Payment Links over Stripe Checkout API.** Du opretter dem manuelt i dashboardet på 5 min — ingen kode, ingen vedligeholdelse, automatisk faktura med dansk moms.

---

## Kontakt og iteration

Send feedback efter du har set sitet live. Konkrete iterationsforslag:
- Sproget i Hero — for stærkt? for blødt?
- Skal "Mest valgt" sidde på Standard (495) i stedet for Executive (1495) for endnu bredere volumen?
- Demoprofilen — for direkte? for fyldig?
- Den fulde Q&A-sektion mangler stadig 8 spørgsmål

Næste arbejdsblok logisk: De 5 resterende demoprofiler + privacy/terms + thank-you-side. Det giver dig komplet fase 1 inden vi går i gang med Stripe-integrationen.

---

*Bygget i samarbejde med Claude. © 2026 Friisnæs.*
