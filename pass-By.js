//pass by value primitive number
let num=10,num2=5;
function multiply(a,b){
      a=7;//function ar vitore sudhu akta copy creat korbe baire effect porbe na
      return a*b;                        
}
//console.log(num,num2);//110 5 e asbe pass by value te value chang hobe na
//console.log(multiply(num,num2))//35 

function copy(num){
    num=num+10;
    num=num*2;
    //console.log(num)                          
}
const number=10;
copy(number);
//console.log(number)

//pass by reference non-primitive number

let student1={id:1,name:'eti'}
let student2={id:2,name:'pritha'}

function makeproject(team1,team2){
         team1.name='era';                     
         team2.name='mira';                     
}
//console.log(student1,student2);
makeproject(student1,student2);
//console.log(student1,student2)//change kore dibe original value

//chang string by pass by value

function change(string){
   string='new string';
  // console.log(string)
}
let originalstr='original string';
change(originalstr);
//console.log(originalstr)

//boolean toggle

function toggle(flag){
     flag=!flag;
     console.log(flag)                        
}
const istruth=true;
toggle(istruth);
console.log(istruth)

//default value

function defaultValue(x,y=5){
      x=x+y;
      console.log(x);                        
}
let value=20;
defaultValue(value)
