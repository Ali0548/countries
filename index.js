const express = require('express');
const { Country, State, City } = require('country-state-city');
const data = {};
data.countries = require('./countries.json');
data.cities = require('./cities.json');
data.states = require('./states.json');



const app = express();
const PORT = process.env.PORT || 5000;

app.get('/getAAllCountries',(req,res)=>{
      return res.json(data.countries);
});

app.get('/getState/:countryCode', (req,res)=>{
    const { countryCode } = req.params;
    console.log(countryCode)
    const states = data.states.states.filter(state => state.countryCode === countryCode);
    return res.json(states);
});
app.get('/getCities/:countryCode/:cityCode', (req,res)=>{
    const { cityCode, countryCode } = req.params;

    const cities = data.cities.filter(city => city.stateCode === cityCode && city.countryCode===countryCode );
     
    return res.json(cities);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});