import React from 'react';
const Option = (props) => {
    return (
      <div>
        {props.optionText}
        <button
          onClick={() => {
            props.handleDeleteOption(props.optionText);
          }}
        >
          remove
        </button>
      </div>
    );
  };

export default Option;


//class definition of Option component
// class Option extends React.Component {
//     constructor(props) {
//         super(props);
//         this.deleteOption = this.deleteOption.bind(this);     
//     }
//     deleteOption(e) {
        
//         //const result = this.props.deleteOneOption(this.props.optionText);
//         //console.log(this);
//          this.props.deleteOneOption(this.props.optionText);
        
//     }
//     render() {
//         return (
//             <div>
//                 Option: {this.props.optionText}
//                 <button onClick={this.deleteOption}>Remove</button>
//             </div>
//         );
//     }
// }
