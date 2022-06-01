import React, { useEffect } from 'react';

import weatherApiService from '../../services/weatherApiService/weatherApiService';

import Button from '../../components/Button/Button';

import styles from './HomePage.module.css';

const HomePage = () => {

  useEffect(() => {
    weatherApiService
    .get('onecall', {
      lat: 33.44,
      lon: -94.04,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  })
  return (
    <div className={styles.root}>
      HomePage
      <Button />
    </div>
  );
};

export default HomePage;
