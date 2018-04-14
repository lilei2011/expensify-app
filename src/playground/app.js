class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePickRandom = this.handlePickRandom.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.deleteOneOption = this.deleteOneOption.bind(this);
        this.state = {
            options: []
        }
    }
    componentDidMount() {
        try {
            console.log("fetch");
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) {
                this.setState(() => ({options: options}));
            }       
        } catch(e) {

        }
     
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            console.log("updated");
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);

        }
        
    }
    componentWillUnmount() {
        console.log("unmount");
    }
    handleDeleteOptions() { 
        // this.setState((prevState) => {
        //     return {
        //         options: []
        //     };
        // });
        //simplified expression
        this.setState(() => ({options: []}));
    }
    deleteOneOption(optionToRemove) {
        //console.log('optionToRemove', optionToRemove);
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => option != optionToRemove )
            }
        })
    }


    handlePickRandom() {
        let random = Math.floor(Math.random() * this.state.options.length);
        let option = this.state.options[random];
        //console.log(option);
    }
    handleAddOption(option) {
        option = option.toLowerCase();
        if(!option) {
            return 'Enter valid value to add item'
        }else if(this.state.options.indexOf(option)> -1) {
            return 'This option already exists'
        }

        // simplified es6 arrow function, and remove return keyword and {}
        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
    }
    render () {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header title = {title} subtitle = {subtitle} />
                <Action hasOptions={this.state.options.length>0} 
                handlePickRandom = {this.handlePickRandom} />
                <Options options = {this.state.options}
                handleDeleteOptions = {this.handleDeleteOptions}
                deleteOneOption = {this.deleteOneOption} />
                <AddOption  handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

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

//stateless functional component
const Action = (props) => {
    return (
        <div>
            <button  disabled={!props.hasOptions}
            onClick = {props.handlePickRandom} >What should I do?</button>
        </div>
    )
}

// class Options extends React.Component {    
//     render() {
        
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                  {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return (
        <div>
            {props.options.length === 0 && <p>No options so far</p> }
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((option) => (
                <Option 
                key={option} 
                optionText={option}
                deleteOneOption={props.deleteOneOption}
                />
                ))
            }
        </div>
    );
}

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



class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error: undefined
        }
    }
    onFormSubmit(e) {
        e.preventDefault();
        //console.log(this);
        const option = e.target.elements.option.value.trim();      
        const error = this.props.handleAddOption(option);
        this.setState( () => ({error: error}));   
        if(!error) {
            e.target.elements.option.value = "";
        }
    }
    render() {     
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                    
                </form>
            </div>
        );
    }
}
//set defaultProps to fall back to if no user input
IndecisionApp.defaultProps = {
    options: []
}
//ReactDOM.render(<IndecisionApp options={['banana', 'apple', 'pear']}/>, document.getElementById('app'));

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
