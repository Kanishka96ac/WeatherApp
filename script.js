console.log('JS Working...');


const apiKey = "61d1dd7e50c5e2873a386472a54a7b2a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=colombo"; 

async function checkWeather(){
    const response = await fetch(apiUrl+ `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
}