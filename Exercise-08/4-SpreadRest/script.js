let a1=[1,2,3], a2=[4,5];
console.log([...a1,...a2]);
let obj1={x:1}, obj2={y:2};
console.log({...obj1,...obj2});
function sum(...nums){return nums.reduce((a,b)=>a+b,0);}
console.log('Sum:',sum(1,2,3,4));