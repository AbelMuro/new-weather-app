import {defineStore} from 'pinia';

const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday', 
    'Saturday',
    'Sunday'
]

const useWeatherStore = defineStore('weather', {
    state: () => ({
        location: '',
        date: '',
        current_temp: '',
        weather: '',
        feels_like: '',
        humidity: '',
        wind: '',
        precipitation: '',
        hourly_forecast: [],
        daily_forecast: [],
    }),
    actions: {
        updateWeather(weather) {
            console.log(weather);
            const current = weather.current;
            const units = weather.current_units;
            const hourly = weather.hourly;
            const hourly_units = weather.hourly_units;
            const daily = weather.daily;
            const daily_units = weather.daily_units;
            this.current_temp = current.temperature_2m;
            this.date = new Date(current.time);
            this.wind = `${current.wind_speed_10m} ${units.wind_speed_10m}`;  
            const hourlyForecast = [];
            const dailyForecast = [];
            for(let i = 0; i < hourly.temperature_2m.length; i++){
                const date = new Date(hourly.time[i]);
                const day = date.getDay();
                let hour = date.getHours();
                hour =  hour % 12;
                hour = hour ? hour : 12;
                
                hourlyForecast.push({
                    temp: `${hourly.temperature_2m[i]} ${hourly_units.temperature_2m}`,
                    hour,
                    day: days[day],
                });                
            }

            this.hourly_forecast = hourlyForecast;
            for(let i = 0; i < 7; i++)
                dailyForecast.push({
                        precipitation: `${daily.precipitation_sum[i]} ${daily_units.precipitation_sum}`,
                        max: `${daily.temperature_2m_max[i]} ${daily_units.temperature_2m_max}`,
                        min: `${daily.temperature_2m_min[i]} ${daily_units.temperature_2m_min}`
                });
            this.daily_forecast = dailyForecast;
        }
    }
});

export default useWeatherStore;