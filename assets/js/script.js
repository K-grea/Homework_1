const factButton = document.getElementById("fact-button");
const factText = document.getElementById("fact-text");

factButton.addEventListener("click", function () {
    factText.textContent = "Dogs have incredible sense of smell!";
});
const breedInput = document.getElementById("breed-input");
const breedDisplay = document.getElementById("breed-display");

breedInput.addEventListener("input", function () {
    breedDisplay.textContent = breedInput.value;
    breedDisplay.style.fontSize = "24px";
});
const newBreedInput = document.getElementById("new-breed");
const addBreedButton = document.getElementById("add-breed");
const breedList = document.getElementById("breed-list");

addBreedButton.addEventListener("click", function () {
    const newBreed = document.createElement("li");
    newBreed.textContent = newBreedInput.value;
    breedList.appendChild(newBreed);
    newBreedInput.value = "";
});

// Contact form validation
const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const messageError = document.getElementById("messageError");

const formSuccess = document.getElementById("formSuccess");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    formSuccess.textContent = "";

    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Please enter your email.";
        isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Phone validation
    if (phoneInput.value.trim() === "") {
        phoneError.textContent = "Please enter your phone number.";
        isValid = false;
    } else {
        phoneError.textContent = "";
    }

    // Message validation
    if (messageInput.value.trim() === "") {
        messageError.textContent = "Please enter your message.";
        isValid = false;
    } else {
        messageError.textContent = "";
    }

    if (isValid) {
        formSuccess.textContent = "Thank you! Your message has been submitted.";
        form.reset();
    }
});

// Clear error messages when the user starts typing 
nameInput.addEventListener("input", function () {
    nameError.textContent = "";
});
emailInput.addEventListener("input", function () {
    emailError.textContent = "";
});
phoneInput.addEventListener("input", function () {
    phoneError.textContent = "";
});

messageInput.addEventListener("input", function () {
    messageError.textContent = "";
});


// Random Dog Fact from API
fetch(https://dogapi.dog/api/v2/facts?limit=1)
    .then(response => {
    if (response.ok) {
        throw new Error("Could not get dog fact.");
    }
    return response.json();
})

        .then(data => {
            const factResult = document.getElementById("factResult");
            factResult.textContent = data.data[0].attributes.body;
        })
        .catch(error => {
            const factResult = document.getElementById("factResult");
            factResult.textContent = "Whoops! we couldn't fetch a dog fact :(";
            console.error(error);
        });