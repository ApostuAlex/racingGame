function colorRect(leftX, topY, width, height, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);
}

//Functie pentru bila
function colorCircle(centerX, centerY, radius, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
}

function drawBitmapCenteredAtLocationWithRotation(graphic, atX, atY, withAngle) {

    canvasContext.drawImage(graphic, atX - graphic.width / 2, atY - graphic.height / 2);
    canvasContext.save();	//	allows	us	to	undo	translate	movement	and	rotate	spin
    canvasContext.translate(atX, atY);	//	sets	the	point	where	our	graphic	will	go
    canvasContext.rotate(withAngle);	//	sets	the	rotation
    canvasContext.drawImage(graphic, -graphic.width / 2, -graphic.height / 2);	//	center,	draw
    canvasContext.restore();	//	undo	the	translation	movement	and	rotation	since	save(

}