class Counter extends React.Component {
   constructor(props) {
      super(props);
      this.plusOne = this.plusOne.bind(this);
      this.minusOne = this.minusOne.bind(this);
      this.reset = this.reset.bind(this);
      this.state = {
         count: props.count
      };
   }
   componentDidMount() {
       let count = localStorage.getItem('count') || 0;
       count = parseInt(count);
       if(!isNaN(count)) {
            this.setState(() => ({count: count}));
       } else {
        this.setState(() => ({count: 0}));
       }
   }
   componentDidUpdate(prevState) {
    if(prevState.count !== this.state.count) {
        localStorage.setItem('count', this.state.count);
    }
   }
   plusOne() {
     this.setState((prevState) => {
        return {
           count: prevState.count + 1
        };
     });
      
   }
   minusOne() {
      this.setState((prevState) => {
         return {
            count: prevState.count - 1
         };
      });
      
   }
   reset() {
      this.setState(() => {
         return {
            count: 0
         };
      });
     
      // this.setState({
      //    count: 0
      // });

   }

   render() {
      return (
          <div>
              <h1>Count: {this.state.count}</h1>
              <button onClick={this.plusOne}>+1</button>
              <button onClick={this.minusOne}>-1</button>
              <button onClick={this.reset}>Reset</button>
          </div>
      );
  }

}

Counter.defaultProps = {
   count: 0
}
ReactDOM.render(<Counter/>, document.getElementById('app')); 




// //an counter app
// let count = 0;
// const addOne = () => {
//     count++;
   
// }
// const minusOne = () => {
//     count--;
//     console.log(number);
// }
// const reset = (number) => {
//     number = 0;
//     console.log("reset");
// }
// const templateCounter = (
//     <div>
//         <h1>Count: {count}</h1>
//         <button id="my-id" className="button" onClick={addOne}> +1</button>
//         <button  className="button" onClick={minusOne(count)}> -1</button>
//         <button  className="button" onClick={reset(count)}> reset</button>
//     </div>
// );
// console.log(templateCounter);
// const appRoot = document.getElementById('app');
// ReactDOM.render(template, appRoot);