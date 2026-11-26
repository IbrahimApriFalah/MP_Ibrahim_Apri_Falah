/* ==========================================================================
   GARUDA FANS — MODULAR VANILLA JAVASCRIPT & GSAP MOTION
   Demonstrates fundamental JS concepts: variables, data types, operators,
   functions, conditionals, loops, arrays/objects, array methods (filter,
   map, forEach, find, findIndex), DOM manipulation, event handling, and
   graceful GSAP / ScrollTrigger progressive enhancement.
   ========================================================================== */

"use strict";

/* ==============================
   1. STRUCTURED SQUAD & MATCH DATA
   (Uses dated, sourced training-camp and match records; unverified details are not invented)
============================== */

const POSITION_LABELS = {
  goalkeeper: "Goalkeeper",
  defender: "Defender",
  midfielder: "Midfielder",
  forward: "Forward",
};

const SQUAD_DATA = [
  {
    id: "nadeo-argawinata",
    name: "Nadeo Argawinata",
    number: "23",
    position: "goalkeeper",
    club: "Persija Jakarta",
    image: "assets/images/Nadeo Arga Winata - U23.jpeg",
    shortNote: "Goalkeeper • Persija Jakarta (Nov 2026 call-up)",
    bio: "Nadeo Argawinata was named in Indonesia's 22-player training-camp group in Bali, held 9–17 November 2026.",
    statsNote: "Club shirt number for the 2026/27 season: 23. This is the club number, not an Indonesia national-team number.",
  },
  {
    id: "reza-arya",
    name: "Reza Arya",
    number: "30",
    position: "goalkeeper",
    club: "Persebaya Surabaya",
    image: "https://www.persebaya.id/thumbs/medium/uploads/player/2304/m-reza-arya-pratama-6a570b63da623.jpg",
    shortNote: "Goalkeeper • Persebaya Surabaya (Nov 2026 call-up)",
    bio: "Reza Arya was named in Indonesia's 22-player training-camp group in Bali, held 9–17 November 2026.",
    statsNote: "Club shirt number for the 2026/27 season: 30. This is the club number, not an Indonesia national-team number.",
  },
  {
    id: "mees-hilgers",
    name: "Mees Hilgers",
    number: "2",
    position: "defender",
    club: "SC Heerenveen",
    image: "https://img.okezone.com/content/2026/08/31/51/3239331/mees_hilgers-iRlu_large.jpg",
    shortNote: "Defender • SC Heerenveen (Nov 2026 call-up)",
    bio: "Mees Hilgers was named in Indonesia's 22-player training-camp group in Bali, held 9–17 November 2026.",
    statsNote: "Club shirt number for the 2026/27 season: 2. This is the club number, not an Indonesia national-team number.",
  },
  {
    id: "alfharezzi-buffon",
    name: "Alfharezzi Buffon",
    number: "25",
    position: "defender",
    club: "Dewa United FC",
    image: "https://img.okezone.com/content/2026/08/27/49/3238488/alfharezzi_buffon_resmi_gabung_dewa_united-V9fK_large.jpg",
    shortNote: "Defender • Dewa United FC (Nov 2026 call-up)",
    bio: "Alfharezzi Buffon was named in John Herdman's 22-player training-camp group in Bali, held 9–17 November 2026.",
    statsNote: "Club shirt number for the 2026/27 season: 25. This is the club number, not an Indonesia national-team number.",
  },
  {
    id: "alta-ballah",
    name: "Altariq Ballah",
    number: "37",
    position: "defender",
    club: "Dewa United FC",
    image: "https://assets.ileague.id/uploads/images/news/Alta-Ballah-Sebut-Mentalitas-Jadi-Kunci-Tahan-Persebaya-1770004586.jpg",
    shortNote: "Defender • Dewa United FC (Nov 2026 call-up)",
    bio: "Alta Ballah was named in Indonesia's 22-player training-camp group in Bali, held 9–17 November 2026.",
    statsNote: "Club shirt number for the 2026/27 season: 37. This is the club number, not an Indonesia national-team number.",
  },
  {
    id: "dion-markx",
    name: "Dion Markx",
    number: "44",
    position: "defender",
    club: "Persita Tangerang",
    image: "assets/images/Dion Markx.jpeg",
    shortNote: "Defender • Persita Tangerang (Nov 2026 call-up)",
    bio: "Dion Markx was included in Indonesia's 22-player training-camp group in Bali, held 9–17 November 2026.",
    statsNote: "Club shirt number for the 2026/27 season: 44. This is the club number, not an Indonesia national-team number.",
  },
  {
    id: "dony-tri-pamungkas",
    name: "Dony Tri Pamungkas",
    number: "77",
    position: "defender",
    club: "Persija Jakarta",
    image: "https://cdn.persija.id/assets/uploads/media-uploader/large-dony-tri-pamungkas1754916703.jpg",
    shortNote: "Defender • Persija Jakarta (Nov 2026 call-up)",
    bio: "Dony Tri Pamungkas was selected for Indonesia's 22-player training-camp group in Bali, held 9–17 November 2026.",
    statsNote: "Club shirt number for the 2026/27 season: 77. This is the club number, not an Indonesia national-team number.",
  },
  {
    id: "noah-adnan",
    name: "Noah Adnan",
    number: "2",
    position: "defender",
    club: "Loudoun United FC",
    image: "https://www.loudoununitedfc.com/wp-content/uploads/sites/21/2026/01/NoahAdnan-Announcement-WEB_NL.jpg?w=1024",
    shortNote: "Defender • Loudoun United FC (Nov 2026 call-up)",
    bio: "Noah Adnan joined the November 2026 training-camp group. Reporting on 23 November 2026 said he had not yet become an Indonesian citizen and that the naturalization process had not been submitted to the President and DPR.",
    statsNote: "Club shirt number for the 2026/27 season: 2. This is the club number, not an Indonesia national-team number.",
  },
  {
    id: "rizky-ridho",
    name: "Rizky Ridho",
    number: "5",
    position: "defender",
    club: "Persija Jakarta",
    image: "assets/images/Rizky Ridho.jpeg",
    shortNote: "Defender • Persija Jakarta (Nov 2026 call-up)",
    bio: "Rizky Ridho was part of Indonesia's 22-player training-camp group in Bali, held 9–17 November 2026.",
    statsNote: "Club shirt number for the 2026/27 season: 5. This is the club number, not an Indonesia national-team number.",
  },
  {
    id: "shayne-pattynama",
    name: "Shayne Pattynama",
    number: "25",
    position: "defender",
    club: "Persija Jakarta",
    image: "assets/images/Shayne Pattynama.jpeg",
    shortNote: "Defender • Persija Jakarta (Nov 2026 call-up)",
    bio: "Shayne Pattynama was selected for Indonesia's 22-player training-camp group in Bali, held 9–17 November 2026.",
    statsNote: "Club shirt number for the 2026/27 season: 25. This is the club number, not an Indonesia national-team number.",
  },
  {
    id: "tim-geypens",
    name: "Tim Geypens",
    number: "22",
    position: "defender",
    club: "Bali United",
    image: "https://img.okezone.com/content/2025/01/30/51/3109021/tim_geypens-fzEW_large.jpg",
    shortNote: "Defender • Bali United (Nov 2026 call-up)",
    bio: "Tim Geypens was included in Indonesia's 22-player training-camp group in Bali, held 9–17 November 2026.",
    statsNote: "Club shirt number for the 2026/27 season: 22. This is the club number, not an Indonesia national-team number.",
  },
  {
    id: "egy-maulana-vikri",
    name: "Egy Maulana Vikri",
    number: "10",
    position: "midfielder",
    club: "Dewa United",
    image: "https://img.okezone.com/content/2023/01/31/49/2756096/egy-maulana-vikri-berharap-tidak-dianakemaskan-di-dewa-united-0UeUWu3NDH.jpeg",
    shortNote: "Midfielder • Dewa United (Nov 2026 call-up)",
    bio: "Egy Maulana Vikri was selected for Indonesia's 22-player training-camp group in Bali, held 9–17 November 2026.",
    statsNote: "Club shirt number for the 2026/27 season: 10. This is the club number, not an Indonesia national-team number.",
  },
  {
    id: "ivar-jenner",
    name: "Ivar Jenner",
    number: "6",
    position: "midfielder",
    club: "Dewa United",
    image: "https://img.okezone.com/content/2026/02/03/49/3199223/ivar_jenner_dikabarkan_gabung_dewa_united_pada_bursa_transfer_paruh_musim_super_league_2025_2026_gosballfc-TzHS_large.jpg",
    shortNote: "Midfielder • Dewa United (Nov 2026 call-up)",
    bio: "Ivar Jenner was included in Indonesia's 22-player training-camp group in Bali, held 9–17 November 2026.",
    statsNote: "Club shirt number for the 2026/27 season: 6. This is the club number, not an Indonesia national-team number.",
  },
  {
    id: "rayhan-hannan",
    name: "Rayhan Hannan",
    number: "58",
    position: "midfielder",
    club: "Persija Jakarta",
    image: "https://cdn.persija.id/assets/uploads/media-uploader/large-muhammad-rayhan-hanan1754918814.jpg",
    shortNote: "Midfielder • Persija Jakarta (Nov 2026 call-up)",
    bio: "Rayhan Hannan was selected for Indonesia's 22-player training-camp group in Bali, held 9–17 November 2026.",
    statsNote: "Club shirt number for the 2026/27 season: 58. This is the club number, not an Indonesia national-team number.",
  },
  {
    id: "taisei-marukawa",
    name: "Taisei Marukawa",
    number: "11",
    position: "midfielder",
    club: "Dewa United",
    image: "https://thumb.tvonenews.com/images/2026/05/12/6a03387b86ebc-taisei-marukawa.jpg",
    shortNote: "Midfielder • Dewa United (Nov 2026 call-up)",
    bio: "Taisei Marukawa was invited to the November 2026 training camp. Reporting on 12 November described his naturalization as close to completion, but the sources cited here do not confirm that all citizenship and FIFA eligibility steps were completed by 27 November.",
    statsNote: "Club shirt number for the 2026/27 season: 11. This is the club number, not an Indonesia national-team number.",
  },
  {
    id: "zanadin-fariz",
    name: "Zanadin Fariz",
    number: "8",
    position: "midfielder",
    club: "Persik Kediri",
    image: "https://cloud.jpnn.com/photo/jatim/news/normal/2022/08/25/pemain-muda-persis-solo-zanadin-fariz-foto-ligaindonesiabaru-fag0.jpg",
    shortNote: "Midfielder • Persik Kediri (Nov 2026 call-up)",
    bio: "Zanadin Fariz was named in Indonesia's 22-player training-camp group in Bali, held 9–17 November 2026.",
    statsNote: "Club shirt number for the 2026/27 season: 8. This is the club number, not an Indonesia national-team number.",
  },
  {
    id: "adrian-wibowo",
    name: "Adrian Wibowo",
    number: "7",
    position: "forward",
    club: "FC Wacker Innsbruck",
    image: "https://images.mlssoccer.com/image/private/t_keep-aspect-ratio-e-mobile/f_auto/mls-lafc/k0gfvzn9s869mdqjymy7.jpg",
    shortNote: "Forward • Los Angeles FC (Nov 2026 call-up)",
    bio: "Adrian Wibowo was included in Indonesia's 22-player training-camp group in Bali, held 9–17 November 2026.",
    statsNote: "Club shirt number for the 2026/27 season: 7. This is the club number, not an Indonesia national-team number.",
  },
  {
    id: "arlyansyah-abdulmanan",
    name: "Arlyansyah Abdulmanan",
    number: "11",
    position: "forward",
    club: "Persija Jakarta",
    image: "https://img.okezone.com/content/2024/02/11/51/2968507/usai-ikut-tc-timnas-indonesia-u-20-arlyansyah-abdulmanan-berharap-bisa-tembus-tim-utama-di-persija-jakarta-mJrusHWNfZ.jpg",
    shortNote: "Forward • Persija Jakarta (Nov 2026 call-up)",
    bio: "Arlyansyah Abdulmanan was selected for Indonesia's 22-player training-camp group in Bali, held 9–17 November 2026.",
    statsNote: "Club shirt number for the 2026/27 season: 11. This is the club number, not an Indonesia national-team number.",
  },
  {
    id: "jens-raven",
    name: "Jens Raven",
    number: "19",
    position: "forward",
    club: "Bali United",
    image: "https://cdn2.unitedcreative.co.id/files/uploads/BU/player/photo_profile/2026/Jan/30/697c70edda434/forward-jens-raven-19.png",
    shortNote: "Forward • Bali United (Nov 2026 call-up)",
    bio: "Jens Raven was included in Indonesia's 22-player training-camp group in Bali, held 9–17 November 2026.",
    statsNote: "Club shirt number for the 2026/27 season: 19. This is the club number, not an Indonesia national-team number.",
  },
  {
    id: "luke-vickery",
    name: "Luke Vickery",
    number: "8",
    position: "forward",
    club: "Macarthur FC",
    image: "assets/images/Luke Vickery.jpeg",
    shortNote: "Forward • Macarthur FC (Nov 2026 call-up)",
    bio: "Luke Vickery was selected for Indonesia's 22-player training-camp group in Bali, held 9–17 November 2026.",
    statsNote: "Club shirt number for the 2026/27 season: 8. This is the club number, not an Indonesia national-team number.",
  },
  {
    id: "rafael-struick",
    name: "Rafael Struick",
    number: "27",
    position: "forward",
    club: "Dewa United",
    image: "https://imgcdn.harianjogja.com/images/posts/2025/07/16/1220888/dewa_struick.jpg",
    shortNote: "Forward • Dewa United (Nov 2026 call-up)",
    bio: "Rafael Struick was named in Indonesia's 22-player training-camp group in Bali, held 9–17 November 2026.",
    statsNote: "Club shirt number for the 2026/27 season: 27. This is the club number, not an Indonesia national-team number.",
  },
  {
    id: "ragnar-oratmangoen",
    name: "Ragnar Oratmangoen",
    number: "77",
    position: "forward",
    club: "Persib Bandung",
    image: "assets/images/Ragnar Oratmangoen.jpeg",
    shortNote: "Forward • Persib Bandung (Nov 2026 call-up)",
    bio: "Ragnar Oratmangoen was included in Indonesia's 22-player training-camp group in Bali, held 9–17 November 2026.",
    statsNote: "Club shirt number for the 2026/27 season: 77. This is the club number, not an Indonesia national-team number.",
  }
];

const MATCH_DATA = [
  {
    "id": "indonesia-singapore-2026",
    "competition": "FIFA ASEAN CUP 2026",
    "status": "finished",
    "homeCode": "IDN",
    "homeTeam": "INDONESIA",
    "awayCode": "SGP",
    "awayTeam": "SINGAPORE",
    "date": "25 September 2026",
    "time": "Full Time",
    "venue": "Gelora Bung Karno Stadium, Jakarta",
    "homeScore": 2,
    "awayScore": 0
  },
  {
    "id": "malaysia-indonesia-2026",
    "competition": "FIFA ASEAN CUP 2026",
    "status": "finished",
    "homeCode": "MAS",
    "homeTeam": "MALAYSIA",
    "awayCode": "IDN",
    "awayTeam": "INDONESIA",
    "date": "28 September 2026",
    "time": "Full Time",
    "venue": "Gelora Bung Karno Stadium, Jakarta",
    "homeScore": 0,
    "awayScore": 0
  },
  {
    "id": "indonesia-bangladesh-2026",
    "competition": "FIFA ASEAN CUP 2026",
    "status": "finished",
    "homeCode": "IDN",
    "homeTeam": "INDONESIA",
    "awayCode": "BAN",
    "awayTeam": "BANGLADESH",
    "date": "1 October 2026",
    "time": "Full Time",
    "venue": "Gelora Bung Karno Stadium, Jakarta",
    "homeScore": 9,
    "awayScore": 2
  },
  {
    "id": "indonesia-thailand-2026",
    "competition": "FIFA ASEAN CUP 2026 • FINAL",
    "status": "finished",
    "homeCode": "IDN",
    "homeTeam": "INDONESIA",
    "awayCode": "THA",
    "awayTeam": "THAILAND",
    "date": "5 October 2026",
    "time": "2–2 • Indonesia won 4–2 on penalties",
    "venue": "Gelora Bung Karno Stadium, Jakarta",
    "homeScore": 2,
    "awayScore": 2
  }
];

/* ==============================
   2. PURE HELPER FUNCTIONS
============================== */

/**
 * Return formatted position label from category slug.
 * @param {string} positionKey
 * @returns {string}
 */
function getPositionLabel(positionKey) {
  return POSITION_LABELS[positionKey] || "Squad Player";
}

/**
 * Filter players array by position category using Array.prototype.filter().
 * @param {Array} players
 * @param {string} category
 * @returns {Array}
 */
function filterPlayersByCategory(players, category) {
  if (!category || category === "all") {
    return players;
  }
  return players.filter(function (player) {
    return player.position === category;
  });
}

/**
 * Find a single player object by ID using Array.prototype.find().
 * @param {Array} players
 * @param {string} playerId
 * @returns {Object|undefined}
 */
function findPlayerById(players, playerId) {
  return players.find(function (player) {
    return player.id === playerId;
  });
}

/**
 * Filter matches by status using Array.prototype.filter().
 * @param {Array} matches
 * @param {string} statusFilter
 * @returns {Array}
 */
function filterMatchesByStatus(matches, statusFilter) {
  if (!statusFilter || statusFilter === "all") {
    return matches;
  }
  return matches.filter(function (match) {
    return match.status === statusFilter;
  });
}

/**
 * Escape HTML special characters before injecting user strings into DOM.
 * @param {string} value
 * @returns {string}
 */
function escapeHTML(value) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return String(value).replace(/[&<>"']/g, function (char) {
    return map[char];
  });
}

/**
 * Validate support form inputs and return validation result object.
 * @param {string} name
 * @param {string} favoritePlayer
 * @param {string} message
 * @returns {{isValid: boolean, errors: {name: string, player: string, message: string}}}
 */
function validateSupportForm(name, favoritePlayer, message) {
  const errors = {
    name: "",
    player: "",
    message: "",
  };

  if (name.length < 2) {
    errors.name = "Please enter at least 2 characters for your name.";
  }

  if (!favoritePlayer) {
    errors.player = "Please select your favorite player from the squad.";
  }

  if (message.length < 8) {
    errors.message = "Please write at least 8 characters of support.";
  } else if (message.length > 240) {
    errors.message = "Support message must be 240 characters or fewer.";
  }

  const isValid = !errors.name && !errors.player && !errors.message;
  return { isValid: isValid, errors: errors };
}

/* ==============================
   3. DOM INITIALIZATION
============================== */

document.addEventListener("DOMContentLoaded", function () {
  initNavigationAndProgress();
  initSquadSection();
  initMatchdaySection();
  initSupportForm();
  initProfilePage();
  initBackToTop();
  initMotionEnhancements();
});

/* ==============================
   4. NAVIGATION, MOBILE DRAWER & SCROLL PROGRESS
============================== */

function initNavigationAndProgress() {
  const header = document.getElementById("site-header");
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const progressBar = document.getElementById("scroll-progress");
  const navLinks = document.querySelectorAll(".nav-link");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      const isOpen = navMenu.classList.toggle("active");
      menuToggle.classList.toggle("active", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu",
      );
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.focus();
      }
    });
  }

  function updateScrollState() {
    const scrollTop = window.scrollY || window.pageYOffset;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    if (header) {
      header.classList.toggle("is-scrolled", scrollTop > 24);
    }

    if (progressBar && docHeight > 0) {
      const percent = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
      progressBar.style.width = percent.toFixed(2) + "%";
    }
  }

  window.addEventListener("scroll", updateScrollState, { passive: true });
  updateScrollState();

  // Active section highlight on homepage
  const sectionLinks = document.querySelectorAll(".nav-link[data-section]");
  if (sectionLinks.length > 0 && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          const activeId = entry.target.getAttribute("id");
          sectionLinks.forEach(function (link) {
            const isMatch = link.dataset.section === activeId;
            link.classList.toggle("active", isMatch);
          });
        });
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: 0 },
    );

    sectionLinks.forEach(function (link) {
      const target = document.getElementById(link.dataset.section);
      if (target) observer.observe(target);
    });
  }
}

/* ==============================
   5. SQUAD GALLERY, FILTERS & MODAL
============================== */

function initSquadSection() {
  const galleryEl = document.getElementById("players-gallery");
  if (!galleryEl) return;

  const counterEl = document.getElementById("squad-counter");
  const categoryButtons = document.querySelectorAll(".category-btn");
  const viewButtons = document.querySelectorAll(".view-btn");
  const galleryFooter = document.getElementById("gallery-footer");
  const prevArrow = document.getElementById("players-prev");
  const nextArrow = document.getElementById("players-next");
  const railProgressBar = document.getElementById("rail-progress-bar");

  // Modal elements
  const modal = document.getElementById("player-modal");
  const modalImage = document.getElementById("modal-player-image");
  const modalNumberBg = document.getElementById("modal-number-bg");
  const modalPosition = document.getElementById("modal-player-position");
  const modalName = document.getElementById("modal-player-name");
  const modalBio = document.getElementById("modal-player-description");
  const modalNumber = document.getElementById("modal-player-number");
  const modalRole = document.getElementById("modal-player-role");
  const modalClub = document.getElementById("modal-player-club");
  const modalStats = document.getElementById("modal-player-stats-note");
  const modalPrevBtn = document.getElementById("modal-prev-player");
  const modalNextBtn = document.getElementById("modal-next-player");
  const modalProfileLink = document.getElementById("modal-profile-link");

  let activeCategory = "all";
  let currentFilteredPlayers = SQUAD_DATA.slice();
  let activeModalIndex = 0;
  let lastTriggerButton = null;

  function renderPlayers(players) {
    currentFilteredPlayers = players;

    const cardsMarkup = players
      .map(function (player) {
        const positionText = getPositionLabel(player.position);
        const displayNumber =
          player.number === "—" ? "NO KIT NUMBER PUBLISHED" : "#" + player.number;

        return `
          <article class="player-card" data-category="${escapeHTML(player.position)}" data-player="${escapeHTML(player.id)}">
            <button
              class="player-card-btn"
              type="button"
              data-player-id="${escapeHTML(player.id)}"
              aria-label="Open details for ${escapeHTML(player.name)}, ${escapeHTML(positionText)}"
            >
              <div class="player-media">
                <img
                  src="${escapeHTML(player.image)}"
                  alt="${escapeHTML(player.image.endsWith('player-silhouette.svg') ? 'Neutral player silhouette; individual portrait not available' : player.name + ' — Indonesia national team ' + positionText)}"
                  loading="lazy"
                />
                <span class="player-number-ghost">${escapeHTML(displayNumber)}</span>
                <span class="player-hover-tag">OPEN DOSSIER ↗</span>
              </div>
              <div class="player-info">
                <span class="player-position">${escapeHTML(positionText)}</span>
                <h3 class="player-name">${escapeHTML(player.name)}</h3>
                <p class="player-note">${escapeHTML(player.shortNote)}</p>
              </div>
            </button>
          </article>
        `;
      })
      .join("");

    galleryEl.innerHTML = cardsMarkup;

    if (counterEl) {
      const unit = players.length === 1 ? "Player" : "Players";
      counterEl.textContent =
        "Showing " + players.length + " of " + SQUAD_DATA.length + " " + unit;
    }

    updateRailProgress();
  }

  function updateRailProgress() {
    if (!railProgressBar) return;
    const maxScroll = galleryEl.scrollWidth - galleryEl.clientWidth;
    if (maxScroll <= 0) {
      railProgressBar.style.width = "100%";
      return;
    }
    const progress = 15 + (galleryEl.scrollLeft / maxScroll) * 85;
    railProgressBar.style.width = Math.min(100, progress).toFixed(1) + "%";
  }

  // Filter buttons
  categoryButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      activeCategory = button.dataset.category || "all";

      categoryButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });
      button.classList.add("active");

      const filtered = filterPlayersByCategory(SQUAD_DATA, activeCategory);
      galleryEl.scrollLeft = 0;
      renderPlayers(filtered);
    });
  });

  // View mode switcher (Rail vs Grid)
  viewButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const selectedView = button.dataset.view || "rail";
      galleryEl.dataset.view = selectedView;

      viewButtons.forEach(function (btn) {
        const isCurrent = btn === button;
        btn.classList.toggle("active", isCurrent);
        btn.setAttribute("aria-pressed", String(isCurrent));
      });

      if (galleryFooter) {
        galleryFooter.classList.toggle("is-hidden", selectedView === "grid");
      }
    });
  });

  // Horizontal rail scroll buttons
  if (prevArrow && nextArrow) {
    prevArrow.addEventListener("click", function () {
      galleryEl.scrollBy({ left: -320, behavior: "smooth" });
    });
    nextArrow.addEventListener("click", function () {
      galleryEl.scrollBy({ left: 320, behavior: "smooth" });
    });
    galleryEl.addEventListener("scroll", updateRailProgress, { passive: true });
  }

  // Modal rendering & navigation
  function populateModal(player) {
    if (!modal || !player) return;
    const positionText = getPositionLabel(player.position);

    modalImage.src = player.image;
    modalImage.alt = player.image.endsWith("player-silhouette.svg")
      ? "Neutral player silhouette; individual portrait not available"
      : player.name + " portrait";
    modalNumberBg.textContent = player.number === "—" ? "—" : player.number;
    modalPosition.textContent = positionText.toUpperCase();
    modalName.textContent = player.name;
    modalBio.textContent = player.bio;
    modalNumber.textContent =
      player.number === "—" ? "Not published for this training-camp list" : "#" + player.number;
    modalRole.textContent = positionText;
    if (modalClub) modalClub.textContent = player.club;
    modalStats.textContent = player.statsNote;
    modalProfileLink.href = "profile.html?player=" + encodeURIComponent(player.id);
  }

  function openModalById(playerId, triggerBtn) {
    if (!modal) return;
    const index = currentFilteredPlayers.findIndex(function (p) {
      return p.id === playerId;
    });
    if (index === -1) return;

    activeModalIndex = index;
    lastTriggerButton = triggerBtn || null;
    populateModal(currentFilteredPlayers[activeModalIndex]);

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    const closeBtn = modal.querySelector(".modal-close");
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastTriggerButton) {
      lastTriggerButton.focus();
    }
  }

  function stepModal(direction) {
    if (currentFilteredPlayers.length === 0) return;
    const total = currentFilteredPlayers.length;
    activeModalIndex = (activeModalIndex + direction + total) % total;
    populateModal(currentFilteredPlayers[activeModalIndex]);
  }

  // Event delegation for dynamically rendered player cards
  galleryEl.addEventListener("click", function (event) {
    const btn = event.target.closest(".player-card-btn");
    if (!btn) return;
    openModalById(btn.dataset.playerId, btn);
  });

  if (modal) {
    modal.querySelectorAll("[data-close-modal]").forEach(function (el) {
      el.addEventListener("click", closeModal);
    });

    if (modalPrevBtn) {
      modalPrevBtn.addEventListener("click", function () {
        stepModal(-1);
      });
    }

    if (modalNextBtn) {
      modalNextBtn.addEventListener("click", function () {
        stepModal(1);
      });
    }

    document.addEventListener("keydown", function (event) {
      if (!modal.classList.contains("active")) return;
      if (event.key === "Escape") {
        closeModal();
      } else if (event.key === "ArrowLeft") {
        stepModal(-1);
      } else if (event.key === "ArrowRight") {
        stepModal(1);
      }
    });
  }

  // Initial render
  renderPlayers(SQUAD_DATA);
}

/* ==============================
   6. MATCHDAY SCHEDULE & FILTERING
============================== */

function initMatchdaySection() {
  const matchListEl = document.getElementById("match-list");
  if (!matchListEl) return;

  const filterButtons = document.querySelectorAll(".match-filter-btn");
  const matchCountEl = document.getElementById("match-count");

  function renderMatches(filterKey) {
    const filtered = filterMatchesByStatus(MATCH_DATA, filterKey);

    if (matchCountEl) {
      if (filtered.length === 0) {
        matchCountEl.textContent = "0 verified match results";
      } else {
        matchCountEl.textContent =
          "Showing " + filtered.length + " verified match results";
      }
    }

    if (filtered.length === 0) {
      const emptyTitle = filterKey === "upcoming"
        ? "No Upcoming Fixture Announced"
        : "No Match Records Available";
      const emptyCopy = filterKey === "upcoming"
        ? "As of 27 November 2026, no next senior international fixture had been officially confirmed. PSSI had begun exploring opponents for the March 2027 FIFA Matchday, but no opponent, date, or venue had been announced. The November window was used for a training camp in Bali."
        : "No match records are available for this filter.";
      matchListEl.innerHTML = `
        <div class="match-empty-state">
          <span class="mono-kicker">MATCHDAY UPDATE • 27 NOVEMBER 2026</span>
          <h3>${emptyTitle}</h3>
          <p>${emptyCopy}</p>
        </div>
      `;
      return;
    }

    const html = filtered
      .map(function (match, idx) {
        const matchNumber = String(idx + 1).padStart(2, "0");
        return `
          <article class="match-card" data-status="${escapeHTML(match.status)}">
            <div class="match-header">
              <span class="match-competition">${escapeHTML(match.competition)}</span>
              <span class="match-status">${escapeHTML(match.status.toUpperCase())}</span>
            </div>

            <div class="match-content">
              <div class="match-team">
                <span class="team-code">${escapeHTML(match.homeCode)}</span>
                <h3>${escapeHTML(match.homeTeam)}</h3>
              </div>

              <div class="match-details">
                <span class="match-date">${escapeHTML(match.date)}</span>
                <strong>${match.status === "finished" ? escapeHTML(match.homeScore + " — " + match.awayScore) : "VS"}</strong>
                <span class="match-time">${escapeHTML(match.time)}</span>
              </div>

              <div class="match-team">
                <span class="team-code">${escapeHTML(match.awayCode)}</span>
                <h3>${escapeHTML(match.awayTeam)}</h3>
              </div>
            </div>

            <div class="match-footer">
              <span>${escapeHTML(match.venue)}</span>
              <span>FIXTURE ${matchNumber}</span>
            </div>
          </article>
        `;
      })
      .join("");

    matchListEl.innerHTML = html;
  }

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const selected = button.dataset.filter || "all";
      filterButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });
      button.classList.add("active");
      renderMatches(selected);
    });
  });

  renderMatches("all");
}

/* ==============================
   7. SUPPORT FORM & SESSION SUPPORTER WALL
============================== */

function initSupportForm() {
  const form = document.getElementById("support-form");
  if (!form) return;

  const nameInput = document.getElementById("fan-name");
  const playerSelect = document.getElementById("favorite-player");
  const messageInput = document.getElementById("support-message");
  const charCount = document.getElementById("char-count");
  const feedbackEl = document.getElementById("form-feedback");

  const errorNameEl = document.getElementById("error-name");
  const errorPlayerEl = document.getElementById("error-player");
  const errorMessageEl = document.getElementById("error-message");

  const wallEl = document.getElementById("support-wall");
  const wallEmptyEl = document.getElementById("wall-empty");
  const wallCountEl = document.getElementById("wall-count");

  let messageTotal = 0;

  // Populate select options dynamically from SQUAD_DATA
  if (playerSelect) {
    SQUAD_DATA.forEach(function (player) {
      const option = document.createElement("option");
      option.value = player.name;
      option.textContent =
        player.name + " (" + getPositionLabel(player.position) + ")";
      playerSelect.appendChild(option);
    });
  }

  // Live character counter
  if (messageInput && charCount) {
    messageInput.addEventListener("input", function () {
      charCount.textContent = messageInput.value.length + " / 240";
    });
  }

  function clearErrors() {
    [nameInput, playerSelect, messageInput].forEach(function (field) {
      if (field) field.classList.remove("is-invalid");
    });
    if (errorNameEl) errorNameEl.textContent = "";
    if (errorPlayerEl) errorPlayerEl.textContent = "";
    if (errorMessageEl) errorMessageEl.textContent = "";
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrors();

    const fanName = nameInput ? nameInput.value.trim() : "";
    const favoritePlayer = playerSelect ? playerSelect.value : "";
    const supportMessage = messageInput ? messageInput.value.trim() : "";

    const result = validateSupportForm(fanName, favoritePlayer, supportMessage);

    if (!result.isValid) {
      if (result.errors.name && nameInput && errorNameEl) {
        nameInput.classList.add("is-invalid");
        errorNameEl.textContent = result.errors.name;
      }
      if (result.errors.player && playerSelect && errorPlayerEl) {
        playerSelect.classList.add("is-invalid");
        errorPlayerEl.textContent = result.errors.player;
      }
      if (result.errors.message && messageInput && errorMessageEl) {
        messageInput.classList.add("is-invalid");
        errorMessageEl.textContent = result.errors.message;
      }

      if (feedbackEl) {
        feedbackEl.className = "form-feedback is-error";
        feedbackEl.textContent =
          "Please fix the highlighted fields before submitting.";
      }
      return;
    }

    // Append to session supporter wall
    if (wallEmptyEl) {
      wallEmptyEl.classList.add("is-hidden");
    }

    if (wallEl) {
      const card = document.createElement("article");
      card.className = "wall-card";
      card.innerHTML = `
        <div class="wall-card-top">
          <strong>${escapeHTML(fanName)}</strong>
          <span>For ${escapeHTML(favoritePlayer)}</span>
        </div>
        <p>${escapeHTML(supportMessage)}</p>
      `;
      wallEl.prepend(card);
    }

    messageTotal += 1;
    if (wallCountEl) {
      const label = messageTotal === 1 ? "Message" : "Messages";
      wallCountEl.textContent = messageTotal + " " + label;
    }

    if (feedbackEl) {
      feedbackEl.className = "form-feedback is-success";
      feedbackEl.textContent =
        "Thank you, " +
        fanName +
        "! Your message for " +
        favoritePlayer +
        " has been added to the local session supporter wall (frontend demo only).";
    }

    form.reset();
    if (charCount) {
      charCount.textContent = "0 / 240";
    }
  });
}

/* ==============================
   8. PROFILE PAGE (CREATOR & PLAYER DOSSIER)
============================== */

function initProfilePage() {
  const creatorView = document.getElementById("creator-profile-view");
  const playerView = document.getElementById("player-profile-view");
  const directoryEl = document.getElementById("profile-squad-directory");

  if (!creatorView && !playerView) return;

  const params = new URLSearchParams(window.location.search);
  const requestedPlayerId = params.get("player");
  const selectedPlayer = requestedPlayerId
    ? findPlayerById(SQUAD_DATA, requestedPlayerId)
    : null;

  if (selectedPlayer && playerView && creatorView) {
    creatorView.classList.add("is-hidden");
    playerView.classList.remove("is-hidden");

    const positionLabel = getPositionLabel(selectedPlayer.position);
    const currentIndex = SQUAD_DATA.findIndex(function (p) {
      return p.id === selectedPlayer.id;
    });
    const prevPlayer =
      SQUAD_DATA[(currentIndex - 1 + SQUAD_DATA.length) % SQUAD_DATA.length];
    const nextPlayer = SQUAD_DATA[(currentIndex + 1) % SQUAD_DATA.length];

    document.title = selectedPlayer.name + " | GARUDA FANS Dossier";

    const imgEl = document.getElementById("dossier-image");
    const bgNumEl = document.getElementById("dossier-number-bg");
    const posEl = document.getElementById("dossier-position");
    const nameEl = document.getElementById("dossier-name");
    const bioEl = document.getElementById("dossier-bio");
    const numEl = document.getElementById("dossier-number");
    const roleEl = document.getElementById("dossier-role");
    const statsEl = document.getElementById("dossier-stats");
    const clubEl = document.getElementById("dossier-club");
    const prevLink = document.getElementById("dossier-prev-link");
    const nextLink = document.getElementById("dossier-next-link");

    if (imgEl) {
      imgEl.src = selectedPlayer.image;
      imgEl.alt = selectedPlayer.image.endsWith("player-silhouette.svg")
        ? "Neutral player silhouette; individual portrait not available"
        : selectedPlayer.name + " portrait";
    }
    if (bgNumEl) {
      bgNumEl.textContent =
        selectedPlayer.number === "—" ? "—" : selectedPlayer.number;
    }
    if (posEl) posEl.textContent = "PLAYER DOSSIER • " + positionLabel.toUpperCase();
    if (nameEl) nameEl.textContent = selectedPlayer.name;
    if (bioEl) bioEl.textContent = selectedPlayer.bio;
    if (numEl) {
      numEl.textContent =
        selectedPlayer.number === "—"
          ? "Not published for this training-camp list"
          : "#" + selectedPlayer.number;
    }
    if (roleEl) roleEl.textContent = positionLabel;
    if (clubEl) clubEl.textContent = selectedPlayer.club;
    if (statsEl) statsEl.textContent = selectedPlayer.statsNote;

    if (prevLink) {
      prevLink.href = "profile.html?player=" + encodeURIComponent(prevPlayer.id);
      prevLink.textContent = "← " + prevPlayer.name;
    }
    if (nextLink) {
      nextLink.href = "profile.html?player=" + encodeURIComponent(nextPlayer.id);
      nextLink.textContent = nextPlayer.name + " →";
    }
  }

  // Render quick dossier directory for all 22 November 2026 training-camp invitees
  if (directoryEl) {
    directoryEl.innerHTML = SQUAD_DATA.map(function (player) {
      const isCurrent = selectedPlayer && selectedPlayer.id === player.id;
      const numberLabel =
        player.number === "—" ? "NUMBER NOT LISTED" : "#" + player.number;
      return `
        <a
          href="profile.html?player=${encodeURIComponent(player.id)}"
          class="directory-card ${isCurrent ? "is-current" : ""}"
        >
          <img
            src="${escapeHTML(player.image)}"
            alt="${escapeHTML(player.image.endsWith("player-silhouette.svg") ? "Neutral player silhouette; individual portrait not available" : player.name + " portrait")}"
            loading="lazy"
          />
          <div>
            <span>${escapeHTML(getPositionLabel(player.position))} • ${escapeHTML(numberLabel)}</span>
            <strong>${escapeHTML(player.name)}</strong>
          </div>
        </a>
      `;
    }).join("");
  }
}

/* ==============================
   9. BACK TO TOP
============================== */

function initBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top");
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ==============================
   10. GSAP + SCROLLTRIGGER MOTION (GRACEFUL FALLBACK)
============================== */

function initMotionEnhancements() {
  const prefersReducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Graceful fallback: if reduced motion or GSAP CDN unavailable, content stays 100% visible
  if (prefersReducedMotion || typeof window.gsap === "undefined") {
    return;
  }

  const gsap = window.gsap;

  // Hero entrance
  const heroItems = document.querySelectorAll(".hero-animate");
  if (heroItems.length > 0) {
    gsap.from(heroItems, {
      y: 26,
      opacity: 0,
      duration: 0.75,
      stagger: 0.1,
      ease: "power3.out",
      clearProps: "transform,opacity",
    });
  }

  if (typeof window.ScrollTrigger !== "undefined") {
    gsap.registerPlugin(window.ScrollTrigger);

    // Subtle hero image parallax
    const heroImg = document.getElementById("hero-parallax-img");
    if (heroImg) {
      gsap.to(heroImg, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Section scroll reveals (never hides content permanently)
    document.querySelectorAll(".reveal-up").forEach(function (sectionEl) {
      gsap.from(sectionEl, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: sectionEl,
          start: "top 88%",
          once: true,
        },
      });
    });
  }
}
