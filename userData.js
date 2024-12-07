// userData.js

// Sample structure for user data
const users = {
    // Username as the key
    'alice123': {
        firstName: 'Alice',
        surname: 'Smith',
        email: 'alice@example.com',
        department: 'MTH',
        password: 'password123', // In a real application, store this securely (hashed)
        progress: {
            MTH101: { score: 85, attempts: 2 },
            PHY101: { score: 90, attempts: 1 },
        },
        leaderboard: [
            { course: 'MTH101', score: 85 },
            { course: 'PHY101', score: 90 },
        ],
    },
    // Add more users...
};

// Function to add a new user
function addUser(username, firstName, surname, email, department, password) {
    if (users[username]) {
        console.error(`User with username ${username} already exists!`);
        return;
    }

    users[username] = {
        firstName,
        surname,
        email,
        department,
        password, // Again, in real-world applications, never store passwords in plain text
        progress: {},
        leaderboard: [],
    };

    console.log(`User ${username} has been added successfully!`);
}

// Function to authenticate user
function authenticateUser(username, password) {
    const user = users[username];

    if (!user) {
        console.error('Username not found!');
        return false;
    }

    if (user.password === password) {
        return true;
    } else {
        console.error('Incorrect password!');
        return false;
    }
}

// Function to update user progress
function updateUserProgress(username, courseCode, score) {
    const user = users[username];

    if (user) {
        if (!user.progress[courseCode]) {
            user.progress[courseCode] = { score, attempts: 1 };
        } else {
            user.progress[courseCode].score = score;
            user.progress[courseCode].attempts += 1;
        }

        console.log(`Progress updated for ${username} in ${courseCode} with score ${score}`);
    } else {
        console.error('User not found!');
    }
}

// Function to get leaderboard for a specific course
function getLeaderboard(courseCode) {
    const leaderboard = [];

    Object.keys(users).forEach(username => {
        const user = users[username];
        if (user.progress[courseCode]) {
            leaderboard.push({
                username,
                score: user.progress[courseCode].score,
                department: user.department,
            });
        }
    });

    // Sort leaderboard by score in descending order
    leaderboard.sort((a, b) => b.score - a.score);

    return leaderboard;
}

// Example usage
// addUser('bob456', 'Bob', 'Jones', 'bob@example.com', 'PHY', 'securePassword123');
// authenticateUser('alice123', 'password123');
// updateUserProgress('alice123', 'MTH101', 90);
// const leaderboard = getLeaderboard('MTH101');
// console.log(leaderboard);
