import React, { Component } from 'react'
import StakeholderSupport from './StakeholderSupport'
import APILogin from './APILogin'
import SupportContainer from './SupportContainer'
import Strategies from './Strategies'



class SupportChart extends Component {
constructor() {
  super()
      this.state = {
        stakeholders: [],
      }
}



componentDidMount() {
  const { id } = this.props.match.params
  APILogin.getProjectStakeholders(id)
  .then(stakeholders => this.setState({ stakeholders: stakeholders}))
}



render() {

  return (

    <div className="support_chart_wrapper">
    {this.state.stakeholders.length > 0 ?
    <SupportContainer stakeholders={this.state.stakeholders}
        handleRating={this.handleRating} />
     : null}
     <Strategies />

    </div>

  )
}

}

export default SupportChart
