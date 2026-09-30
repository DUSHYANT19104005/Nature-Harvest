const form = document.getElementById("enquiryForm");
const message = document.getElementById("form-message");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const product = document.getElementById("product").value;
        const userMessage = document.getElementById("message").value.trim();

        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            product === "" ||
            userMessage === ""
        ) {
            message.textContent = "Please fill in all required fields.";
            message.style.color = "red";
            return;
        }

        message.textContent =
            "Thank you! Your enquiry has been submitted successfully.";

        message.style.color = "green";

        form.reset();

    });

}

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});