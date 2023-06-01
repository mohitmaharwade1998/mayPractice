//... spred operator: to copy all or part of an existing array or object into another array or obj .

let arr=['mohit','suraj','russhi','saurabh','pintu'];
let arr1=[...arr];
console.log(arr1);

//copy some part of an array :
//let [firstItem, secondItem , ...remainingItem] = ['i10','i20','swift','jaguar','audi'];
let [first,second,...all]=arr;
console.log(first);;
console.log(second);;
console.log(all);

let color1  = ['red','white','black','blue','orange'];
let color2  = ['red','white','black'];
let combo =  [...color1,...color2]
// let combo =  [...color2,...color1]
console.log(combo);

let com1=[...color1,...color2,'mmmm',65620];
console.log(com1);

//object

let obj={
    name:"mmm",
    age:25,
    city:"mumbai"
}
let obj1={...obj}
console.log(obj1);


let student3 = {
    name :'Raj',
    age : 25,
    city : 'pune',
    car : 'Audi'
}
let  student4 = {
    name :'Roy',
    ageOfStudent : 25,
    city : 'mumbai',
    car : 'Audi',
    carPrice: 300000
}

let student5 = {...student3, ...student4};
console.log(student5);