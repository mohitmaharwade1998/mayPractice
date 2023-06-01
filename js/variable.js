// let
let a;
a=20;
console.log(a);

let k;
k=20;
k=48
console.log(k); //redeclation is allowed

let b=30;
console.log(b);

// c=70;
// let c;
// console.log(c); hoisting is not allowed

 /// var  // hoisting , redeclation all are allowed
 var e=50;
 console.log(e);

var f;
f=78;
console.log(f);

d=70;
var d;
console.log(d);

//cont

const g=120;
console.log(g);


// const h=120;
// h=140;
// console.log(h); //redeclation not possible as well ass hoisting aslo

// const h;
// h=40;

//..................................

function myFunction(){
   //code block 
   console.log('inside function');
}

myFunction() ;
console.log(myFunction());

function scope(){
    var myFavMovie="pk";
    console.log(myFavMovie);
    let myFavMovie1="3idiot";
    console.log(myFavMovie1);
    
    if(true){
        let u='mohit';
        var v='maharwade';
        console.log(u);
        console.log(v);

    }
    // console.log(u);  this are block level
    // console.log(v);
    console.log(myFavMovie);
    console.log(myFavMovie1);

}

// scope() ;