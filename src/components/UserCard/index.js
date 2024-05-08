import './index.css'

const UserCard = props => {
  const {Item, isActive, ClickStepId} = props
  const {stepId, displayText} = Item

  const activeTabBtnClassName = isActive === stepId ? 'active-tab-btn' : ''

  let imageUrl =
    isActive === stepId
      ? 'https://res.cloudinary.com/dg3csk2jz/image/upload/v1714668016/Frame_7850first_qka974.png'
      : 'https://res.cloudinary.com/dg3csk2jz/image/upload/v1714669567/tick-circlegreen_m587zh.png'
  const changeToStep = () => {
    ClickStepId(stepId)
  }

  if (displayText === 'Date Selection') {
    imageUrl =
      'https://res.cloudinary.com/dg3csk2jz/image/upload/v1714668370/Frame_7123second_ok9a0l.png'
  } else if (displayText === 'Guests') {
    imageUrl =
      'https://res.cloudinary.com/dg3csk2jz/image/upload/v1714669280/Frame_7124third_wtxeps.png'
  } else if (displayText === 'Travel Assistance') {
    imageUrl =
      'https://res.cloudinary.com/dg3csk2jz/image/upload/v1714669360/Frame_7837fourth_ynx79b.png'
  } else if (displayText === 'Confirmation') {
    imageUrl =
      'https://res.cloudinary.com/dg3csk2jz/image/upload/v1714669411/Frame_7838fifth_uor4w0.png'
  }

  if (isActive === 'DATE_SELECTION' && displayText === 'Date Selection') {
    imageUrl =
      'https://res.cloudinary.com/dg3csk2jz/image/upload/v1714669969/Frame_7850blue2_ua7brn.png'
  } else if (isActive === 'GUESTS' && displayText === 'Guests') {
    imageUrl =
      'https://res.cloudinary.com/dg3csk2jz/image/upload/v1714669975/Frame_7850blue3_h3dj3o.png'
  } else if (
    isActive === 'TRAVEL_ASSISTANCE' &&
    displayText === 'Travel Assistance'
  ) {
    imageUrl =
      'https://res.cloudinary.com/dg3csk2jz/image/upload/v1714669981/Frame_7850blue4_ojhpvj.png'
  } else if (isActive === 'CONFIRMATION' && displayText === 'Confirmation') {
    imageUrl =
      'https://res.cloudinary.com/dg3csk2jz/image/upload/v1714669988/Frame_7850blue5_iqixeu.png'
  }

  return (
    <li className="list-item">
      <div className="usercard">
        <img src={`${imageUrl}`} alt="image1" className="new-image" />
        <p
          type="button"
          className={`Detail-Btn ${activeTabBtnClassName}`}
          onClick={changeToStep}
        >
          {displayText}
        </p>
      </div>
    </li>
  )
}

export default UserCard
