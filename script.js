const values = document.querySelectorAll(".rates-values li");
const submitButton = document.querySelector("button");

submitButton.disabled = true;
values.forEach(e => {
    e.addEventListener("click", function () {
        submitButton.disabled = false;
        values.forEach(ele => ele.classList.remove("selected"));
        this.classList.add("selected");
    });
});

submitButton.addEventListener("click", function () {
    const selected = document.querySelector("li.selected");

    if (!selected) return;

    let rateValue = selected.textContent;

    document.querySelector(".thank-you-card p:first-of-type span").innerHTML = rateValue;

    document.querySelector(".thank-you-card").classList.add("show");
});