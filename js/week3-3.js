function displayResults() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    var country = document.getElementById("country").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var color = document.getElementById("color").value;
    var birthday = document.getElementById("birthday").value;
    var attended = document.getElementById("attended").value;
    var ebay = document.getElementById("yes").checked;
    var paypal = document.getElementById("paypal").checked;
    var creditCard = document.getElementById("creditCard").checked;
    var check = document.getElementById("check").checked;
    var cash = document.getElementById("cash").checked;
    var dinnerware = document.getElementById("dinnerware").checked;
    var clothing = document.getElementById("clothing").checked;
    var office = document.getElementById("office").checked;
    var electronics = document.getElementById("electronics").checked;
    var antiques = document.getElementById("antiques").checked;
    var categoryString = "";
    var mySecret = document.getElementById("mySecret").value;

    /*form validation javascript*/
    if (firstName == "" || lastName == "" || address == "" || city == "" || state == "" ||
        zip == "" || country == "" || phone == "" || email == "" || password == "" ||
        birthday == "" || attended == "") {
        alert("All fields must be filled in before submitting survey.");
        return false;
    }

    /*zip code validation*/
    if (/^\d{5}$|^\d{5}-\d{4}$/.test(zip) == 0) {
        alert("Please enter a valid zip code.");
        return false;
    }

    /*phone number validation*/
    if (/^\d{10}$/.test(phone) == 0) {
        alert("Please enter a valid phone number.");
        return false;
    }

    /*email validation*/
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == 0) {
        alert("Please enter a valid email address.");
        return false;
    }

    /*check if email matches myCollege.edu*/
    if (RegExp("@mycollege.edu").test(email)) {
        emailMatch = "You are a student at mycollege.";
    }
    else {
        emailMatch = "You are not a student at mycollege.";
    }

    /*created if then statements for ebay shopping output */
    if (ebay) {
        ebayString = "You sell items on Ebay.";
    }
    else {
        ebayString = "You do not sell items on Ebay.";
    }

    /*created if then statements for the currency used for purchases*/
    if (paypal) {
        currencyString = "You use PayPal most often for purchases.";
    }
    else if (creditCard) {
        currencyString = "You use a credit card most often for purchases.";
    }
    else if (check) {
        currencyString = "You use checks most often for purchases.";
    }
    else if (cash) {
        currencyString = "You use cash most often for purchases.";
    }
    else {
        currencyString = "Monopoly Money?  Nice Choice!";
    }


    if (dinnerware) {
        categoryString += "</br>&nbsp;&nbsp;&nbspDinnerware";
    }
    if (clothing) {
        categoryString += "</br>&nbsp;&nbsp;&nbspClothing";
    }
    if (office) {
        categoryString += "</br>&nbsp;&nbsp;&nbspOffice Supplies";
    }
    if (electronics) {
        categoryString += "</br>&nbsp;&nbsp;&nbspElectronics";
    }
    if (antiques) {
        categoryString += "</br>&nbsp;&nbsp;&nbspAntiques";
    }

    var newCustomer = {
        firstName: firstName,
        lastName: lastName,
        address: address,
        city: city,
        state: state,
        zip: zip,
        country: country,
        phone: phone,
        email: email,
        password: password,
        color: color,
        birthday: birthday,
        attended: attended,
        ebay: ebay,
        mySecret: mySecret,

        printResults: function () {
            document.getElementById("results").style.display = "block";
            document.getElementById("results").style.color = this.color;
            document.getElementById("results").innerHTML =
                "Thank you, " + this.firstName + " " + this.lastName + "</br>" +
                "Address: " + this.address + "</br>" +
                "City: " + this.city + "</br>" +
                "State: " + this.state + "</br>" +
                "Zip Code: " + this.zip + "</br>" +
                "Country: " + this.country + "</br>" +
                "Phone: " + this.phone + "</br>" +
                "Email: " + this.email + "</br>" +
                "Password: " + this.password + "</br>" +
                "Your favorite color is the color of this text!</br>" +
                "Your birthday is: " + this.birthday + "</br>" +
                "You have attended " + this.attended + " rummage sales.</br>" +
                ebayString + "</br>" +
                currencyString + "</br>" +
                "Your Favorite Category or Categories:" + categoryString + "</br>" +
                "The secret code is: " + mySecret + ".</br>" +
                emailMatch;
        }
    }
    newCustomer.printResults();
}