import React, { Component } from 'react'
import APILogin from './APILogin'
import Project from './Project'
import NewProject from './NewProject'


class UserProjects extends Component {
  constructor() {
    super()
  this.state = {
    projects: []
  }
}


getUserProjects = () => {
  console.log('getting user projects')
  if (this.props.user) {
    APILogin.getUserProjects()
    .then(projects => this.setState({ projects }))
  }
}


componentDidMount () {
    this.getUserProjects()
}

render () {
  const { projects } = this.state

  return (
    <div className='project_list'>
      <h3>Your Projects:</h3>
      { projects.length === 0 && <p>You have not registered any projects yet.
        Please use the form below to register your first project.</p>}
      {
        projects.map(project =>
          <Project key={project.id} project={project} />)
      }
          <NewProject />

    </div>
  )
}
}



export default UserProjects
