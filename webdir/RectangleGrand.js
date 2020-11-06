class RectangleGrand extends BlockType {
  constructor(x, y) {
    super(x, y, "grand rectangle");
    this.add(0, 0);
    this.add(0, 1);
    this.add(4, 1);
    this.add(4, 0);
    this.col = color(0, 155, 0, 200);
    this.points = 40;
  }
}
