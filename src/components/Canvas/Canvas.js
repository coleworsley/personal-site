import React, { Component } from 'react';
import './Canvas.css';
import Particle from './Particle';

export default class Canvas extends Component {
  constructor() {
    super();
    this.state = {
      size: {
        width: window.innerWidth,
        height: 400,
      },
      context: null
    }
    this.particles = [];
    this.minVelocity = 1;
    this.maxVelocity = 3;
    this.radius = 1;
    this.padding = 5;
  }

  componentDidMount() {
    const context = this.refs.canvas.getContext('2d');
    this.setState({ context: context });
    this.createParticles(5);
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
    const { context,  size: { width, height }} = this.state
    context.clearRect(0, 0, width, height);
    this.updateParticles();
    this.drawLines(context);

    requestAnimationFrame(() => {this.update()});
  }

  updateParticles() {
    const { context, size } = this.state;
    this.particles.forEach(p => {
      p.render(context, size)
    });
  }

  drawLines(context) {
    const particles = this.particles;
    particles.forEach((p, i) => {
      const nextP = particles.length > (i + 1) ?
        particles[i + 1] : particles[0];
      context.beginPath();
      context.moveTo(p.x, p.y);
      context.lineTo(nextP.x, nextP.y);
      context.strokeStyle="#fff";
      context.stroke();

      // debugger
    });
  }

  render() {
    const style = {
      backgroundColor: '#222',
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
  return Math.floor(Math.random() * (max - min)) + min;
}

const randomizeVelocity = (min, max) => {
  const random = Math.floor(Math.random() * (max * 2)) - max;

  return Math.abs(random) >= min ? random : min;
}
