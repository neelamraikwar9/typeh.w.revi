// implicit is default behaviour; 

let ask = {
    teacher: "Akansha", 
    who: function(){
        console.log(this.teacher); 
    }
}; 

ask.who(); 


//explicit binding; 
// 3 ways to do this; 

//1. call; 

function clarify(){
    console.log("clarify", this.mentor); 
}

let teacher = {
    mentor: "Akansha ma'am", 
}  

clarify.call(teacher); 


// 2nd way using with 2 objects.. 

function clarify(){
    console.log("clarify", this.mentor); 
}

let teacher1 = {
    mentor: "Akansha ma'am", 
}  

clarify.call(teacher1); 


let teacher2 = {
    mentor: "Tanay", 
}

clarify.call(teacher2); 


// 2. bind; 

// let name = {
//     firName : "Amit", 
//     lstName: "Pandey"
// }

// let printFullName = function (age, ) {
// console.log(this.firName, this.lstName, age); 

// }                                                                    

// let printName = printFullName.bind(name, 27); 
// printName(); 

//  can call this function by printName();



//3. apply; 

let name = {
    firName : "Amit", 
    lstName: "Pandey"
}

let printFullName = function (age, favCol, PhnNo) {
console.log(this.firName, this.lstName, age, favCol, PhnNo); 

}                                                                    

printFullName.apply(name, [27, "Red", "3456678765"]); 





//timers.js

// Two main type of timers; 

//1. setTimeOut; // It runs and stop with in specified time.

// function sayHello(){
//     console.log("Hello"); 
// }
// setTimeout(sayHello, 5000); 


// 2. setInterval;  // it keeps running after the specified delay; 

function sayHello(){
    console.log("Hello World"); 
}
// setInterval(sayHello, 2000); 

// for clearing it's time, assigning a variable to it; 
const timerId = setInterval(sayHello, 2000); 

function clearTimer(){
    clearInterval(timerId);
    console.log("Timer Stopped"); 
}

setTimeout(clearTimer, 8000); 

// setTimeout(() => {
//     clearInterval(timerId);  //clearInterval is a web api; 
//     console.log("Timer stopped"); 
//     setTI
// })




function sayHello2(){
    console.log("Hello"); 
}
setTimeout(sayHello2, 5000); 

// let timeoutId = setTimeOut(sayHello, 5000); 
// clearTimeout(timeoutId); 



function runTasks(){
    console.log("GOod Morning"); 

    setTimeout(() => {
        console.log("Helloworlsssss"); 
    }, 2000); 

    console.log("GoodEvening"); 
}

runTasks(); 


