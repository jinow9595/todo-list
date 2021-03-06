const API_KEY = "5bf2d22c3e516c63bfbcb4f339b7244b";

const weatherSpan = document.querySelector("footer div span");

navigator.geolocation.getCurrentPosition(successGeo, errorGeo);

function successGeo(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;

    fetch(url).then(response => response.json().then(data => {
        const weatherImg = document.createElement("img");

        weatherImg.style.marginLeft = "10px";
        weatherSpan.innerText = `${data.name}, ${data.main.temp}°C, ${data.wind.speed}m/s`;
        weatherImg.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

        weatherSpan.parentNode.appendChild(weatherImg);
    }));
}

function errorGeo() {
    console.log("can't find location or weather");
}