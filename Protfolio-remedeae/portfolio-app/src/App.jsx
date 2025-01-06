import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar.jsx';
import Home from './home.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
