/* ==============================
   GARUDA FANS
   MAIN JAVASCRIPT
============================== */

document.addEventListener("DOMContentLoaded", function () {
  console.log("Garuda Fans website is ready!");

  // ==============================
  // MOBILE NAVIGATION
  // ==============================

  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      const isOpen = navLinks.classList.toggle("active");

      menuToggle.setAttribute("aria-expanded", isOpen);
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu",
      );
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
      });
    });
  }

  // ==============================
  // PLAYER POSITION FILTER
  // ==============================

  const categoryButtons = document.querySelectorAll(".category-btn");
  const playerCards = document.querySelectorAll(".player-card");

  categoryButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const selectedCategory = button.dataset.category;

      categoryButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      playerCards.forEach(function (card) {
        const playerCategory = card.dataset.category;

        if (selectedCategory === "all" || playerCategory === selectedCategory) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // ==============================
  // PLAYER GALLERY NAVIGATION
  // ==============================

  const playersGallery = document.querySelector(".players-gallery");
  const playersPrev = document.getElementById("players-prev");
  const playersNext = document.getElementById("players-next");

  if (playersGallery && playersPrev && playersNext) {
    playersNext.addEventListener("click", function () {
      playersGallery.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    });

    playersPrev.addEventListener("click", function () {
      playersGallery.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    });
  }

  // ==============================
  // PLAYER DETAIL MODAL
  // ==============================

  const playerModal = document.getElementById("player-modal");
  const playerButtons = document.querySelectorAll(".player-card-btn");

  if (playerModal) {
    const modalImage = document.getElementById("modal-player-image");
    const modalName = document.getElementById("modal-player-name");
    const modalPosition = document.getElementById("modal-player-position");
    const modalDescription = document.getElementById(
      "modal-player-description",
    );
    const modalNumber = document.getElementById("modal-player-number");
    const modalRole = document.getElementById("modal-player-role");

    let previousActiveElement = null;

    // OPEN MODAL
    playerButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const playerCard = button.closest(".player-card");

        if (!playerCard) return;

        const playerImage = playerCard.querySelector(".player-image img");
        const playerName = playerCard.querySelector(".player-info h3");
        const playerPosition = playerCard.querySelector(
          ".player-info .player-position",
        );
        const playerNumber = playerCard.querySelector(".player-number");
        const playerDescription = playerCard.querySelector(".player-info p");

        if (
          !playerImage ||
          !playerName ||
          !playerPosition ||
          !playerNumber ||
          !playerDescription
        ) {
          return;
        }

        previousActiveElement = button;

        modalImage.src = playerImage.src;
        modalImage.alt = playerImage.alt;
        modalName.textContent = playerName.textContent;
        modalPosition.textContent = playerPosition.textContent;
        modalDescription.textContent = playerDescription.textContent;
        modalNumber.textContent = playerNumber.textContent;
        modalRole.textContent = playerPosition.textContent;

        playerModal.classList.add("active");
        playerModal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";
      });
    });

    // CLOSE MODAL
    function closePlayerModal() {
      playerModal.classList.remove("active");
      playerModal.setAttribute("aria-hidden", "true");

      document.body.style.overflow = "";

      if (previousActiveElement) {
        previousActiveElement.focus();
      }
    }

    playerModal
      .querySelectorAll("[data-close-modal]")
      .forEach(function (element) {
        element.addEventListener("click", closePlayerModal);
      });

    // CLOSE WITH ESCAPE KEY
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && playerModal.classList.contains("active")) {
        closePlayerModal();
      }
    });
  }

  // ==============================
  // MATCH FILTER
  // ==============================

  const matchFilterButtons = document.querySelectorAll(".match-filter-btn");

  const matchCards = document.querySelectorAll(".match-card");

  matchFilterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const selectedFilter = button.dataset.filter;

      matchFilterButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      matchCards.forEach(function (card) {
        const matchStatus = card.dataset.status;

        if (selectedFilter === "all" || matchStatus === selectedFilter) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // ==============================
  // FAN SUPPORT FORM
  // ==============================

  const supportForm = document.querySelector(".support-form");

  if (supportForm) {
    supportForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const nameInput = supportForm.querySelector('[name="name"]');
      const favoritePlayerInput = supportForm.querySelector(
        '[name="favoritePlayer"]',
      );

      const fanName = nameInput.value.trim();
      const favoritePlayer = favoritePlayerInput.value;

      alert(
        `Thank you, ${fanName}! Your support for ${favoritePlayer} has been received. Garuda Fans appreciates your support!`,
      );

      supportForm.reset();
    });
  }

  // ==============================
  // SMOOTH SCROLL NAVIGATION
  // ==============================

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        event.preventDefault();

        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});
