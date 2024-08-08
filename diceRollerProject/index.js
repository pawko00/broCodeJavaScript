function rollDices(){

    const numOfDices = document.getElementById("numOfDices").value;
    const resultDiv = document.getElementById("resultDiv");

    resultDiv.innerHTML = '';
    
    for(let i = 0; i < numOfDices;i++){
        let num = Math.floor(Math.random()*6)+1;
        let imgName = `dice-${num}.svg`;
        let img = document.createElement('img');
        img.src = imgName;
        resultDiv.appendChild(img);
    }

    

}