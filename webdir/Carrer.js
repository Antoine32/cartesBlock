class Carrer extends BlockType {
  constructor(x, y) {
    super(x, y, "r1");
    this.add(0, 0);
    this.add(0, 1);
    this.add(1, 1);
    this.add(1, 0);
    this.col = color(155, 0, 0, 200);
    this.points = 10;
  }
}
