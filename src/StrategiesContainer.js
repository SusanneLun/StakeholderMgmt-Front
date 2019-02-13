import React from 'react'
import StrategiesCategory from './StrategiesCategory'



const StrategiesContainer = ({ categories }) => {

return (
    <div className="strategies_heading">
    <h2>Strategies</h2>
      <div className="ui-container strategy_list">
      {
      categories.map(category =>
        <StrategiesCategory category={category}
        />)
      }
      </div>
    </div>
)
}

export default StrategiesContainer
