import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import FAQs from '../containers/FAQs/FAQs';
import About from '../containers/About/About';

const Navbar_edit = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  return (
   <nav className="navbar"> 
<div className="container"> <h1>JRP implementation</h1>
<ul >  
    <li>
    <Link to="/about" >
            About
        </Link>
    </li>
    <li>
    <Link to="/faqs" >
      FAQ's
    </Link>
    </li>
</ul>
</div>
   </nav> 
  )
}

export default Navbar_edit