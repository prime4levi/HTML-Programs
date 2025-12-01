let fruits=['Apple','Banana','Mango'];
fruits.forEach(f=>{let li=document.createElement('li');li.textContent=f;list.appendChild(li);});
add.onclick=()=>{let li=document.createElement('li');li.textContent='New Fruit';list.appendChild(li);};