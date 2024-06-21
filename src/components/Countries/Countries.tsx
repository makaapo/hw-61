import React from 'react';
import './Countries.css';
import {Country} from '../../types';

interface Props {
  countries: Country[];
  getInfo: (name: string) => void;
}

const Countries: React.FC<Props> = ({countries, getInfo}) => (
  <div className="countries">
    {countries.map((country, index) => (
      <div onClick={() => getInfo(country.alpha3Code)} className="list-country" key={index}>
        {country.name}
      </div>
    ))}
  </div>
);

export default Countries;