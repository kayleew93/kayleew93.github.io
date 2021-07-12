lat = 41.0602
long = -111.971
apiKey = '9cef91c93e68d2c9661f7465a0530962';
const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`;

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);

    document.querySelector("#weatherDesc").textContent =
    jsObject.current.weather[0].description;
    document.querySelector("#tempF").textContent =
    jsObject.current.temp.toFixed(0);
    document.querySelector("#humidity").textContent = jsObject.current.humidity;
    

// Information for forecast
    let day = 1;
    const dayofWeek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    
    const threeDayForecast = [jsObject.daily[1], jsObject.daily[2], jsObject.daily[3]];
    
    threeDayForecast.forEach((x) => {
        let d = new Date(x.dt * 1000);
    document.querySelector(`#dayofweek${day}`).textContent =
        dayofWeek[d.getDay()];
    document.querySelector(`#temp${day}`).textContent =
        x.temp.day;    
    day++;
    });
});
  