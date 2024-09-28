function arrayAdd(arr){
    arr.push(10) 
    //arr.pop()
    //console.log(arr)                        
}
let array=[2,4,5,6]
arrayAdd(array)
//console.log(array)

//clearing an array

function clear(method){
     method.length=0;                         
}
clear(array)
//console.log(array)

//re-assigning an object and add property
function changeReference(obj) {
    obj = { name: "Charlie", age: 30 };
    //obj.name='eti'  
    console.log(obj)
}

let employee = { name: "David", age: 40 };
changeReference(employee);

console.log(employee); 
