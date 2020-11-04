let list = [];
let globalScale = 135;
let sep = 0.0;
let num = 0;

let positionUp;
let positionDown;

let last;
let lastMouse;

let upCol;
let downCol;

let json = [];

document.addEventListener('contextmenu', event => event.preventDefault());

function setup() {
  createCanvas(windowWidth, windowHeight - 4);
  frameRate(30);
  globalScale = min(height / 6, width / 8);
  colorMode(RGB);

  last = millis();
  lastMouse = createVector(mouseX, mouseY);

  upCol = color(0);
  downCol = color(0);

  textAlign(RIGHT, TOP);

  list.push(new Arragement(1));
  list[0].add(new Carrer(0, 0), 0, 1);
  // num = 0;

  list.push(new Arragement(1));
  list[1].add(new RectangleGrand(0, 0), 90, 1);
  // num = 1;

  list.push(new Arragement(1));
  list[2].add(new TrapesePetit(0, 0), -90, -1);
  list[2].add(new TrapesePetit(1 + sep, 0), -90, 1);
  // num = 2;

  list.push(new Arragement(1));
  list[3].add(new TrapesePetit(0, 0), 0, 1);
  list[3].add(new TrapesePetit(2 + sep, 0), 0, -1);
  // num = 3;

  list.push(new Arragement(1));
  list[4].add(new Carrer(0, 0), 0, 1);
  list[4].add(new Carrer(1 + sep, 0), 0, 1);
  list[4].add(new Triangle(0, 1 + sep), 0, 1);
  // num = 4;

  list.push(new Arragement(2));
  list[5].add(new Carrer(0, 0), 0, 1);
  list[5].add(new Carrer(4.0 / 3.0, 0), 0, 1);
  list[5].add(new Carrer(2.0 / 3.0, 1 + sep), 0, 1);
  // num = 5;

  list.push(new Arragement(2));
  list[6].add(new Carrer(0, 0), 0, 1);
  list[6].add(new Carrer(3, 0), 0, 1);
  list[6].add(new RectangleGrand(0, 1 + sep), 0, 1);
  // num = 6;

  list.push(new Arragement(2));
  list[7].add(new RectanglePetit(0, 0), 90, 1);
  list[7].add(new Triangle(-0.5, 3 + sep), 0, 1);
  // num = 7;

  list.push(new Arragement(2));
  list[8].add(new Carrer(0, 0), 0, 1);
  list[8].add(new Carrer(1.0 + 1.0 / 3.0, 0), 0, 1);
  list[8].add(new Carrer(2.0 / 3.0, 1 + sep), 0, 1);
  list[8].add(new Triangle(2.0 / 3.0 - 0.5, 2 + 2 * sep), 0, 1);
  // num = 8;

  list.push(new Arragement(2));
  list[9].add(new TrapesePetit(0, 0), 0, 1);
  list[9].add(new TrapesePetit(2 + sep, 0), 0, -1);
  list[9].add(new Triangle(1 + sep / 2, 1 + sep), 0, 1);
  // num = 9;

  list.push(new Arragement(2));
  list[10].add(new RectangleGrand(0, 0), 0, 1);
  list[10].add(new Carrer(0, 1 + sep), 0, 1);
  list[10].add(new Carrer(3, 1 + sep), 0, 1);
  list[10].add(new RectanglePetit(0.5, 2 + 2 * sep), 0, 1);
  // num = 10;

  list.push(new Arragement(2));
  list[11].add(new RectanglePetit(0, 0), 0, 1);
  list[11].add(new Carrer(0.5, 1 + sep), 0, 1);
  list[11].add(new Carrer(1.5, 1 + sep), 0, 1);
  list[11].add(new RectangleGrand(-0.5, 2 + 2 * sep), 0, 1);
  // num = 11;

  list.push(new Arragement(3));
  list[12].add(new RectanglePetit(0, 0), 0, 1);
  list[12].add(new RectanglePetit(0, 1 + sep), 90, 1);
  list[12].add(new Triangle(1 + sep, 1 + sep), 135, 1);
  // num = 12;

  list.push(new Arragement(3));
  list[13].add(new TrapesePetit(0, 0), -90, -1);
  list[13].add(new TrapesePetit(3, 0), -90, 1);
  list[13].add(new RectangleGrand(0, 2 + sep), 0, 1);
  list[13].add(new Carrer(1.5, 3 + 2 * sep), 0, 1);
  // num = 13;

  list.push(new Arragement(3));
  list[14].add(new Triangle(0, 0), 0, 1);
  list[14].add(new Triangle(2 + sep, 0), 0, 1);
  list[14].add(new RectanglePetit(0.5 + sep / 2, 1 + sep), 0, 1);
  // num = 14;

  list.push(new Arragement(3));
  list[15].add(new TrapesePetit(0, 0), 180, -1);
  list[15].add(new Carrer(2 + sep, 0), 0, 1);
  list[15].add(new Carrer(1, 1 + sep), 0, 1);
  list[15].add(new TrapesePetit(2 + sep, 1 + sep), 0, -1);
  list[15].add(new Triangle(1, 2 + 2 * sep), 0, 1);
  // num = 15;

  list.push(new Arragement(3));
  list[16].add(new TrapesePetit(0, 0), -90, -1);
  list[16].add(new RectangleGrand(1 + sep, 0), 90, 1);
  list[16].add(new TrapesePetit(2 + 2 * sep, 0), -90, 1);
  list[16].add(new Triangle(0.5, 4 + sep), 0, 1);
  // num = 16;

  list.push(new Arragement(5));
  list[17].add(new TrapesePetit(0, 0), -90, -1);
  list[17].add(new TrapesePetit(2, 0), -90, 1);
  list[17].add(new RectanglePetit(0, 2 + sep), 0, 1);
  list[17].add(new Carrer(1, 3 + 2 * sep), 0, 1);
  list[17].add(new Triangle(0.5, 4 + 3 * sep), 0, 1);
  // num = 17;

  list.push(new Arragement(4));
  list[18].add(new Carrer(0, 0), 0, 1);
  list[18].add(new Carrer(1 + sep, 0), 0, 1);
  list[18].add(new RectanglePetit(-0.5, 1 + sep), 0, 1);
  list[18].add(new RectangleGrand(-1, 2 + 2 * sep), 0, 1);
  list[18].add(new RectanglePetit(-0.5, 3 + 3 * sep), 0, 1);
  list[18].add(new Triangle(0, 4 + 4 * sep), 0, 1);
  // num = 18;

  list.push(new Arragement(4));
  list[19].add(new RectanglePetit(0, 0), 90, 1);
  list[19].add(new Carrer(1 + sep, 0), 0, 1);
  list[19].add(new RectanglePetit(2 + 2 * sep, 0), 90, 1);
  list[19].add(new TrapeseGrand(-0.5 + sep / 3, 3 + sep), 0, 1);
  list[19].add(new Triangle(0.5 + sep / 3, 4 + 2 * sep), 0, 1);
  // num = 19;

  list.push(new Arragement(5));
  list[20].add(new TrapesePetit(0, 0), -90, -1);
  list[20].add(new TrapesePetit(3, 0), -90, 1);
  list[20].add(new RectangleGrand(0, 2 + sep), 0, 1);
  list[20].add(new Carrer(0.5, 3 + 2 * sep), 0, 1);
  list[20].add(new Carrer(2.5, 3 + 2 * sep), 0, 1);
  list[20].add(new RectanglePetit(0.5, 4 + 3 * sep), 0, 1);
  list[20].add(new Triangle(1, 5 + 4 * sep), 0, 1);
  // num = 20;

  list.push(new Arragement(4));
  list[21].add(new RectanglePetit(0, 0), 0, 1);
  list[21].add(new Carrer(0.5, 1 + sep), 0, 1);
  list[21].add(new Carrer(1.5, 1 + sep), 0, 1);
  list[21].add(new RectangleGrand(-0.5, 2 + 2 * sep), 0, 1);
  list[21].add(new TrapesePetit(-0.5 - sep / 3, 3 + 3 * sep), 0, 1);
  list[21].add(new TrapesePetit(1.5 + 2 * sep / 3, 3 + 3 * sep), 0, -1);
  list[21].add(new Triangle(0.5, 4 + 4 * sep), 0, 1);
  // num = 21;

  list.push(new Arragement(6));
  list[22].add(new Triangle(0, 0), 0, 1);
  list[22].add(new TrapesePetit(2 + sep, 0), 0, 1);
  list[22].add(new Carrer(4 + 2 * sep, 0), 0, 1);
  list[22].add(new TrapesePetit(3 + sep, 1 + sep), 0, -1);
  list[22].add(new RectangleGrand(1 + sep, 2 + 2 * sep), 0, 1);
  list[22].add(new Triangle(1 + sep, 3 + 3 * sep), 0, 1);
  list[22].add(new RectanglePetit(3 + 2 * sep, 3 + 3 * sep), 90, 1);
  // num = 22;

  list.push(new Arragement(6));
  list[23].add(new RectanglePetit(0, 0), 90, 1);
  list[23].add(new Carrer(1 + sep, 0), 0, 1);
  list[23].add(new RectanglePetit(2 + 2 * sep, 0), 90, 1);
  list[23].add(new TrapeseGrand(-0.5 + sep / 3, 3 + sep), 0, 1);
  list[23].add(new RectangleGrand(-0.5 + sep / 3, 4 + 2 * sep), 0, 1);
  list[23].add(new Carrer(-0.5, 5 + 3 * sep), 0, 1);
  list[23].add(new Triangle(0.5 + sep / 3, 5 + 3 * sep), 0, 1);
  list[23].add(new Carrer(2.5 + sep, 5 + 3 * sep), 0, 1);
  // num = 23;

  list.push(new Arragement(6));
  list[24].add(new RectangleGrand(0, 0), 90, 1);
  list[24].add(new Carrer(1 + sep, 0), 0, 1);
  list[24].add(new RectanglePetit(2 + 2 * sep, 0), 90, 1);
  list[24].add(new TrapesePetit(3 + 3 * sep, 0), -90, 1);
  list[24].add(new Carrer(4 + 4 * sep, 0), 0, 1);
  list[24].add(new RectanglePetit(1 + sep, 1 + sep), 90, 1);
  list[24].add(new TrapesePetit(3 + 4 * sep, 1 + sep), 180, -1);
  list[24].add(new Triangle(3 + 4 * sep, 2 + 2 * sep), 0, 1);
  list[24].add(new Carrer(0, 4 + sep), 0, 1);
  list[24].add(new Triangle(-0.5, 5 + 2 * sep), 0, 1);
  // num = 24;

  /*for (let i = 0; i < list.length; i++) {
    list[i].mult(globalScale);
  }*/

  for (let i = 0; i < list.length; i++) {
    json.push(list[i].getInfo());
  }

  // saveJSONArray(json, "info.json");
  console.log("Pour sauvegarder les donner en format json écriver: saveData()");

  positionUp = createVector(0, 0);
  collisionUp = createVector(0, 0);

  positionDown = createVector(0, 0);
  collisionDown = createVector(0, 0);

  onUpdate();
}

function saveData() {
  saveJSONArray(json, "data.json");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight - 4);
  globalScale = min(height / 6, width / 8);
  onUpdate();
}

function draw() {
  tick();
}

function tick() {
  let elapsed = millis() - last;

  lastMouse.set(mouseX, mouseY);

  let distUp = createVector(mouseX - positionUp.x, mouseY - positionUp.y);
  let distDown = createVector(mouseX - positionDown.x, mouseY - positionDown.y);

  let can = (elapsed > 100);

  if (collision(distUp) && can) {
    if (upCol['levels'][0] == 0) {
      cursor('pointer');
      upCol = color(100);
      downCol = color(0);
      onUpdate();
    }
  } else if (collision(distDown) && can) {
    if (downCol['levels'][0] == 0) {
      cursor('pointer');
      upCol = color(0);
      downCol = color(100);
      onUpdate();
    }
  } else if (upCol['levels'][0] + downCol['levels'][0] >= 100) {
    cursor('default');
    upCol = color(0);
    downCol = color(0);
    onUpdate();
  }
}

function drawUp() {
  push();
  stroke(upCol);
  strokeWeight(globalScale / 4);
  translate(positionUp.x + globalScale * 0.5, positionUp.y + globalScale * 0.2);

  line(0, 0, 0, globalScale * 0.6);
  line(0, 0, -globalScale / 4, globalScale / 4);
  line(0, 0, globalScale / 4, globalScale / 4);
  pop();
}

function drawDown() {
  push();
  stroke(downCol);
  strokeWeight(globalScale / 4);
  translate(positionDown.x + globalScale * 0.5, positionDown.y + globalScale * 0.2);

  line(0, 0, 0, globalScale * 0.6);
  translate(0, globalScale * 0.6);
  line(0, 0, -globalScale / 4, -globalScale / 4);
  line(0, 0, globalScale / 4, -globalScale / 4);
  pop();
}

function onUpdate() {
  background(255);

  positionUp.set(width - width % globalScale - globalScale - 1, (height / 2) + ((height / 2.0) % globalScale));
  positionDown.set(positionUp.x, positionUp.y + globalScale);

  push();
  fill(0);
  translate(width - width % globalScale, (height % globalScale) + globalScale * 0.1);

  textSize(globalScale);
  text("# " + (num + 1), 0, 0);

  textSize(globalScale / 2);
  text(list[num].points + " Pts.", 0, globalScale * 0.9);
  text("Bonus: " + list[num].pointsDifficulter, 0, globalScale * 1.5);
  pop();

  drawUp();
  drawDown();

  push();
  stroke(0);
  for (let x = -1; x < width; x += globalScale) {
    line(x, 0, x, height);
  }

  for (let y = height; y >= 0; y -= globalScale) {
    line(0, y, width, y);
  }
  pop();

  push();
  translate(globalScale - 1, height);
  stroke(255, 0, 0);
  line(0, -width, 0, width);
  line(-height, 0, height, 0);

  scale(globalScale, globalScale);
  strokeWeight(1 / globalScale);
  list[num].display();
  pop();
}

function keyPressed() {
  switch (keyCode) {
    case UP_ARROW:
    case RIGHT_ARROW:
      plus();
      break;
    case DOWN_ARROW:
    case LEFT_ARROW:
      moins();
      break;
  }
}

function mousePressed() {
  tick();
  let distUp = createVector(mouseX - positionUp.x, mouseY - positionUp.y);
  let distDown = createVector(mouseX - positionDown.x, mouseY - positionDown.y);

  if (collision(distUp) && upCol['levels'][0] >= 100) {
    upCol = color(0);
    last = millis();
    plus();
  } else if (collision(distDown) && downCol['levels'][0] >= 100) {
    downCol = color(0);
    last = millis();

    moins();
  }
}

function collision(vec) {
  return vec.x >= 0 && vec.y >= 0 && vec.x < globalScale && vec.y < globalScale;
}

function plus() {
  num++;
  num %= list.length;
  onUpdate();
}

function moins() {
  num--;
  if (num < 0) {
    num = list.length - 1;
  }
  onUpdate();
}