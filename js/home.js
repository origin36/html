function changePage() {
    alert("The beautiful CSS I have laboriously constructed is about to be replaced for NO REASON AT ALL.");
    document.body.style.backgroundColor = "yellow";
    document.body.style.fontFamily = "Copperplate Gothic";
    document.getElementById("title").style.fontSize = "60px";
    document.getElementById("title").style.color = "blue";
    document.getElementsByClassName("jumbotron")[0].style.backgroundColor = "white";
    document.getElementsByClassName("subtitle")[0].style.color = "black";

    var x = document.getElementsByClassName("sectionHeading");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "blue";
    }

    var y = document.getElementsByClassName("sectionText");
    var j;
    for (j = 0; j < y.length; j++) {
        y[j].style.color = "black";
    }

    document.getElementsByClassName("footer")[0].style.color = "black";
}