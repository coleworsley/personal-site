import React from 'react';
import './CarouselFooter.css';

const CarouselFooter = (props) => {
  const { projects, index, goToProject } = props;
  const cards = projects.map((project, i) => {
    const active = index === i ? 'active' : null;
    const { image, title, id } = project;

    return (
      <img
        src={image}
        alt={`${title.text}${title.span}`}
        className={`footer-image ${id}`}
        id={active}
        onClick={() => goToProject(i)}
      />
    );
  });

  centerElement(projects, index);

  return (
    <footer className="carousel__footer">
      { cards }
    </footer>
  );
};

function centerElement(projects, index) {
  const node = document.querySelector(`.footer-image.${projects[index].id}`);

  if (node) {
    const totalWidth = node.parentElement.scrollWidth;
    const viewWidth = node.parentElement.clientWidth;
    const nodeLeft = node.offsetLeft;
    const nodeWidth = node.offsetWidth;

    const center = nodeLeft + (nodeWidth / 2);
    const frame = center - (viewWidth / 2);

    node.parentElement.scrollTo(frame, 0);
  }
}


export default CarouselFooter;
