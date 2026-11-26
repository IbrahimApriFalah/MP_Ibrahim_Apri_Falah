# GARUDA FANS — Indonesian National Football Supporter Experience

A complete, responsive, editorial-style supporter web platform dedicated to the Indonesian National Football Team (**Timnas Indonesia**), built as a **Final Project for Study Club Frontend Basic at KSM VeteranTech UPNVJ**.

---

## Main Features

- **Editorial Landing Experience (`index.html`)**:
  - **Architectural Navigation**: Fixed glassmorphic navigation bar with scroll progress indicator, active section tracking, and accessible mobile menu drawer.
  - **Cinematic Hero**: Full-bleed stadium tifo photography (`assets/images/about.jpg`), layered condensed typography, subtle parallax depth, and kinetic broadcast marquee.
  - **The Spirit of Garuda (`#about`)**: Asymmetrical magazine-spread storytelling with supporter pillars (`Pride`, `Unity`, `Passion`) and a Technical Leadership spotlight (`John Herdman`).
  - **Interactive Squad Gallery (`#players`)**: Dynamic JavaScript-driven showcase of 18 squad portraits stored in `SQUAD_DATA` (`js/script.js`), featuring:
    - Position filtering (`All Squad`, `Goalkeepers`, `Defenders`, `Midfielders`, `Forwards`) via `Array.prototype.filter()`.
    - Layout mode toggle (`Editorial Rail` horizontal scroll vs. `Full Grid`).
    - Accessible **Player Detail Modal** with `Prev` / `Next` player stepping, keyboard (`Escape`, `ArrowLeft`, `ArrowRight`) support, and direct link to each player's full dossier.
  - **Matchday Center (`#schedule`)**: Broadcast-inspired fixture hub with `All Matches`, `Upcoming`, and `Finished` filters. Displays honest `TBA` placeholders and a clean empty state for finished results rather than fabricating scores or dates.
  - **Supporter Voice (`#favorite-form`)**: Frontend demonstration form with dynamic squad select options, live character counter, inline validation, error/success feedback, and a **Session Supporter Wall** that updates the DOM in real time.
- **Creator & Player Dossier Page (`profile.html`)**:
  - **Default Creator Profile**: Showcases creator **Ibrahim Apri Falah (Baim)**, Undergraduate Informatics Student at **UPN "Veteran" Jakarta** (`KSM VeteranTech — Frontend Basic`), journey manifesto, and quick player dossier directory.
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
├── screenshots/                  # Verified browser screenshots
├── submission/
│   └── repository-link.txt       # GitHub repository URL and push status note
├── .gitignore
└── README.md
```

---

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
- **Placeholder Data Where Unverified**: Jersey numbers obscured in photos, player career statistics, match schedules/scores, and owner social media URLs are intentionally marked as `TBA` or `[Placeholder]` rather than fabricated.
- **External CDN Dependency for Fonts/GSAP**: Google Fonts and GSAP CDN scripts require internet access; if offline, the site gracefully falls back to system fonts and static visibility with all interactive features intact.
