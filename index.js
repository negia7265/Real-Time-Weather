const searchForm=document.querySelector('.search-location');
const cityValue=document.querySelector('input');
const cityName=document.querySelector('.city-name');
const cardBody=document.querySelector('.card-body');
const timeImage = document.querySelector('.card-top img')

updateWeatherApp=(city)=>{
    const imageName=city.weather[0].icon;
    const iconSrc=`https://openweathermap.org/img/wn/${imageName}@2x.png`
    cityName.innerHTML='<h3>'+city.name+'</h3>';
    cardBody.innerHTML=`
    <div class="card-mid row">
                        <div class="col-8 text-center temp">
                            <span>${Math.round(city.main.temp-273.15)}&deg;C</span>
                        </div>
                        <div class="col condition-temp">
                            <p class="condition">${city.weather[0].main}</p>
                            <div>
                                <p>Max Temp</p>
                            <p class="high">${Math.round(city.main.temp_max-273.15)}&deg;C</p>
                            </div>
                            <div>
                            <p>Min Temp</p>
                            <p class="low">${Math.round(city.main.temp_min-273.15)}&deg;C</p>
                            </div>
                        </div>
                    </div>
                    <div class="icon-container card mx-auto">
                        <img  src=${iconSrc}>
                    </div>
                    <div class="card-bottom px-5 py-4 row">
                       <div class="col text-center">
                            <p>${Math.round(city.main.feels_like-273.15)}&deg;C</p>
                            <span>Feels Like</span>
                       </div>
                       <div class="col text-center">
                        <p>${city.main.humidity}%</p>
                        <span>Humidity</span>
                   </div>
                   
                    </div>

    `;
    if(imageName.includes('d')){
    timeImage.src="img/day_image.svg";
    }
    else{
    timeImage.src="img/night_image.svg";
    }
}

searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const citySearched=cityValue.value;
    searchForm.reset();
    requestCity(citySearched)
    .then((data)=>{
        updateWeatherApp(data);
    })
    .catch((error)=>{console.log(error)})
})
