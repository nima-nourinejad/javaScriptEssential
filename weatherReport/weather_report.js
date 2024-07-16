function showweatherDetails(event) {
    event.preventDefault();
    const apiKey = 'c4f86ece00bc8aa272652ac9065af12d';
    const city = document.getElementById('city').value;
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    let farsiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fa`;
    if (!city){
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        farsiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=fa`;
    }
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                              <h3>Latitude: ${data.coord.lat} Longitude: ${data.coord.lon}</h3>
                              <p>Temperature: ${data.main.temp} &#8451;</p>
                              <p>Feels like: ${data.main.feels_like} &#8451;</p>
                              <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
      });
    fetch(farsiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherFarsi = document.getElementById('farsi');
      weatherFarsi.innerHTML = `<h2>${data.name}</h2>
                              <p>${data.main.temp} (${data.main.feels_like}) &#8451;</p>
                              <p>${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherFarsi = document.getElementById('farsi');
        weatherFarsi.innerHTML = ``;
      });
}
document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );

