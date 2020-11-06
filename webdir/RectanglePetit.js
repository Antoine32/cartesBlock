class RectanglePetit extends BlockType {
  constructor(x, y) {
    super(x, y, "petit rectangle");
    this.add(0, 0);
    this.add(0, 1);
    this.add(3, 1);
    this.add(3, 0);
    this.col = color(0, 0, 155, 200);
    this.points = 30;
  }
}
