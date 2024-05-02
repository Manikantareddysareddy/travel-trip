import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const HomePage = () => {
  const BookNewTrip = () => {
    console.log('Trip Booked')
  }
  return (
    <div>
      <Header />
      <div className="Home-container">
        <div className="content-container">
          <h1 className="home-heading">Travel. Relax. Memories.</h1>
          <p className="para">
            With travel trip you can experience new travel and the best tourist
            destinations
          </p>
          <Link to="/book-a-new-trip">
            <button type="button" className="book-btn" onClick={BookNewTrip}>
              Book a New Trip
            </button>
          </Link>
        </div>
        <div className="home-image">
          <img
            src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1714578598/image_5_Home_ogzpho.png"
            alt="home"
            className="travel-image"
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
