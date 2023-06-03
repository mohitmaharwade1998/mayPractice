//assigment operator
// +=

var x = 50;
let y = 10;
// x -= y // ans 40
y+=x
//console.log(x);
console.log(y);


//postfix, prefix operator
//note:
// variable_name ++ : postfix operator returns the variable value first then got increamented by 1
//++ variable_name  : prefix operator got increamented by 1 ,then returns the variable value

let value1 = 2;
console.log(value1);
console.log(value1++)
console.log(value1);
console.log(value1++)
console.log(value1);

let value = 4;
console.log(value);
console.log(++value);
console.log(++value);


let value2 = 7;
console.log(value2);
console.log(value2--)
console.log(value2);
console.log(value2--)
console.log(value2);

let value4 = 4;
console.log(value4);
console.log(--value4);
console.log(--value4);

//logical operators:
// &&	logical and l T && r T = T 1*1 =1
// ||	logical or  L F || R F = F 0*0=0
// !	logical not

let num1 = 20;
let num2 = 30;

if (num1 > 10 && num2 < 50) {
    console.log("aandd");
} else {
    console.log('and222');
}

if (num1 > 10 || num2 < 50) {
    console.log("orrr");
}else {
    console.log('or222');
}
if(num1==20 && num2==undefined){
    console.log("||||||||||||||||"); //no output
}

if(num1!=20){
    console.log("mmmm");
}else{
    console.log('kkk');
}


if(num1!==20){
    console.log("mmmm");
}else{
    console.log('kkk');
}


// diff =,==,===
var myrank=2; //Assigment operator used to assign value to the variable
var samrank=2;

//equality operator   

if (myrank == samrank) {  // equality operator it will compare only value of variables
    console.log('equality operator');
}

if (myrank === samrank) { //it will compare value as well as data type of variable
    console.log('===  operator');
}

// ? ternary operator
let city=50;
if(city===50){
    console.log("i live in nagpur");
}else{
    console.log("i live in pune");
}

city===50 ? console.log('i live in nagpur'):console.log("i live in pune");;