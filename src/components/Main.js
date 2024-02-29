import React, {useState} from 'react';
import './Main.css';

const Main = () => {
 const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="main"> 
    <h1>Main content</h1>
    <p></p>
    <button className={`button ${isHovered ? 'hovered' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} > Run </button>
    </div>

  )
}

export default Main