import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.scss';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Main from './components/mainComponent/mainComponentContainer';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/search' element={<Main />}>
        </Route>
        <Route path='*' element={<Navigate to='/search'/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
