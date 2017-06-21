export default class Particle {
  constructor(obj) {
    this.x = obj.x;
    this.y = obj.y;
    this.radius = obj.radius;
    this.xVelocity = obj.xVelocity;
    this.yVelocity = obj.yVelocity;
  }

  move(size) {
    const { height, width } = size
    if (this.x + this.xVelocity >= width || this.x + this.xVelocity <= 0) {
      this.xVelocity = -this.xVelocity;
    }

    if (this.y + this.yVelocity >= height || this.y + this.yVelocity <= 0) {
      this.yVelocity = -this.yVelocity;
    }

    this.x += this.xVelocity;
    this.y += this.yVelocity;
  }


  render(context, size) {
    // Move
    this.move(size)

    // Draw
    // context.beginPath();
    // context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    // context.fillStyle = '#FFF';
    // context.fill();
    // context.closePath();
  }
}
