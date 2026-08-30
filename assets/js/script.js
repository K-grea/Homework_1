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