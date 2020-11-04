class Arragement {
  constructor(difficulter) {
    this.listBlock = [];
    this.points = 0;
    this.pointsDifficulter = evaluation(difficulter);
  }

  display() {
    for (let i = 0; i < this.listBlock.length; i++) {
      this.listBlock[i].display();
    }
  }

  add(block, rotation, inverse) {
    this.points += block.points;
    block.rotate(rotation, inverse);
    this.listBlock.push(block);
  }

  mult(mult) {
    for (let i = 0; i < this.listBlock.length; i++) {
      this.listBlock[i].mult(mult);
    }
  }

  getInfo() {
    this.json = [];

    for (let i = 0; i < this.listBlock.length; i++) {
      this.json.push(this.listBlock[i].getInfo());
    }

    return this.json;
  }

  saveData() {
    saveJSONArray(this.json, "carte.json");
  }
}

function evaluation(difficulter) {
  switch (difficulter) {
    case 1: return 20;
    case 2: return 30;
    case 3: return 45;
    case 4: return 60;
    case 5: return 100;
    case 6: return 200;
  }
}