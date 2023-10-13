let rectXpos = []
let rectYpos = []
let rectXWidth = []
let rectYWidth = []
let cirX = []
let cirY = []
let cirD = []
let redA = []
let greenA = []
let blueA = []
let amount = 4

function setup() {
  createCanvas(800, 600);
  strokeWeight(4)
}

function draw() {
  background(220);
  for (let i = 0; i < amount; i++) {

    rect(rectXpos[i], rectYpos[i], rectXWidth[i], rectYWidth[i])
    fill(redA[i], blueA[i], greenA[i])
    circle(cirX[i], cirY[i], cirD[i])
  }
}

function keyPressed() {
  if (keyCode == 8) {
    amount = (Math.floor(Math.random(1) * 10))
    cirX = [], cirY = [], cirD = []
    redA = [], greenA = [], blueA = []
    rectXpos = [], rectYpos = [], rectXWidth = [], rectYWidth = []
    for (let i = 0; i < amount; i++) {
      rectXpos.push(Math.floor(Math.random() * 800))
      rectYpos.push(Math.floor(Math.random() * 600))
      rectXWidth.push(Math.floor(Math.random() * 300))
      rectYWidth.push(Math.floor(Math.random() * 300))
      cirX.push(Math.floor(Math.random() * 600))
      cirY.push(Math.floor(Math.random() * 600))
      cirD.push(Math.floor(Math.random() * 300))
      redA.push(random(0, 255))
      greenA.push(random(0, 255))
      blueA.push(random(0, 255))
    }
  }
}