import React, { Component } from 'react'
import { Dropdown, Input, Button, Form, Select } from 'semantic-ui-react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

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

  handleChange = (event, value) => {
  this.setState({ [event.target.name]: event.target.value })
  }

  handleNumChange = (event, data) => {
    this.setState({ [data.name]: data.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3000/stakeholders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
        name: this.state.name,
        title: this.state.title,
        alias: this.state.alias,
        power: this.state.power,
        interest: this.state.interest,
        positivity: this.state.positivity
      }
      )
    }).then(res => res.json())
    .then(res => this.props.updateStakeholder(res))
  }


render() {
// const { value } = this.state
return (
<div >
  <Form onSubmit={this.handleSubmit}>
  <h3>Edit Stakeholder</h3>
  <Form.Group widths='equal' >
    <Form.Input name="name" fluid label='Name' type="text" onChange={event => this.handleChange(event)} placeholder="Name" value={this.state.value} />
    <Form.Input name="title" fluid label='Title' type="text" onChange={this.handleChange} placeholder="Title" value={this.state.value}/>
    <Form.Input name="alias" fluid label='Alias' type="text" onChange={this.handleChange} placeholder="Alias" value={this.state.value}/>
    <Form.Input name="note" fluid label='My Notes' type="text" onChange={this.handleChange} placeholder="My Notes" value={this.state.value}/>
    </Form.Group>
    <p>Power Rating</p>
    <Select name="power" label="Power Rating" type="number" options={options}
     onChange={this.handleNumChange} value={this.state.value} />
    <p>Interest Rating</p>
    <Select name="interest" label='Interest Rating' placeholder="Select" onChange={this.handleNumChange} options={options} value={this.state.value}/>
    <p>Support Rating</p>
    <Select name="positivity" label='Positivity Rating' placeholder="Select" onChange={this.handleNumChange} options={options} />

    <Form.Button type="submit" color="blue"> Save Stakeholder </Form.Button>

</Form>
</div>

  );
}
}

export default ManageStakeholder;
