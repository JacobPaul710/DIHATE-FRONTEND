import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './components/pages/home/Home';
import Registration from './components/pages/registration/Registration';
import Icebox from './components/pages/icebox index/IceBox';
import NewMeal from './components/pages/new meal/NewMeal';
import EditMeal from './components/pages/meal edit/EditMeal';
import Logout from './components/logout/Logout';
import ConfirmDelete from './components/pages/delete meal/ConfirmDelete';

import './themes/bootstrap.min.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/icebox' element={<Icebox />} />
      <Route path='/newmeal' element={<NewMeal />} />
      <Route path='/edit/:mealName/:id' element={<EditMeal />} />
      <Route path='/confirm/:mealName/:id' element={<ConfirmDelete />} />
      <Route path='/logout' element={<Logout />} />
    </Routes>
  )
}


export default App;
