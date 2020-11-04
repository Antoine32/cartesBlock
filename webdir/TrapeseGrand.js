class TrapeseGrand extends BlockType {
  constructor(x, y) {
    super(x, y, "t1+r2+t1");
    this.add(0, 0);
    this.add(1, 1);
    this.add(3, 1);
    this.add(4, 0);
    this.col = color(155, 0, 155, 200);
    this.points = 50;
  }
}
