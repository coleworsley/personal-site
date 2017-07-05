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
    this.maxVelocity = .6;
    this.maxRadius = .5;
    this.padding = -50;
    this.fps = 50;
    this.timeInterval = new Date();
  }

  componentDidMount() {
    const context = this.refs.canvas.getContext('2d');
    this.createParticles(50);
    requestAnimationFrame(() => {this.update()});
    this.setState({ context: context });
  }

  createParticles(count) {
    const { width, height } = this.state.size;
    const {
            minVelocity,
            maxVelocity,
            maxRadius,
            padding,
          } = this;

    for (let i = 0; i < count; i++) {
      const radius = randomize(.7, maxRadius);
      const position = {
        x: randomize(radius + padding, width - radius - padding),
        y: randomize(radius + padding, height - radius - padding),
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
    this.findClosestParticles(8);
    const { particles } = this;

    particles.forEach(p => {
      p.closest.forEach(innerP => {
        context.beginPath();
        context.moveTo(p.x, p.y);
        context.lineTo(innerP.x, innerP.y);
        context.strokeStyle="rgba(129, 128, 127, 0.65)";
        context.stroke();
      })
    });
  }

  render() {
    const style = {
      // backgroundColor: '#535353',
      backgroundColor: '#fff',
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


const randomize = (min, max) => {
  return Math.floor((Math.random() * (max - min) + min) * 100) / 100;
}

const randomizeVelocity = (min, max) => {
  const random = Math.random() * (max * 2) - max;

  return Math.floor((Math.abs(random) >= min ? random : min) * 100) / 100;
}
