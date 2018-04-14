const userName = 'Lei';
const age = 33;
const user = {
    name: "Lei",
    age: 35,
    location: "Sunnyvale"
};
function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>;
    }
}

const template2 = (
    <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {user.age >=18 && <p>Age: {user.age}</p>} 
    {getLocation(user.location)}
    </div>
);

//example showing ex6 arrow function binds to the parents scope, not the current scope. 
//In the following case, the scope of the inner function of the printPalcesLived would be the parent's scope.
//If use es5 function syntax, the scope of inner function would be window object, since it's not bound to
//the user object any more.
const user1 = {
    name: 'Lei',
    cities: ['Berkeley', 'Santa Clara', 'Mountain View'],
    printPlacesLived: function(){
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};

//use map() instead of forEach() to return a new array
const user2 = {
    name: 'Lei',
    cities: ['Berkeley', 'Santa Clara', 'Mountain View'],
    printPlacesLived: function(){
         return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
//console.log(user2.printPlacesLived());

let numbers = [1,2,3];
let multiplyBy = 5;
const multiplier = {
    numbers: numbers,
    multiplyBy: multiplyBy,
    multiply() {
        return this.numbers.map((number) => number*this.multiplyBy);
    }
}
console.log(multiplier.multiply());

//an counter app
let count = 0;
const addOne = () => {
    count++;
   
}
const minusOne = () => {
    count--;
    console.log(number);
}
const reset = (number) => {
    number = 0;
    console.log("reset");
}
const templateCounter = (
    <div>
        <h1>Count: {count}</h1>
        <button id="my-id" className="button" onClick={addOne}> +1</button>
        <button  className="button" onClick={minusOne(count)}> -1</button>
        <button  className="button" onClick={reset(count)}> reset</button>
    </div>
);
console.log(templateCounter);
const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);