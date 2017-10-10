import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './PageShell.css';

const logo = '';

const PageShell = (Page) => {
  return props => (
    <div className="page">
      <ReactCSSTransitionGroup
        transitionAppear
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName="Slide"
      >
        <Page {...props} />
      </ReactCSSTransitionGroup>
    </div>
  );
};
export default PageShell;
