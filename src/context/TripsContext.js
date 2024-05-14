import React from 'react'

const TripsContext = React.createContext({
  myTripsList: [],
  AddTrips: () => {},
})

export default TripsContext
