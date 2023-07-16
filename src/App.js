import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './components/pages/home/Home';
import Registration from './components/pages/registration/Registration';
import Icebox from './components/pages/icebox index/IceBox';
import NewMeal from './components/pages/new meal/NewMeal';
import EditMeal from './components/pages/meal edit/EditMeal';
import DeleteMeal from './components/pages/delete meal/DeleteMeal';

function App () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/icebox' element={<Icebox />} />
      <Route path='/newmeal' element={<NewMeal />} />
      <Route path='/editmeal' element={<EditMeal />} />
      <Route path='/deletemeal' element={<DeleteMeal />} />
    </Routes>
  )
}


export default App;
