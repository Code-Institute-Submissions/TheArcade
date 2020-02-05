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
var ct = 0; // Counter to know when we have completed the game
var check = []; // Array to gather the values of the two pics and compare them
var idGet = []; // Save the id of the img to remove them from the table once they match



/*  

Control function:

- Verify that the same getID value is not used two times in a row
- make sure that you don't click three items in a row, only two items in a row can be clicked

*/ 

function guess(getID) {

    console.log(getID);  // ID del tag img

    idGet[match] = getID; // Salviamo l'ID del tag img

    if(match == 1 && idGet[0] == idGet[1]) return; // KEEP FIXING HERE


    function compare(current) {

        if (match == 1) {
            if (check[0] == current) {
                setTimeout(function () {
                    document.getElementById(getID).style.visibility = "hidden";
                    document.getElementById(idGet[0]).style.visibility = "hidden";
                }, 1300);
                console.log(getID);
                console.log(idGet[0]);
                match = 0;
                ct++;
            } else {
                match = 0;

                setTimeout(function () {
                    document.getElementById(getID).src = "Images/stark.jpeg";
                    document.getElementById(idGet[0]).src = "Images/stark.jpeg";
                    document.getElementById(getID).className = "pic";
                    document.getElementById(idGet[0]).className = "pic";
                }, 1300);
            }

        } else {
            check[0] = current;
            if (match < 1) match++;
        }
    }



    console.log(match);

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

    console.log(match);

}