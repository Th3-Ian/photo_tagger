import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Gamepage from './components/Gamepage';
import Beach from './assets/beach.jpg';
import Spain from './assets/spain.jpg';
import Greece from './assets/greece.jpg';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/australia'
            element={<Gamepage name={'Paradise Beach, Aus'} imgSrc={Beach} />}
          />
          <Route
            path='/spain'
            element={<Gamepage name={'Bunol, Spain'} imgSrc={Spain} />}
          />
          <Route
            path='/greece'
            element={<Gamepage name={'Ancient Greece'} imgSrc={Greece} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
