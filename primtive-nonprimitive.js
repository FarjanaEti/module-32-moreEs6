let p=5;
q=p;
q=7;//will change only q
console.log(p,q)// 5,7

let b={name:'eti'}
let c=b;//both reference same eti
//c={name:'kona'} will change only c
c.name='konika';//will change both
console.log(b,c)
let a;
console.log(a)