document.getElementById("rock").width = 250;
document.getElementById('rock').height = 250;

var winner = 0;
var loser = 0;
var ties = 0;

function win() {
    winner = winner + 1;

    document.getElementById("text").innerText = "WINS:" + winner + "--LOSSES:" + loser + "--TIES:" + ties
}

function lose() {
    loser = loser + 1;

    document.getElementById("text").innerText = "WINS:" + winner + "--LOSSES:" + loser + "--TIES:" + ties
}

function tie() {
    ties = ties + 1;

    document.getElementById("text").innerText = "WINS:" + winner + "--LOSSES:" + loser + "--TIES:" + ties
}

function main() {
    var ans = Math.floor(Math.random()*3);

    document.getElementById("paper").style.display = "none";
    document.getElementById("scissors").style.display = "none";
    document.getElementById("rock").style.display = "none";

    document.getElementById("three").style.display = "block";

    setTimeout(function two() {
        document.getElementById("three").style.display = "none";
        document.getElementById("two").style.display = "block";
    }, 750);

    setTimeout(function three() {
        document.getElementById("two").style.display = "none";
        document.getElementById("one").style.display = "block";
    }, 1500);

    setTimeout(function answer() {
        document.getElementById("one").style.display = "none";
        document.getElementById("two").style.display = 'none';
        document.getElementById("three").style.display = "none";

        if (ans == 0) {
            document.getElementById('paper').style.display = "none";
            document.getElementById('scissors').style.display = "none";
    
            document.getElementById('rock').style.display = "block";
        }
        else if (ans == 1) {
            document.getElementById('paper').style.display = "none";
            document.getElementById('rock').style.display = "none";
    
            document.getElementById('scissors').style.display = "block";
        }
        else if (ans == 2) {
            document.getElementById('rock').style.display = "none";
            document.getElementById('scissors').style.display = "none";
    
            document.getElementById('paper').style.display = "block";
        }    
    }, 2250)
};

