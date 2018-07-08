import React from 'react';
import './Section.css'

const Section = (WrappedComponent) => {
  return props => (
    <section className="section-wrapper">
      <WrappedComponent {...props} />
    </section>
  );
};

export default Section;


// return class Wrapper extends Component {
//
//   render() {
//     return (
//       <section>
//         <WrappedComponent />
//       </section>
//     )
//   }
// }
