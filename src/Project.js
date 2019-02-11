import React from 'react'
import { Form, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const Project = ({ project }) => {

return (
  <Card color='purple' className={"stakeholder_card"}>
    <Card.Content >
      <Card.Header>
        <Link to={`/PI_Chart/${project.id}`}>{project.name}</Link>
        <Card.Description>{project.description}</Card.Description>
      </Card.Header>
    </Card.Content>
  </Card>

)
}




export default Project
