var options1 = ["Rock", "Paper", "Scissors"];// initial array for choices
 var change = false;
var game = function () {
    var loadOptionButtons = function (options) { // create the buttons for the game
        for (let index = 0; index < options.length; index++) {
            var createButton = document.createElement('button');  
            createButton.className = "myChoise";  
            createButton.innerHTML = options[index]; 
            createButton.id = options[index];  
            document.getElementById('RPS').appendChild(createButton);  
        }
    }

    var prepareEvents = function (options) {
        if (options[0] == "Rock") {
            for (let index = 0; index < options.length; index++) {
                document.getElementById(options[index]).addEventListener('click', function () {
                    switch (index) {
                        case 0: document.getElementById('PchoiseId').innerHTML = options[index] + "<i class='far fa-hand-rock'></i>";
                            break;
                        case 1: document.getElementById('PchoiseId').innerHTML = options[index] + "<i class='far fa-hand-paper'></i>";
                            break;
                        case 2: document.getElementById('PchoiseId').innerHTML = options[index] + "<i class='far fa-hand-scissors'></i>";
                            break;
                    }
                    var buttons = document.getElementsByClassName('myChoise');
                    for (var i = 0; i < buttons.length; i++) {
                        buttons[i].disabled = true;
                    }
                    var random = Math.floor(Math.random() * 3);
                    switch (random) {
                        case 0: document.getElementById('Cchoise').innerHTML = options[random] + "<i class='far fa-hand-rock'></i>";
                            break;
                        case 1: document.getElementById('Cchoise').innerHTML = options[random] + "<i class='far fa-hand-paper'></i>";
                            break;
                        case 2: document.getElementById('Cchoise').innerHTML = options[random] + "<i class='far fa-hand-scissors'></i>";
                            break;
                    }
                    compare(options);
                });
            }
        }  

        document.getElementById('play-again').addEventListener('click', function () {
            var buttons = document.getElementsByClassName('myChoise');
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].disabled = false;
            }
            if(options[0] == "Rock"){ // inisial ROCK  hand for both
            document.getElementById('PchoiseId').innerHTML = "<p>PLAYER</p><i class='far fa-hand-rock inti-rock' ></i>";
            document.getElementById('Cchoise').innerHTML = "<p>COMOUTER</p><i class='far fa-hand-rock inti-rock' ></i>";
            document.getElementById('winner').innerText = "------"
            }  
        });
    }

    var compare = function (options) {  //Function For all probabilities the player and the computer and the SCORES
        if (options[0] == "Rock") {
            var player = document.getElementById('PchoiseId').textContent; 
            var computer = document.getElementById('Cchoise').textContent;
            var win = document.getElementById('p-win').textContent; 
            var tie = document.getElementById('tie').textContent;
            var lose = document.getElementById('c-win').textContent;
             if (player == computer) {
                document.getElementById('winner').textContent = "Tie!";
                return document.getElementById('tie').innerText = ++tie;
            } else if (player == "Rock" && computer == "Scissors") {
                document.getElementById('winner').textContent = "Player Wins!";
                return document.getElementById('p-win').innerText = ++win;
            } else if (player == "Paper" && computer == "Scissors") {
                document.getElementById('winner').textContent = "Computer Wins!";
                return document.getElementById('c-win').innerText = ++lose;
            } else if (player == "Scissors" && computer == "Rock") {
                document.getElementById('winner').textContent = "Computer Wins!";
                return document.getElementById('c-win').innerText = ++lose;
            } else if (player == "Scissors" && computer == "Paper") {
                document.getElementById('winner').textContent = "Player Wins!";
                return document.getElementById('p-win').innerText = ++win;
            } else if (player == "Paper" && computer == "Rock") {
                document.getElementById('winner').textContent = "Player Wins!";
                return document.getElementById('p-win').innerText = ++win;
            } else if (player == "Rock" && computer == "Paper") {
                document.getElementById('winner').textContent = "Computer Wins!";
                return document.getElementById('c-win').innerText = ++lose;

            }
         } 
    }
   
    return {
        init: function (options) {
            loadOptionButtons(options);
            prepareEvents(options);
        }
      
    }
}

window.addEventListener('DOMContentLoaded', function () {
    game().init(options1);
    document.getElementById('play').addEventListener('click', function () {

        if (change) {
            game().init(options1);
            change = false;
            document.getElementById('PchoiseId').innerHTML = "  <p>PLAYER</p><i class='far fa-hand-rock init' ></i>";
            document.getElementById('Cchoise').innerHTML = "   <p>COMOUTER</p><i class='far fa-hand-rock init' ></i>";
        }  
    })
});