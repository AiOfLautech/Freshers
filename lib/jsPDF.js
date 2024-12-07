// Generate PDF using jsPDF
function generatePDF(quizResults) {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(18);
    doc.text('Quiz Results', 20, 20);

    // Participant's score
    doc.setFontSize(12);
    doc.text(`Name: ${quizResults.name}`, 20, 40);
    doc.text(`Score: ${quizResults.score}`, 20, 50);
    doc.text(`Percentage: ${quizResults.percentage}%`, 20, 60);

    // Add additional information (e.g., quiz answers)
    doc.text(`Answers: ${JSON.stringify(quizResults.answers)}`, 20, 70);

    // Save PDF
    doc.save('quiz_results.pdf');
}

// Sample usage:
const quizResults = {
    name: 'John Doe',
    score: 85,
    percentage: 85,
    answers: { question1: 'A', question2: 'C', question3: 'B' }
};
generatePDF(quizResults);
