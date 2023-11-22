import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';   
import Home from './components/Home/Home';
import Navbar from "./components/navbar/Navbar";
import About from './components/about/About';
import Gallery from './components/gallery/Gallery';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/idAbout' element={<About/>}/>
          <Route exact path='/idGallery' element={<Gallery/>}/>
          <Route exact path='/idContact' element={<Contact/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;