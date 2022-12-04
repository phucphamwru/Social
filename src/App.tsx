import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'; 
import './App.css';
import './styles/sb-admin-2.min.css';
import Login from './pages/Account/login';
import HomePage from './pages/Home';
import NewsPage from './pages/News';
import ContactPage from './pages/Contact';

function App() {
  return (
    <div className="App" id='wrapper'>
      <nav>
        <ul>
          <li>
            <Link to='/'>HomePage</Link>
          </li>
          <li >
            <Link to="/news">NewsPage</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/news' element={<NewsPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
