const button = document.getElementById("subButton")
const radioButtons = document.getElementsByName("conversionType");

let input;
let conversionType;
let message; 

const result = document.getElementById("result");

button.onclick = function(){
    result.textContent = " haha"
    input = document.getElementById("temperatureInput").value;
    if(isNaN(Number(input)) || !isRadioSelected()){
        result.textContent = "Enter valid data(input must be a number) and select a conversion type!";
        result.classList.add("error");
    }else{
        convertAndCreateMessage(conversionType,Number(input));
        result.textContent = message;
    }
}

function isRadioSelected(){
    for(let button of radioButtons){
        if(button.checked){
            conversionType = button.value;
            return true;
        }
    }
    return false;
}



function convertAndCreateMessage(c,x){
    if(c == "cf"){
        message = `${x}°C is ${convertCelToFar(x).toFixed(2)}°F`
    }else{
        message = `${x}°F is ${convertFarToCel(x).toFixed(2)}°C`
    }
}

function convertFarToCel(x){    
    return (x - 32)*5/9;
}

function convertCelToFar(x){    
     return x * 9/5 + 32;
}