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

render() {
  return (


  <div id="create-project">
    <Form  onSubmit={this.handleSubmit}>
      <h3>Create New Project</h3>
      <Form.Group widths='equal' >
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
