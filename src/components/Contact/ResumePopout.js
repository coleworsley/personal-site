import React, { Component } from 'react';

const initialState = { hidden: true };

class ResumePopout extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  render() {
    return (
      <div className="resume-popout">
        <a href="https://drive.google.com/file/d/0BxokiILyz4-MWS1rWVUwcVVhNm8/view?usp=sharing">Resume</a>
      </div>
    );
  }
}

export default ResumePopout;
