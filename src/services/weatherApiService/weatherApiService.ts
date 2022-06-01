import apiService from '../apiService';

interface IGetWeatherApiRes {
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
}

const baseUrl = 'https://api.openweathermap.org/data/3.0';

const defaultParams = {
  appid: process.env.REACT_APP_WEATHER_API_KEY,
}

console.log(process.env.REACT_APP_WEATHER_API_KEY);

type TAvailablePath = 'onecall';

interface IGetWeatherApiParams {
  lat: number;
  lon: number;
}

const weatherApiService = {
  get: async (path: TAvailablePath, params: IGetWeatherApiParams): Promise<IGetWeatherApiRes> =>
    apiService
      .get(`${baseUrl}/${path}`, { ...defaultParams, ...params })
      .then((res) => res.current)
};

export default weatherApiService;