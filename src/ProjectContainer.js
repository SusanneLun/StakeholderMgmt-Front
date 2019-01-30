import React, { Component } from 'react';
import Stakeholder from './Stakeholder'
import { Header, Container } from 'semantic-ui-react'



class ProjectContainer extends Component {



render() {
  const filteredStakeholders = this.props.stakeholders
  .filter(stakeholder => stakeholder.name && stakeholder.name.toLowerCase().includes(this.props.filter.toLowerCase()))
  return (
  <div className='ui container' id="chart-page">
    {filteredStakeholders.map(stakeholder =>
    <Stakeholder stakeholder={stakeholder}
    key={stakeholder.name}
    handleRating={this.props.handleRating}
    selectStakeholder={this.props.selectStakeholder}/>)}
    <div className='ui container'>


    </div>

  </div>
)
}
}

export default ProjectContainer
