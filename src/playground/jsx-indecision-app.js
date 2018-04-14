console.log("App.js is running");

const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ['one', 'two', 'three', 'four']
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = "";
    }
    render();
}


const randomNumber = (e) => {
    let random = Math.floor(Math.random() * app.options.length);
    let option = app.options[random];
    console.log(option);
}

const removeAll = () => {
    app.options = [];
    render();
}
const appRoot = document.getElementById('app');
const render = () => {
    const template = 
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
        <button disabled={app.options.length === 0} onClick={randomNumber}>Random pick</button>
        <ol>
            {
                app.options.map((option) => <li key={option}>Item: {option}</li>)
            }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
            <button onClick={removeAll}>Remove all</button>
        </form>
    </div>;
    ReactDOM.render(template, appRoot);
}
render();
