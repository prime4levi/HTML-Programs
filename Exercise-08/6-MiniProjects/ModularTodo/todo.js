export let todos=[];
export function addTask(t){todos.push(t);}
export function removeTask(i){todos.splice(i,1);}