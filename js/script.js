/****************************

 MEMORY GAME
 MILESTONE 2
 FULL STACK WEB DEVELOPER COURSE
 AT CODE INSTITUTE

*****************************/




// Creating an array with the pictures path
var GOT = [
    'Images/Arya.jpg',
    'Images/Tyrion.jpg',
    'Images/Cersei.jpg',
    'Images/Daenerys.jpg',
    'Images/Drogo.jpg',
    'Images/Jaime.jpg',
    'Images/Joffrey.jpg',
    'Images/Jon.jpg'
];


// Creating an array that contains all the cards plus the double
var arr = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];


// Let's mix the order of the cards to start the game
arr.sort(function (a, b) { return 0.5 - Math.random() });


// String with the solution for testing purposes *************************** REMEMBER TO DELETE THIS    <---------
// document.getElementById("demo").innerHTML = arr;


// Let's hide all the cards with the House Stark Crest
var a;

for (a = 0; a < arr.length; a++) {
    document.getElementsByClassName("pic")[a].src = "Images/stark.jpeg";
}


// Let's create new variables and new arrays for the code
var match = 0;  // Counter in order to have only two cards a time
var ct = 0; // Counter to know when we have completed the game
var check = []; // Array to gather the values of the two pics and compare them
var idGet = []; // Save the ID of the img for comparison 
var clicks = 0; // We can click only on two cards in a row
var start = 0; // Counter to start the timer on the first click
var seconds = 0; // Well... seconds!
var totSec = 0; // Timeframe between a match and the previous one
var tempSec = 0; // Keep seconds value at each match
var score = 0;// Current score

function guess(getID) {

    start++;

    if(start == 1) {
        var x = setInterval(function() {
            seconds++;
        }, 1000);
    }

    clicks++;

    // Let's verify if we clicked on three cards in a row    
    if (clicks > 2) return false;

    // Let's save the img ID value so that we can compare afterwards 
    idGet[match] = getID;

    // Let's verify if we click on the same picture two times
    if (match == 1 && idGet[0] == getID) { clicks = 1; return false; }


    // Function two compare the two cards
    function compare(current) {
        if (match == 1) {
            if (check[0] == current) {
                clicks = 0;
                totSec = seconds - tempSec;
                tempSec = seconds; // let's save the current 'seconds' value
                score = Math.round(score + (20000 / totSec));
                let conv = score.toString().length;
                let zero = 7 - conv;
                let zeroN = "0";
                for(let zn = 1; zn < zero; zn++) { zeroN = zeroN.concat("0"); }
                document.getElementById("cScore").innerHTML = zeroN + score;
                console.log(score);

                setTimeout(function () {
                    document.getElementById(getID).style.visibility = "hidden";
                    document.getElementById(idGet[0]).style.visibility = "hidden";
                }, 1300);
                
                match = 0;
                ct++;
                if (ct == 8) {
                    setTimeout(function () {
                        document.getElementById('welldone').style.display = "block";
                        document.getElementById('center').style.display = "none";
                        document.getElementById("finalScore").innerHTML = "<span style='color:#f4c318;'>Final Score: </span>" + score;
                        console.log(score);
                    }, 1000);
                }

            } else {
                match = 0;

                setTimeout(function () {
                    document.getElementById(getID).src = "Images/stark.jpeg";
                    document.getElementById(idGet[0]).src = "Images/stark.jpeg";
                    document.getElementById(getID).className = "pic";
                    document.getElementById(idGet[0]).className = "pic";
                    clicks = 0;
                }, 1300);
            }

        } else {
            check[0] = current;
            if (match < 1) match++;
        }
    }


    // We show the correct character based on our click, we also call the function compare() to compare two cards.
    // In case we have one card, we only increase the variable values

    switch (getID) {
        case 'one':
            document.getElementById('one').src = GOT[arr[0]];
            document.getElementById('one').className = "pics";
            compare(arr[0]);
            break;
        case 'two':
            document.getElementById('two').src = GOT[arr[1]];
            document.getElementById('two').className = "pics";
            compare(arr[1]);
            break;
        case 'three':
            document.getElementById('three').src = GOT[arr[2]];
            document.getElementById('three').className = "pics";
            compare(arr[2]);
            break;
        case 'four':
            document.getElementById('four').src = GOT[arr[3]];
            document.getElementById('four').className = "pics";
            compare(arr[3]);
            break;
        case 'five':
            document.getElementById('five').src = GOT[arr[4]];
            document.getElementById('five').className = "pics";
            compare(arr[4]);
            break;
        case 'six':
            document.getElementById('six').src = GOT[arr[5]];
            document.getElementById('six').className = "pics";
            compare(arr[5]);
            break;
        case 'seven':
            document.getElementById('seven').src = GOT[arr[6]];
            document.getElementById('seven').className = "pics";
            compare(arr[6]);
            break;
        case 'eight':
            document.getElementById('eight').src = GOT[arr[7]];
            document.getElementById('eight').className = "pics";
            compare(arr[7]);
            break;
        case 'nine':
            document.getElementById('nine').src = GOT[arr[8]];
            document.getElementById('nine').className = "pics";
            compare(arr[8]);
            break;
        case 'ten':
            document.getElementById('ten').src = GOT[arr[9]];
            document.getElementById('ten').className = "pics";
            compare(arr[9]);
            break;
        case 'uno':
            document.getElementById('uno').src = GOT[arr[10]];
            document.getElementById('uno').className = "pics";
            compare(arr[10]);
            break;
        case 'due':
            document.getElementById('due').src = GOT[arr[11]];
            document.getElementById('due').className = "pics";
            compare(arr[11]);
            break;
        case 'tre':
            document.getElementById('tre').src = GOT[arr[12]];
            document.getElementById('tre').className = "pics";
            compare(arr[12]);
            break;
        case 'quattro':
            document.getElementById('quattro').src = GOT[arr[13]];
            document.getElementById('quattro').className = "pics";
            compare(arr[13]);
            break;
        case 'cinque':
            document.getElementById('cinque').src = GOT[arr[14]];
            document.getElementById('cinque').className = "pics";
            compare(arr[14]);
            break;
        case 'sei':
            document.getElementById('sei').src = GOT[arr[15]];
            document.getElementById('sei').className = "pics";
            compare(arr[15]);
    }
}


// Providing a solution of the current game.
function solution() {
    if (document.getElementById('one').style.visibility != "hidden") document.getElementById('one').src = GOT[arr[0]];
    if (document.getElementById('two').style.visibility != "hidden") document.getElementById('two').src = GOT[arr[1]];
    if (document.getElementById('three').style.visibility != "hidden") document.getElementById('three').src = GOT[arr[2]];
    if (document.getElementById('four').style.visibility != "hidden") document.getElementById('four').src = GOT[arr[3]];
    if (document.getElementById('five').style.visibility != "hidden") document.getElementById('five').src = GOT[arr[4]];
    if (document.getElementById('six').style.visibility != "hidden") document.getElementById('six').src = GOT[arr[5]];
    if (document.getElementById('seven').style.visibility != "hidden") document.getElementById('seven').src = GOT[arr[6]];
    if (document.getElementById('eight').style.visibility != "hidden") document.getElementById('eight').src = GOT[arr[7]];
    if (document.getElementById('nine').style.visibility != "hidden") document.getElementById('nine').src = GOT[arr[8]];
    if (document.getElementById('ten').style.visibility != "hidden") document.getElementById('ten').src = GOT[arr[9]];
    if (document.getElementById('uno').style.visibility != "hidden") document.getElementById('uno').src = GOT[arr[0]];
    if (document.getElementById('due').style.visibility != "hidden") document.getElementById('due').src = GOT[arr[11]];
    if (document.getElementById('tre').style.visibility != "hidden") document.getElementById('tre').src = GOT[arr[12]];
    if (document.getElementById('quattro').style.visibility != "hidden") document.getElementById('quattro').src = GOT[arr[13]];
    if (document.getElementById('cinque').style.visibility != "hidden") document.getElementById('cinque').src = GOT[arr[14]];
    if (document.getElementById('sei').style.visibility != "hidden") document.getElementById('sei').src = GOT[arr[15]];
}


// Click on New Game
function reload() {
    location.reload();
}