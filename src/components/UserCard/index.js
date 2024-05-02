import './index.css'

const UserCard = props => {
  const {Item, isActive, ClickStepId} = props
  const {stepId, displayText} = Item

  const activeTabBtnClassName = isActive === stepId ? 'active-tab-btn' : ''

  const changeToStep = () => {
    ClickStepId(stepId)
  }
  return (
    <li className="list-item">
      <button
        type="button"
        className={`Detail-Btn ${activeTabBtnClassName}`}
        onClick={changeToStep}
      >
        {displayText}
      </button>
    </li>
  )
}

export default UserCard
