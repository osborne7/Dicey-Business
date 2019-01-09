class Dice {
    constructor() {
        let eachDiv = this.div = document.createElement('div');
        this.div.classList.add('dice');
        let text = document.createTextNode(roll());
        eachDiv.appendChild(text);
        document.body.appendChild(eachDiv);
        this.value = roll;
    }
}

let button = document.getElementById('btn');
button.addEventListener('click', insertDice);

function insertDice() {
    let newDice = new Dice();
}

function roll() {
    return Math.floor(Math.random() * (6-1)) + 1;
}

let rollButton = document.getElementById('roll-btn');
rollButton.addEventListener('click', rollAll);

function rollAll() {
    let currentDice = document.getElementsByClassName('dice');
        
    for (i = 0; i<currentDice.length; i++) {
        currentDice[i].innerHTML = roll();
        }
}
