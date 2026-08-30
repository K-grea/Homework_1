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