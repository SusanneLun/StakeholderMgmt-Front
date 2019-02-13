import React, { Component } from 'react'
import { Checkbox, Form } from 'semantic-ui-react'
import APILogin from './APILogin'
import StrategiesContainer from './StrategiesContainer'



class Strategies extends Component {

    state = {
      categories: []
    }


componentDidMount() {
  APILogin.getCategories()
  .then(categories => this.setState({ categories: categories}))
}


  render() {

  return (

    <div className="strategy_wrapper">

    <StrategiesContainer categories={this.state.categories} />

    </div>

  )
  }
}

export default Strategies
