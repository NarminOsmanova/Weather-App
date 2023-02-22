const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

const getWeather = async (city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    const data = await response.json()
    return showWeather(data)
}
const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather.innerHTML = `
        <div class='weather-app'>
        <h6>Weather in ${data.name}</h6>
        <h2>${data.main.temp} ℃</h2>
        <div class="d-flex">
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            <h4> ${data.weather[0].main} </h4>
        </div>
            <h6>Humidity: ${data.main.humidity} %</h6>
        </div>
    `
}
form.addEventListener(
    "submit",
    function (event) {
        getWeather(search.value)
        event.preventDefault();
    }
)