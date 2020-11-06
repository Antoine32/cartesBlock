class Triangle extends BlockType {
  constructor(x, y) {
    super(x, y, "triangle");
    this.add(0, 0);
    this.add(1, 1);
    this.add(2, 0);
    this.col = color(0, 155, 155, 200);
    this.points = 35;
  }
}
