import React from 'react';
import './CarouselFooter.css';


function centerElement(projects, index) {
  const node = document.querySelector(`.${projects[index].id}`);

  if (node) {
    const viewWidth = node.parentElement.clientWidth;
    const nodeLeft = node.offsetLeft;
    const nodeWidth = node.offsetWidth;

    const center = nodeLeft + (nodeWidth / 2);
    const frame = center - (viewWidth / 2);

    node.parentElement.scrollTo(frame, 0);
  }
}


const CarouselFooter = (props) => {
  const { projects, index, goToProject } = props;
  const cards = projects.map((project, i) => {
    const active = index === i ? 'footer__card-active' : null;
    const { image, title, id } = project;
    const style = { backgroundImage: `url(${image})` };
    const className = `footer__card ${id} ${active}`;

    return (
      <div
        className={className}
        onClick={() => goToProject(i)}
        style={style}
        role="button"
        tabIndex={0}
      >
        <h3 className="hover-text">
          {`${title.text}${title.span}`}
        </h3>

      </div>
    );
  });

  centerElement(projects, index);

  return (
    <footer className="carousel__footer">
      { cards }
    </footer>
  );
};


export default CarouselFooter;
