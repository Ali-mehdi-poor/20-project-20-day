const decBtn = document.querySelector(".dec");
const resetBtn = document.querySelector(".reset");
const incBtn = document.querySelector(".inc");

const numberElem = document.querySelector("#num");

decBtn.addEventListener("click", (e) => {
    let currentValue = +numberElem.innerHTML
    currentValue = currentValue - 1
    numberElem.innerHTML = currentValue
});
resetBtn.addEventListener("click", (e) => {
    let currentValue = +numberElem.innerHTML
    currentValue = currentValue - currentValue
    numberElem.innerHTML = currentValue
});
incBtn.addEventListener("click", (e) => {
    let currentValue = +numberElem.innerHTML
    currentValue = currentValue + 1
    numberElem.innerHTML = currentValue
});
