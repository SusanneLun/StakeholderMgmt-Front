import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import StrategiesOption from './StrategiesOption'


class StrategiesCategory extends Component {


render() {
  const { name, strategies } = this.props.category

  return (

  <div>
  <Form >
  <h3>{name}</h3>
  {
    strategies.map(option =>
    <StrategiesOption option={option} />)
  }
  </Form>
  </div>
)
}
}

export default StrategiesCategory
