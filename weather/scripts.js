const weatherData = document.querySelectorAll('.infoinfoweather h4');
const mainTemperature = document.querySelectorAll('.temptemp');
const mainIcon = document.querySelector('.weatherimage img');
let city = 'Wroclaw';

const currentweather = `http://api.openweathermap.org/data/2.5/weather?q=${city}&mode=json&cnt=7&APPID=436d1eea572e5d346f8cd5eb7c8dfa14&units=metric`;

fetch(currentweather)
    .then(res => res.json())
    .then(data => {
        console.log(data.main.humidity);
        weatherData[0].textContent += `${checkSnow(data)}%`
        weatherData[1].textContent += `${data.main.humidity}%`;
        weatherData[2].textContent += `${data.wind.speed}km/h`;
		weatherData[3].textContent += `${data.main.pressure}hPa`;
        mainTemperature[0].textContent += `${data.main.temp}°C`;
        mainIcon.src = `./img/${data.weather[0].icon}.svg`;
    })

function checkSnow(obj) {
    return (obj.snow) ? ((obj.snow['3h']) * 100) : '0';
}




//aktualny dzień
function currentDay() {
    let day = new Date().getDay();
    const header = document.querySelector('.mainboxx h2');

    switch (day) {
        case 0:
            header.textContent = 'Niedziela';
            break;
        case 1:
            header.textContent = 'Poniedziałek';
            break;
        case 2:
            header.textContent = 'Wtorek';
            break;
        case 3:
            header.textContent = 'Środa';
            break;
        case 4:
            header.textContent = 'Czwartek';
            break;
        case 5:
            header.textContent = 'Piątek';
            break;
        case 6:
            header.textContent = 'Sobota';
            break;
        default:
            header.textContent = '';
    }
}
window.addEventListener('load', currentDay);