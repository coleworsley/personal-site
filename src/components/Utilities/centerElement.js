const smoothScroll = (frame, node) => {
  node.parentElement.scrollTo(frame, 0);
};

const centerElement = (projects, index) => {
  const node = document.querySelector(`.${projects[index].id}`);

  if (node) {
    const viewWidth = node.parentElement.clientWidth;
    const nodeLeft = node.offsetLeft;
    const nodeWidth = node.offsetWidth;

    const center = nodeLeft + (nodeWidth / 2);
    const frame = center - (viewWidth / 2);

    smoothScroll(frame, node);
  }
};

export default centerElement;
