import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaHome, FaInfo, FaQuestionCircle } from 'react-icons/fa';



const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  return (
    <nav className="navbar" style={{ margin: 10 }}>
      <div className="container">
        <h1>JRP implementation</h1>
        <ul>
          <li>
            <Link to="/" onMouseEnter={() => setHoveredItem('home')}
        onMouseLeave={() => setHoveredItem(null)} style={{ color: hoveredItem === 'home' ? 'purple' : 'black' , padding: 5}}>
              Home <FaHome />
            </Link>

          </li>
          <li>
            <Link to="/about" onMouseEnter={() => setHoveredItem('about')}
        onMouseLeave={() => setHoveredItem(null)} style={{ color: hoveredItem === 'about' ? 'purple' : 'black' , padding: 5}}>
              About <FaInfo />
            </Link>

          </li>
          <li>

            <Link to="/faqs" onMouseEnter={() => setHoveredItem('faqs')}
        onMouseLeave={() => setHoveredItem(null)} style={{ color: hoveredItem === 'faqs' ? 'purple' : 'black', padding: 5}}> FAQs <FaQuestionCircle /> </Link>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar
