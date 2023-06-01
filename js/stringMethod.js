

var text= "   mohit    maharwade";
console.log(text);
console.log(text.length);


let char="abcdefghijklmnopqrstuvwxyz";

console.log(char.length);
console.log(char);
console.log(char.slice(4));
console.log(char.slice(1));
console.log(char.slice(6,12)); // 6 exclude 12 include
console.log(char.slice(-6,12)); // no output
console.log(char.slice(6,-12)); // -12 exc. , 6 excluding
console.log(char.slice(2,-2));
console.log(char.slice(4,9));

console.log(char.substring(6,12));
console.log(char.substring(-6,12));  //internally negative value will consider as 0


let text1 = "Hello world!";
let result = text1.substr(1, 6); // ello  = op
console.log(result);
console.log(text1.substr(0,6));// 0 is indicate the starting point and 6 shows the  length

console.log(text1.substr(4,-6)) // no output
console.log(text1.substr(-4,6)) // rld!  = -4 is including 


//replace
var carNames = 'Audi-Jaguar mohit tt444 Jaguar,mini Cupoj0sw mini ift jjjjjj  mini jjjj mohit';
console.log(carNames.replace('mini','maruti'));

let carNames2 = carNames.replace(/Jaguar/g,'I20');
console.log(carNames2);

console.log(carNames.replace(/mohit/g,'rohit'));


let name= 'MoHit';
console.log(name.toUpperCase());
console.log(name.toLowerCase());

//concate
let firstName = 'poonam is living is in mumbai is';
let last_Name = 'patil';
console.log(firstName+last_Name);
console.log(firstName +"    "+last_Name);

console.log(firstName.concat(last_Name));



console.log(firstName.charAt(20));//beyond length it will return empty string
console.log(firstName[20]); //beyond length it will return undefined
console.log(firstName.charAt(40));//beyond length it will return empty string
console.log(firstName[40]); //beyond length it will return undefined

console.log(firstName.indexOf("is"));
console.log(firstName.indexOf(/is/)); // op= -1

console.log(firstName.lastIndexOf("is"));
console.log(firstName.lastIndexOf(/is/));  //op= -1


console.log(firstName.search('is'));
console.log(firstName.search(/is/)); // op is correct 

// console.log(firstName.charAt(40));//beyond length it will return empty string
// console.log(firstName[40]); //beyond length it will return undefined
// console.log(firstName.indexOf('is')); // it will return  -1 if no match found
// console.log(firstName.lastIndexOf('isu')); // it will return  -1 if no match found
// console.log(firstName.search(/ist/));


//trim()
var myName = '  poonam   ';
console.log(myName.trim());
console.log(myName.trimEnd());
console.log(myName.trimStart());

//split()

var dob='22-55-2200';
console.log(dob.split("-")); //it will return array