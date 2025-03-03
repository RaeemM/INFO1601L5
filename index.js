let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];// 10 elements

for(let i=0; i< arr.length; i++){
  console.log(arr[i])
}

/*Task 2*/
let radius = 7;
const pi = 3.14;

let area = radius * radius * pi;

/*Task 3*/
let name = "bob";
let age = 24;

console.log(typeof(name))//string
console.log(typeof(age))//number

console.log(`Hello my name is ${name}, I'm ${age} years old`);
//Hello my name is bob, I'm 24 years old.

console.log(`I was born in ${2020 - age}`)
//I was born in 1966

/*Task 4.1*/
console.log('1' == 1); //true
console.log(1 == true); //true
console.log("false" == false); // "false" is not false
console.log("false" == true); // "false" is not true either

if("false")
   console.log("Hello false!") //but "false" is true enough here

/*Task 4.2*/
console.log('1' === 1); //false
console.log(1 === true); //false
console.log("true" === true); //false

/*Task 4.3*/
for(let i=0; i< 50; i++){
  if(i %3 === 0 && i%5 === 0){ 
    console.log('fizzbuzz');
  }else if(i%3 === 0){ 
    console.log('fizz');
  }else if(i%5 === 0){ 
    console.log('buzz');
  }else{              
    console.log(i);
  }
}

/*Task 5*/
function happyPrint(string){
  console.log("😀: "+string);
 }
 
 function sadPrint(string){
  console.log("😢: "+string);
 }
 
 //This high-order function adds 2 parameters and passes the answer to the callback
 function add(a, b, callback){
    let ans = a + b;
    callback(ans);// call the callback and pass the answer to it
 }
 
 //call add passing the callbacks to it
 
 add(5, 10, happyPrint);
 add(11, 12, sadPrint);

 /*Task 2 (7. Set Interval & Timeout)*/
 //Note made changes instructed in lab.
  //prints current date
function printDate(){
  console.log(new Date().toLocaleTimeString());
}
     
setInterval(printDate, 1000);