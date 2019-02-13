import React from 'react'
import StakeholderSupport from './StakeholderSupport'


const SupportContainer = ({ stakeholders, handleRating }) => {


  return (

    <div className="ui-container stakeholders_list" >
      {
      stakeholders.map(stakeholder =>
          <StakeholderSupport stakeholder={stakeholder}
            key={stakeholder.name}
            handleRating={handleRating}
            />)
      }

    </div>
  )
}

export default SupportContainer
