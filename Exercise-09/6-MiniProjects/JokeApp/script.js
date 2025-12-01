btn.onclick=async()=>{
 try{
 let r=await fetch('https://official-joke-api.appspot.com/random_joke');
 let d=await r.json();
 joke.textContent=d.setup+" - "+d.punchline;
 }catch(e){joke.textContent="Error";}
};