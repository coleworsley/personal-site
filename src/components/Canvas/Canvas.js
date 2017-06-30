import React, { Component } from 'react';
import Particle from './Particle';

export default class Canvas extends Component {
  constructor() {
    super();
    this.state = {
      size: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      context: null
    }
    this.particles = [];
    this.minVelocity = .2;
    this.maxVelocity = 1;
    this.radius = 4;
    this.padding = -50;
    this.fps = 60;
    this.timeInterval = new Date();
  }

  componentDidMount() {
    const context = this.refs.canvas.getContext('2d');
    this.setState({ context: context });
    this.createParticles(100);
    requestAnimationFrame(() => {this.update()});
  }

  createParticles(count) {
    const { width, height } = this.state.size;
    const {
            minVelocity,
            maxVelocity,
            radius,
            padding,
          } = this;

    for (let i = 0; i < count; i++) {
      const position = {
        x: randomizePosition(radius + padding, width - radius - padding),
        y: randomizePosition(radius + padding, height - radius - padding),
        radius,
        xVelocity: randomizeVelocity(minVelocity, maxVelocity),
        yVelocity: randomizeVelocity(minVelocity, maxVelocity),
      }
      const particle = new Particle(position);
      this.particles.push(particle);
    }
  }

  update() {
    const newTime = new Date();
    const { context,  size: { width, height }} = this.state;

    if (newTime - this.timeInterval > 1000 / this.fps) {
      context.clearRect(0, 0, width, height);
      this.drawLines(context);
      this.updateParticles();
      this.timeInterval = newTime;
    }
    requestAnimationFrame(() => {this.update()});
  }

  updateParticles() {
    const { context, size } = this.state;
    this.particles.forEach(p => {
      p.render(context, size)
    });
  }

  findClosestParticles(num) {
    const { particles } = this;

    particles.forEach(p => {
      const currentArr = particles.map(innerP => {
        const dx = p.x - innerP.x,
              dy = p.y - innerP.y,
              dist = Math.abs(Math.sqrt(dx * dx + dy * dy));
        return {
          distance: dist,
          x: innerP.x,
          y: innerP.y,
        };
      });
      const lowest = currentArr.sort((a, b) => {
        return a.distance - b.distance
      }).filter((p, i) => i < num);
      p.closest = lowest;
    });
  }

  drawLines(context) {
    this.findClosestParticles(4);
    const { particles } = this;

    particles.forEach(p => {
      p.closest.forEach(innerP => {
        context.beginPath();
        context.moveTo(p.x, p.y);
        context.lineTo(innerP.x, innerP.y);
        context.strokeStyle="#fff";
        context.stroke();
      })
    });
  }

  render() {
    const style = {
      backgroundColor: '#89B7ED',
    }

    return (
      <canvas ref="canvas"
        width={this.state.size.width}
        height={this.state.size.height}
        style={style}
      />
    )
  }
}


const randomizePosition = (min, max) => {
  return Math.random() * (max - min) + min;
}

const randomizeVelocity = (min, max) => {
  const random = Math.random() * (max * 2) - max;

  return Math.abs(random) >= min ? random : min;
}
