import React, { Component } from 'react';
import { Button, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'



class StakeholderSupport extends Component {
  constructor() {
    super()
    this.state = {
      positivity: '',
      option: ''
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
    positivity: '',
  })
}



render() {

  const { name, alias, title, id, ratings, strategies } = this.props.stakeholder

  return (


    <Card color='purple' className={"stakeholder_card"}>
      <Card.Content >
        <Card.Header key={id}>
          <Link to={"/manage_stakeholder/" + id}>{name}</Link>
          <Card.Meta>
            <span className='date'> {alias}</span>
          </Card.Meta>
          <Card.Description>{title}</Card.Description>
        </Card.Header>

        </Card.Content>
          <div className={"stakeholder_card__input"}>
            <label> Support Score: {ratings && ratings[ratings.length -1].positivity}</label>
            <input type="text-field"
              placeholder='Change..'
              name="power" value={this.state.positivity}
              onChange={this.ratingField}/>
          </div>
          <div className={"stakeholder_card__submit"}>
            <Button compact color='purple' onClick={this.onHandleRating}> Save Rating </Button>
          </div>
          <div >
            <label> Strategies: </label>
            <p>{strategies[0] && strategies[strategies.length -1].option}</p>

          </div>
        <Card.Content extra>
    </Card.Content>
  </Card>

  )

}
}

export default StakeholderSupport;
