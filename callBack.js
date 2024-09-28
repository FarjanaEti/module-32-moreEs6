function greeting(greetingHandler,name){
    greetingHandler(name)                         
}
function greetingHandler(name){
    console.log('Good Morning',name);                          
}
function geetingEvening(name){
     console.log('Good Evening',name)                         
}
function geetingNoon(name){
     console.log('Good Noon',name)                         
}
greeting(greetingHandler,'Eti');
greeting(geetingEvening,'Eti');
greeting(geetingNoon,'Eti');

//simple calculation by callback

function calculator(x,y,cal){
    return cal(x,y);
}
function add(a,b){
    return a+b;                          
}
function multiply(a,b){
     return a*b;                         
}
console.log(calculator(5,3,add))
console.log(calculator(5,3,multiply))