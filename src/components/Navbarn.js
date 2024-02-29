import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaHome, FaInfo, FaQuestionCircle } from 'react-icons/fa';

const Navbarn = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  return (
    <nav className="navbar" style={{ margin: 10 }}>
      <div className="container">
        <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="JRP implementation logo" style={{}}/>
        {/* <h1>JRP implementation</h1> */}
        <ul>
          <li>
            <Link to="/" onMouseEnter={() => setHoveredItem('home')}
        onMouseLeave={() => setHoveredItem(null)} style={{ color: hoveredItem === 'home' ? 'purple' : 'black' , padding: 5}} className={hoveredItem === 'faqs' ? 'active' : ''}>
               <span class="icon-container">
                    <span class="icon">
                        <FaHome />
                    </span>
                </span>
                <span class="text">Home</span>
            </Link>

          </li>
          <li>
            <Link to="/about" onMouseEnter={() => setHoveredItem('about')}
        onMouseLeave={() => setHoveredItem(null)} style={{ color: hoveredItem === 'about' ? 'purple' : 'black' , padding: 5}} className={hoveredItem === 'faqs' ? 'active' : ''}>
               <span class="icon-container">
                    <span class="icon">
                        <FaInfo />
                    </span>
                </span>
                <span class="text">About</span>
            </Link>

          </li>
          <li>

            <Link to="/faqs" onMouseEnter={() => setHoveredItem('faqs')}
        onMouseLeave={() => setHoveredItem(null)} style={{ color: hoveredItem === 'faqs' ? 'purple' : 'black', padding: 5}} className={hoveredItem === 'faqs' ? 'active' : ''}>
               <span class="icon-container">
                    <span class="icon">
                        <FaQuestionCircle />
                    </span>
                </span>
                <span class="text">FAQs</span>
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbarn