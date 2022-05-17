const canvas = document.getElementById("canvas");
const display = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

window.onresize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function rect(x, y, width, height, color) {
    display.fillStyle = color;
    display.fillRect(x, y, width, height);
}

let rain = [];

function createNewRaindrop() {
    let dir, y;
    if (randomNumber(1, 2) == 1) {
        dir = 1;
        y = randomNumber(30, 100) * -1
    } else {
        dir = -1;
        y = randomNumber(canvas.height + 30, canvas.height + 100);
    }
    let raindrop = {
        dir: dir,
        width: randomNumber(1, 4)/2,
        color: `rgb(3, 157, 252)`,
        height: randomNumber(5, 40),
        movement: dir * randomNumber(1, 3),
        x: randomNumber(0, canvas.width),
        y: y
    }
    rain.push(raindrop);
}

for (let i = 0; i < 10; i++) {
    createNewRaindrop();
}

function draw() {
    display.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < rain.length; i++) {
        let drop = rain[i];
        rect(drop.x, drop.y, drop.width, drop.height, drop.color);
        drop.y += drop.movement;
    }
    if (randomNumber(1, 17) == 7) {
        createNewRaindrop();
    }

}

setInterval(draw, 1000/60);