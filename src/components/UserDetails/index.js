import {Component} from 'react'

import Header from '../Header'

import UserCard from '../UserCard'

import Guests from '../Guests'

import TravelAssistance from '../TravelAssistance'

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
  state = {
    NewStepList: stepsList,
    NewtravelAssistanceList: travelAssistanceList,
    IsActive: stepsList[0].stepId,
    NameError: false,
    startLocationError: false,
    endLocationError: false,
    NameInput: '',
    startLocation: '',
    endLocation: '',
    StartDate: '',
    EndDate: '',
    formSubmitted: false,
    StartDateError: false,
    EndDateError: false,
    AdultCount: 0,
    ChildrenCount: 0,
    InfantCount: 0,
    isChecked: false,
    travelValue: travelAssistanceList[0].value,
  }

  IncreaseAdultCount = () => {
    this.setState(prevState => ({
      AdultCount: prevState.AdultCount + 1,
    }))
  }

  DecreaseAdultCount = () => {
    const {AdultCount} = this.state
    if (AdultCount !== 0) {
      this.setState(prevState => ({
        AdultCount: prevState.AdultCount - 1,
      }))
    }
  }

  IncreaseChildrenCount = () => {
    this.setState(prevState => ({
      ChildrenCount: prevState.ChildrenCount + 1,
    }))
  }

  DecreaseChildrenCount = () => {
    const {ChildrenCount} = this.state
    if (ChildrenCount !== 0) {
      this.setState(prevState => ({
        ChildrenCount: prevState.ChildrenCount - 1,
      }))
    }
  }

  IncreaseInfantCount = () => {
    this.setState(prevState => ({
      InfantCount: prevState.InfantCount + 1,
    }))
  }

  DecreaseInfantCount = () => {
    const {InfantCount} = this.state
    if (InfantCount !== 0) {
      this.setState(prevState => ({
        InfantCount: prevState.InfantCount - 1,
      }))
    }
  }

  ClickStepId = Id => {
    this.setState({IsActive: Id})
  }

  withoutTyping = () => {
    const {NameError, NameInput} = this.state
    if (NameInput === '') {
      this.setState({NameError: true})
    } else {
      this.setState({NameError: false})
    }
  }

  withoutTyping1 = () => {
    const {
      startLocationError,

      startLocation,
    } = this.state

    if (startLocation === '') {
      this.setState({startLocationError: true})
    } else {
      this.setState({startLocationError: false})
    }
  }

  withoutTyping2 = () => {
    const {endLocationError, endLocation} = this.state

    if (endLocation === '') {
      this.setState({endLocationError: true})
    } else {
      this.setState({endLocationError: false})
    }
  }

  EnterYourName = event => {
    this.setState({NameInput: event.target.value})
  }

  EnterYourStartLocation = event => {
    this.setState({startLocation: event.target.value})
  }

  EnterYourEndLocation = event => {
    this.setState({endLocation: event.target.value})
  }

  ProceedToNext1 = () => {
    const {NewStepList} = this.state
    this.setState({IsActive: NewStepList[1].stepId})
  }

  ProceedToNext4 = () => {
    const {NewStepList} = this.state
    this.setState({IsActive: NewStepList[4].stepId})
  }

  ProceedToNext2 = () => {
    const {NewStepList} = this.state
    this.setState({IsActive: NewStepList[2].stepId})
  }

  ProceedToNext3 = () => {
    const {NewStepList} = this.state
    this.setState({IsActive: NewStepList[3].stepId})
  }

  EnterPrevious4 = () => {
    const {NewStepList} = this.state
    this.setState({IsActive: NewStepList[2].stepId})
  }

  EnterPrevious5 = () => {
    const {NewStepList} = this.state
    this.setState({IsActive: NewStepList[3].stepId})
  }

  EnterPrevious2 = () => {
    const {NewStepList} = this.state
    this.setState({IsActive: NewStepList[0].stepId})
  }

  EnterPrevious3 = () => {
    const {NewStepList} = this.state
    this.setState({IsActive: NewStepList[1].stepId})
  }

  renderUserDetails = () => {
    const {
      NewStepList,
      IsActive,
      NameError,
      endLocationError,
      startLocationError,
      NameInput,
      startLocation,
      endLocation,
    } = this.state
    return (
      <div className="user-details-container">
        <h1 className="details-heading">Your Details</h1>
        <p className="details-para">Enter your name and location details</p>
        <form className="User-form-container">
          <div className="Details-container">
            <label htmlFor="name" className="LabelEl">
              Name
            </label>
            {NameError === false ? (
              <input
                type="text"
                id="name"
                className="Details-input"
                placeholder="Enter name"
                onBlur={this.withoutTyping}
                onChange={this.EnterYourName}
                value={NameInput}
              />
            ) : (
              <input
                type="text"
                id="name"
                className="Error-Details-input"
                placeholder="Enter name"
                onChange={this.EnterYourName}
                onBlur={this.withoutTyping}
              />
            )}
            {NameError === true ? (
              <p className="Error-para">Enter your name</p>
            ) : (
              ''
            )}
          </div>

          <div className="Details-container">
            <label htmlFor="startLocation" className="LabelEl">
              Start Location
            </label>
            {startLocationError === false ? (
              <input
                type="text"
                id="startLocation"
                className="Details-input"
                placeholder="Enter start location"
                value={startLocation}
                onChange={this.EnterYourStartLocation}
                onBlur={this.withoutTyping1}
              />
            ) : (
              <input
                type="text"
                id="startLocation"
                className="Error-Details-input"
                placeholder="Enter start location"
                value={startLocation}
                onChange={this.EnterYourStartLocation}
                onBlur={this.withoutTyping1}
              />
            )}
            {startLocationError === true ? (
              <p className="Error-para">Enter your start location</p>
            ) : (
              ''
            )}
          </div>

          <div className="Details-container">
            <label htmlFor="endLocation" className="LabelEl">
              End Location
            </label>
            {endLocationError === false ? (
              <input
                type="text"
                id="endLocation"
                className="Details-input"
                placeholder="Enter end location"
                value={endLocation}
                onChange={this.EnterYourEndLocation}
                onBlur={this.withoutTyping2}
              />
            ) : (
              <input
                type="text"
                id="endLocation"
                className="Error-Details-input"
                placeholder="Enter end location"
                value={endLocation}
                onChange={this.EnterYourEndLocation}
                onBlur={this.withoutTyping2}
              />
            )}
            {endLocationError === true ? (
              <p className="Error-para">Enter your end location</p>
            ) : (
              ''
            )}
          </div>

          <button
            type="button"
            className="Nxt-btn"
            onClick={this.ProceedToNext1}
          >
            Next
          </button>
        </form>
      </div>
    )
  }

  EnterStartDate = event => {
    const {StartDate} = this.state
    this.setState({StartDate: event.target.value})
  }

  EnterEndDate = event => {
    this.setState({EndDate: event.target.value})
  }

  onStartDateType = () => {
    const {StartDate, StartDateError} = this.state

    if (StartDate === ' ') {
      console.log('Hello')
      this.setState({StartDateError: true})
    } else {
      console.log('Hi')
      this.setState({StartDateError: false})
    }
  }

  onEndDateType = () => {
    const {EndDate, EndDateError} = this.state
    if (EndDate === ' ') {
      this.setState({EndDateError: true})
    } else {
      this.setState({EndDateError: false})
    }
  }

  renderDataSelection = () => {
    const {StartDate, EndDate, StartDateError, EndDateError} = this.state
    return (
      <div className="user-details-container">
        <h1 className="details-heading">Date Selection</h1>
        <p className="details-para">Select your Start and End Date</p>
        <form className="User-form-container">
          <div className="Details-container">
            <label htmlFor="startDate" className="LabelEl">
              Start Date
            </label>
            {StartDateError === false ? (
              <div className="Details-input1">
                <input
                  type="text"
                  id="startDate"
                  className="date-input"
                  onBlur={this.onStartDateType}
                  onChange={this.EnterStartDate}
                  placeholder="dd/mm/yyyy"
                  value={StartDate}
                />
                <img
                  src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1714661439/calendar-2Calender_gbrxki.png"
                  alt="date"
                  className="date-image"
                />
              </div>
            ) : (
              <div className="Details-input1">
                <input
                  type="text"
                  id="startDate"
                  className="date-input"
                  onBlur={this.onStartDateType}
                  onChange={this.EnterStartDate}
                  placeholder="dd/mm/yyyy"
                  value={StartDate}
                />
                <img
                  src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1714661439/calendar-2Calender_gbrxki.png"
                  alt="date"
                  className="date-image"
                />
              </div>
            )}
            {StartDateError === true ? (
              <p className="Error-para">Select start date</p>
            ) : (
              ''
            )}
          </div>
          <div className="Details-container">
            <label htmlFor="endDate" className="LabelEl">
              End Date
            </label>
            {EndDateError === false ? (
              <div className="Details-input1">
                <input
                  type="text"
                  id="startDate"
                  className="date-input"
                  onBlur={this.onEndDateType}
                  onChange={this.EnterEndDate}
                  placeholder="dd/mm/yyyy"
                  value={EndDate}
                />
                <img
                  src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1714661439/calendar-2Calender_gbrxki.png"
                  alt="date"
                  className="date-image"
                />
              </div>
            ) : (
              <div className="Details-input1">
                <input
                  type="text"
                  id="startDate"
                  className="date-input"
                  onBlur={this.onEndDateType}
                  onChange={this.EnterEndDate}
                  placeholder="dd/mm/yyyy"
                  value={EndDate}
                />
                <img
                  src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1714661439/calendar-2Calender_gbrxki.png"
                  alt="date"
                  className="date-image"
                />
              </div>
            )}
            {EndDateError === true ? (
              <p className="Error-para">Select end date</p>
            ) : (
              ''
            )}
          </div>
          <div className="btn-container">
            <button
              type="submit"
              className="Previous-btn"
              onClick={this.EnterPrevious2}
            >
              Previous
            </button>
            <button
              type="submit"
              className="Nxt-btn"
              onClick={this.ProceedToNext2}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    )
  }

  ClickCheckBox = event => {
    const {isChecked} = this.state
    this.setState({isChecked: !isChecked})
  }

  onSelectTheValue = event => {
    const {travelValue} = this.state
    console.log(travelValue)
    this.setState({travelValue: event.target.value})
  }

  renderTravelAssistance = () => {
    const {isChecked, NewtravelAssistanceList, travelValue} = this.state
    return (
      <div className="user-details-container">
        <h1 className="details-heading">Travel Assistance</h1>
        <p className="details-para">Select your Travel Assistance</p>
        <div className="User-form-container">
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="TA"
              className="checkboxEl"
              onClick={this.ClickCheckBox}
            />
            <label htmlFor="TA" className="checkbox-label">
              Travel Assistance
            </label>
          </div>
          {isChecked === true ? (
            <div className="Travel-container">
              <h1 className="Travel-heading">Travel Assistance</h1>
              <select className="selectEl" onChange={this.onSelectTheValue}>
                {NewtravelAssistanceList.map(eachVehicle => (
                  <TravelAssistance
                    Item={eachVehicle}
                    key={eachVehicle.value}
                    travelValue={travelValue}
                  />
                ))}
              </select>
            </div>
          ) : (
            ''
          )}
          <div className="btn-container">
            <button
              type="submit"
              className="Previous-btn"
              onClick={this.EnterPrevious4}
            >
              Previous
            </button>
            <button
              type="submit"
              className="Nxt-btn"
              onClick={this.ProceedToNext4}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    )
  }

  ProceedToConfirm = () => {
    const {formSubmitted, IsActive} = this.state
    this.setState({formSubmitted: !formSubmitted, IsActive: ''})
  }

  renderConfirmation = () => {
    const {
      NameInput,
      startLocation,
      endLocation,
      StartDate,
      EndDate,
      AdultCount,
      ChildrenCount,
      InfantCount,
      travelValue,
    } = this.state
    return (
      <div className="user-details-container">
        <h1 className="details-heading">Confirmation</h1>
        <p className="details-para">Confirm your details</p>
        <div className="User-form-container">
          <h1 className="confirmation-heading">
            Name : <span className="spanEl">{NameInput}</span>
          </h1>
          <h1 className="confirmation-heading">
            Start Location: <span className="spanEl">{startLocation} </span>
          </h1>
          <h1 className="confirmation-heading">
            end Location: <span className="spanEl">{endLocation}</span>
          </h1>
          <h1 className="confirmation-heading">
            Start Date: <span className="spanEl">{StartDate}</span>
          </h1>
          <h1 className="confirmation-heading">
            End Date: <span className="spanEl">{EndDate} </span>
          </h1>
          <h1 className="confirmation-heading">
            Guests:{' '}
            <span className="spanEl">
              {AdultCount + ChildrenCount + InfantCount}{' '}
            </span>
          </h1>
          <h1 className="confirmation-heading">
            Travel Assistance: <span className="spanEl">{travelValue}</span>
          </h1>
          <div className="btn-container">
            <button
              type="submit"
              className="Previous-btn"
              onClick={this.EnterPrevious5}
            >
              Previous
            </button>
            <button
              type="submit"
              className="Nxt-btn"
              onClick={this.ProceedToConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {
      NewStepList,
      IsActive,
      AdultCount,
      ChildrenCount,
      InfantCount,
      formSubmitted,
    } = this.state

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
            {IsActive === NewStepList[0].stepId ? this.renderUserDetails() : ''}
            {IsActive === NewStepList[1].stepId
              ? this.renderDataSelection()
              : ''}
            {IsActive === NewStepList[2].stepId ? (
              <Guests
                AdultCount={AdultCount}
                ChildrenCount={ChildrenCount}
                InfantCount={InfantCount}
                IncreaseAdultCount={this.IncreaseAdultCount}
                DecreaseAdultCount={this.DecreaseAdultCount}
                IncreaseChildrenCount={this.IncreaseChildrenCount}
                DecreaseChildrenCount={this.DecreaseChildrenCount}
                IncreaseInfantCount={this.IncreaseInfantCount}
                DecreaseInfantCount={this.DecreaseInfantCount}
                EnterPrevious3={this.EnterPrevious3}
                ProceedToNext3={this.ProceedToNext3}
              />
            ) : (
              ' '
            )}
            {IsActive === NewStepList[3].stepId
              ? this.renderTravelAssistance()
              : ''}
            {IsActive === NewStepList[4].stepId
              ? this.renderConfirmation()
              : ''}
            {formSubmitted === true ? <h1>Make a new trip</h1> : ''}
          </div>
        </div>
      </div>
    )
  }
}

export default UserDetails
