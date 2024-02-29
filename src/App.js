import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, About, FAQs } from './containers';
import Navbar from './components/Navbar';
// import Navbarn from './components/Navbarn';


function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}  />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
    </Router>
  );
}

export default App;
