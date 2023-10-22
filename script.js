document.getElementById("submit-button").addEventListener("click", function () {
    const questions = document.querySelectorAll(".question");
    const totalQuestions = questions.length;
    let score = 0;
    const correctAnswers = [
        "Jupiter", "Carbon Dioxide", "Canberra", "William Shakespeare", "Blue Whale",
        "Au", "7", "100", "Mars", "O2"
    ];

    for (let i = 0; i < totalQuestions; i++) {
        const selectedOption = questions[i].querySelector('input[type="radio"]:checked');

        if (selectedOption) {
            const selectedAnswer = selectedOption.value;
            if (selectedAnswer === correctAnswers[i]) {
                score++;
            }
        }
    }

    document.getElementById("score").innerText = score;

    const resultContainer = document.querySelector(".result-container");
    const answersContainer = document.querySelector(".answers-container");

    resultContainer.style.display = "block";
    answersContainer.style.display = "block"; // Always display answers

    populateCorrectAnswers(correctAnswers);
});

function populateCorrectAnswers(answers) {
    const correctAnswersList = document.getElementById("correct-answers");
    answers.forEach((answer, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `Question ${index + 1}: ${answer}`;
        correctAnswersList.appendChild(listItem);
    });
}
