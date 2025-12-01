function wait(){return new Promise(res=>setTimeout(()=>res("Done waiting"),1000));}
async function run(){try{console.log(await wait());}catch(e){console.log("Err",e);}}
run();