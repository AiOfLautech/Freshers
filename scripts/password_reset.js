function resetPassword(resetCode, newPassword, confirmPassword) {
    const validResetCode = "123456"; // Replace with dynamically generated and emailed code.

    if (resetCode !== validResetCode) {
        alert("Invalid reset code. Please try again.");
        return;
    }

    if (newPassword !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Backend API call to update the password
    console.log("Password successfully reset!");
    alert("Password reset successful. Please log in with your new password.");
    window.location.href = "login.html";
}

// Example usage:
document.getElementById("reset-password-btn").addEventListener("click", () => {
    const resetCode = document.getElementById("reset-code").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    resetPassword(resetCode, newPassword, confirmPassword);
});
