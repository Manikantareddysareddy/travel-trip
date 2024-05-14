import {Link} from 'react-router-dom'

import TripsContext from '../../context/TripsContext'

import Header from '../Header'

import './index.css'

const MyTrips = props => (
  <TripsContext.Consumer>
    {value => {
      const {myTripsList} = value
      console.log(myTripsList)
      return (
        <div>
          <Header />
          <div className="NoTrip-container">
            <img
              src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1715614967/Vectornotrips_istjy0.png"
              alt="no trips"
              className="NoTrips-image"
            />
            <h1 className="NoTripsHeading">No upcoming trips</h1>
            <p className="NoTripsPara">
              When you book a trip, you will see your trip details here.
            </p>
            <Link to="/book-a-new-trip" className="link-item">
              <button className="NoTripBtn" type="button">
                Make a new Trip
              </button>
            </Link>
          </div>
          <h1 className="Trip-heading1">My Trips</h1>
          <div className="Trip-container">
            <div>
              <h1 className="Trip-heading">Hello</h1>
            </div>
            <div className="Trip-Date-container">
              <p className="Trip-para">Date</p>
              <h1 className="Trip-Date-heading">StartDate to EndDate</h1>
            </div>
            <button type="button" className="Trip-btn">
              Cancel
            </button>
          </div>
        </div>
      )
    }}
  </TripsContext.Consumer>
)

export default MyTrips
