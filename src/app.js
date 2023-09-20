const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

function toggleButton() {
    navList.classList.toggle('show');
}

hamburgerButton.addEventListener('click', toggleButton);

const form = document.querySelector('#contactForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const captchaResponse = grecaptcha.getResponse();

    if (captchaResponse.length == 0) {
        e.preventDefault();
        alert("Please check the recaptcha");
    }

    var serviceId = "service_hywezml";
    var templateId = "template_ccr6gic";

    var params = {
        senderName: document.querySelector('#name').value,
        senderEmail: document.querySelector('#email').value,
        comment: document.querySelector('#comment').value,
        'g-recaptcha-response': captchaResponse
    };

    emailjs.send(serviceId, templateId, params)
        .then(res => {
            alert('Your message has been sent!!');
        })
        .catch((error) => {
            console.log(error);
        });
});