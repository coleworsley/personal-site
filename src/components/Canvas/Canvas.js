import React, { Component } from 'react';
import Particle from './Particle';
import './Canvas.css';


const randomize = (min, max) => {
  return Math.floor((Math.random() * max) * 100) / 100;
};

const randomizeVelocity = (min, max) => {
  const random = (Math.random() * max * 2) - max;

  return Math.floor((Math.abs(random) >= min ? random : min) * 100) / 100;
};


export default class Canvas extends Component {
  constructor() {
    super();
    this.state = {
      size: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      context: null,
    };
    this.particles = [];
    this.minVelocity = 0.2;
    this.maxVelocity = 0.6;
    this.maxRadius = 0.5;
    this.padding = -50;
    this.fps = 50;
    this.timeInterval = new Date();
  }

  componentDidMount() {
    const context = this.refs.canvas.getContext('2d');
    this.createParticles(100);
    requestAnimationFrame(() => { this.update(); });
    this.setState({ context });
  }

  createParticles(count) {
    const { width, height } = this.state.size;
    const {
      minVelocity,
      maxVelocity,
      maxRadius,
      padding,
    } = this;

    for (let i = 0; i < count; i += 1) {
      const radius = randomize(0.7, maxRadius);
      const position = {
        x: randomize(radius + padding, width - radius - padding),
        y: randomize(radius + padding, height - radius - padding),
        radius,
        xVelocity: randomizeVelocity(minVelocity, maxVelocity),
        yVelocity: randomizeVelocity(minVelocity, maxVelocity),
      };
      const particle = new Particle(position);
      this.particles.push(particle);
    }
  }

  update() {
    const newTime = new Date();
    const { context, size: { width, height } } = this.state;

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
    this.particles.forEach((p) => {
      p.render(context, size);
    });
  }

  findClosestParticles() {
    const { particles } = this;
    particles.forEach((currentP) => {
      const currentArr = particles.map((innerP) => {
        const dx = currentP.x - innerP.x;
        const dy = currentP.y - innerP.y;
        const dist = Math.abs(Math.sqrt((dx * dx) + (dy * dy)));
        return {
          distance: dist,
          x: innerP.x,
          y: innerP.y,
        };
      });

      currentP.closest = currentArr
        .filter(particle => particle.distance < 150)
        .map(particle => Object.assign(particle, {
          opacity: (1 - (particle.distance / 150)) / 2,
        }));
    });
  }

  drawLines(context) {
    this.findClosestParticles();
    const { particles } = this;

    particles.forEach((p) => {
      p.closest.forEach((innerP) => {
        context.beginPath();
        context.moveTo(p.x, p.y);
        context.lineTo(innerP.x, innerP.y);
        context.strokeStyle = `rgba(129, 128, 127, ${innerP.opacity})`;
        context.stroke();
      });
    });
  }

  render() {
    const style = {
      // backgroundColor: '#535353',
      backgroundColor: '#fff',
    };

    return (
      <canvas
        className="canvas"
        ref="canvas"
        width={this.state.size.width}
        height={this.state.size.height}
        style={style}
      />
    );
  }
}
