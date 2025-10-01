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
            console.log(weather)
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
            this.wind = `${current.wind_speed_10m} ${units.wind_speed_10m}`;  
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
        convertTempUnits(temp) {
            if(!this.current_temp) return;
            if(temp === 'fahrenheit'){
                this.current_temp = ((this.current_temp * 1.8) + 32).toFixed(1);
                this.feels_like = ((this.feels_like * 1.8) + 32).toFixed(1);
                for(let [day, temp] of Object.entries(this.hourly_forecast)){
                    if(day === 'current_day') continue;
                    for(let i = 0; i < temp.length; i++){
                        const temperature = temp[i].temp;
                        this.hourly_forecast[day][i].unit = 'F'
                        this.hourly_forecast[day][i].temp = ((temperature * 1.8) + 32).toFixed(1);
                    }                    
                }

                for(let i = 0; i < this.daily_forecast.length; i++){
                    const max = this.daily_forecast[i].max;
                    const min = this.daily_forecast[i].min;
                    this.daily_forecast[i].max = ((max * 1.8) + 32).toFixed(1);
                    this.daily_forecast[i].min = ((min * 1.8) + 32).toFixed(1);
                }
            }
            else{
                this.current_temp = ((this.current_temp - 32) / (9/5)).toFixed(1);
                this.feels_like = ((this.feels_like - 32) / (9/5)).toFixed(1);
                for(let [day, temp] of Object.entries(this.hourly_forecast)){
                    if(day === 'current_day') continue;
                    for(let i = 0; i < temp.length; i++){
                        const temperature = temp[i].temp;
                        this.hourly_forecast[day][i].unit = 'C';
                        this.hourly_forecast[day][i].temp = ((temperature - 32) / (9/5)).toFixed(1);
                    }                    
                }
  
                for(let i = 0; i < this.daily_forecast.length; i++){
                    const max = this.daily_forecast[i].max;
                    const min = this.daily_forecast[i].min;
                    this.daily_forecast[i].max = ((max - 32) / (9/5)).toFixed(1);
                    this.daily_forecast[i].min = ((min - 32) / (9/5)).toFixed(1);
                }
            }
            convert
        },
        clearState() {
            this.error = false;
            this.loading = false;
            this.location = '';
            this.date = '';
            this.current_temp = '';
            this.condition = '';
            this.feels_like = '';
            this.humidity = '';
            this.wind = '';
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