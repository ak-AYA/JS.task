
// Create an object represents you
// have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)

function object_details(first_name, last_name, age, dob, food, movie){
    this.first_name=first_name;
    this.last_name=last_name;
    this.age=age
    this.dob=dob
    this.f_food=food
    this.f_movie=movie
}
let Aya=new object_details("Aya", "Garalleh", 29, "4-9-1995", "sushi", "anything");

console.log(Aya, "aya");



// Using the varabile persons
// Create a function called firstName
// that accept an object
// and return all the first name of the person insides

// Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']




function first_names(persons) {
    let first_names = persons;
 
    return first_names;
}
let persons = ['John', 'Alex', 'Alice', 'Thor', 'Soso']; 
console.log(first_names(persons)); 