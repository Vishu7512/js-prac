// Ques-1
let book = {
    title:"Javascript",
    author:"XYZ",
    numOfPages:500

};
console.log(book);


//Ques-2
function addProperty(obj, key, value){
    obj[key] = value;
    return obj;
}
const person = {name:'vishal'}
addProperty(person, "age", 25);

addProperty(person , "DOB", 2002);

console.log(person);


//Ques-3
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "Blue",
    
    // Method to return the object's details as a string
    getDetails: function() {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`;
    }
};

// Example usage:
console.log(car.getDetails());
// Output: "Make: Toyota, Model: Corolla, Year: 2020, Color: Blue"



//Ques-4
function shallowEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }    
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}
// Example usage:
const objA = { name: "Alice", age: 25 };
const objB = { name: "Alice", age: 25 };
const objC = { name: "Alice", age: 30 };

console.log(shallowEqual(objA, objB)); // true
console.log(shallowEqual(objA, objC)); // false



