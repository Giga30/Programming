import { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [input, setInput] = useState('');

  const updateInput = function(e){
    setInput(e.target.value);
  }

  const formatCurrencies = (currencies) => {
    return currencies ? Object.values(currencies).map(currency => currency.name).join(', ') : 'N/A';
  };

  const formatLanguages = (languages) => {
    return languages ? Object.values(languages).join(', ') : 'N/A';
  };

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(input.toLowerCase())
  );

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        const sorted = data.sort((a, b) => a.name.common.localeCompare(b.name.common))
        setCountries(sorted);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <input value={input} onChange={updateInput} placeholder='Search for a country'></input>
      
      {filteredCountries.map(country => (
        <div className='container' key={country.name.common}>
          <div className='div'><img src={country.flags.png}></img></div>
          
          
          <p><strong>Name:</strong> {country.name.common}</p>
          <p><strong>Currency:</strong> {formatCurrencies(country.currencies)}</p>
          <p><strong>Area:</strong> {country.area}</p>
          <p><strong>Capital City:</strong> {country.capital}</p>
          <p><strong>Population:</strong> {country.population}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
