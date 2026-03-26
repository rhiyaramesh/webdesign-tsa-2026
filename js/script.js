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

  const resultBox = document.getElementById("quiz-result");
  resultBox.innerHTML = `Your score: ${score}/10`;

  if (score === 10) {
    resultBox.innerHTML += "<br>Excellent work!";
  } else if (score >= 7) {
    resultBox.innerHTML += "<br>Great job!";
  } else if (score >= 5) {
    resultBox.innerHTML += "<br>Nice try!";
  } else {
    resultBox.innerHTML += "<br>Go back and explore more of the website!";
  }
}