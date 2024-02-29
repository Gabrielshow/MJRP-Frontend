import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

const FAQs = () => {
  return (
    <>
    <div>Here are some Frequently Asked Questions, FAQs</div>
    <nav>
      <ul>
         <li>
           <Link to='./How-to-use-MJRP?'> How to use MJRP?
         </Link>
         </li>
         <Link to="./is-MJRP-free-to-use?">
         <li> is MJRP free to use?</li>

         </Link>
         <Link to="./How-to-intrepret-MJRP-results?">
         <li> How to intrepret MJRP results?</li>

         </Link>
         <Link to="./How-accurate-is-MJRP">
         <li> How accurate is MJRP?</li>

         </Link>
      </ul>
    </nav>
    <Footer/>
    </>
  )
}

export default FAQs
