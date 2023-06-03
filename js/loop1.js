
//for of loop -- array iteration

let cars = ['i10','i20','swift','jaguar','audi'];
let carsNew=[];
for( let item of cars){
    carsNew.push(item);
    //console.log(carsNew);
}
console.log(carsNew);
// console.log(item);

//for in --obj iteration
let student = {
    name :'Raj',
    age : 25,
    city : 'pune',
    car : 'Audi'
}
console.log(student);

for(var item1 in student){
     console.log(item1); // 1-1 key print
}



for(var item1 in student){
    }
console.log(item1); //op car


for(let a in student){
    console.log(student[a]); //op 1-1 item print
 }
 

 for(var i in student){
    //console.log(i);
    if(i == 'car'){
      var car =  student[i]
     console.log(car);
    }
    console.log(car);
    }
    console.log(car);



    for(let j in student){
        if(j=='name'){
            let name1=student[j]
            console.log(name1);
        }
    }

    

//while loop

let no = 20;

while (no <= 25) {
    console.log(no); //starting with 20
    no++; // if we are not giving inc or dcr then compiler will go in infinite loop
    // console.log(no); //starting with 19
}

let no1 = 30;
while (no1 > 25) {
    console.log(no1); //starting with 20
    no1--; // if we are not giving inc or dcr then compiler will go in infinite loop
     //console.log(no1); //starting with 19
}

// do while loop

let a = 80;
do{
    console.log(a);
    a++;
}
while(a < 95)



let aa=78;
do{
    console.log(aa);
    aa++
}while(aa < 80)