// quizData.js

// Sample quiz data structure (answers not included in the quiz)
const quizData = {
    MTH101: [
        {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            // Correct answer will be stored privately (for later comparison)
            correctAnswer: "4", 
        },
        {
            question: "What is 5 * 3?",
            options: ["15", "10", "20", "30"],
            correctAnswer: "15",
        },
        // More questions...
    ],
    PHY101: [
        {
            question: "What is the formula for velocity?",
            options: ["v = d/t", "v = at", "v = m/s", "v = p/t"],
            correctAnswer: "v = d/t",
        },
        // More questions...
    ],
    // More courses and their questions here
};

// Function to get quiz data based on course code
function getQuizData(courseCode) {
    if (quizData[courseCode]) {
        return quizData[courseCode];
    } else {
        console.error(`Quiz data for ${courseCode} not found!`);
        return [];
    }
}

// Function to shuffle quiz data for a randomized experience
function shuffleQuizData(quiz) {
    // Shuffle questions
    quiz.sort(() => Math.random() - 0.5);

    quiz.forEach(q => {
        // Shuffle options for each question
        q.options.sort(() => Math.random() - 0.5);
    });

    return quiz;
}

// Example usage
// getQuizData('MTH101');
// shuffleQuizData(quizData['MTH101']);
