export default class Line {
  constructor(obj) {
    this.x = obj.x;
    this.y = obj.y;
    this.radius = obj.radius;
    this.xVelocity = obj.xVelocity;
    this.yVelocity = obj.yVelocity;
  }

  move(size) {
    const { height, width } = size;
    if (this.x + this.xVelocity >= width || this.x + this.xVelocity <= 0) {
      this.xVelocity = -this.xVelocity;
    }

    if (this.y + this.yVelocity >= height || this.y + this.yVelocity <= 0) {
      this.yVelocity = -this.yVelocity;
    }

    this.x += this.xVelocity;
    this.y += this.yVelocity;
  }


  render(context, p) {
    context.beginPath();
    context.moveTo(p.x, p.y);
    // context.lineTo(nextP.x, nextP.y);
    // context.strokeStyle="rgba(152, 152, 196, 1)";
    context.stroke();
  }
}
