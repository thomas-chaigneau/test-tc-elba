import React, { useState, useEffect } from 'react';

import weatherApiService, { IGetWeatherApiRes } from '../../services/http/weatherApiService/weatherApiService';
import geolocationService, { ICurrentLocation } from '../../services/geolocation/geolocationService';

import Button from '../../components/Button/Button';

import styles from './HomePage.module.css';

const HomePage = () => {

  const [userPosition, setUserPosition] = useState<ICurrentLocation | null>(null);
  const [positionToDisplay, setPositionToDisplay] = useState<IGetWeatherApiRes | null>(null);

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
        .then((pos) => setPositionToDisplay(pos))
        .catch((defaultPosToDisplay) => setPositionToDisplay(defaultPosToDisplay))
    }
  }, [userPosition])

  console.log({ userPosition })
  console.log({ positionToDisplay })

  return (
    <div className={styles.root}>
      HomePage
      <Button />
    </div>
  );
};

export default HomePage;
