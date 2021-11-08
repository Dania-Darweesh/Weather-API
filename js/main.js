
const apikey = '04c2da5ffc8ec18ecedd45d8daba00b7';
const temperature = document.querySelector('.weather-temp');
const premessage = document.querySelector('.PRESSURE');
const humid = document.querySelector('.humidity-view');
const wind = document.querySelector('.wind-view');
const nameheader = document.querySelector('.location');
const dayname = document.querySelector('.date-dayname')

const btn = document.querySelector('.location-button');




const d = new Date();

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let day = weekday[d.getDay()];
dayname.innerHTML = day;

const dateview = d.toISOString().slice(0,10);
document.getElementsByClassName('date-day')[0].innerHTML=dateview;


btn.onchange = function(){
  const nnn = btn.value;
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nnn}&appid=${apikey}&units=metric`)
  .then(response => response.json())
  .then(data => {
    const temp=Math.floor(data.main.temp);
    temperature.innerHTML=temp+'°C';

    const  pres=(data.main.pressure);
    premessage.innerHTML= pres;

    const humidity=(data.main.humidity);
    humid.innerHTML=humidity;

    const speed=(data.wind.speed);
    wind.innerHTML=speed+' Km';

    const name=(data.name);
    nameheader.innerHTML=name;


    console.log(data)
  

});

}


