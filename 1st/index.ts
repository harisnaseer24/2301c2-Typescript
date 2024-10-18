// console.log("Welcome To typeScript");

// var Name:string ="Haris Naseer";
// // name=34;
// let age:number =34;
// // age="haris";//error
// // age.toUpperCase();
// // age.indexOf("h")
// console.log(Name.indexOf("a"));


// let myNumbers:number[]=[34,234,99,67,55];

// console.log(myNumbers[3]);
// console.log(myNumbers);

// myNumbers.forEach((item, index)=>{
// console.log(index+" => "+item);
// });
// 16/10/2024
var myNumbers:number[] = [34, 234, 99, 67, 55];

// methods
// push
// console.log(myNumbers.push(55))
// ;
// console.log(myNumbers);





// //pop

// console.log(myNumbers.pop())
// console.log(myNumbers)

// unshift
// console.log(myNumbers.unshift(22))
// console.log(myNumbers)
// //shift

// console.log(myNumbers.shift())
// console.log(myNumbers)

// splice
// console.log(myNumbers.splice(2,0,44,34,3,2,1));
// console.log(myNumbers)
//slice
                            // start index, length of array at that index
// let slicedNumbers=myNumbers.slice(4,5);
// console.log(slicedNumbers)
// console.log(myNumbers)
//map
let mypersons= [{pname:"Haris",gender:"male"},{pname:"Maha",gender:"female"}]
let calculatedArray=myNumbers.map((a)=>{
return a*4-2
});
console.log(myNumbers,calculatedArray)

let respectedNames=mypersons.map((a)=>{
   if(a.gender == "male"){
   a.pname= "Mr. "+a.pname;
   return a;
   }else{
    a.pname= "Miss. "+a.pname;
    a.gender ="F";
   return a;
   }

    });
    console.log(respectedNames)
//filter
//includes