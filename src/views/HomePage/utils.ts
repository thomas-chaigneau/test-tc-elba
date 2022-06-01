import goodWeatherBg from '../../assets/good-weather.jpeg';
import coldWeatherBg from '../../assets/cold-weather.webp';
import nightWeatherBg from '../../assets/night-sky.webp';


export const getBackgroundImage = (temp: number | null) => {
  console.log(new Date().getHours())
  const currentHour = new Date().getHours();
  if (currentHour >= 21) return nightWeatherBg;
  if (!temp) return goodWeatherBg;
  if (temp < 10) return coldWeatherBg;
  return goodWeatherBg;
};