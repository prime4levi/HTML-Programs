fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(r=>r.json()).then(console.log).catch(console.error);