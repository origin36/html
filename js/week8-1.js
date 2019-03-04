/*function that enables the content to be dropped*/
function allowDrop(ev) {
    ev.preventDefault();
}

/*function that enables the content to be dragged*/
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

/*function that executes after content is dropped*/
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    compare();
}

/*function that compares contents of re-arranged and generates output if correct*/
function compare() {

    /*data variables*/
    var puzzlePiece = [];
    var puzzleNumber = [0, 0, 0, 0, 0, 0, 0, 0, 0, 9];

    /*retrieve id of child of each element referenced*/
    for (var i = 0; i < 9; i++) {
        puzzlePiece[i] = document.getElementById("week8div" + i).firstChild.id;
        puzzleNumber[i] = puzzlePiece[i].split("drag")[1];
    }

    /*validation.  will increment j if each div has the correct puzzle piece*/
    var j = 0;
    while (puzzleNumber[j] < puzzleNumber[j + 1]) {
        j++;
    }

    /*the culmination of 8 difficult weeks*/
    if (j == 9) {
        alert("My face when writing HTML.");
    }
}