let $ = document;

let title = $.querySelector("title");
let keyCodeElem = $.getElementById("keyCode");
let locationKey = $.getElementById("location");
let keyElem = $.getElementById("key");
let whichElem = $.getElementById("which");
let codeElem = $.getElementById("code");


document.body.addEventListener("keydown", function (event) {
    event.preventDefault();
    
    starter.style.display = "none";
    heading.style.display = "flex";
    ascii.style.display = "flex";
    infos.style.display = "flex";
  
    let eventKeyCode = event.keyCode;
    let eventLocation = event.location;
    let eventKey = event.key;
    let eventWhich = event.which;
    let eventCode = event.code;
  
    keyCodeElem.innerHTML = eventKeyCode;
    locationKey.innerHTML = eventLocation;
    keyElem.innerHTML = eventKey;
    whichElem.innerHTML = eventWhich;
    codeElem.innerHTML = eventCode;
  
});
  