import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar.jsx';
import Home from './Pages/home.jsx';
import SocialMedia from './SocialMeda.jsx';
import Bhromaon from './Pages/bhromaon.jsx';
import Test from './Pages/test.jsx';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/bhromaon" element={<Bhromaon />}/>
          <Route path="/test" element={<Test />}/>

        </Routes>
        <SocialMedia />
      </BrowserRouter>
    </>
  );
};

export default App;
