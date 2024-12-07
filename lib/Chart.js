// Generate Pie Chart using Chart.js
function generateChart(quizResults) {
    const ctx = document.getElementById('quizResultsChart').getContext('2d');
    const data = {
        labels: ['Correct Answers', 'Incorrect Answers'],
        datasets: [{
            data: [quizResults.correct, quizResults.incorrect],
            backgroundColor: ['#4caf50', '#f44336']
        }]
    };

    const config = {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.raw + ' Answers';
                        }
                    }
                }
            }
        }
    };

    new Chart(ctx, config);
}

// Sample usage:
const quizResults = {
    correct: 8,
    incorrect: 2
};
generateChart(quizResults);
