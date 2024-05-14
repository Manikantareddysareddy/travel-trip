import './index.css'

const Guests = props => {
  const {
    AdultCount,
    ChildrenCount,
    InfantCount,
    DecreaseAdultCount,
    IncreaseAdultCount,
    IncreaseChildrenCount,
    DecreaseChildrenCount,
    IncreaseInfantCount,
    DecreaseInfantCount,
    EnterPrevious3,
    ProceedToNext3,
  } = props

  const DecreaseAdult = () => {
    DecreaseAdultCount()
  }

  const IncreaseAdult = () => {
    IncreaseAdultCount()
  }

  const DecreaseChildren = () => {
    DecreaseChildrenCount()
  }

  const IncreaseChildren = () => {
    IncreaseChildrenCount()
  }

  const DecreaseInfant = () => {
    DecreaseInfantCount()
  }

  const IncreaseInfant = () => {
    IncreaseInfantCount()
  }

  const EnterPrevious = () => {
    EnterPrevious3()
  }

  const onclickNext = () => {
    ProceedToNext3()
  }

  return (
    <form className="user-details-container" onSubmit={onclickNext}>
      <h1 className="details-heading">Guests</h1>
      <p className="details-para">Select your Guests</p>
      <div className="User-form-container">
        <div className="main-adult-container">
          <div className="Adult-container">
            <p className="adult-heading">Adults</p>
            <p className="adult-para">Age 13 or above</p>
          </div>
          <div className="count-container">
            <button type="button" className="minus" onClick={DecreaseAdult}>
              <img
                src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1714663793/Frame_8803_edxrgh.png"
                alt="minus"
              />
            </button>
            <p className="count-para">{AdultCount}</p>
            <button type="button" className="minus" onClick={IncreaseAdult}>
              <img
                src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1714663939/Frame_8804plus_x8huxz.png"
                alt="plus"
              />
            </button>
          </div>
        </div>
        <div className="main-adult-container">
          <div className="Adult-container">
            <p className="adult-heading">Children</p>
            <p className="adult-para">Age 2-12</p>
          </div>
          <div className="count-container">
            <button type="button" className="minus" onClick={DecreaseChildren}>
              <img
                src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1714663793/Frame_8803_edxrgh.png"
                alt="minus"
              />
            </button>
            <p className="count-para">{ChildrenCount}</p>
            <button type="button" className="minus" onClick={IncreaseChildren}>
              <img
                src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1714663939/Frame_8804plus_x8huxz.png"
                alt="plus"
              />
            </button>
          </div>
        </div>
        <div className="main-adult-container">
          <div className="Adult-container">
            <p className="adult-heading">Infants</p>
            <p className="adult-para">Under 2</p>
          </div>
          <div className="count-container">
            <button type="button" className="minus" onClick={DecreaseInfant}>
              <img
                src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1714663793/Frame_8803_edxrgh.png"
                alt="minus"
              />
            </button>
            <p className="count-para">{InfantCount}</p>
            <button type="button" className="minus" onClick={IncreaseInfant}>
              <img
                src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1714663939/Frame_8804plus_x8huxz.png"
                alt="plus"
              />
            </button>
          </div>
        </div>
        <div className="btn-container">
          <button
            type="submit"
            className="Previous-btn"
            onClick={EnterPrevious}
          >
            Previous
          </button>
          <button type="submit" className="Nxt-btn">
            Next
          </button>
        </div>
      </div>
    </form>
  )
}

export default Guests
