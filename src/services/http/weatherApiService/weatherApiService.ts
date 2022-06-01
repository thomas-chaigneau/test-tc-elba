import apiService from '../apiService';

const baseUrl = 'https://api.openweathermap.org/data/3.0';

const defaultParams = {
  appid: process.env.REACT_APP_WEATHER_API_KEY,
  units: 'metric',
}

type TAvailablePath = 'onecall';

interface IGetWeatherApiParams {
  lat: number;
  lon: number;
}

export interface IGetWeatherApiRes {
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

const defaultResponse = {
  temp: 20,
  feels_like: 18,
  pressure: 1014,
  humidity: 65,
  dew_point: 275.99,
  uvi: 2.55,
  clouds: 40,
  visibility: 10000,
  wind_speed: 40,
};

const weatherApiService = {
  get: async (path: TAvailablePath, params: IGetWeatherApiParams): Promise<IGetWeatherApiRes> =>
    apiService
      .get(`${baseUrl}/${path}`, { ...defaultParams, ...params })
      .then((res) => res.current)
      .catch((err) => {
        console.log(err);
        throw defaultResponse;
      })
};

export default weatherApiService;