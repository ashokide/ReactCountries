import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = props => {
  let [value, setValue] = useState('');
  let [load, setLoad] = useState(false);
  let [country, setCountry] = useState([]);
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(data => {
        setCountry(data.data);
        setLoad(true);
      })
      .catch(e => console.log(e));
  }, []);

  if (!load) return null;

  return (
    <div>
      <p>Home</p>
      <p>Country : {value}</p>
      <div>
        <input
          type="search"
          value={value}
          onChange={e => {
            setValue(e.target.value);
          }}
          list="countries"
        />
      </div>
      <button
        variant="outline-primary"
        disabled={!value}
        onClick={() => {
          props.history.push(
            `/country/${value}`,
            (country = [...country.filter(e => e.name === value)])
          );
        }}
      >
        Get Data
      </button>
      <datalist id="countries">
        {country.map((e, k) => {
          return <option value={e.name} key={k} />;
        })}
      </datalist>
    </div>
  );
};

export default Home;
