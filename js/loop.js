// for (statement; condition; increament) {
//   //code block
    //break if u want to 
// }

for(let i=1;i<=10;i++){
    console.log(i);
}

var list=['aaa','bbb','cccc','dddd','eee'];
for(let i=0;i<list.length;i++){
    console.log(list[i]);
}
// console.log(list[i]); uncaught reference



var list1=['red','white','black','blue','yellow'];
let aaa=[];
for(var i=0;i<list.length;i++){
    aaa.push(list[i]);
    console.log(aaa);
}
console.log(aaa);

let newList2 = [];
for(let i = 0 ; i < 3; i++ ){ //5<=5 i++ = i =i+1
    newList2.push(list[i]);  //list[0]
}
console.log('newList2-->',newList2);


let new3=[];
for(let i=0;i<list1.length;i++){
    new3.push(list1[i]) //op-'red', 'white', 'black
    if(i==3){
      break;
    }
    //  new3.push(list1[i])  //op-'red', 'white', 'black','blue'
    //  console.log(new3);
}
console.log("break..",new3);


let newList1 = [];
for(let i = 0 ; i < list1.length ; i++ ){ //5<=5 i++ = i =i+1
    newList1.push(list1[i]); 
   
    if(i==3){
    break; //jumps out from the loop
    }
    // console.log('newList1-->',newList1); 
}
console.log('newList1-->',newList1); 


for(let j = 1 ; j<=10 ; j++){
    //console.log(j);
    if(j == 5){
        break;
    }
    console.log(j);
}

//continew
let list4 = ['red','white','black','blue','orange'];
let ww=[];
for(let i=0;i<list4.length;i++){
    // if(i==2){
    //     continue;
    // }
    //or
    if(list4[i] =='black'){
        continue;
    }
    ww.push(list4[i])
     //console.log(ww);
}
console.log(ww);