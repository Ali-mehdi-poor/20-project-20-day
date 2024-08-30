let $ = document;
const historyListContainer = $.querySelector(".history-list")
const result = $.getElementById("result");
const lengthElem = $.getElementById("length");
const uppercaseElem = $.getElementById("uppercase");
const lowercaseElem = $.getElementById("lowercase");
const numbersElem = $.getElementById("numbers");
const symbolsElem = $.getElementById("symbols");
const generateBtn = $.getElementById("generate");
const mainClipboardBtn = $.getElementById("clipboard");
const lengthNumberElem = $.getElementById("length-number")
const allPasswordsData = [];

lengthElem.addEventListener("input" , (e) => {
    lengthNumberElem.innerHTML = lengthElem.value;
})

generateBtn.addEventListener("click" , (e) => {
    const length = +lengthElem.value
    const hasLower = lowercaseElem.checked
    const hasUpper = uppercaseElem.checked
    const hasNumber = numbersElem.checked
    const hasSymbol = symbolsElem.checked

    let newPassword = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
    allPasswordsData.push(newPassword)
    renderHistory(allPasswordsData)
    result.innerText = newPassword
})

mainClipboardBtn.addEventListener("click" , (e) => {
     let password = result.innerText;
     if (!password) {
        return;
      }
     window.navigator.clipboard.writeText(password);
     alert("password copied!");
})

function generateHistoryItem (arr) {
    const mappedArr = arr.map(function (item) {
        const itemElem = document.createElement("li");
        itemElem.classList = "history-item"

        const passwordElem = document.createElement("p");
        passwordElem.innerHTML = item.toString();
       

        const buttonElem = document.createElement("button");
        buttonElem.classList = "btn h-clipboard";
        buttonElem.addEventListener("click", e => {

            window.navigator.clipboard.writeText(e.target.parentElement.parentElement.firstChild.innerHTML)
            alert("password copied!");
        })

        const iconElem = document.createElement("i");
        iconElem.classList = "fa fa-clipboard";

        itemElem.append(passwordElem); 
        buttonElem.append(iconElem);
        itemElem.append(buttonElem);

        return itemElem;
    })

    return mappedArr
}

function renderHistory(arr) {
    let items = generateHistoryItem(arr)
    historyListContainer.innerHTML = ""
    items.forEach(item => {
        historyListContainer.append(item)
    })
}

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])
    
    if(typesCount === 0) {
        return ''
    }

    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }

    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword
}

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}
