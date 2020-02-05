/* CREATING ARRAY WITH THE PICTURES */

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




/* CREATING ARRAY FOR THE TWINS */

var arr = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];



/* LET'S MIX THE ORDER TO START THE GAME */
arr.sort(function (a, b) { return 0.5 - Math.random() });




/* CREATING MY PERSONAL STRING WITH THE SOLUTION FOR TESTING THE GAME */
document.getElementById("demo").innerHTML = arr;




/* HIDING ALL THE CARDS WITH THE HOUSE STARK CREST */

var a;

for (a = 0; a < arr.length; a++) {
    document.getElementsByClassName("pic")[a].src = "Images/stark.jpeg";
}




/* USING SWITCH AND CASE TO GET THE CORRISPONDENT PICTURE */

var match = 0;  // Counter in order to have only two cards a time

function guess(getID) {

    console.log(getID);
    

    var gotPic;

    
    console.log(match);

    switch (getID) {
        case 'one':
            document.getElementById('one').src = GOT[arr[0]];
            document.getElementById('one').className = "pics";
            match++;
            break;
        case 'two':
            document.getElementById('two').src = GOT[arr[1]];
            document.getElementById('two').className = "pics";
            match++;
            break;
        case 'three':
            document.getElementById('three').src = GOT[arr[2]];
            document.getElementById('three').className = "pics";
            match++;
            break;
        case 'four':
            document.getElementById('four').src = GOT[arr[3]];
            document.getElementById('four').className = "pics";
            match++;
            break;
        case 'five':
            document.getElementById('five').src = GOT[arr[4]];
            document.getElementById('five').className = "pics";
            break;
        case 'six':
            document.getElementById('six').src = GOT[arr[5]];
            document.getElementById('six').className = "pics";
            break;
        case 'seven':
            document.getElementById('seven').src = GOT[arr[6]];
            document.getElementById('seven').className = "pics";
            break;
        case 'eight':
            document.getElementById('eight').src = GOT[arr[7]];
            document.getElementById('eight').className = "pics";
            break;
        case 'nine':
            document.getElementById('nine').src = GOT[arr[8]];
            document.getElementById('nine').className = "pics";
            break;
        case 'ten':
            document.getElementById('ten').src = GOT[arr[9]];
            document.getElementById('ten').className = "pics";
            break;
        case 'uno':
            document.getElementById('uno').src = GOT[arr[10]];
            document.getElementById('uno').className = "pics";
            break;
        case 'due':
            document.getElementById('due').src = GOT[arr[11]];
            document.getElementById('due').className = "pics";
            break;
        case 'tre':
            document.getElementById('tre').src = GOT[arr[12]];
            document.getElementById('tre').className = "pics";
            break;
        case 'quattro':
            document.getElementById('quattro').src = GOT[arr[13]];
            document.getElementById('quattro').className = "pics";
            break;
        case 'cinque':
            document.getElementById('cinque').src = GOT[arr[14]];
            document.getElementById('cinque').className = "pics";
            break;
        case 'sei':
            document.getElementById('sei').src = GOT[arr[15]];
            document.getElementById('sei').className = "pics";
    }

    console.log(match);
    
}