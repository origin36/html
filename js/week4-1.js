function doStuff() {
    alert("Changing Styles...");
    document.body.style.backgroundColor = "white";
    document.body.style.fontFamily = "Trebuchet MS";
    document.getElementsByClassName("jumbotron")[0].style.backgroundColor = "yellow";
    document.getElementsByTagName("h1")[0].style.color = "black";
    document.getElementsByTagName("h1")[0].style.textShadow = "4px 4px white";
    document.getElementsByTagName("h3")[0].style.color = "black";
    document.getElementsByClassName("advertise")[0].style.color = "blue";
    document.getElementsByClassName("advertise")[1].style.color = "black";
    document.getElementsByClassName("advertise")[2].style.color = "red";
    document.getElementsByTagName("h3")[1].style.color = "red";
    document.getElementsByTagName("h3")[2].style.color = "black";

    var x = document.getElementsByTagName("p");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "yellow";
        x[i].style.backgroundColor = "blue";
    }
}