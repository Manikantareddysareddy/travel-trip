import {Component} from 'react'

import Header from '../Header'

import UserCard from '../UserCard'

import './index.css'

const stepsList = [
  {stepId: 'YOUR_DETAILS', displayText: 'Your Details'},
  {stepId: 'DATE_SELECTION', displayText: 'Date Selection'},
  {stepId: 'GUESTS', displayText: 'Guests'},
  {stepId: 'TRAVEL_ASSISTANCE', displayText: 'Travel Assistance'},
  {stepId: 'CONFIRMATION', displayText: 'Confirmation'},
]

const travelAssistanceList = [
  {value: 'car', displayText: 'Car'},
  {value: 'flight', displayText: 'Flight'},
  {value: 'bus', displayText: 'Bus'},
  {value: 'train', displayText: 'Train'},
]

class UserDetails extends Component {
  state = {NewStepList: stepsList, IsActive: stepsList[0].stepId}

  ClickStepId = Id => {
    this.setState({IsActive: Id})
  }

  render() {
    const {NewStepList, IsActive} = this.state
    return (
      <div>
        <Header />
        <div className="User-container">
          <div className="steps-container">
            <div className="ul-container">
              {NewStepList.map(eachItem => (
                <UserCard
                  Item={eachItem}
                  key={eachItem.stepId}
                  isActive={IsActive}
                  ClickStepId={this.ClickStepId}
                />
              ))}
            </div>
            {IsActive === NewStepList[0].stepId ? (
              <div>
                <h1>Your Details</h1>
                <p>Enter your name and location details</p>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default UserDetails
