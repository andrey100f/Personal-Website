const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

function toggleButton() {
    navList.classList.toggle('show');
}

hamburgerButton.addEventListener('click', toggleButton);

function sendMessage() {
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
}