//forEach(para,index,array) loop

let arr=[20,10,40,55,955];
let arr2=[];
arr.forEach(ele => {
    arr2.push(ele)
    console.log(arr2);// 5times o/p 1,2,3,4,5 
})
 console.log(arr2); // one time o/p

 let arr3=[1,2,3,4];
 let arr4=[];
 arr3.forEach(ele => {
    if(ele != 3){
        arr4.push(ele)
    }
 })
 console.log(arr4);


 function abc(){
    let res=12+15;
    return res;
    return "mmm" //unreachable code block after return 
 }
 console.log(abc());
//    abc()


 function add(a,b){
    let res=a+b;
    return res;
 }
 console.log(add(10,20))


 var add1=(a,b)=>{
    let res=a+b
    return res
 }
console.log(add1(50,70));



var add3=()=>{
    return 22+22;
}
console.log(add3());



var add4=(a,b)=>a+b;
console.log(add4(1,2));


var add5=()=>10+230;
console.log(add5());


var emp = [
    {name:'Rohan',age:50,sal:30000},
    {name:'Rohit',age:60,sal:20000},
    {name:'Roy',age:30,sal:40000},
    {name:'Rihan',age:50,sal:30000}
];
 let empdata = emp.filter(ele=>{
    return ele.age >50;
 })
 console.log(empdata);

 let empData1= emp.filter(ele =>{
    return ele.age >=50 && ele.sal == 30000
 })
 console.log(empData1);

 let empdata3= emp.filter(ele=>{
    return ele.age<51 && ele.sal>=20000
 })
 console.log(empdata3);



 function test(){
    let i=30;
    return i++
 }
 let res=test();
 console.log(res);


 function test1(){
    let j=35;
    return ++j
 }
 let res1=test1();
 console.log(res1);


 //map
 let empname= emp.map(item=>{
    return item.name;
 })
 console.log(empname);

 let empSal=emp.map(ele=>{
    return ele.sal
 })
 console.log(empSal);


 let zeroindexValue;
  emp.map((ele,ind) =>{
    if(ind == 0){
      zeroindexValue=ele
    }
 })
 console.log(zeroindexValue);



//remove duplicate items 
 let chars = ['A','P', 'B','C','T','A','B','D','C'];
var newCars =  chars.filter((item, index) =>{
  return  chars.lastIndexOf(item) === index
} )
console.log("chars---",newCars); //op ['P', 'T', 'A', 'B', 'D', 'C']

let char1=['a','b','d','a','r','c','r',1,5,8,1,8];
let dupCahr= char1.filter((item,index) =>{
    return char1.lastIndexOf(item) === index
})
console.log(dupCahr);


//remove duplicate items 
// let a = 'i like mango i live in mumbai mango mumbai live'// assigment : remove duplicate words from string

var arr1 = ["apple", "mango", "apple","orange", "mango", "mango"];
// var arrNew =  [...new Set(arr1)];
// console.log(arrNew)

let remDuplicate= [...new Set(arr1)];
console.log(remDuplicate);



var empNew = [
    {name:'Rohan',age:50,sal:30000},
    {name:'Rohit',age:60,sal:20000},
    {name:'Roy',age:30,sal:40000},
    {name:'Rihan',age:50,sal:30000}
];

let namaAge = empNew.map(({name,age})=>({name,age}))
console.log('namaAge : ',namaAge);

let nameage = empNew.map(({name,sal})=>({name,sal}))
console.log(nameage);





function display() { 
    if(true){
        var a = 10;
        var b = 10;
        var y=x=50;
        let d;
        var z = x;
        var t = d;
    }
   console.log(a , b ,x, y,z,t);
 } 
display();
//10 10 50 50 50 undefined