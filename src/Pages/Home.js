import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

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
      <Input
        type="search"
        value={value}
        label="Search Country"
        onChange={e => {
          setValue(e.target.value);
        }}
        list="countries"
      />
      <datalist id="countries">
        {country.map((e, k) => {
          return <option value={e.name} key={k} />;
        })}
      </datalist>
      <Button
        type="primary"
        icon={<SearchOutlined />}
        disabled={!value}
        onClick={() => {
          props.history.push(
            `/country/${value}`,
            (country = [...country.filter(e => e.name === value)])
          );
        }}
      >
        Get Data
      </Button>
    </div>
  );
};

export default Home;
