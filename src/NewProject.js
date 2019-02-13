import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class NewProject extends Component {
  constructor() {
    super()
      this.state = {
        name: "",
        description: ""
      }
}



handleSubmit = (event) => {
  event.preventDefault();
  fetch(`http://localhost:3000/projects`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        name: this.state.name,
        description: this.state.description
      }
    )
  }).then(res => res.json())
  .then(res => this.props.addNewProject(res))
  .then(this.setState({
    name: "",
    description: ""
  }))
}

render() {
  return (


  <div id="create-project">
    <Form  className="form_popup" onSubmit={this.handleSubmit}>
      <h3>Create New Project</h3>
      <Form.Group className="form_area" widths='equal' >
        <Form.Input name="name" fluid label='Project Name' type="text" placeholder="Project Name" value={this.state.value} />
        <Form.Input name="description" fluid label='Project Description' type="text" placeholder="Project Description" value={this.state.value}/>
      </Form.Group>

      <div className={"new_project_submit"}>
      <Form.Button type="submit" color="purple"> Save Project </Form.Button>
      </div>
    </Form>
  </div>

)}
}

export default NewProject
