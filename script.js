emailjs.init("ibZcUIQ5BKx0-J-Wt");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_oww339d",
        "template_zj7wfmw",
        this
    )
    .then(() => {
        alert("Message sent successfully!");
        form.reset();
    })
    .catch((error) => {
        alert("Failed to send message.");
        console.log(error);
    });
});