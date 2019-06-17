var draw = SVG("game").size(480, 360);
var background = draw.rect(480, 360).fill("#dde3e1")

var borderL = draw.line(30, 0, 30, 480).stroke({
	stroke: "black",
	width: 10
})
var borderR = draw.line(450, 0, 450, 480).stroke({
	stroke: "black",
	width: 10
})
var borderM = draw.line(240, 0, 240, 480).stroke({
	stroke: "black",
	width: 10,
	dasharray: [40, 20]
})
var car = draw.image("car.png", 50, 100).move(215, 260)
var wall = draw.image("wall.png", 106, 20).move(80, 0)
var stepCar = 0
var score = 0
var text = draw.text("0").move(400, 20).fill(
	"white"
).font({
	size: 40
})




function update() {
	wall.dy(1)
	if (wall.y() == draw.height()) {
		wall.y(0)
		wall.x(getRandomInt(30, 344))
		score++
		text.text("" + score)
	}




	car.dx(stepCar)
	if (car.x() + car.width() >= 450) {
		car.x(450 - car.width())
	}
	if (car.x() <= 30) {
		car.x(30)
	}
	if (borderM.y() == 0) {
		borderM.dy(5)
	} else {
		borderM.dy(-5)
	}
	if (wall.height() + wall.y() >= car.y() && wall.width() + wall.x() >= car.x() && wall.x() <= car.x()) {
     alert("Произошло ДТП")
		clearInterval(id_interval)
	}
	
}
var id_interval = setInterval(update, 10)
document.onkeydown = function (event) {
	if (event.keyCode == 37) {
		stepCar = -5
	}

	if (event.keyCode == 39) {
		stepCar = 5

	}

}
document.onkeyup = function (event) {
	stepCar = 0
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
