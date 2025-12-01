import def,special,{PI,add} from './mathUtils.js';
import {avg,top} from './studentUtils.js';

console.log('PI:',PI);
console.log('Add:',add(5,5));
console.log('Default:',special());

let sts=[{name:'A',marks:90},{name:'B',marks:95}];
console.log('Average:',avg([10,20,30]));
console.log('Top:',top(sts));