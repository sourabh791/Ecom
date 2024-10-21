import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Contact from './pages/Contact';
import DeliveryInformation from './pages/DeliveryInformation';
import PaymentInformation from './pages/PaymentInformation';
import Navbar from './components/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Subscribe from './pages/Subscribe';




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/subscribe' element={<Subscribe/>}/>
        <Route path="/delivery-information" element={<DeliveryInformation />} />
        <Route path="/payment-information" element={<PaymentInformation />} />
        
      </Routes>
    </Router>
  );
}

export default App;
