import React, { Component } from 'react';
import { Button, Card, Input } from 'semantic-ui-react'



class Stakeholder extends Component {
  constructor() {
    super()
    this.state = {
      power: '',
      interest: ''
    }
    }

ratingField = (event) => {
  const newRatings = event.target.value
    this.setState({
      [event.target.name]: newRatings
    })
  }

onHandleRating = (event) => {
  this.props.handleRating(this.props.stakeholder, this.state)
  this.setState({
    power: '',
    interest: ''
  })
}

// newStakeholder = (event) => {
//   event.preventDefault()
//   fetch(railsAPI, {
//     method: POST,
//     headers : new Headers(),
//     body:JSON.stringify,
//     name: ,
//     title: ,
//     alias: ,
//     power: ,
//     interest: ,
//     positivity:
//   })
//       (res.json => res.json)
//       .then(console.log 'Done')
//
// }

render() {
  const { name, title, alias, ratings } = this.props.stakeholder
  return (


    <Card color='blue'>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'> {alias}</span>
      </Card.Meta>
      <Card.Description>{title}</Card.Description>
      </Card.Content>
      <h5> Power Score: {ratings && ratings[ratings.length -1].power}<input className='Input' type="text-field"
      style={{width: 70, marginLeft: 30}} placeholder='Change..'
      name="power" value={this.state.power}
      onChange={this.ratingField}/> </h5>
      <h5> Interest Score: {ratings && ratings[ratings.length -1].interest}
      <input type="text-field" style={{width: 70, marginLeft: 23}} placeholder='Change..'
      name="interest" value={this.state.interest}
      onChange={this.ratingField}/>
      <br/>
      <br/>
      <Button compact color='blue' onClick={this.onHandleRating}> Save Rating </Button></h5>


    <Card.Content extra>
      <a>

      </a>
    </Card.Content>
  </Card>
      // <h4> </h4>
      // <h7>  </h7>
      // <br/>
      // <h7> Power Score: {ratings && ratings[ratings.length -1].power}
      // <input className='Input' type="text-field"
      // style={{width: 70, margin: 20}} placeholder='Change..'
      // name="power" value={this.state.power}
      // onChange={this.ratingField}/> </h7>
      // <br/>
      // <h7> Interest Score: {ratings && ratings[ratings.length -1].interest}
      // <input type="text-field"
      // style={{width: 70, margin: 20}} placeholder='Change..'
      // name="interest" value={this.state.interest}
      // onChange={this.ratingField}/> <button class="ui button" color='olive' onClick={this.onHandleRating}> Save Rating </button> </h7>
      // <br/>
      // <br/>



  )

}
}

export default Stakeholder;
