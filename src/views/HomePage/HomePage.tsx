import React, { useState, useEffect } from 'react';

import weatherApiService, { IGetWeatherApiRes } from '../../services/http/weatherApiService/weatherApiService';
import geolocationService, { ICurrentLocation } from '../../services/geolocation/geolocationService';

import Button from '../../components/Button/Button';
import Select from '../../components/Select/Select';

import { getBackgroundImage } from './utils';

import styles from './HomePage.module.css';

const HomePage = () => {

  const [userPosition, setUserPosition] = useState<ICurrentLocation | null>(null);
  const [weather, setWeather] = useState<IGetWeatherApiRes | null>(null);

  const [selectedCity, setSelectedCity] = useState<string>('Paris');

  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [favoriteCities, setFavoriteCities] = useState<string[]>([]);

  useEffect(() => {
    geolocationService
      .getCurrentLocation(navigator)
      .then((pos) => setUserPosition(pos))
      .catch((defaultUserPos) => setUserPosition(defaultUserPos))
  }, [])

  useEffect(() => {
    if (userPosition) {
      weatherApiService
        .get('onecall', userPosition)
        .then((pos) => setWeather(pos))
        .catch((defaultPosToDisplay) => setWeather(defaultPosToDisplay))
    }
  }, [userPosition])

  const addCityToFavoriteList = () => {
    if (searchInputValue !== '') {
      setFavoriteCities((current) => [...current, searchInputValue]);
      setSearchInputValue('');
    }
  }

  const BackgroundImg = getBackgroundImage(weather ? weather.temp : null);

  return (
    <div className={styles.root} style={{ backgroundImage: `url(${BackgroundImg})` }}>
      <div className={styles.favoriteCitiesSection}>
        <input // sould be in components folder
          value={searchInputValue}
          className={styles.searchInput}
          onChange={(e) => setSearchInputValue(e.target.value)}
        />
        <Button onClick={addCityToFavoriteList} text="Add to Favorite" />
        <Select
          options={[selectedCity, ...favoriteCities]}
          onChange={(e) => setSelectedCity(e.target.value)}
          selectedOption={selectedCity}
        />
      </div>

      <div className={styles.selectedCitySection}>
        <div className={styles.temValue}>
          {weather ? `${weather.temp}°` : null}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
