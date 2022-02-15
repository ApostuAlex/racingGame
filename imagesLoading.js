let carPic = document.createElement("img");
let trackPicRoad = document.createElement("img");
let trackPicWall = document.createElement("img");

let picsToLoad = 0;

function countLoadedImageAndLaunchIfReady() {
    picsToLoad -= 1;
    if (picsToLoad == 0)
        loadingDoneSoStartGame();

}

function loadImages() {
    let imageList = [
        { varName: carPic, theFile: "player1.png" },
        { varName: trackPicRoad, theFile: "track_road.png" },
        { varName: trackPicWall, theFile: "track_wall.png" }
    ];
    picsToLoad = imageList.length;

    for (let i = 0; i < picsToLoad; i++)
        beginLoadingImage(imageList[i].varName, imageList[i].theFile);
}

function beginLoadingImage(imgVar, fileName) {
  //  picsToLoad++; 
    imgVar.onload = countLoadedImageAndLaunchIfReady();
    imgVar.src = fileName;
}
