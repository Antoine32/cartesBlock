class TrapesePetit extends BlockType {
  constructor(x, y) {
    super(x, y, "t1+r1");
    this.add(0, 0);
    this.add(1, 1);
    this.add(2, 1);
    this.add(2, 0);
    this.col = color(155, 155, 0, 200);
    this.points = 25;
  }
}
