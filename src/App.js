import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbare';
import { Routes, Route } from 'react-router-dom';
import Contactus from './components/contactus';
import Home from './components/home'
import Planting from './components/planting'
import Aboutus from './components/aboutus'
import Footer from './components/Footer';
import Details from './components/Details';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App ">
      
        <Navbar />
        
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/planting' element={<Planting />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/Details/:id' element={<Details />} />

          
        </Routes>
        <Footer />
      

    </div>
  );
}

export default App;
