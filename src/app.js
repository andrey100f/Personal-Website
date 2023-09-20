const navList = document.getElementById('nav-list');

function toggleButton() {
    navList.classList.toggle('show');
}

const form = document.querySelector('#contactForm');

form.addEventListener('submit', (e) => {
    const captchaResponse = grecaptcha.getResponse();
    console.log(captchaResponse);

    if (!captchaResponse.length > 0) {
        throw new Error("Captcha not complete!!");
    }

    var serviceId = "service_hywezml";
    var templateId = "template_ccr6gic";

    var params = {
        senderName: document.querySelector('#name').value,
        senderEmail: document.querySelector('#email').value,
        comment: document.querySelector('#comment').value
    };

    emailjs.send(serviceId, templateId, params)
        .then(res => {
            alert('Your message has been sent!!');
        })
        .catch((error) => {
            console.log(error);
        });
});