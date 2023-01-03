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
          {/* <Route path="/picture1" element={} />
					<Route path="/picture2" element={} />
					<Route path="/picture3" element={} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
