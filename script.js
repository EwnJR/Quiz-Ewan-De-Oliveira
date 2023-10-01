let currentQuestion = 1;
const totalQuestions = 10; // Mettez à jour avec le total de vos questions
let score = 0;
const answers = {}; // Stocke les réponses de l'utilisateur

function nextQuestion(questionNumber) {
  const currentQuestionElement = document.getElementById(`question${questionNumber}`);
  const nextQuestionElement = document.getElementById(`question${questionNumber + 1}`);

  const selectedAnswer = document.querySelector(`input[name=q${questionNumber}]:checked`);

  if (selectedAnswer) {
    const answerValue = selectedAnswer.value;
    answers[`Question ${questionNumber}`] = {
      answer: answerValue,
      question: currentQuestionElement.querySelector("p").innerText
    };
    if (answerValue === "ewandeoliveira") {
      score++;
    }

    if (answerValue === "rennes") {
      score++;
    }

    if (answerValue === "lesmureaux") {
      score++;
    }

    if (answerValue === "intermediaire") {
      score++;
    }

    if (answerValue === "5") {
      score++;
    }

    if (answerValue === "5langages") {
      score++;
    }

    if (answerValue === "permisb") {
      score++;
    }

    if (answerValue === "bts") {
      score++;
    }

    if (answerValue === "master1") {
      score++;
    }

    if (answerValue === "oui5") {
      score++;
    }
  }

  if (currentQuestionElement) {
    currentQuestionElement.style.display = "none";
  }

  if (nextQuestionElement) {
    nextQuestionElement.style.display = "block";
    currentQuestion = questionNumber + 1;
  } else {
    // Afficher le résultat à la fin des questions
    displayResult();
  }

  updateProgress();
}

function restartQuiz() {
  // Réinitialisez les variables de progression, score et réponses
  currentQuestion = 1;
  score = 0;
  answers = {};

  // Affichez la première question et masquez les autres
  for (let i = 1; i <= totalQuestions; i++) {
    const question = document.getElementById(`question${i}`);
    if (question) {
      if (i === 1) {
        question.style.display = "block";
      } else {
        question.style.display = "none";
      }
    }
  }

  // Mettez à jour la progression
  updateProgress();
}

function updateProgress() {
  const progressElement = document.getElementById("progress");
  progressElement.innerText = `Question ${currentQuestion}/${totalQuestions}`;
}

function displayResult() {
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `<h2>Résultats du quiz</h2><p>Votre score est ${score} sur ${totalQuestions} questions.</p>`;

  // Afficher un message en fonction du score
  let message = "";
  if (score >= 8 && score <= 10) {
    message = "C'est super ! Vous avez gagné le droit de me contacter aux 06 17 84 14 80 ou sur mon mail : de.oliveira.ewan@gmail.com";
  } else if (score >= 5) {
    message = "C'est déjà bien mais pour avoir une meilleure note vous pouvez me contacter aux 06 17 84 14 80 ou sur mon mail : deoliveira.ewan@gmail.com";
  } else {
    message = "Si vous souhaitez avoir une meilleure note vous pouvez me contacter aux 06 17 84 14 80 ou sur mon mail : de.oliveira.ewan@gmail.com";
  }

  resultElement.innerHTML += `<p>${message}</p>`;

  // Afficher le bouton "Recommencer"
  const restartButtonContainer = document.getElementById("restart-button-container");
  if (restartButtonContainer) {
    restartButtonContainer.style.display = "block";
  }

  // Appeler restartQuiz pour permettre de recommencer le quiz
  restartQuiz();
}


// ... autres fonctions ...

// Au début, mettez à jour la progression pour afficher la première question
updateProgress();
