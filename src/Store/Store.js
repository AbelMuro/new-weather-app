import {defineStore} from 'pinia';

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

        }
    }
});

export default useWeatherStore;