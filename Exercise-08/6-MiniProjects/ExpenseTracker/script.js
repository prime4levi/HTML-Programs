let arr=[];
add.onclick=()=>{
 let item=name.value, amt=+amt.value;
 arr.push({item,amt});
 let li=document.createElement('li');
 li.textContent=`${item} - ₹${amt}`;
 list.appendChild(li);
 total.textContent='Total: ₹'+arr.reduce((a,b)=>a+b.amt,0);
};