import './index.css'

const TravelAssistance = props => {
  const {Item, travelValue} = props
  const {value, displayText} = Item

  return <option value={travelValue}>{displayText}</option>
}

export default TravelAssistance
