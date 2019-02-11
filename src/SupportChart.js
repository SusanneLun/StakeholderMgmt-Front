import React, { Component } from 'react'



class SupportChart extends Component {

      this.state = {
        name: [],
        positivity: 0
      }

componentDidMount() {
  const { username, history } = this.props
  if (!username) {
  history.push('signin')
  } else {
  fetch('http://localhost:3000/stakeholders')
  .then(res => res.json())
  .then(stakeholders => this.setState({ stakeholders: stakeholders}))
}
}
  

render() {
  return (

    <table class="ui collapsing table">
      <thead>
        <tr>
          <th>Support Rating</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>Approved</td>
          <td>None</td>
        </tr>
        <tr>
          <td>Jamie</td>
          <td>Approved</td>
          <td>Requires call</td>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Denied</td>
          <td>None</td>
        </tr>
      </tbody>
      <tfoot>
        <tr><th>3 People</th>
        <th>2 Approved</th>
        <th></th>
      </tr></tfoot>
    </table>


  )
}






}
