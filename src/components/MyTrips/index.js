import TripsContext from '../../context/TripsContext'

import Header from '../Header'

const MyTrips = props => (
  <TripsContext.Consumer>
    {value => {
      const {myTripsList} = value
      return (
        <div>
          <Header />
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
