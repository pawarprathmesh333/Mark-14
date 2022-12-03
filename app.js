const initialPrice = document.querySelector("#inital-price");
const quantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const checkButton = document.querySelector("#checkmargin");
const output = document.querySelector("#output-box");


function checkMargin(initialPrice, quantity, currentPrice){
    if(initialPrice>currentPrice){
        var loss = (initialPrice-currentPrice)*quantity;
        var lossPercentage = (loss/initialPrice)*100;
        output.style.color = 'red'
        showOutput(`Hey, the loss is ${loss} and loss percentage is ${lossPercentage}%📉`);
    }
    else if(initialPrice<currentPrice){
        var profit = (currentPrice-initialPrice)*quantity;
        var profitPercentage = (profit/initialPrice)*100;
        output.style.color = 'green';
        showOutput(`Hey, the profit is ${profit} and profit percentage is ${profitPercentage}%📈`);
    }
    else{
        showOutput(`No pain no gain and no gain no pain :)`);
    }
}

function showOutput(message){
    output.innerText = message;
}

function clickhandler(){
    if(initialPrice.value>0&&quantity.value>0&&currentPrice.value){
        checkMargin(initialPrice.value, quantity.value, currentPrice.value);
    }
    else{
        showOutput(`Please enter all correct inputs`);
    }
}
checkButton.addEventListener("click",clickhandler);