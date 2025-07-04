// ✅ OpenWeatherMap API Key
const apiKey = "9587aec7362e1b523d05435d082bb7ef";

// 🌦️ Get weather by city name
async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("City not found");
    }

    const data = await res.json();

    // 📄 Update DOM with weather data
    document.getElementById("cityName").textContent = data.name;
    document.getElementById("description").textContent = data.weather[0].description;
    document.getElementById("temp").textContent = data.main.temp;
    document.getElementById("humidity").textContent = data.main.humidity;
    document.getElementById("wind").textContent = data.wind.speed;
    document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    document.getElementById("weatherInfo").classList.remove("hidden");
  } catch (err) {
    alert("Error: " + err.message);
  }
}
