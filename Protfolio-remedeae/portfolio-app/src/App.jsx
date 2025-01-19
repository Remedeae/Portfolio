import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar.jsx';
import Home from './Pages/home.jsx';
import SocialMedia from './SocialMeda.jsx';
import Bhromaon from './Pages/bhromaon.jsx';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/bhromaon" element={<Bhromaon />}/>
        </Routes>
        <SocialMedia />
      </BrowserRouter>
    </>
  );
};

export default App;
