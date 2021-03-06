import React, { Component } from 'react'
import { Container, Form, Select } from 'semantic-ui-react'


const options = [
  { key: "1", text: '1',value: 1 },
  { key: "2", text: '2',value: 2 },
  { key: "3", text: '3', value: 3 },
  { key: "4", text: '4', value: 4 },
  { key: "5", text: '5', value: 5 },
  { key: "6", text: '6', value: 6 },
  { key: "7", text: '7', value: 7 },
  { key: "8", text: '8', value: 8 },
  { key: "9", text: '9', value: 9 },
  { key: "10", text: '10', value: 10 },
]

class ManageStakeholder extends Component {
  constructor() {
    super()
      this.state = {
        name: "",
        title: "",
        alias: "",
        note: "",
        power: 0,
        interest: 0,
        positivity: 0
    }
  }

  componentDidMount() {
      const { id } = this.props.match.params
      fetch(`http://localhost:3000/stakeholders/${id}`)
        .then(res => res.json())
        .then(stakeholder => this.setState({ name: stakeholder.name, alias: stakeholder.alias, title: stakeholder.title,
          note: stakeholder.note, power: stakeholder.ratings[stakeholder.ratings.length -1].power,
          interest: stakeholder.ratings[stakeholder.ratings.length -1].interest,
          positivity: stakeholder.ratings[stakeholder.ratings.length -1].positivity }))
        }



  handleChange = (event, value) => {
  this.setState({ [event.target.name]: event.target.value })
  }

  handleNumChange = (event, data) => {
    this.setState({ [data.name]: data.value })

  }

  // updateStakeholder = (stakeholder, updatedRatings) => {
  //   let updatedStakeholder = {
  //     name: updatedStakeholder.name === "" ? stakeholder.name : updatedStakeholder.name,
  //     title: updatedStakeholder.title === "" ? stakeholder.title : updatedStakeholder.title,
  //     alias: updatedStakeholder.alias === "" ? stakeholder.alias : updatedStakeholder.alias,
  //     note: updatedStakeholder.note === "" ? stakeholder.note : updatedStakeholder.note
  //   }
  //   let updatedRating = {
  //     power: updatedRatings.power === "" ? stakeholder.ratings[stakeholder.ratings.length - 1].power : updatedRatings.power,
  //     interest: updatedRatings.interest === "" ? stakeholder.ratings[stakeholder.ratings.length - 1].interest : updatedRatings.interest,
  //     positivity: updatedRatings.positivity === "" ? stakeholder.ratings[stakeholder.ratings.length - 1].positivity : updatedRatings.positivity
  //   }
  // }



  handleSubmit = (stakeholder, updatedValues) => {

    let updatedValue = {
      name: updatedValues.name === "" ? stakeholder.name : updatedValues.name,
      title: updatedValues.title === "" ? stakeholder.title : updatedValues.title,
      alias:  updatedValues.alias === "" ? stakeholder.alias : updatedValues.alias,
      note:  updatedValues.note === "" ? stakeholder.note : updatedValues.note,
      power: updatedValues.power === "" ? stakeholder.ratings[stakeholder.ratings.length - 1].power : updatedValues.power,
      interest: updatedValues.interest === "" ? stakeholder.ratings[stakeholder.ratings.length - 1].interest : updatedValues.interest,
      positivity: updatedValues.positivity === "" ? stakeholder.ratings[stakeholder.ratings.length - 1].positivity : updatedValues.positivity,
  }
  const { id } = this.props.match.params
    fetch(`http://localhost:3000/stakeholders/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( updatedValue ),
    }).then(res => res.json())
    .then(stakeholder => {
      this.setState({ name: stakeholder.name, alias: stakeholder.alias, title: stakeholder.title,
        note: stakeholder.note, power: stakeholder.ratings[stakeholder.ratings.length -1].power,
        interest: stakeholder.ratings[stakeholder.ratings.length -1].interest,
        positivity: stakeholder.ratings[stakeholder.ratings.length -1].positivity
      })
    }).then(this.setState({
      name: "",
      title: "",
      alias: "",
      note: "",
      power: 0,
      interest: 0,
      positivity: 0
    }))
  }


handleDelete = (stakeholder) => {
  const { id } = this.props.match.params
  fetch(`http://localhost:3000/stakeholders/${id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ stakeholder })
  })
}




render() {

// const stakeholderId = ({ match }) => (
//   <div>
//   <p> ID: {match.params.id} </p>
//   </div>
// )

return (
<div >
  <Form  onSubmit={() => this.handleSubmit(this.props.match.params.id, this.state)} style={{marginLeft: 50, top: 80}}>
  <p></p>
  <p></p>
  <h3>View And Edit Stakeholder</h3>
  <Form.Group widths='equal' >
    <Form.Input  name="name" fluid label="Name" type="text" onChange={event => this.handleChange(event)} value={this.state.name} />
    <Form.Input name="title" fluid label='Title' type="text" onChange={this.handleChange}  value={this.state.title}/>
    <Form.Input name="alias" fluid label='Alias' type="text" onChange={this.handleChange}  value={this.state.alias}/>
    <Container text>
    <Form.Input name="note" fluid label='My Notes' type="text" onChange={this.handleChange} value={this.state.note}/>
    </Container>
    </Form.Group>
    <p>Power Rating</p>
    <Select name="power" label="Power Rating" type="number" options={options}
     onChange={this.handleNumChange} value={this.state.power} />
    <p>Interest Rating</p>
    <Select name="interest" label='Interest Rating' placeholder="Select" onChange={this.handleNumChange} options={options} value={this.state.interest}/>
    <p>Support Rating</p>
    <Select name="positivity" label='Positivity Rating' placeholder="Select" onChange={this.handleNumChange} options={options} value={this.state.positivity}/>
    <p></p>
    <div className={"new_stakeholder_submit"}>
    <Form.Button type="submit"  color="purple"> Update Stakeholder </Form.Button>
    <Form.Button type="delete"  color="red" onClick={() => this.handleDelete(this.props.match.params.id, this.state)}> Delete Stakeholder </Form.Button>
    </div>
</Form>
</div>

  );
}
}

export default ManageStakeholder;
