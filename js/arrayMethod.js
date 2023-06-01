var arrayItem = [10,20,56,32,69,5000,8888,6666];
console.log(arrayItem);
console.log(arrayItem.length);

let lastIndex=arrayItem.length-1;
console.log(lastIndex);

//console.log(arrayItem.IndexOf('20')); not allowed with array..it is valid in string.

delete arrayItem[2]; // it will show empty after delete ope. use...length will remain same; and typeOf is undefined
console.log(arrayItem);

let data=arrayItem[2]
console.log(typeof(data)); // op= undefined;

let convert=arrayItem.toString();
console.log(convert); //op= 10,20,,32,69,5000,8888,6666

//join()
let join1=arrayItem.join("+")
console.log(join1); //op= 10+20++32+69+5000+8888+6666

//pop function
let a=arrayItem.pop()
console.log(a);// it will return pop value;
 console.log(arrayItem);
//  delete arrayItem[0];
// console.log(arrayItem);

 //push
let bb = arrayItem.push(425);
// console.log(bb);
console.log(arrayItem);

//shift
let s=arrayItem.shift()
// console.log(s);
console.log(arrayItem);

//unshift
let r=arrayItem.unshift(200,875);
console.log(arrayItem);

// arrayItem[3] = 500;
// console.log( '---->',arrayItem);


//splice
let arr3=[10,20,30,40,50,60,70,80,90,100]
arr3.splice(2,6) // stars with 30 and end 80
console.log(arr3); // op= [30, 40, 50, 60, 70, 80]

let arr6=[10,20,30,40,50,60,70,80,90,100];
console.log(arr6);
arr6.splice(3,4,11,22)// 3 show starting index then add 11,22.. & 4 show the delete starting index and it will deelete 4 values=40,50,60,70
console.log(arr6); //[10, 20, 30, 11, 22, 80, 90, 100];

let arr7=[10,20,30,40,50,60,70,80,90,100];
arr7.splice(0,2) // [30, 40, 50, 60, 70, 80, 90, 100]
console.log(arr7);

let num1 = [10,101,23,222];
let num2 = [105,1061,623,2622];

let num3=num1.concat(num2,"685562mohit")
console.log(num3);

console.log(num2.slice(2)); //623,2622]

console.log(num1.reverse());

let x = ['Abc','c','aBc','b','B']
console.log(x.sort()); //['Abc', 'B', 'aBc', 'b', 'c'] it will not work properly in string;

console.log(num1.sort()); ///[10, 101, 222, 23] it will not work properly in string also
