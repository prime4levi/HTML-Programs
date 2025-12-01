let a=10; const b=20;
console.log('let a:',a);
console.log('const b:',b);
{ let a=50; console.log('Block let a:',a); }
const obj={x:1}; obj.x=2; console.log('Modified const object:',obj);