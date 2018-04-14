

import React from 'react';

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  );
};

export default Action;

//classed based component
// class Action extends React.Component {
    
//     render() {
//         return (
//             <div>
//                 <button  disabled={!this.props.hasOptions}
//                 onClick = {this.props.handlePickRandom} >What should I do?</button>
//             </div>
//         )
//     }
// }
