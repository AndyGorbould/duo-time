document.getElementsByClassName("boxy-animal")[0].style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr5Tyu1ckQBNoBCnXwddJoYgraucyVYqVS6w&usqp=CAU)";
document.getElementsByClassName("boxy-sport")[0].style.backgroundImage = "url(https://myigcseworksheets.files.wordpress.com/2019/02/surf_featured_1.jpg)";
document.getElementsByClassName("boxy-fictional")[0].style.backgroundImage = "url(https://i.jeuxactus.com/datas/jeux/d/r/dragon-ball-xenoverse-2/xl/dragon-ball-xenoverse-2-6250b9adeb2c5.jpg)";
document.getElementsByClassName("boxy-celeb")[0].style.backgroundImage = "url(https://cdn.museum.nl/assets/f2675914-1463-4b8e-9103-2bf9709ea062?w=1280&c=3347b33857c49db85f0f2344d44b3c1dba9e2ba68e674b3c7edfec542c48c8af)";
////////// change words!!

let btn = document.getElementsByClassName("button")[3];

btn.onclick = function(){
    change()
};

function change() {

    let wordOne = document.getElementsByClassName("column")[0];
    let wordTwo = document.getElementsByClassName("column")[1];
    let wordThree = document.getElementsByClassName("column")[2];

    let arrayWords = "";
};

// gets all "column" classes
let defineColumn = document.getElementsByClassName("column");
// length of ^^
console.log(defineColumn.length);
console.log(defineColumn[0].innerText);


// empty array (to PUSH column words into)
let words = [];

// do the push for all words
for (let i = 0; i < defineColumn.length; i++) {
    // remember syntax!!
    words.push(defineColumn[i].innerText);
}
// show the completed array
console.log(words);



// random colour array
randomColor = ["red", "blue", "green", "pink", "black", "orange"]



// get button DOM element
changeButton = document.getElementsByClassName("change-me")[0];
// listen for click, run changeFunc
changeButton.addEventListener("click", changeFunc)


function changeFunc() {
    // Random number
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    // replace DOM text
    for (let i = 0; i < defineColumn.length; i++) {

        defineColumn[i].innerText = words[getRandomInt(3)];
        //randomize colours
        defineColumn[i].style.color = randomColor[getRandomInt(6)];
    }
}