let person = {
    naam : "rahul",
    age : 26,
    favColor : "white"
}
console.log(person);
console.log(person.age);
console.log(person["naam"]);


person.favColor = "black";
console.log(person);

person.gender = 'Male';
console.log(person)


delete person.age;
console.log(person)