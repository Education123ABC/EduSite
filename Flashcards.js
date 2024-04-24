const flashcards = [
{ question: "1 + 1 =", answer: "2" },
{ question: "1 + 2 =", answer: "3" },
{ question: "1 + 3 =", answer: "4" },
{ question: "1 + 4 =", answer: "5" },
{ question: "1 + 5 =", answer: "6" },
{ question: "1 + 6 =", answer: "7" },
{ question: "1 + 7 =", answer: "8" },
{ question: "1 + 8 =", answer: "9" },
{ question: "1 + 9 =", answer: "10" },
{ question: "1 + 10 =", answer: "11" },
{ question: "1 + 11 =", answer: "12" },
{ question: "1 + 12 =", answer: "13" },
{ question: "1 + 13 =", answer: "14" },
{ question: "1 + 14 =", answer: "15" },
{ question: "1 + 15 =", answer: "16" },
{ question: "1 + 16 =", answer: "17" },
{ question: "1 + 17 =", answer: "18" },
{ question: "1 + 18 =", answer: "19" },
{ question: "1 + 19 =", answer: "20" },
{ question: "2 + 2 =", answer: "4" },
{ question: "2 + 3 =", answer: "5" },
{ question: "2 + 4 =", answer: "6" },
{ question: "2 + 5 =", answer: "7" },
{ question: "2 + 6 =", answer: "8" },
{ question: "2 + 7 =", answer: "9" },
{ question: "2 + 8 =", answer: "10" },
{ question: "2 + 9 =", answer: "11" },
{ question: "2 + 10 =", answer: "12" },
{ question: "2 + 11 =", answer: "13" },
{ question: "2 + 12 =", answer: "14" },
{ question: "2 + 13 =", answer: "15" },
{ question: "2 + 14 =", answer: "16" },
{ question: "2 + 15 =", answer: "17" },
{ question: "2 + 16 =", answer: "18" },
{ question: "2 + 17 =", answer: "19" },
{ question: "2 + 18 =", answer: "20" },
{ question: "3 + 3 =", answer: "6" },
{ question: "3 + 4 =", answer: "7" },
{ question: "3 + 5 =", answer: "8" },
{ question: "3 + 6 =", answer: "9" },
{ question: "3 + 7 =", answer: "10" },
{ question: "3 + 8 =", answer: "11" },
{ question: "3 + 9 =", answer: "12" },
{ question: "3 + 10 =", answer: "13" },
{ question: "3 + 11 =", answer: "14" },
{ question: "3 + 12 =", answer: "15" },
{ question: "3 + 13 =", answer: "16" },
{ question: "3 + 14 =", answer: "17" },
{ question: "3 + 15 =", answer: "18" },
{ question: "3 + 16 =", answer: "19" },
{ question: "3 + 17 =", answer: "20" },
{ question: "4 + 4 =", answer: "8" },
{ question: "4 + 5 =", answer: "9" },
{ question: "4 + 6 =", answer: "10" },
{ question: "4 + 7 =", answer: "11" },
{ question: "4 + 8 =", answer: "12" },
{ question: "4 + 9 =", answer: "13" },
{ question: "4 + 10 =", answer: "14" },
{ question: "4 + 11 =", answer: "15" },
{ question: "4 + 12 =", answer: "16" },
{ question: "4 + 13 =", answer: "17" },
{ question: "4 + 14 =", answer: "18" },
{ question: "4 + 15 =", answer: "19" },
{ question: "4 + 16 =", answer: "20" },
{ question: "5 + 5 =", answer: "10" },
{ question: "5 + 6 =", answer: "11" },
{ question: "5 + 7 =", answer: "12" },
{ question: "5 + 8 =", answer: "13" },
{ question: "5 + 9 =", answer: "14" },
{ question: "5 + 10 =", answer: "15" },
{ question: "5 + 11 =", answer: "16" },
{ question: "5 + 12 =", answer: "17" },
{ question: "5 + 13 =", answer: "18" },
{ question: "5 + 14 =", answer: "19" },
{ question: "5 + 15 =", answer: "20" },
{ question: "6 + 6 =", answer: "12" },
{ question: "6 + 7 =", answer: "13" },
{ question: "6 + 8 =", answer: "14" },
{ question: "6 + 9 =", answer: "15" },
{ question: "6 + 10 =", answer: "16" },
{ question: "6 + 11 =", answer: "17" },
{ question: "6 + 12 =", answer: "18" },
{ question: "6 + 13 =", answer: "19" },
{ question: "6 + 14 =", answer: "20" },
{ question: "7 + 7 =", answer: "14" },
{ question: "7 + 8 =", answer: "15" },
{ question: "7 + 9 =", answer: "16" },
{ question: "7 + 10 =", answer: "17" },
{ question: "7 + 11 =", answer: "18" },
{ question: "7 + 12 =", answer: "19" },
{ question: "7 + 13 =", answer: "20" },
{ question: "8 + 8 =", answer: "16" },
{ question: "8 + 9 =", answer: "17" },
{ question: "8 + 10 =", answer: "18" },
{ question: "8 + 11 =", answer: "19" },
{ question: "8 + 12 =", answer: "20" },
{ question: "9 + 9 =", answer: "18" },
{ question: "9 + 10 =", answer: "19" },
{ question: "9 + 11 =", answer: "20" },
{ question: "10 + 10 =", answer: "20" },
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
