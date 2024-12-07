// Sign-Up Logic
document.getElementById('sign-up-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const department = document.getElementById('department').value;

    // Basic validation for empty fields
    if (!firstName || !surname || !email || !username || !password || !confirmPassword || !department) {
        alert("All fields are required!");
        return;
    }

    // Password confirmation check
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Here, you would send the data to the server to register the user (this example uses localStorage)
    const user = {
        firstName,
        surname,
        email,
        username,
        password, // Store hashed password in real-world scenarios
        department
    };

    localStorage.setItem('user', JSON.stringify(user));  // Save user data to localStorage
    alert("Sign Up Successful! Please log in.");
    window.location.href = 'login.html';  // Redirect to login page
});

// Login Logic
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve user data from localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user || user.username !== username || user.password !== password) {
        alert("Incorrect username or password!");
        return;
    }

    alert("Login successful!");
    window.location.href = 'main.html';  // Redirect to main page upon successful login
});

// Forgot Password Logic
document.getElementById('forgot-password-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    // In real-world applications, verify email from the backend
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email) {
        alert("Email verified. A reset code has been sent.");
        // You'd send the reset code to the user's email address
        window.location.href = 'reset-password.html';  // Redirect to reset password page
    } else {
        alert("Email not found!");
    }
});

// Reset Password Logic
document.getElementById('reset-password-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const resetCode = document.getElementById('reset-code').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmNewPassword = document.getElementById('confirm-new-password').value;

    // Basic validation
    if (newPassword !== confirmNewPassword) {
        alert("Passwords do not match!");
        return;
    }

    // In real-world applications, verify reset code
    // After verification, update the user's password in the database or localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    user.password = newPassword;

    localStorage.setItem('user', JSON.stringify(user));  // Save the new password
    alert("Password reset successful. Please log in again.");
    window.location.href = 'login.html';  // Redirect to login page
});

// Course Selection Logic
const courseButtons = document.querySelectorAll('.courses button');
courseButtons.forEach(button => {
    button.addEventListener('click', function() {
        const courseCode = button.textContent;
        window.location.href = `course.html?code=${courseCode}`;  // Redirect to course page
    });
});

// Leaderboard Logic
function loadLeaderboard(courseCode) {
    // Here, you'd retrieve the leaderboard data for the selected course
    // Example: For simplicity, we'll mock the leaderboard data
    const leaderboard = [
        { username: 'Alice', score: 95, department: 'MTH' },
        { username: 'Bob', score: 89, department: 'PHY' },
        { username: 'Charlie', score: 87, department: 'BIO' },
    ];

    // Display the leaderboard in ascending order
    const leaderboardContainer = document.getElementById('leaderboard-container');
    leaderboardContainer.innerHTML = '';  // Clear existing leaderboard

    leaderboard.forEach(entry => {
        const row = document.createElement('div');
        row.classList.add('leaderboard-entry');
        row.innerHTML = `
            <span>${entry.username}</span>
            <span>${entry.score}</span>
            <span>${entry.department}</span>
        `;
        leaderboardContainer.appendChild(row);
    });
}

// Call loadLeaderboard() on the leaderboard page
if (window.location.pathname.includes('leaderboard.html')) {
    const courseCode = new URLSearchParams(window.location.search).get('code');
    loadLeaderboard(courseCode);
    }
