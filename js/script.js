function checkQuiz() {
  let score = 0;

  const answers = {
    q1: "b",
    q2: "b",
    q3: "d",
    q4: "a",
    q5: "c",
    q6: "c",
    q7: "d",
    q8: "a",
    q9: "c",
    q10: "a"
  };

  for (let question in answers) {
    const selected = document.querySelector(`input[name="${question}"]:checked`);
    if (selected && selected.value === answers[question]) {
      score++;
    }
  }

  const resultBox = document.getElementById("result");

  let message = "";

  if (score === 10) {
    message = "Excellent work!";
  } else if (score >= 7) {
    message = "Great job!";
  } else if (score >= 5) {
    message = "Nice try!";
  } else {
    message = "Go back and explore more of the website!";
  }

  resultBox.innerHTML = `
    <div class="result-card">
      <h2>Your Score</h2>
      <div class="score-number">${score}/10</div>
      <p class="score-message">${message}</p>
    </div>
  `;
}

function clearQuiz() {
  const allOptions = document.querySelectorAll('input[type="radio"]');

  allOptions.forEach(option => {
    option.checked = false;
  });

  document.getElementById("result").innerHTML = "";
}

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});