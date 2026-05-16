const BASE_URL="https://open.er-api.com/v6/latest";
const btn=document.querySelector("form button");
const dropdowns=document.querySelectorAll(".dropdown select");
const msg=document.querySelector(".msg");
for (let select of dropdowns) {
    // 2. Loop through your country list
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name==="from" &&currCode==="USD") {
        newOption.selected=true;
            
        }else if (select.name==="to" &&currCode==="INR") {
        newOption.selected=true;
            
        }
        // 3. Now 'select' refers to the specific dropdown from the first loop
        select.append(newOption);
    }

select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
    
});
}
const updateFlag=(element)=>{
    let currCode=element.value;
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/shiny/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src=newSrc;
}

btn.addEventListener("click",async(evt)=>{
evt.preventDefault();
let amount=document.querySelector(".amount input");
let amtVal=amount.value;
if (amtVal===""||amtVal<1) {
amtVal=1;
amount.value="1"
    
}
console.log(amtVal)
    

// Target the select elements directly by their name attributes from your HTML
    const fromCurr = document.querySelector("select[name='from']").value;
    const toCurr = document.querySelector("select[name='to']").value;

    msg.innerText = "Getting rate...";

    try {
        // Fetch data from open.er-api endpoint using the updated base currency format
        let response = await fetch(`${BASE_URL}/${fromCurr}`);
        let data = await response.json();
        let rate = data.rates[toCurr];
        
        let finalAmount = (amtVal * rate).toFixed(2);
        msg.innerText = `${amtVal} ${fromCurr} = ${finalAmount} ${toCurr}`;
    } catch (error) {
        msg.innerText = "Something went wrong.";
        console.error(error);
    }
});

