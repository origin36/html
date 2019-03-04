/*function that executes on page load*/
window.onload = function () {
    checkCookies();
}

/*function to check cookies*/
function checkCookies() {
    var cookieVal = navigator.cookieEnabled;
    if (cookieVal) {
        alert("Your browser has cookies ENABLED");
    }
    else {
        alert("Your browser has cookies DISABLED");
    }
}

var myArrayList = ["First Name", "Last Name", "Age", "Enjoy Landscaping", "Enjoy Electronics", "Favorite Sport"];
var myArray = [];

/*function that retrieves data and sets up the cookies on the page*/
function setCookies() {
    var firstNameVal, lastNameVal, ageVal, landscapeVal, electronicsValue, sportVal = false;

    /*first name prompt with confirmation*/
    while (!firstNameVal) {
        myArray[0] = prompt("Please enter your first name:", "First Name");
        if (myArray[0] == null) {
            return false;
        }
        firstNameVal = confirm("You have entered " + myArray[0] + ". Is this correct?");
    }
    alert("Your first name has been stored as: " + myArray[0] + ".");

    /*last name prompt with confirmation*/
    while (!lastNameVal) {
        myArray[1] = prompt(myArray[0] + ", please enter your last name:", "Last Name");
        if (myArray[1] == null) {
            return false;
        }
        lastNameVal = confirm(myArray[0] + ", you have entered " + myArray[1] + ". Is this correct?");
    }
    alert(myArray[0] + ", your last name has been stored as: " + myArray[1] + ".");

    /*age prompt with confirmation*/
    while (!ageVal) {
        myArray[2] = prompt(myArray[0] + ", please enter your age:", "Age");
        if (myArray[2] == null) {
            return false;
        }
        ageVal = confirm(myArray[0] + ", you have entered " + myArray[2] + ". Is this correct?");
    }
    alert(myArray[0] + ", your age has been stored as: " + myArray[2] + ".");

    /*city prompt with confirmation*/
    while (!landscapeVal) {
        myArray[3] = prompt(myArray[0] + ", do you enjoy landscaping?", "yes/no");
        if (myArray[3] == null) {
            return false;
        }
        landscapeVal = confirm(myArray[0] + ", you entered " + myArray[3] + " to enjoying landscaping. Is this correct?");
    }
    alert(myArray[0] + ", your response to enjoying landscaping has been stored as: " + myArray[3] + ".");

    /*state prompt with confirmation*/
    while (!electronicsValue) {
        myArray[4] = prompt(myArray[0] + ", do you enjoy electronics?", "yes/no");
        if (myArray[4] == null) {
            return false;
        }
        electronicsValue = confirm(myArray[0] + ", you entered " + myArray[4] + " to enjoying electronics. Is this correct?");
    }
    alert(myArray[0] + ", your response to enjoying electronics has been stored as: " + myArray[4] + ".");

    /*country prompt with confirmation*/
    while (!sportVal) {
        myArray[5] = prompt(myArray[0] + ", choose your favorite sport: Football, Basketball, Soccer, Baseball, or Volleyball", "Favorite Sport");
        if (myArray[5] == null) {
            return false;
        }
        sportVal = confirm(myArray[0] + ", you have chosen " + myArray[5] + ". Is this correct?");
    }
    alert(myArray[0] + ", your favorite category has been stored as: " + myArray[5] + ".");

    /*set the cookies to the values entered by user with expiration of 30 days after entry*/
    var d = new Date();
    d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    for (var i = 0; i < myArrayList.length; i++) {
        document.cookie = myArrayList[i] + "=" + myArray[i] + ";" + expires + ";path=/";
    }
}

/*function to retrieve cookies for the user to view*/
function showCookies() {
    var theCookies = document.cookie.split(';');
    var aString = "";
    for (var i = 1; i <= theCookies.length; i++) {
        aString += i + ". " + theCookies[i - 1].split("=")[0] + ": " + theCookies[i - 1].split("=")[1] + "<br>";
    }
    if (theCookies[0].split("=")[1] === undefined) {
        alert("Cookies have not been set.");
    }
    else {
        var toggle = document.getElementsByClassName("week5")[0];
        if (toggle.style.display === "block") {
            toggle.style.display = "none";
        } else {
            toggle.style.display = "block";
        }
        document.getElementsByClassName("week5")[0].style.border = "8px solid white";
        document.getElementsByClassName("week5")[0].style.backgroundColor = "black";
        document.getElementById("cookieHeader").style.visibility = "visible";
        document.getElementById("week5-1results").innerHTML = aString;
    }
}

/*function to delete cookies by assigning expiration date in the past*/
function deleteCookies() {
    var d = new Date();
    d.setTime(d.getTime());
    var expires = "expires=" + d.toUTCString();
    for (var i = 0; i < myArrayList.length; i++) {
        document.cookie = myArrayList[i] + "=;" + expires + ";path=/";
    }
    document.getElementsByClassName("week5")[0].style.border = "none";
    document.getElementsByClassName("week5")[0].style.backgroundColor = "inherit";
    document.getElementById("cookieHeader").style.visibility = "hidden";
    document.getElementById("week5-1results").innerHTML = "";
    alert("Your cookies have been deleted.");
}