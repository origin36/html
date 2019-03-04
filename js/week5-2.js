/*function that executes on page load*/
window.onload = function () {
    init();
}

/*function for week5-2 that calls other functions*/
function init() {
    createHeader();
    createFooter();
    createCaption();
}

/*function to create the footer for week5-2*/
function createHeader() {
    var table = document.getElementById("productTable");
    var headerRow1 = table.insertRow(0);
    var header1 = headerRow1.insertCell(0);
    header1.colSpan = 9;
    header1.style.borderWidth = "10px";
    header1.innerHTML = "This product list shows what is available at our rummage sale!";
    header1.style = "text-align: center";
    var headerRow2 = table.insertRow(1);
    var headings = ["Buy", "Like", "Product Name", "Mfr/Make/Model", "Condition", "Description", "Retail Price", "Resale City Price", "Picture"];
    var c = [];
    for (i = 0; i < headings.length; i++) {
        c[i] = headerRow2.insertCell(i);
        c[i].innerHTML = headings[i];
        c[i].classList.add("week5th");
    }
}

/*function to create the footer for week5-2*/
function createFooter() {
    var table = document.getElementById("productTable");
    var footerRow = table.insertRow(6);
    var footer = footerRow.insertCell(0);
    footer.colSpan = 9;
    footer.innerHTML = "All Sales are Final.";
    footer.style = "text-align: center";
}

/*function to create caption for week5-2*/
function createCaption() {
    var caption = document.getElementById("productTable").createCaption();
    caption.style.fontSize = "14px";
    /*from W3Schools: "The <caption> align attribute is not supported in HTML5. Use CSS instead." Did you try this for your caption?  Might work. */
    caption.style.captionSide = "top";
    caption.innerHTML = "We have a broad range of products available. </br>";
}

/*function to add product to week5-2 table*/
function addData() {

    /*retrieve values entered on page*/
    var pname = document.getElementById("pname").value;
    var pmodel = document.getElementById("pmodel").value;
    var condition = document.getElementById("condition").value;
    var description = document.getElementById("description").value;
    var retail = document.getElementById("retail").value;
    var rcPrice = document.getElementById("rcPrice").value;
    var picture = document.getElementById("picture").value;

    /*form validation javascript*/
    if (pname == "" || pmodel == "" || condition == "" || description == "" || retail == "" ||
        rcPrice == "" || picture == "") {
        alert("All fields must be filled in before submitting survey.");
        return false;
    }

    /*create variables to be used for new product*/
    var table = document.getElementById("productTable");
    var newProdRow = table.insertRow(2);
    var prod = [];
    for (i = 0; i < 9; i++) {
        prod[i] = newProdRow.insertCell(i);
        prod[i].classList.add("week5table");
    }

    /*assign values to prod array*/
    prod[0].innerHTML = '<img class="week5img" src="images/greenButton.png" alt="Green Button">';
    prod[1].innerHTML = '<img class="week5img" src="images/heart.png" alt="Heart" style="width:100%">';
    prod[2].innerHTML = pname;
    prod[3].innerHTML = pmodel;
    prod[4].innerHTML = condition;
    prod[5].innerHTML = description;
    prod[6].innerHTML = retail;
    prod[7].innerHTML = rcPrice;
    prod[8].innerHTML = '<a href="images/' + picture + '"/><img class="thumbnail" src="images/' + picture + '"/></a>';

    /*add styles to selected columns*/
    prod[6].classList.add("retailPrice");
}