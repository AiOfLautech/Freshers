function verifyEmail(email) {
    const validEmails = ["user1@example.com", "user2@example.com"]; // Replace with your backend call.

    if (validEmails.includes(email)) {
        alert("Email verified! Please check your inbox for the verification code.");
        enablePasswordReset(); // Function to enable the password reset field.
    } else {
        alert("Error: The email provided is not associated with any account.");
    }
}

function enablePasswordReset() {
    document.getElementById("reset-code-input").style.display = "block"; // Show reset code input field.
    document.getElementById("reset-password-btn").disabled = false; // Enable reset button.
}

// Example usage:
document.getElementById("verify-email-btn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    verifyEmail(email);
});
