let canvas;
let canvasContext;


window.onload = function () {

    canvas = document.getElementById("gameCanvas");
    canvasContext = canvas.getContext("2d");

    initInput();
    carInit();
    loadImages();





}
function loadingDoneSoStartGame() {
    let framesPerSecond = 30;
    setInterval(callBoth, 1000 / framesPerSecond);
}


function drawEverything() {



    //TRAcks
    drawTracks();


    //Car
    carDraw();
}


function callBoth() {
    moveEverything();
    drawEverything();
}


function moveEverything() {

    carMove();
}

