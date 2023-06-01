
// array
let a=[];   //empty array

let myNameList=['aman','mohit','rushikesh','suraj','pintu',100,500,test()];

function test(){
    return 'mmm';
}
console.log(myNameList);
console.log("length",myNameList.length);
console.log(myNameList[2]);
console.log(myNameList[10]); //undefined

// obj

let b={} ;  //empty obj

let student={
    name:'abc',
    age:23,
    class:11,
    failstutus:true
}
console.log(student);
console.log(student.age);

//array of object

let emp=[
    {
        name:'a',
        age:22,
        city:'pune'
    },
    {
        name:'b',
        age:27,
        city:'ngp'
    },
    {
        name:'c',
        age:85,
        city:'amg'
    }
];

console.log(emp);
console.log(emp[1].name);

//array of array

list=[
    ['aa',"bb"],
    ['cc',['dd','ee'],'ff'],
    ['gg',66]
];
console.log(list);
console.log(list[1][1][0]);
console.log(list[0][1]);

//obj of array

var obj = {
    "posts": [
      {
        "id": 1,
        "title": "json-server",
        "author": "typicode"
      }
    ],
    "comments": [
      {
        "id": 1,
        "body": "some comment",
        "postId": 1
      }
    ],
    "profile": {
      "name": "typicode"
    },
    "status": "succsess"
  };

  console.log(obj.posts[0].author);

  var obj1={
    a:[
        {
            id:1,
            name:'mohit mm',
            age:20,
        },
        {
            id:2,
            name:'rohit mm',
            age:22,
        }
    
    ],
    "b":[
        {
            id:7,
            name:'kapil',
            age:30,
        }
    ]
  }
  console.log(obj1.a[1].name);
  console.log(obj1.b[0].name);


  //datatype in js
  //string
  //number
  //boolean
  //null
  //undefined

  var car='bmw';
  console.log(typeof(car));
  console.log(typeof(20+10+'mmm'));
  console.log(typeof(20+10+'mmm'+52));

  var number=20;
  console.log(typeof(number));

  var aa=true;
  console.log(typeof(aa));

  let o;
  console.log(typeof(o));