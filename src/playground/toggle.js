class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            visible: false,
            details: 'This is some details'
         };
    }
    toggle() {
        this.setState((prevState) => {
            return {
               visible: !prevState.visible
            };
         });
    }
    render() {
        return (
            <div>
                <button onClick={this.toggle}>{this.state.visible ? 'Hide details' : 'Show details' }</button>
                {this.state.visible && <p>{this.state.details}</p>}
            </div>
        )
    }
}
const appRoot = document.getElementById('app');
ReactDOM.render(< VisibilityToggle />, appRoot); 






// console.log("App.js is running");

// const app = {
//     title: "Visibility toggle",
//     details: "This is some details",
// };
// let visible = false;

// const toggle = () => {
//    visible = !visible;
//     render();
// }
// const appRoot = document.getElementById('app');
// const render = () => {
//     const template = 
//     <div>
//         <h1>{app.title}</h1>
            
//         <button onClick={toggle}>{visible ? 'Hide details' : 'Show details'}</button>
//         {visible && <p>{app.details}</p>}
       
//     </div>;
//     ReactDOM.render(template, appRoot);
// }
// render();