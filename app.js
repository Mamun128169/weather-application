const apiKey = "cc2563ed0b2a1bba547402bb8f2d7f69";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");
const weatherIcon = document.getElementById("weather-icon");

const checkWeather = async (city) => {
    const res = await fetch(apiUrl + `&appid=${apiKey}` + `&q=${city}`);
    const data = await res.json();

    if (res.status == 404) {
        document.getElementById("error").style.display = "block";
        document.getElementById("weather").style.display = "none";
    } else {

        document.getElementById("city").innerText = data.name;
        document.getElementById("temp").innerText = Math.round(data.main.temp);
        document.getElementById("humidity").innerText = data.main.humidity;
        document.getElementById("wind").innerText = data.wind.speed;
    
        switch (data.weather[0].main) {
            case "Clouds":
                weatherIcon.src = "./images/clouds.png";
                break;
            case "Clear":
                weatherIcon.src = "./images/clear.png";
                break;
            case "Drizzle":
                weatherIcon.src = "./images/drizzle.png";
                break;
            case "Mist":
                weatherIcon.src = "./images/mist.png";
                break;
            case "Snow":
                weatherIcon.src = "./images/snow.png";
                break;
            case "Rain":
                weatherIcon.src = "./images/rain.png";
                break;
        }
    
        document.getElementById("weather").style.display = "block";
        document.getElementById("error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    let city = searchBox.value;

    if (city === "") {
        alert("Please enter a valid city name!");
        return;
    } 
    checkWeather(city);
});
