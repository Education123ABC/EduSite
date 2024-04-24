const flashcards = [
{ question: "2 - 1 =", answer: "1" },
{ question: "3 - 1 =", answer: "2" },
{ question: "4 - 1 =", answer: "3" },
{ question: "5 - 1 =", answer: "4" },
{ question: "6 - 1 =", answer: "5" },
{ question: "7 - 1 =", answer: "6" },
{ question: "8 - 1 =", answer: "7" },
{ question: "9 - 1 =", answer: "8" },
{ question: "10 - 1 =", answer: "9" },
{ question: "11 - 1 =", answer: "10" },
{ question: "12 - 1 =", answer: "11" },
{ question: "13 - 1 =", answer: "12" },
{ question: "14 - 1 =", answer: "13" },
{ question: "15 - 1 =", answer: "14" },
{ question: "16 - 1 =", answer: "15" },
{ question: "17 - 1 =", answer: "16" },
{ question: "18 - 1 =", answer: "17" },
{ question: "19 - 1 =", answer: "18" },
{ question: "20 - 1 =", answer: "19" },
{ question: "3 - 2 =", answer: "1" },
{ question: "4 - 2 =", answer: "2" },
{ question: "5 - 2 =", answer: "3" },
{ question: "6 - 2 =", answer: "4" },
{ question: "7 - 2 =", answer: "5" },
{ question: "8 - 2 =", answer: "6" },
{ question: "9 - 2 =", answer: "7" },
{ question: "10 - 2 =", answer: "8" },
{ question: "11 - 2 =", answer: "9" },
{ question: "12 - 2 =", answer: "10" },
{ question: "13 - 2 =", answer: "11" },
{ question: "14 - 2 =", answer: "12" },
{ question: "15 - 2 =", answer: "13" },
{ question: "16 - 2 =", answer: "14" },
{ question: "17 - 2 =", answer: "15" },
{ question: "18 - 2 =", answer: "16" },
{ question: "19 - 2 =", answer: "17" },
{ question: "20 - 2 =", answer: "18" },
{ question: "4 - 3 =", answer: "1" },
{ question: "5 - 3 =", answer: "2" },
{ question: "6 - 3 =", answer: "3" },
{ question: "7 - 3 =", answer: "4" },
{ question: "8 - 3 =", answer: "5" },
{ question: "9 - 3 =", answer: "6" },
{ question: "10 - 3 =", answer: "7" },
{ question: "11 - 3 =", answer: "8" },
{ question: "12 - 3 =", answer: "9" },
{ question: "13 - 3 =", answer: "10" },
{ question: "14 - 3 =", answer: "11" },
{ question: "15 - 3 =", answer: "12" },
{ question: "16 - 3 =", answer: "13" },
{ question: "17 - 3 =", answer: "14" },
{ question: "18 - 3 =", answer: "15" },
{ question: "19 - 3 =", answer: "16" },
{ question: "20 - 3 =", answer: "17" },
{ question: "5 - 4 =", answer: "1" },
{ question: "6 - 4 =", answer: "2" },
{ question: "7 - 4 =", answer: "3" },
{ question: "8 - 4 =", answer: "4" },
{ question: "9 - 4 =", answer: "5" },
{ question: "10 - 4 =", answer: "6" },
{ question: "11 - 4 =", answer: "7" },
{ question: "12 - 4 =", answer: "8" },
{ question: "13 - 4 =", answer: "9" },
{ question: "14 - 4 =", answer: "10" },
{ question: "15 - 4 =", answer: "11" },
{ question: "16 - 4 =", answer: "12" },
{ question: "17 - 4 =", answer: "13" },
{ question: "18 - 4 =", answer: "14" },
{ question: "19 - 4 =", answer: "15" },
{ question: "20 - 4 =", answer: "16" },
{ question: "6 - 5 =", answer: "1" },
{ question: "7 - 5 =", answer: "2" },
{ question: "8 - 5 =", answer: "3" },
{ question: "9 - 5 =", answer: "4" },
{ question: "10 - 5 =", answer: "5" },
{ question: "11 - 5 =", answer: "6" },
{ question: "12 - 5 =", answer: "7" },
{ question: "13 - 5 =", answer: "8" },
{ question: "14 - 5 =", answer: "9" },
{ question: "15 - 5 =", answer: "10" },
{ question: "16 - 5 =", answer: "11" },
{ question: "17 - 5 =", answer: "12" },
{ question: "18 - 5 =", answer: "13" },
{ question: "19 - 5 =", answer: "14" },
{ question: "20 - 5 =", answer: "15" },
{ question: "7 - 6 =", answer: "1" },
{ question: "8 - 6 =", answer: "2" },
{ question: "9 - 6 =", answer: "3" },
{ question: "10 - 6 =", answer: "4" },
{ question: "11 - 6 =", answer: "5" },
{ question: "12 - 6 =", answer: "6" },
{ question: "13 - 6 =", answer: "7" },
{ question: "14 - 6 =", answer: "8" },
{ question: "15 - 6 =", answer: "9" },
{ question: "16 - 6 =", answer: "10" },
{ question: "17 - 6 =", answer: "11" },
{ question: "18 - 6 =", answer: "12" },
{ question: "19 - 6 =", answer: "13" },
{ question: "20 - 6 =", answer: "14" },
{ question: "8 - 7 =", answer: "1" },
{ question: "9 - 7 =", answer: "2" },
{ question: "10 - 7 =", answer: "3" },
{ question: "11 - 7 =", answer: "4" },
{ question: "12 - 7 =", answer: "5" },
{ question: "13 - 7 =", answer: "6" },
{ question: "14 - 7 =", answer: "7" },
{ question: "15 - 7 =", answer: "8" },
{ question: "16 - 7 =", answer: "9" },
{ question: "17 - 7 =", answer: "10" },
{ question: "9 - 8 =", answer: "1" },
{ question: "10 - 8 =", answer: "2" },
{ question: "11 - 8 =", answer: "3" },
{ question: "12 - 8 =", answer: "4" },
{ question: "13 - 8 =", answer: "5" },
{ question: "14 - 8 =", answer: "6" },
{ question: "15 - 8 =", answer: "7" },
{ question: "16 - 8 =", answer: "8" },
{ question: "17 - 8 =", answer: "9" },
{ question: "18 - 8 =", answer: "10" },
{ question: "19 - 8 =", answer: "11" },
{ question: "20 - 8 =", answer: "12" },
{ question: "10 - 9 =", answer: "1" },
{ question: "11 - 9 =", answer: "2" },
{ question: "12 - 9 =", answer: "3" },
{ question: "13 - 9 =", answer: "4" },
{ question: "14 - 9 =", answer: "5" },
{ question: "15 - 9 =", answer: "6" },
{ question: "16 - 9 =", answer: "7" },
{ question: "17 - 9 =", answer: "8" },
{ question: "18 - 9 =", answer: "9" },
{ question: "19 - 9 =", answer: "10" },
{ question: "20 - 9 =", answer: "11" },
{ question: "11 - 10 =", answer: "1" },
{ question: "12 - 10 =", answer: "2" },
{ question: "13 - 10 =", answer: "3" },
{ question: "14 - 10 =", answer: "4" },
{ question: "15 - 10 =", answer: "5" },
{ question: "16 - 10 =", answer: "6" },
{ question: "17 - 10 =", answer: "7" },
{ question: "18 - 10 =", answer: "8" },
{ question: "19 - 10 =", answer: "9" },
{ question: "20 - 10 =", answer: "10" },
{ question: "12 - 11 =", answer: "1" },
{ question: "13 - 11 =", answer: "2" },
{ question: "14 - 11 =", answer: "3" },
{ question: "15 - 11 =", answer: "4" },
{ question: "16 - 11 =", answer: "5" },
{ question: "17 - 11 =", answer: "6" },
{ question: "18 - 11 =", answer: "7" },
{ question: "19 - 11 =", answer: "8" },
{ question: "20 - 11 =", answer: "9" },
{ question: "13 - 12 =", answer: "1" },
{ question: "14 - 12 =", answer: "2" },
{ question: "15 - 12 =", answer: "3" },
{ question: "16 - 12 =", answer: "4" },
{ question: "17 - 12 =", answer: "5" },
{ question: "18 - 12 =", answer: "6" },
{ question: "19 - 12 =", answer: "7" },
{ question: "20 - 12 =", answer: "8" },
{ question: "14 - 13 =", answer: "1" },
{ question: "15 - 13 =", answer: "2" },
{ question: "16 - 13 =", answer: "3" },
{ question: "17 - 13 =", answer: "4" },
{ question: "18 - 13 =", answer: "5" },
{ question: "19 - 13 =", answer: "6" },
{ question: "20 - 13 =", answer: "7" },
{ question: "15 - 14 =", answer: "1" },
{ question: "16 - 14 =", answer: "2" },
{ question: "17 - 14 =", answer: "3" },
{ question: "18 - 14 =", answer: "4" },
{ question: "19 - 14 =", answer: "5" },
{ question: "20 - 14 =", answer: "6" },
{ question: "16 - 15 =", answer: "1" },
{ question: "17 - 15 =", answer: "2" },
{ question: "18 - 15 =", answer: "3" },
{ question: "19 - 15 =", answer: "4" },
{ question: "20 - 15 =", answer: "5" },
{ question: "17 - 16 =", answer: "1" },
{ question: "18 - 16 =", answer: "2" },
{ question: "19 - 16 =", answer: "3" },
{ question: "20 - 16 =", answer: "4" },
{ question: "18 - 17 =", answer: "1" },
{ question: "19 - 17 =", answer: "2" },
{ question: "20 - 17 =", answer: "3" },
{ question: "19 - 18 =", answer: "1" },
{ question: "20 - 18 =", answer: "2" },
{ question: "20 - 19 =", answer: "1" },

 // Add more flashcards with different addition problems
];

let shuffledFlashcards = [];
let currentFlashcardIndex = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function displayFlashcard(index) {
  const flashcardContainer = document.getElementById("flashcard-container");
  flashcardContainer.innerHTML = `
    <div class="flashcard" onclick="checkAnswer()">${shuffledFlashcards[index].question}</div>
  `;
}

function nextFlashcard() {
  currentFlashcardIndex++;
  if (currentFlashcardIndex >= shuffledFlashcards.length) {
    currentFlashcardIndex = 0; // Loop back to the first flashcard
    shuffledFlashcards = shuffle(flashcards); // Reshuffle the flashcards
  }
  displayFlashcard(currentFlashcardIndex);
}

function checkAnswer() {
  const answerInput = document.getElementById("answer-input");
  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = shuffledFlashcards[currentFlashcardIndex].answer.toLowerCase();
  const flashcard = document.querySelector(".flashcard");

  if (userAnswer === correctAnswer) {
    const question = shuffledFlashcards[currentFlashcardIndex].question;
    flashcard.innerHTML = `${question} ${correctAnswer}`; // Display the whole equation with the answer filled in
    flashcard.style.color = "green"; // Change color to green for correct answer
  } else {
    flashcard.style.color = "red"; // Change color to red for incorrect answer
  }

  answerInput.value = ""; // Clear the answer input field
  answerInput.focus(); // Move focus back to the answer input field
}

// Shuffle the flashcards initially
shuffledFlashcards = shuffle(flashcards);
// Display the first flashcard initially
displayFlashcard(currentFlashcardIndex);
