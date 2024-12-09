
# Online Learning Platform

This project is a responsive and interactive online learning platform that allows users to sign up, log in, and take quizzes for various courses. It includes features such as quiz shuffling, PDF results generation, and leaderboards.

## Features
- User Authentication (Sign Up, Login, Forgot Password)
- Quiz System with Timer
- Randomized Questions and Options
- Real-time Score Calculation
- PDF Results Download
- Leaderboard for Top Scorers
- Embedded Tutorial Videos
- Fully Responsive Design

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Font**: Open Sans
- **Data Storage**: JSON files for course data
- **Libraries**: jsPDF for PDF generation

## File Structure
project/ │ ├── css/ │   ├── main.css │   ├── signup.css │   ├── quiz.css │   ├── leaderboard.css │ ├── js/ │   ├── main.js │   ├── signup.js │   ├── quiz.js │   ├── results.js │   ├── leaderboard.js │   ├── pdf_generator.js │   ├── email_verification.js │   ├── password_reset.js │   ├── shuffle_questions.js │ ├── data/ │   ├── courses.json │   ├── mth101.json │   ├── gst111.json │   ├── phy101.json │   ├── chm101.json │   ├── bio101.json │ ├── images/ │   ├── background.png │   ├── logo.png │   ├── icons/ │ ├── fonts/ │   ├── OpenSans-Regular.ttf │ ├── index.html ├── signup.html ├── login.html ├── quiz.html ├── results.html ├── leaderboard.html ├── forgot_password.html ├── tutorials.html ├── README.md
## How to Use
1. Clone the repository to your local machine.
2. Open `index.html` in a web browser to start the application.
3. Sign up for an account to access the courses.
4. Select a course, start a quiz, and enjoy the interactive features.

## Development Notes
- Ensure all required dependencies (e.g., jsPDF) are included in the project.
- Data for quizzes is stored in `data` folder in JSON format. You can add or modify courses as needed.
- Tutorial videos can be added by embedding YouTube links in `tutorials.html`.

## Future Enhancements
- Integration with a backend for user management and data storage.
- Additional gamification features (e.g., badges, achievements).
- Support for live sessions and interactive discussions.

## License
This project is licensed under the MIT License. See `LICENSE` for details.
