function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('captcha').textContent = captcha;
}

function validateCaptcha() {
    const userInput = document.getElementById('captchaInput').value;
    const captcha = document.getElementById('captcha').textContent;
    if (userInput === captcha) {
        document.getElementById('captchaResult').textContent = 'CAPTCHA verified!';
        document.getElementById('captchaResult').style.color = 'green';
    } else {
        document.getElementById('captchaResult').textContent = 'CAPTCHA incorrect, please try again.';
        document.getElementById('captchaResult').style.color = 'red';
    }
}

// Generate an initial CAPTCHA when the page loads
window.onload = generateCaptcha;