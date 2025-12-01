export function avg(arr){return arr.reduce((a,b)=>a+b,0)/arr.length;}
export function top(students){
 return students.reduce((max,s)=>s.marks>max.marks?s:max);
}