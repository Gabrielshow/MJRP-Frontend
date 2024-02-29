import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, About, FAQs, Free, Intrepret, Accuracy, Usage } from './containers';
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
          <Route path="/faqs/How-to-use-MJRP?" element={<Usage/>} />
          <Route path="faqs/is-MJRP-free-to-use?" element={<Free/>}/>
          <Route path="faqs/How-to-intrepret-MJRP-results?" element={<Intrepret/>}/>
          <Route path="faqs/How-accurate-is-MJRP?" element={<Accuracy/>}/>
        </Routes>
    </Router>
  );
}

export default App;
