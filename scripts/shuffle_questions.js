function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function shuffleQuiz(quizData) {
    quizData.questions = shuffleArray(quizData.questions);
    quizData.questions.forEach(question => {
        question.options = shuffleArray(question.options);
    });
    return quizData;
}

// Example usage:
const quizData = {
    courseCode: "BIO101",
    questions: [
        {
            text: "What is the basic unit of life?",
            options: ["Cell", "Tissue", "Organ", "Organism"],
        },
        {
            text: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi body"],
        },
    ],
};

console.log("Original Quiz Data:", quizData);
console.log("Shuffled Quiz Data:", shuffleQuiz(quizData));
