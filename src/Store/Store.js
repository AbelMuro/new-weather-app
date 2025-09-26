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
        hourly_forecast: {
            current_day: 'Monday',
            Monday: [],
            Tuesday: [],
            Wednesday: [],
            Thursday: [],
            Friday: [],
            Saturday: [],
            Sunday: []
        },
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
            this.location = weather.displayName;
            this.current_temp = current.temperature_2m;
            this.date = new Date(current.time);
            this.wind = `${current.wind_speed_10m} ${units.wind_speed_10m}`;  
            for(let i = 0; i < hourly.temperature_2m.length; i++){
                const date = new Date(hourly.time[i]);
                const day = days[date.getDay()];
                let hour = date.getHours();
                const time = hour >= 12 ? 'pm' : 'am'
                hour =  hour % 12;
                hour = hour ? hour : 12;
                this.hourly_forecast[day].push({
                    temp: `${hourly.temperature_2m[i]} ${hourly_units.temperature_2m}`,
                    hour: `${hour} ${time}`,                    
                })              
            }

            for(let i = 0; i < 7; i++){
                const date = new Date(daily.time[i]);
                const day = days[date.getDay()];
                this.daily_forecast.push({
                        precipitation: `${daily.precipitation_sum[i]} ${daily_units.precipitation_sum}`,
                        max: `${daily.temperature_2m_max[i]}`,
                        min: `${daily.temperature_2m_min[i]}`,
                        day,
                });                
            }

        }
    },
    updateCurrentDay(day) {
        this.hourly_forecast.current_day = day;
    }
});

export default useWeatherStore;