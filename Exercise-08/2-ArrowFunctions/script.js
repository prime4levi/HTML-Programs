const square=x=>x*x;
console.log('Square 5:',square(5));
const fact=n=>{let f=1;for(let i=1;i<=n;i++)f*=i;return f;}
console.log('Factorial 5:',fact(5));
const max=(a,b)=>a>b?a:b;
console.log('Max of 5,9:',max(5,9));
console.log('Map:',[1,2,3].map(x=>x*2));
console.log('Filter:',[1,2,3,4].filter(x=>x%2===0));
console.log('Reduce:',[1,2,3].reduce((a,b)=>a+b));