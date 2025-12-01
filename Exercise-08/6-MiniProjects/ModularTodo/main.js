import {todos,addTask,removeTask} from './todo.js';

add.onclick=()=>{
 addTask(task.value);
 let li=document.createElement('li');
 li.textContent=task.value;
 list.appendChild(li);
};