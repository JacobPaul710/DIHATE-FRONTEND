import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './components/pages/home/Home';
import Registration from './components/pages/registration/Registration';
import Icebox from './components/pages/icebox index/IceBox';

function App () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/icebox' element={<Icebox />} />
    </Routes>
  )
}


export default App;
