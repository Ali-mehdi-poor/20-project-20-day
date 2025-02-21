let checkboxWrapper = document.querySelector(".checkbox-wrapper");
let eyes = document.querySelector(".eyes");
let mouth = document.querySelector(".mouth__wrapper");
let state = document.querySelector(".state");
let checkboxBtn = document.getElementById("checkbox-btn")

let chekcedState = false	

checkboxWrapper.addEventListener("click", function (event) {
  checkboxWrapper.classList.toggle("checkbox-wrapper--active")
  
  chekcedState = !chekcedState
  
  chekcedState ? checkboxBtn.setAttribute("checked", true) : checkboxBtn.setAttribute("checked", false);
  state.classList.toggle("state--active");
  eyes.classList.toggle("eyes--active");
  mouth.classList.toggle("mouth__wrapper--active");
});
