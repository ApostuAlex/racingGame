
let carAng = -0.5 * Math.PI;
let carX = 5;
let carY = 5;
let carSpeed = 0;

const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.3;
const TURN_RATE = 0.03;
const MIN_TURN_SPEED = 0.5;



// Nu trebuie sa las o conditie, ci trebuie doar sa pun ce face functia, caci jocul este constrans de limitele lui
function carReset() {
    for (let i = 0; i < TRACK_COLS * TRACK_ROWS; i++) {
        if (trackGrid[i] == TRACK_PLAYER) {
            let tileRow = Math.floor(i / TRACK_COLS);
            let tileCol = i % TRACK_COLS;
            carX = tileCol * TRACK_W + 0.5 * TRACK_W;
            carY = tileRow * TRACK_H + 0.5 * TRACK_H;
            trackGrid[i] = TRACK_ROAD;
        }
    }
}


function carMove() {

    if (keyHeld_Gas)
        carSpeed += DRIVE_POWER;
    if (keyHeld_Reverse)
        carSpeed -= REVERSE_POWER;
    if (Math.abs(carSpeed) > MIN_TURN_SPEED) {
        if (keyHeld_TurnLeft)
            carAng -= TURN_RATE * Math.PI;
        if (keyHeld_TurnRight)
            carAng += TURN_RATE * Math.PI;
    }


    carX += Math.cos(carAng) * carSpeed;
    carY += Math.sin(carAng) * carSpeed;

    carSpeed *= GROUNDSPEED_DECAY_MULT;


    let nextX = carX + Math.cos(carAng) * carSpeed;
    let nextY = carY + Math.sin(carAng) * carSpeed;

    if (checkForTrackAtPixelCoord(nextX, nextY)) {
        carX = nextX;
        carY = nextY;
    }
    else {
        carSpeed = -1.1 * carSpeed;
    }
}

function carDraw() {

    drawBitmapCenteredAtLocationWithRotation(carPic, carX, carY, carAng);

}

function carInit(){
    
    carReset();
}
