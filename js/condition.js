// if condition syntax :
// if (condition){
// condi. == true    
// }

var n=50;
if(n=50){
    console.log("n:",n);
}

// if-else
if(n>72){
    console.log("n:",n);
}else{
    console.log('wrong condition');
}


// else-if condition

var num=45;
if(num == 45){
    console.log('aaaa');
} else if(num == 50){
console.log('bbb');
}
else if(num == 90){
    console.log('ccc');
}
else{
    console.log('ddd'); // by default it will execute if we cannot find any true conditon.
}


if(num == 50){
    console.log('qqq');
}if(num==42){
    console.log('www');
}if(num==45){
    console.log('eee');
}if(num==78){
    console.log(rrr);
}

//switch statement

switch(num){
    case 40:console.log(num);
    break;
    case 55:let res=40+80;
    console.log(res);
    break;
    case 45:console.log("ssss");
    let res1=40+80;
    console.log(res1);
    break;
    case 58:console.log("www");
    default:console.log('default');
}