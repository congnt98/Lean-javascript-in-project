var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var time = document.querySelector('.time')
var temperature = document.querySelector('.temperature')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility')
var wind = document.querySelector('.wind')
var sun = document.querySelector('.sun')


async function changeWeatherUI(params) {
    search.value.trim()
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=ha noi&appid=d0ec57c362092e50255696f37963d07d`
    let data = await fetch(apiUrl).then(res => res.json())
    console.log(data);
}

changeWeatherUI()