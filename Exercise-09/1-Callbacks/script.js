function doTask(cb){console.log("Before"); cb(); console.log("After");}
doTask(()=>console.log("Callback running"));
setTimeout(()=>console.log("Simulated fetch complete"),1000);