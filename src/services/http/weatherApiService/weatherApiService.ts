import apiService from '../apiService';

const baseUrl = 'https://api.openweathermap.org/data/3.0';

const defaultParams = {
  appid: process.env.REACT_APP_WEATHER_API_KEY,
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
  dt: 1646318698,
  sunrise: 1646306882,
  sunset: 1646347929,
  temp: 282.21,
  feels_like: 278.41,
  pressure: 1014,
  humidity: 65,
  dew_point: 275.99,
  uvi: 2.55,
  clouds: 40,
  visibility: 10000,
  wind_speed: 8.75,
  wind_deg: 360,
  wind_gust: 13.89,
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