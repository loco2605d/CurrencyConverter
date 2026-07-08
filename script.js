const BASE_URL = "https://open.er-api.com/v6/latest";
const btn = document.querySelector("form button");
const dropdowns = document.querySelectorAll(".dropdown select");
const msg = document.querySelector(".msg");
const inputt = document.querySelector(".input"); // Looks for class="input"

// 1. Populate Dropdowns
for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = true;
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = true;
        }
        select.append(newOption);
    }

    // Update flag and rate when dropdown changes
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
        updateExchangeRate(); 
    });
}

// 2. Update Flag Image
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

// 3. Core Function to Fetch and Update Exchange Rate
const updateExchangeRate = async () => {
    let amtVal = inputt.value; // Uses the 'inputt' variable directly
    
    // If empty or negative/zero, default to 1
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        inputt.value = "1";
    }

    const fromCurr = document.querySelector("select[name='from']").value;
    const toCurr = document.querySelector("select[name='to']").value;

    msg.innerText = "Getting rate...";

    try {
        let response = await fetch(`${BASE_URL}/${fromCurr}`);
        let data = await response.json();
        let rate = data.rates[toCurr];
        
        let finalAmount = (amtVal * rate).toFixed(2);
        msg.innerText = `${amtVal} ${fromCurr} = ${finalAmount} ${toCurr}`;
    } catch (error) {
        msg.innerText = "Something went wrong.";
        console.error(error);
    }
};

// 4. Event Listeners
btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

// Updates live as you type!
inputt.addEventListener("input", () => {
    updateExchangeRate();
});

// Run once on page load to show initial conversion immediately
window.addEventListener("load", () => {
    updateExchangeRate();
});
