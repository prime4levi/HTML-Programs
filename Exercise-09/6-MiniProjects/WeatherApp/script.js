btn.onclick=async()=>{
 try{
  let c=city.value;
  let r=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=17.38&longitude=78.48&current_weather=true`);
  let d=await r.json();
  out.textContent="Temp: "+d.current_weather.temperature;
 }catch(e){out.textContent="Error fetching";}
};