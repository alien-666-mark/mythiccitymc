document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send a message to the Discord bot via a webhook
    fetch('https://discord.com/api/webhooks/1272195615966629968/pCtGmqHT5e8WFUW_b5z5mBAa09CaOzqYPU7VFElP-1YTjQkn6LiDWOr26O4R-MJp-4PP', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: `New contact form submission:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
        }),
    })
    .then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
        } else {
            alert('Error sending message. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error sending message. Please try again.');
    });
});
