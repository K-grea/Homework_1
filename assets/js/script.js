const factButton = document.getElementById("fact-button");
const factText = document.getElementById("fact-text");

factButton.addEventListener("click", function () {
    factText.textContent = "Dogs have incredible sense of smell!";
});