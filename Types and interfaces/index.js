"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let person = {
    name: "haris",
    age: 44,
};
let person2 = {
    name: "Owais",
    age: 4545,
};
console.log(person2.name);
let SwordFish = {
    name: "Merlin",
    age: 4,
};
let Camel = {
    name: "Groofy",
    age: 4,
    class: "Mammals"
};
// console.log(SwordFish);
// console.log(Camel.name);
for (var item in Camel) {
    console.log(item + " => " + Camel[item]);
}
// Camel.forEach(element => {
//     console.log(element)
// });
