// Weather API Key
const weatherAPI = 'a9cba5da1b6fc861243aefd5909091c6'


// Function to grab user data
const responseAPI = async (zip) => {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=a9cba5da1b6fc861243aefd5909091c6&units=imperial`);
    let data = await response.json();
    return await data;
}


const awaitData = async (data, zip) => {
    data = await data;

    let img = document.getElementById('card-img');
    let high = document.getElementById('High');
    let low = document.getElementById('Low');
    let humidity = document.getElementById('Humidity');

    document.getElementById('card-title').innerText = await zip;
    img.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
    high.innerHTML = `<strong>High:</strong> ${Math.round(data.main.temp_max)}&#8457`
    low.innerHTML = `<strong>Low:</strong> ${Math.round(data.main.temp_min)}&#8457`
    humidity.innerHTML = `<strong>Humidity:</strong> ${Math.round(data.main.humidity)}%`

}

const weatherForm = document.getElementById('weather');
weatherForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    let zip = e.target.zip.value;
    let data = await responseAPI(zip);
    await awaitData(data, zip);
});