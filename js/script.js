document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      window.location.href = button.dataset.target;
    });
  });

  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");

  function runSearch() {
    if (!searchInput) return;

    const value = searchInput.value.trim().toLowerCase();

    if (value.includes("witch") || value.includes("grace")) {
      window.location.href = "historical-elements.html#grace-sherwood";
    } else if (value.includes("pirate") || value.includes("blackbeard")) {
      window.location.href = "historical-elements.html#blackbeard";
    } else if (value.includes("statue") || value.includes("neptune")) {
      window.location.href = "historical-elements.html#king-neptune";
    } else if (value.includes("ghost") || value.includes("hotel") || value.includes("cavalier")) {
      window.location.href = "historical-elements.html#legends";
    } else if (value.includes("place")) {
      window.location.href = "historical-elements.html#places";
    } else if (value.includes("event") || value.includes("festival")) {
      window.location.href = "historical-elements.html#events";
    } else {
      alert("Try keywords like witch, pirate, statue, ghost, hotel, place, or festival.");
    }
  }

  if (searchBtn) {
    searchBtn.addEventListener("click", runSearch);
  }

  if (searchInput) {
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        runSearch();
      }
    });
  }

  const quizOptions = document.querySelectorAll(".quiz-option");
  const quizResult = document.getElementById("quizResult");

  quizOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const resultLink = option.dataset.result;

      if (quizResult) {
        quizResult.innerHTML = `
          <h3>Recommended Section</h3>
          <p>Based on your choice, you may enjoy this part of the site most.</p>
          <a class="btn primary" href="${resultLink}">Go to Recommendation</a>
        `;
      }
    });
  });
});