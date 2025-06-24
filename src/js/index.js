const buttons = document.querySelectorAll("li button");
const form = document.querySelector("#form");
const card = document.querySelector(".card");
const cardThankYou = document.querySelector(".thank-you");
const userRating = document.querySelector("#user-rating");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const hasOptionSelected = document.querySelector(".selected");
    if (!hasOptionSelected) return;
    const selectedOption = hasOptionSelected.textContent;
    
    card.classList.remove("active");
    cardThankYou.classList.add("active");
    userRating.innerText = `You selected ${selectedOption} out of 5`
   

});

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const btnSelected = document.querySelector(".selected");
        if (btnSelected) removeSelect();
        button.classList.add("selected");
    });
});
function removeSelect() {
    buttons.forEach((button) => {
        button.classList.remove("selected");
    });
}

