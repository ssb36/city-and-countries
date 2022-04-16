import { Divider } from '@mui/material';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { City } from './components/City/City';
import { CityList } from './components/City/CityList';
import { Country } from './components/Country/Country';
import { CountryList } from './components/Country/CountryList';
import { Home } from './components/Home';
import { Navbaar } from './components/Navbaar';

function App() {




  return (
    <div className="App">


      <Navbaar />
      <br />
      <Divider />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/add-country" element={<Country />} />
        <Route path="/add-city" element={<City />} />

        <Route path="/cities" element={<CityList />} />

        <Route path="/countries" element={<CountryList />} />

      </Routes>
    </div>
  );
}

export default App;
