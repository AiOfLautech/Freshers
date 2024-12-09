import jsPDF from "jspdf"; // Ensure you include the jsPDF library in your project.

function generatePDF(results) {
    const doc = new jsPDF();
    
    // Add title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Quiz Results", 105, 20, { align: "center" });

    // Add course information
    doc.setFontSize(12);
    doc.text(`Course Code: ${results.courseCode}`, 10, 40);
    doc.text(`Score: ${results.score}%`, 10, 50);

    // Add questions and answers
    let y = 60;
    results.questions.forEach((question, index) => {
        doc.text(`${index + 1}. ${question.text}`, 10, y);
        y += 10;
        doc.text(`Your Answer: ${question.userAnswer}`, 10, y);
        y += 10;
        doc.text(`Correct Answer: ${question.correctAnswer}`, 10, y);
        y += 20;

        // Move to next page if necessary
        if (y > 270) {
            doc.addPage();
            y = 20;
        }
    });

    // Save the PDF
    doc.save(`${results.courseCode}_quiz_results.pdf`);
}

// Example usage:
const results = {
    courseCode: "MTH101",
    score: 85,
    questions: [
        {
            text: "What is 2 + 2?",
            userAnswer: "4",
            correctAnswer: "4",
        },
        {
            text: "What is the derivative of sin(x)?",
            userAnswer: "cos(x)",
            correctAnswer: "cos(x)",
        },
    ],
};
generatePDF(results);
