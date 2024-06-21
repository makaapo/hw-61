import React from 'react';
import './InfoCountry.css';
import {InfoCountries} from '../../types';

const InfoCountry: React.FC<InfoCountries> = ({name, capital, population, flag}) => (
  <div className="info">
    <div className="main-info">
      <div className="text">
        <h2>Страна: {name}</h2>
        <span className="result">Столица: {capital}</span>
        <span className="result">Население: {population} человек</span>
      </div>
      <div className="flag">
        <img className="flag-img" src={flag} alt="flag" />
      </div>
      <h2>Граничит с:</h2>
    </div>
  </div>
);

export default InfoCountry;