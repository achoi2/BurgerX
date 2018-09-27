import React from 'react'
import '../Styles/landing.css';
import musk from '../Media/musk.jpeg';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div>
      <div className="image">

      </div>
      
      <div className="container">
      </div>
      
      <div className="musk-info">
        <div className="container">
          <div className="musk-image">
            <img src={musk} alt="musk"/>
          </div>
          <div className="musk-info">
            <p>
              Is a business magnet. CEO of BurgerX
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage;