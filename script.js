console.log('JS Working...');


const apiKey = "61d1dd7e50c5e2873a386472a54a7b2a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric"; 

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiUrl +`&appid=${apiKey}&q=${city}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
    document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';
}

searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
});
