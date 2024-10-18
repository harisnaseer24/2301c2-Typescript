let person: {
    name: string;
    age: number;
} ={
    name:"haris",
    age:44,
};

// type
type Person = {
    name:string,
    // age:number|string|boolean,
    age:number,
    salary?:number,
}
let person2:Person={
    name:"Owais",
    age:4545,
    
}
console.log(person2.name);

//Interface

interface Animal {
    name:string,
   
    age:number,
    class?:string,
}
let SwordFish:Animal={
    name:"Merlin",
    age:4,
   
}

let Camel:Animal={
    name:"Groofy",
    age:4,
    class:"Mammals"
}

// console.log(SwordFish);
// console.log(Camel.name);

for (var item in Camel) {
    console.log(item +" => "+Camel[item]);
}


// Camel.forEach(element => {
//     console.log(element)
// });