let weather={temp:30,humidity:70,loc:{city:'Hyd'}};
let {temp,humidity,loc:{city}}=weather;
console.log(`City: ${city}, Temp: ${temp}, Humidity: ${humidity}`);