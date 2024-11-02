const usedEmails = new Set();

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;

    if (usedEmails.has(email)) {
        return openDBox("Duplicate Email!!!", "This email has already been used to submit feedback.");
    }

    usedEmails.add(email);
    openDBox("Feedback Submitted!", "Thank you for your feedback!");
});

function openDBox(title, message) {
    document.getElementById('dTitle').innerText = title;
    document.getElementById('dMessage').innerText = message;
    document.getElementById('dBox').style.display = "flex";
}

function closeDBox() {
    document.getElementById('dBox').style.display = "none";
}