const button = document.getElementById("subButton")
const radioButtons = document.getElementsByName("conversionType");

let input;
let conversionType;

const result = document.getElementById("result");

button.onclick = function(){
    result.textContent = " haha"
    input = document.getElementById("temperatureInput").value;
    if(isNaN(Number(input)) || !isRadioSelected()){
        result.textContent = "Enter valid data(input must be a number) and select a conversion type!";
        result.classList.add("error")
    }else{
        result.textContent = `Result: ${convert(conversionType, Number(input))}`;
        result.classList.remove("error")
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

function convert(c,x){
    if(c == "cf"){
        return convertCelToFar(x);
    }else{
        return convertFarToCel(x);
    }
}

function convertFarToCel(x){    
    return (x - 32)*5/9;
}

function convertCelToFar(x){    
     return x * 9/5 + 32;
}