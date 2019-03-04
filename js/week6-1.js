/*function that executes on window load*/
window.onload = function () {
    popFont();
    popBorder();
    popDatalist();
    popImage();
}

/*function to dynamically populate the font styles*/
function popFont() {
    var fontTypes = ["Papyrus", "Parchment", "Impact", "Copperplate Gothic", "Chiller", "Magneto", "Forte"];
    var select = document.getElementById("font");

    for (i = 0; i < fontTypes.length; i++) {
        var opt = fontTypes[i];
        var elem = document.createElement("option");
        elem.textContent = opt;
        elem.value = opt;
        select.appendChild(elem);
    }
}

/*function to dynamically populate the border styles*/
function popBorder() {
    var borders = ["none", "solid", "dotted", "dashed", "groove", "ridge"];
    var select = document.getElementById("borderStyle");

    for (i = 0; i < borders.length; i++) {
        var opt = borders[i];
        var elem = document.createElement("option");
        elem.textContent = opt;
        elem.value = opt;
        select.appendChild(elem);
    }
}

/*function to dynamically populate the datalist*/
function popDatalist() {
    var tickmarks = document.getElementById("tickmarks");
    for (i = 0; i < 13; i++) {
        var elem = document.createElement("OPTION");
        elem.setAttribute("value", i);
        tickmarks.appendChild(elem);
    }
}

/*function to dynamically populate the images*/
function popImage() {
    var images = ["images/week6img1.jpg", "images/week6img2.jpg", "images/week6img3.jpg", "images/week6img4.jpg"];
    var imageSel = document.getElementById("imageSel");
    var br = document.createElement("br");

    for (i = 0; i < images.length; i++) {
        var radioButton = document.createElement("input");
        radioButton.setAttribute("type", "radio");
        radioButton.setAttribute("id", "img" + i);
        radioButton.setAttribute("value", images[i]);
        radioButton.setAttribute("name", "imgSelect");
        imageSel.appendChild(radioButton);
        var image = document.createElement("IMG");
        image.setAttribute("src", images[i]);
        image.setAttribute("class", "thumbnail1");
        imageSel.appendChild(image);
        if (i === 1) {
            imageSel.appendChild(br);
        }
    }
}

/*function to create the invitation from user entered data*/
function createInv() {

    /*create array that contains all of the form values (easier than the loops in your video)*/
    var invOptions = document.getElementById("invOptions");

    /*form validation*/
    if (invOptions[0].value == "" || invOptions[1].value == "" || invOptions[2].value == "" || invOptions[3].value == "" ||
        invOptions[4].value == "" || invOptions[5].value == "" || invOptions[6].value == "" || invOptions[7].value == "") {
        alert("Invitation requires all fields to be completed.");
        return false;
    }

    /*split the date into year, month, day and assign month name*/
    var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = invOptions[1].value.split("-");
    var month = date[1];
    var year = date[0];
    var day = date[2];
    var monthString = monthArray[month - 1];

    /*retrieve div to place invitation in*/
    var invitationMain = document.getElementById("invitationMain");

    /*set scrolling window for all of the created invitations to be toward bottom of window*/
    invitationMain.scrollTop = invitationMain.scrollHeight;

    /*create invitation div*/
    var invitation = document.createElement("div");
    invitation.setAttribute("style", "border-radius: 25px; width: 700px;height: 700px;margin: 100px auto;background-color: " + invOptions[3].value +
        ";border-color: " + invOptions[7].value + ";border-style: " + invOptions[6].value + ";border-width: " + invOptions[8].value + "px");
    invitationMain.appendChild(invitation);

    /*create heading*/
    var heading = document.createElement("h1");
    heading.setAttribute("style", "font-size: 60px; padding-top: 35px; text-align: center; color: " + invOptions[4].value + "; font-family: " + invOptions[5].value);
    heading.innerHTML = "You are Invited!";
    invitation.appendChild(heading);

    /*to change hr options, use border styles*/
    var hr = document.createElement("hr");
    hr.setAttribute("style", "width: 500px; border-width: 3px; border-color: " + invOptions[4].value);
    invitation.appendChild(hr);

    var title = document.createElement("h2");
    title.setAttribute("style", "font-size: 30px; text-align: center; color: " + invOptions[4].value + "; font-family: " + invOptions[5].value);
    title.innerHTML = "Event: " + invOptions[0].value;
    invitation.appendChild(title);

    var date = document.createElement("h2");
    date.setAttribute("style", "font-size: 30px; text-align: center; color: " + invOptions[4].value + "; font-family: " + invOptions[5].value);
    date.innerHTML = "Date: " + monthString + " " + day + ", " + year;
    invitation.appendChild(date);

    var message = document.createElement("p");
    message.setAttribute("style", "font-size: 20px; margin: 0 auto; text-align: center; width: 70%; color: " + invOptions[4].value + "; font-family: " + invOptions[5].value);
    message.innerHTML = "<br>" + invOptions[2].value;
    invitation.appendChild(message);

    /*create div for picture and some fancy styles to match invitation border*/
    var imageBox = document.createElement("div");
    imageBox.setAttribute("style", "border-radius: 25px; width: 250px; height: 250px; margin: 40px auto; background-color: " + invOptions[3].value +
        ";border-color: " + invOptions[7].value + ";border-style: " + invOptions[6].value + ";border-width: " + invOptions[8].value + "px");
    invitation.appendChild(imageBox);

    var picture = document.createElement("IMG");
    picture.setAttribute("style", "padding: 15px 15px; width: inherit; height: inherit");

    /*this was the only way I could figure out how to get a radio button input*/
    var imageChoice;
    if (document.getElementById("img0").checked) {
        imageChoice = document.getElementById("img0").value;
    }
    if (document.getElementById("img1").checked) {
        imageChoice = document.getElementById("img1").value;
    }
    if (document.getElementById("img2").checked) {
        imageChoice = document.getElementById("img2").value;
    }
    if (document.getElementById("img3").checked) {
        imageChoice = document.getElementById("img3").value;
    }  
    picture.setAttribute("src", imageChoice);
    imageBox.appendChild(picture);

    /*changed main div for the created invitation to make it visible*/
    document.getElementById("invitationMain").style.visibility = "visible";
}