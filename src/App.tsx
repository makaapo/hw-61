import React, {useState, useEffect, useCallback} from 'react';
import InfoCountry from './components/InfoCountry/InfoCountry';
import Countries from './components/Countries/Countries';
import {Country, InfoCountries} from './types';
import axios from 'axios';
import {ALPHA_URL, BASE_URL} from './constants';
import './App.css';

const App: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [clickedCountry, setClickedCountry] = useState<null | InfoCountries>(null);

  const getInfo = useCallback(async (alpha3Code: string) => {
    try {
      const {data} = await axios.get<InfoCountries>(ALPHA_URL + alpha3Code);

      const countryInfo: InfoCountries = {
        name: data.name,
        capital: data.capital,
        population: data.population,
        flag: data.flag,
      };
      setClickedCountry(countryInfo);
    } catch (error) {
      console.error('Ошибка получения информации о стране:', error);
    }
  }, [ALPHA_URL]);

  const fetchCountries = async () => {
    try {
      const {data} = await axios.get<Country[]>(BASE_URL);
      const countryList = data.map((country) => ({
        name: country.name,
        alpha3Code: country.alpha3Code,
      }));
      setCountries(countryList);
    } catch (error) {
      console.error('Ошибка при выборе стран:', error);
    }
  };

  useEffect(() => {
    void fetchCountries();
  }, [fetchCountries]);

  return (
    <div className="container">
      <Countries countries={countries} getInfo={getInfo}/>
      {clickedCountry && (
        <InfoCountry
          name={clickedCountry.name}
          capital={clickedCountry.capital}
          population={clickedCountry.population}
          flag={clickedCountry.flag}
        />
      )}
    </div>
  );
};

export default App;