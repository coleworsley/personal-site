export default class Particle {
  constructor(obj) {
    this.x = obj.x;
    this.y = obj.y;
    this.radius = obj.radius;
    this.xVelocity = obj.xVelocity;
    this.yVelocity = obj.yVelocity;
    this.closest = [];
  }

  move(size) {
    let { height, width } = size;
    const buffer = 50;
    if (this.x + this.xVelocity >= width + buffer || this.x + this.xVelocity <= -buffer) {
      this.xVelocity = -this.xVelocity;
    }

    if (this.y + this.yVelocity >= height + buffer || this.y + this.yVelocity <= -buffer) {
      this.yVelocity = -this.yVelocity;
    }

    this.x += this.xVelocity;
    this.y += this.yVelocity;
  }


  render(context, size) {
    // Move
    this.move(size)

    // Draw
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fillStyle = '#FFF';
    context.fill();
    context.closePath();
  }
}
