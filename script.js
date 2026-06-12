// Public Key se initialize 
emailjs.init("ibZcUIQ5BKx0-J-Wt");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    // extracting values from Form
    const templateParams = {
        name: form.elements["name"].value,
        email: form.elements["email"].value,
        message: form.elements["message"].value,
        title: "New Contact Form Submission" // Yeh tumhare template ke {{title}} mein jayega
    };

    // sendForm ki jagah send use kar rahe hain taaki data perfect format me jaye
    emailjs.send(
        "service_m440qej", // Service ID
        "template_zj7wfmw", // Template ID
        templateParams
    )
    .then(() => {
        alert("Message sent successfully! 🚀");
        form.reset(); // Form khali karne ke liye
    })
    .catch((error) => {
        alert("Failed to send message ❌");
        console.error("EmailJS Error:", error);
    });
});