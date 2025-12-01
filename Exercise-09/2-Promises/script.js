let p=new Promise((res,rej)=>setTimeout(()=>res("Success!"),1000));
p.then(msg=>{console.log(msg); return msg+" OK";}).then(console.log).catch(console.error);

let q=new Promise((res,rej)=>rej("Error occurred"));
q.catch(console.error);