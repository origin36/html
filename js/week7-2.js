/*variable declaration*/
var canvas;
var ctx;
var w;
var h;
var hasLamp = 0;

/*function to initialize canvas*/
function init() {
    canvas = document.getElementById("week7canvas");
    canvas.style.backgroundColor = "white";
    canvas.width = 1800;
    canvas.height = 1000;
    canvas.style.width = "900px";
    canvas.style.height = "500px";
    ctx = canvas.getContext("2d");
    ctx.scale(2, 2);
    w = canvas.width;
    h = canvas.height;
}

/*lamp 1*/
function drawOne() {
    clearLamp();
    hasLamp = 1;
    init();
    drawBase1();
    drawStem1();
    drawShade1();
    ctx.font = '40px Chiller';
    ctx.strokeText('Lamp One', 650, 310);
    ctx.strokeText('OFF', 650, 350);
}
/*lamp 2*/

function drawTwo() {
    clearLamp();
    hasLamp = 1;
    init();
    drawBase2();
    drawStem2();
    drawShade2();
    ctx.font = '40px Chiller';
    ctx.strokeText('Lamp Two', 650, 310);
    ctx.strokeText('OFF', 650, 350);
}

/*random lamp*/
function drawRandom() {
    clearLamp();
    hasLamp = 1;
    init();

    /*assign a random number between 0 and 1 for each lamp part*/
    var randBase = Math.floor(Math.random() * 2);
    var randStem = Math.floor(Math.random() * 2);
    var randShade = Math.floor(Math.random() * 2);

    /*if else statement to display random base*/
    if (randBase) {
        drawBase1();
    }
    else {
        drawBase2();
    }

    /*if else statement to display random stem*/
    if (randStem) {
        drawStem1();
    }
    else {
        drawStem2();
    }

    /*if else statemnt to display random shade*/
    if (randShade) {
        drawShade1();
    }
    else {
        drawShade2();
    }
    ctx.font = '40px Chiller';
    ctx.strokeText('Random Lamp', 650, 310);
    ctx.strokeText('OFF', 650, 350);
}

/*function to turn on light*/
function light() {
    if (!hasLamp) {
        alert("There is no lamp.")
        return false;
    }
    else {
        var canvas = document.getElementById("week7canvas");
        ctx.clearRect(650, 320, 300, 100);
        canvas.style.backgroundColor = "yellow";
        ctx.font = '40px Chiller';
        ctx.strokeText('ON', 650, 350);
    }
}

/*function to turn off light*/
function dark() {
    if (!hasLamp) {
        alert("There is no lamp.")
        return false;
    }
    else {
        var canvas = document.getElementById("week7canvas");
        canvas.style.backgroundColor = "white";
        ctx.clearRect(650, 320, 300, 100);
        ctx.font = '40px Chiller';
        ctx.strokeText('OFF', 650, 350);
    }
}

/*funciton to draw lamp base 1*/
function drawBase1() {
    init();
    ctx.beginPath();
    ctx.moveTo(350, 400);
    ctx.lineTo(350, 425);
    ctx.ellipse(450, 425, 100, 20, 0, Math.PI, 2 * Math.PI, true);
    ctx.lineTo(550, 400);
    ctx.ellipse(450, 400, 100, 20, 0, 0, Math.PI);
    ctx.fillStyle = "silver";
    ctx.fill();
    ctx.ellipse(450, 400, 100, 20, 0, Math.PI, 3 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

/*function to draw lamp base 2*/
function drawBase2() {
    init();
    ctx.beginPath();
    ctx.moveTo(450, 375);
    ctx.lineTo(550, 400);
    ctx.lineTo(450, 425);
    ctx.lineTo(350, 400);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.lineTo(350, 425);
    ctx.lineTo(450, 450);
    ctx.lineTo(550, 425);
    ctx.lineTo(550, 400);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

/*function to draw lamp stem 1*/
function drawStem1() {
    ctx.beginPath();
    ctx.moveTo(440, 400);
    ctx.lineTo(440, 200);
    ctx.lineTo(460, 200);
    ctx.lineTo(460, 400);
    ctx.arcTo(450, 410, 440, 400, 14);
    ctx.closePath();
    ctx.fillStyle = "purple";
    ctx.fill();
    ctx.stroke();
}

/*function to draw lamp stem 2*/
function drawStem2() {
    ctx.beginPath();
    ctx.moveTo(440, 400);
    ctx.arcTo(340, 300, 440, 200, 140);
    ctx.lineTo(460, 200);
    ctx.arcTo(560, 300, 460, 400, 140);
    ctx.arcTo(450, 410, 440, 400, 14);
    ctx.closePath();
    ctx.fillStyle = "pink";
    ctx.fill();
    ctx.stroke();
}

/*function to draw lamp shade 1*/
function drawShade1() {
    ctx.beginPath();
    ctx.moveTo(500, 60);
    ctx.ellipse(450, 60, 50, 10, 0, 0, 2 * Math.PI);
    ctx.lineTo(700, 220);
    ctx.ellipse(450, 220, 250, 40, 0, 0, Math.PI);
    ctx.lineTo(400, 60);
    ctx.fillStyle = "lime";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

/*function to draw lamp shade 2*/
function drawShade2() {
    ctx.beginPath();
    ctx.moveTo(550, 60);
    ctx.ellipse(450, 60, 100, 20, 0, 0, 2 * Math.PI);
    ctx.moveTo(550, 60);
    ctx.lineTo(550, 200);
    ctx.ellipse(450, 200, 100, 20, 0, 0, Math.PI);
    ctx.lineTo(350, 60);
    ctx.fillStyle = "aqua";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

/*function to clear canvas*/
function clearLamp() {
    init();
    ctx.clearRect(0, 0, w, h);
    hasLamp = 0;
}