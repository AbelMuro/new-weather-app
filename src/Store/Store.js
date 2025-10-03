import {defineStore} from 'pinia';

const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday', 
    'Saturday',
    'Sunday'
];

const getCondition = (code) => {
    const weathercodes = {
        "sunny" : [0, 1],
        "partlyCloudy": [2, 2],
        "overcast": [3, 44],
        "fog": [45, 60],
        "rainy": [61, 70],
        "snow": [71, 94],
        "storm": [95, 100]
    }

    for(let weather of Object.entries(weathercodes)){
        const condition = weather[0];
        const range = weather[1];

        if(range[0] <= code && code <= range[1])
            return condition;
    }

}


const useWeatherStore = defineStore('weather', {
    state: () => ({
        error: false,
        loading: false,
        noSearchResults: false,
        location: '',
        date: '',
        current_temp: '',
        condition: '',
        feels_like: '',
        humidity: '',
        units: {
            wind_speed: 'km/h',
            temp: 'celsius'
        },
        wind_speed: 0,
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
            this.clearState();
            const current = weather.current;
            const units = weather.current_units;
            const hourly = weather.hourly;
            const hourly_units = weather.hourly_units;
            const daily = weather.daily;
            const daily_units = weather.daily_units;
            const weathercode = current.weathercode;
            this.feels_like = current.apparent_temperature;
            this.precipitation = current.precipitation;
            this.humidity = current.relative_humidity_2m;
            this.location = weather.displayName;
            this.current_temp = current.temperature_2m;
            this.date = new Date(current.time);
            this.wind_speed = current.wind_speed_10m;
            for(let i = 0; i < hourly.temperature_2m.length; i++){
                const date = new Date(hourly.time[i]);
                const day = days[date.getDay()];
                let hour = date.getHours();
                const time = hour >= 12 ? 'pm' : 'am'
                hour =  hour % 12;
                hour = hour ? hour : 12;
                this.hourly_forecast[day].push({
                    temp: hourly.temperature_2m[i],
                    unit: hourly_units.temperature_2m,
                    hour: `${hour} ${time}`,       
                    condition: getCondition(hourly.weathercode[i])             
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
                        condition: getCondition(daily.weathercode[i])
                });                
            }
            this.condition = getCondition(weathercode);
        },
        setCurrentDay(day) {
            this.hourly_forecast.current_day = day;
        },
        setError(error){
            this.error = error;
        },
        setNoSearchResults(results){
            this.noSearchResults = results;
        },
        setLoading(isLoading){
            this.loading = isLoading;
        },
        setWindSpeedUnits(unit) {
            this.units.wind_speed = unit;
        },
        setTempUnits(unit) {
            this.units.temp = unit;
        },
        clearState() {
            this.location = '';
            this.date = '';
            this.current_temp = '';
            this.condition = '';
            this.feels_like = '';
            this.humidity = '';
            this.wind = {
                speed: 0,
                units: ''
            };
            this.precipitation = '';
            this.hourly_forecast = {
                current_day: 'Monday',
                Monday: [],
                Tuesday: [],
                Wednesday: [],
                Thursday: [],
                Friday: [],
                Saturday: [],
                Sunday: []
            },
            this.daily_forecast = [];
        }
    },
});

export default useWeatherStore;