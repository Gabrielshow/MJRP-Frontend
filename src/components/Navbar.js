import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaHome, FaInfo, FaQuestionCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';





const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  return (
    <nav className="navbar" style={{ margin: 10 }}>
      <div className="container">
        <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="JRP implementation logo" style={{}}/>
        {/* <h1>JRP implementation</h1> */}
        <ul>
          <li>
            <Link to="/" onMouseEnter={() => setHoveredItem('home')}
        onMouseLeave={() => setHoveredItem(null)} style={{ color: hoveredItem === 'home' ? 'purple' : 'black' , padding: 5}}>
           <motion.span whileHover={{ scale: 1.2 }}>
            <FaHome />
                Home
              </motion.span>
            </Link>

          </li>
          <li>
            <Link to="/about" onMouseEnter={() => setHoveredItem('about')}
        onMouseLeave={() => setHoveredItem(null)} style={{ color: hoveredItem === 'about' ? 'purple' : 'black' , padding: 5}}>
              <FaInfo />
              About
            </Link>

          </li>
          <li>

            <Link to="/faqs" onMouseEnter={() => setHoveredItem('faqs')}
        onMouseLeave={() => setHoveredItem(null)} style={{ color: hoveredItem === 'faqs' ? 'purple' : 'black', padding: 5}}> 
         <FaQuestionCircle /> </Link>
        FAQs
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar
