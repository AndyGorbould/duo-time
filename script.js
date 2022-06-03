

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
    }
}