

var GOT = [
'Images/Arya.jpg',
'Images/Brienne.jpg',
'Images/Cersei.jpg',
'Images/Daenerys.jpg',
'Images/Drogo.jpg',
'Images/Jaime.jpg',
'Images/Joffrey.jpg',
'Images/Jon.jpg'
];

var arr = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];

arr.sort(function(a, b){return 0.5 - Math.random()});

document.getElementById("demo").innerHTML = arr;



/*
arr.forEach(showPics);

function showPics(item, index) {
    document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
}
*/

document.getElementById("one").src = GOT[arr[0]];
document.getElementById("two").src = GOT[arr[1]];
document.getElementById("three").src = GOT[arr[2]];
document.getElementById("four").src = GOT[arr[3]];
document.getElementById("five").src = GOT[arr[4]];
document.getElementById("six").src = GOT[arr[5]];
document.getElementById("seven").src = GOT[arr[6]];
document.getElementById("eight").src = GOT[arr[7]];
document.getElementById("nine").src = GOT[arr[8]];
document.getElementById("ten").src = GOT[arr[9]];
document.getElementById("uno").src = GOT[arr[10]];
document.getElementById("due").src = GOT[arr[11]];
document.getElementById("tre").src = GOT[arr[12]];
document.getElementById("quattro").src = GOT[arr[13]];
document.getElementById("cinque").src = GOT[arr[14]];
document.getElementById("sei").src = GOT[arr[15]];

