import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path="/australia" element={} />
					<Route path="/spain" element={} />
					<Route path="/greece" element={} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
