class BlockType {
  constructor(x, y, type) {
    this.dots = [];
    this.position = createVector(x, y);
    this.pos = createVector(x, y);
    this.type = type;
    this.col = color(155, 0, 0, 200);
    this.multi = 1;
    this.rotation = 0;
    this.inverse = 1;
    this.points = 0;
    this.average = createVector(0, 0);
  }

  display() {
    push();
    stroke(255, 255, 255, 200);
    fill(this.col);
    translate(this.position.x, -this.position.y);

    beginShape();
    for (let i = 0; i < this.dots.length; i++) {
      vertex(this.dots[i].x, -this.dots[i].y);
    }
    endShape(CLOSE);

    translate(this.average.x, -this.average.y * 5);
    stroke(0);
    fill(0);
    textSize(100);
    text("a", 0, 0);

    pop();
  }

  add(x, y) {
    this.dots.push(createVector(x, y));
  }

  mult(mult) {
    this.position.div(this.multi);
    this.position.mult(mult);

    for (let i = 0; i < this.dots.length; i++) {
      this.dots[i].div(this.multi);
      this.dots[i].mult(mult);
    }

    this.multi = mult;
  }

  rotate(rotation, inverse) {
    let smallest = createVector(0, 0);

    for (let i = 0; i < this.dots.length; i++) {
      let angle = radians(rotation) + this.dots[i].heading();
      let multVector = createVector(cos(angle), sin(angle));

      let mag = this.dots[i].mag();

      this.dots[i].set(multVector.x, multVector.y);
      this.dots[i].setMag(mag);

      this.dots[i].x *= inverse;

      if (this.dots[i].x < smallest.x) {
        smallest.set(this.dots[i].x, smallest.y);
      }

      if (this.dots[i].y < smallest.y) {
        smallest.set(smallest.x, this.dots[i].y);
      }
    }

    for (let i = 0; i < this.dots.length; i++) {
      this.dots[i].sub(smallest.x, smallest.y);

      this.dots[i].x *= 1000.0;
      this.dots[i].x = round(this.dots[i].x);
      this.dots[i].x /= 1000.0;
    }

    this.rotation = rotation;
    this.inverse = inverse;

    this.pos = createVector(this.position.x, this.position.y);
    this.average = createVector(0, 0);

    for (let i = 0; i < this.dots.length; i++) {
      this.average.add(this.dots[i]);
    }
    this.average.div(this.dots.length);

    this.average.div(this.multi);
    this.pos.div(this.multi);

    this.pos.x += this.average.x - 0.5;

    this.pos.x *= 1000.0;
    this.pos.x = round(this.pos.x);
    this.pos.x /= 1000.0;

    this.position.set(this.pos.x, this.pos.y);
    this.position.x -= this.average.x - 0.5;
  }

  getInfo() {
    this.json = {
      "type": this.type,
      "position": {
        "x": this.pos.x,
        "y": this.pos.y
      },
      "rotation": int(this.rotation),
      "orientation": int(this.inverse)
    };

    return this.json;
  }

  saveData() {
    saveJSONObject(this.json, this.type + ".json");
  }
}
