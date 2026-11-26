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
   (Strictly uses verified workspace assets & honest placeholders)
============================== */

const POSITION_LABELS = {
  goalkeeper: "Goalkeeper",
  defender: "Defender",
  midfielder: "Midfielder",
  forward: "Forward",
};

const SQUAD_DATA = [
  {
    id: "emil-audero",
    name: "Emil Audero",
    number: "01",
    position: "goalkeeper",
    image: "assets/images/Emil Audero.jpeg",
    shortNote: "Goalkeeper • Kit #01",
    bio: "Indonesian National Team goalkeeper portrait from the Garuda Fans archive. Official career caps, clean-sheet records, and match biography remain placeholders until verified against official PSSI records.",
    statsNote: "Official stats TBA (Placeholder)",
  },
  {
    id: "maarten-paes",
    name: "Maarten Paes",
    number: "TBA",
    position: "goalkeeper",
    image: "assets/images/Maarten Paes.jpeg",
    shortNote: "Goalkeeper • Number TBA",
    bio: "Indonesian National Team goalkeeper portrait from the Garuda Fans archive. Jersey number not visible in this crop; career statistics and biography are marked as placeholders.",
    statsNote: "Official stats TBA (Placeholder)",
  },
  {
    id: "nadeo-arga-winata",
    name: "Nadeo Arga Winata",
    number: "12",
    position: "goalkeeper",
    image: "assets/images/Nadeo Arga Winata - U23.jpeg",
    shortNote: "Goalkeeper • Kit #12",
    bio: "Indonesian National Team goalkeeper portrait from the Garuda Fans archive. Detailed match appearances and statistics are placeholders awaiting official updates.",
    statsNote: "Official stats TBA (Placeholder)",
  },
  {
    id: "rizky-ridho",
    name: "Rizky Ridho",
    number: "05",
    position: "defender",
    image: "assets/images/Rizky Ridho.jpeg",
    shortNote: "Defender • Kit #05",
    bio: "Indonesian National Team defender portrait wearing shirt #05. Official international caps and club statistics are marked as placeholders until verified.",
    statsNote: "Official stats TBA (Placeholder)",
  },
  {
    id: "kevin-diks",
    name: "Kevin Diks",
    number: "02",
    position: "defender",
    image: "assets/images/Kevin Diks.jpeg",
    shortNote: "Defender • Kit #02",
    bio: "Indonesian National Team defender portrait wearing shirt #02. Detailed match history and player statistics are placeholders awaiting official confirmation.",
    statsNote: "Official stats TBA (Placeholder)",
  },
  {
    id: "justin-hubner",
    name: "Justin Hubner",
    number: "23",
    position: "defender",
    image: "assets/images/Justin hubner.jpeg",
    shortNote: "Defender • Kit #23",
    bio: "Indonesian National Team defender portrait wearing shirt #23. Official international match statistics are marked as placeholders.",
    statsNote: "Official stats TBA (Placeholder)",
  },
  {
    id: "jordi-amat",
    name: "Jordi Amat",
    number: "TBA",
    position: "defender",
    image: "assets/images/Jordi Amat.jpeg",
    shortNote: "Defender • Number TBA",
    bio: "Indonesian National Team defender portrait from the squad archive. Shirt number is not visible in this frame; official career statistics remain placeholders.",
    statsNote: "Official stats TBA (Placeholder)",
  },
  {
    id: "dean-james",
    name: "Dean James",
    number: "21",
    position: "defender",
    image: "assets/images/Dean James.jpeg",
    shortNote: "Defender • Kit #21",
    bio: "Indonesian National Team defender portrait wearing shirt #21. Official career statistics and match records are placeholders awaiting verified data.",
    statsNote: "Official stats TBA (Placeholder)",
  },
  {
    id: "dion-markx",
    name: "Dion Markx",
    number: "19",
    position: "defender",
    image: "assets/images/Dion Markx.jpeg",
    shortNote: "Defender • Kit #19",
    bio: "Indonesian National Team defender portrait wearing shirt #19. Career stats and international biography are placeholders until verified.",
    statsNote: "Official stats TBA (Placeholder)",
  },
  {
    id: "elkan-baggott",
    name: "Elkan Baggott",
    number: "TBA",
    position: "defender",
    image: "assets/images/Elkan Baggot.jpeg",
    shortNote: "Defender • Number TBA",
    bio: "Indonesian National Team defender portrait. Jersey number is obscured in the photograph; verified match stats are marked as placeholders.",
    statsNote: "Official stats TBA (Placeholder)",
  },
  {
    id: "shayne-pattynama",
    name: "Shayne Pattynama",
    number: "20",
    position: "defender",
    image: "assets/images/Shayne Pattynama.jpeg",
    shortNote: "Defender • Kit #20",
    bio: "Indonesian National Team defender portrait wearing shirt #20. Official caps and match details are marked as placeholders.",
    statsNote: "Official stats TBA (Placeholder)",
  },
  {
    id: "calvin-verdonk",
    name: "Calvin Verdonk",
    number: "TBA",
    position: "defender",
    image: "assets/images/Calvin Verdonk.jpeg",
    shortNote: "Defender • Number TBA",
    bio: "Indonesian National Team defender portrait. Jersey number is covered in this image; career statistics are marked as placeholders.",
    statsNote: "Official stats TBA (Placeholder)",
  },
  {
    id: "thom-haye",
    name: "Thom Haye",
    number: "19",
    position: "midfielder",
    image: "assets/images/Thom Haye.jpeg",
    shortNote: "Midfielder • Kit #19",
    bio: "Indonesian National Team midfielder portrait wearing shirt #19. Verified appearances and statistical records are marked as placeholders.",
    statsNote: "Official stats TBA (Placeholder)",
  },
  {
    id: "joey-pelupessy",
    name: "Joey Pelupessy",
    number: "14",
    position: "midfielder",
    image: "assets/images/joey pelupessy.jpeg",
    shortNote: "Midfielder • Kit #14",
    bio: "Indonesian National Team midfielder portrait wearing shirt #14. Official match appearances and statistics are placeholders.",
    statsNote: "Official stats TBA (Placeholder)",
  },
  {
    id: "nathan-tjoe-a-on",
    name: "Nathan Tjoe-A-On",
    number: "22",
    position: "midfielder",
    image: "assets/images/Nathan Tjoe-A-On.jpeg",
    shortNote: "Midfielder • Kit #22",
    bio: "Indonesian National Team midfielder portrait wearing shirt #22. Official international statistics and biography remain placeholders.",
    statsNote: "Official stats TBA (Placeholder)",
  },
  {
    id: "ole-romeny",
    name: "Ole Romeny",
    number: "10",
    position: "forward",
    image: "assets/images/Ole Romeny.jpeg",
    shortNote: "Forward • Kit #10",
    bio: "Indonesian National Team forward portrait wearing shirt #10. Verified goals and international appearances are marked as placeholders.",
    statsNote: "Official stats TBA (Placeholder)",
  },
  {
    id: "ragnar-oratmangoen",
    name: "Ragnar Oratmangoen",
    number: "TBA",
    position: "forward",
    image: "assets/images/Ragnar Oratmangoen.jpeg",
    shortNote: "Forward • Number TBA",
    bio: "Indonesian National Team forward portrait. Jersey number is obscured in this frame; official stats and bio are placeholders.",
    statsNote: "Official stats TBA (Placeholder)",
  },
  {
    id: "mitchell-baker",
    name: "Mitchell Baker",
    number: "09",
    position: "forward",
    image: "assets/images/Mitchell Baker.jpeg",
    shortNote: "Forward • Kit #09",
    bio: "Indonesian National Team forward portrait wearing shirt #09. Official match records and career statistics remain placeholders.",
    statsNote: "Official stats TBA (Placeholder)",
  },
];

const MATCH_DATA = [
  {
    id: "match-01",
    competition: "INTERNATIONAL MATCHDAY (TBA)",
    status: "upcoming",
    homeCode: "IDN",
    homeTeam: "INDONESIA",
    awayCode: "TBA",
    awayTeam: "OPPONENT TBA",
    date: "Date TBA",
    time: "Kickoff TBA",
    venue: "Venue: To Be Announced",
  },
  {
    id: "match-02",
    competition: "OFFICIAL COMPETITION (TBA)",
    status: "upcoming",
    homeCode: "IDN",
    homeTeam: "INDONESIA",
    awayCode: "TBA",
    awayTeam: "OPPONENT TBA",
    date: "Date TBA",
    time: "Kickoff TBA",
    venue: "Venue: To Be Announced",
  },
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
  initPlaceholderLinks();
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
          player.number === "TBA" ? "TBA" : "#" + player.number;

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
                  alt="${escapeHTML(player.name)} — Indonesian National Team ${escapeHTML(positionText)}"
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
    modalImage.alt = player.name + " portrait";
    modalNumberBg.textContent = player.number === "TBA" ? "—" : player.number;
    modalPosition.textContent = positionText.toUpperCase();
    modalName.textContent = player.name;
    modalBio.textContent = player.bio;
    modalNumber.textContent =
      player.number === "TBA" ? "TBA (Not Visible)" : "#" + player.number;
    modalRole.textContent = positionText;
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
        matchCountEl.textContent = "0 Verified Results Recorded";
      } else {
        matchCountEl.textContent =
          "Showing " + filtered.length + " Scheduled Placeholders";
      }
    }

    if (filtered.length === 0) {
      matchListEl.innerHTML = `
        <div class="match-empty-state">
          <span class="mono-kicker">OFFICIAL RESULT ARCHIVE</span>
          <h3>No Verified Finished Results Yet</h3>
          <p>
            Official match scores and final statistics are not fabricated on
            this platform. Completed fixtures will appear here once verified
            data is added.
          </p>
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
                <strong>VS</strong>
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
    const prevLink = document.getElementById("dossier-prev-link");
    const nextLink = document.getElementById("dossier-next-link");

    if (imgEl) {
      imgEl.src = selectedPlayer.image;
      imgEl.alt = selectedPlayer.name + " portrait";
    }
    if (bgNumEl) {
      bgNumEl.textContent =
        selectedPlayer.number === "TBA" ? "—" : selectedPlayer.number;
    }
    if (posEl) posEl.textContent = "PLAYER DOSSIER • " + positionLabel.toUpperCase();
    if (nameEl) nameEl.textContent = selectedPlayer.name;
    if (bioEl) bioEl.textContent = selectedPlayer.bio;
    if (numEl) {
      numEl.textContent =
        selectedPlayer.number === "TBA"
          ? "TBA (Not Visible)"
          : "#" + selectedPlayer.number;
    }
    if (roleEl) roleEl.textContent = positionLabel;
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

  // Render quick dossier directory for all 18 players
  if (directoryEl) {
    directoryEl.innerHTML = SQUAD_DATA.map(function (player) {
      const isCurrent = selectedPlayer && selectedPlayer.id === player.id;
      const numberLabel =
        player.number === "TBA" ? "TBA" : "#" + player.number;
      return `
        <a
          href="profile.html?player=${encodeURIComponent(player.id)}"
          class="directory-card ${isCurrent ? "is-current" : ""}"
        >
          <img
            src="${escapeHTML(player.image)}"
            alt="${escapeHTML(player.name)}"
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
   9. PLACEHOLDER LINKS & BACK TO TOP
============================== */

function initPlaceholderLinks() {
  document.querySelectorAll("[data-placeholder-link]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const platform = link.dataset.placeholderLink || "Social";
      link.setAttribute(
        "title",
        platform + " URL is a placeholder for the project owner to configure.",
      );
      const labelSpan = link.querySelector("span");
      if (labelSpan) {
        labelSpan.textContent = platform + " [Placeholder — Set Your URL]";
      }
    });
  });
}

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
