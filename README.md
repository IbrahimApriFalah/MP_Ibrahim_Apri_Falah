# GARUDA FANS — Indonesian National Football Supporter Experience

A complete, responsive, editorial-style supporter web platform dedicated to the Indonesian National Football Team (**Timnas Indonesia**), built as a **Final Project for Study Club Frontend Basic at KSM VeteranTech UPNVJ**.

---

## Main Features

- **Editorial Landing Experience (`index.html`)**:
  - **Architectural Navigation**: Fixed glassmorphic navigation bar with scroll progress indicator, active section tracking, and accessible mobile menu drawer.
  - **Cinematic Hero**: Full-bleed stadium tifo photography (`assets/images/about.jpg`), layered condensed typography, subtle parallax depth, and kinetic broadcast marquee.
  - **The Spirit of Garuda (`#about`)**: Asymmetrical magazine-spread storytelling with supporter pillars (`Pride`, `Unity`, `Passion`) and a Technical Leadership spotlight (`John Herdman`).
  - **Interactive Squad Gallery (`#players`)**: Dynamic JavaScript-driven showcase of 22 players named for the senior-team training camp in Bali (9–17 November 2026), stored in `SQUAD_DATA` (`js/script.js`), featuring:
    - Position filtering (`All Squad`, `Goalkeepers`, `Defenders`, `Midfielders`, `Forwards`) via `Array.prototype.filter()`.
    - Layout mode toggle (`Editorial Rail` horizontal scroll vs. `Full Grid`).
    - Accessible **Player Detail Modal** with `Prev` / `Next` player stepping, keyboard (`Escape`, `ArrowLeft`, `ArrowRight`) support, and direct link to each player's full dossier.
  - **Matchday Center (`#schedule`)**: Broadcast-inspired fixture hub with `All Matches`, `Upcoming`, and `Finished` filters. Displays four verified FIFA ASEAN Cup 2026 results and an honest empty state for upcoming fixtures as of 27 November 2026; exploratory talks for March 2027 are not presented as confirmed fixtures.
  - **Supporter Voice (`#favorite-form`)**: Frontend demonstration form with dynamic squad select options, live character counter, inline validation, error/success feedback, and a **Session Supporter Wall** that updates the DOM in real time.
- **Creator & Player Dossier Page (`profile.html`)**:
  - **Default Creator Profile**: Showcases creator **Ibrahim Apri Falah (Baim)**, Undergraduate Informatics Student at **UPN "Veteran" Jakarta** (`KSM VeteranTech — Frontend Basic`), journey manifesto, and quick player dossier directory. The profile links show each player’s position and the club listed at the November 2026 call-up; shirt numbers are not supplied where the camp announcement did not publish them. Players without a matching supplied portrait use a neutral silhouette, not another player’s photo.
  - **Dynamic Player Dossier (`profile.html?player=<id>`)**: Reads URL query parameters (`URLSearchParams`) to render full-page player details with previous/next navigation and return link to the squad.
- **Motion & Accessibility**:
  - Progressive enhancement with **GSAP 3.12.5** & **ScrollTrigger** via CDN.
  - Supports `prefers-reduced-motion: reduce` and provides graceful fallback (all content stays visible and functional if the CDN is unavailable).

---

## Technology Stack

- **HTML5** (Semantic landmarks, accessible ARIA attributes, `dl`/`dt`/`dd`, `<figure>`)
- **CSS3** (Custom properties, CSS Grid, Flexbox, responsive breakpoints, `clamp()`, reduced-motion media query)
- **Vanilla JavaScript (ES6+)** (Structured arrays/objects, `filter()`, `map()`, `forEach()`, `find()`, `findIndex()`, DOM manipulation, event delegation, form validation)
- **GSAP + ScrollTrigger** (via `cdn.jsdelivr.net`)

---

## Project Structure

```text
MP_Ibrahim_Apri_Falah/
├── index.html                    # Main Garuda Fans experience
├── profile.html                  # Creator profile & dynamic player dossier (?player=<id>)
├── css/
│   └── style.css                 # Responsive editorial stylesheet
├── js/
│   └── script.js                 # Squad/match data, UI logic, validation, GSAP motion
├── assets/
│   ├── icons/                    # Custom SVG crest, favicon, and UI icons
│   └── images/                   # Stadium, supporter, coach, and squad portraits
├── screenshots/                  # Local browser preview captures (homepage, profile, player dossier)
├── submission/
│   └── repository-link.txt       # GitHub repository URL and push status note
├── DATA_SOURCES.md               # Dated sources and factual-data notes
├── .gitignore
└── README.md
```

---

## Preview Captures

The `screenshots/` folder contains browser-rendered desktop previews of the homepage, creator profile, and a sample player dossier. The screenshots document the local project render; Google Fonts and GSAP remain external CDN dependencies when the site is opened normally.

## How to Run Locally

1. Clone or download the project folder.
2. Open a terminal in the project root and start any static HTTP server, for example:
   ```bash
   python -m http.server 8080
   ```
   Or open `index.html` using VS Code **Live Server**.
3. Open `http://localhost:8080/index.html` in your browser.
   - To inspect the creator profile, click **Profile** or open `profile.html`.
   - To inspect a player dossier directly, open `profile.html?player=rizky-ridho`.

---

## Known Limitations

- **Frontend-Only Demonstration**: The Supporter Voice form has no backend server or database. Submitted messages are validated locally and displayed only within the current browser session (refreshing the page resets the Session Supporter Wall).
- **Unpublished or Unconfirmed Data**: Shirt numbers and individual career statistics are not fabricated. Upcoming fixtures appear only after confirmation. Creator social links use the exact URLs supplied by the project owner.
- **External CDN Dependency for Fonts/GSAP**: Google Fonts and GSAP CDN scripts require internet access; if offline, the site gracefully falls back to system fonts and static visibility with all interactive features intact.


## Data Sources & Update Notes

Squad and club affiliations reflect the 22-player Indonesia senior-team training-camp announcement for Bali, 9–17 November 2026. Club names are labelled as those listed at the time of the call-up:
- ANTARA, 10 November 2026: https://www.antaranews.com/berita/5844615/pemusatan-latihan-timnas-indonesia-di-bali-jadi-ajang-seleksi
- CNN Indonesia, 10 November 2026: https://www.cnnindonesia.com/olahraga/20261110163549-142-1425510/daftar-22-pemain-timnas-indonesia-tc-di-bali-ada-noah-adnan

Match results are taken from FIFA's Indonesia team data centre:
- FIFA: https://inside.fifa.com/id/data-centre/teams/indonesia

November 2026 schedule and March 2027 status:
- CNN Indonesia, 9 November 2026: https://www.cnnindonesia.com/olahraga/20261109175107-142-1425079/timnas-indonesia-resmi-tak-gelar-uji-coba-di-fifa-matchday-november/amp
- ANTARA, 9 November 2026: https://www.antaranews.com/berita/5842659/pssi-jajaki-calon-lawan-timnas-untuk-fifa-matchday-maret-2027

**Editorial note:** This website labels the November group as a training-camp selection, not a match-day roster. Noah Adnan and Taisei Marukawa have dated nationality-process notes; their invitations are not presented as proof of match eligibility. Player shirt numbers and career statistics are not guessed when the referenced sources do not provide them. Players without an exact supplied portrait use a neutral silhouette graphic.

See `DATA_SOURCES.md` for the dated sources and editorial notes behind the November 2026 squad and match information.


### Squad presentation update (27 November 2026)

The player directory displays 2026/27 club shirt numbers (not national-team numbers). All 22 players now have individually attributable portrait images because a reliable individual portrait asset could not be validated for this package. Several portraits load from their credited source websites and therefore require an internet connection. See `DATA_SOURCES.md` for the roster-number and portrait references.
