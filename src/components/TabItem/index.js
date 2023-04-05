import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const activeTabBtn = isActive ? 'active-tab-btn' : ''

  const updateTab = () => {
    updateTabId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabBtn}`}
        onClick={updateTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
